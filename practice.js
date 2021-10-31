//To convert an array to a string
// const array= ["Razia","Sheetal","VermaJi"]
// x = array.toString()
// console.log(x);


// //sort() in array
// //It arranges or sorts the elements of the array alphabetically
// //It also sorts on the basic of upper and lower cases
// let array = ["cat","fan","google","apple","banana"]
// array_sorted = array.sort()
// console.log(array_sorted.sort());
// console.log(array_sorted);



// //sort( ) with numbers of the array
//  let list = [6,9,1,3,4,8,5,2,7]
//  console.log(list.sort());


const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort()); // It doesn't sort the numbers in the correct order it confuses 
// we have to use the function to sort the numbers
d=points.sort(function(a,b){return(a - b)})  // sorts the array in ascending order
console.log(d);

// To sort the array in decending order we can use 
s=points.sort(function(a,b){return b - a})
console.log(s);


function minArray(arr){
    return Math.min.apply(null,arr)
}
console.log(minArray(points))


function maxArray(arr){
    return Math.max.apply(null,arr)
}
console.log(maxArray(points));