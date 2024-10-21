# Sync Platform

Sync Platform คือการ Update ข้อมูลใน DevOpsTool ทั้งหมดให้ตรงกับในระบบ Opstella ซึ่งแนะนำให้กด ปุ่ม Sync Platform ก็ต่อเมื่อตรวจพบว่ามีข้อมูลบางส่วนใน DevOpsTool ไม่ตรงกับในระบบ Opstella เพราะ อาจเกิดความผิดพลาดในระหว่างการทำ Action ต่างๆในระบบ Opstella เช่น กำลัง Action อะไรบางอย่างในระบบ Opstella แล้วมี DevOpsTool บางตัวพังพอดีจึงทำให้ Action นั้นไม่สำเร็จ

## การ Sync Platform

1. คลิกที่เมนู “App Inventory” ดังรูป

   ![syncPlatform](/images/usecase/clone-application/cloneApplication1.png)

2. คลิกเลือก Platform ที่ต้องการ Sync ข้อมูล ดังรูป

   ![syncPlatform](/images/usecase/clone-application/cloneApplication2.png)

3. คลิกที่ปุ่ม option ของ Platform ที่ต้องการ และเลือกเมนู “Sync Platform” ดังรูป

   ![syncPlatform](/images/troubleshoot/sync/syncPlatform1.png)

4. ระบบจะปรากฏหน้าจอ Pop-up แจ้งยืนยันการ Sync ข้อมูล Platform โดยให้ผู้ใช้งานคลิกที่ปุ่ม “Confirm” เพื่อยืนยันการ Sync หรือคลิกที่ปุ่ม “Cancel” หากยังไม่ต้องการ Sync ข้อมูล ดังรูป

   ![syncPlatform](/images/troubleshoot/sync/syncPlatform2.png)

5. หลังจากนั้นระบบจะปรากฏรายการ Platform ที่กำลังดำเนินการ Sync ดังรูป

   ![syncPlatform](/images/troubleshoot/sync/syncPlatform3.png)

**<u>หมายเหตุ</u> เนื่องจาก Platform เป็น Layer ที่อยู่สูงกว่า Layer Service และ Layer Component การ Sync Platform จะเป็นการ Sync Service และ Component ที่อยู่ภายใต้ Platform นั้นๆด้วย**
