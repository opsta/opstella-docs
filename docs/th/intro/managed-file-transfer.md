---
outline: deep
---

## Managed File Transfer

**Opstella Managed File Transfer คือบริการ SFTP ที่ปลอดภัยสำหรับแลกเปลี่ยนไฟล์กับคู่ค้าและระบบภายนอก ขับเคลื่อนด้วย SFTPGo และ deploy แบบ Kubernetes-native เคียงข้างส่วนอื่นของแพลตฟอร์ม** ผู้ใช้ฝั่งคู่ค้า โฟลเดอร์ และสิทธิ์ของแต่ละราย บริหารผ่านคอนโซลเว็บและ REST API เต็มรูปแบบ — และทุกไฟล์ที่เข้ามาสามารถสั่งให้ pipeline ปลายทางเริ่มประมวลผลได้โดยอัตโนมัติ

<img class="light-only" alt="สถาปัตยกรรม Opstella Managed File Transfer" src="/images/intro/managed-file-transfer/mft-architecture.svg" data-zoomable />
<img class="dark-only" alt="สถาปัตยกรรม Opstella Managed File Transfer" src="/images/intro/managed-file-transfer/mft-architecture-dark.svg" data-zoomable />

::: tip สร้างบน SFTPGo
Opstella จัดเตรียม deploy และดูแล [SFTPGo](https://sftpgo.com/) — SFTP Server แบบ Event-Driven ที่พิสูจน์แล้ว — ในรูปแบบ Stateless Replica บน Kubernetes พร้อมส่ง Log การรับส่งไฟล์และ Metrics เข้าสู่ระบบ [Observability](./observability) ของแพลตฟอร์มโดยตรง
:::

## <ins>**ความสามารถหลัก**</ins>

### บริหารผู้ใช้ SFTP — ทั้งเว็บและ API

ผู้ดูแลระบบ **แสดง สร้าง และแก้ไขผู้ใช้ SFTP** ผ่านคอนโซลเว็บในตัว หรือควบคุมทุกอย่างเชิงโปรแกรมผ่าน **REST API ครบชุด** — เหมาะสำหรับผูกการจัดการผู้ใช้เข้ากับหน้าจอบริหารและ Workflow ทางธุรกิจของคุณเอง ผู้ใช้แต่ละรายมีข้อมูลรับรองอิสระ (รหัสผ่าน และ/หรือ SSH Public Key) และเห็นพื้นที่ไฟล์เฉพาะของตน

### กำหนดสิทธิ์ราย Path ด้วย Virtual Folder

คู่ค้าแต่ละรายเห็นเฉพาะโฟลเดอร์ที่ได้รับสิทธิ์ **Virtual Folder** จับคู่ตำแหน่งจัดเก็บใด ๆ เข้าสู่พื้นที่ของผู้ใช้ — แบบส่วนตัวหรือแชร์ร่วม — และ **สิทธิ์กำหนดเป็นรายไดเรกทอรี**: List, Upload, Download, Overwrite, Delete และ Rename อนุญาตหรือปฏิเสธแยกตาม Path ได้ทั้งหมด รูปแบบที่ใช้บ่อยคือแยกโฟลเดอร์ตามประเภทข้อมูล — เช่น *Transaction*, *Incomplete*, *Enrollment*, *DDCC*, *Offline* และ *Adjustment* — แต่ละโฟลเดอร์ให้สิทธิ์เท่าที่คู่สัญญาจำเป็นเท่านั้น

### Storage Backend ยืดหยุ่น

ไฟล์จัดเก็บได้บน **Object Storage ที่รองรับ S3** (ดู [Object Storage](./object-storage)), Network File System หรือ Local Volume — เลือกได้รายผู้ใช้และรายโฟลเดอร์ เมื่อใช้ Object Storage เป็น Backend ไฟล์ที่รับเข้าทาง SFTP จะอ่านได้ทันทีจากแอปพลิเคชันประมวลผลผ่าน S3 API โดยไม่ต้องผูกระบบกันด้วยดิสก์แชร์

### ประมวลผลแบบ Event-Driven

**Event Manager** ในตัวตอบสนองต่อการ Upload, Download และเหตุการณ์ไฟล์อื่น ๆ โดยเรียก **Webhook** หรือรันการกระทำอัตโนมัติ — ไฟล์กระทบยอดที่เข้ามาจึงเริ่มกระบวนการตรวจสอบและนำเข้าได้ทันทีที่อัปโหลดเสร็จ ไม่ต้องรอ Job ที่คอยวนเช็ค

### การควบคุมการเข้าถึงอย่างรัดกุม

จำกัดการเชื่อมต่อด้วย **IP Allow List รายผู้ใช้** ปกป้องการเข้าระบบด้วยการยืนยันตัวตนที่ตั้งค่าได้ (รหัสผ่าน, Public Key หรือทั้งคู่) และปิด Session ที่ไม่มีการใช้งานอัตโนมัติ บริการทำงานหลัง TCP Load Balancer ที่เปิด PROXY Protocol จึงเก็บ IP ต้นทางจริงของคู่ค้าไว้ใช้คัดกรองและตรวจสอบได้

### บันทึกการรับส่งไฟล์ครบถ้วน

ทุก Session และทุกการรับส่งถูกบันทึก — **ผู้ใช้, IP ต้นทาง, การกระทำ, Path ของไฟล์, ขนาด และเวลา** — ในรูปแบบ Structured Log ส่งเข้าสู่ pipeline Logging รวมศูนย์ที่ค้นหาได้และเก็บตามนโยบาย งานกระทบยอดและการตรวจสอบความปลอดภัยจึงอ้างอิงบันทึกชุดเดียวที่เชื่อถือได้ว่าใครส่งอะไร เมื่อไร

### High Availability และการขยายตัว

SFTPGo ทำงานเป็น **Stateless Replica ที่มี PostgreSQL อยู่เบื้องหลัง** โดย SSH Host Key ถูกเก็บถาวร คู่ค้าจึงไม่เจอปัญหา Host Key เปลี่ยน Replica ขยายแนวนอนหลัง Load Balancer ได้ และอัปเดตแบบ Rolling โดยไม่กระทบการรับส่งไฟล์ของคู่ค้า

## <ins>**มาตรฐานและการปฏิบัติตามข้อกำหนด**</ins>

| ด้านข้อกำหนด | Opstella Managed File Transfer ตอบโจทย์อย่างไร |
| --- | --- |
| **บริหารผู้ใช้** | แสดง สร้าง แก้ไขผู้ใช้ SFTP ผ่านคอนโซลเว็บและ REST API เต็มรูปแบบ |
| **สิทธิ์ตาม Path** | สิทธิ์รายผู้ใช้ รายไดเรกทอรี ผ่าน Virtual Folder; แยกโฟลเดอร์ตามประเภทข้อมูล |
| **Storage** | Object Storage แบบ S3, NFS หรือ Local Volume — เลือกได้รายผู้ใช้และโฟลเดอร์ |
| **Automation** | Event Manager เรียก Webhook สั่งประมวลผลปลายทางทันทีที่อัปโหลดเสร็จ |
| **ความปลอดภัยเครือข่าย** | IP Allow List รายผู้ใช้, ยืนยันตัวตนด้วย Key/Password, เก็บ IP จริงผ่าน PROXY Protocol |
| **Audit** | Structured Log ของทุก Session และการรับส่ง รวมศูนย์และเก็บตามนโยบาย |
| **ความพร้อมใช้งาน** | Stateless Replica บน Kubernetes พร้อม Host Key ถาวร และอัปเดตแบบไม่มี Downtime |

::: info
โครงสร้างโฟลเดอร์ โมเดลสิทธิ์ และ Workflow ของเหตุการณ์ ออกแบบร่วมกันตอนติดตั้งให้ตรงกับข้อกำหนดการแลกเปลี่ยนไฟล์กับคู่ค้าของคุณ
:::
