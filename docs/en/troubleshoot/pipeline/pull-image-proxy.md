# Pull Image Proxy Issue

จากภาพคือ **error ที่ไม่สามารถ download library** ที่ request ไปยัง domain dl-cdn.alpinelinux.org ได้ **เนื่องจากติด proxy**

![Proxy](/images/troubleshoot/build-issue/build-issue-proxy/proxy1.png)

## วิธีการแก้ไขเมื่อไม่สามารถดาวน์โหลด module ได้ เนื่องจากติด proxy

1. เข้าไปหน้า **Component Detail** ของ **Application ที่มีปัญหา**

![Proxy](/images/troubleshoot/build-issue/build-issue-proxy/proxy5.png)

2. กดเข้าไปที่ **GitLab** ในส่วน SSO

![Proxy](/images/troubleshoot/build-issue/build-issue-proxy/proxy6.png)

3. ทำการ **Login Gitlab**

![Proxy](/images/troubleshoot/build-issue/build-issue-proxy/proxy7.png)

4. เมื่อเข้ามาแล้วให้กดไปที่ เมนู **CI/CD ด้านซ้ายมือดังรูป** จากนั้นทำการกดไปเข้าที่ **Variable**

![Proxy](/images/troubleshoot/build-issue/build-issue-proxy/proxy8.png)

5. ทำการ **เพิ่ม Variable "KANIKO_EXTRA_ARGS"** ที่ทำหน้าที่ในการ Set Proxy บน **Repository**

![Proxy](/images/troubleshoot/build-issue/build-issue-proxy/proxy2.png)

![Proxy](/images/troubleshoot/build-issue/build-issue-proxy/proxy3.png)

5. ทำการเพิ่ม **Arg บน Dockerfile ( SSL_CERT_DIR และ NODE_OPTIONS )** ดังรูป

![Proxy](/images/troubleshoot/build-issue/build-issue-proxy/proxy4.png)

6. ทำการ **Build Pipeline** ใหม่อีกครั้ง
