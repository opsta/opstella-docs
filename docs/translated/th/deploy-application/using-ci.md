# Using CI

จากส่วนการ Deploy on Gitlab จะพบว่ามีการ Run pipeline จะแบ่งเป็นส่วน CI และ CD ในหัวข้อนี้จะอธิบายในส่วนของ CI ภายใน gitlab ของระบบ opstella ประกอบด้วยอะไร และสามารถแก้ไขในส่วนไหนได้บ้าง ในส่วนของรายละเอียดภายใน template สามารถดูได้ที่ **[Manage Pipeline](../usecase/manage-pipeline.md)** และเรื่องของการใช้งาน Onechart ภายใน Opstella ได้ที่ **[Using Onechart](../usecase/using-onechart.md)**

## Gitlab CI

![UsingCI1](/images/deploy-application/using-ci/gitlab.png){data-zoomable}

จากรูปจะอธิบายการทำงานของ **gitlab ci** เมื่อมีการ commit ใดๆ ขึ้นมาใน repo ที่มีไฟล์ yaml ที่เขียน gitlab ci จะมีการ run pipeline เกิดขึ้น โดยสามารถกำหนดเงื่อนไขที่จะให้ทำงาน หรือไม่ทำงาน หรือทำงานหลายเงื่อนไขได้ เช่น

- ถ้า merge branch ที่กำหนดให้ run pipeline
- ถ้า commit ขึ้นมาใน branch ที่กำหนดให้ run pipeline
- ถ้ากด run pipeline เองให้ทำงานแค่บางอย่าง

ซึ่งในส่วนของ CI คือการทำงานเพื่อให้ได้ผลลัพธ์เป็น image หรือไฟล์ที่ใช้ Deploy ต่อไป ในขั้นตอนนี้มักจะประกอบไปด้วย การทดสอบ test case, ตรวจสอบคุณภาพ code หรือไปเรียกการทำงานของ devops tool เป็นต้น

## Opstella Pipeline

pipeline ของ **Opstella** จะมีอยู่ 4 stage หลัก **ดังรูป**

![UsingCI5](/images/deploy-application/using-ci/pipeline.png){data-zoomable}

- **Init** คือ ส่วนที่ดึงตัวแปรมาเตรียมใช้สำหรับ stage ถัดไป
- **Security** คือ ส่วน scan source code Sonarqube
- **Build** คือ ส่วนที่ build code ออกมาเป็น image แล้ว push ไปเก็บบน Harbor
- **Update-gitops-image-tag** คือ ส่วนที่นำ tag และชื่อ image ไป update ยัง gitops เพื่อให้ argoCD ทำการ Deploy ต่อไป
