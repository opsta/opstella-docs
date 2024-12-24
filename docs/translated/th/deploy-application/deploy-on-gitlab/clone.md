# Clone from opstella

ในกรณีที่มีการสร้าง **Component** จะมีการสร้าง project บน gitlab เมื่อเราต้องการนำลงมาพัฒนาบนคอมพิวเตอร์ของเราสามารถทำได้โดยการ Clone **มีขั้นตอนดังนี้**

1. เปิด Component ที่ต้องการบน Opstella จะพบหน้า Component detail

![DeployOnGitlab1](/images/deploy-application/deploy-on-gitlab/clone/1.png)

ให้เลื่อนลงมาด้านล่างจะพบกับ Devops tool ซึ่งสามารถกดเข้าไปที่ Gitlab เพื่อเปิด Gitlab ไปยัง project นั้นได้เลย **ดังรูป**

![DeployOnGitlab2](/images/deploy-application/deploy-on-gitlab/clone/2.png)

2. จะปรากฏหน้า login ของ Gitlab ซึ่งกด Sign in with Opstella ได้เลย

![DeployOnGitlab3](/images/deploy-application/deploy-on-gitlab/clone/3.png)

จากนั้นจะไปยังหน้า project จะพบว่าจะยังเป็น project ที่ไม่มีอะไร เพราะว่าตอน create component ตัว opstella จะสร้าง repository เปล่าขึ้นมา พร้อม 2 branch คือ develop และ template ซึ่งส่วนของ code จะอยู่ใน **Branch Template** ให้ทำการกดไปยัง **Merge Request** แล้วกด New merge Request ในหน้าถัดไป **ดังรูป**

![DeployOnGitlab31](/images/deploy-application/deploy-on-gitlab/clone/31.png)

กด **New merge Request**

![DeployOnGitlab32](/images/deploy-application/deploy-on-gitlab/clone/32.png)

หลังจากนั้นให้เลือก branch **template** ให้ merge ไปยัง branch **develop** กด **Compare branch and continue**

![DeployOnGitlab33](/images/deploy-application/deploy-on-gitlab/clone/33.png)

ในหน้านี้จะเป็นให้กรอกรายละเอียดการขอทำ **merge request** ซึ่งอาจไม่จำเป็นต้องกรอกก็ได้ ขึ้นอยู่กับการตกลงภายในทีม จากนั้นให้กด **Create merge request** **ดังรูป**

![DeployOnGitlab34](/images/deploy-application/deploy-on-gitlab/clone/34.png)

ในหน้านี้จะทำการเปรียบเทียบ code ว่ามีการเปลี่ยนแปลงอย่างไร และสามารถ merge ได้หรือไม่ และทำบางอย่างในขณะทำการ **merge** ได้ เช่น

- **Approve** ในรูปปุ่ม Approve จะกด หรือไม่กดก็ได้ ทั้งนี้ขึ้นอยู่กับการกำหนดให้ใครมีสิทธิ์ merge ได้บ้าง เพราะ บางกรณีเมื่อสร้าง **Merge request** แล้วอาจต้องให้คนมีสิทธิ์มาทำการกด **Merge** อีกที
- **Option** สามารถเลือกที่จะให้ไปด้วยขณะ **merge**
  - **Delete source branch** คือเมื่อทำการ **merge** แล้วให้ทำการลบ branch ที่เข้ามา **merge**
  - **Squash commits** คือ ยุบรวมหลาย **commits** เป็น 1 **commit** เพื่อง่ายต่อการดูประวัติ
  - **Edit commit message** แก้ **commit message** ก่อนจะทำการ **merge**
- **Merge** ทำการ **merge commit** และ **run pipeline** (ถ้ามี และสามารถทำงานได้)

ในส่วนที่ run pipeline เพื่อสร้าง Application ในแต่ environment ต้องทำอย่างไรสามารถดูได้ที่ **[Workflow](./workflow.md)**

![DeployOnGitlab35](/images/deploy-application/deploy-on-gitlab/clone/35.png)

ถ้ามี pipeline จะปรากฏ **ดังรูป**

![DeployOnGitlab35](/images/deploy-application/deploy-on-gitlab/clone/37.png)

หลังจาก merge จะพบว่า code ถูก merge เข้ามาแล้ว ให้ทำการกดปุ่ม Clone และเลือกกด **Clone with SSH** เพื่อทำการคัดลอก **ดังรูป**

![DeployOnGitlab35](/images/deploy-application/deploy-on-gitlab/clone/4.png)

จากนั้นให้ใช้คำสั่ง git clone เพื่อทำการ clone project ลงมา

```
git clone **ที่คัดลอกมา**
```

![DeployOnGitlab35](/images/deploy-application/deploy-on-gitlab/clone/5.png)

เมื่อทำการ clone เสร็จแล้วให้เปิด project ขึ้นมาใน coding editor ของเรา

![DeployOnGitlab35](/images/deploy-application/deploy-on-gitlab/clone/6.png)

จากนั้นลอง run project ขึ้นมาซึ่งในตัวอย่างใช้วิธี build docker และ docker run อีกที โดย build ด้วยคำสั่ง

```
docker build -t api .
```

![DeployOnGitlab35](/images/deploy-application/deploy-on-gitlab/clone/7.png)

และ run docker ด้วยคำสั่ง

```
docker run -p 8000:3000 api
```

![DeployOnGitlab35](/images/deploy-application/deploy-on-gitlab/clone/8.png)

ให้เปิด http://localhost:8000 เมื่อเปิดขึ้นมา และพบผลลัพธ์ **ดังรูป**

![DeployOnGitlab35](/images/deploy-application/deploy-on-gitlab/clone/9.png)
