---
outline: deep
---

## Object Storage

**Opstella Object Storage คือบริการจัดเก็บข้อมูลแบบ Object ที่รองรับ S3 API สำหรับทั้งแพลตฟอร์ม ขับเคลื่อนด้วย SeaweedFS และ deploy แบบ On-Premise อย่างสมบูรณ์** ให้ทุกองค์ประกอบ — คลังข้อมูล Observability ระยะยาว, Backup, การแลกเปลี่ยนไฟล์ และแอปพลิเคชันของคุณเอง — มีที่จัดเก็บข้อมูลมาตรฐานเดียวที่ทนทาน พร้อม Lifecycle Policy ที่ย้ายข้อมูลเก่าไปยังพื้นที่ราคาถูกโดยอัตโนมัติ แทนที่จะปล่อยให้กิน Hot Storage ราคาแพง

<img class="light-only" alt="สถาปัตยกรรม Opstella Object Storage" src="/images/intro/object-storage/object-storage-architecture.svg" data-zoomable />
<img class="dark-only" alt="สถาปัตยกรรม Opstella Object Storage" src="/images/intro/object-storage/object-storage-architecture-dark.svg" data-zoomable />

::: tip สร้างบน SeaweedFS — หรือใช้ Storage ที่คุณมีอยู่
Opstella จัดเตรียมและดูแล [SeaweedFS](https://github.com/seaweedfs/seaweedfs) (สัญญาอนุญาต Apache-2.0) เป็น Object Store มาตรฐานของแพลตฟอร์ม แต่หากองค์กรของคุณมี Storage ที่รองรับ S3 อยู่แล้ว — Storage Appliance, MinIO หรือบริการ Private Cloud — Opstella เชื่อมต่อใช้งานได้โดยตรง เพราะผู้ใช้งานทุกส่วนคุยกันด้วย S3 API มาตรฐาน
:::

## <ins>**ความสามารถหลัก**</ins>

### S3 API มาตรฐาน

การเข้าถึงทั้งหมดผ่าน **Amazon S3 API** — Bucket, Object, Multipart Upload, Presigned URL, Versioning และ Access Key — เครื่องมือหรือไลบรารีใดที่รองรับ S3 ใช้งานได้ทันที แอปพลิเคชันไม่ต้องใช้ SDK เฉพาะค่าย และเปลี่ยนหรือย้าย Storage ได้โดยไม่ต้องแก้โค้ดแอปพลิเคชันแม้แต่บรรทัดเดียว

### คลังเก็บข้อมูล Observability ระยะยาว

Object Storage คือ **ชั้นจัดเก็บระยะยาวเบื้องหลัง Loki, Mimir และ Tempo** — Logs, Metrics และ Traces ที่เกินช่วง Hot Retention ถูกย้ายมาที่นี่โดยอัตโนมัติ และยังคงค้นหาผ่าน Grafana ได้ ทำให้เก็บประวัติข้อมูลได้เป็นปีหรือมากกว่า ด้วยต้นทุนเพียงเศษเสี้ยวของ Block Storage (ดู [Observability](./observability))

### Lifecycle และนโยบายการจัดเก็บ

แต่ละ Bucket ตั้งค่า **Lifecycle Rule** ให้ลบหรือย้าย Object เมื่อถึงอายุที่กำหนดได้ — เช่น ย้ายข้อมูลปฏิบัติการที่เก่ากว่า 365 วันเข้า Bucket สำหรับ Archive โดยอัตโนมัติ การจัดเก็บถูกบังคับใช้ด้วยนโยบาย ไม่ใช่การจัดการด้วยมือ ทำให้การใช้พื้นที่คาดการณ์และตรวจสอบได้

### ความทนทานและ High Availability

ข้อมูลถูก **Replicate ข้าม Volume Server และ Node** โดยกำหนดระดับ Replication ต่อ Bucket ได้ คลัสเตอร์ทนต่อความเสียหายของดิสก์และ Node ได้โดยไม่กระทบบริการ ขยายแนวนอนได้ด้วยการเพิ่ม Volume Server และออกแบบมาให้รองรับไฟล์เล็กจำนวนมหาศาลได้ดีพอ ๆ กับไฟล์ Archive ขนาดใหญ่

### การควบคุมการเข้าถึงและความปลอดภัย

การเข้าถึงควบคุมด้วย **Access Key รายแอปพลิเคชันและ Policy ระดับ Bucket** แต่ละองค์ประกอบหรือทีมจึงอ่าน/เขียนได้เฉพาะข้อมูลของตน รับส่งข้อมูลผ่าน TLS และข้อมูลทั้งหมดอยู่ภายในเครือข่ายของคุณ — ไม่มีการ Replicate ไปยังบริการภายนอกหรือสาธารณะใด ๆ

### ไม่มีข้อจำกัดด้าน License

SeaweedFS เป็น **Open Source ภายใต้สัญญาอนุญาต Apache-2.0** — ไม่มีค่า License ตามจำนวน Object, ตาม Gigabyte หรือตาม Request และไม่มีเพดานจำนวน Bucket, Object หรือ API Call ตลอดอายุการใช้งานแพลตฟอร์ม

## <ins>**มาตรฐานและการปฏิบัติตามข้อกำหนด**</ins>

| ด้านข้อกำหนด | Opstella Object Storage ตอบโจทย์อย่างไร |
| --- | --- |
| **Interface** | Amazon S3 API มาตรฐาน เข้ากันได้กับแอปพลิเคชันหรือเครื่องมือที่รองรับ S3 ทุกตัว |
| **การ Archive ข้อมูล** | ย้าย Logs, Metrics, Traces และข้อมูลแอปพลิเคชันที่เกินอายุที่กำหนด (เช่น 365 วัน) โดยอัตโนมัติ |
| **ความพร้อมใช้งาน** | คลัสเตอร์แบบ Replicate ขยายแนวนอนได้ ทนต่อดิสก์และ Node ล้มเหลว |
| **ความปลอดภัย** | Access Key รายแอปพลิเคชัน, Bucket Policy, TLS ระหว่างทาง, On-Premise สมบูรณ์ |
| **ความยืดหยุ่น** | ใช้ SeaweedFS ที่มาพร้อมแพลตฟอร์ม หรือเชื่อม S3-Compatible Storage ที่ลูกค้ามีอยู่ |
| **Licensing** | Open Source Apache-2.0; ไม่มีค่าใช้จ่ายตามปริมาณการใช้หรือจำนวน Object |

::: info
ระดับ Replication, Lifecycle Rule และโครงสร้าง Bucket ออกแบบร่วมกันตอนติดตั้ง ให้ตรงกับข้อกำหนดด้านการเก็บข้อมูลและ Disaster Recovery ขององค์กรคุณ
:::
