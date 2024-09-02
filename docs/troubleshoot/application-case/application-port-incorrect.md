# Application Port Incorrect

กรณีที่ทำการ Deploy ไปแล้วเจอ **Error 502 Bad Gateway** สามารถเกิดขึ้นได้จากเข้า port ผิด สามารถตรวจเช็คได้จาก **ตัวอย่าง** ต่อไปนี้

จากรูปเมื่อเปิด url จาก opstella พบว่าขึ้น **Error 502 Bad Gateway**

![portIssue](/images/troubleshoot/port-incorrect/1.png)

ลองเข้า pod จากนั้นพิมพ์คำสั่ง

```
netstat -tupln
```

จะปรากฏว่า port ของ pod คือหมายเลขอะไร

![portIssue](/images/troubleshoot/port-incorrect/2.png)

จากนั้นไป update เพื่อดูว่า port ตรงกัน หรือไม่

![portIssue](/images/troubleshoot/port-incorrect/3.png)

หากพบว่า port ไม่ตรงกัน ให้เปลี่ยนให้ตรงกัน กับ pod

![portIssue](/images/troubleshoot/port-incorrect/4.png)

สามารถเข้าใช้งานได้ปกติ

![portIssue](/images/troubleshoot/port-incorrect/5.png)
