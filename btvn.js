// bai1
let a = 5;
let b = 10;

console.log("Trước khi hoán vị: a =", a, ", b =", b);

a = a + b;
b = a - b;
a = a - b;

console.log("Sau khi hoán vị: a =", a, ", b =", b);
// bai2
function max(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (b > a && a > c) {
    return b;
  }
  if (c > a && c > b) {
    return c;
  }
}
console.log(max(3, 4, 5));
//bai3
function bai3(a,b) {
  if (a * b > 0) {
  console.log( "hai so cung dau :", a,b);
  }
  else{
    console.log("hai sau trai dau :" , a,b);
  }
}
console.log(bai3(3,4));
//bai4
let x = 5;
let y = 9;
let z = 10;

function stacking(x,y,z){
    if(x>y){
        [x,y]=[y,x];
    }
    if(y>z){
        [y,z]=[z,y];
    }
    if(x>z){
        [x,z]=[z,x];
    }
}
console.log("ba so thu tu tang dan" , x, y, z);




