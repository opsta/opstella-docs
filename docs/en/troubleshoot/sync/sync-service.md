# Sync Service

Sync Service คือการ Update ข้อมูลใน DevOpsTool ทั้งหมดให้ตรงกับในระบบ Opstella ซึ่งแนะนำให้กด ปุ่ม Sync Service ก็ต่อเมื่อตรวจพบว่ามีข้อมูลบางส่วนใน DevOpsTool ไม่ตรงกับในระบบ Opstella เพราะ อาจเกิดความผิดพลาดในระหว่างการทำ Action ต่างๆในระบบ Opstella เช่น กำลัง Action อะไรบางอย่างในระบบ Opstella แล้วมี DevOpsTool บางตัวพังพอดีจึงทำให้ Action นั้นไม่สำเร็จ

## การ Sync Service

1. คลิกที่เมนู “App Inventory” ดังรูป

   ![syncService](/images/usecase/clone-application/cloneApplication1.png)

2. คลิกเลือก Platform เพื่อเข้าไปสู่เมนู service ที่ต้องการ Sync ข้อมูล ดังรูป

   ![syncService](/images/usecase/clone-application/cloneApplication2.png)

3. คลิกที่ปุ่ม option ของ service ที่ต้องการ Sync และเลือกเมนู “Sync Service” ดังรูป

   ![syncService](/images/troubleshoot/sync/syncService1.png)

4. หลังจากนั้นระบบจะปรากฏรายการ Service ที่กำลังดำเนินการ Sync ดังรูป

   ![syncService](/images/troubleshoot/sync/syncService2.png)

**<u>หมายเหตุ</u> เนื่องจาก Service เป็น Layer ที่อยู่สูงกว่า Layer Component การ Sync Service จะเป็นการ Sync Component ที่อยู่ภายใต้ Service นั้นๆด้วย**
