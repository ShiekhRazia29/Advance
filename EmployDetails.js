var fs=require("fs");
var readline=require("readline-sync")
let fetch_data=fs.readFileSync("Details.json")
var converted_data=JSON.parse(fetch_data);
console.log(converted_data);
var surname=readline.question("Enter the employee surname:");
var obj=converted_data.filter((surname,name)=>Name.includes("surname"));
console.log(Name);