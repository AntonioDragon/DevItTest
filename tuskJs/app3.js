function MultiplicatorUnitFailure() {}
function primitiveMultiply(a, b) {
  if (Math.random() < 0.1)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}
function reliableMultiply(a, b) {
  try{
    console.log(primitiveMultiply(a, b));
  }catch(MultiplicatorUnitFailure){
    console.log('error');
    throw reliableMultiply(a,b);
  }
}
reliableMultiply(8, 8);
