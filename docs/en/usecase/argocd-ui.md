---
outline: deep
---

# ArgoCD UI

## เมนูในหน้า Application

ส่วนนี้เป็นการแบ่งตามการใช้งานเพื่อให้ง่ายต่อการอธิบาย

![CD](/images/deploy-application/using-cd/explain.png)

### **Menu**

สามารถกดเข้าไปยังหน้ารายการ **Applications** ได้เพื่อ เปลี่ยนยัง Application อื่น **ดังรูป**

![CD](/images/deploy-application/using-cd/1.png)

และ ชื่อ Application เหมือนชื่อ namespace เมื่อเข้ามาจะเห็นทุก pod ที่ถูก deploy ภายใน namespace นั้น

### **Manual**

อธิบายแต่ละ feature **ดังนี้**

- **Detail** กดเพื่อดูรายละเอียดภายใน Application นั้น และสามารถ setting ภายใน **Application** ได้ **ดังรูป**

![CD](/images/deploy-application/using-cd/detail2.png)

จะพบว่ามีรายละเอียดต่างๆ ระบุไว้ และหากกดปุ่ม Edit สามารถแก้รายละเอียดดังกล่าวได้ **ดังรูป**

![CD](/images/deploy-application/using-cd/editDetail.png)

และแก้ Sync Policy ด้านล่าง

![CD](/images/deploy-application/using-cd/policy.png)

- **Automated** คือ เปิดทำการ auto sync กับ Gitops ทุก 3 นาที
- **Prune Resource** คือ เปิดการลบ Resource อัตโนมัติกรณีมีแก้ไขภายใน Gitops
- **Automated** คือ เปิดทำการปรับให้ Resource ตรงตามใน Gitops เสมอ ในกรณีที่มีการอัปเดตบน Kubernetes โดยตรงแล้ว config ไม่ตรงกับ Gitops ตัว ArgoCD จะทำการปรับให้ตรงกับ Gitops

- **Diff** ไม่สามารถใช้งานได้กับแบบหลาย Resource
- **Sync** ทำการ Sync ไปยัง Gitops ทันที
- **Sync Status** ดูประวัติการ Sync
- **History and Rollback** ไม่สามารถใช้งานได้กับแบบหลาย Resource
- **Delete** ลบ Applications นี้
- **Refresh** ทำการโหลดหน้าใหม่

### **View**

สามารถเปลี่ยนมุมมองการแสดง เพื่อให้สามารถดูได้ขึ้นตามผู้ใช้งาน โดยมี 4 มุมมอง ได้แก่

- **Application Details Tree** จะแสดงทุกอย่างโดยในรูปแสดง Service, Ingress และ Deployment

![CD](/images/deploy-application/using-cd/2.png)

- **Application Details Pods** จะแสดงเฉพาะ pods ที่ถูก Deploy

![CD](/images/deploy-application/using-cd/3.png)

โดยสามารถแสดงจำแนกแยกลงไปได้อีกเป็น node, parent resource และ Top level resource

- **Application Details Network** จะแสดงตาม Ingress แล้วไล่ไปยัง Service และ Deployment ที่ผ่าน Ingress นั้น

![CD](/images/deploy-application/using-cd/4.png)

- **Application Details List** แสดงทุก Resource ในรูปแบบตาราง

![CD](/images/deploy-application/using-cd/5.png)

### **Health**

สำหรับแสดงว่าสถานะการ Deploy มี 6 สถานะ

- **Healthy** คือ Deploy สำเร็จทั้งหมด
- **Progressing** คือ กำลังทำการ Deploy หลังจาก Sync
- **Degrads** คือ มีอย่างน้อย 1 รายการที่ Deploy ไม่สำเร็จ
- **Suspended** คือ หยุดการ Sync ชั่วคราว
- **Unknows** คือ มีปัญหาเกิดขึ้นแต่ไม่สามารถระบุได้

### **Sync Status**

สถานะการ Sync ของ Argocd กับ Gitops

- **Sync** คือ ทำงานสำเร็จ
- **Out of Sync** คือ ทำงานไม่สำเร็จอาจเกิดจากการ หรือยังไม่ได้ทำการอัพเดต Kubernetes
- **Unknows** คือ มีปัญหาเกิดขึ้นแต่ไม่สามารถระบุได้ (อาจเกิดจากการปัญหาการ Config ผิด)

### **Filter**

ใช้สำหรับกรองให้แสดงเฉพาะรายการที่ต้องการ
![CD](/images/deploy-application/using-cd/filter.png)

- กรองตามชื่อ **(1)**
- กรองตามประเภท **(2)**
- กรองตามสถานะการ Sync **(3)**
- กรองตามสถานะการทำงาน **(4)**

### **Chart**

ส่วนที่แสดงผล และสามารถกดเข้าไปดูภายในได้ โดยสามารถดู logs, sync เฉพาะ resource, ลบ resource และเปิด Terminal ได้ **ดังรูป**

![CD](/images/deploy-application/using-cd/chart.png)

กดเปิดเข้าไปภายใน Detail จะพบเมนู Logs และ Terminal

![CD](/images/deploy-application/using-cd/chart2.png)

เปิด Logs

![CD](/images/deploy-application/using-cd/chart3.png)

เปิด Terminal

![CD](/images/deploy-application/using-cd/chart4.png)
