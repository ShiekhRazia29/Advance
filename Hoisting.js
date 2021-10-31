//This is used to declare the variable scope at the start of the program 
//Hoisting helps us to call the function before it is written and  varaible 
//if consoled before declaration throws error
isfun();//This works as the normal call 
console.log(x); //Prints undefined as this doesnot define the variable before printing it.
var x="This will be printed"
console.log(x);
//if we try to console something which is never defined it will show error 
function isfun(){
    console.log("Welcome to the function hoisting \n called before declartion");
}