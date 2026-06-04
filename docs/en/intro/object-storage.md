---
outline: deep
---

## Object Storage

**Opstella Object Storage is an S3-compatible storage service for the whole platform, powered by SeaweedFS and deployed fully on-premise.** It gives every component — observability archives, backups, file exchange, and your own applications — one standard, durable place to keep data, with lifecycle policies that move aging data to cheap storage automatically instead of letting it fill up expensive hot tiers.

<img class="light-only" alt="Opstella Object Storage architecture" src="/images/intro/object-storage/object-storage-architecture.svg" data-zoomable />
<img class="dark-only" alt="Opstella Object Storage architecture" src="/images/intro/object-storage/object-storage-architecture-dark.svg" data-zoomable />

::: tip Built on SeaweedFS — or bring your own
Opstella packages and operates [SeaweedFS](https://github.com/seaweedfs/seaweedfs) (Apache-2.0 licensed) as the platform's default object store. If your organization already runs S3-compatible storage — a storage appliance, MinIO, or a private cloud service — Opstella integrates with it directly instead; every consumer speaks the standard S3 API.
:::

## <ins>**Key Capabilities**</ins>

### Standard S3-Compatible API

All access goes through the **Amazon S3 API** — buckets, objects, multipart uploads, presigned URLs, versioning, and access keys — so any S3-aware tool or library works out of the box. Applications need no proprietary SDK, and storage can be swapped or migrated without changing a line of application code.

### Long-Term Archive for Observability

Object Storage is the **long-term tier behind Loki, Mimir, and Tempo**. Logs, metrics, and traces that age beyond the hot-retention window are moved here automatically and remain queryable from Grafana — letting you keep a year or more of history at a fraction of the cost of block storage (see [Observability](./observability)).

### Lifecycle and Retention Policies

Buckets can be configured with **lifecycle rules** that expire or transition objects after a defined age — for example, automatically relocating operational data older than 365 days into archive buckets. Retention is enforced by policy rather than by manual housekeeping, which keeps storage usage predictable and auditable.

### Durability and High Availability

Data is **replicated across volume servers and nodes**, with configurable replication levels per bucket. The cluster tolerates disk and node failures transparently, scales horizontally by adding volume servers, and is designed for billions of small files as comfortably as large archives.

### Access Control and Security

Access is governed by **per-application access keys and bucket-level policies**, so each component or team reads and writes only its own data. Traffic is served over TLS, and all data stays inside your network — nothing is replicated to any external or public service.

### No Licensing Limits

SeaweedFS is **open source under the Apache-2.0 license** — there are no per-object, per-gigabyte, or per-request license fees, and no caps on the number of buckets, objects, or API calls throughout the life of the platform.

## <ins>**Standards & Compliance**</ins>

| Requirement area | How Opstella Object Storage addresses it |
| --- | --- |
| **Interface** | Standard Amazon S3 API; compatible with any S3-aware application or tool. |
| **Data archival** | Automatic tiering of logs, metrics, traces, and application data past configurable age thresholds (e.g. 365 days). |
| **Availability** | Replicated, horizontally scalable cluster tolerant of disk and node failures. |
| **Security** | Per-application access keys, bucket policies, TLS in transit, fully on-premise. |
| **Flexibility** | Works as bundled SeaweedFS or with customer-provided S3-compatible storage. |
| **Licensing** | Apache-2.0 open source; no usage-based fees or object-count limits. |

::: info
Replication levels, lifecycle rules, and bucket layouts are designed during deployment to match your data-retention and disaster-recovery requirements.
:::
