import { createRequire } from "module"
import { defineConfig, type DefaultTheme } from "vitepress"

const LANG_PREFIX = "en"

export const en = defineConfig({
  lang: "en-US",
  description: "A Opstella docs",

  themeConfig: {
    nav: nav(),

    sidebar: {
      ...sidebar(),
    },

    socialLinks: [
      {
        icon: "facebook",
        link: "https://m.me/opstella",
      },
    ],
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "Intro",
      link: `/${LANG_PREFIX}` + "/intro/getting-started",
      activeMatch: `^/${LANG_PREFIX}/intro/`,
    },
    {
      text: "Role and Permissions",
      link: `/${LANG_PREFIX}` + "/role-and-permissions",
      activeMatch: `^/${LANG_PREFIX}/role-and-permissions/`,
    },
    {
      text: "Deploy Application",
      link: `/${LANG_PREFIX}` + "/deploy-application/deploy-on-opstella",
      activeMatch: `^/${LANG_PREFIX}/deploy-application/`,
    },
    {
      text: "Usecase",
      link: `/${LANG_PREFIX}` + "/usecase/argocd-ui",
      activeMatch: `^/${LANG_PREFIX}/usecase/`,
    },
    {
      text: "Troubleshoot",
      link: `/${LANG_PREFIX}` + "/troubleshoot/check-application-job",
      activeMatch: `^/${LANG_PREFIX} /troubleshoot/`,
    },
  ]
}

function sidebar(): DefaultTheme.Sidebar {
  return {
    "/en/intro/": {
      base: `/${LANG_PREFIX}/intro`,
      items: [
        {
          text: "Introduction",
          items: [
            {
              text: "Getting Started",
              link: "/getting-started",
            },
            { text: "Architecture", link: "/architecture" },
            { text: "Cluster", link: "/cluster" },
            { text: "Definition", link: "/definition" },
          ],
        },
      ],
    },
    "/en/role-and-permissions/": {
      base: `/${LANG_PREFIX}/role-and-permissions`,
      items: [
        {
          text: "Role and Permissions",
          items: [
            { text: "Permission Inherited", link: "/" },
            {
              text: "Role and Permissions",
              base: `/${LANG_PREFIX}/role-and-permissions/role`,
              collapsed: true,
              link: "/",
              items: [
                {
                  text: "Admin (Opstella)",
                  link: "/admin-company",
                },
                {
                  text: "Admin",
                  link: "/admin",
                },
                {
                  text: "Full Control",
                  link: "/full-control",
                },
                {
                  text: "Production",
                  link: "/production",
                },
                {
                  text: "Non Production",
                  link: "/non-production",
                },
                {
                  text: "CI/CD Dev",
                  link: "/cicd-dev",
                },
                {
                  text: "CI/CD Dev Infra",
                  link: "/cicd-dev-infra",
                },
              ],
            },
            {
              text: "Role Recommendations",
              link: "/role-commendations",
            },
            { text: "Create User", link: "/create-user" },
          ],
        },
      ],
    },
    "/en/deploy-application": {
      base: `/${LANG_PREFIX}/deploy-application`,
      items: [
        {
          text: "Deploy Application",
          items: [
            {
              text: "Prepare on Opstella",
              link: "/deploy-on-opstella",
            },
            {
              text: "Deploy on Gitlab",
              link: "/",
              collapsed: true,
              base: `/${LANG_PREFIX}/deploy-application/deploy-on-gitlab`,
              items: [
                {
                  text: "Clone from opstella",
                  link: "/clone",
                },
                {
                  text: "Push code to Opstella",
                  link: "/push-code",
                },
                {
                  text: "Pipeline Workflow",
                  link: "/workflow",
                },
              ],
            },
            {
              text: "Using CI",
              link: "/using-ci",
            },
            {
              text: "Check Code Quality",
              link: "/check-code-quality",
            },
            {
              text: "Manage Registry",
              link: "/manage-registry",
            },
            {
              text: "Using CD",
              link: "/using-cd",
            },
          ],
        },
      ],
    },
    "/en/usecase": {
      base: `/${LANG_PREFIX}/usecase`,
      items: [
        {
          text: "Usecase",
          items: [
            {
              text: "ArgoCD UI",
              link: "/argocd-ui",
            },
            {
              text: "Check Application Status",
              link: "/check-application-status",
            },
            {
              text: "Clone Application",
              link: "/clone-application",
            },
            {
              text: "Template",
              link: "/",
              base: `/${LANG_PREFIX}/usecase/template`,
              collapsed: true,
              items: [
                {
                  text: "Create Template (Global)",
                  link: "/create-global-template",
                },
                {
                  text: "Create Template (Platform)",
                  link: "/create-platform-template",
                },
              ],
            },
            {
              text: "Manage Pipeline",
              link: "/manage-pipeline",
            },
            {
              text: "Update Application",
              link: "/update-application",
            },
            {
              text: "Using OneChart",
              link: "/using-onechart",
            },
            {
              text: "Monitor Application",
              link: "/",
              base: `/${LANG_PREFIX}/usecase/monitor-application`,
              collapsed: true,
              items: [
                {
                  text: "Log",
                  link: "/log",
                },
                {
                  text: "Metrics",
                  link: "/metrics",
                },
                {
                  text: "Tracing",
                  link: "/tracing",
                },
              ],
            },
            {
              text: "Opensearch Index",
              link: "/opensearch-index",
            },
            {
              text: "Using Open telemetry",
              link: "/using-open-telemetry",
            },
            {
              text: "Config Application",
              link: "/config-application",
            },
          ],
        },
      ],
    },
    "/en/troubleshoot": {
      base: `/${LANG_PREFIX}/troubleshoot`,
      items: [
        {
          text: "Troubleshoot",
          items: [
            {
              text: "Check Application Job",
              link: "/check-application-job",
            },
            {
              text: "Opstella Status",
              link: "/opstella-status",
            },
            {
              text: "Pipeline",
              link: "/",
              base: `/${LANG_PREFIX}/troubleshoot/pipeline`,
              collapsed: true,
              items: [
                {
                  text: "Build Issue",
                  link: "/build-issue",
                },
                {
                  text: "Pull Image Proxy",
                  link: "/pull-image-proxy",
                },
                {
                  text: "Case Mount Secret",
                  link: "/case-mount-secret",
                },
                {
                  text: "Library Deprecated",
                  link: "/library-deprecated",
                },
                {
                  text: "Network Lost",
                  link: "/network-lost",
                },
                {
                  text: "Sonar Scan Issue",
                  link: "/sonar-scan-issue",
                },
              ],
            },
            {
              text: "Pod issue",
              link: "/pod-issue",
            },
            {
              text: "Sync",
              link: "/",
              base: `/${LANG_PREFIX}/troubleshoot/sync`,
              collapsed: true,
              items: [
                {
                  text: "Sync Platform",
                  link: "/sync-platform",
                },
                {
                  text: "Sync Service",
                  link: "/sync-service",
                },
                {
                  text: "Sync Component",
                  link: "/sync-component",
                },
                {
                  text: "Sync User",
                  link: "/sync-User",
                },
              ],
            },
            {
              text: "Application Case",
              link: "/",
              base: `/${LANG_PREFIX}/troubleshoot/application-case`,
              collapsed: true,
              items: [
                {
                  text: "Application Ingress Incorrect",
                  link: "/application-ingress-incorrect",
                },
                {
                  text: "Application Port Incorrect",
                  link: "/application-port-incorrect",
                },
              ],
            },
          ],
        },
      ],
    },
  }
}
