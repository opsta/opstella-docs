import { defineConfig } from "vitepress"

// https://vitepress.dev/re ference/site-config
export default defineConfig({
  title: "Opstella Docs",
  description: "A Opstella docs",
  base: "/opstella-document/",
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: { src: "/images/opstella-logo.svg", width: 24, height: 24 },
    search: {
      provider: "local",
    },
    nav: [
      {
        text: "Intro",
        link: "/intro/getting-started",
        activeMatch: "^/intro/",
      },
      {
        text: "Role and Permissions",
        link: "/role-and-permissions",
        activeMatch: "^/role-and-permissions/",
      },
      {
        text: "Deploy Application",
        link: "/deploy-application/deploy-on-opstella",
        activeMatch: "^/deploy-application/",
      },
      {
        text: "Usecase",
        link: "/usecase/argocd-ui",
        activeMatch: "^/usecase/",
      },
      {
        text: "Troubleshoot",
        link: "/troubleshoot/check-application-job",
        activeMatch: "^/troubleshoot/",
      },
    ],
    sidebar: {
      "/intro/": {
        base: "/intro",
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
      "/role-and-permissions/": {
        base: "/role-and-permissions",
        items: [
          {
            text: "Role and Permissions",
            items: [
              { text: "Permission Inherited", link: "/" },
              {
                text: "Role and Permissions",
                base: "/role-and-permissions/role",
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
      "/deploy-application": {
        base: "/deploy-application",
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
                base: "/deploy-application/deploy-on-gitlab",
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
      "/usecase": {
        base: "/usecase",
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
                base: "/usecase/template",
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
                base: "/usecase/monitor-application",
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
      "/troubleshoot": {
        base: "/troubleshoot",
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
                base: "/troubleshoot/pipeline",
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
                base: "/troubleshoot/sync",
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
                base: "/troubleshoot/application-case",
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
    },

    socialLinks: [
      {
        icon: "facebook",
        link: "https://m.me/opstella",
      },
    ],
  },
})
