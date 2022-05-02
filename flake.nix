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
        package = pkgs.callPackage ./derivation.nix { };
      in
        rec {
          checks = packages;
          packages.windshield = package;
          defaultPackage = package;
          overlay = (final: prev: {
            windshield = package;
          });
        }
      );
}
