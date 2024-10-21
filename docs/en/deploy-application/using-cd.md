# Using CD

หลังจากที่ได้ทำการ CI แล้ว Pipeline จะทำขั้นตอน CD ซึ่งใน Opstella จะทำขั้นตอนนี้โดยการใช้ **ArgoCD** และ **Onechart** ในการ Deploy Application

## ArgoCD

![CD](/images/deploy-application/using-cd/argo.png)

**ArgoCD** คือ เครื่องสำหรับช่วยทำการ **CD** (Continuos Delivery) สำหรับ Kubernetes โดยทำงานคู่กับการคอยดูการเปลี่ยนแปลงจาก repository ที่ได้ทำการผูกไว้ จากนั้นจึง Sync ไปยัง Kubernetes แล้วทำงานตาม Manifest ของ Repository นั้น โดยรองรับรูปแบบ Kubernetes Manifest, Helm Charts หรือ Kustomize ได้ **ดังรูป**

![CD](/images/deploy-application/using-cd/argoflow.png)

จากรูปจะเห็นว่าเมื่อมีการ commits ไปยัง Repository ที่เก็บ Config ไว้ **ArgoCD** จะทำการ Sync ไปยัง **Kubernetes** โดยหากมีการแก้ไขในส่วนของ **Kubernetes** ตัว **ArgoCD** จะคอยปรับกลับมาให้เหมือนเดิม

## GitOps

**GitOps** รูปแบบการทำ CD (Continuous Delivery) รูปแบบหนึ่งโดยใช้ Git เป็นแหล่งข้อมูลหลัก โดยจะปรับเปลี่ยน หรืออัปเดตบน Kubernetes ตาม Manifest ใน Git โดย Opstella นำมาใช้โดยประกอบไปด้วย **ArgoCD**, **Gitlab**, **Helm Chart** และ **Onechart**

## Helm Chart

![CD](/images/deploy-application/using-cd/helm.png)

**Helm Chart** คือ เครื่องมือสำหรับจัดการ Package manager บน Kubernestes เกิดขึ้นมาเพื่อทำการลดการทำงาน deploy ซ้ำๆ และปรับเปลี่ยนได้ตาม values ที่กำหนด ซึ่งภายใน Cluster ที่ใช้จะต้องมีการติดตั้ง **Helm CLI** เมื่อจะใช้งานให้ไปเรียก หรือ **Pull Chart** พร้อม **Helm Values** มาจากนั้น **Helm** จะทำงานให้ตาม **Chart** ที่ Pull มา **ดังรูป**

![CD](/images/deploy-application/using-cd/chartexplain.png)

เราสามารถใช้ **Helm Chart** เดียวในการ Deploy กับหลาย Project ได้ขึ้นอยู่กับว่าจะตอบโจทย์กับแต่ละงานแค่ไหน สามารถดูวิธีแก้ไข helm values ภายใน Opstella ได้ที่ **[Update Application](../usecase/update-application.md)**

## Onechart

**Onechart** คือ **Chart** ที่ออกแบบมาให้สามารถใช้งานได้หลากหลาย และครอบคลุมโดยแค่ดึงไปใช้ และกำหนด **Helm Values** จะสามารถใช้งานได้เกือบทั้งหมด

ซึ่ง **Opstella** นั้นใช้ **ArgoCD**, **Helm Chart** และ **Onechart** ในการทำ **CD** โดยการ ArgoCD จะ Pull Onechart และ read Helm Value จาก gitlab ของ Opstella เมื่อมีการ Commit เข้ามา ArgoCD จะทำการ Sync ไปปรับบน Kubernetes ให้ตรงตาม values ทุกครั้ง

## Monitor Deploy

เราสามารถดูผลการ Deploy โดยการกดเข้าไปดูภายใน ArgoCD โดยสามารถกดเข้าไปได้จาก Component detail **ดังรูป**

![CD](/images/deploy-application/using-cd/detail.png)

เลือก Environment ที่ต้องการเข้าไปดู

![CD](/images/deploy-application/using-cd/select.png)

จะพบหน้า Login ให้กด OIDC เพื่อเข้าสู่หน้า Application

![CD](/images/deploy-application/using-cd/login1.png)

เสร็จจะมาปรากฏที่หน้านี้ อธิบายภายในหน้านี้ คือ จะเห็นทุก Component ที่ถูก Deploy ภายใน Service เดียวกัน และหากยังไม่ได้ Deploy ก็จะขึ้นเช่นกันแต่เป็น default image ที่ถูกกำหนดไว้ และจะ pull image ที่ถูก Deploy ใหม่หลังจากที่ทำการ Deploy ไปแล้ว

![CD](/images/deploy-application/using-cd/argoproject.png)

สามารถดูรายละเอียดการใช้งาน ArgoCD ได้ที่นี่ **[ArgoCD UI](../usecase/argocd-ui.md)**
