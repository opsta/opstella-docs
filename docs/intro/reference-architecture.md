---
outline: deep
---

## Opstella Reference Architecture

### <ins>**Standalone Architecture**</ins>

![Opstella Standalone Architecture!](/images/intro/reference-architecture/standalone-architecture.svg){data-zoomable}

#### Use Cases

1. Prove of concept for a whole Opstella and DevSecOps Platform.
2. Testing or staging platform environment.

#### Specification

These are specifications of virtual machines that need to be created with the following details

* CPU: **Intel Xeon E-2334 (3.4GHz, 4C/8T, 8MB Cache)**
* Network Bandwidth: **1Gbps**
* Operating System: **Ubuntu 24.04.1 (Noble Numbat)**

<table>
  <thead>
    <tr>
      <th style="color:#000;background-color:#ffffff"></th>
      <th style="color:#000;background-color:#ffffff">Number of Nodes</th>
      <th style="color:#000;background-color:#ffffff">CPU (Core)</th>
      <th style="color:#000;background-color:#ffffff">Memory (GB)</th>
      <th style="color:#000;background-color:#ffffff">Disk (GB)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="section-header" colspan="5">Virtual Machines</td>
    </tr>
    <tr>
      <td class="left-align">Bastion Host</td>
      <td>1</td>
      <td>1</td>
      <td>2</td>
      <td>20</td>
    </tr>
    <tr>
      <td class="left-align">HAProxy</td>
      <td>1</td>
      <td>1</td>
      <td>2</td>
      <td>20</td>
    </tr>
    <tr>
      <td class="left-align">NFS Share</td>
      <td>1</td>
      <td>1</td>
      <td>2</td>
      <td>100</td>
    </tr>
    <tr>
      <td class="left-align">GitLab</td>
      <td>1</td>
      <td>2</td>
      <td>4</td>
      <td>40</td>
    </tr>
    <tr>
      <td class="section-header" colspan="5">Kubernetes Cluster</td>
    </tr>
    <tr>
      <td class="left-align">Kubernetes Master Nodes</td>
      <td>1</td>
      <td>2</td>
      <td>4</td>
      <td>40</td>
    </tr>
    <tr>
      <td class="left-align">Kubernetes Worker Nodes</td>
      <td>5</td>
      <td>4</td>
      <td>10</td>
      <td>40</td>
    </tr>
    <tr class="total-row">
      <td>Total</td>
      <td>10</td>
      <td>27</td>
      <td>64</td>
      <td>460</td>
    </tr>
  </tbody>
</table>

#### Network Subnet

<table>
  <thead>
    <tr>
      <th style="background-color:#f3f4f6;font-weight: bold;text-align: center;color: #01051b;">Type</th>
      <th style="background-color:#f3f4f6;font-weight: bold;text-align: center;color: #01051b;">Subnet IP</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="left-align">Kubernetes Cluster and Related Virtual Machines Subnet</td>
      <td class="left-align">192.168.72.0/24</td>
    </tr>
    <tr>
      <td class="left-align">Pod Subnet for each Kubernetes cluster</td>
      <td class="left-align">172.16.72.0/22</td>
    </tr>
    <tr>
      <td class="left-align">Service Subnet for each Kubernetes cluster</td>
      <td class="left-align">172.16.76.0/22</td>
    </tr>
  </tbody>
</table>

#### Domain

You must provide domains. For example, we will use ***.devops.example.com** and SSL certificates in this reference architecture. These are domains that will be assigned for DevSecOps tools and Opstella.

<table>
  <thead>
    <tr>
      <th style="color:#000;background-color:#ffffff;text-align: center">Service Name</th>
      <th style="color:#000;background-color:#ffffff;text-align: center">Ingress Domain</th>
    </tr>
  </thead>
  <tbody>
    <!-- Section: Opstella -->
    <tr>
      <td class="section-header" colspan="2">Opstella</td>
    </tr>
    <tr>
      <td class="left-align">Opstella UI</td>
      <td class="left-align"><strong>opstella</strong>.devops.example.com</td>
    </tr>
    <tr>
      <td class="left-align">Opstella Core</td>
      <td class="left-align"><strong>opstella-backend</strong>.devops.example.com</td>
    </tr>
    <tr>
      <td class="left-align">Opstella Clear Session</td>
      <td class="left-align"><strong>opstella-clear-session</strong>.devops.example.com</td>
    </tr>
    <tr>
      <td class="left-align">Keycloak</td>
      <td class="left-align"><strong>opstella-idp</strong>.devops.example.com</td>
    </tr>
    <!-- Section: DevOps Tools -->
    <tr>
      <td class="section-header" colspan="2">DevOps Tools</td>
    </tr>
    <tr>
      <td class="left-align">ArgoCD</td>
      <td class="left-align"><strong>argocd</strong>.devops.example.com</td>
    </tr>
    <tr>
      <td class="left-align">DefectDojo</td>
      <td class="left-align"><strong>defectdojo</strong>.devops.example.com</td>
    </tr>
    <tr>
      <td class="left-align">GitLab</td>
      <td class="left-align"><strong>gitlab</strong>.devops.example.com</td>
    </tr>
    <tr>
      <td class="left-align">Headlamp</td>
      <td class="left-align"><strong>headlamp</strong>.devops.example.com</td>
    </tr>
    <tr>
      <td class="left-align">Harbor</td>
      <td class="left-align"><strong>harbor</strong>.devops.example.com</td>
    </tr>
    <!-- Section: DevSecOps Tools -->
    <tr>
      <td class="section-header" colspan="2">DevSecOps Tools</td>
    </tr>
    <tr>
      <td class="left-align">SonarQube</td>
      <td class="left-align"><strong>sonarqube</strong>.devops.example.com</td>
    </tr>
    <tr>
      <td class="left-align">Vault</td>
      <td class="left-align"><strong>vault</strong>.devops.example.com</td>
    </tr>
    <!-- Section: Observability Tools -->
    <tr>
      <td class="section-header" colspan="2">Observability Tools</td>
    </tr>
    <tr>
      <td class="left-align">Loki</td>
      <td class="left-align"><strong>loki</strong>.devops.example.com</td>
    </tr>
    <tr>
      <td class="left-align">Grafana Dashboard</td>
      <td class="left-align"><strong>grafana</strong>.devops.example.com</td>
    </tr>
    <tr>
      <td class="left-align">Tempo</td>
      <td class="left-align"><strong>tempo</strong>.devops.example.com</td>
    </tr>
    <tr>
      <td class="left-align">Mimir</td>
      <td class="left-align"><strong>mimir</strong>.devops.example.com</td>
    </tr>
    <!-- Section: Common Services -->
    <tr>
      <td class="section-header" colspan="2">Common Services</td>
    </tr>
    <tr>
      <td class="left-align">MinIO</td>
      <td class="left-align"><strong>minio</strong>.devops.example.com</td>
    </tr>
    <tr>
      <td class="left-align">MinIO API</td>
      <td class="left-align"><strong>minio-api</strong>.devops.example.com</td>
    </tr>
  </tbody>
</table>

#### Ingress

![Opstella Kubernetes Ingress Traffic Flow!](/images/intro/reference-architecture/ingress-kubernetes-traffic-flow-standalone.svg){data-zoomable}

#### Firewall

<table>
  <thead>
    <tr>
      <th style="text-align: center;color:#000;background-color:#ffffff">Policy</th>
      <th style="text-align: center;color:#000;background-color:#ffffff">Protocol</th>
      <th style="text-align: center;color:#000;background-color:#ffffff">Direction</th>
      <th style="text-align: center;color:#000;background-color:#ffffff">Port</th>
      <th style="text-align: center;color:#000;background-color:#ffffff">Source</th>
      <th style="text-align: center;color:#000;background-color:#ffffff">Description</th>
    </tr>
  </thead>
  <tbody>
    <!-- Kubernetes Master Nodes Section -->
    <tr>
      <td class="section-header" colspan="6">Kubernetes Master Nodes</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">6443</td>
      <td class="left-align">Any</td>
      <td class="left-align">Kubernetes API</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">6443</td>
      <td class="left-align">HAProxy</td>
      <td class="left-align">Kubernetes API</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">6443</td>
      <td class="left-align">RKE2 Worker Nodes</td>
      <td class="left-align">Kubernetes API</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">9345</td>
      <td class="left-align">RKE2 Master Nodes</td>
      <td class="left-align">RKE2 Supervisor API</td>
    </tr>
    <tr>
      <td colspan="2" class="left-align">Allow</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">9345</td>
      <td class="left-align">RKE2 Worker Nodes</td>
      <td class="left-align">RKE2 Supervisor API</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">2379</td>
      <td class="left-align">RKE2 Master Nodes</td>
      <td class="left-align">etcd Client Port</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">2380</td>
      <td class="left-align">RKE2 Master Nodes</td>
      <td class="left-align">etcd Peer Port</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">2381</td>
      <td class="left-align">RKE2 Master Nodes</td>
      <td class="left-align">etcd Metrics Port</td>
    </tr>
    <!-- Kubernetes Worker Nodes Section -->
    <tr>
      <td class="section-header" colspan="6">Kubernetes Worker Nodes</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">30080;30443</td>
      <td class="left-align">HAProxy</td>
      <td class="left-align">NodePort Ingress Service</td>
    </tr>
    <!-- Kubernetes Master & Worker Nodes Section -->
    <tr>
      <td class="section-header" colspan="6">Kubernetes Master & Worker Nodes</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">10250</td>
      <td class="left-align">Any</td>
      <td class="left-align">kubelet Metrics</td>
    </tr>
        <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">179</td>
      <td class="left-align">All RKE2 Nodes</td>
      <td class="left-align">Calico CNI with BGP</td>
    </tr>
    <tr>
      <td class="left-align" colspan="2">Allow</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">4789</td>
      <td class="left-align">All RKE2 Nodes</td>
      <td class="left-align">Calico CNI with VXLAN</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">5473</td>
      <td class="left-align">All RKE2 Nodes</td>
      <td class="left-align">Calico CNI with BGP</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">9098</td>
      <td class="left-align">All RKE2 Nodes</td>
      <td class="left-align">Calico Typha health checks</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">9099</td>
      <td class="left-align">All RKE2 Nodes</td>
      <td class="left-align">Calico health checks</td>
    </tr>
    <!-- GitLab Section -->
    <tr>
      <td class="section-header" colspan="6">GitLab</td>
    </tr>
    <tr>
      <td class="left-align" colspan="2">Allow</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">80, 443</td>
      <td class="left-align">Any</td>
      <td class="left-align">Web Services</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">22</td>
      <td class="left-align">Any</td>
      <td class="left-align">Git SSH</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">9090</td>
      <td class="left-align">Any</td>
      <td class="left-align">GitLab Prometheus Metrics</td>
    </tr>
    <!-- NFS Section -->
    <tr>
      <td class="section-header" colspan="6">NFS</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP/UDP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">2049</td>
      <td class="left-align">RKE2 Worker Nodes</td>
      <td class="left-align">NFSd</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP/UDP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">111</td>
      <td class="left-align">RKE2 Worker Nodes</td>
      <td class="left-align">PortMapper</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP/UDP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">33333</td>
      <td class="left-align">RKE2 Worker Nodes</td>
      <td class="left-align">MountD</td>
    </tr>
    <!-- HAProxy Section -->
    <tr>
      <td class="section-header" colspan="6">HAProxy</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">80;443</td>
      <td class="left-align">Any</td>
      <td class="left-align">HTTP/HTTPS Inbound</td>
    </tr>
  </tbody>
</table>
<br/>
<hr/>

### <ins>**Multi-Clusters Architecture**</ins>

![Opstella Multi-Clusters Architecture!](/images/intro/reference-architecture/distributed-architecture.svg){data-zoomable}

#### Use Cases 

Scalable deployments for production environments.

#### Specification

These are specifications of virtual machines that need to be created with the following details

* CPU: **Intel Xeon Silver 4310 (2.1GHz, 12C/24T, 18MB Cache)**
* Network Bandwidth: **10Gbps**
* Operating System: **Ubuntu 24.04.1 (Noble Numbat)**

<table>
  <thead>
    <tr>
      <th style="color:#000;background-color:#ffffff"></th>
      <th style="color:#000;background-color:#ffffff">Number of Nodes</th>
      <th style="color:#000;background-color:#ffffff">CPU (Core)</th>
      <th style="color:#000;background-color:#ffffff">Memory (GB)</th>
      <th style="color:#000;background-color:#ffffff">Disk (GB)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="section-header" colspan="5">Virtual Machines</td>
    </tr>
    <tr>
      <td class="left-align">Bastion Host</td>
      <td>1</td>
      <td>1</td>
      <td>2</td>
      <td>20</td>
    </tr>
    <tr>
      <td class="left-align">HAProxy</td>
      <td>4</td>
      <td>1</td>
      <td>2</td>
      <td>20</td>
    </tr>
    <tr>
      <td class="left-align">NFS Share (DevSecOps)</td>
      <td>1</td>
      <td>1</td>
      <td>2</td>
      <td>500</td>
    </tr>
    <tr>
      <td class="left-align">NFS Share (Observability)</td>
      <td>1</td>
      <td>1</td>
      <td>2</td>
      <td>500</td>
    </tr>
    <tr>
      <td class="left-align">NFS Share (DEV)</td>
      <td>1</td>
      <td>1</td>
      <td>2</td>
      <td>100</td>
    </tr>
    <tr>
      <td class="left-align">NFS Share (PRD)</td>
      <td>1</td>
      <td>1</td>
      <td>2</td>
      <td>100</td>
    </tr>
    <tr>
      <td class="left-align">GitLab</td>
      <td>1</td>
      <td>4</td>
      <td>8</td>
      <td>40</td>
    </tr>
    <tr>
      <td class="section-header" colspan="5">Kubernetes DevSecOps Cluster</td>
    </tr>
    <tr>
      <td class="left-align">Kubernetes Master Nodes</td>
      <td>3</td>
      <td>2</td>
      <td>4</td>
      <td>20</td>
    </tr>
    <tr>
      <td class="left-align">Kubernetes Worker Nodes</td>
      <td>3</td>
      <td>4</td>
      <td>8</td>
      <td>40</td>
    </tr>
    <tr>
      <td class="section-header" colspan="5">Kubernetes Observability Cluster</td>
    </tr>
    <tr>
      <td class="left-align">Kubernetes Master Nodes</td>
      <td>3</td>
      <td>2</td>
      <td>4</td>
      <td>20</td>
    </tr>
    <tr>
      <td class="left-align">Kubernetes Worker Nodes</td>
      <td>3</td>
      <td>4</td>
      <td>8</td>
      <td>40</td>
    </tr>
    <tr>
      <td class="section-header" colspan="5">Kubernetes Non-Production Workload Cluster</td>
    </tr>
    <tr>
      <td class="left-align">Kubernetes Master Nodes</td>
      <td>3</td>
      <td>2</td>
      <td>4</td>
      <td>20</td>
    </tr>
    <tr>
      <td class="left-align">Kubernetes Worker Nodes</td>
      <td>3</td>
      <td>4</td>
      <td>8</td>
      <td>40</td>
    </tr>
    <tr>
      <td class="section-header" colspan="5">Kubernetes Production Workload Cluster</td>
    </tr>
    <tr>
      <td class="left-align">Kubernetes Master Nodes</td>
      <td>3</td>
      <td>2</td>
      <td>4</td>
      <td>20</td>
    </tr>
    <tr>
      <td class="left-align">Kubernetes Worker Nodes</td>
      <td>5</td>
      <td>6</td>
      <td>8</td>
      <td>40</td>
    </tr>
    <tr>
      <td class="total-row">Total</td>
      <td class="total-row">36</td>
      <td class="total-row">103</td>
      <td class="total-row">186</td>
      <td class="total-row">2140</td>
    </tr>
  </tbody>
</table>

#### Network Subnet

<table>
  <thead>
    <tr>
      <th style="background-color:#f3f4f6;font-weight: bold;text-align: center;color: #01051b;">Type</th>
      <th style="background-color:#f3f4f6;font-weight: bold;text-align: center;color: #01051b;">Subnet IP</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="left-align">Kubernetes DevSecOps Cluster and Related Virtual Machines Subnet</td>
      <td class="left-align">192.168.72.0/24</td>
    </tr>
    <tr>
      <td class="left-align">Kubernetes Observability Cluster and Related Virtual Machines Subnet</td>
      <td class="left-align">192.168.73.0/24</td>
    </tr>
    <tr>
      <td class="left-align">Kubernetes Non-Production Workload Cluster and Related Virtual Machines Subnet</td>
      <td class="left-align">192.168.74.0/24</td>
    </tr>
    <tr>
      <td class="left-align">Kubernetes Production Workload Cluster and Related Virtual Machines Subnet</td>
      <td class="left-align">192.168.75.0/24</td>
    </tr>
    <tr>
      <td class="left-align">Pod Subnet for each Kubernetes cluster</td>
      <td class="left-align">172.16.72.0/22</td>
    </tr>
    <tr>
      <td class="left-align">Service Subnet for each Kubernetes cluster</td>
      <td class="left-align">172.16.76.0/22</td>
    </tr>
  </tbody>
</table>

#### Domain

You must provide domains. For example, we will use ***.devops.example.com** and SSL certificates in this reference architecture. These are domains that will be assigned for DevSecOps tools and Opstella.

<table>
  <thead>
    <tr>
      <th style="text-align: center;color:#000;background-color:#ffffff">Service Name</th>
      <th style="text-align: center;color:#000;background-color:#ffffff">Ingress Domain</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" class="section-header">Opstella</td>
    </tr>
    <tr>
      <td class="left-align">Opstella UI</td>
      <td class="left-align"><strong>opstella</strong>.devops.example.com</td>
    </tr>
    <tr>
      <td class="left-align">Opstella Core</td>
      <td class="left-align"><strong>opstella-backend</strong>.devops.example.com</td>
    </tr>
    <tr>
      <td class="left-align">Opstella Clear Session</td>
      <td class="left-align"><strong>opstella-clear-session</strong>.devops.example.com</td>
    </tr>
    <tr>
      <td class="left-align">Keycloak</td>
      <td class="left-align"><strong>opstella-idp</strong>.devops.example.com</td>
    </tr>
    <tr>
      <td colspan="2" class="section-header">DevOps Tools</td>
    </tr>
    <tr>
      <td class="left-align">ArgoCD (DEV)</td>
      <td class="left-align"><strong>argocd-dev</strong>.devops.example.com</td>
    </tr>
    <tr>
      <td class="left-align">ArgoCD (PRD)</td>
      <td class="left-align"><strong>argocd-prd</strong>.devops.example.com</td>
    </tr>
    <tr>
      <td class="left-align">DefectDojo</td>
      <td class="left-align"><strong>defectdojo</strong>.devops.example.com</td>
    </tr>
    <tr>
      <td class="left-align">GitLab</td>
      <td class="left-align"><strong>gitlab</strong>.devops.example.com</td>
    </tr>
    <tr>
      <td class="left-align">Headlamp</td>
      <td class="left-align"><strong>headlamp</strong>.devops.example.com</td>
    </tr>
    <tr>
      <td class="left-align">Harbor</td>
      <td class="left-align"><strong>harbor</strong>.devops.example.com</td>
    </tr>
    <tr>
      <td colspan="2" class="section-header">DevSecOps Tools</td>
    </tr>
    <tr>
      <td class="left-align">SonarQube</td>
      <td class="left-align"><strong>sonarqube</strong>.devops.example.com</td>
    </tr>
    <tr>
      <td class="left-align">Vault</td>
      <td class="left-align"><strong>vault</strong>.devops.example.com</td>
    </tr>
    <tr>
      <td colspan="2" class="section-header">Observability Tools</td>
    </tr>
    <tr>
      <td class="left-align">Loki</td>
      <td class="left-align"><strong>loki</strong>.devops.example.com</td>
    </tr>
    <tr>
      <td class="left-align">Grafana Dashboard</td>
      <td class="left-align"><strong>grafana</strong>.devops.example.com</td>
    </tr>
    <tr>
      <td class="left-align">Tempo</td>
      <td class="left-align"><strong>tempo</strong>.devops.example.com</td>
    </tr>
    <tr>
      <td class="left-align">Mimir</td>
      <td class="left-align"><strong>mimir</strong>.devops.example.com</td>
    </tr>
    <tr>
      <td colspan="2" class="section-header">Common Services</td>
    </tr>
    <tr>
      <td class="left-align">MinIO (DevSecOps)</td>
      <td class="left-align"><strong>minio-dso</strong>.devops.example.com</td>
    </tr>
    <tr>
      <td class="left-align">MinIO API (DevSecOps)</td>
      <td class="left-align"><strong>minio-dso-api</strong>.devops.example.com</td>
    </tr>
    <tr>
      <td class="left-align">MinIO (Observability)</td>
      <td class="left-align"><strong>minio-obs</strong>.devops.example.com</td>
    </tr>
    <tr>
      <td class="left-align">MinIO API (Observability)</td>
      <td class="left-align"><strong>minio-obs-api</strong>.devops.example.com</td>
    </tr>
  </tbody>
</table>

#### Ingress

![Opstella Kubernetes Ingress Flow!](/images/intro/reference-architecture/ingress-kubernetes-traffic-flow-distributed.svg){data-zoomable}

#### Firewall

<table class="tg">
  <thead>
    <tr>
      <th style="text-align: center;color:#000;background-color:#ffffff">Policy</th>
      <th style="text-align: center;color:#000;background-color:#ffffff">Protocol</th>
      <th style="text-align: center;color:#000;background-color:#ffffff">Direction</th>
      <th style="text-align: center;color:#000;background-color:#ffffff">Port</th>
      <th style="text-align: center;color:#000;background-color:#ffffff">Source</th>
      <th style="text-align: center;color:#000;background-color:#ffffff">Description</th>
    </tr>
  </thead>
  <tbody>
    <!-- Kubernetes Master Nodes -->
    <tr>
      <td class="section-header" colspan="6">Kubernetes Master Nodes</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">6443</td>
      <td class="left-align">HAProxy</td>
      <td class="left-align">Kubernetes API</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">6443</td>
      <td class="left-align">RKE2 Worker Nodes</td>
      <td class="left-align">Kubernetes API</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">9345</td>
      <td class="left-align">RKE2 Master Nodes</td>
      <td class="left-align">RKE2 Supervisor API</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">9345</td>
      <td class="left-align">RKE2 Worker Nodes</td>
      <td class="left-align">RKE2 Supervisor API</td>
    </tr>
    <tr>
      <td class="left-align" colspan="2">Allow</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">2379</td>
      <td class="left-align">RKE2 Master Nodes</td>
      <td class="left-align">etcd Client Port</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">2380</td>
      <td class="left-align">RKE2 Master Nodes</td>
      <td class="left-align">etcd Peer Port</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">2381</td>
      <td class="left-align">RKE2 Master Nodes</td>
      <td class="left-align">etcd Metrics Port</td>
    </tr>
    <!-- Kubernetes Worker Nodes -->
    <tr>
      <td class="section-header" colspan="6">Kubernetes Worker Nodes</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">30080, 30443</td>
      <td class="left-align">HAProxy</td>
      <td class="left-align">NodePort Ingress Service</td>
    </tr>
    <!-- Kubernetes Master & Worker Nodes -->
    <tr>
      <td class="section-header" colspan="6">Kubernetes Master & Worker Nodes</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">10250</td>
      <td class="left-align">Any</td>
      <td class="left-align">kubelet Metrics</td>
    </tr>
    <tr>
      <td class="left-align" colspan="2">Allow</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">179</td>
      <td class="left-align">All RKE2 Nodes</td>
      <td class="left-align">Calico CNI with BGP</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">4789</td>
      <td class="left-align">All RKE2 Nodes</td>
      <td class="left-align">Calico CNI with VXLAN</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">5473</td>
      <td class="left-align">All RKE2 Nodes</td>
      <td class="left-align">Calico CNI with Typha</td>
    </tr>
    <tr>
      <td class="left-align" colspan="2">Allow</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">9098</td>
      <td class="left-align">All RKE2 Nodes</td>
      <td class="left-align">Calico Typha health checks</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">9099</td>
      <td class="left-align">All RKE2 Nodes</td>
      <td class="left-align">Calico health checks</td>
    </tr>
    <!-- GitLab -->
    <tr>
      <td class="section-header" colspan="6">GitLab</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">80, 443</td>
      <td class="left-align">Any</td>
      <td class="left-align">Web Service</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">22</td>
      <td class="left-align">Any</td>
      <td class="left-align">SSH</td>
    </tr>
    <tr>
      <td class="left-align" colspan="2">Allow</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">9090</td>
      <td class="left-align">Any</td>
      <td class="left-align">GitLab Prometheus Metrics</td>
    </tr>
    <!-- NFS Section -->
    <tr>
      <td class="section-header" colspan="6">NFS</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">2049</td>
      <td class="left-align">RKE2 Worker Nodes</td>
      <td class="left-align">NFSd</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">111</td>
      <td class="left-align">RKE2 Worker Nodes</td>
      <td class="left-align">PortMapper</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">33333</td>
      <td class="left-align">RKE2 Worker Nodes</td>
      <td class="left-align">MountD</td>
    </tr>
    <!-- HAProxy Section -->
    <tr>
      <td class="section-header" colspan="6">HAProxy</td>
    </tr>
    <tr>
      <td class="left-align">Allow</td>
      <td class="left-align">TCP</td>
      <td class="left-align">Inbound</td>
      <td class="left-align">80, 443</td>
      <td class="left-align">Any</td>
      <td class="left-align">HTTP/HTTPS Inbound</td>
    </tr>
  </tbody>
</table>
