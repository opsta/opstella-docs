import { DefaultTheme } from "vitepress"
import defineVersionedConfig from "vitepress-versioning-plugin"

// https://vitepress.dev/re ference/site-config
export default defineVersionedConfig(
  {
    title: "Opstella Docs",
    description: "A Opstella docs",
    // base: "/opstella-docs/",
    ignoreDeadLinks: true,
    head: [["link", { rel: "icon", href: "/images/favicon.svg" }]],
    // rewrites: {
    //   "/v5/:path*": "/:path*",
    // },
    versioning: {
      latestVersion: "v5.0.0",
      sidebars: {
        sidebarContentProcessor(sidebar) {
          return sidebar
        },
      },
    },
    themeConfig: {
      versionSwitcher: {
        text: "Switch version",
      },

      nav: [
        {
          text: "Introduction",
          link: "/intro/",
          activeMatch: "^/intro/",
        },
      ],

      sidebar: {
        "/intro/": [
          {
            text: "Introduction",
            items: [
              {
                text: "What is Opstella?",
                link: "/intro/what-is-opstella",
              },
              {
                text: "Opstella Architecture",
                link: "/intro/opstella-architecture",
              },
              {
                text: "Reference Architecture",
                link: "/intro/reference-architecture",
              },
            ],
          },
        ],
        "/v4.0.0/intro/": [
          {
            text: "Introduction",
            items: [
              {
                text: "What is Opstella?",
                link: "/intro/what-is-opstella",
              },
              {
                text: "Opstella Architecture",
                link: "/intro/opstella-architecture",
              },
              {
                text: "Reference Architecture",
                link: "/intro/reference-architecture",
              },
            ],
          },
        ],
      },

      socialLinks: [
        {
          icon: "facebook",
          link: "https://www.facebook.com/opstathailand",
        },
      ],
    },
  },
  __dirname
)
