//console.log(`Hello, World!`); prints "Hello, World!" to the console

// window.alert('Hello, World!'); this is pop up-up alert

document.getElementById(`myh1`).textContent = `Hello`; //changes the text content of the h1 element with id "myh1" to "Hello"
document.getElementById(`MyP`).textContent = `Hello`; //changes the text content of the p element with id "myP" to "Hello"

let x; // variable
x = 100
let y = 200;
let age = 30;
console.log(typeof age);
console.log(`You Are ${age} years old`);

let randomnum = Math.floor(Math.random() * 6) +1; 
console.log(randomnum);

const Testing_My_Check_Box = document.getElementById(`Testing_My_Check_Box`);
const Testing_Visa_Btn = document.getElementById(`Testing_Visa_Btn`);
const Testing_Master_Btn = document.getElementById(`Testing_Master_Btn`);
const Testing_Paypall_Btn = document.getElementById(`Testing_Paypall_Btn`);
const Testing_submit_btn = document.getElementById(`Testing_submit_btn`);
const Testing_sub_Result = document.getElementById(`Testing_sub_Result`);
const Testing_Payment_Result = document.getElementById(`Testing_Payment_Result`);

Testing_submit_btn.onclick = function(){
    console.log(`Submit button clicked`);
    if(Testing_My_Check_Box.checked){
        Testing_sub_Result.textContent = `You Are Subscribed`;
    }
    else{
        Testing_sub_Result.textContent = `You Are Not Subscribed`;
    }
    if(Testing_Visa_Btn.checked){
        Testing_Payment_Result.textContent = `Payment Method: Visa`;
    }
    else if(Testing_Master_Btn.checked){
        Testing_Payment_Result.textContent = `Payment Method: MasterCard`;
    }
    else if(Testing_Paypall_Btn.checked){
        Testing_Payment_Result.textContent = `Payment Method: PayPal`;
    }
    else{
        Testing_Payment_Result.textContent = `Payment Method: Unselected`;
    }
}


let day = 1;

switch(day){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log(`${day} is not a valid day of the week.`);
     
}

let username2 = 'Button302';
let phoneNumber = '123-456-7890';

console.log(username2.charAt(2));
console.log(username2.indexOf(2));
console.log(phoneNumber.replaceAll('-', ''));




let username;
//username = window.prompt('Enter your name');

document.getElementById(`mysubmit`).onclick = function(){
    username = document.getElementById(`MyText`).value;
    document.getElementById(`MyP`).textContent = `Hello ${username}`;
}

//username = 'button 302';
//let first_Name = username.slice(0, username.indexOf(' '));
//let last_Name = username.slice(username.indexOf(' ') +1);

//console.log(first_Name, last_Name); 


let Temp = 25;
if(Temp >= 0 && Temp <= 30){ // && == AND, || == OR, ! == NOT
    console.log('It is a good day');
}
else{
    console.log('It is not a good day');
}



for(let i = 0; i <= 2; i++){
    console.log(i);
}
sum(displayConsole, 5,4);

function sum(callback, x,y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}


let numberss = [1,2,3,4,5];
numberss.forEach(double);


function double(element, index, array){
    array[index] = element * 2;
}
function display(element){
    console.log(element);
}

function square(element, index, array){
    return element * element;
}

const numbersss = [1,2,3,4,5];
const squaredNumbers = numbersss.map(square);

const students = ["Spongebob", "Patrick", "Squidward", "Sandy", "Mr. Krabs"];
const studentsUpper = students.map(upperCase);

console.log(studentsUpper);


function upperCase(element){
    return element.toUpperCase();
}
const dates = ["2022-09-019", "2022-10-12", "2022-11-15"];
const formattedDates = dates.map(formatDate);
console.log(formattedDates);
function formatDate(element){
    const parts = element.split('-');
    return `${parts[2]/1}-${parts[1]}-${parts[0]}`;
}

let numberssss = [1,2,3,4,5];
let evenNumbers = numberssss.filter(isEven)

console.log(evenNumbers);
function isEven(element){
    return element % 2 === 0;
}

const prices = [10, 20, 30, 40, 50];

const totalPrice = prices.reduce(sumPrice, 0);

console.log(totalPrice);

function sumPrice(accumulator, element){
    return accumulator + element;
}

const HEllo = function(){
   console.log('Hello'); 
}

// setTimeout(HEllo, 3000);

const Person = {
    FirstName: "Spongebob",
    LastName: "Squarepants",
    Age: 30,
    IsEmployed: true,
    sayHello: function(){console.log(`Hello, My Name Is ${this.FirstName}`)}

}

console.log(Person.FirstName);
Person.sayHello()