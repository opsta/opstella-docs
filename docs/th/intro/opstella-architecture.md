---
outline: deep
---

## Opstella Architecture

### <ins>**Opstella Components**</ins>

![Opstella Components!](/images/intro/what-is-opstella/opstella-architecture.svg){data-zoomable}

1. **UI:** บริการส่วนหน้า (frontend) ที่ผู้ใช้เข้าถึงผ่าน Opstella portal
2. **Core:** บริการเบื้องหลัง (backend) ที่รวมศูนย์ข้อมูลและการสื่อสารระหว่างองค์ประกอบต่าง ๆ ของ Opstella
3. **Clear Session:** องค์ประกอบเสริมที่ล้างแคชเบราว์เซอร์ของผู้ใช้ในกระบวนการยืนยันตัวตนแบบ Single Sign-On (SSO)
4. **Workers:** ชุดองค์ประกอบที่ทำงานตามภารกิจเพื่อทำให้การเชื่อมต่อทุกส่วนเป็นระบบอัตโนมัติ
5. **PostgreSQL for Opstella:** ระบบฐานข้อมูลเชิงสัมพันธ์ (RDBMS) สำหรับ Opstella Core
6. **Redis:** ที่จัดเก็บข้อมูลแบบ in-memory ใช้เป็นแคชสำหรับองค์ประกอบ Opstella Core
7. **Dapr:** distributed application runtime ที่ประสานการทำงานระหว่างองค์ประกอบต่าง ๆ ของ Opstella
8. **Keycloak:** ระบบบริหารจัดการตัวตนและการเข้าถึง (IAM) ที่ให้บริการยืนยันตัวตน กำหนดสิทธิ์ และจัดการผู้ใช้สำหรับ Opstella
9. **PostgreSQL for Keycloak:** ระบบฐานข้อมูลเชิงสัมพันธ์ (RDBMS) สำหรับ Keycloak

### <ins>**Supported Integration Components**</ins>

#### **DevOps Tools**

1. **GitLab:** ระบบควบคุมเวอร์ชันซอร์สโค้ดและ CI/CD
2. **ArgoCD:** เครื่องมือ continuous delivery แบบ declarative ตามแนวทาง GitOps สำหรับแอปพลิเคชันบน Kubernetes
3. **Harbor:** container registry แบบ cloud-native ที่รักษาความปลอดภัยและบริหารจัดการ container image
4. **Headlamp:** GUI บนเว็บที่ใช้งานง่ายสำหรับบริหารจัดการคลัสเตอร์ Kubernetes

#### **DevSecOps Tools**

1. **HashiCorp Vault:** บริหารจัดการ secret, credential และการเข้าถึงข้อมูลสำคัญอย่างปลอดภัย
2. **SonarQube:** วิเคราะห์คุณภาพและความปลอดภัยของโค้ด เพื่อตรวจหา bug, ช่องโหว่ และ code smell
3. **Trivy:** เครื่องมือสแกนช่องโหว่ด้านความปลอดภัยสำหรับ container image และระบบไฟล์ ออกแบบมาเพื่อระบุและประเมินช่องโหว่ใน dependency, การตั้งค่า และแพ็กเกจของระบบปฏิบัติการ
4. **Zed Attack Proxy (ZAP):** เครื่องมือสแกนความปลอดภัยของเว็บแอปพลิเคชันเพื่อค้นหาช่องโหว่
5. **DefectDojo:** เครื่องมือรวมศูนย์และบริหารจัดการช่องโหว่ด้านความปลอดภัยของแอปพลิเคชัน

#### **Observability Tools**

1. **Grafana Dashboard:** ส่วนติดต่อที่แสดงผล Metrics, Logs และ Traces แบบเรียลไทม์จากแหล่งข้อมูลต่าง ๆ
2. **Grafana Mimir:** โซลูชันเบื้องหลังที่รองรับการขยายขนาดและประสิทธิภาพสูงสำหรับข้อมูล Metrics
3. **Grafana Loki:** ระบบรวบรวม Log ที่จัดเก็บและค้นหา Log ได้อย่างมีประสิทธิภาพ
4. **Grafana Tempo:** ระบบเบื้องหลังสำหรับ distributed tracing เพื่อวิเคราะห์ประสิทธิภาพและความสัมพันธ์ของแอปพลิเคชัน
5. **Grafana Alloy:** ตัวเก็บและส่งออก (collector/exporter) แบบ push สำหรับ Metrics, Logs และ Traces

#### **Kubernetes Cluster**

Opstella จะบริหารจัดการและ deploy แอปพลิเคชันไปยัง Kubernetes workload cluster ที่เชื่อมต่อไว้ ผู้ใช้สามารถกำหนด Environment สำหรับการ deploy เมื่อสร้างบริการได้ดังนี้

1. **DEV** หรือ **develop** คือ Environment สำหรับการพัฒนาของนักพัฒนา
2. **SIT** คือ Environment สำหรับทดสอบการเชื่อมต่อระบบ (system integration test) สำหรับผู้ทดสอบ
3. **UAT** คือ Environment สำหรับการทดสอบการยอมรับของผู้ใช้ (user acceptance test) สำหรับ QA, ผู้ทดสอบ หรือ beta user
4. **PRE** หรือ **pre-production** คือ Environment ก่อนขึ้นใช้งานจริง สำหรับทดสอบความเข้ากันได้ก่อน go live
5. **PRD** หรือ **production** คือ Environment สำหรับใช้งานจริง (go live)

### <ins>**Opstella Application Hierarchy**</ins>

![Opstella Application Hierarchy!](/images/intro/what-is-opstella/application-hierarchy.svg){data-zoomable}

#### Organization

เป็นชั้นบนสุดของลำดับชั้นแอปพลิเคชัน โดยทั่วไปคือชื่อบริษัทของคุณ Organization เป็นค่าที่จำเป็นและไม่สามารถเปลี่ยนได้หลังการติดตั้งและเริ่มต้นใช้งาน Opstella ครั้งแรก คุณมีได้เพียง Organization เดียวเท่านั้น

#### Platform

ชั้นที่อยู่ใต้ Organization ทำหน้าที่เชื่อมต่อกับเครื่องมือ DevSecOps แต่ละตัว สามารถกำหนดได้เป็น

* แต่ละ **cloud** ทั้งแบบ private หรือ public เช่น _VMware_, _AWS_, _GCP_ และ _Azure_
* แต่ละ **platform** เช่น _On-Premise_ และ _Hybrid-Cloud_ โดยใน platform แบบ _Hybrid-Cloud_ อาจประกอบด้วย VMware สำหรับ non-production และ AWS สำหรับ workload production
* แต่ละ **department** หรือหน่วยธุรกิจ เช่น _Internal_, _Marketing_ และ _E-Commerce_
* แต่ละ **project** เช่น _CallCenter_, _CMS_, _Support_ และ _Registration_

#### Service

เป็นชั้นที่อยู่ใต้ Platform สามารถกำหนดเป็นแอปพลิเคชัน โปรเจกต์ หรือบริการของคุณ โดย Service จะเป็นตัวกำหนด **Environment** เช่น _dev_ และ _prd_ ที่คุณต้องการ deploy microservice หรือองค์ประกอบเบื้องหลัง

#### Component

เป็นชั้นล่างสุดที่คุณ deploy container อาจเรียกว่า microservice หรือ batch process ก็ได้ Opstella จะสร้าง URL endpoint บนแต่ละ Environment ตามที่กำหนดไว้ใน Service
