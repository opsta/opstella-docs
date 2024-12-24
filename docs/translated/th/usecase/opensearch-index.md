---
outline: deep
---

# Opensearch Index

Opensearch คือ ชุดการค้นหาและการวิเคราะห์แบบกระจายศูนย์ ได้รับสิทธิ์การใช้งาน Apache 2.0 ซึ่งนำไปใช้ได้หลากหลายรูปแบบ เช่น การติดตามตรวจสอบแอปพลิเคชันแบบเรียลไทม์ การวิเคราะห์ข้อมูล log ฯลฯ

## Intro Opensearch

### Document

Document คือ รูปแบบข้อมูลในรูปแบบฐานข้อมูลที่แปลงมาเป็นแบบ JSON ใน Opensearch โดยประเภทข้อมูลต่างๆ จะเหมือนกับของฐานข้อมูล (Number, String, Date) เช่น
| id | firstname | lastname | age |
|------------|-----------|----------|-----|
|1 | John | Doe | 25 |
|2 | Jane | Doe | 25 |

```
{
    id: 1,
    firstname: 'John',
    lastname: 'Doe',
    age: 25
},
{
    id: 2,
    firstname: 'Jane',
    lastname: 'Doe',
    age: 25
}
```

### index

index คือ การรวมสิ่งที่เหมือนกันของ document โดยเฉพาะ (คล้าย index ของฐานข้อมูล) โดยจะเก็บข้อมูลตาม index เช่น สร้าง index ของ **age** เพื่อเก็บอายุของผู้ใช้, firstname เพื่อเก็บชื่อของผู้ใช้ และ lastname เพื่อเก็บนามสกุลของผู้ใช้ เป็นต้น

### Cluster and Node

**node** คือ เสมือนคอมพิวเตอร์หนึ่งเครื่องใน cluster

**cluster** คือ กลุ่มของ node

Opensearch ออกแบบให้เป็น search engine แบบกระจายศูนย์จึงสามารถทำงานบนหลาย node ที่อยู่บน cluster เดียวกันได้

### shards

shards คือ การแบ่ง index ในหลาย node เพราะ การกระจาย index ที่มีขนาดใหญ่ในหลาย node ช่วยให้สามารถค้นหาข้อมูลได้เร็วขึ้น **ดังรูป**

![opensearch](/images/usecase/opensearch-index/index.png)

โดยในแต่ละ node ที่เก็บ index เดียวกันแต่อาจจะเเบ่งเป็นคนละ shard **ดังรูป**

![opensearch](/images/usecase/opensearch-index/shard.png)

ในรูปตัวอย่างจะมี 2 index ใน 2 node โดย index 1 แบ่งเป็น 2 shards และ index 2 แบ่งเป็น 4 shards การแบ่งเป็น shards เหมาะสำหรับ index ที่มีขนาดใหญ่มาก เช่น 500 GB ใน 1 node

การแบ่งออกเป็นหลาย shards จะทำงานได้ดีกว่า เช่น แบ่งเป็น 10 shards ใน 10 node **อย่างไรก็ตาม** ในทุก shards มีการใช้งาน [Lucene full index](https://orientdb.com/docs/3.1.x/indexing/Full-Text-Index.html) หากมีการแบ่ง shards ที่มากเกินไปจะทำให้เปลือง CPU และ Memory เกินความเจำเป็น จึงควรพิจารณาตามความเหมาะสม

### Primary and replica shards

ในระบบ OpenSearch (และ Elasticsearch) การจัดการข้อมูลและการค้นหาข้อมูลมีการใช้ shards เพื่อกระจายโหลดและเพิ่มประสิทธิภาพในการค้นหา Shards ถูกแบ่งออกเป็นสองประเภทหลักคือ Primary Shards และ Replica Shards

**Primary Shards**

คือ ส่วนหลักของ index ที่มีข้อมูลดั้งเดิม และเป็นแหล่งที่มาของข้อมูลที่ถูกใช้ในการกระจายข้อมูลไปยัง Replica Shards

**Replica Shards**

คือ สำเนาของ Primary Shards มีหน้าที่ในการสำรองข้อมูลเพื่อเพิ่มความทนทานของระบบ (fault tolerance) และช่วยกระจายโหลดในการค้นหา (search load)

**การทำงานของ Primary และ Replica Shards**

เมื่อมีการเก็บข้อมูลเพิ่มเข้ามาภายใน index จะเพิ่มเข้ามาใน primary จากนั้นจึงค่อยทำการ คัดลอกข้อมูลไปยัง Replica **ดังตาราง**

| Node   | Shards                             |
| ------ | ---------------------------------- |
| Node 1 | Primary shards 1, Replica shards 2 |
| Node 2 | Primary shards 2, Replica shards 3 |
| Node 3 | Primary shards 3, Replica shards 1 |

จากตารางจะเห็นว่ามีการเก็บ Primary shards และ Replica Shards แยกคนละ Node เพิ่มมีการเพิ่มใน Primary แต่ละ Replica จะทำสำเนาข้อมูลที่เพิ่มมา และในการค้นหาจะทำการค้นหาในทั้ง Primary และ Replica ซึ่งจะลด load ในแต่ละ node ได้ จึงเป็นการ**เพิ่มประสิทธิภาพ**ในการค้นหา นอกจากนี้การกระจายข้อมูลในหลาย Node ยังสามารถ**ลดความเสี่ยงในกรณีที่ Node ล่ม**จะยังเข้าถึงข้อมูลในอีก Node ได้อยู่

**อ่านเพิ่มเติมได้ที่** [Introduction to OpenSearch](https://opensearch.org/docs/latest/getting-started/intro/)

## การใช้งาน Opensearch เบื้องต้น

### Fluentbit

ใน Opstella จะมีการสร้าง Pod Log Agent ตาม namesapce ของ service ขึ้นมาเพื่อดึง Log ส่งไปยัง Fluentbit แล้ว Fluentbit จะส่งต่อไปยัง Opensearch อีกที **ดังรูป**

![opensearch](/images/usecase/opensearch-index/fluentbit.png)

### การสร้าง index pattern

**index pattern** คือ pattern สำหรับการเรียกหลาย index ที่มีชื่อคล้ายกัน เช่น app-\* คือ ทุก index ที่ชื่อขึ้นต้นด้วย "app-" การสร้าง index ภายใน opensearch มีดังนี้

1. เปิด devops tools opensearch

![opensearch](/images/usecase/opensearch-index/indexPattern.png)

2. ไปที่ บาร์ ด้านซ้ายมือเลือนลงมาด้านล่างสุดเลือก **stack management**

![opensearch](/images/usecase/opensearch-index/stackmanagement.png)

3. เลือก **index pattern** แล้วเลือก **Create index pattern**

![opensearch](/images/usecase/opensearch-index/createIndexPattern.png)

4. กรอก index pattern ที่ต้องการโดย index pattern ที่กรอกต้อง match อย่างน้อยกับ 1 index

![opensearch](/images/usecase/opensearch-index/nextStep.png)

5. เลือก primary time field จากนั้นกด **Create index pattern**

![opensearch](/images/usecase/opensearch-index/create.png)

6. รอสักครู่

![opensearch](/images/usecase/opensearch-index/creating.png)

สร้าง **Index pattern** สำเร็จ

![opensearch](/images/usecase/opensearch-index/succedd.png)

### Opensearch Discover

1. จากหน้าแรกเปิดเมนูด้านซ้าน เลือก **Discover**
   ![opensearch](/images/usecase/opensearch-index/discover.png)

2. จากรูปจะอธิบายตามหมายเลข

- 1 ช่องพิม query โดยพิมพ์ **ชื่อ field**:**ค่าที่ค้นหา** opensearch จะกรองให้
- 2 เลือกช่วงเวลา เช่น 30 วันถึงปัจจุบัน
- 3 เพิ่ม field ที่จะกรองเพิ่ม

จากนั้นกด **DQL** จะแสดงผลลัพธ์ **ดังรูป**
![opensearch](/images/usecase/opensearch-index/query.png)

### การสร้าง Dashboard

Dashboard ใน Opensearch คือนำข้อมูลที่กรองแล้วมาแสดงเป็น กราฟได้โดยสามารถปรับแต่งได้หลากหลายรูปแบบ โดยในหัวข้อจะยกตัวอย่างวิธีการสร้าง Dashboard เบื้องต้น

1. หน้าแรกเปิดไปที่เมนูด้านซ้ายเลือก **Dashboard**

![opensearch](/images/usecase/opensearch-index/dashboard.png)

2. เลือก **Create Dashboard**

![opensearch](/images/usecase/opensearch-index/dashboard2.png)

3. ตั้งชื่อ Dashboard แล้วกด **Create**

![opensearch](/images/usecase/opensearch-index/dashboard3.png)

4. กดปุ่ม **Add Visualization** จะมี 2 ตัวเลือก คือ

- **Select existing Visualization** เลือกกราฟที่มีอยู่แล้ว
- **Create new Visualization** สร้างกราฟใหม่ขึ้นมา

![opensearch](/images/usecase/opensearch-index/dashboard4.png)

5. เลือกสร้างใหม่จะปรากฏหน้าที่ให้กรอกว่าเลือกข้อมูลจาก index ไหน กำหนดเงื่อนแบบใด และช่วงเวลาที่ต้องการกรอง

![opensearch](/images/usecase/opensearch-index/dashboard5.png)

6. กดเลือกเมนู **visaulize** จะปรากฏ **ดังรูป**
   ![opensearch](/images/usecase/opensearch-index/dashboard7.png)

- 1. ช่องกรอก query
- 2. กรองช่วงเวลา
- 3. เลือกประเภทกราฟ
- 4. กำหนดองค์ประกอบของกราฟ

**ยกตัวอย่างตามรูป**

```
source=fifocom-aws-rating-dev
```

ความหมายคือดึงข้อมูลจาก index ชื่อ fifocom-internal-bookinfo-dev, กำหนดช่วงเวลา 1 เดือนทื่แล้ว และ ใช้กราฟแบบ **Vertical bar**

ส่วนองค์ประกอบของกราฟจะมี series คือ กราฟแท่งให้ใช้ข้อมูลของ field ไหน ,แบ่งตามช่วงแบบไหน(ควรใช้เวลา หรือ field ที่เหมือนกัน)

![opensearch](/images/usecase/opensearch-index/dashboard8.png)

ลองกำหนดให้ series นับจำนวน log

![opensearch](/images/usecase/opensearch-index/dashboard9.png)

และ diemensions เป็น @timestamp ช่วง 1 วัน (ถ้า 1 เดือนจะแบ่งเป็น จำนวน log ในแต่ละวันของ 1 เดือนล่าสุด)

![opensearch](/images/usecase/opensearch-index/dashboard10.png)

7. กด **update chart** จะแสดงผล **ดังรูป**

![opensearch](/images/usecase/opensearch-index/dashboard11.png)

8. ทำการกดบันทึกเพื่อนำไปใช้ต่อไป

![opensearch](/images/usecase/opensearch-index/dashboard12.png)

9. กลับไปหน้าเลือกว่าจะใช้กราฟเดิม หรือสร้างใหม่ ให้เลือกกราฟที่มีอยู่จะเลือก กราฟที่สร้างขึ้น

![opensearch](/images/usecase/opensearch-index/dashboard14.png)

10. จะได้ผลลัพธ์ดังรูป นอกจากนี้ยังสามารถสร้างได้อีกหลายๆ กราฟมาใช้ภายใน Dashboard และปรับแต่งเพิ่มได้อีก

![opensearch](/images/usecase/opensearch-index/dashboard15.png)

**อ่านเพิ่มเติมได้ที่** [Create Dashboars](https://opensearch.org/docs/latest/dashboards/dashboard/index/)
