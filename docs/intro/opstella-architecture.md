---
outline: deep
---

## Opstella Architecture

### <ins>**Opstella Components**</ins>

![Opstella Components!](/images/intro/what-is-opstella/opstella-architecture.svg){data-zoomable}

1. **UI:** A frontend service, users will access through the Opstella portal on this component.
2. **Core:** A backend service centralizing information and communication between Opstella’s components.
3. **Clear Session:** A utility component that clears the user's browser cache upon Single Sign-On (SSO) authentication process.
4. **Workers:** A set of components that execute tasks to automate all integration components.
5. **PostgreSQL for Opstella:** A relational database management system (RDBMS) for Opstella Core.
6. **Redis:** An in-memory data store utilized as a cache for the Opstella Core component.
7. **Dapr:** A distributed application runtime that orchestrates between each Opstella component.
8. **RabbitMQ:** A message broker system that enables asynchronous communication to each Opstella component.
9. **Keycloak:** An identity and access management that provides authentication, authorization, and user management for Opstella.
10. **PostgreSQL for Keycloak:** A relational database management system (RDBMS) for Keycloak.

### <ins>**Supported Integration Components**</ins>

#### **DevOps Tools**

1. **GitLab:** A source code version control and CI/CD.
2. **ArgoCD:** A declarative, GitOps continuous delivery tool for Kubernetes applications.
3. **Harbor:** A cloud-native container registry that secures and manages container images.
4. **Headlamp:** A user-friendly web-based GUI for managing Kubernetes clusters.

#### **DevSecOps Tools**

1. **HashiCorp Vault:** Securely manages secrets, credentials, and access to sensitive data.
2. **SonarQube:** Analyzes code quality and security to detect bugs, vulnerabilities, and code smells.
3. **Trivy:** A security vulnerability scanner for container images and file systems. It is designed to identify and assess vulnerabilities in software dependencies, configurations, and operating system packages.
4. **Zed Attack Proxy (ZAP):** A web application security scanner that finds vulnerabilities in web applications.
5. **DefectDojo:** A tool to centralize and manage application security vulnerabilities.

#### **Observability Tools**

1. **Grafana Dashboard:** An interface visually presents real-time metrics, logs, and traces from various data sources.
2. **Grafana Mimir:** A highly scalable and performant backend solution for metrics data.
3. **Grafana Loki:** A log aggregation system that stores and queries logs efficiently.
4. **Grafana Tempo:** A distributed tracing backend for analyzing application performance and dependencies.
5. **Grafana Alloy:** A metrics, logs, and traces push-based collector and exporter

#### **Kubernetes Cluster**

Opstella will manage and deploy applications to the integrated Kubernetes workload cluster. Users can define deploy environments when creating a service with the following

1. **DEV** or **develop** is a development environment for developers
2. **SIT** is a system integration test environment for tester
3. **UAT** is a user acceptance test environment for QA, testers, or beta users
4. **PRE** or **pre-production** is a pre-production environment for compatibility testing before going live
5. **PRD** or **production** is the production environment for going live.

### <ins>**Opstella Application Hierarchy**</ins>

![Opstella Application Hierarchy!](/images/intro/what-is-opstella/application-hierarchy.svg){data-zoomable}

#### Organization

This is the top layer of the application hierarchy. This is usually your company name. The organization is mandatory and can not change when it is first installed and when the Opstella instance is initialized. You can only have one organization.

#### Platform

This layer under the organization is responsible for integrating with each DevSecOps tool. This can be defined as

* Each of your private or public **clouds.** For example, _VMware_, _AWS_, _GCP_, and _Azure_.
* Each of your **platforms.** For example, _On-Premise_ and _Hybrid-Cloud_. In _Hybrid-Cloud_ platform, it can consist of VMware for non-production and AWS for workload production.
* Each of your **departments** or business units. For example, _Internal_, _Marketing_, and _E-Commerce_.
* Each of your **projects.** For example, _CallCenter_, _CMS_, _Support_, and _Registration_.

#### Service

This is the layer under the platform. This can be defined as your applications, projects, or services. The service will determine the **environments**, such as _dev_ and _prd_, in which you want to deploy microservices or underlying components.

#### Component

This is the bottom line layer where you deploy the containers. This can be called microservices or batch process. Opstella will create URL endpoints on each environment as defined in the service.
