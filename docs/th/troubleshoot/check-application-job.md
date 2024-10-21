# Check Application Job

**โดยปกติแล้วหลังจากทำ Action(Create ,Delete , Sync) ในระบบ Opstella จะทำการสร้าง Task ใน BackEnd(Django) และ ส่ง Pubsub ไปหา DevOpsTool ต่างๆที่ทำงานร่วมกับระบบ Opstella หลังจากทำเสร็จ ระบบจะส่ง Pubsub กลับมา Update บน Backend(Django) เป็นอันเสร็จ Action(Create ,Delete , Sync)**

<ins>แต่ในบางครั้งอาจมีข้อผิดพลาดเกิดขึ้นในตอนที่ BackEnd(Django) ส่ง Pubsub ไปหา DevOpsTool แต่อาจเกิดข้อผิดพลาดทำให้ไม่ส่ง Pubsub กลับไปหา BackEnd(Django) เราจึงต้องกด Send To Pubsub Core-Event เองใน BackEnd(Django)</ins>

![checkApplicationJob](/images/troubleshoot/check-application-job/checkApplicationJob1.png)

## Send To Pubsub Core-Event

1. Login เข้า Backend(Django)

   ![checkApplicationJob](/images/troubleshoot/check-application-job/checkApplicationJob2.png)

2. คลิกเลือก tasks ดังรูป

   ![checkApplicationJob](/images/troubleshoot/check-application-job/checkApplicationJob3.png)

3. ดู Action ที่มีปัญหาในระบบ Opstella จากรูปทำการสร้าง Service ที่ชื่อว่า coreapi แต่ใช้เวลานานแล้วยังสร้างไม่เสร็จ

   ![checkApplicationJob](/images/troubleshoot/check-application-job/checkApplicationJob4.png)

4. หา REQUEST SLUG และ METHOD ของ Action ที่มีปัญหาในตาราง Tasks ซึ่งจากข้อ 3 พบว่าเป็น REQUEST SLUG "consultant-hybridcloud-coreapi" และเป็น METHOD "CREATE_SERVICE" มีปัญหาสร้างไม่เสร็จ และจากรูปพบว่ามีบาง Status ไม่ "COMPLETED"

   ![checkApplicationJob](/images/troubleshoot/check-application-job/checkApplicationJob5.png)

5. กดเลือก WORKER NAME ตัวไหนก็ได้ที่มี REQUEST SLUG และ METHOD ตรงกับตัวที่มีปัญหา แล้วกดเลือก Action เป็น Send To Pubsub Core-Event ระบบจะทำการ ส่ง Pubsub ไปหา DevOpsTool ที่เกี่ยวข้องกับ Action ที่เราทำอีกครั้งนึง เป็นอันเสร็จ

   ![checkApplicationJob](/images/troubleshoot/check-application-job/checkApplicationJob6.png)
