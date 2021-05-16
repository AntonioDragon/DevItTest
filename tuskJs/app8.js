//Данные для задания
let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];

function array_skip_until(arr,val){
    var value;
  for(value=0;value<=arr.length-1;value++){
      if (arr[value] == val)
        break;
  }
  arr.splice(0,value);
  console.log(arr);
}

array_skip_until(testData,"Rafshan");
