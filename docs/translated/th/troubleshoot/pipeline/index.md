# Pipeline

**Pipeline จะถูกกระตุ้นให้ทำงานก็ต่อเมื่อมีการ Push Source Code ไปยัง Remote Repository**

## วิธีการแก้ไขเมื่อ Pipeline มีสถานะเป็น Failed

1. เข้าไปใน Repository ที่ต้องการดู Pipeline

   ![troubleShootPipeline](/images/troubleshoot/pipeline/troubleShootPipeline1.png)

2. คลิกเลือกเมนู CI/CD แล้วกดไปที่ Pipelines ดังรูป

   ![troubleShootPipeline](/images/troubleshoot/pipeline/troubleShootPipeline2.png)

3. เมื่อกดเข้ามาจะพบกับ Pipeline ทั้งหมดที่เคย Run ใน Repository

   ![troubleShootPipeline](/images/troubleshoot/pipeline/troubleShootPipeline3.png)

4. กดเข้าไปที่ Pipeline ที่มีสถานะเป็น failed ที่เราต้องการแก้ไข

   ![troubleShootPipeline](/images/troubleshoot/pipeline/troubleShootPipeline4.png)

5. เมื่อเข้ามาจะพบกับ Stage ทั้งหมดที่ Run ใน Pipeline จากนั้นให้กดเข้าไปใน Stage ที่มีสถานะเป็น failed หรือ ที่มีสีแดงดังภาพ

   ![troubleShootPipeline](/images/troubleshoot/pipeline/troubleShootPipeline5.png)

6. หลังจากกดเข้ามา จะได้เจอกับ Log การทำงานของ Stage ของเราจากนั้นให้กดปุ่ม Retry ดังรูป ระบบจะทำการ Run Stage นี้อีกครั้งนึง

   ![troubleShootPipeline](/images/troubleshoot/pipeline/troubleShootPipeline6.png)

**<u>หมายเหตุ</u> หลังจากกดปุ่ม Retry และ Run Stage ใหม่อีกครั้งยังพบว่ามี สถานะของ Stage เป็น failed อยู่แนะนำให้อ่าน Log ใน Stage และแก้ไขปัญหาตาม Log ที่ระบบแสดง**
