# การนำ Template มาใช้งานในระบบ Opstella (Global Template)

1. กรอกลิงก์ **gitlab** บนช่องที่อยู่ของเว็บไซต์บนเว็บเบราว์เซอร์ ระบบจะปรากฏหน้าจอลงชื่อเข้าสู่ระบบ GitLab

2. เมื่อเข้าสู่ระบบสำเร็จแล้ว ให้คลิกที่ปุ่ม **“Menu”** จากนั้นคลิกที่เมนู **“Groups”** และ คลิกที่เมนูย่อย **“Your groups”** ดังรูป

![troubleShootPipeline](/images/usecase/template/global/2.png)

3. เมื่อเข้าสู่หน้า Group แล้วให้ทำการค้นหา group โดยคนหาด้วยคำว่า **“global template”**

![troubleShootPipeline](/images/usecase/template/global/3.png)

4. เมื่อค้นหาพบให้ทำการกดเลือกเพื่อเข้าสู่ Group

![troubleShootPipeline](/images/usecase/template/global/4.png)

5. เมื่อเข้าสู่ Group ให้ทำการกดปุ่ม **“New project”** เพื่อสร้าง project ที่เก็บ source code template

![troubleShootPipeline](/images/usecase/template/global/5.png)

6. หลังจากกดปุ่ม **New projec**t จะแสดงหน้าตัวเลือก เพื่อให้เลือกตัวเลือกในการสร้าง project ให้ผู้ใช้ทำการคลิกปุ่ม **“Create blank project”**

![troubleShootPipeline](/images/usecase/template/global/6.png)

7. ระบบจะแสดงหน้าเพื่อให้กรอกข้อมูล project จากนั้นกดปุ่ม **“create project”**

![troubleShootPipeline](/images/usecase/template/global/7.png)

**<u>หมายเหตุ</u> ชื่อโปรเจคจะนำไปแสดงที่ส่วนของ opstella ในการใช้งานหน้า create component**

8. เมื่อสร้าง project สำเร็จ ระบบจะแสดงดังรูป

![troubleShootPipeline](/images/usecase/template/global/8.png)

9. จากนั้นกดเข้าเมนู **“Branches”** เพื่อทำการสร้าง branch สำหรับจัดทำเป็นเวอร์ชั่นของ source code

![troubleShootPipeline](/images/usecase/template/global/9.png)

**<u>หมายเหตุ</u> สามารถกดเข้าเมนู branch ได้ด้วยอีก 1 วิธีคือการกดเมนูที่ด้านซ้าย เมนู “Repository” จากนั้นเลือก “Branches”**

![troubleShootPipeline](/images/usecase/template/global/91.png)

10. จากนั้นทำการสร้าง branch **ที่เป็น version ของ template**

![troubleShootPipeline](/images/usecase/template/global/11.png)

11. เมื่อสร้าง branch เสร็จสิ้นระบบจะนำผู้ใช้งานไปที่หน้า project (branch ที่สร้าง)

![troubleShootPipeline](/images/usecase/template/global/12.png)

12. จากนั้นให้ผู้ใช้งาน เพิ่ม source code ที่ต้องการทำเป็น template และทำการ **push source code ไปที่ repository นี้**

13. เริ่มต้นการ clone เพื่อนำ repository นี้ ไปปรับแต่งเพิ่ม กดที่ปุ่ม **“Clone”** และทำการคัดลอก url เพื่อทำการ clone

![troubleShootPipeline](/images/usecase/template/global/13.png)

14. เปิด **terminal (Ubuntu, MacOS) หรือ powershell (windows)** และ
    ทำการพิมพ์คำสั่ง **“git clone link”** ส่วนของ link นำ link ที่ได้ทำการคัดลอก url มาแทนและกด enter

![troubleShootPipeline](/images/usecase/template/global/14.png)

![troubleShootPipeline](/images/usecase/template/global/15.png)

![troubleShootPipeline](/images/usecase/template/global/16.png)

15. เมื่อผู้ใช้งานปรับแต่งแก้ไข source code เสร็จเมื่อทำการ push source code เรียบร้อย source code จะถูกเก็บอยู่ที่ repository ใน gitlab

![troubleShootPipeline](/images/usecase/template/global/17.png)

![troubleShootPipeline](/images/usecase/template/global/18.png)

16. การอัพเดตภาพหรือ logo ของ template สามารถเพิ่มรูปได้ที่ branch main โดยชื่อรูปภาพคือ **“logo.svg”**

![troubleShootPipeline](/images/usecase/template/global/19.png)

17. จากนั้นเข้าสู่ระบบ opstella และไปที่หน้า **Create Component**

![troubleShootPipeline](/images/usecase/template/global/20.png)

18. ระบบแสดงหน้า create component จะเห็นได้ว่า template ที่ได้ทำการสร้าง ยังไม่แสดงที่หน้า create component **ให้ทำการกดปุ่มเพื่อ sync ข้อมูล**

![troubleShootPipeline](/images/usecase/template/global/21.png)

![troubleShootPipeline](/images/usecase/template/global/22.png)

19. เมื่อระบบทำการ sync ข้อมูลสำเร็จ ระบบจะแสดง template ที่ผู้ใช้งานสร้างดังภาพ

![troubleShootPipeline](/images/usecase/template/global/23.png)
