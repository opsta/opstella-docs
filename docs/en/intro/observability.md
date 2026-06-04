---
outline: deep
---

## Observability

**Opstella Observability is a unified, end-to-end monitoring layer for your entire platform, built on the Grafana LGTM stack and natively integrated into Opstella.** Every application you deploy is automatically wired into a single observability pipeline that collects metrics, logs, and traces from the infrastructure up to the application — so teams troubleshoot from one place, with one login, instead of stitching together separate tools.

<img class="light-only" alt="Opstella Observability architecture" src="/images/intro/observability/observability-architecture.svg" data-zoomable />
<img class="dark-only" alt="Opstella Observability architecture" src="/images/intro/observability/observability-architecture-dark.svg" data-zoomable />

::: tip Built on the Grafana LGTM stack
Opstella packages, deploys, and operates **Grafana, Loki, Tempo, Mimir, and Alloy** for you. Dashboards, data sources, and collection pipelines are provisioned automatically for every service and environment you create — observability works from the first deployment, with no manual setup.
:::

## <ins>**Key Capabilities**</ins>

### End-to-End Telemetry Collection

Grafana Alloy collects telemetry from every layer of the platform — node and cluster resources, Kubernetes workloads, application runtimes, and the API Gateway — and ships it to the right backend: **metrics to Mimir, logs to Loki, and traces to Tempo**. Applications instrumented with OpenTelemetry are picked up automatically, giving you a complete picture from a single request down to the container it ran in.

### Structured, Searchable Logging

All logs are collected centrally in Loki as **structured, labeled streams**. You can search and filter by service, environment, level, or any label through Grafana's Explore view, correlate log lines with the traces and metrics of the same request, and export results for further analysis. Access logs, data-modification logs, transaction logs, and error logs from your applications all flow through the same pipeline into one searchable store.

### Real-Time Metrics and Performance Monitoring

Mimir stores **Prometheus-compatible metrics** with high availability and long-term retention. Latency, error rates, request volume, and resource consumption are tracked in real time for every service and environment, and any system that exposes Prometheus metrics — including the API Gateway — plugs straight in.

### Distributed Tracing

Tempo captures **distributed traces across your microservices**, linking every hop of a transaction from the entry point through each downstream service. Teams can follow a single request end to end, see where time is spent in each step, and jump directly from a slow span to the related logs and metrics.

### Interactive Dashboards

Grafana provides **fully customizable, interactive dashboards** for every team. Opstella provisions ready-made dashboards per service and environment, and users can build and share their own — combining metrics, logs, and traces on a single pane. Access is controlled through Opstella's single sign-on, so each team sees the services they own.

### Alerting and Notification

Alert rules can be defined on any metric or log stream, with **thresholds evaluated in real time**. Notifications are delivered through email, webhook, and other channels, with severity levels, routing policies, and silencing windows — so events such as high error rates, slow response times, or unreachable services reach the right people immediately.

### Long-Term Retention and Archival

Retention is **configurable per signal to match your organization's policy** — for example, metrics kept for 365 days or longer, traces for 90 days, and logs for 90 days in hot storage. Telemetry that ages beyond the hot-retention window is **automatically tiered to S3-compatible object storage** (see [Object Storage](./object-storage)), where it remains queryable and can be kept for years at low cost. Historical data can be searched back across the full retention period.

### Audit-Ready Activity Logging

Activity in the observability layer itself is recorded — **who signed in, what was queried, what was changed, and the result** — with timestamp, action, result, client, and actor on each event. Audit and usage records can be searched on screen and exported in standard formats such as CSV and JSON for reporting.

### Fully On-Premise

The entire observability stack is deployed **inside your own network**, on the same Kubernetes infrastructure as the rest of Opstella. No telemetry, metadata, or usage data is sent to external or public networks — all collection, storage, and analysis stays on premises.

## <ins>**Standards & Compliance**</ins>

| Requirement area | How Opstella Observability addresses it |
| --- | --- |
| **Coverage** | Infrastructure metrics, application metrics, logs, and traces collected end to end across the platform and every deployed workload. |
| **Log management** | Centralized, structured, searchable log store (Loki) with label-based access; access, data-modification, transaction, and error logs in one pipeline. |
| **Tracing** | Distributed traces linking requests across microservices (Tempo), correlated with logs and metrics. |
| **Dashboards** | Interactive, user-customizable Grafana dashboards, provisioned per service and environment. |
| **Alerting** | Real-time threshold alerts via email, webhook, and other channels, with severity and routing. |
| **Retention** | Per-signal retention policies (e.g. metrics ≥ 365 days, traces ≥ 90 days, logs ≥ 90 days) with automatic archival to S3-compatible object storage. |
| **Audit** | Activity events with timestamp, action, result, client, and actor; searchable and exportable (CSV/JSON). |
| **Data sovereignty** | 100% on-premise deployment; no data leaves your network. |

::: info
Retention periods, alert thresholds, and archival policies are configurable during deployment to match your organization's standards.
:::
