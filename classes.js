//spread syntax(...)
function product(x,y,z){
    return x*y*z
}
const numbers=[5,4,3] //we can take more values the thing is that it will use the numbers for the defined arguments
console.log(product(...numbers));//this will take the numbers which will used to return the sum



// //  array prototype or concat
// let arr1=[1,2,3,4,5]     //without spread syntax
// let arr2=[6,7,8,9,10]
// arr3=arr1.concat(arr2)
// console.log(arr3);


//with spread syntax
// let arr1=[1,2,3,4]
// let arr2=[5,6,7,8]
// arr1=[...arr1,...arr2]
// console.log(arr1 );



// class cars{
//     car_brand(name,year){
//         this.name;
//         this.year;
//     }
    
// }
// const my_car = new cars("Suzuki",2019)

// console.log(my_car.name,my_car.year);



// // let name = "Razia"
// function callname(name){
//     setTimeout(()=>{
//         console.log(name);
//     },5000)
// }
// callname("Razia")


// let a = "razia"
// x = a.toUpperCase()
// console.log(x);
// let b = 'SHEETAL'
// y = b.toLowerCase()
// console.log(y);



// class inheritence
// class car{
//     constructor(brand){
//       this.carname = brand;
//     }
//     present(){
//         return `i have  ${this.carname}`
    
//     }
// }
// class Model extends car{
//     constructor(brand,mod){
//         super(brand)
//         this.Model = mod;
//     }
//     show(){
//         return `${this.present()}  this is  ${this.Model}`
//     }
// }
// let myCar = new Model("Suzuki","Alto")
// console.log(myCar.show());



// let x=function myName(){
//     console.log("Razia");
// }
// x()
// console.log(typeof(x));


let dic ={a:1,b:2}
// dic['a']=3
// console.log(dic.length);



// console.log(x);
// console.log(dic);



// for(var i=1;i>0;i++){
//     console.log(i);
// }


let array = [2,3,5,6,7,9]
// console.log(array.length);

// array[2] = 1
// console.log(array);
// for(i of array){
//     if(i==5){


//     }
// }
// console.log(array.splice(2,0,8));
// console.log(array.slice(2))


// a = 5

// console.log(a);
// var a;
// // var a = 5
// const a = 3


// let array1 = [1,5,7,8,4]
// console.log(array1.sort());


// let array2 = [1,10,100,25,50]
// console.log(array2.sort());
// b = array2.sort(function(a,b) {return a - b})
// console.log(b);



// var a = " i am Razia "
// x=a.indexOf("are")
// console.log(x);


function callback(num1,num2){
    console.log(num1,num2);
    
}
function show(){
    console.log("my value is 2");
    // console.log(a);
}
callback(2,6)
show()




// a=("Razia")
// console.log( Array.from(a));
