import { LocaleConfig } from "vitepress";

import { Versioned } from "vitepress-versioning-plugin";
import English from "./i18n/en";
import Thai from "./i18n/th";

export function generateLocales(): LocaleConfig<Versioned.ThemeConfig> {
    const localisations = {
        root: Thai,
        en: English,
    }
    const versionList: string[] = ["4.2.0", "4.1.0"];
    const sidebarConfig: Versioned.Sidebar = {};
    // for (const locale of Object.keys(localisations)) {
    //     const translations = localisations[locale];

    //     const linkPrefix = locale === "root" ? "" : `/${locale}`;
    //     sidebarConfig[linkPrefix + "/intro/"] = [
    //         {
    //             text: translations["intro-introduction"],
    //             items: [
    //                 {
    //                     text: translations["intro-getting-started"],
    //                     link: linkPrefix + "/intro/getting-started",
    //                 },
    //                 {
    //                     text: translations["intro-architecture"],
    //                     link: linkPrefix + "/intro/architecture",
    //                 },
    //                 {
    //                     text: translations["intro-cluster"],
    //                     link: linkPrefix + "/intro/cluster",
    //                 },
    //                 {
    //                     text: translations["intro-definition"],
    //                     link: linkPrefix + "/intro/definition",
    //                 },
    //             ],
    //         },
    //     ];

    //     sidebarConfig[linkPrefix + "/role-and-permissions/"] = [
    //         {
    //             text: translations["role-and-permissions"],
    //             base: linkPrefix + "/role-and-permissions",
    //             items: [
    //                 {
    //                     text: translations["role-and-permissions-permission-inherited"],
    //                     link: "/permission-inherited",
    //                 },
    //                 {
    //                     text: translations["role-and-permissions"],
    //                     base: linkPrefix + "/role-and-permissions/role",
    //                     collapsed: true,
    //                     link: "/",
    //                     items: [
    //                         {
    //                             text: translations["role-and-permissions-role-admin-opstella"],
    //                             link: "/admin-company",
    //                         },
    //                         {
    //                             text: translations["role-and-permissions-role-admin-platform"],
    //                             link: "/admin",
    //                         },
    //                         {
    //                             text: translations["role-and-permissions-role-full-control"],
    //                             link: "/full-control",
    //                         },
    //                         {
    //                             text: translations["role-and-permissions-role-production"],
    //                             link: "/production",
    //                         },
    //                         {
    //                             text: translations["role-and-permissions-role-non-production"],
    //                             link: "/non-production",
    //                         },
    //                         {
    //                             text: translations["role-and-permissions-role-dev-cicd-infra"],
    //                             link: "/cicd-dev-infra",
    //                         },
    //                         {
    //                             text: translations["role-and-permissions-role-dev-cicd"],
    //                             link: "/cicd-dev",
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     text: translations["role-and-permissions-role-recommendations"],
    //                     link: "/role-commendations",
    //                 },
    //                 {
    //                     text: translations["role-and-permissions-create-user"],
    //                     link: "/create-user",
    //                 },
    //             ],
    //         },
    //     ];

    //     sidebarConfig[linkPrefix + "/deploy-application/"] = [
    //         {
    //             text: translations["deploy-application"],
    //             items: [
    //                 {
    //                     text: translations["deploy-prepare-on-opstella"],
    //                     link: linkPrefix + "/deploy-application/deploy-on-opstella",
    //                 },
    //                 {
    //                     text: translations["deploy-deploy-on-gitlab"],
    //                     link: "/",
    //                     collapsed: true,
    //                     base: linkPrefix + "/deploy-application/deploy-on-gitlab",
    //                     items: [
    //                         {
    //                             text: translations["deploy-clone-from-opstella"],
    //                             link: "/clone",
    //                         },
    //                         {
    //                             text: translations["deploy-push-code"],
    //                             link: "/push-code",
    //                         },
    //                         {
    //                             text: translations["deploy-workflow"],
    //                             link: "/workflow",
    //                         },
    //                     ]
    //                 },

    //                 {
    //                     text: translations["deploy-using-ci"],
    //                     link: linkPrefix + "/deploy-application/using-ci",
    //                 },
    //                 {
    //                     text: translations["deploy-check-code-quality"],
    //                     link: linkPrefix + "/deploy-application/check-code-quality",
    //                 },
    //                 {
    //                     text: translations["deploy-manage-registry"],
    //                     link: linkPrefix + "/deploy-application/manage-registry",
    //                 },
    //                 {
    //                     text: translations["deploy-using-cd"],
    //                     link: linkPrefix + "/deploy-application/using-cd",
    //                 }
    //             ],
    //         },
    //     ];

    //     sidebarConfig[linkPrefix + "/usecase/"] = [
    //         {
    //             text: translations["usecase"],
    //             base: linkPrefix + "/usecase",
    //             items: [
    //                 {
    //                     text: translations["usecase-argocd-ui"],
    //                     link: "/argocd-ui",
    //                 },
    //                 {
    //                     text: translations["usecase-check-application-status"],
    //                     link: "/check-application-status",
    //                 },
    //                 {
    //                     text: translations["usecase-clone-application"],
    //                     link: "/clone-application",
    //                 },
    //                 {
    //                     text: translations["usecase-template"],
    //                     link: "/",
    //                     collapsed: true,
    //                     base: linkPrefix + "/usecase/template",
    //                     items: [
    //                         {
    //                             text: translations["usecase-create-template-global"],
    //                             link: "/create-global-template",
    //                         },
    //                         {
    //                             text: translations["usecase-create-template-platform"],
    //                             link: "/create-platform-template",
    //                         },
    //                     ]
    //                 },
    //                 {
    //                     text: translations["usecase-manage-pipeline"],
    //                     link: "/manage-pipeline",
    //                 },
    //                 {
    //                     text: translations["usecase-update-application"],
    //                     link: "/update-application",
    //                 },
    //                 {
    //                     text: translations["usecase-using-onechart"],
    //                     link: "/using-onechart",
    //                 },
    //                 {
    //                     text: translations["usecase-monitoring-application"],
    //                     link: "/",
    //                     base: linkPrefix + "/usecase/monitor-application",
    //                     collapsed: true,
    //                     items: [
    //                         {
    //                             text: "Log",
    //                             link: "/log",
    //                         },
    //                         {
    //                             text: "Metrics",
    //                             link: "/metrics",
    //                         },
    //                         {
    //                             text: "Tracing",
    //                             link: "/tracing",
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     text: translations["usecase-opensearch-index"],
    //                     link: "/opensearch-index",
    //                 },
    //                 {
    //                     text: translations["usecase-using-open-telemetry"],
    //                     link: "/using-open-telemetry",
    //                 },
    //                 {
    //                     text: translations["usecase-config-application"],
    //                     link: "/config-application",
    //                 },
    //             ],
    //         },
    //     ];

    //     sidebarConfig[linkPrefix + "/troubleshoot/"] = [
    //         {
    //             text: translations["troubleshoot"],
    //             base: linkPrefix + "/troubleshoot",
    //             items: [
    //                 {
    //                     text: translations["troubleshoot-check-application-job"],
    //                     link: "/check-application-job",
    //                 },
    //                 {
    //                     text: translations["troubleshoot-opstella-status"],
    //                     link: "/opstella-status",
    //                 },
    //                 {
    //                     text: translations["troubleshoot-pipeline"],
    //                     link: "/",
    //                     base: linkPrefix + "/troubleshoot/pipeline",
    //                     collapsed: true,
    //                     items: [
    //                         {
    //                             text: translations["troubleshoot-pipeline-structure"],
    //                             link: "/pipeline-structure",
    //                         },
    //                         {
    //                             text: translations["troubleshoot-build-issue"],
    //                             link: "/build-issue",
    //                         },
    //                         {
    //                             text: translations["troubleshoot-pull-image-proxy"],
    //                             link: "/pull-image-proxy",
    //                         },
    //                         {
    //                             text: translations["troubleshoot-mount-secret"],
    //                             link: "/case-mount-secret",
    //                         },
    //                         {
    //                             text: translations["troubleshoot-library-deprecated"],
    //                             link: "/library-deprecated",
    //                         },
    //                         {
    //                             text: translations["troubleshoot-network-lost"],
    //                             link: "/network-lost",
    //                         },
    //                         {
    //                             text: translations["troubleshoot-sonar-scan-issue"],
    //                             link: "/sonar-scan-issue",
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     text: translations["troubleshoot-pod-issue"],
    //                     link: "/pod-issue",
    //                 },
    //                 {
    //                     text: translations["troubleshoot-sync"],
    //                     link: "/",
    //                     base: linkPrefix + "/troubleshoot/sync",
    //                     collapsed: true,
    //                     items: [
    //                         {
    //                             text: translations["troubleshoot-sync-platform"],
    //                             link: "/sync-platform",
    //                         },
    //                         {
    //                             text: translations["troubleshoot-sync-service"],
    //                             link: "/sync-service",
    //                         },
    //                         {
    //                             text: translations["troubleshoot-sync-component"],
    //                             link: "/sync-component",
    //                         },
    //                         {
    //                             text: translations["troubleshoot-sync-user"],
    //                             link: "/sync-user",
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     text: translations["troubleshoot-app-case"],
    //                     link: "/",
    //                     base: linkPrefix + "/troubleshoot/application-case",
    //                     collapsed: true,
    //                     items: [
    //                         {
    //                             text: translations["troubleshoot-app-ingress-incorrect"],
    //                             link: "/application-ingress-incorrect",
    //                         },
    //                         {
    //                             text: translations["troubleshoot-app-port-incorrect"],
    //                             link: "/application-port-incorrect",
    //                         },
    //                     ],
    //                 },
    //             ],
    //         },
    //     ];
    // }

    const localeConfig: LocaleConfig<Versioned.ThemeConfig> = {};
    for (const version of versionList) {
        console.log("version:", version)
        const versionPrefix = version === "4.2.0" ? "" : `/${version}`
        console.log("versionPrefix", versionPrefix)

        for (const locale of Object.keys(localisations)) {
            const translations = localisations[locale];
            const langPrefix = locale === "root" ? "" : `/${locale}`

            localeConfig[locale] = {
                label: translations[locale],
                lang: locale === "root" ? "th" : locale,
                link: langPrefix + `${versionPrefix}`,
                themeConfig: {
                    nav: [
                        {
                            text: translations["intro"],
                            link: langPrefix + versionPrefix + "/intro/getting-started",
                            activeMatch: `^${langPrefix}/intro/`,
                        },
                        {
                            text: translations["role-and-permissions"],
                            link: langPrefix + versionPrefix + "/role-and-permissions/permission-inherited",
                            activeMatch: `^${langPrefix}/role-and-permissions/`,
                        },
                        {
                            text: translations["deploy-application"],
                            link: langPrefix + "/deploy-application/deploy-on-opstella",
                            activeMatch: `^${langPrefix}/deploy-application/`,
                        },
                        {
                            text: translations["usecase"],
                            link: langPrefix + "/usecase/argocd-ui",
                            activeMatch: `^${langPrefix}/usecase/`,
                        },
                        {
                            text: translations["troubleshoot-text"],
                            link: langPrefix + "/troubleshoot/check-application-job",
                            activeMatch: `^${langPrefix}/troubleshoot/`,
                        },
                    ],
                    sidebar: sidebarConfig,
                    socialLinks: [
                        {
                            icon: "facebook",
                            link: "https://m.me/opstella",
                        },
                    ],
                },
            };
        }
    }
    console.log(localeConfig)

    return localeConfig;
}