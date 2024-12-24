# Push code to opstella

หากไม่ได้เลือก template แต่มี project ที่ต้องการนำขึ้นอยู่แล้ว ให้เลือก blank template **ดังรูป**

![Push1](/images/deploy-application/deploy-on-gitlab/push/1.png)

หลังจากที่ **project** สร้างเสร็จให้เปิดไปที่ gitlab จะพบว่ามีแค่ branch develop เท่านั้น

![Push2](/images/deploy-application/deploy-on-gitlab/push/2.png)

ให้เปิดที่ code ที่ต้องการจะนำขึ้น ใช้คำสั่งต่อไปนี้

```
git init
git remote add origin **your repository url**
git branch -M main
git push -uf origin main
```

![Push3](/images/deploy-application/deploy-on-gitlab/push/3.png)

เปิดมาที่หน้า **gitlab** จะพบว่ามี branch main เพิ่มขึ้นมา

![Push4](/images/deploy-application/deploy-on-gitlab/push/4.png)

เมื่อเปิดจะพบว่า code ถูก push ขึ้นมาแล้ว

**Structure ที่ควรทำเพื่อนำมา Deploy บน Opstella จะต้องมีดังนี้**

![Push5](/images/deploy-application/deploy-on-gitlab/push/6.png)

**helm** จะเก็บไฟล์ config ที่ใช้สำหรับการรันแอปพลิเคชันบน opstella เช่น secret environment ต่างๆ<br/>
**source** จะเก็บไฟล์ source code ของแอปพลิเคชัน ซึ่งจะใช้สำหรับการ build บน pipeline<br/>
**Dockerfile** จะใช้สำหรับการ build image เพื่อใช้งานบน kubernetes<br/>
**.gitlab-ci.yaml** จะใช้สำหรับ config ตัว pipeline ci/cd<br/>

ในขั้นตอนการ run pipeline สามารถอ่านเพิ่มเติมได้ที่ **[Workflow](./workflow.md)**
