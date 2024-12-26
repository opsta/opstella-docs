import { useRoute } from "vitepress"
import { Versioned } from "vitepress-versioning-plugin"

export function generatedSidebar(): Versioned.Sidebar {
  console.log("generatedSidebar")
  //   console.debug("route", route.path)
  //   const versionPrefix = route.path.split("/")[1]
  //   const versionList: string[] = ["v4.0.0", "v5.0.0"]

  //   let sidebarConfig: Versioned.Sidebar = {
  //     "/intro/": [
  //       {
  //         text: "Introduction",
  //         items: [
  //           {
  //             text: "What is Opstella?",
  //             link: "/what-is-opstella",
  //           },
  //           {
  //             text: "Opstella Architecture",
  //             link: "/opstella-architecture",
  //           },
  //           {
  //             text: "Reference Architecture",
  //             link: "/reference-architecture",
  //           },
  //         ],
  //       },
  //     ],
  //   }

  //   for (const version of versionList) {
  //     const versionPrefix = version === "v5.0.0" ? "" : `/${version}`

  //     sidebarConfig = {
  //       [`v4.0.0/intro/`]: [
  //         {
  //           text: "Introduction",
  //           items: [
  //             {
  //               text: "What is Opstella?",
  //               link: `/v4.0.0/intro/what-is-opstella`,
  //             },
  //             {
  //               text: "Opstella Architecture",
  //               link: `/v4.0.0/intro/opstella-architecture`,
  //             },
  //             {
  //               text: "Reference Architecture",
  //               link: `/v4.0.0/intro/reference-architecture`,
  //             },
  //           ],
  //         },
  //       ],
  //     }
  //   }

  return {}
}
