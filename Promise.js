// let PromiseIwillStudy= new Promise(function(resolve,reject){
//     //doing study
//     let isStudying = true;
//     if(isStudying)
//         resolve("Doing what i said");
//     }
//     else{
//         reject("not studying")
//     }
// });
// PromiseIwillStudy.then(function(fromResolve){
//     console.log("i m"," " + fromResolve);
// }).catch(function(fromReject){
//     console.log("i m "," " + fromReject);
// })



// Async Await:Make the function t0 run asynchronously
//Await is used with async only
// const getData=async()=>{
//     var x="hello World"
//     return x
// }
// getData().then(x=>console.log(x))


// const getData=async()=>{
//     var y = await "hello world"
//     console.log(y);
    
// } 
// console.log("this will come first");
// getData();//this is awaited due to await 
// console.log("this will be printed second");
//  let promise = new promise(function(resolve,reject)=>{
//      console.log("i am health");
//  });
// function callback(){
//     console.log("i wil cal this in next step");
// }
// function calback2(){

// }
// calback2(callback)
// function newlist(...agrs){
//     console.log(art(12,12,34,56,45)
// function a(...input){
//     console.log(input);
//     sum=0
//     even=[]
//     odd=[]
//     for(i of input){
//         sum=sum+i
//         if(i%2==0){
//             even.push(i)

//         }else{
//             odd.push(i)
//         }
        
//     }
    // console.log(, ${sum},${even},${odd}")
//     console.log(`sum ${sum}`);
//     console.log(`odd ${odd}`);
//     console.log(`even ${even}`);
//     // console.log(`sum ${sum}even \n ${even} \n odd ${odd}`);
// }a(1,3,6,8)


// // promise examples
// let promise = new Promise(function(resolve,reject){
//     resolve("done");
//     reject(new error("..."))
//     setTimeout(()=>resolve("..."));
// })

let p = new Promise((resolve,reject)=>{
    let a = 1 +2
    if(a==2){
        resolve("Done")
    }else{
        reject("Failed")
    }
})
p.then((message)=>{
    console.log("This is then" +message);

}).catch((message)=>{
    console.log(`this is the catch ${message}` );
})