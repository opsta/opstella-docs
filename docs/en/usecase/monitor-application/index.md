# Monitor Application

**การติดตามแอปพลิเคชัน (Monitor application)** หรือที่เรียกว่า การติดตามประสิทธิภาพแอปพลิเคชัน (Application performance monitoring - APM) หมายถึงกระบวนการติดตามและวิเคราะห์การทำงานของแอปพลิเคชันซอฟต์แวร์ เป้าหมายหลักคือเพื่อให้แน่ใจว่าแอปพลิเคชันทำงานได้อย่างราบรื่น มีประสิทธิภาพ และตอบสนองความต้องการของผู้ใช้งาน

**ซึ่งแอปพลิเคชันที่ต้องการติดตามจะผ่านกระบวนการ [Deploy Application On Gitlab](../../deploy-application/deploy-on-gitlab/index.md) มาก่อน เมื่อทำการ deploy application แล้ว ข้อมูลจึงปรากฏใน Grafana**

## วิธีใช้งาน Grafana เบื้องต้น {#monitor-application-basic}

1.คลิกที่เมนู "SSO" ดังรูป
![Img Welcome Page](/images/usecase/monitor-application/00.png)

2.เลือก Platform ที่ต้องการด้านบนขวา ดังรูป
![Img SSO Page](/images/usecase/monitor-application/01.png)

3.คลิกเลือกที่ปุ่ม grafana ดังรูป
![Img SSO Page Select Grafana](/images/usecase/monitor-application/02.png)

4.ระบบจะแสดงหน้าต่างขึ้นใหม่เพื่อเข้าสู่ grafana **ทำการเข้าสู่ระบบด้วยการคลิกที่ปุ่ม login** ดังรูป
![Img Page Grafana](/images/usecase/monitor-application/03.png)

5.เมื่อเข้าสู่ระบบสำเร็จ ระบบจะแสดงหน้า welcome ดังรูป
![Img Grafana Welcome](/images/usecase/monitor-application/13.png)

**รายละเอียด เมนู**

1. เมนู switch organization **(1)**
2. เมนูหลักๆ **(2)**
3. ช่องค้นหา **(3)**
4. เมนูผู้ใช้งานจะอยู่ด้านขวาบน **(4)** เกี่ยวข้องกับการจัดการข้อมูล user ทั้งหมด
