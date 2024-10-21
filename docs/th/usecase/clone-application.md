# Clone Application

## การ Clone Component

1. คลิกที่เมนู “App Inventory” ดังรูป

   ![Logo Clone](/images/usecase/clone-application/cloneApplication1.png)

2. เลือก Platform ของ Component ที่ต้องการจะทำการ Clone แล้วจะทำการแสดงรายการ platform ดังรูป

   ![Logo Clone](/images/usecase/clone-application/cloneApplication2.png)

3. เลือก Service ของ Component ที่ต้องการจะทำการ Clone โดยกดขยายรายการ Component เพื่อแสดงรายการ Component ดังรูป

   ![Logo Clone](/images/usecase/clone-application/cloneApplication3.png)

4. คลิกที่ปุ่ม option ของ component ที่ต้องการ Clone และเลือกเมนู “Clone” ดังรูป

   ![Logo Clone](/images/usecase/clone-application/cloneApplication4.png)

5. จะแสดงหน้าต่างสำหรับเลือกปลายทางที่ต้องการจะการ Clone ไปอยู่ใต้ Service ปลายทาง โดยให้เลือก Platform และ Service โดยไม่สามารถเลือก Service เดิมได้ บังคับให้กรอกชื่อของ Component ใหม่ จากนั้นเมื่อกด Clone จะเริ่มทำการ Clone Component ดังรูป

   ![Logo Clone](/images/usecase/clone-application/cloneApplication5.png)

**<u>หมายเหตุ</u> Component จะมีข้อมูลที่เหมือนกับ Component ต้นแบบทุกอย่างรวมไปถึง source code ที่อยู่ภายใน gitlab <u>แต่จะแตกต่างเพียง Slug</u> ที่ถูกเปลี่ยนเป็นของ Component ที่ถูกสร้างใหม่ และก่อน run pipeline หรือ merge branch template <u>ให้แก้ helm value</u> ใน template ก่อนเสมอ เพราะ ข้อมูลยังเป็นของ Component ต้นแบบ**

6. หน้าแสดงการทำรายการสำเร็จ

   ![Logo Clone](/images/usecase/clone-application/cloneApplication6.png)

7. Component ใหม่ถูกสร้างสำเร็จ

   ![Logo Clone](/images/usecase/clone-application/cloneApplication7.png)
