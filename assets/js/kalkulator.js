console.log("Selamat Anda berhasil menggunakan JavaScript pada Website");

// x=100;
// var x;
// console.log(x);

// const myArray = ["harii", "ibnu", "bandung",78 ,89 ];

// for(let i=0; i < myArray.length;i++){
//     console.log(myArray[i]);

// }

// for(arrayItem of myArray){
//     console.log(arrayItem);


// }

// function greeting(name,language){
//     if(language==="english"){
//         console.log("Good Morning  " + name);
//     }else if(language==="French"){
//         console.log("Bonjour  " + name);
//     }else {
//         console.log("selamat pagi  " + name);
//     }
// }
// greeting("Dadan","French");
// function multiply(a, b) {
//     return a * b;
// }
 
// let result = multiply(10, 2)
// console.log(result)
 

// let greetingMessage = greeting("Harry", "French");
// console.log(greetingMessage);



// global variable, dapat diakses pada parent() dan child()
// const a = 'a'; 
 
// function parent() {
//     // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses diluar dari fungsi tersebut.
//     const b = 'b'; 
    
//     function child() {
//         // local varible, dapat diakses hanya pada fungsi child().
//         const c = 'c';
//     }
// }
 
// const firstName=prompt("siapa nama depanmu?");
// const lastName=prompt("Siapa Nama Belakangmu?");
// const language=prompt("Bisa berbahasa apa?");


// const user ={
//     name:{
//         first:firstName,
//         last:lastName,
//     },
//     language:language
// };

// if (user.language === "English") {
//     alert("Nice to meet you " + user.name.first + " " + user.name.last + "!");
//  } else if (user.language === "French") {
//     alert("Ravi de vous rencontrer " + user.name.first + " " + user.name.last + "!");
//  } else if (user.language === "Japanese") {
//     alert("Hajimemashite, " + user.name.first + " " + user.name.last + "!");
//  } else {
//     alert("Senang bertemu dengan Anda " + user.name.first + " " + user.name.last + "!");
//  }