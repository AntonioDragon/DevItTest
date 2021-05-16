let testData3 = [
    {"name":"Vasya","email":"vasya@example.com","age":20,"skills":{"php":0,"js":-1,"madness":10,"rage":10}},
    {"name":"Dima","email":"dima@example.com","age":34,"skills":{"php":5,"js":7,"madness":3,"rage":2}},
    {"name":"Colya","email":"colya@example.com","age":46,"skills":{"php":8,"js":-2,"madness":1,"rage":4}},
    {"name":"Misha","email":"misha@example.com","age":16,"skills":{"php":6,"js":6,"madness":5,"rage":2}},
    {"name":"Ashan","email":"ashan@example.com","age":99,"skills":{"php":0,"js":10,"madness":10,"rage":1}},
    {"name":"Rafshan","email":"rafshan@example.com","age":11,"skills":{"php":0,"js":0,"madness":0,"rage":10}}]


function array_pluck(arr,obj){
    let objnew = obj.split('.');
    if(objnew.push() == 1){
        for(let value of arr)
            for(let [key,value2] of Object.entries(value))
                if(key==objnew[0])
                    console.log(value2);}
    else
        {for(let value of arr)
             for(let [key,value2] of Object.entries(value))  
                if(key==objnew[0])
                    for(let[key,value3] of Object.entries(value2))
                        if(key==objnew[1])
                            console.log(value3);    }   
}
array_pluck(testData3,"skills.js")