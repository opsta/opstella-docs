---
outline: deep
---

## Identity & Access

**Opstella centralizes identity for the entire platform with single sign-on powered by Keycloak.** One account, managed in one place, signs in to the Opstella portal and every integrated tool — GitLab, Grafana, ArgoCD, Harbor, SonarQube, and more — with role-based access deciding exactly what each person can see and do.

<img class="light-only" alt="Opstella Identity and Access architecture" src="/images/intro/identity-and-access/sso-architecture.svg" data-zoomable />
<img class="dark-only" alt="Opstella Identity and Access architecture" src="/images/intro/identity-and-access/sso-architecture-dark.svg" data-zoomable />

::: tip Built on Keycloak
Opstella packages, deploys, and operates [Keycloak](https://www.keycloak.org/) as the platform identity provider, pre-integrated with every DevSecOps tool over **OpenID Connect** — so authentication and authorization behave consistently across the whole platform from day one.
:::

## <ins>**Key Capabilities**</ins>

### Single Sign-On Across All Tools

Users authenticate **once** and move between the Opstella portal and every integrated tool without re-entering credentials. Sessions are managed centrally: signing out, disabling an account, or revoking a session takes effect everywhere at once — there are no per-tool accounts left behind when someone changes role or leaves.

### Web-Based User Management

Administrators **create, edit, and delete user accounts entirely through the web interface**, defining at minimum a username and password for each user. Password policies — length, complexity, expiry, and reuse rules — are enforced centrally, and one-time passwords (OTP) can be required for sensitive roles.

### Role-Based Access Control

Access follows **roles, not individuals**. Opstella ships role levels from full administrator to read-only user (see [Role and Permissions](../role-and-permissions/)), and each role maps to specific permissions across platforms, services, environments, and tools — so a developer can deploy to non-production while only operations can touch production.

### Sign-In Event Logging

Every authentication event is recorded: **sign-in and sign-out time, the user's IP address, and the browser or client used** — along with failures, password changes, and administrative actions on accounts. Events are viewable and searchable in the administration console, exportable, and can be shipped to the platform's centralized logging for long-term, tamper-evident retention (see [Observability](./observability)).

### Enterprise Directory Federation

Existing corporate identities plug in through **LDAP / Active Directory federation or SAML**, so users keep their organization credentials while Opstella enforces platform roles. Onboarding a new team member becomes a directory-group assignment instead of a string of tool-by-tool account requests.

## <ins>**Standards & Compliance**</ins>

| Requirement area | How Opstella Identity & Access addresses it |
| --- | --- |
| **User management** | Create, edit, and delete users via web UI; username/password as the minimum credential set. |
| **Access control** | Role-based access control with administrator and user role levels across all tools. |
| **Authentication standards** | OpenID Connect and SAML 2.0; optional OTP second factor; central password policies. |
| **Sign-in audit** | Sign-in/sign-out timestamps, IP address, and browser recorded per event; searchable and exportable. |
| **Session governance** | Central session revocation; immediate platform-wide effect of account changes. |
| **Federation** | LDAP / Active Directory and SAML integration with existing enterprise directories. |

::: info
Role models, password policies, and event-retention periods are configured during deployment to match your organization's security standards.
:::
