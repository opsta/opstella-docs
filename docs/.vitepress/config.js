import defineVersionedConfig from "vitepress-versioning-plugin";
import { generateLocales } from "./generateLocales.mts";

// https://vitepress.dev/re ference/site-config
export default defineVersionedConfig({
  title: "Opstella Docs",
  description: "A Opstella docs",
  rewrites: {
    "translated/th/:rest*": ":rest*",
    "translated/:lang/:rest*": ":lang/:rest*",
    // "translated/:lang/(.*)": ":lang/(.*)",
  },
  ignoreDeadLinks: true,
  head: [["link", { rel: "icon", href: "/images/favicon.svg" }]],
  cleanUrls: true,
  versioning: {
    latestVersion: "4.2.0",
    rewrites: {
      localePrefix: "translated",
    },
    sidebars: {
      sidebarContentProcessor(sidebar) {
        return sidebar;
      },
    }
  },
  locales: generateLocales(),

}, __dirname)
