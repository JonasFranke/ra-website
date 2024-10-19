/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.heco-textilverlag.com',
        pathname: '/themes/Frontend/SaumViebahn/frontend/_public/src/img/logos/HECO_LOGO_dunkelgrau_bronze_dunkel.png',
      },
      {
        protocol: 'https',
        hostname: 'www.teba.de',
        pathname: '/images/teba_logo.svg',
      },
      {
        protocol: 'https',
        hostname: 'www.christianfischbacher.com',
        pathname: '/ch/en/skin/frontend/digitalhome/christianfischbacher_ch_en/images/LOGO_YD_desktop.svg',
      },
      {
        protocol: 'https',
        hostname: 'www.ado-goldkante.de',
        pathname: '/typo3conf/ext/ado_goldkante/Resources/Public/Images/ado-logo.png',
      },
    ]
  }
};

export default config;
