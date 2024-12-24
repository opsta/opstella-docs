---
outline: deep
---

# Kubernetes Cluster

<strong>Kubernetes Cluster</strong> หมายถึง กลุ่มของคอมพิวเตอร์ที่ทำงานร่วมกันเพื่อรันแอปพลิเคชันแบบคอนเทนเนอร์ เปรียบเสมือนศูนย์ข้อมูลเสมือนจริงที่ประกอบด้วยเครื่องคอมพิวเตอร์หลายเครื่อง แต่ละเครื่องทำหน้าที่เฉพาะอย่าง

**Cluster ที่เกี่ยวข้องกับระบบ Opstella จะมีทั้งหมด 3 ประเภท ดังนี้**

## Devops Cluster

![Opstella Cluster!](/images/intro/cluster/devops-cluster.png){data-zoomable}

**Devops Cluster คือ cluster การทำงานระบบ opstella core หลักๆ ทั้งหมด**

### รายละเอียด Devops Cluster

<ul>
    <li><strong>namepsace opstella-platform:</strong> จะเป็นศูนย์กลางการทำงานของ opstella ทั้งหมด โดยจะประกอบด้วย worker ตามจำนวน tool ที่รองรับ</li>
    <li><strong>namepsace opstella-share-runner:</strong> จะเป็นส่วนที่เก็บตัวทำงาน เพื่อรอการรันงานต่างๆ บนระบบของคุณโดยปกติแล้วงานเหล่านี้จะเกี่ยวข้องกับ CI/CD</li>
    <li><strong>namepsace kube-system:</strong> จะเป็นศูนย์กลางของ Kubernetes ในตัวอย่างจะมีเครื่องมือที่ช่วยจัดการ cert</li>
    <li><strong>namepsace data-store:</strong> จะประกอบด้วย tool ที่ต้องใช้งานร่วมกับระบบ opstella <strong>ได้แก่</strong>
        <ul style="list-style-type: circle;">
            <li><strong>Minio</strong> = ทำหน้าที่จัดเก็บข้อมูลประเภทไฟล์ เช่น รูปภาพ วิดีโอ เอกสาร และข้อมูลสำรอง</li>
            <li><strong>Postgresql</strong> = เป็นระบบจัดการฐานข้อมูล</li>
            <li><strong>Rabbitmq</strong> = เครื่องมือทำงานตัวกลางรับส่งข้อความ เพื่อทำการสื่อสารกันในระบบ opstella</li>
            <li><strong>Redis</strong> = เครื่องมือฐานข้อมูลแบบ NoSQL</li>
        </ul>
    </li>
    <li><strong>namepsace opstella-devops:</strong> จะประกอบด้วย devopstool <strong>ได้แก่</strong>
        <ul style="list-style-type: circle;">
            <li><strong>Keycloak</strong> = เครื่องมือการยืนยันตัวตนและการให้สิทธิ์</li>
            <li><strong>Harbor</strong> = เครื่องมือเก็บ image ที่ได้จากกระบวนการ build sourcecode</li>
            <li><strong>Vault</strong> = เครื่องมือจัดการข้อมูลที่เป็นความลับ</li>
            <li><strong>Sonarqube</strong> = เครื่องมือวิเคราะห์คุณภาพ source code</li>
        </ul>
    </li>
</ul>

## Monitoring Cluster

![Opstella Monitoring Cluster!](/images/intro/cluster/monitoring-cluster.png){data-zoomable}

### รายละเอียด Monitoring Cluster

<ul>
    <li><strong>namepsace data-store:</strong> จะประกอบด้วย tool ที่ต้องใช้งานร่วมกับระบบ opstella <strong>ได้แก่</strong>
        <ul style="list-style-type: circle;">
            <li><strong>Minio</strong> = ทำหน้าที่จัดเก็บข้อมูลประเภทไฟล์ เช่น รูปภาพ วิดีโอ เอกสาร และข้อมูลสำรอง</li>
            <li><strong>Postgresql</strong> = เป็นระบบจัดการฐานข้อมูล</li>
        </ul>
    </li>
    <li><strong>namepsace opstella-monitoring:</strong> จะประกอบด้วย devopstool <strong>ได้แก่</strong>
        <ul style="list-style-type: circle;">
            <li><strong>Opensearch</strong> = เครื่องมือสำหรับการค้นหาและวิเคราะห์ ข้อมูลเมตริกและล็อก</li>
            <li><strong>Prometheus</strong> = เครื่องมือรวบรวมและจัดเก็บข้อมูลเมตริกแบบ Time-Series จากระบบต่างๆ</li> 
            <li><strong>Grafana</strong> = เครื่องมือสำหรับการวิเคราะห์ข้อมูลและการแสดงภาพ ช่วยให้ผู้ใช้สามารถสร้างแดชบอร์ดแบบโต้ตอบเพื่อแสดงผลข้อมูลเมตริกและล็อกจากหลากหลายแหล่ง</li> 
            <li><strong>Fluentbit</strong> = เครื่องมือสำหรับการรวบรวมและส่งต่อข้อมูล</li>
        </ul>
    </li>
</ul>

## Workload Cluster

![Opstella Workload Cluster!](/images/intro/cluster/workload-cluster.png){data-zoomable}

**Workload Cluster คือ cluster ที่เกี่ยวข้องกับ Application ของทางลูกค้าทั้งหมด โดยอาจจะแบ่งได้เป็น Workload Prod Cluster และ Non-Prod Cluster**

### รายละเอียด Workload Cluster

- **namepsace** `<service-slug>`: เป็นส่วนที่จัดเก็บแอปพลิเคชันที่นำไปใช้งานจริง
- **namepsace kube-system**: จะเป็นศูนย์กลางของ Kubernetes ในตัวอย่างจะมีเครื่องมือที่ช่วยจัดการ cert
- **namepsace opstella-platform**: ส่วนที่เก็บ worker การทำงานที่เกี่ยวข้องกับระบบ opstella
- **namepsace opstella-devops-tools**: จะประกอบด้วย devopstool **ได้แก่**
  - **ArgoCD** = เครื่องมือสำหรับการ deploy application
  - **External secret operator** = เครื่องมือสำหรับ Kubernetes ช่วยให้ผู้ใช้สามารถจัดการ secrets จากแหล่งข้อมูลภายนอก เช่น HashiCorp Vault
- **namepsace log-agent**: ส่วนที่เก็บ pod หรือตัวที่งานเพื่อเก็บข้อมูล log ของแอปพลิเคชัน
- **namepsace opstella-monitoring**: จะประกอบด้วย devopstool **ได้แก่**
  - **Prometheus** = เครื่องมือรวบรวมและจัดเก็บข้อมูลเมตริกแบบ Time-Series จากระบบต่างๆ
  - **Headlamp** = เครื่องมือ Web UI สำหรับ Kubernetes ช่วยให้ผู้ใช้สามารถจัดการคลัสเตอร์ Kubernetes ได้
