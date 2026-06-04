---
outline: deep
---

## Managed File Transfer

**Opstella Managed File Transfer is a secure SFTP service for exchanging files with partners and external systems, powered by SFTPGo and deployed Kubernetes-native alongside the rest of the platform.** Partner users, their folders, and their permissions are managed through a web console and a full REST API — and every file that arrives can automatically trigger the downstream pipeline that processes it.

<img class="light-only" alt="Opstella Managed File Transfer architecture" src="/images/intro/managed-file-transfer/mft-architecture.svg" data-zoomable />
<img class="dark-only" alt="Opstella Managed File Transfer architecture" src="/images/intro/managed-file-transfer/mft-architecture-dark.svg" data-zoomable />

::: tip Built on SFTPGo
Opstella packages, deploys, and operates [SFTPGo](https://sftpgo.com/) — a proven, event-driven SFTP server — as stateless replicas on Kubernetes, with its transfer logs and metrics wired straight into the platform's [Observability](./observability) stack.
:::

## <ins>**Key Capabilities**</ins>

### SFTP User Management — Web and API

Administrators can **view, create, and edit SFTP users** through the built-in web console, or drive everything programmatically through a complete **REST API** — ideal for integrating user provisioning into your own administration screens and business workflows. Each user gets independent credentials (password and/or SSH public key) and an isolated view of the file space.

### Per-Path Permissions with Virtual Folders

Each partner sees only the folders they are entitled to. **Virtual folders** map any backend location into a user's space — private or shared — and **permissions are granted per directory**: list, upload, download, overwrite, delete, and rename can each be allowed or denied path by path. Typical layouts dedicate separate folders per data type — for example *Transaction*, *Incomplete*, *Enrollment*, *DDCC*, *Offline*, and *Adjustment* — each with exactly the access the counterpart needs.

### Flexible Storage Backends

Files can be stored on **S3-compatible object storage** (see [Object Storage](./object-storage)), network file systems, or local volumes — per user and per folder. With the object-storage backend, files received over SFTP are immediately readable by processing applications through the S3 API, with no shared-disk coupling between systems.

### Event-Driven Processing

The built-in **Event Manager** fires on uploads, downloads, and other filesystem events, calling **webhooks** or running actions automatically — so an incoming settlement file can kick off validation and ingestion the moment it finishes uploading, instead of waiting for a polling job.

### Hardened Access Control

Connections can be restricted with **per-user IP allow lists**, login is protected by configurable authentication (password, public key, or both), and idle sessions are closed automatically. The service runs behind a TCP load balancer with the PROXY protocol, preserving each partner's true source address for filtering and audit.

### Complete Transfer Audit Trail

Every session and transfer is logged — **user, source IP, action, file path, size, and timestamp** — in structured form, shipped to the centralized logging pipeline where it is searchable and retained per policy. Reconciliation and security reviews work from one authoritative record of who transferred what, and when.

### High Availability and Scale

SFTPGo runs as **stateless replicas backed by PostgreSQL**, with SSH host keys persisted so partners never see a host-key change. Replicas scale horizontally behind the load balancer, and rolling updates happen without interrupting partner transfers.

## <ins>**Standards & Compliance**</ins>

| Requirement area | How Opstella Managed File Transfer addresses it |
| --- | --- |
| **User administration** | View, create, edit SFTP users via web console and full REST API. |
| **Path authorization** | Per-user, per-directory permissions through virtual folders; segregated folders per data type. |
| **Storage** | S3-compatible object storage, NFS, or local volumes — selectable per user and folder. |
| **Automation** | Event Manager webhooks trigger downstream processing on upload completion. |
| **Network security** | Per-user IP allow lists, key/password authentication, true client IP preserved via PROXY protocol. |
| **Audit** | Structured logs of every session and transfer, centralized and retained per policy. |
| **Availability** | Stateless replicas on Kubernetes with persistent host keys and zero-downtime updates. |

::: info
Folder layouts, permission models, and event workflows are designed during deployment to match your partner-exchange specifications.
:::
