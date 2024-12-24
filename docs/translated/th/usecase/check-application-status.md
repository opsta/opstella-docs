# Check Application Status

ปกติแล้ว Application ที่ถูก Deploy บนระบบ Opstella จะอยู่บน Kubernetes Cluster โดยถ้าต้องการเช็ค Application ของเราว่ายังทำงานปกติไหม **เราสามารถเข้าไปเช็ค Pod ที่ Application นั้นๆใน Kubernetes Cluster ได้เลย** หรือ **เช็คผ่าน ArgoCD ก็ได้**

## วิธี Check Application Status ใน Kubernetes Cluster

1. เข้าสู่ Component Detail ของ Application ที่เราต้องการดูสถานะการทำงาน เพื่อนำ Slug ไป Search หา Pod ใน Kubernetes Cluster

![CheckApplicationStatus](/images/usecase/check-application-status/checkPod1.png)

2. นำ Slug ของ Application ที่เราต้องการทราบสถานะ ไป Search หา Pod ใน Kubernetes Cluster จากนั้นก็ตรวจสอบสถานะของ Pod ว่ายังทำงานปกติไหม

![CheckApplicationStatus](/images/usecase/check-application-status/checkPod2.png)

## วิธี Check Application Status ใน Kubernetes Cluster ด้วย ArgoCD

1. เข้าสู่ **Component Detail** ของ **Application** ที่เราต้องการดูสถานะการทำงาน

![CheckApplicationStatus](/images/usecase/check-application-status/checkPod1.png)

2. เมื่อเลื่อนลงมาจะเจอกับ SSO **ให้กดเข้าไปที่ ArgoCD** ดังรูป

![CheckApplicationStatus](/images/usecase/check-application-status/checkPod3.png)

3. **เลือก Environment** ที่เราต้องการดูสถานะการทำงานของ Application

![CheckApplicationStatus](/images/usecase/check-application-status/checkPod4.png)

4. Login เข้าสู่ ArgoCD

![CheckApplicationStatus](/images/usecase/check-application-status/checkPod5.png)

5. กดไปที่ Icon ขวาบน ดังรูป

![CheckApplicationStatus](/images/usecase/check-application-status/checkPod6.png)

6. **ระบบจะ Show Pod ที่มี Application อยู่** โดยสามารถเช็คสถานะการทำงานของ Application ได้จากหน้านี้ได้ ดังรูป

![CheckApplicationStatus](/images/usecase/check-application-status/checkPod7.png)
