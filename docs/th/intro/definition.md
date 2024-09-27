# Definition

จำกัดความของแต่ละคำที่ใช้ภายใน opstella platform

|      คำ       |                                                                ความหมาย                                                                |
| :-----------: | :------------------------------------------------------------------------------------------------------------------------------------: |
|     Layer     |                                  เป็นการแบ่งขั้นตอนการทำงานใน Opstella เพื่อง่ายต่อดูการทำงานของระบบ                                   |
|    Company    |                            ชื่อ layer ตามชื่อบริษัท หรือชื่อของลูกค้าให้เป็นชื่อของ layer บนสุดของ Opstella                            |
|   Platform    |                                       ชื่อ layer ที่แบ่งตาม แผนก, ทีม หรือ Cluster สำหรับ Deploy                                       |
|    Service    |                                 ชื่อ layer ที่แบ่งตาม service หรือ ชื่อโครงการ ของapplication ที่พัฒนา                                 |
|   Component   |                    ชื่อ layer ล่างสุด แบ่งตามองค์เป็นกอบของ application หรือ service เช่น frontend, backend เป็นต้น                    |
|    Deploy     |                                       ติดตั้งซอฟแวร์ที่พัฒนาบน Server รวมไปถึงการกำหนดค่าทั้งหมด                                       |
|    Cluster    |                                                    กลุ่มของ Server ที่จะใช้ Deploy                                                     |
|  Environment  |                  ซอฟแวร์เดียวกันที่อาจถูกติดตั้งบนหลาย Cluster หรือมีการกำหนดค่าต่างกัน ขึ้นอยู่กับขั้นตอนการ Deploy                   |
|  Helm value   |                                                     ตัวกำหนดค่าในแต่ละ Environment                                                     |
|     User      |                                                           ผู้ใช้งาน Opstella                                                           |
|     Role      |                                                      สิทธิ์การเข้าถึงแต่ละ layer                                                       |
|  Permission   |                                                            สิทธิ์การใช้งาน                                                             |
|  Devops Tool  |                                     เครื่องมือที่ไว้ใช้จัดการภายใน Opstella ซึ่งสามารถเพิ่ม/ลด ได้                                     |
|    Worker     | ตัวกลางระหว่าง Opstella กับ DevOps Tool โดย Opstella สั่งงาน Devops Tool ผ่าน Worker และ Worker คอยดูสถานะ Devops Tool ว่าทำงานปกติไหม |
|     Task      |                                       การทำงานของแต่ละ Devops Tool เมื่อมีการทำงานภายใน Opstella                                       |
|     Sync      |                                                        ทำ task นั้นซ้ำอีกครั้ง                                                         |
|     Clone     |                                   สร้าง Component ที่เหมือนกันขึ้นมาในอีก Service ที่ User มีสิทธิ์                                    |
| Server Status |                                                          สถานะของ Devops Tool                                                          |
|     Code      |                                          ในหน้า SSO เป็นกลุ่ม Devops Tool ที่ช่วยจัดการ code                                           |
|   Pre-build   |                                  ในหน้า SSO เป็นกลุ่ม Devops Tool ที่ช่วยจัดการ scan code ก่อน Build                                   |
|     Build     |                           ในหน้า SSO เป็นกลุ่ม Devops Tool ที่ช่วยจัดการ Build หรือเก็บ Registry หลัง Build                            |
|  Pre-deploy   |                                   ในหน้า SSO เป็นกลุ่ม Devops Tool ที่ช่วยจัดการกำหนดค่าก่อน Deploy                                    |
|    Deploy     |                                         ในหน้า SSO เป็นกลุ่ม Devops Tool ที่ช่วยจัดการ Deploy                                          |
| Observability |                          ในหน้า SSO เป็นกลุ่ม Devops Tool ที่ช่วย Monitor Component ที่เราทำการ Deploy ไปแล้ว                          |
