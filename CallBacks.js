// function myCalculator(num1,num2){
//     sum=num1+num2;

    
// } 
// myCalculator(5,6)
// console.log(sum);
// function addition(add){
//     console.log("Wlcome");
// }addition(2,myCalculator) //myCalculator is a function which is used as an argument in the function.
// // This is a fuction called after the settimeOutfunction
// var message = function(){
//     console.log("This will display after the set time interval:");

// }
// setTimeout(message,3000)
// Calculates the Area of each circle with the given radius 


// const radius=[1,2,3,4];
// const calculateArea=function(radius){
//     const output=[];
//     for(let i=0;i < radius.length;i++){
//         output.push(Math.PI*radius[i]*radius[i]);
//     }
//     return output;
// }
// console.log(calculateArea(radius));
// const calculateCircumference=function(radius){
//     const output=[];
//     for(let i=0;i < radius.length;i++){
//         output.push(2*Math.PI*radius[i] );
//     }
//     return output;



    //Higher order functions 
//Fuctions that call call itself inside another function is called a higher order funnction 
//Map Function
// const array=[1,2,3,4]  //to find the double triple of the given array
// function double(x){
//     return x*2;
// }
// function triple(y){
//     return y*3;
// }
// function binary(z){
//     return z.toString(2)
// }
// let result1=array.map(binary)
// var result=array.map(triple)
// const output=array.map((double)); //using callback we are creating the array with double of the given list
// console.log(output,result,result1);


//Filter is used to filter the values of the list o  the  given condition.
// const arr=[5,6,7,8,9,4]
// //filter all the odd numbers from the given array
// function isOdd(num){
//     return num % 2;
// }
// function isGreaterThan4(num1){
//     return num1 > 4;
// }
// const output=arr.filter(isGreaterThan4) //filters the numbers greater than 4 from the given array
// const result=arr.filter(isOdd)  // filters the numbers that are odd
// console.log(result);
// console.log(output);
// const simple=arr.filter((x)=> x>5);
// console.log(simple);

//Reduce Function
// to find sum max in the the array
//  var arr_reduce=[2,4,6,18,23]
//  function findMax(arr_reduce){
//      for(i in arr_reduce){
//         max=0
//         if(max < arr_reduce[i]){
//             max=arr_reduce[i]
//         }
//     }
//      return max;

//  }
//  var output=findMax(arr_reduce)
//  console.log(output);
//   // Above same code can be don with reduce


//   const result=arr_reduce.reduce( function(max,curr){ //current carries values like arr_reduce[i]
//       if(curr > max){
//           max= curr
//       }
//       return max;
//   },0);
//   console.log(result);



//array of object 
// const user=[{firstName:"Razia",lastname:"Shiekh",age:23},
// {firstName:"Razia",lastname:"Shiekh",age:20},
// {firstName:"Sheetal",lastname:"verma",age:19},
// {firstName:"Toiba",lastname:"Syed",age:22},
// {firstName:"Nuxhat",lastname:"meer",age:23}]
// const output = user.map((x)=>x.firstName +" "+x.lastname);
// console.log(output);


// callback function 
let first_fun = function(){
    console.log("I will be called inside the future function");
}
let second_fun = function(callback){
    console.log("do something");
    callback()

}
second_fun(first_fun)



// second example
// let calc = function(num1,num2,calcType){
//     if(calcType === "add"){
//         return num1 + num2
//     }else if(calcType === "multiplt"){
//         return num1 * num2
//     }
// };
// console.log(calc(2,3,add));


// third Example 
// let add = function(a,b){
//     return a + b;
// }
// let sub = function(a,b){
//     return a - b;
// }
// let calc = function(num1,num2,callback){
//     callback(num1,num2)

// }
// console.log(calc(4,5,add));





// let call_this = function(num1,num2){
//     num2()
// }