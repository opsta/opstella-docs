# Prepare on Opstella

ในหัวข้อนี้จะอธิบายถึงขั้นตอนการสร้าง **Application** จากบน **Opstella** โดยจะอธิบายตั้งแต่ขั้นตอนเตรียมการก่อนสร้าง **Application** จนไปถึงการขึ้น **Application**

## ขั้นตอนเตรียมการสร้าง Application บน Opstella

- สร้าง Platform
- สร้าง Service
- สร้าง Component

### Create Platform

1. เริ่มด้วยการกด **Create Platform** ในหน้า **App inventory** จะปราฏหน้า Create Platform ให้กรอกข้อมูลรายละเอียดของ Platform ที่จะทำการสร้าง

![DeployOnOpstella0](/images/deploy-application/deploy-on-opstella/0.png)

**จากรูปตัวอย่าง** จะต้องกรอกข้อมูลที่บังคับให้กรอก คือ ชื่อ Platform และ Resource Quotas ส่วนทางด้านซ้ายมือ คือ ส่วนที่จะเพิ่ม User ลงไป ซึ่งใน Platform จะมี **[Role Admin](../role-and-permissions/role/admin.md)** ให้เลือกเท่านั้น

และขั้นตอนนี้จะมีการเลือกชุด Devops Tool ที่จะให้ใช้ และรวมไปถึงว่าจะ Deploy บน Environtment Cluster ไหน ซึ่งสามารถดูได้จาก Worker Kubernetes ตาม Host ที่ได้แสดง สามารถแบ่ง Deploy แยกระหว่าง Environtment ได้ หรือ Deploy พร้อมกันมากกว่า 1 ที่ได้ขึ้นอยู่กับชุด Devops Tool ที่เลือกมา **ดังรูป**

**รูปชุด Devops tool : On Premise**

![DeployOnOpstella1](/images/deploy-application/deploy-on-opstella/1.png)

**รูปชุด Devops tool : Hybrid Cloud**

![DeployOnOpstella2](/images/deploy-application/deploy-on-opstella/2.png)

**จากรูปตัวอย่าง** จะพบว่ามีตัวเลือกชุด Devopstool อยู่ 2 ชุด ที่มี Devops tool ที่แตกต่างกัน ซึ่งสามารถเลือกใช้เลือกให้เหมาะกับ Application ของเราได้ ซึ่ง ชุด Devops Tool สามารถเพิ่มลด Devops Tool ในภายหลังได้เช่นกัน

2. เมื่อกรอกข้อมูลครบ และกด **Confirm** จะมีหน้าต่างแสดงรายละเอียดขึ้นมา **ดังรูป**

![DeployOnOpstella3](/images/deploy-application/deploy-on-opstella/3.png)

ซึ่งแสดงรายละเอียดของชื่อ Platform และ Resource Quotas รวมไปถึง User ที่ได้รับสิทธิ์ หากทุกอย่างถูกต้องครบถ้วนแล้วให้กด **Confirm Create Platform** เพื่อทำการสร้าง Platform

![DeployOnOpstella31](/images/deploy-application/deploy-on-opstella/31.png)

จากนั้นจะกลับไปหน้า Platform List จะพบว่า Platform ที่สร้างนั้นกำลัง Processing อยู่ เมื่อเปลี่ยนกลับมาเป็นสถานะปกติถือว่าการ Create Platform สำเร็จ

![DeployOnOpstella32](/images/deploy-application/deploy-on-opstella/32.png)

### Create Service

เปิดเข้าไปในหน้า Platform จะหน้ารายการ Service ซึ่งจะมีปุ่มมุมบนขวา ให้กดที่ปุ่ม **Create Service** จะเข้าไปในหน้า **Create Service**

![DeployOnOpstella33](/images/deploy-application/deploy-on-opstella/33.png)

**ในส่วนของการ Create Service นี้คือจะคล้ายกับ Create Platform** คือกรอก ชื่อ Service และ Resource Quotas ซึ่งในส่วนนี้เป็น Resource ที่ถูกแบ่งมาจาก Platform ถ้ามีหลาย Service ใน Platform เดียวกัน ผลรวม Resource Quotas จะต้องไม่เกินของ Platform
เช่น

**Platform A** มี CPU Limit 5000 millicore และ Memory Limit 5000 Mi

**Service A1** ที่อยู่ใน **Platform A** CPU Limit 2500 millicore และ Memory Limit 2500 Mi

ถ้าจะมีการสร้าง Service เพิ่มเติมจะต้องมี CPU Limit ไม่เกิน 2500 millicore และ Memory Limit ไม่เกิน 2500 Mi เป็นต้น

สามารถเพิ่มสิทธิ์ User ได้เช่นกัน โดยมี Role ได้แก่ **[Full-Control](../role-and-permissions/role/full-control.md)**, **[Production](../role-and-permissions/role/production.md)** และ **[Non-Production ](../role-and-permissions/role/non-production.md)** **ดังรูป**

![DeployOnOpstella34](/images/deploy-application/deploy-on-opstella/34.png)

เมื่อกรอกข้อมูลครบจะปรากฏหน้าต่าง **Confirmation** แสดงรายละเอียดที่กรอกไป

![DeployOnOpstella35](/images/deploy-application/deploy-on-opstella/35.png)

เมื่อกด **Create Service** จะทำการสร้าง **Service**

![DeployOnOpstella37](/images/deploy-application/deploy-on-opstella/37.png)

รอจนจบกระบวนการ **Processing** ถือว่าสร้าง **Service** สำเร็จ

![DeployOnOpstella37](/images/deploy-application/deploy-on-opstella/38.png)

### Create Component

กดเข้าไปในหน้า **Service** จะเจอหน้ารายการ Component ให้กด **Create Component**

![DeployOnOpstella37](/images/deploy-application/deploy-on-opstella/39.png)

เมื่อกดเข้ามาจะเจอ Template Coding ให้เลือกโดยจะเป็นตัวอย่างภาษา หรือ framework ทั้งนี้หากมี code ที่ต้องการนำขึ้นอยู่แล้ว หรือต้องการพัฒนาในภาษาที่นอกเหนือจาก Template ที่มีมาให้สามารถ เลือก **Blank Template** ได้ **ดังรูป**

![DeployOnOpstella4](/images/deploy-application/deploy-on-opstella/4.png)

ซึ่งเมื่อเลือกจะมีรายละเอียดที่ต้องกรอกอีกคือ ชื่อ Component ,Resource Quotas, Port รวมไปถึง Role ของ User ซึ่งใน layer มี 2 Role ได้แก่ **[CICD Dev](../role-and-permissions/role/cicd-dev.md)** และ **[CICD Dev INFRA](../role-and-permissions/role/cicd-dev-infra.md)**

![DeployOnOpstella5](/images/deploy-application/deploy-on-opstella/5.png)

ในส่วนการ Confirm และ Processing จะเหมือนของ Platform เมื่อเสร็จขั้นตอนทั้งหมดจะได้ Application ที่พร้อม Deploy เบื้องต้น ซึ่งขั้นตอนต่อไป คือ การ Run Pipeline สามารถดูได้ที่ **[Workflow](./deploy-on-gitlab/workflow.md)**
