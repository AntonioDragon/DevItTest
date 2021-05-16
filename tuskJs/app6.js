//-------------------------------------Пример 1
async function parallel1(one,two){
    let result = await one + two;
    console.log(result);
}
function  parallel2(one,two) {
    let result = (one!=two);
    console.log(result);
}
parallel1(8,8);
parallel2(8,8);

//-------------------------------------Пример 2
function parallel3(one,two){
    let result = one + two;
    console.log(result);
}
async function  parallel4(one,two) {
    let result = await (one!=two);
    console.log(result);
}
parallel3(4,4);
parallel4(4,4); 