# Template

![troubleShootPipeline](/images/usecase/template/template1.png)

## Opstella Template

คือ template ที่ทาง Opstella เตรียมไว้ให้ โดยประกอบด้วย **source code , docker file และ helm value**

## Global Template

คือ template ที่ทางลูกค้าสามารถจัดทำเองและนำไปใช้งานเป็นได้ **โดยการใช้งานจะสามารถใช้ template นี้ได้ทั้ง company** โดยที่ตั้งของ template นี้จะอยู่ที่ Gitlab โดยเป็น Group ที่ชื่อว่า global-template

![troubleShootPipeline](/images/usecase/template/template2.png)

<ins>หมายเหตุ</ins> สามารถดูวิธีการใช้งานได้ที่ [การนำ Template มาใช้งานในระบบ Opstella (Global Template)](./create-global-template)

## Platform Template

คือ template ที่ทางลูกค้าสามารถจัดทำเองและนำไปใช้งานได้ **โดยการใช้งานจะสามารถใช้ template นี้ได้ ภายใน platform นั้น ไม่สามารถใช้ข้าม platform** โดยที่ตั้งของ template นี้จะเก็บอยู่ที่ Gitlab ภายใต้ platform และเป็น Group ที่ชื่อว่า opstella-template

![troubleShootPipeline](/images/usecase/template/template4.png)

<ins>หมายเหตุ</ins> สามารถดูวิธีการใช้งานได้ที่ [การนำ Template มาใช้งานในระบบ Opstella (Platform Template)](./create-platform-template)
