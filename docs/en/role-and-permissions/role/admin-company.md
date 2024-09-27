# Admin Company

Role สูงสุดในระบบ opstella เป็น Role ของ user opstella ที่ถูกสร้างมาพร้อม company โดยมีเพียง user opstella เท่านั้นที่มี Role นี้ และ สามารถเข้าถึงทุกสิทธิ์ในระบบ

![Role](/images/role-and-permission/role/fullimg.png){data-zoomable}

## Permission on DevOpsTool

เนื่องจาก Admin (Opstella) เป็น Role ที่สูงที่สุดในระบบ Opstella ดังนั้นจะสามารถใช้งาน DevOpstool ต่างๆ ได้ทั้งหมด

### GitLab

Manage Repository:

- สามารถเข้าถึงและจัดการ repository ทั้งหมด
- แก้ไข settings ของ repository
- สร้าง, แก้ไข, และลบ branch
- ควบคุมและจัดการ tags
- สามารถจัดการ webhooks

Merge Requests:

- สามารถสร้าง, แก้ไข, และลบ merge requests
- รีวิวและยอมรับ merge requests
- สามารถใช้ squash และ merge options

Issues:

- สามารถสร้าง, แก้ไข, และลบ issues
- จัดการ issue boards
- กำหนด, แก้ไข, และลบ labels
- จัดการ milestones และ epics

CI/CD:

- สามารถจัดการ pipeline และ jobs
- สามารถแก้ไข, ลบ และเริ่ม pipelines
- สามารถดู logs ของ jobs

Permissions:

- สามารถเชิญสมาชิกใหม่เข้ามาใน project
- เปลี่ยนแปลง roles ของสมาชิกที่มีสิทธิ์ต่ำกว่า

Protected Branches and Tags:

- สามารถจัดการ protected branches และ protected tags
- สามารถกำหนดว่าใครมีสิทธิ์ push, merge, และ tag ใน branches และ tags ที่ถูกป้องกัน

Wiki และ Snippets:

- สามารถสร้าง, แก้ไข, และลบ wiki pages
- จัดการ project snippets

### Sonarqube

Browse:

- สามารถดู project และข้อมูลทั้งหมดที่เกี่ยวข้องได้ (เช่น เมตริก, dashboard, และหน้าแสดงผลลัพธ์การวิเคราะห์)
- สามารถดูผลลัพธ์ของการวิเคราะห์ code แต่ไม่สามารถทำการแก้ไขใด ๆ ได้

See Source Code:

- สามารถดู source code ที่ถูกวิเคราะห์โดย SonarQube
- ใช้ดู context ของ issues และ security hotspots ที่ SonarQube ตรวจพบใน source code

Administer Issues:

- สามารถจัดการกับ issues ที่ถูกตรวจพบ (เช่น แก้ไขสถานะ, เพิ่มความคิดเห็น, กำหนดบุคคลที่รับผิดชอบ, และตั้ง priority)
- สามารถปรับแต่ง rules และ profiles ที่เกี่ยวข้องกับการวิเคราะห์ issues

Administer Security Hotspots:

- สามารถจัดการกับ security hotspots (เช่น แก้ไขสถานะ, เพิ่มความคิดเห็น, กำหนดบุคคลที่รับผิดชอบ, และตั้ง priority)
- สามารถปรับแต่ง rules และ profiles ที่เกี่ยวข้องกับการวิเคราะห์ security hotspots

Administer:

- มีสิทธิ์ระดับสูงสุดใน project
- สามารถปรับแต่ง settings ของ project (เช่น เปลี่ยนชื่อ project, ตั้งค่า branch, และปรับแต่ง permissions)
- จัดการ permissions ของผู้ใช้ใน project
- ปรับแต่ง quality profiles และ quality gates

Execute Analysis:

- สามารถทำการวิเคราะห์ source code และส่งผลลัพธ์เข้าสู่ SonarQube
- ต้องการสิทธิ์นี้ในการตั้งค่า CI/CD pipeline เพื่อให้สามารถรันการวิเคราะห์อัตโนมัติได้

### Harbor

Manage Repositories:

- สร้าง, ลบ, และปรับแต่ง repository ภายใน project
- Push และ pull artifacts (เช่น Docker images, Helm charts) ไปยัง repository
- ดูและจัดการ tags ภายใน repository

Manage Project Members:

- เชิญสมาชิกใหม่เข้ามาใน project
- กำหนด roles ของสมาชิกภายใน project (แต่ไม่สามารถแก้ไขสิทธิ์ของ admin)

Manage Permissions:

- จัดการการเข้าถึงและสิทธิ์ของผู้ใช้งานภายใน project
- ตั้งค่า access policies สำหรับ repository ต่าง ๆ

Artifact Management:

- สแกน artifacts เพื่อหาช่องโหว่และปัญหาด้านความปลอดภัย
- ดูผลลัพธ์ของการสแกนและจัดการกับ issues ที่พบ
- ลงนามและตรวจสอบการลงนามของ artifacts เพื่อความปลอดภัย

Replication:

- ตั้งค่าและจัดการ replication rules เพื่อ replicate artifacts ไปยังหรือจาก Harbor instance อื่น ๆ

### Grafana

ดูแผนภูมิและข้อมูล:

- สามารถดูแผนภูมิและข้อมูลต่าง ๆ ที่มีในองค์กรได้โดยไม่สามารถแก้ไขหรือเปลี่ยนแปลงข้อมูลใด ๆ

สร้างและแก้ไขแผนภูมิส่วนตัว:

- สามารถสร้างและแก้ไขเพียงแผนภูมิส่วนตัว (Private Dashboard) เท่านั้นซึ่งจะไม่สามารถแชร์หรือเข้าถึงได้จากผู้ใช้อื่น

ปรับแต่งการแสดงผล:

- สามารถปรับแต่งการแสดงผลของแผนภูมิที่เห็นได้ตามความต้องการ

กำหนดการแจ้งเตือน:

- สามารถกำหนดการแจ้งเตือนให้กับตนเอง โดยไม่สามารถกำหนดการแจ้งเตือนให้ผู้ใช้อื่นได้

### Vault

create:

- อนุญาตให้สร้างข้อมูลใหม่ใน Vault

read:

- อนุญาตให้อ่านข้อมูลที่มีอยู่แล้วใน Vault

update:

- อนุญาตให้แก้ไขข้อมูลที่มีอยู่แล้วใน Vault

delete:

- อนุญาตให้ลบข้อมูลออกจาก Vault

list:

- อนุญาตให้แสดงรายการข้อมูลที่มีอยู่ใน Vault

### Headlamp

Resources:

pods ,
pods/log ,
services ,
endpoints ,
secrets ,
deployments ,
jobs ,
cronjobs ,
configmaps ,
persistentvolumeclaims ,
ingresses ,
daemonsets ,
events ,
replicasets ,
replicationcontrollers ,
statefulsets

สามารถดึงข้อมูล (get) และแสดงข้อมูลที่มีอยู่ในทรัพยากรต่าง ๆ ที่ระบุด้านบนภายใน service (namespace) แต่ไม่มีสิทธิ์ในการดำเนินการอื่น เช่น สร้างหรืออัปเดต ได้

### ArgoCD

- สร้าง แก้ไข และลบ แอปพลิเคชัน
- ซิงค์ แอปพลิเคชันด้วยตนเอง
- เรียกใช้แอ็กชันต่างๆ บนแอปพลิเคชัน เช่น การตรวจสอบซิงค์ การรีเซ็ต และการยกเลิกการซิงค์
- ดูและจัดการทรัพยากรที่เกี่ยวข้องกับแอปพลิเคชัน เช่น deployments, services, secrets, configmaps
- ดูและวิเคราะห์ข้อมูลเมตริกเกี่ยวกับแอปพลิเคชัน เช่น CPU, memory, network usage

### Kubernetes

- Kubernetes Config

kube-non-production-admin-role

- pods : อนุญาตให้คุณดู แก้ไข สร้าง ลบ และจัดการ pods ทั้งหมดในคลัสเตอร์
- pods/log : อนุญาตให้คุณดู log ของ pod ใด ๆ ในคลัสเตอร์
- services : อนุญาตให้คุณดู แก้ไข สร้าง ลบ และจัดการบริการทั้งหมดในคลัสเตอร์
- endpoints : อนุญาตให้คุณดู endpoints ทั้งหมดในคลัสเตอร์
- secrets : อนุญาตให้คุณดู แก้ไข สร้าง ลบ และจัดการ secrets ทั้งหมดในคลัสเตอร์
- deployments : อนุญาตให้คุณดู แก้ไข สร้าง ลบ และจัดการ deployments ทั้งหมดในคลัสเตอร์
- jobs : อนุญาตให้คุณดู แก้ไข สร้าง ลบ และจัดการ jobs ทั้งหมดในคลัสเตอร์
- cronjobs : อนุญาตให้คุณดู แก้ไข สร้าง ลบ และจัดการ cronjobs ทั้งหมดในคลัสเตอร์
- configmaps : อนุญาตให้คุณดู แก้ไข สร้าง ลบ และจัดการ configmaps ทั้งหมดในคลัสเตอร์
- persistentvolumeclaims : อนุญาตให้คุณดู แก้ไข สร้าง ลบ และจัดการ persistentvolumeclaims ทั้งหมดในคลัสเตอร์
- ingresses : อนุญาตให้คุณดู แก้ไข สร้าง ลบ และจัดการ ingresses ทั้งหมดในคลัสเตอร์
- daemonsets : อนุญาตให้คุณดู แก้ไข สร้าง ลบ และจัดการ daemonsets ทั้งหมดในคลัสเตอร์
- events : อนุญาตให้คุณดู events ทั้งหมดในคลัสเตอร์
- replicasets : อนุญาตให้คุณดู แก้ไข สร้าง ลบ และจัดการ replicasets ทั้งหมดในคลัสเตอร์
- replicationcontrollers : อนุญาตให้คุณดู replicationcontrollers ทั้งหมดในคลัสเตอร์
- statefulsets : อนุญาตให้คุณดู แก้ไข สร้าง ลบ และจัดการ statefulsets ทั้งหมดในคลัสเตอร์

kube-production-admin-role

- pods : อนุญาตให้คุณดู แก้ไข สร้าง ลบ และจัดการ pods ทั้งหมดในคลัสเตอร์
- pods/log : อนุญาตให้คุณดู log ของ pod ใด ๆ ในคลัสเตอร์
- services : อนุญาตให้คุณดู แก้ไข สร้าง ลบ และจัดการบริการทั้งหมดในคลัสเตอร์
- endpoints : อนุญาตให้คุณดู endpoints ทั้งหมดในคลัสเตอร์
- secrets : อนุญาตให้คุณดู แก้ไข สร้าง ลบ และจัดการ secrets ทั้งหมดในคลัสเตอร์
- deployments : อนุญาตให้คุณดู แก้ไข สร้าง ลบ และจัดการ deployments ทั้งหมดในคลัสเตอร์
- jobs : อนุญาตให้คุณดู แก้ไข สร้าง ลบ และจัดการ jobs ทั้งหมดในคลัสเตอร์
- cronjobs : อนุญาตให้คุณดู แก้ไข สร้าง ลบ และจัดการ cronjobs ทั้งหมดในคลัสเตอร์
- configmaps : อนุญาตให้คุณดู แก้ไข สร้าง ลบ และจัดการ configmaps ทั้งหมดในคลัสเตอร์
- persistentvolumeclaims : อนุญาตให้คุณดู แก้ไข สร้าง ลบ และจัดการ persistentvolumeclaims ทั้งหมดในคลัสเตอร์
- ingresses : อนุญาตให้คุณดู แก้ไข สร้าง ลบ และจัดการ ingresses ทั้งหมดในคลัสเตอร์
- daemonsets : อนุญาตให้คุณดู แก้ไข สร้าง ลบ และจัดการ daemonsets ทั้งหมดในคลัสเตอร์
- events : อนุญาตให้คุณดู events ทั้งหมดในคลัสเตอร์
- replicasets : อนุญาตให้คุณดู แก้ไข สร้าง ลบ และจัดการ replicasets ทั้งหมดในคลัสเตอร์
- replicationcontrollers : อนุญาตให้คุณดู replicationcontrollers ทั้งหมดในคลัสเตอร์
- statefulsets : อนุญาตให้คุณดู แก้ไข สร้าง ลบ และจัดการ statefulsets ทั้งหมดในคลัสเตอร์
