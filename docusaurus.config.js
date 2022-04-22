// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Nation3 wiki",
  tagline: "Unbundling the nation state",
  url: "https://wiki.nation3.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "/img/favicon.ico",
  organizationName: "nation3", // Usually your GitHub org/user name.
  projectName: "wiki", // Usually your repo name.
  trailingSlash: true,

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/nation3/wiki/tree/master/",
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Nation3 wiki",
        logo: {
          alt: "Nation3 Logo",
          src: "img/icon.svg",
        },
        items: [
          {
            href: "https://nation3.org",
            label: "Main site",
            position: "right",
          },
          {
            href: "https://discord.gg/rvrqvUWPDy",
            label: "Join Discord",
            position: "right",
          },
          {
            href: "https://github.com/nation3/wiki",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
