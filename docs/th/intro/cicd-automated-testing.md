---
outline: deep
---

## CI/CD & Automated Testing

**Opstella ส่งมอบทุกแอปพลิเคชันผ่าน CI/CD Pipeline ระดับองค์กร ที่มีการทดสอบอัตโนมัติและ Quality Gate ฝังมาตั้งแต่ต้น — ไม่ใช่ของที่มาติดทีหลัง** Pipeline ถูกสร้างจาก Template ที่ปลอดภัยและตั้งค่าไว้ล่วงหน้าทันทีที่สร้าง Service ทุก Commit จึงถูก Build, ทดสอบ, สแกน และ Deploy ด้วยวินัยเดียวกันในทุก Environment ตั้งแต่ Development จนถึง Production

<img class="light-only" alt="Opstella CI/CD pipeline พร้อมการทดสอบอัตโนมัติ" src="/images/intro/cicd-automated-testing/pipeline-flow.svg" data-zoomable />
<img class="dark-only" alt="Opstella CI/CD pipeline พร้อมการทดสอบอัตโนมัติ" src="/images/intro/cicd-automated-testing/pipeline-flow-dark.svg" data-zoomable />

::: tip ขับเคลื่อนด้วย GitLab CI, SonarQube และ ArgoCD
Opstella จัดเตรียม Pipeline **GitLab CI/CD** จาก Template ระดับองค์กร เชื่อมการวิเคราะห์คุณภาพเข้ากับ **SonarQube** การสแกนความปลอดภัยเข้ากับ **Trivy**, **ZAP** และ **DefectDojo** และส่งมอบผ่าน **ArgoCD** แบบ GitOps — ผสานทุกอย่างไว้แล้ว บริหารจากพอร์ทัล Opstella
:::

## <ins>**ความสามารถหลัก**</ins>

### Pipeline Template พร้อมใช้ตั้งแต่วันแรก

ทุก Component ใหม่ได้ **Pipeline ครบชุดจาก Template ที่คัดสรรแล้ว** — ขั้นตอน Build, Test, Scan, Package และ Deploy ถูกเดินสายไว้ให้ตามภาษาและ Framework ที่ใช้ ทีมเริ่มจากพื้นฐานที่พิสูจน์แล้วแทนการเขียน CI Config จากศูนย์ และการปรับปรุงระดับแพลตฟอร์มก็เผยแพร่ได้ด้วยการอัปเดต Template

### ทดสอบ Unit และ Integration อัตโนมัติ

Unit Test และ Integration Test ทำงาน **อัตโนมัติใน Pipeline ทุก Commit และทุก Merge Request** หากการทดสอบล้มเหลว Pipeline จะหยุดก่อนที่สิ่งใดจะไปถึง Environment และเพราะการทดสอบรันกับทุกการเปลี่ยนแปลง ชุดทดสอบจึงสอดคล้องกับโค้ดอยู่เสมอเมื่อระบบมีการแก้ไข — ไม่มีรอบทดสอบแยกที่ต้องสั่งรันเองและตามไม่ทัน

### Quality Gate วัด Test Coverage

Pipeline ส่งผลทดสอบและ Coverage ไป **SonarQube** ซึ่ง **Quality Gate บังคับเกณฑ์ Test Coverage ขั้นต่ำ** — เช่น กำหนดให้ Line Coverage ต้องไม่น้อยกว่า 80% — ควบคู่กับกฎด้าน Bug, Vulnerability และ Code Smell โค้ดที่ไม่ผ่านเกณฑ์จะทำให้ Pipeline ล้มเหลวและไม่ถูกส่งต่อ Coverage จึงเป็นข้อบังคับจริง ไม่ใช่รายงานที่ไม่มีใครอ่าน

### ขั้นทดสอบ Scenario และ End-to-End

นอกเหนือจาก Unit และ Integration Test แล้ว Pipeline รองรับขั้นตอนเฉพาะสำหรับ **Scenario Test, End-to-End Test และ Performance Test** กับ Environment ที่ deploy แล้วเช่น SIT และ UAT ขั้นทดสอบเป็นพลเมืองชั้นหนึ่งของ Pipeline: Version ตามโค้ด รันอัตโนมัติ และเป็นด่านก่อนเลื่อนขั้นไป Environment ถัดไป

### สแกนความปลอดภัยทุก Build

ทุกรอบของ Pipeline ทำ **Static Code Analysis (SonarQube), สแกน Container Image (Trivy) และ Dynamic Application Scan (ZAP)** โดยรวมผลทั้งหมดเข้าสู่แดชบอร์ดความปลอดภัยรวมศูนย์ **DefectDojo** — ช่องโหว่ถูกพบตั้งแต่ตอน Build ซึ่งแก้ไขได้ถูกที่สุด ไม่ใช่ในการตรวจสอบรายไตรมาส

### ส่งมอบแบบ GitOps ครบทุก Environment

การ Deploy ขับเคลื่อนด้วย **ArgoCD แบบ GitOps**: สถานะที่ต้องการของทุก Environment อยู่ใน Git และการเลื่อนขั้นผ่าน **DEV, SIT, UAT, PRE และ PRD** เป็นการเปลี่ยนแปลงที่ควบคุมและตรวจสอบได้ ทุกการ Deploy สืบย้อนได้ถึง Commit, รอบ Pipeline และชุดการทดสอบที่ผ่าน — และการ Rollback คือการ Revert Revision ไม่ใช่การกู้สถานะด้วยมือ

## <ins>**มาตรฐานและการปฏิบัติตามข้อกำหนด**</ins>

| ด้านข้อกำหนด | Opstella CI/CD ตอบโจทย์อย่างไร |
| --- | --- |
| **การทดสอบอัตโนมัติ** | Unit และ Integration Test รันอัตโนมัติใน CI ทุกการเปลี่ยนแปลง; หากล้มเหลวการส่งมอบถูกหยุด |
| **การบังคับ Coverage** | SonarQube Quality Gate บังคับเกณฑ์ Coverage ที่ตั้งค่าได้ (เช่น Line Coverage ≥ 80%) |
| **Scenario Test** | ขั้น Pipeline เฉพาะสำหรับ Scenario / End-to-End Test กับ Environment จริง |
| **การดูแลชุดทดสอบ** | การทดสอบรันทุก Commit ทำให้ชุดทดสอบสอดคล้องกับการเปลี่ยนแปลงของระบบต่อเนื่อง |
| **ความปลอดภัย** | สแกน SAST, Container และ DAST ทุก Build รวมศูนย์ใน DefectDojo |
| **การสืบย้อน** | ส่งมอบแบบ GitOps — ทุกการ Deploy ตรวจสอบย้อนถึง Commit, Pipeline และหลักฐานการทดสอบ |
| **Environment** | เลื่อนขั้นอย่างสม่ำเสมอผ่าน DEV, SIT, UAT, PRE และ PRD |

::: info
เกณฑ์ Coverage, กฎ Quality Gate และขั้นตอนของ Pipeline ตั้งค่าตามนโยบายขององค์กรได้ตอน Onboarding
:::
