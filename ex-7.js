const employee1 = {
  name: "John",
  age: 20,
};

const result1 = employee1.scores?.english; //ใช้ Optional Chaining (?.) เพื่อป้องกัน error ในกรณีที่ property หรือ nested property ไม่ได้ถูกกำหนดค่าไว้

const employee2 = {
  name: "A",
  age: 50,
  scores: {
    math: 40,
  },
};

const result2 = employee2.scores?.english ?? "English score is not defined";

console.log(result1); // undefined
console.log(result2); // English score is not defined
//ในกรณีที่ employee2.scores?.english เป็น undefined (เนื่องจากใช้ Optional Chaining),
//?? จะให้ค่าเริ่มต้นที่ถูกกำหนดไว้คือ "English score is not defined" แทน
