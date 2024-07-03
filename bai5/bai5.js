const myArray = [1, 2, 3, 4];

const myList = myArray.map((item, index) => {
  console.log(item, index);
  return item * 2;
});
console.log(myList);
