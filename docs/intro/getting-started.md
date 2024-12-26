# Introduction

The process of creating an application for actual use is called the Software Development Life Cycle (SDLC), which begins with the following steps:

**1. Planning and Requirements Analysis:** Involves defining the project scope, gathering user requirements, and creating a project plan. <br />
**2. Design** This step involves designing the system based on the gathered requirements. <br />
**3. Development:** Involves writing the software code according to the design documents. <br />
**4. Testing:** Rigorous testing is conducted throughout the development process to identify and fix defects and ensure the software works as expected. <br />
**5. การนำไปใช้ (Deploy):** ซอฟต์แวร์จะเผยแพร่สู่สภาพแวดล้อม และพร้อมใช้งานสำหรับผู้ใช้ <br />
**6. การบำรุงรักษา:** หลังจากการนำไปใช้ ซอฟต์แวร์จะได้รับการตรวจสอบเพื่อหาปัญหาและข้อบกพร่อง การอัปเดตและเพิ่มคุณสมบัติใหม่ๆ <br />

**ในปัจจุบันการทำขั้นตอนดังด้านบน เพื่อทำการส่งออกซอฟต์แวร์ มีการพัฒนาให้ใช้เวลาสั้นลงใน 1 วงจร การลดเวลาในการทำ 1 วงจรมีข้อดีคือ**

<ol style="margin-left: 8px;">
    <li>ตอบสนองต่อ feedback ได้อย่างรวดเร็ว</li>
    <li>เพิ่มประสิทธิภาพการพัฒนา</li>
    <li>ลดความซับซ้อนของซอฟต์แวร์</li>
</ol>

## ทำไมต้องใช้ Opstella

ขั้นตอนใน 1 วงจร มีหลายขั้นตอน การทำงาน Opstella สามารถทำงานทั้งหมดได้แบบ Automation เพื่อลดระยะเวลาและลดความซับซ้อนของขั้นตอนต่างๆ

![Opstella On Board app!](/images/intro/getting-started/opstella-on-board-app.png){data-zoomable}

## หลักการทำงาน

<ol>
    <li>ผู้ใช้งาน <b>push source code</b> ไปไว้ที่ VCS (gitlab)</li>
    <li>จากนั้น Gitlab จะทำงานขั้นตอน <b>CI</b>
        <ol style="list-style-type:lower-roman">
            <li>Unittest > Scan Source Code > Build</li>
            <li>เมื่อ Build image เสร็จสิ้น จะทำการ push image ไปไว้ที่ Registry (Harbor)</li>
            <li>จากนั้น trivy จะทำการ scan image quarity</li>
        </ol>
    </li>
    <li>จากนั้นจะทำงานขั้นตอน <b>CD</b>
        <ol style="list-style-type:lower-roman">
            <li>โดยการ pull image จาก Registry เพื่อนำไป deploy ที่ Kubernetes ตาม env ที่ต้องการ</li>
        </ol>
    </li>
</ol>

**โดยที่เมื่อ application ใช้งานจริงแล้วจะมี เครื่องมือที่จะคอยตรวจสอบการทำงานของ application ที่ได้ทำการ deploy ไปใช้งานจริง**