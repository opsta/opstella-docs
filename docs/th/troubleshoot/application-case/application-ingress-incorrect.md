# Application Ingress Incorrect

ในนี้จะยกตัวย่างการกำหนด ingress ผิด ได้แก่

- **ตั้งชื่อผิด domain**

- **ตั้งชื่อ ingress ไม่ใช่ภาษาอังกฤษ**

## กรณีตั้งผิด domain

กรณีที่เข้าหน้าเว็บแล้วไม่สามารถเข้าได้อาจจากการตั้ง ingress ผิด **ดังรูป**

![portIssue](/images/troubleshoot/ingress-incorrect/1.png)

ให้ไปเช็คที่ Helm ในตัวอย่างนี้จะยกกรณีเรียก domain ผิด

![portIssue](/images/troubleshoot/ingress-incorrect/2.png)

เมื่อแก้ถูกต้องจะพบว่าสมารถเข้าใช้งานได้ปกติ

![portIssue](/images/troubleshoot/ingress-incorrect/3.png)

## ตั้งชื่อ ingress ไม่ใช่ภาษาอังกฤษ

กรณีที่มีการตั้งชื่อ ingress เป็นภาษาอื่นที่ไม่ใช้ภาษาอังกฤษจะพบว่าเมื่อเข้าไปยัง url นั้นจะพบ **Error 404 Not Found** และใน ArgoCD ไม่สามารถ Sync สร้าง Ingress ให้ได้ **ดังรูป**

![portIssue](/images/troubleshoot/ingress-incorrect/4.png)

ArgoCD ไม่สามารถสร้าง Ingress ได้

![portIssue](/images/troubleshoot/ingress-incorrect/5.png)

ให้เปลี่ยนไปใช้เป็นภาษาอังกฤษแทน

![portIssue](/images/troubleshoot/ingress-incorrect/2.png)

เมื่อแก้เป็นภาษาอังกฤษพบว่าสามารถเข้าได้ปกติ และ ArgoCD สามารถ Sync ได้ปกติ

![portIssue](/images/troubleshoot/ingress-incorrect/3.png)

ArgoCD สามารถ Sync และสร้าง Ingress ได้ปกติ

![portIssue](/images/troubleshoot/ingress-incorrect/6.png)
