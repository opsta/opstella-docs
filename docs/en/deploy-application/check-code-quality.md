# Check Code Quality

![CQ](/images/deploy-application/check-code-quality/1.png)

ขยายจาก **[Using CI](./using-ci.md)** จะมีการทำ code quality โดยใน opstella จะใช้ devops tool อย่าง sonarqube ในการช่วยทำการแสกน code

### Sonarqube

![CQ](/images/deploy-application/check-code-quality/2.png)

**sonarqube** เป็นเครื่องมือที่ช่วยให้เราสามารถตรวจสอบคุณภาพโค้ดและมีการแนะนำเพื่อปรับปรุงคุณภาพให้ดียิ่งขึ้น สามารถตรวจสอบ bug, Vulnerabilities, Smell Code และ Coverage รวมถึงแสดงเฉพาะจุดให้แก้ไขได้ง่าย

### ความหมาย

- Bugs คือ bugs ที่พบใน code

- Vulnerabilities คือ ช่องโหว่ที่ตรวจพบ

- Security Hotspot คือ จุดที่อาจเป็นช่องโหว่ แต่ผู้ใช้สามารถเลือก review ได้เองว่าใช่หรือไม่ใช่ช่องโหว่ได้

- Smell Code คือ การที่ coding ไม่ดี และอาจต้องเสียเวลาแก้ในอนาคตหากมีแก้ไข หรือปรับปรุง Code ได้

- Coverage คือ ผลการทดสอบว่า Unit Tests ครอบคลุมกับ Code แค่ไหนโดยวัดจากการดู function ที่ถูกเรียกใช้ใน Unit Tests

ซึ่งสามารถเข้าไปดู sonarqube ใน opstella ได้โดยการเปิดในหน้า Component detail และกดที่ sonarqube

![CQ](/images/deploy-application/check-code-quality/3.png)

จากนั้นจะไปยังหน้า OIDC ซึ่งสามารถกด Login ได้เลย

![CQ](/images/deploy-application/check-code-quality/4.png)

จะพบการสแกน หากได้เคย run pipeline ไปแล้ว จากรูปจะเป็นการสแกน template ที่ได้ Deploy ไป

![CQ](/images/deploy-application/check-code-quality/5.png)

โดยจะแสดงผลการสแกนส่วนของ New Code ที่แสดงผลการแสกน Code ใหม่ที่เพิ่มขึ้นมาก่อน และในส่วน Overall Code ที่จะแสดงผลทั้งหมดที่เคยแสกน
