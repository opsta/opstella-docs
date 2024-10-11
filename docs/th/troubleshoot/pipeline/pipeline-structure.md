# Pipeline Structure

สิ่งที่ควรตรวจสอบเมื่อ run pipeline ไม่สำเร็จหรือพบว่า job ไม่ครบ **ดังรูป**
![File Name Incorrect](/images/troubleshoot/pipeline-structure/1.png)

**ให้ตรวจเช็คดังนี้ก่อนเบื้องต้น**

1. Structure ของ Pipeline ชื่อไฟล์ ต้องเป็น **.gitlab-ci.yml**

![File Name Incorrect](/images/troubleshoot/pipeline-structure/3.png)

2. Pipeline จะต้องเรียกไปที่ pipeline template (ในกรณีต้องการใช้ template ของทาง opstella)

![Detail Gitlab CI File](/images/troubleshoot/pipeline-structure/2.png)

3. จากนั้นให้ทำการ Run pipeline ใหม่ เพื่อตรวจสอบอีกครั้งว่าที่แก้ไขไปก่อนหน้าในข้อที่ 1,2 สามารถแก้ไขปัญหาได้หรือไม่

![Detail Gitlab CI File](/images/troubleshoot/pipeline-structure/4.png)

4. ถ้าผลลัพธ์ในการ run pipeline ถูกต้อง จะพบว่า job มีตามโฟลที่เป็น template opstella
![Detail Gitlab CI File](/images/troubleshoot/pipeline-structure/5.png)







