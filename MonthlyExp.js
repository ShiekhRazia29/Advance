const fs = require("fs");
var content=fs.readFile("data.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Error");
        return;
    }
    a=data.split('\r\n')
    // empty_str=[]
    // for (let i of a){
    //     b=parseInt(i) //convert data into integer
    //     empty_str.push(b);
    // }
    var result=a.map(function(x){
        return parseInt(x);
    });
    // console.log(result);
    // console.log(empty_str);
    const value =result.reduce((total,amount)=>total + amount);
    console.log(value);

});




