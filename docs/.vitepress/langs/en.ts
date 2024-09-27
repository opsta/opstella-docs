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
      activeMatch: "^/intro/",
    },
    {
      text: "Role and Permissions",
      link: `/${LANG_PREFIX}` + "/role-and-permissions",
      activeMatch: "^/role-and-permissions/",
    },
    {
      text: "Deploy Application",
      link: `/${LANG_PREFIX}` + "/deploy-application/deploy-on-opstella",
      activeMatch: "^/deploy-application/",
    },
    {
      text: "Usecase",
      link: `/${LANG_PREFIX}` + "/usecase/argocd-ui",
      activeMatch: "^/usecase/",
    },
    {
      text: "Troubleshoot",
      link: `/${LANG_PREFIX}` + "/troubleshoot/check-application-job",
      activeMatch: "^/troubleshoot/",
    },
  ]
}

function sidebar(): DefaultTheme.Sidebar {
  return {
    "/intro/": {
      base: "/intro",
      items: [
        {
          text: "Introduction",
          items: [
            {
              text: "Getting Started",
              link: `/${LANG_PREFIX}` + "/getting-started",
            },
            { text: "Architecture", link: `/${LANG_PREFIX}` + "/architecture" },
            { text: "Cluster", link: `/${LANG_PREFIX}` + "/cluster" },
            { text: "Definition", link: `/${LANG_PREFIX}` + "/definition" },
          ],
        },
      ],
    },
    "/role-and-permissions/": {
      base: "/role-and-permissions",
      items: [
        {
          text: "Role and Permissions",
          items: [
            { text: "Permission Inherited", link: `/${LANG_PREFIX}` + "/" },
            {
              text: "Role and Permissions",
              base: "/role-and-permissions/role",
              collapsed: true,
              link: `/${LANG_PREFIX}` + "/",
              items: [
                {
                  text: "Admin (Opstella)",
                  link: `/${LANG_PREFIX}` + "/admin-company",
                },
                {
                  text: "Admin",
                  link: `/${LANG_PREFIX}` + "/admin",
                },
                {
                  text: "Full Control",
                  link: `/${LANG_PREFIX}` + "/full-control",
                },
                {
                  text: "Production",
                  link: `/${LANG_PREFIX}` + "/production",
                },
                {
                  text: "Non Production",
                  link: `/${LANG_PREFIX}` + "/non-production",
                },
                {
                  text: "CI/CD Dev",
                  link: `/${LANG_PREFIX}` + "/cicd-dev",
                },
                {
                  text: "CI/CD Dev Infra",
                  link: `/${LANG_PREFIX}` + "/cicd-dev-infra",
                },
              ],
            },
            {
              text: "Role Recommendations",
              link: `/${LANG_PREFIX}` + "/role-commendations",
            },
            { text: "Create User", link: `/${LANG_PREFIX}` + "/create-user" },
          ],
        },
      ],
    },
    "/deploy-application": {
      base: "/deploy-application",
      items: [
        {
          text: "Deploy Application",
          items: [
            {
              text: "Prepare on Opstella",
              link: `/${LANG_PREFIX}` + "/deploy-on-opstella",
            },
            {
              text: "Deploy on Gitlab",
              link: `/${LANG_PREFIX}` + "/",
              collapsed: true,
              base: "/deploy-application/deploy-on-gitlab",
              items: [
                {
                  text: "Clone from opstella",
                  link: `/${LANG_PREFIX}` + "/clone",
                },
                {
                  text: "Push code to Opstella",
                  link: `/${LANG_PREFIX}` + "/push-code",
                },
                {
                  text: "Pipeline Workflow",
                  link: `/${LANG_PREFIX}` + "/workflow",
                },
              ],
            },
            {
              text: "Using CI",
              link: `/${LANG_PREFIX}` + "/using-ci",
            },
            {
              text: "Check Code Quality",
              link: `/${LANG_PREFIX}` + "/check-code-quality",
            },
            {
              text: "Manage Registry",
              link: `/${LANG_PREFIX}` + "/manage-registry",
            },
            {
              text: "Using CD",
              link: `/${LANG_PREFIX}` + "/using-cd",
            },
          ],
        },
      ],
    },
    "/usecase": {
      base: "/usecase",
      items: [
        {
          text: "Usecase",
          items: [
            {
              text: "ArgoCD UI",
              link: `/${LANG_PREFIX}` + "/argocd-ui",
            },
            {
              text: "Check Application Status",
              link: `/${LANG_PREFIX}` + "/check-application-status",
            },
            {
              text: "Clone Application",
              link: `/${LANG_PREFIX}` + "/clone-application",
            },
            {
              text: "Template",
              link: `/${LANG_PREFIX}` + "/",
              base: "/usecase/template",
              collapsed: true,
              items: [
                {
                  text: "Create Template (Global)",
                  link: `/${LANG_PREFIX}` + "/create-global-template",
                },
                {
                  text: "Create Template (Platform)",
                  link: `/${LANG_PREFIX}` + "/create-platform-template",
                },
              ],
            },
            {
              text: "Manage Pipeline",
              link: `/${LANG_PREFIX}` + "/manage-pipeline",
            },
            {
              text: "Update Application",
              link: `/${LANG_PREFIX}` + "/update-application",
            },
            {
              text: "Using OneChart",
              link: `/${LANG_PREFIX}` + "/using-onechart",
            },
            {
              text: "Monitor Application",
              link: `/${LANG_PREFIX}` + "/",
              base: "/usecase/monitor-application",
              collapsed: true,
              items: [
                {
                  text: "Log",
                  link: `/${LANG_PREFIX}` + "/log",
                },
                {
                  text: "Metrics",
                  link: `/${LANG_PREFIX}` + "/metrics",
                },
                {
                  text: "Tracing",
                  link: `/${LANG_PREFIX}` + "/tracing",
                },
              ],
            },
            {
              text: "Opensearch Index",
              link: `/${LANG_PREFIX}` + "/opensearch-index",
            },
            {
              text: "Using Open telemetry",
              link: `/${LANG_PREFIX}` + "/using-open-telemetry",
            },
            {
              text: "Config Application",
              link: `/${LANG_PREFIX}` + "/config-application",
            },
          ],
        },
      ],
    },
    "/troubleshoot": {
      base: "/troubleshoot",
      items: [
        {
          text: "Troubleshoot",
          items: [
            {
              text: "Check Application Job",
              link: `/${LANG_PREFIX}` + "/check-application-job",
            },
            {
              text: "Opstella Status",
              link: `/${LANG_PREFIX}` + "/opstella-status",
            },
            {
              text: "Pipeline",
              link: `/${LANG_PREFIX}` + "/",
              base: "/troubleshoot/pipeline",
              collapsed: true,
              items: [
                {
                  text: "Build Issue",
                  link: `/${LANG_PREFIX}` + "/build-issue",
                },
                {
                  text: "Pull Image Proxy",
                  link: `/${LANG_PREFIX}` + "/pull-image-proxy",
                },
                {
                  text: "Case Mount Secret",
                  link: `/${LANG_PREFIX}` + "/case-mount-secret",
                },
                {
                  text: "Library Deprecated",
                  link: `/${LANG_PREFIX}` + "/library-deprecated",
                },
                {
                  text: "Network Lost",
                  link: `/${LANG_PREFIX}` + "/network-lost",
                },
                {
                  text: "Sonar Scan Issue",
                  link: `/${LANG_PREFIX}` + "/sonar-scan-issue",
                },
              ],
            },
            {
              text: "Pod issue",
              link: `/${LANG_PREFIX}` + "/pod-issue",
            },
            {
              text: "Sync",
              link: `/${LANG_PREFIX}` + "/",
              base: "/troubleshoot/sync",
              collapsed: true,
              items: [
                {
                  text: "Sync Platform",
                  link: `/${LANG_PREFIX}` + "/sync-platform",
                },
                {
                  text: "Sync Service",
                  link: `/${LANG_PREFIX}` + "/sync-service",
                },
                {
                  text: "Sync Component",
                  link: `/${LANG_PREFIX}` + "/sync-component",
                },
                {
                  text: "Sync User",
                  link: `/${LANG_PREFIX}` + "/sync-User",
                },
              ],
            },
            {
              text: "Application Case",
              link: `/${LANG_PREFIX}` + "/",
              base: "/troubleshoot/application-case",
              collapsed: true,
              items: [
                {
                  text: "Application Ingress Incorrect",
                  link: `/${LANG_PREFIX}` + "/application-ingress-incorrect",
                },
                {
                  text: "Application Port Incorrect",
                  link: `/${LANG_PREFIX}` + "/application-port-incorrect",
                },
              ],
            },
          ],
        },
      ],
    },
  }
}
