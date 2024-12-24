# Using OneChart

ในหัวข้อนี้จะเป็นการอธิบาย helm values ของ onechart ที่ใช้ภายของ Opstella **ดังตัวอย่าง**

```
nameOverride: component-develop
fullnameOverride: consultant-cloud2-service-component-develop
replicas: 1
image:
  repository: registry.demo2.opstella.in.th/consultant-cloud2-service-component/component
  tag: develop-7232e482
  pullPolicy: Always
imagePullSecrets:
  - image-consultant-cloud2-service
containerPort: 3000
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
  host: consultant-cloud2-service-component.dev.demo2.opstella.in.th
  ingressClassName: nginx
podSecurityContext: {}
existingFileSecrets:
  - name: component
    path: /etc/config/secret/opstella.txt
    subPath: opstella.txt
secretName: component
```

## รายละเอียด

จากรูปแต่ละพารามิเตอร์ใช้กำหนดค่าของ container **ดังต่อไปนี้**

### nameOverride

เป็นการตั้งชื่อของ resource แทนชื่อ chart แต่ยังมี release ซึ่งจะกลายเป็นชื่อของ pod, service, deployment และ replicaset เช่น

**ตัวอย่าง** กำหนด **nameOverride** ชื่อ my-custom-name

```
replicaCount: 2

image:
  repository: my-image
  tag: "latest"
  pullPolicy: IfNotPresent

nameOverride: "my-custom-name"

```

ลองดู resource

```
kubectl get all
```

**nameOverride** ที่กำหนดจะกลายเป็นชื่อต่อจาก release

```
NAME                                              READY   STATUS    RESTARTS   AGE
pod/release-my-custom-name-<hash>                 1/1     Running   0          5m

NAME                                              TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/release-my-custom-name                    ClusterIP   10.0.0.1     <none>        80/TCP    5m

NAME                                              READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/release-my-custom-name            1/1     1            1           5m

NAME                                              DESIRED   CURRENT   READY   AGE
replicaset.apps/release-my-custom-name-<hash>     1         1         1       5m

```

### fullnameOverride

เป็นการตั้งชื่อของ resource แทนชื่อ chart และ release ซึ่งจะกลายเป็นชื่อของ pod, service, deployment และ replicaset เช่น

**ตัวอย่าง** กำหนด **fullnameOverride** ชื่อ my-custom-name

```
replicaCount: 2

image:
  repository: my-image
  tag: "latest"
  pullPolicy: IfNotPresent

fullnameOverride: "my-custom-name"

```

ลองดู resource

```
kubectl get all
```

**fullnameOverride** ที่กำหนดจะกลายเป็นชื่อแทน release

```
NAME                                              READY   STATUS    RESTARTS   AGE
pod/my-custom-name-<hash>                         1/1     Running   0          5m

NAME                                              TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/my-custom-name                            ClusterIP   10.0.0.1     <none>        80/TCP    5m

NAME                                              READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/my-custom-name                    1/1     1            1           5m

NAME                                              DESIRED   CURRENT   READY   AGE
replicaset.apps/my-custom-name-<hash>             1         1         1       5m

```

ในกรณีที่มีการกำหนดทั้ง **nameOverride** และ **fullnameOverride** จะใช้ **fullnameOverride** โดยข้ามการใช้ **nameOverride**

### replicas

จำนวน pods ที่ต้องการให้สร้างขึ้น

### image

ส่วนสำหรับระบุชื่อ image สำหรับสร้าง container ขึ้นมา - **repository** ดึง image อะไร สามารถใช้เป็นชื่อ หรือ path ที่เก็บ image - **tag** ให้ดึง image จาก tag อะไร ในกรณีที่ image มีหลาย tag หรือหลายเวอร์ชั่น tag จะช่วยให้ระบุเฉพาะเจาะจงได้ กรณีที่ไม่ใส่ tag จะดึง image ที่ tag ล่าสุดมา - **pullPolicy** กำหนดคุณลักษณะการ pull image (IfNotPresent, Always, Never)

### imagePullSecrets

สำหรับระบุ secret ของที่ใช้สำหรับเข้าถึง private image registry เพื่อใช้ในการ pull image

### containerPort

ใช้กำหนดว่าเชื่อมกับ port ไหนของ container

### resources

กำหนด resources request และ resources limit สำหรับ container ใน pod - **requests** กำหนด resources request - cpu ระบุปริมาณ CPU ที่ Container ต้องการใช้ - memory ระบุปริมาณ RAM ที่ Container ต้องการใช้ - **limits** กำหนด resources limit - cpu ระบุปริมาณ CPU ที่ Container สามารถใช้ได้สูงสุด - memory ระบุปริมาณ RAM ที่ Container สามารถใช้ได้สูงสุด

### Ingress

    - **tlsEnabled** เปิดการใช้ tls
    - **secretName** ชื่อ Secret ที่เก็บ Cert ของ tls
    - **host** กำหนดโดเมนที่จะให้เข้าสู่ application ใน pod
    - **ingrssClassName** กำหนด class ของ ingress เพื่อบอกให้จัดการแบบใด

### podSecurityContext

กำหนดคุณสมบัติความปลอดภัยของ pod เช่น fsGroup, runAsUser หรือ supplementalGroups เช่น

```
podSecurityContext:
  runAsUser: 1000
  fsGroup: 2000
  supplementalGroups:
    - 3000
```

- runAsUser: กำหนด user ID ที่จะใช้ในการรัน Container ภายใน Pod (เช่น 1000)
- fsGroup: กำหนด group ID ที่จะใช้ในการกำหนด file system group ใน Container ภายใน Pod (เช่น 2000)
- supplementalGroups: กำหนด supplemental groups ที่เพิ่มเติมสำหรับ Pod (เช่น [3000])

### existingFileSecrets

เรืยก Secret แบบไฟล์ที่มีอยู่แล้ว - name - path - subPath

### secretName

เรียก Secret แบบชื่อ โดยจะเรียกตามชื่อที่กำหนด และอยู่ใน namespace เดียวกัน

สามารถดูพารามิเตอร์อื่นๆ ได้ที่ [Onechart](https://github.com/gimlet-io/onechart)
