

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
const calculator={
    displayNumber:'0',
    operator:null,
    firstNumber:null,
    waitingForSecondNumber:false
};
function updateDisplay(){
    document.querySelector('#displayNumber').innerText=calculator.displayNumber;
}
function clearCalculator() {
    calculator.displayNumber='0';
    calculator.operator=null;
    calculator.firstNumber=null;
    calculator.waitingForSecondNumber=false;
}
function inputDigit(digit) {
    if(calculator.displayNumber ==='0'){
        calculator.displayNumber = digit;
    }
    else{
    calculator.displayNumber += digit;
    }
}
function inverseNumber(){
    if(calculator.displayNumber==='0'){
        return;
    }
    calculator.displayNumber = calculator.displayNumber * -1;
}
function handleOperator(operator) {
    if(!calculator.waitingForSecondNumber){
        calculator.operator=operator;
        calculator.waitingForSecondNumber=true;
        calculator.firstNumber=calculator.displayNumber;
        // mengatur ulang nilai display number supaya tombol selanjutnya dari angka pertama
        calculator.displayNumber = '0';
    } else {
        alert ('Operator sudah ditetapkan');
    } 
    
}
    function performCalculation() {
        if (calculator.firstNumber == null || calculator.operator == null) {
            alert("Anda belum menetapkan operator");
            return;
        }
      
        let result = 0;
        if (calculator.operator === "+") {
            result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
        } else {
            result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
        }
      
        // objek yang akan dikirimkan sebagai argumen fungsi putHistory()
        const history = {
            firstNumber: calculator.firstNumber,
            secondNumber: calculator.displayNumber,
            operator: calculator.operator,
            result: result
     }
     putHistory(history);
     calculator.displayNumber = result;
     renderHistory();

    }

const buttons =document.querySelectorAll(".button");
for(let button of buttons){
    button.addEventListener('click', function(event){
        //mendapatkan object element yang diklik
        const target=event.target;
        if(target.classList.contains('clear')){
            clearCalculator();
            updateDisplay();
            return;
        }
        if(target.classList.contains('negative')){
            inverseNumber();
            updateDisplay();
            return;
        }
        if(target.classList.contains('equals')) {
            performCalculation();
            updateDisplay();
            return;
        }
  
        if(target.classList.contains('operator')) {
            handleOperator(target.innerText);
            return;
        }
        inputDigit(target.innerText);
        updateDisplay()
    });
}

