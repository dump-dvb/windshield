{ stdenv, lib }:

stdenv.mkDerivation {
  pname = "windshield";
  version = "0.1.0";

  src = ./.;

  installPhase = ''
    
    mkdir -p $out/bin
    cp -r ./* $out/bin
  '';
  meta = with lib; {
    description = "Simple website which listens to the websockets";
    homepage = "https://github.com/dump-dvb/windshield";
  };
}
