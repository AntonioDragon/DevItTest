
//Второе задание

let arrays = [[1, 2], [1990, 85, 24], 5, [7, 8.1]]
let reducer = (accumulator,currentValue) => accumulator.concat(currentValue);


function arrtransform (arr) {
    newArr = arr.reduce(reducer);
    return newArr;
}

console.log(arrays);
console.log(arrtransform(arrays)+'');