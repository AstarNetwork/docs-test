// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion
const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Astar Docs",
  tagline:
    "Welcome! Here you will find documentation on how to develop dApps on Astar. Something like this",
  url: "https://docs.astar.network",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/fav.png",
  organizationName: "AstarNetwork", // Usually your GitHub org/user name.
  projectName: "astar-docs", // Usually your repo name.
  plugins: ["docusaurus-plugin-sass"],
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
  clientModules: [require.resolve("./static/astarAi.js")],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/AstarNetwork/astar-docs/tree/main/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/AstarNetwork/astar-docs/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  //Enable multilanguage support. Portuguese added as first language
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja", "es"],
    localeConfigs: {
      en: { htmlLang: "en-US" },
      ja: {},
    },
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "Astar",
          src: "img/astar-header-light.svg",
          srcDark: "img/astar-header-dark.svg",
        },
        items: [
          {
            type: "doc",
            docId: "getting-started",
            position: "left",
            label: "Docs",
          },
          {
            to: "https://",
            label: "Website",
            position: "left",
          },
          {
            to: "https://portal.astar.network/",
            label: "Portal",
            position: "left",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          // {
          //   html: ""
          // },
          {
            title: "Solutions",
            items: [
              {
                label: "Solutions",
                href: "https://portal.astar.network/astar-zkevm",
              },
              {
                label: "Startale Labs",
                href: "https://portal.astar.network/astar-zkevm",
              },
              {
                label: "Astar Japan Lab",
                href: "https://portal.astar.network/astar-zkevm",
              },
              {
                label: "Astar 2.0",
                href: "https://portal.astar.network/astar-zkevm",
              },
            ],
          },
          {
            title: "Use",
            items: [
              {
                label: "Portal",
                href: "https://portal.astar.network/astar-zkevm",
              },
              {
                label: "dApp Staking",
                href: "https://portal.astar.network/astar-zkevm",
              },
              {
                label: "Ecosystem",
                href: "https://twitter.com/AstarNetwork",
              },
            ],
          },
          {
            title: "Developer",
            items: [
              {
                label: "Start Building",
                href: "https://astar.network/blog",
              },
              {
                label: "Docs",
                to: "https://github.com/AstarNetwork",
              },
            ],
          },
          {
            title: "Explore",
            items: [
              {
                label: "Community",
                href: "https://astar.network/blog",
              },
              {
                label: "Blog",
                href: "https://github.com/AstarNetwork",
              },
              {
                label: "Community",
                href: "https://astar.network/blog",
              },
              {
                label: "Become our Agent",
                href: "https://astar.network/blog",
              },
              {
                label: "Discord Community",
                href: "https://astar.network/blog",
              },
              {
                label: "Astar Forum",
                href: "https://astar.network/blog",
              },
            ],
          },
          {
            title: "About",
            items: [
              {
                label: "Brand Asset Kit",
                href: "https://astar.network/blog",
              },
              {
                label: "Careers",
                href: "https://github.com/AstarNetwork",
              },
              {
                label: "Contact Us",
                href: "https://github.com/AstarNetwork",
              },
            ],
          },
          {
            title: "Legal",
            items: [
              {
                label: "Privacy Policy",
                href: "https://astar.network/blog",
              },
              {
                label: "Terms of Use",
                href: "https://github.com/AstarNetwork",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Astar Developers Hub.`,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "S7S4T6Q4KC",

        // Public API key: it is safe to commit it
        apiKey: "4eacb78946fd33fdd34c5954c4658a7b",

        indexName: "astar",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: "astar\\.network",

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        //... other Algolia params
      },
    }),
};

module.exports = config;
