# Permission Inherited

![Logo Harbor](/images/role-and-permission/PermissionLevel1.png){data-zoomable}

### การสืบทอด Permission ใน Opstella

เมื่อ User ถูกเพิ่ม Role เข้าไปใน Layer แล้วจะได้รับ Role เดียวกันใน Layer ที่อยู่ถัดลงมา **ยกตัวอย่าง เช่น**

- เพิ่ม user A เป็น Admin ที่ Layer Platform ตัว user A จะได้ Role ใน Sercvice และ Component ด้วย
- เพิ่ม user B เป็น Full Control ที่ Layer ทำให้ user B จะได้ Role ที่ Component ด้วย แต่ไม่สามารถไปจัดการบน Layer Platform ได้
- ไม่สามารถเพิ่ม user เป็น Admin เพราะ ที่ Layer ต่ำกว่า Platform เพราะ เป็น Role ที่ Layer Platform และไม่สามารถเพิ่ม user เป็น Full Control ที่ Layer Platform ได้ เพราะ เป็น Role ของ Layer Service

จากตัวอย่างจะพบว่ายิ่งให้ Role กับ user ที่ Layer ที่อยู่สูงกว่าจะยิ่งมีสิทธิ์การจัดการที่มากขึ้น และใช้ devops tool ได้มากขึ้น

**การเพิ่ม user ที่ layer ใดจึงควรคำนึงถึงสิทธิ์การเข้าถึงของ user เป็นเรื่องสำคัญ**
