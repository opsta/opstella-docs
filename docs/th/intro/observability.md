---
outline: deep
---

## Observability

**Opstella Observability คือชั้นการติดตามและตรวจสอบระบบแบบครบวงจร (End-to-End) สำหรับทั้งแพลตฟอร์มของคุณ สร้างบน Grafana LGTM Stack และผสานเป็นเนื้อเดียวกับ Opstella** ทุกแอปพลิเคชันที่ deploy จะถูกเชื่อมเข้าสู่ pipeline การเก็บข้อมูลเดียวกันโดยอัตโนมัติ ทั้ง Metrics, Logs และ Traces ตั้งแต่ระดับ Infrastructure ขึ้นไปจนถึงตัวแอปพลิเคชัน — ทีมงานจึงวิเคราะห์ปัญหาได้จากที่เดียว ด้วยการ login เพียงครั้งเดียว โดยไม่ต้องสลับไปมาหลายเครื่องมือ

<img class="light-only" alt="สถาปัตยกรรม Opstella Observability" src="/images/intro/observability/observability-architecture.svg" data-zoomable />
<img class="dark-only" alt="สถาปัตยกรรม Opstella Observability" src="/images/intro/observability/observability-architecture-dark.svg" data-zoomable />

::: tip สร้างบน Grafana LGTM Stack
Opstella จัดเตรียม deploy และดูแล **Grafana, Loki, Tempo, Mimir และ Alloy** ให้คุณ โดย Dashboard, Data Source และ pipeline การเก็บข้อมูลถูกตั้งค่าให้อัตโนมัติสำหรับทุก Service และทุก Environment ที่สร้างขึ้น — Observability พร้อมทำงานตั้งแต่การ deploy ครั้งแรก โดยไม่ต้องตั้งค่าเอง
:::

## <ins>**ความสามารถหลัก**</ins>

### เก็บข้อมูล Telemetry แบบ End-to-End

Grafana Alloy รวบรวมข้อมูลจากทุกชั้นของแพลตฟอร์ม — ทรัพยากรของ Node และ Cluster, Workload บน Kubernetes, Runtime ของแอปพลิเคชัน และ API Gateway — แล้วส่งเข้าสู่ระบบจัดเก็บที่เหมาะสม: **Metrics เข้า Mimir, Logs เข้า Loki และ Traces เข้า Tempo** แอปพลิเคชันที่ติดตั้ง OpenTelemetry จะถูกตรวจพบโดยอัตโนมัติ ทำให้เห็นภาพครบตั้งแต่ Request เดียวลงไปจนถึง Container ที่ประมวลผล

### Logging แบบมีโครงสร้างและค้นหาได้

Log ทั้งหมดถูกรวมศูนย์ใน Loki ในรูปแบบ **Structured Log ที่ติด Label** สามารถค้นหาและกรองตาม Service, Environment, Level หรือ Label ใดก็ได้ผ่านหน้า Explore ของ Grafana เชื่อมโยง Log เข้ากับ Trace และ Metric ของ Request เดียวกัน และส่งออกผลลัพธ์เพื่อวิเคราะห์ต่อได้ — Log การเข้าถึงระบบ (Access Log), Log การเปลี่ยนแปลงข้อมูล (Data Modification Log), Log ธุรกรรม (Transaction Log) และ Log ข้อผิดพลาด (Error Log) ของแอปพลิเคชันทั้งหมดไหลผ่าน pipeline เดียวกันเข้าสู่คลังที่ค้นหาได้แห่งเดียว

### Metrics และการติดตามประสิทธิภาพแบบเรียลไทม์

Mimir จัดเก็บ **Metrics ที่เข้ากันได้กับ Prometheus** แบบ High Availability พร้อมการเก็บข้อมูลระยะยาว — Latency, Error Rate, ปริมาณ Request และการใช้ทรัพยากรถูกติดตามแบบเรียลไทม์สำหรับทุก Service และทุก Environment และระบบใดที่เปิดเผย Prometheus Metrics — รวมถึง API Gateway — เชื่อมต่อเข้าได้ทันที

### Distributed Tracing

Tempo บันทึก **Distributed Traces ข้าม Microservices** เชื่อมโยงทุกขั้นตอนของธุรกรรมตั้งแต่จุดเริ่มต้นผ่านแต่ละ Service ปลายทาง ทีมงานสามารถติดตาม Request เดียวตั้งแต่ต้นจนจบ เห็นว่าเวลาถูกใช้ไปที่ขั้นตอนใด และกระโดดจาก Span ที่ช้าไปยัง Log และ Metric ที่เกี่ยวข้องได้โดยตรง

### Dashboard แบบ Interactive

Grafana ให้ **Dashboard แบบ Interactive ที่ปรับแต่งได้อย่างอิสระ** สำหรับทุกทีม โดย Opstella เตรียม Dashboard สำเร็จรูปให้ตาม Service และ Environment และผู้ใช้สามารถสร้างและแชร์ Dashboard ของตนเอง — รวม Metrics, Logs และ Traces ไว้ในหน้าจอเดียว การเข้าถึงควบคุมผ่าน Single Sign-On ของ Opstella แต่ละทีมจึงเห็นเฉพาะ Service ที่ตนดูแล

### การแจ้งเตือน (Alerting)

กำหนดกฎการแจ้งเตือนบน Metric หรือ Log Stream ใดก็ได้ โดย **ประเมินค่าเกณฑ์ (Threshold) แบบเรียลไทม์** ส่งการแจ้งเตือนผ่าน Email, Webhook และช่องทางอื่น พร้อมระดับความสำคัญ (Severity), นโยบายการส่งต่อ (Routing) และช่วงเวลาปิดเสียงแจ้งเตือน — เหตุการณ์อย่างอัตราข้อผิดพลาดสูง การตอบสนองช้า หรือระบบเข้าถึงไม่ได้ จึงถึงผู้รับผิดชอบทันที

### การจัดเก็บระยะยาวและการ Archive

ระยะเวลาจัดเก็บ (Retention) **ตั้งค่าได้แยกตามชนิดข้อมูลให้ตรงกับนโยบายขององค์กร** — เช่น Metrics เก็บ 365 วันขึ้นไป, Traces 90 วัน และ Logs 90 วันใน Hot Storage ข้อมูลที่เกินช่วง Hot Retention จะถูก **ย้ายไปยัง Object Storage ที่รองรับ S3 API โดยอัตโนมัติ** (ดู [Object Storage](./object-storage)) ซึ่งยังคงค้นหาได้และเก็บต่อได้หลายปีด้วยต้นทุนต่ำ โดยสามารถค้นข้อมูลย้อนหลังได้ตลอดช่วงเวลาการจัดเก็บ

### Audit Log พร้อมตรวจสอบ

กิจกรรมในชั้น Observability เองก็ถูกบันทึก — **ใคร Sign In, ค้นหาอะไร, เปลี่ยนแปลงอะไร และผลลัพธ์เป็นอย่างไร** — โดยแต่ละเหตุการณ์ประกอบด้วย Timestamp, Action, Result, Client และ Actor ข้อมูล Audit และการใช้งานค้นหาผ่านหน้าจอได้ และส่งออกในรูปแบบมาตรฐานเช่น CSV และ JSON เพื่อจัดทำรายงาน

### On-Premise อย่างสมบูรณ์

ระบบ Observability ทั้งหมด deploy **ภายในเครือข่ายของคุณเอง** บน Kubernetes เดียวกับส่วนอื่นของ Opstella — ไม่มีการส่งข้อมูล Telemetry, Metadata หรือข้อมูลการใช้งานใด ๆ ออกสู่เครือข่ายภายนอกหรือเครือข่ายสาธารณะ การเก็บ จัดเก็บ และวิเคราะห์ทั้งหมดอยู่ในองค์กร

## <ins>**มาตรฐานและการปฏิบัติตามข้อกำหนด**</ins>

| ด้านข้อกำหนด | Opstella Observability ตอบโจทย์อย่างไร |
| --- | --- |
| **ความครอบคลุม** | เก็บ Infrastructure Metrics, Application Metrics, Logs และ Traces แบบ End-to-End ทั้งแพลตฟอร์มและทุก Workload |
| **การจัดการ Log** | คลัง Log รวมศูนย์ มีโครงสร้าง ค้นหาได้ (Loki); Access / Data Modification / Transaction / Error Log อยู่ใน pipeline เดียว |
| **Tracing** | Distributed Traces เชื่อมโยง Request ข้าม Microservices (Tempo) พร้อมเชื่อมกับ Logs และ Metrics |
| **Dashboard** | Grafana Dashboard แบบ Interactive ปรับแต่งได้ จัดเตรียมให้ตาม Service และ Environment |
| **การแจ้งเตือน** | แจ้งเตือนตามเกณฑ์แบบเรียลไทม์ผ่าน Email, Webhook ฯลฯ พร้อมระดับความสำคัญและการส่งต่อ |
| **Retention** | นโยบายจัดเก็บแยกตามชนิดข้อมูล (เช่น Metrics ≥ 365 วัน, Traces ≥ 90 วัน, Logs ≥ 90 วัน) พร้อม Archive อัตโนมัติไป Object Storage แบบ S3 |
| **Audit** | เหตุการณ์พร้อม Timestamp, Action, Result, Client, Actor; ค้นหาและส่งออกได้ (CSV/JSON) |
| **อธิปไตยของข้อมูล** | Deploy แบบ On-Premise 100%; ไม่มีข้อมูลออกนอกเครือข่าย |

::: info
ระยะเวลาจัดเก็บ เกณฑ์การแจ้งเตือน และนโยบาย Archive สามารถตั้งค่าได้ตอนติดตั้งให้ตรงกับมาตรฐานขององค์กรคุณ
:::
