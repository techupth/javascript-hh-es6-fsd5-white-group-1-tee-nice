function checkHeight(height) {
  let result = height ?? "Height is not defined";
  return result;
}

let height = undefined;
let result = checkHeight(height);
console.log(result); // ผลลัพธ์ควรจะได้ออกมาเป็น “Height is not defined”
