# Case mount secret

กรณีที่ pod อยู่ในสถานะ pending หลัง Deploy อาจเกิดจาก Mount Secret ไม่สำเร็จจะแสดง error **ดังรูป**

![portIssue](/images/troubleshoot/mount-secret/1.png)

แก้โดยการสร้าง Secret ที่ตรงกับที่กำหนดภายใน Helm และใช้ namespace เดียวกันกับ pod
