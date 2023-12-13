function checkHeight(height) {
  let result = height ?? "Height is not defined";
  return result;
}
let height = undefined;
let result = checkHeight(height);
console.log(result); // ผลลัพธ์ควรจะได้ออกมาเป็น “Height is not defined”

//Nullish Coalescing เป็นวิธีการใน JavaScript ที่ใช้ตัวดำเนินการ ?? เพื่อกำหนดค่าเริ่มต้น (default value)
//ในกรณีที่ค่านั้นเป็น null หรือ undefined เท่านั้น (ไม่ครอบคลุมค่าที่เป็น falsy อื่น ๆ เช่น 0, "", false, NaN)
//ซึ่งทำให้ Nullish Coalescing แตกต่างจาก Logical OR (||) ที่ใช้ในการกำหนดค่าเริ่มต้นด้วยการจัดหาค่าที่เป็น falsy ทั้งหมด.
