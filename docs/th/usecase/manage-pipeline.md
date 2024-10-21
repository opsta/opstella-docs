# Manage Pipeline

## ขั้นตอนการแก้ CI ใน opstella

1. ภายใน gitlab repository จะมีไฟล์ .gitlab-ci.yaml อยู่ **ดังรูป**

![UsingCI1](/images/deploy-application/using-ci/1.png)

2. ซึ่งภายในคือส่วนของการกำหนดการทำงาน pipeline ซึ่งใน opstella จะเป็นการไปเรียกจาก template ที่ได้สร้างไว้ในอีก repository มาอีกที จากเรียกใช้ **include** จาก opstella/cicd/pipeline-template ใน branch main และที่อยู่ของไฟล์ **ดังตัวอย่าง**

```
include:
    - project: "opstella-cicd/pipeline-template"
      ref: main
      file: "/pipelines/09-simple/template.yml"
```

3. หากต้องการจะแก้ไขต้องไปแก้ที่ตัว template โดยให้ไปพิมพ์ค้นหาจากหน้าแรก **ดังรูป**

![UsingCI4](/images/deploy-application/using-ci/4.png)

4. จะแบ่งเป็น 2 ส่วนคือ jobs และ pipelines **ดังรูป**

![UsingCI5](/images/deploy-application/using-ci/5.png)

- ส่วนของ jobs คือ แบ่งการทำงานเป็นส่วน เช่น build, scan code, test case เป็นต้น
- ส่วนของ pipelines คือ การนำ jobs มาประกอบ โดยสามารถกำหนดเงื่อนไขการทำงานได้
  ซึ่งหากต้องแก้ pipeline ควรมาแก้ในจุดนี้ โดยจะเขียน jobs หรือ pipelines เพิ่ม หรือเขียนใน branch อื่น

5.  ลองเข้า folder pipeline จะพบว่าหลาย pipeline สำหรับภาษา หรือ framework ต่างๆ ลองกดเข้าไปดูไฟล์ template.yaml มีการเรียกมาจะพบว่าภายในมีการแบ่ง 3 ส่วน **ดังรูป**

![UsingCI8](/images/deploy-application/using-ci/8.png)

- include คือ ส่วนที่ดึง jobs ที่จะใช้มาจากโฟลเดอร์ jobs
- stages คือ กำหนดลำดับการทำงานโดยที่กำหนดก่อนจะทำงานก่อน
- process คือ กำหนดเงื่อนไขในการใช้ jobs ที่เรียกมา และกำหนดว่าให้ทำงานใน stage ไหน

ซึ่งหากต้องการแก้ลำดับ, เพิ่มเงื่อนไข หรือเพิ่มการทำงานควรมาเพิ่มภายในไฟล์นี้ แต่หากเป็นการแก้ไขเฉพาะเจาะจงการทำงานควรเข้าไปแก้ในไฟล์ของ job นั้น **ดังรูป**

![UsingCI9](/images/deploy-application/using-ci/9.png)

6. เปรียบเทียบก่อน และหลังแก้ pipeline จากตัวอย่างของ pipeline ที่ถูก run ไปแล้ว

![UsingCI10](/images/deploy-application/using-ci/10.png)

จากรูปจะเห็นว่ามี stages ตามที่กำหนดในไฟล์ pipeline และชื่อ process ที่ทำงานในแต่ละ stages ต่อไปจะลองแก้ pipeline โดยการแก้ไฟล์ .gitlab-ci.yaml **ดังรูป**

![UsingCI12](/images/deploy-application/using-ci/12.png)

เมื่อไปแก้ .gitlab-ci.yaml โดยในตัวอย่างจะเปลี่ยนให้ดึง pipeline มาจาก branch argo-cd แทน main ซึ่งการแก้ที่ job หรือ pipeline เองก็สามารถทำได้เช่นกัน แต่หากต้องการแก้เพื่อใช้งานเฉพาะบางงาน แล้วไม่ต้องการให้กระทบงานอื่น **ควรเลือกวิธีแยก branch** จากนั้นลอง run pipeline อีกครั้ง และดูผลลัพธ์

![UsingCI13](/images/deploy-application/using-ci/13.png)

จะเห็นว่าใน pipeline นี้ stages เปลี่ยนไปจากการกำหนดให้เรียก pipeline

**ตัวอย่าง pipeline**

```
include:
    - local: "/jobs/init/set-env.yml"
    - local: "/jobs/sonarqube/scan.yml"
    - local: "/jobs/trivy/scan-iac.yml"
    - local: "/jobs/owasp/scan.yml"
    - local: "/jobs/kaniko/execute.yml"
    - local: "/jobs/helm/simple-deploy.yml"
    - local: "/jobs/argo-cd/update-image-tag.yml"

stages:
    - init
    - build
    - security
    - update-gitops-image-tag

init-set-env:
    stage: init
    extends: .init-set-env
    rules:
        - if: $CI_COMMIT_BRANCH == 'develop' || $CI_COMMIT_BRANCH =~ /^release.+|^release/|| ($CI_MERGE_REQUEST_SOURCE_BRANCH_NAME =~ /^release.+|^release/ && $CI_MERGE_REQUEST_TARGET_BRANCH_NAME == 'main') ||$CI_COMMIT_TAG =~ /^[v]\.[0-9]+\.[0-9]+\.[0-9]+/
          when: always


sonarqube-scan:
    stage: security
    extends: .sonarqube-scan
    rules:
        - if: $SONARQUBE_SCAN_DISABLED == 'true'
          when: never
        - if: $CI_COMMIT_BRANCH == 'develop' && $SONARQUBE_ALLOW_FAILURE == 'true'
          allow_failure: true
        - if: $CI_COMMIT_BRANCH == 'develop' && $SONARQUBE_ALLOW_FAILURE == 'false'

dependencies-check:
    stage: security
    extends: .owasp-dependencies-check
    rules:
        - if: $DEPENDENCIES_CHECK_DISABLED == 'true'
          when: never
        - if: $CI_COMMIT_BRANCH == 'develop' && $DEPENDENCIES_CHECK_ALLOW_FAILURE == 'true'
          allow_failure: true
        - if: $CI_COMMIT_BRANCH == 'develop' && $DEPENDENCIES_CHECK_ALLOW_FAILURE == 'false'
    before_script:
        - cd $SONARQUBE_SCAN_SOURCE_CODE_TARGET
        - npm install
        - cd $CI_PROJECT_DIR

trivy-iac-scan:
    stage: security
    extends: .trivy_iac_scanning
    rules:
        - if: $TRIVY_IAC_SCAN_DISABLED == 'true'
          when: never
        - if: $CI_COMMIT_BRANCH == 'develop'

kaniko-build:
    stage: build
    extends: .kaniko-execute
    rules:
        - if: $CI_COMMIT_BRANCH == 'develop' || $CI_COMMIT_BRANCH =~ /^release.+|^release/ || ($CI_MERGE_REQUEST_SOURCE_BRANCH_NAME =~ /^release.+|^release/ && $CI_MERGE_REQUEST_TARGET_BRANCH_NAME == 'main')

update-image-tag:
    stage: update-gitops-image-tag
    extends: .update-gitops-image-tag
    rules:
        - if: $CI_COMMIT_BRANCH == 'develop' || $CI_COMMIT_BRANCH =~ /^release.+|^release/ || ($CI_MERGE_REQUEST_SOURCE_BRANCH_NAME =~ /^release.+|^release/ && $CI_MERGE_REQUEST_TARGET_BRANCH_NAME == 'main') ||($CI_COMMIT_TAG =~ /^[v]\.[0-9]+\.[0-9]+\.[0-9]+/ && $CI_PIPELINE_SOURCE == 'web')
          when: on_success
          allow_failure: false

```
