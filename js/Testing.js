//thx for your guide code bro

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


// This
const Person = {
    FirstName: "Spongebob",
    LastName: "Squarepants",
    Age: 30,
    IsEmployed: true,
    sayHello: function(){console.log(`Hello, My Name Is ${this.FirstName}`)}

}

console.log(Person.FirstName);
Person.sayHello()


function Car(make, model, year,color){
    this.Make = make;
    this.Model = model;
    this.Year = year;
    this.Color = color;
    this.drive = function(){console.log(`Youd drive the ${this.Make} ${this.Model} in ${this.Year} with a ${this.Color} color.`)};
}

const Car1 = new Car("Ford","Mustang",2024,"red")
console.log(Car1.Make);
console.log(Car1.Model);
console.log(Car1.Year);
console.log(Car1.Color);
Car1.drive();
// Classes
class Products{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`product ${this.name}`)
        console.log(`Price $${this.price.toFixed(2)}`)
    }

    calculateTotal(salesTax){
        return this.price +(this.price * salesTax);
    }
}
const salesTax = 0.05;

const product1 = new Products(`Shirt`,19.99);
const product2 = new Products(`Pants`,22.90);
const product3 = new Products(`Underwear`,100);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const total = product1.calculateTotal(salesTax)
console.log(`Total Price (with tax): $${total.toFixed(2)}`)
// Static
class MathUtil{
    static PI = 3.14159;
    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumference(radius){
        return 2 * this.PI *radius;
    }
    static getArea(radius){
        return this.PI * radius * radius
    }
}
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(69));
console.log(MathUtil.getCircumference(69));
console.log(MathUtil.getArea(10))

class User{
    static user_count = 0;

    constructor(username){
        this.username = username;
        User.user_count++;
    }

    static getUseCount(){
        console.log(`There Are ${User.user_count} Users Online`)
    }

    sayHello(){
        console.log(`Hello My User Name Is ${this.username}`)
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

user1.sayHello();

User.getUseCount();

console.log(user1.username)
console.log(User.user_count)


// inheritance
class Animal{
    alive = true;
    eat(){
        console.log(`This ${this.name} is Eating`)
    }
    sleep(){
        console.log(`This ${this.name} is Sleeping`)
    }
}
class Rabbit extends Animal{
    name = `Rabbit`;

    run(){
        console.log(`Rabbit Is Running`)
    }
}
class Fish extends Animal{
    name = `Fish`;
}

const rabbit = new Rabbit();
const fish = new Fish();

console.log(fish.alive);
rabbit.eat();
rabbit.run();

// Super = Keyword is used in classes to call the constructor or access the properties and methods of parent (superclass), this = this object, super = the parent
class Animal2 {
    constructor(name2,age2) {
        this.name2 = name2;
        this.age2 = age2;
    }
}

class Rabbit2 extends Animal2 {
    constructor(name2, age2, runSpeed2) {
        super(name2,age2);
        this.runSpeed2 = runSpeed2;
    }
}

class Fish2 extends Animal2 {
    constructor(name2, age2, swimSpeed2) {
        super(name2,age2);
        this.swimSpeed2 = swimSpeed2;
    }
}

class Hawk2 extends Animal2 {
    constructor(name2, age2, flySpeed2) {
        super(name2,age2);
        this.flySpeed2 = flySpeed2;
    }
}

const myRabbit2 = new Rabbit2("Bunny", 1, 20);
const myFish2   = new Fish2("Fish", 3, 15);
const myHawk2   = new Hawk2("Hawk", 7, 50);

console.log(myRabbit2.name2);


// getter = special method that makes a property readable
// setter = special method that makes a property writable

//validate and modify a value when reading/writing a property
class Rectangle{
    
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error(`Width Must Be A Positive Number`);
        }
    }
    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error(`hHight Must Be A Positive Number`);
        }
    }

    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
    get area(){
        return this._width * this._height;
    }
}

const rectangle = new Rectangle(10,10);

rectangle.width =5;
rectangle.height=6;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

// destructuring = extract values from arrays and objects then assign them to variable in a convenient way, [] = to perform array destructuring, {} = to perform object destructuring

//swap the values of two variables
let a = 1;
let b = 2;

[a,b] =  [b,a];

console.log(a,b)

//swap 2 elements in an array

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

// swap array elements to variables

const [firstColor,secondColor,thirdColor, ...extracolors] = colors

console.log(firstColor)
console.log(secondColor)
console.log(thirdColor)
console.log(extracolors)

//extract values from objects

const person1 = {
    firstName22:  "Spongebob",
    LastName22: "squarePants",
    age22: 30,
    job22: "Fry Cook"
}
const person2 = {
    firstName22:  "Patrick",
    LastName22: "Star",
    age22: 34,
}

const {firstName22, LastName22,age22,job22="Unemployed"} = person2;

console.log(firstName22);
console.log(LastName22);
console.log(age22);
console.log(job22);

//Destructure in function parament


function displayPerson({firstName22, LastName22,age22,job22="Unemployed"}){
    console.log(`name: ${firstName22}${LastName22} age: ${age22} Job: ${job22}`)
}

displayPerson(person1);

// Nested objects = objects inside of other objects. allows you to represent more complex data structure child objects is enclosed by parent Object person{address{},ContactInfo{}} 

const PERSOn = {
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing","cocking"],
    address: {
        street: "124 Conch St.",
        city: "bikini bottom",
        country: "Int. Waters",
    },
}

console.log(PERSOn.fullName);
console.log(PERSOn.age);
console.log(PERSOn.isStudent);
console.log(PERSOn.hobbies);
console.log(PERSOn.hobbies[0]);
console.log(PERSOn.hobbies[1]);
console.log(PERSOn.hobbies[2]);
console.log(PERSOn.address.street);
console.log(PERSOn.address.city);
console.log(PERSOn.address.country);

for(const property in PERSOn.address){
    console.log(PERSOn.address[property])
}

// Define the ADDress class first
class ADDress{
    constructor(street, city,country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

// Then, define the PERSoN class with a different name for the rest parameter
class PERSoN{
    constructor(name,age, ...addressArguments){
        this.name = name;
        this.age = age;
        this.ADDress = new ADDress(...addressArguments);
    }
}

const Person1 = new PERSoN("Spongebob",30,"UrMom","UrDad","water")
console.log(Person1);

//sort() = method used to sort elements of an array in place. sorts elements as strings in lexicographic order, not alphabetical lexicographic = (alphabet + numbers + symbols) as string