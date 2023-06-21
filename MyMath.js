class MyMath {
  static sum = (...numbers) => numbers.reduce((acc, number) => acc + number);
  static subtract = (...numbers) => numbers.reduce((acc, number) => acc - 
number);
  static multiply= (...numbers) => numbers.reduce((acc, number) => acc * 
number);
  static divade = (...numbers) => numbers.reduce((acc, number) => acc + number);
}
const PI = 3.14;
//common.js
module.exports.MyMath = MyMath;

module.exports.PI = PI;