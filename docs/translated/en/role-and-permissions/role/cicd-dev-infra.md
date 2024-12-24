# CI/CD Dev Infra

![Role Dev CI/CD Infra](/images/role-and-permission/role/DevCICDINFA.png){data-zoomable}

## Permission on DevOpsTool

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

### Kubernetes

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
