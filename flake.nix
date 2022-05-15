{
  inputs = {
    nixpkgs.url = github:NixOS/nixpkgs/nixos-unstable;

    utils = {
      url = github:numtide/flake-utils;
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = { self, nixpkgs, utils, ... }:
    utils.lib.eachDefaultSystem
    (system:
    let
        pkgs = nixpkgs.legacyPackages.${system};
        package-production = pkgs.callPackage ./derivation.nix { 
          domain = "socket.dvb.solutions";
        };
        package-staging = pkgs.callPackage ./derivation.nix { 
          domain = "socket.staging.dvb.solutions";
        };
      in
        rec {
          checks = packages;
          packages.windshield = package-production;
          packages.windshield-staging = package-staging;
          defaultPackage = package-production;
          overlay = (final: prev: {
            windshield = package-production;
            windshield-staging = package-staging;
          });
        }
      );
}
