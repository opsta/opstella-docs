---
outline: deep
---

## CI/CD & Automated Testing

**Opstella ships every application through an enterprise-ready CI/CD pipeline with automated testing and quality gates built in — not bolted on.** Pipelines are generated from secure, pre-configured templates the moment a service is created, so every commit is built, tested, scanned, and deployed the same disciplined way across all environments, from development to production.

<img class="light-only" alt="Opstella CI/CD pipeline with automated testing" src="/images/intro/cicd-automated-testing/pipeline-flow.svg" data-zoomable />
<img class="dark-only" alt="Opstella CI/CD pipeline with automated testing" src="/images/intro/cicd-automated-testing/pipeline-flow-dark.svg" data-zoomable />

::: tip Powered by GitLab CI, SonarQube, and ArgoCD
Opstella provisions **GitLab CI/CD** pipelines from enterprise templates, wires quality analysis into **SonarQube**, security scanning into **Trivy**, **ZAP**, and **DefectDojo**, and delivers through **ArgoCD** with GitOps — all pre-integrated and managed from the Opstella portal.
:::

## <ins>**Key Capabilities**</ins>

### Pipeline Templates, Ready on Day One

Every new component gets a **complete pipeline from a curated template** — build, test, scan, package, and deploy stages pre-wired for your language and framework. Teams start from a proven baseline instead of writing CI configuration from scratch, and platform-wide improvements roll out by updating the template.

### Automated Unit and Integration Testing

Unit tests and integration tests run **automatically inside the pipeline on every commit and merge request**. A failing test stops the pipeline before anything reaches an environment, and because tests execute on every change, they stay continuously in sync with the codebase as it evolves — there is no separate, manually triggered test cycle to fall behind.

### Test Coverage Quality Gates

Pipelines publish test results and coverage to **SonarQube**, where **quality gates enforce a minimum test-coverage threshold** — for example, requiring at least 80% line coverage — alongside rules for bugs, vulnerabilities, and code smells. Code that does not meet the gate fails the pipeline and cannot be promoted, making coverage a hard requirement rather than a report nobody reads.

### Scenario and End-to-End Test Stages

Beyond unit and integration tests, pipelines support dedicated stages for **scenario, end-to-end, and performance testing** against deployed environments such as SIT and UAT. Test stages are first-class pipeline citizens: versioned with the code, executed automatically, and gating promotion to the next environment.

### Security Scanning in Every Build

Each pipeline run performs **static code analysis (SonarQube), container image scanning (Trivy), and dynamic application scanning (ZAP)**, with findings collected into the centralized **DefectDojo** security dashboard. Vulnerabilities surface at build time — when they are cheapest to fix — not in a quarterly audit.

### GitOps Delivery Across Environments

Deployments are driven by **ArgoCD using GitOps**: the desired state of every environment lives in Git, and promotion through **DEV, SIT, UAT, PRE, and PRD** is a controlled, auditable change. Every deployment is traceable to a commit, a pipeline run, and a set of passing tests — and rolling back means reverting a revision, not reconstructing state by hand.

## <ins>**Standards & Compliance**</ins>

| Requirement area | How Opstella CI/CD addresses it |
| --- | --- |
| **Automated testing** | Unit and integration tests execute automatically in CI on every change; failures block delivery. |
| **Coverage enforcement** | SonarQube quality gates enforce configurable coverage thresholds (e.g. ≥ 80% line coverage). |
| **Scenario testing** | Dedicated pipeline stages for scenario / end-to-end tests against integrated environments. |
| **Test maintenance** | Tests run on every commit, keeping suites aligned with system changes continuously. |
| **Security** | SAST, container, and DAST scanning on every build, centralized in DefectDojo. |
| **Traceability** | GitOps delivery — every deployment auditable to commit, pipeline, and test evidence. |
| **Environments** | Consistent promotion across DEV, SIT, UAT, PRE, and PRD. |

::: info
Coverage thresholds, quality-gate rules, and pipeline stages are configured per organization policy during onboarding.
:::
