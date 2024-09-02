# Build Issue

### แก้ปัญหาด้วยการ Debug

ในการกรณีที่ run pipeline แล้วติดปัญหาที่ stage build สามารถกดเข้าไปดูในการทำงานได้ **ดังรูป**

![Logo Harbor](/images/troubleshoot/build-issue/1.png)

หลังจากเข้ามาให้เลื่อนมาล่างสุดจะ log ระหว่างทำการ build จากรูปจะเห็นว่ามี error ดังนั้นให้ลองเข้าไปแก้ error ตามที่ log บอกมาก่อน

![Logo Harbor](/images/troubleshoot/build-issue/2.png)

จาก error บอกว่ามีปัญหาที่เรียกไฟล์ไม่เจอที่ source/example/routes/example.routes.ts โดยให้ลองลบส่วนที่มีปัญหา **ดังรูป**

![Logo Harbor](/images/troubleshoot/build-issue/3.png)

เมื่อลอง build ใหม่พบสามารถ build ได้

![Logo Harbor](/images/troubleshoot/build-issue/4.png)

กรณีที่ไม่ต้องการ run pipeline ใหม่ สามารถทำการ run ขึ้นมาด้วยการใช้ docker build ขึ้นมาก่อน

```
docker build -t component .
```

**กรณีที่ไม่สามารถ build ได้** แสดงว่าต้องทำการ debug ภายใน source code

**กรณีที่สามารถ build ได้** หากสามารถทำการ build docker ขึ้นมาได้ แต่ไม่สามารถ build บน pipeline ได้อาจเกิดจากปัญหาที่ kankiko ไม่เจอไฟล์ ให้ลองเพิ่มไฟล์เข้ามาใน repository
