//Ассоциативные массивы
let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];

function array_combine(keys,values){
    let arr = new Map();
    let check =0;
    for(let value of keys){
        if(value != true && value != false){
            arr.set(value,values[check]);
            check++;
        }
    }
    console.log(arr);
}
array_combine(testData,testData2)