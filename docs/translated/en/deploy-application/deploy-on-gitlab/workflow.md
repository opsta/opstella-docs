# Pipeline workflow

ในส่วนของการ run pipeline นั้นจะทำงานตามเงื่อนไขที่กำหนดในไฟล์ gitlab-ci.yaml ซึ่งจะอธิบายรายละเอียดในบทถัดไป โดยในบทนี้จะอธิบายเงื่อนไขในการให้สามารถขึ้นไปยัง Develop, Pre Production และ Production **ดังรูป**

```mermaid
    flowchart LR
        Develop --> PreProduction
        PreProduction --> Production
```

มีขั้นตอนดังต่อไปนี้

## Develop

**ขั้นตอนการ ขึ้น develop**

เมื่อทำการ merge code เข้า branch develop pipeline จะทำงานทันที

![Push5](/images/deploy-application/deploy-on-gitlab/workflow/run/1.png)

## Run pipeline develop

เมื่อมีการแก้ไข code และต้องการนำขึ้นไปยัง develop ให้ทำการ commit code ไปยัง branch develop หรือ merge request เข้า branch develop ก็ได้ โดยจะยกตัวอย่างการ push code ขึ้น branch develop

```
git add -A
git commit -m test
git push
```

![DeployOnGitlab35](/images/deploy-application/deploy-on-gitlab/workflow/11.png)

หลังจากที่มีการ push code ขึ้น branch develop จะมีการ run pipeline **ดังรูป**

![DeployOnGitlab35](/images/deploy-application/deploy-on-gitlab/workflow/12.png)

สามารถเข้าไปดูรายละเอียดว่าแต่ละ stage ทำอะไรบ้าง

![DeployOnGitlab35](/images/deploy-application/deploy-on-gitlab/workflow/13.png)

**<ins>ตัวอย่าง</ins>** run pipeline สำเร็จ

![DeployOnGitlab35](/images/deploy-application/deploy-on-gitlab/workflow/14.png)

**<ins>ตัวอย่าง</ins>** run pipeline ไม่สำเร็จ

![DeployOnGitlab35](/images/deploy-application/deploy-on-gitlab/workflow/39.png)

สามารถกดเข้าไปดูรายละเอียดภายในเพิ่มเติมได้

![DeployOnGitlab35](/images/deploy-application/deploy-on-gitlab/workflow/40.png)

เมื่อ run pipeline สำเร็จแล้วให้ไปที่หน้า **Component Detail** แล้วกดเปิด url ของ develop **ดังรูป**

![DeployOnGitlab35](/images/deploy-application/deploy-on-gitlab/workflow/41.png)

จะต้องสามารถทำการ ingress ตามที่กำหนดได้ถูกต้อง

![DeployOnGitlab35](/images/deploy-application/deploy-on-gitlab/workflow/42.png)

## Pre Production

เมื่อทำการ merge code เข้า branch main pipeline จะทำงานทันที

![Push5](/images/deploy-application/deploy-on-gitlab/workflow/run/2.png)

## Run pipeline Pre production

หากต้องการ run pipeline เพื่อขึ้น Pre production สามารถทำได้โดยการ merge branch เข้า branch main **ดังรูป**

เปิดหน้า merge request ทำการเลือก branch develop แล้ว merge เข้า branch main

![DeployOnGitlab35](/images/deploy-application/deploy-on-gitlab/workflow/run-pipeline/2.png)

เปิดหน้า merge request ทำการเลือก branch develop แล้ว merge เข้า branch main

![DeployOnGitlab35](/images/deploy-application/deploy-on-gitlab/workflow/run-pipeline/3.png)

ทำการกด merge หลังจากนั้นจะทำการ run pipeline

![DeployOnGitlab35](/images/deploy-application/deploy-on-gitlab/workflow/run-pipeline/4.png)

## Production

เมื่อทำการ สร้าง tag ในรูปแบบ v.x.x.x และ run pipeline ที่ tag นั้น จึงจะทำงาน

![Push5](/images/deploy-application/deploy-on-gitlab/workflow/run/3.png)

## Run pipeline Production

หากต้องการ run pipeline เพื่อขึ้น Production สามารถทำได้โดยการติด Tag ในรูปแบบ v.x.x.x **ดังรูป**

![DeployOnGitlab35](/images/deploy-application/deploy-on-gitlab/workflow/run-pipeline/6.png)

หลังจากเข้าหน้า Tag จากนั้น กด **New Tag**

![DeployOnGitlab35](/images/deploy-application/deploy-on-gitlab/workflow/run-pipeline/7.png)

ตั้งชื่อ Tag ในรูปแบบ v.x.x.x แล้วกด **Create tag**

![DeployOnGitlab35](/images/deploy-application/deploy-on-gitlab/workflow/run-pipeline/8.png)

จากนั้นไปหน้า **Pipelines** แล้วกด **Run pipeline**

![DeployOnGitlab35](/images/deploy-application/deploy-on-gitlab/workflow/run-pipeline/9.png)

เลือกจาก Tag ที่ต้องการแล้วกด **Run pipeline**

![DeployOnGitlab35](/images/deploy-application/deploy-on-gitlab/workflow/run-pipeline/10.png)
