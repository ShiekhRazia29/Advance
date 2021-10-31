const fs = require("fs");
// to be deleted synchronously
// try{
//     fs.unlinkSync('./razia.txt')

// }catch(e){
//     console.log(e);

// }finally{
//     console.log('Done sync delete');
// }

// console.log("This is done after the file gets deleted from the system.");




// to delete asynchronously
// fs.unlink('./razia.txt',err=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('Done asynchrounously');

//     }
// })
// console.log('This is done and the comes the next step');



// // Reading a file  synchronous
// let read_a_file = fs.readFileSync("./razia.js",{encoding:"utf-8"})
// console.log(read_a_file);


// Readin file asynchronously
fs.readFile("C:\Users\Shiekh Razia\Desktop\JavaScript\AdvancJS\razia1.js","utf-8",(err,data)=> {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});
console.log("after this ");



// // write in a file synchronously
// fs.writeFileSync("./razia.js","console.log('i will be written in the next file')",(err)=>{
//     if(err){
//         console.log(err);  //this simply overwrites the existing file.
//     }else{
//         console.log('Finished writing');
//     }
// })


// Appending instead of writing to a file 

fs.appendFile("./append.js","console.log('i will be added in the existing file')",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Finished appending');
    }
})


