var talk = function(fx){
    fx();
}
var sayHi = function(){
    console.log("hi");
}
talk(sayHi)



// example 2
function sum(a,b){
    return a + b
}
function calc(fx,a,b){
    return fx(a,b)
}
console.log(calc(sum,5,8));