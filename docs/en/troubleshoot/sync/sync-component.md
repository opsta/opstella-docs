# Sync Component

Sync Component คือการ Update ข้อมูลใน DevOpsTool ทั้งหมดให้ตรงกับในระบบ Opstella ซึ่งแนะนำให้กด ปุ่ม Sync Component ก็ต่อเมื่อตรวจพบว่ามีข้อมูลบางส่วนใน DevOpsTool ไม่ตรงกับในระบบ Opstella เพราะ อาจเกิดความผิดพลาดในระหว่างการทำ Action ต่างๆในระบบ Opstella เช่น กำลัง Action อะไรบางอย่างในระบบ Opstella แล้วมี DevOpsTool บางตัวพังพอดีจึงทำให้ Action นั้นไม่สำเร็จ

## การ Sync Component

1. คลิกที่เมนู “App Inventory” ดังรูป

   ![syncComponent](/images/usecase/clone-application/cloneApplication1.png)

2. คลิกเลือก Platform ที่เป็นเจ้าของ Component ที่ต้องการ Sync ดังรูป

   ![syncComponent](/images/usecase/clone-application/cloneApplication2.png)

3. เลือก Service ที่มี Component ที่ต้องการ Sync

   ![syncComponent](/images/troubleshoot/sync/syncComponent3.png)

4. คลิกที่ปุ่ม option ของ component ที่ต้องการ Sync และเลือกเมนู “Sync Component” ดังรูป

   ![syncComponent](/images/troubleshoot/sync/syncComponent1.png)

5. หลังจากนั้นระบบจะทำการดำเนินการ Sync component โดยแสดง component ในสถานะกำลังดำเนินการ ดังรูป

   ![syncComponent](/images/troubleshoot/sync/syncComponent2.png)
