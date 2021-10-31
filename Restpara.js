//The rest parameter allows us to represent an indefinite number of arguments as an array. 
//Rest Parameter
function newRest(...args){
    console.log(args);
}
newRest(10,20,30,35)


//to access the values of rest parameter one by one
function newArgs(a,b,...args){
    console.log(args[3]);//prints third element in rest parameter after the parameter that are defined

}newArgs(10,20,3,23,45,67,89)//a=10 and b=20 others are rest parameters


