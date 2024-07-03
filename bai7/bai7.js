const arrayOne = ["a", "b", "c"];
const arrayTwo = [1, 2, 3];
const arraysCombined = [...arrayOne, ...arrayTwo];
console.log(arraysCombined);
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));
// expected output: 6
// note the spread operator for object, if the object after
// have qualified the like object the qualified before than duplicated
