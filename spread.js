function spread_fun(num1,num2,num3){
    console.log(num1 * num2 * num3);
}
let number=[1,2,3,4,5,6,7]
spread_fun(...number)



// //Used to merge multiple array in a single array
// var Array1 = [1,2,3,4,5,'Sheetal']
// var Array2 = [6,7,8,9,10,'Verma']
// var combined_arrays = [...Array1,...Array2]
// console.log(combined_arrays);


// we can use push() function to push the elements of one array to another
// var Array1 = [1,2,3,4,5,'Sheetal']
// var Array2 = [6,7,8,9,10,'Verma']
// var Array3 = [11,12,13,14,'Shiekh']
// var Array4 = [15,16,17,18,'Razia']
// var merged = []
// merged.push(...Array1,...Array2,...Array3,...Array4)
// console.log(merged);


// function mynumber(number){
//     console.log(number*2);
// }
// let num = [6,2,3,4,5]
// mynumber(...num)



// Spread with object data type
var obj={}
Object.assign(obj,{a:1,b:3,c:4},{z:8,x:9},{r:19,s:18})  //assigns the values and pairs to the empty obj 
console.log(obj);


// looping through spread operator
function sum(...args){
    var sum = 0;
    for(var i of args){
        sum+=i
    }
    return sum
}
console.log(sum(2,3,5,6,7));