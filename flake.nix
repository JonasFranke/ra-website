{
  description = "Bun dev env";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
  };

  outputs =
    inputs@{ nixpkgs, flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [ "x86_64-linux" ];

      perSystem =
        { pkgs, ... }:
        {
          devShells.default = pkgs.mkShell {
            nativeBuildInputs = with pkgs; [
              bun
              nodejs_24
              biome
              ffmpeg
            ];

            shellHook = ''
              echo "Bun $(bun --version) and Biome $(biome --version) are ready!" &&
              export BIOME_BINARY=$(which biome)
            '';
          };

          formatter = pkgs.writeShellApplication {
            name = "treefmt";
            runtimeInputs = with pkgs; [
              treefmt
              nixfmt
              biome
            ];
            text = ''
              treefmt "$@"
            '';
          };
        };
    };
}
