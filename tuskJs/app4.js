var arrOld = [1,2,3,4,5]

function arrExpansion (arr) {
   let arrNew = arr.reverse();
   arrNew.push(0);
   arrNew = arrNew.reverse();
   return arrNew;
}

console.log(arrOld);
console.log(arrExpansion(arrOld));