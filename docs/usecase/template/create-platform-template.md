# การนำ Template มาใช้งานในระบบ Opstella (Platform Template)

1. กรอกลิงก์ **Gitlab** บนช่องที่อยู่ของเว็บไซต์บนเว็บเบราว์เซอร์ ระบบจะปรากฏหน้าจอลงชื่อเข้าสู่ระบบ GitLab

2. เมื่อเข้าสู่ระบบสำเร็จแล้ว ให้คลิกที่ปุ่ม **“Menu”** จากนั้นคลิกที่เมนู **“Groups”** และ คลิกที่เมนูย่อย **“Your groups**” ดังรูป

![troubleShootPipeline](/images/usecase/template/platform/2.png)

3. ค้นหาชื่อ company ของผู้ใช้งานในระบบ opstella (ตัวอย่างคือ consultant)

![troubleShootPipeline](/images/usecase/template/platform/3.png)

4. เลือก platform ที่ผู้ใช้งานต้องการเพิ่ม template (ตัวอย่างคือ argocd2)

![troubleShootPipeline](/images/usecase/template/platform/4.png)

5. ระบบจะแสดงรายละเอียดของ **Group template**
   ![troubleShootPipeline](/images/usecase/template/platform/5.png)

6. สร้างโปรเจคใหม่สามารถทำได้ 2 วิธี โดยกดปุ่มสีฟ้า **“New project”** หรือ **“Create new project”**

![troubleShootPipeline](/images/usecase/template/platform/6.png)

7. ระบบจะแสดงตัวเลือกในการสร้าง project ให้ผู้ใช้ทำการเลือก **blank project**

![troubleShootPipeline](/images/usecase/template/platform/7.png)

8. เมื่อทำการสร้าง project เรียบร้อย ระบบจะแสดงผล repository ดังรูป

![troubleShootPipeline](/images/usecase/template/platform/8.png)

9. จากนั้นกดเข้าเมนู **“Branches”** เพื่อทำการสร้าง branch สำหรับจัดทำเป็นเวอร์ชั่นของ source code

![troubleShootPipeline](/images/usecase/template/platform/9.png)

**<u>หมายเหตุ</u> สามารถกดเข้าเมนู branch ได้ด้วยอีก 1 วิธีคือการกดเมนูที่ด้านซ้าย เมนู “Repository” จากนั้นเลือก “Branches”**

![troubleShootPipeline](/images/usecase/template/platform/91.png)

10. จากนั้นทำการสร้าง branch ที่เป็น version ของ template

![troubleShootPipeline](/images/usecase/template/platform/10.png)

11. เมื่อสร้าง branch เสร็จสิ้นระบบจะนำผู้ใช้งานไปที่หน้า project (branch ที่สร้าง)

![troubleShootPipeline](/images/usecase/template/platform/11.png)

12. จากนั้นให้ผู้ใช้งาน เพิ่ม source code ที่ต้องการทำเป็น template และ**ทำการ push source code ไปที่ repository นี้**

13. เริ่มต้นการ clone เพื่อนำ repository นี้ ไปปรับแต่งเพิ่ม กดที่ปุ่ม **“Clone”** และทำการคัดลอก url เพื่อทำการ clone

![troubleShootPipeline](/images/usecase/template/platform/12.png)

14. เปิด **terminal (Ubuntu, MacOS) หรือ powershell (windows)** และ
    ทำการพิมพ์คำสั่ง **“git clone link”** ส่วนของ link นำ link ที่ได้ทำการคัดลอก url มาแทนและกด enter

![troubleShootPipeline](/images/usecase/template/platform/13.png)

![troubleShootPipeline](/images/usecase/template/platform/14.png)

![troubleShootPipeline](/images/usecase/template/platform/15.png)

15. เมื่อผู้ใช้งานปรับแต่งแก้ไข source code เสร็จเมื่อทำการ push source code เรียบร้อย source code จะถูกเก็บอยู่ที่ repository ใน gitlab

![troubleShootPipeline](/images/usecase/template/platform/16.png)

![troubleShootPipeline](/images/usecase/template/platform/17.png)

16. การอัพเดตภาพหรือ logo ของ template สามารถเพิ่มรูปได้ที่ branch main โดยชื่อรูปภาพคือ **“logo.svg”**

![troubleShootPipeline](/images/usecase/template/platform/18.png)

17. จากนั้นเข้าสู่ระบบ opstella และไปที่หน้า create component โดยต้องอยู่ภายใต้ platform ที่ได้ทำการใส่ template เข้าไป

![troubleShootPipeline](/images/usecase/template/platform/19.png)

18. ระบบแสดงหน้า create component จะเห็นได้ว่า template ที่ได้ทำการสร้าง ยังไม่แสดงที่หน้า create component **ให้ทำการกดปุ่มเพื่อ sync ข้อมูล**

![troubleShootPipeline](/images/usecase/template/platform/20.png)

![troubleShootPipeline](/images/usecase/template/platform/21.png)

19. เมื่อระบบทำการ sync ข้อมูลสำเร็จ ระบบจะแสดง template ที่ผู้ใช้งานสร้างดังภาพ

![troubleShootPipeline](/images/usecase/template/platform/22.png)
