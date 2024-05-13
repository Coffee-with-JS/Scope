// var a

var a = 100

for(let i = 1; i<=1; i++){
    
    console.log("inner 1",a)

    var a = 50

    console.log("inner 2",a)
}

console.log("outer",a)





// let and const are of block scope
// var is of function scope
// undeclared varaible is of global scope 



// all 3 varaibles are hoinsted to the top of the scope 

// but tdz applies to let and const 