# Opstella Status

**Server Status** เป็นการแสดงสถานะการทำงานของ <u>Application อื่นๆที่ทำงานร่วมกับ Opstella</u> ซึ่งจะมีจำนวนเท่ากับ DevOpsTool ที่ ระบบ Opstella จัดการ เช่น Harbor , SonarQube , Grafana , Gitlab , ArgoCD , Vault

**<u>หมายเหตุ</u> เนื่องจากสาเหตุที่ทำให้ DevOpsTool ไม่พร้อมทำงานนั้นมีหลายสาเหตุ กรณีที่ไม่รู้ว่าเกิดจากอะไร เราแนะนำให้ทำตามวิธีด้านล่างทุกวิธี**

## วิธีการแก้ไขให้ Application กลับมาใช้งานได้ตามปกติในกรณีที่ Config ผิด

1. ตรวจสอบว่าใน Server Status มี DevOpstool ตัวไหนบ้างไม่พร้อมทำงาน

**สีแดง** - ไม่พร้อมทำงาน<br />
**สีเขียว** - พร้อมทำงาน

![Logo Status](/images/troubleshoot/opstella-status/serverStatus2.png)

2. Login เข้า Backend(Django) โดยเข้าไปที่ https://Backend_Domain/admin

   ![troubleShootStatus](/images/troubleshoot/check-application-job/checkApplicationJob2.png)

3. คลิกเลือก Dev ops tools ดังภาพ

   ![troubleShootStatus](/images/troubleshoot/opstella-status/troubleShootStatus1.png)

4. เลือก DevOpstool ที่ไม่พร้อมใช้งาน ตามชื่อใน Server Status และกดเข้าไป

   ![troubleShootStatus](/images/troubleshoot/opstella-status/troubleShootStatus2.png)

5. ตรวจสอบข้อมูลใน Config และ แก้ไขให้ถูกต้อง

   ![troubleShootStatus](/images/troubleshoot/opstella-status/troubleShootStatus3.png)

6. หลังจากแก้ไขเรียบร้อยแล้วกดปุ่ม SAVE ตามภาพ

   ![troubleShootStatus](/images/troubleshoot/opstella-status/troubleShootStatus4.png)

7. ทำการ อัปเดต ข้อมูลในระบบหลังบ้านให้เป็นข้อมูลล่าสุด โดยการเข้าไปที่ https://Backend_Domain/healthcheck/

8. ทำการ อัปเดต ข้อมูล DevOpsTool ตัวที่มีปัญหาให้เป็นสถานะล่าสุด โดยการเข้าไป Port Forward ตัว worker ของ DevOpsTool ที่มีปัญหา ดังภาพ

![troubleShootStatus](/images/troubleshoot/opstella-status/troubleShootStatus7.png)

9. เมื่อ Port Forward แล้วให้เติม /healthcheck เข้าไปใน Domain เพื่อ อัปเดตข้อมูล DevOpsTool ตัวที่มีปัญหาให้เป็นสถานะล่าสุดดังรูป

![troubleShootStatus](/images/troubleshoot/opstella-status/troubleShootStatus8.png)

## วิธีการแก้ไขให้ Application กลับมาใช้งานได้ตามปกติในกรณีที่ Pod ทำงานผิดปกติ

1. ตรวจสอบว่าใน Server Status มี DevOpstool ตัวไหนบ้างไม่พร้อมทำงาน

**สีแดง** - ไม่พร้อมทำงาน<br />
**สีเขียว** - พร้อมทำงาน

![Logo Status](/images/troubleshoot/opstella-status/serverStatus2.png)

2. ลบ Pod ของ worker และ DevOpsTool ตัวที่มีปัญหาใน Kubernetes Cluster

   ![troubleShootStatus](/images/troubleshoot/opstella-status/troubleShootStatus5.png)

3. รอสักครู่ pod ที่ลบไปจะขึ้นมาใหม่

   ![troubleShootStatus](/images/troubleshoot/opstella-status/troubleShootStatus6.png)

4. ทำการ อัปเดต ข้อมูลในระบบหลังบ้านให้เป็นข้อมูลล่าสุด โดยการเข้าไปที่ https://Backend_Domain/healthcheck/

5. ทำการ อัปเดต ข้อมูล DevOpsTool ตัวที่มีปัญหาให้เป็นสถานะล่าสุด โดยการเข้าไป Port Forward ตัว worker ของ DevOpsTool ที่มีปัญหาใน Kubernetes Cluster ดังภาพ

![troubleShootStatus](/images/troubleshoot/opstella-status/troubleShootStatus7.png)

6. เมื่อ Port Forward แล้วให้เติม /healthcheck เข้าไปใน Domain เพื่อ อัปเดตข้อมูล DevOpsTool ตัวที่มีปัญหาให้เป็นสถานะล่าสุดดังรูป

![troubleShootStatus](/images/troubleshoot/opstella-status/troubleShootStatus8.png)
