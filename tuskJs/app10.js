let testData = [1, 2, 1990, 85, 24, "Vasya","Vasya","Vasya", "colya@example.com", "Rafshan","Rafshan","Rafshan", "ashan@example.com", true, false];

function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  

  
console.log(unique(testData) ); 