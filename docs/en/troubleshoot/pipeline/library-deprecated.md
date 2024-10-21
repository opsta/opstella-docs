# Library deprecated

ในกรณีที่ใน stage build failed แล้วกดเข้าไปดูแล้วพบแจ้ง **Module not found** สามารถพบได้ในกรณีที่ทำการ build จาก source code ที่เป็น node โดย module ที่จะต้องติดตั้งอาจถูกนำออก หรือเก่าเกินไป **ดังรูป**

![portIssue](/images/troubleshoot/library-deprecated/2.png)

วิธีแก้คือให้ทำการแก้เวอร์ชั่นภายใน **package.json** หรือแก้ไขนำออก แล้วลองทำการ run pipeline อีกครั้ง
