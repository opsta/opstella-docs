# Update Application

## แก้ Helm Values

จากที่อธิบายมาจะพบว่าหากมีการไปอัพเดต หรือ **commit** ไปยัง **git repository** จะถูกอ่านโดย **ArgoCD** ซึ่งการที่ใช้ Helm จะผูก Onechart กับ Helm values ที่อยู่บน gitlab ซึ่งในหน้า Component deatil ของ Opstella สามารถแก้ไขได้ **ดังรูป**

![CD](/images/deploy-application/using-cd/editHelm1.png)

เมื่อเปิดขึ้นมาจะพบกับ Helm values ซึ่งหากต้องการปรับให้ทำอะไรได้เพิ่มจึงควรไปศึกษา **[One Chart](../usecase/using-onechart.md)** เพิ่มเติม

![CD](/images/deploy-application/using-cd/editHelm2.png)

หากกด save จะทำการ commit code ทันที ซึ่งถ้ามีการแก้ไข ArgoCD จะทำการ Sync ให้ภายในช่วงเวลาที่กำหนด ( 3 นาที )

## New helm

กรณีที่เราต้องการใช้ image อื่น หรือ image ภายใน harbor ของเราที่มีอยู่เเล้ว เราสามารถกด **New Helm** เพื่อ commit ไฟล์ Helm valuesเพิ่ม จากนั้น ArgoCD จะทำการ Sync และ Deploy **มีขั้นตอน ดังนี้**

1.  กด New Helm
    ![UpdateApplication](/images/usecase/update-application/new1.png)

2.  หน้าต่างจะแสดงให้กรอก 2 ส่วน คือ ชื่อ และ Helm values
    ![UpdateApplication](/images/usecase/update-application/new2.png)

3.  จะแสดงตัวอย่างโดยการใช้ Helm values เดิมแต่จะเปลี่ยนไปเรียก image ของ nginx มาแทน และแก้ **ingress** ด้วย **ดังรูป**
    ![UpdateApplication](/images/usecase/update-application/new3.png)

    ![UpdateApplication](/images/usecase/update-application/new4.png)

**ตัวอย่าง** สำหรับขึ้น pod nginx

```
nameOverride: example-develop
fullnameOverride: example-develop

replicas: 1

image:
  repository: nginx
  tag: stable-alpine3.19-slim
  pullPolicy: Always

containerPort: 80

resources:
  requests:
    cpu: 10m
    memory: 10Mi
  limits:
    cpu: 500m
    memory: 500Mi

ingress:
  tlsEnabled: true
  secretName: wildcard-cert-opstella-tls
  host: example.dev.demo2.opstella.in.th
  ingressClassName: nginx


podSecurityContext: {}
```

4. หลังจากนั้นให้กด **save** แล้วทำการ **Sync component** โดยไปยังหน้า Service Detail **ดังรูป**
   ![UpdateApplication](/images/usecase/update-application/new5.png)

ไปที่รายการ Component ที่ได้ทำการเพิ่ม Helm values จากนั้นทำการกด Sync component

![UpdateApplication](/images/usecase/update-application/new6.png)

รอจนทำรายการเสร็จแล้วเปิดไปยัง ArgoCD

![UpdateApplication](/images/usecase/update-application/new7.png)

ในระบบ **ArgoCD** มีการทำ **Auto sync** อยู่แล้ว แต่หากรายการที่เปลี่ยนแปลงยังไม่มาสามารถกด refresh ได้ และแนะนำกดเปลี่ยนมุมมอง เพื่อสามารถดูที่ Deploy ได้ง่ายขึ้น **ดังรูป**

![UpdateApplication](/images/usecase/update-application/new8.png)

จะเห็นว่ายุบรวมเหลือตาม **Ingress** จึงดูได้ง่าย และพบว่า helm values ที่เพิ่มไปได้ถูก Deploy แล้ว

![UpdateApplication](/images/usecase/update-application/new9.png)

กลับไปหน้า Component detail ให้กดเปิดที่เพิ่มมา

![UpdateApplication](/images/usecase/update-application/new10.png)

จะพบว่าสามารถ Deploy ได้สำเร็จ

![UpdateApplication](/images/usecase/update-application/new11.png)
