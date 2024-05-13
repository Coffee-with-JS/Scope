// let a, var a


// let a = 50  // a variable cannpot be declared with same name in same scope


// for(let i = 1; i<=1; i++){
//     // let a, 

//     console.log("inner 1",a) //  error

//     let a = 100

//     console.log("inner 2",a) // 100
   
// }

// console.log("outer",a)


var a = 100

function hello(){
    // var a
    console.log("inner 1",a)

    var  a = 50

    console.log("inner 2",a)
}


// hello()

// console.log("outer ",a)






// console.log(x)


// var x = 500