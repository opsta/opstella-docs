# Manage Registry

หลังจากการ Code Quality แล้ว Pipeline จะทำการ Build Image ด้วย kaniko ขึ้นมาจากนั้นจะทำการ Push ขึ้นไปเก็บบน harbor

## Kaniko

![Registry](/images/deploy-application/manage-registry/6.png)

**Kaniko** คือ tool สำหรับทำ Build สร้าง Image โดยสามารถทำงานภายใน Pipeline ได้ โดยใช้ Dockerfile โดยไม่ได้ใช้ Docker Daemon สามารถจำลองได้เหมือนสภาพแวดล้อมจริง โดยจะอ่าน Dockerfile และทำงานตาม context

## Harbor

![Registry](/images/deploy-application/manage-registry/1.png)

**Harbor** คือ tool สำหรับทำ **Private Container Repository** ช่วยจัดการตัวเก็บ image หรือ registry สำหรับ deployment รวมไปถึงการแสกน image อีกด้วย
โดยการแสกน image ของ harbor จะใช้ tool ชื่อ Trivy

## Trivy

![Registry](/images/deploy-application/manage-registry/trivy.png)

**Trivy** คือ tool สำหรับทำการแสกนช่องโหว่ภายใน image, Filesytem, git repository และ dependencies ต่างๆ

โดยหลังจากการ build ใน pipeline แล้วให้เข้าไปดูใน harbor โดยการเปิดจากหน้า component detail **ดังรูป**

![Registry](/images/deploy-application/manage-registry/2.png)

หลังจากกดเข้าไปแล้วจะไปยังหน้า login harbor oidc ให้กด **LOGIN VIA OIDC PROVIDER** เพื่อ login ได้เลย

![Registry](/images/deploy-application/manage-registry/3.png)

จะเข้ามายังที่เก็บ image ของ component นี้ ให้ทำการกดเข้าไปจะเจอรายการ image

![Registry](/images/deploy-application/manage-registry/4.png)

ภายในหน้านี้คือประวัติของการ push image และ pull image

![Registry](/images/deploy-application/manage-registry/5.png)

โดยส่วนสำคัญตามวงสีแดง

- **Tag** เป็น tag ของ image ซึ่ง opstella จะใช้ commit tag จาก gitlab มาติดที่ image
- **Valunerability** เป็นรายละเอียดผลการสแกน image
- **Push Time** เวลาที่ image นี้ถูก push ขึ้นมาบน harbor
- **Pull Time** เวลาที่ image ถูกดึงไปใช้

โดยหากกดเข้าไปที่ image ที่ถูกขึ้นมาจะแสดงรายละเอียดของ image เช่น base image, base image tag, base image source เป็นต้น และด้านล่างสุดจะเป็นผลการสแกน image

![Registry](/images/deploy-application/manage-registry/7.png)

ถ้าหาก image ยังไม่ถูก pull ในตอนที่ Deploy แสดงว่าอาจมีปัญหาระหว่าง Deploy ได้
