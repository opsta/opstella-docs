# Create User

## การสร้าง user

1. ไปที่เมนู user ซึ่งจะมีสิทธิ์เฉพาะ admin (opstella) เท่านั้นที่สามารถเพิ่มได้ โดยกด **"Create User"**

   ![Logo Harbor](/images/role-and-permission/create-user/createUser1.png){data-zoomable}

2. จะปรากฏหน้า Create User โดยต้องกรอกส่วนที่สำคัญคือ **Username** และ **email** ส่วนนี้จะไม่สามารถแก้ในภายหลังได้เนื่องจากจะถูกนำไปผูกกับระบบยืนยันตัวตน (OIDC)

   ![Logo Harbor](/images/role-and-permission/create-user/createUser2.png){data-zoomable}

3. เมื่อกรอกข้อมูลครบถ้วน ให้ทำการกด **Create User** เพื่อยืนยันการสร้าง

   ![Logo Harbor](/images/role-and-permission/create-user/createUser4.png){data-zoomable}

4. เสร็จระบบจะกลับมาหน้ารายการ User List จะพบ User ที่ได้ทำการสร้างไป อาจเจอในขณะที่ Processing อยู่ หลังจากเปลี่ยนปกติ User นี้สามารถนำไปใช้งานได้เลย

   ![Logo Harbor](/images/role-and-permission/create-user/createUser5.png){data-zoomable}

## การเพิ่มสิทธิ์ให้ user

1. ให้ไปที่ Platform, Service, Component ที่ต้องการจะเพิ่มสิทธิ์แล้วกด **+Permission**

![Logo Harbor](/images/role-and-permission/create-user/add-permission/addPermission1.png){data-zoomable}

2. ปรากฏหน้าต่างรายการ User สามารถกดเพิ่ม หรือกดนำ User ออกจาก Layer นั้นได้ แต่ต้องนำ User ออกใน Layer ที่เพิ่มเข้าไปเท่านั้น และ **ไม่สามารถปรับสิทธิ์ User opstella ได้**

![Logo Harbor](/images/role-and-permission/create-user/add-permission/addPermission2.png){data-zoomable}

3. เมื่อกดเพิ่มแล้วให้ลองกดดูที่ Permission อีกครั้งจะพบว่า User ที่เลือกถูกเพิ่มสิทธิ์แล้ว

![Logo Harbor](/images/role-and-permission/create-user/add-permission/addPermission3.png){data-zoomable}
