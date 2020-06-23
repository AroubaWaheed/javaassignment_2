// // // => ASSIGNMENT # 21-25 (STRING METHODDS)




// // Exercise No. 1


// var greeting = 'Welcome! ';
// var firstName = prompt ('Enter Your First Name.' , 'First Name');
// var lastName = prompt ('Enter Your Last Name.' , 'Last Name');
// var fullName = firstName+ ' ' +lastName;    

// document.write(greeting + fullName);


// // Exercise No. 2


// var fav_phone = prompt('Enter Your Fvourite Mobile Phone Model.' , 'Favourite Phone Model');

// document.write('My favourite phone is : ' + fav_phone + '<br/>');
// document.write('Length of string : ' + fav_phone.length + '<br/>');


// // Exercise No. 3


// var word = 'Pakistani';

// document.write('String : ' + word + '<br/>');
// document.write("Index of 'n' :" + word.indexOf('n') + '<br/>');


// // Exercise No. 4


// var start = 'Hello World';

// document.write('String : ' + start + '<br/>');
// document.write("Last index of 'l' : " + start.lastIndexOf('l') + '<br/>');


// // Exercise No. 5


// var word = 'Pakistani';

// document.write('String : ' + word + '<br/>');
// document.write('Character at index 3 : ' + word.charAt(3) + '<br/>');


// // Exercise No. 6


// var firstName = prompt ('Enter Your First Name.' , 'First Name');
// var lastName = prompt ('Enter Your Last Name.' , 'Last Name'); 

// document.write('Welcome ! ' + firstName + ' ' + lastName + '<br/>');


// // Exercise No. 7


// var city = ('Hyderabad');
// var reName = city.slice(5,9);
// var newName = 'Islam' + reName;

// document.write('City :' + city + '<br/>' + 'After replacement :' + newName + '<br/>');


// // Exercise No. 8


// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// var replace = message.replace (/and/g,'&');

// document.write(message + '<br/>');
// document.write(replace + '<br/>');


// // Exercise No. 9


// var a = '472';
// var b = typeof(a);

// document.write('Value : ' + a + '<br/>' + 'Type : ' + b + '<br/>');

// var c = parseInt(a);
// var d = typeof(c); 

// document.write('Value : ' + c + '<br/>' + 'Type : ' + d + '<br/>');


// // Exercise No. 10


// var userInput = prompt('Enter any word.' , 'example: peanuts');

// document.write(userInput.toUpperCase() + '<br/>');


// // Exercise No. 11


// var userInput = prompt('Enter any word.' , 'example: world');
// var titledInput = userInput[0].toUpperCase() + userInput.slice(1).toLowerCase();

// document.write(titledInput + '<br/>');


// // Exercise No. 12


// var num = 35.36;
// var string = num.toString();
// var string_f = string.replace('.','');

// document.write('Number : ' + num + '<br/>' + 'Result : ' + string_f + '<br/>');


// // Exercise No. 13





// // Exercise No. 14


// var user_input = prompt('Enter your item(s)');
// user_input = user_input.toLowerCase();
// var a = ['cake', 'apple pie', 'cookie', 'patties', 'chips'];

// for (i = 0; i < a.length; i++){
//     if(a[i] == user_input){
//         alert(user_input + ' is ' + 'available' + ' at index ' + a.indexOf(user_input) + ' in our bakery.');
//     }
//     else{
//         alert('We are sorry. ' + user_input + ' is not available in our bakery. ')
//     }
// }


// // Exercise No. 15





// // Exercise No. 16


// var a = 'University Of Karachi';
// var b = a.split('');

// for (i = 0 ; i < b.length ; i++){
//      document.write(b[i] + '<br/>');
// }


// // Exercise No. 17


// var a = prompt('Enter a word.', 'example : apple');
// var b = a.split('')
// b.splice(0,a.length -1);

// document.write('User Input : ' + a + '<br/>' + 'Last character of input : ' + b + '<br/>');


// // Exercise No. 18


// var text = 'The quick brown fox jumps over the lazy dog.';
// var wordCount = text.match(/the/gi).length;

// document.write('Text : ' + text + '<br/>' + 'There are ' + wordCount + ' occurrence(s) of word "the"' + '<br/>')


// // // END // // 




// // // => ASSIGNMENT # 26-30 (MATHS METHODS)




// // Exercise No. 1


// var userInput = +prompt('Enter a positive integar.', 'example: 0.1, 1.1, 2.8, .... 100.1');
// var a = Math.round(userInput);
// var b = Math.floor(userInput);
// var c = Math.ceil(userInput);

// if (userInput > 0){
//     document.write('Number : ' + userInput + '<br/>' + 'Round-off Value : ' + a + '<br/>' + 'Floor Value : ' + b + '<br/>' + 'Ceil Value :' + c + '<br/>');
// }
// else{
//     alert('Please enter a positive integar.')
// }


// // // Exercise No. 2


// var userInput = +prompt('Enter a negative floating point.', 'example: -1.2, -2.3, .... -100.8');
// var a = Math.round(userInput);
// var b = Math.floor(userInput);
// var c = Math.ceil(userInput);

// if (userInput < 0){
//     document.write('Number : ' + userInput + '<br/>' + 'Round-off Value : ' + a + '<br/>' + 'Floor Value : ' + b + '<br/>' + 'Ceil Value :' + c + '<br/>');
// }
// else{
//     alert('Please enter a negative floating point.')
// }


// // Exercise No. 3


// var user_input = +prompt("Enter The Number To Obtain It's Absolute Value.");

// if (user_input > 0){
//     alert ('The absolute value of ' + user_input + ' is ' + user_input);
// }
// else{
//     alert ('The absolute value of ' + user_input + ' is ' + (-(user_input)));
// }


// // Exercise No. 4


// var dice = Math.random()*6;
// var dice = Math.ceil(dice);

// document.write('The random dice value : ' + dice + '<br/>')


// // Exercise No. 5


// var dice = Math.random()*2;
// var dice = Math.ceil(dice);

// if (dice === 1){
//     alert(dice + '\n' + 'random coin value : Tails');
// }
// else if (dice === 2){
//     alert(dice + '\n' + 'random coin value : Heads');
// }


// // Exercise No. 6


// var value = Math.random()*100;
//  value = Math.ceil(value);

// document.write('random number between 1 and 100 : ' + value + '<br/>');


// // Exercise No. 7





// // Exercise No. 8


// var secretValue  = 2;
// var inputNum = +prompt('Enter a number between 1 and 10');
// inputNum = Math.ceil(inputNum);

// if (inputNum === secretValue){
//     alert('Congratulations ! You Found The Secret Value.');
// }
// else if (inputNum < 1 || inputNum > 10){ 
//     alert('Try a number between 1 and 10');
// }
// else if (inputNum !== secretValue){ 
//     alert ('Try Again!');
// }


// // // END // //



// // // => ASSIGNMENT # 31-34 (DATE METHODS)




// // Exercise No. 1


// var currentDate = new Date();

// document.write(currentDate + '<br/>');


// // Exercise No. 2


// var a = new Date();
// var b = a.toString();
// var c = b.slice(4,7);

// document.write('Current month : ' + c + '<br/>');


// // Exercise No. 3


// var a = new Date();
// var b = a.toString();
// var c = b.slice(0,4);

// document.write('Today is ' + c + '<br/>');


// // Exercise No. 4


// var a = new Date();
// var b = a.toString();
// var c = b.slice(0,4);

// if (c = 'Sat' || c == 'Sun'){
//     document.write("It's a Fun day" + '<br/>');
// }
// else {
//     document.write("It's a Work day" + '<br/>');
// }


// // Exercise No. 5


// var a = new Date();
// var b = a.toString();
// var c = b.slice(8,10);

// if (c < 16){
//     document.write('First fifteen days of the month.' + '<br/>');
// }
// else {
//     document.write('Last fifteen days of the month.' + '<br/>');

// }


// // Exercise No. 6


// var a = new Date();
// var b = a.getTime();
// var c = b/1000*60*60;

// document.write('Current Date : ' + a + '<br/>' + 'Elapsed miliseconds since January 1, 1970 : ' + b + '<br/>' + 'Elapsed minutes since January 1, 1970 : ' + c + '<br/>');


// // Exercise No. 7


// var a = new Date();
// var b = a.getHours();

// if (b < 12){
//     alert("It's AM");
// }
// else {
//     alert("It's PM");
// }


// // Exercise No. 8


// var laterDate = new Date ('Dec 31, 2020');

// document.write('Later Date : ' + laterDate + '<br/>')


// // Exercise No. 9


// var a = new Date ('Apr 24, 2020');
// var b = a.getTime();

// var c = new Date ('Jun 22, 2020');
// var d = c.getTime();

// var daysPassed  = (d-b)/(1000*60*60*24);

// alert(daysPassed + ' days have passed since 1st Ramadan, 2020');


// // Exercise No. 10


// var a = new Date('Jan 1, 2015');
// var b = a.getTime();

// var c = new Date('Dec 5, 2015');
// var d = c.getTime();

// var elapsedSeconds = (d-b)/(1000*60);
// document.write('On the reference date Sat Dec 05 2015 22:50:16 GMT+0500 (PKT),' + '<br/>' + elapsedSeconds + ' seconds had passed since beginning of 2015.' + '<br/>');


// // Exercise No. 11





// // // Exercise No. 12


// var currentDate = new Date();
// var pastDate = new Date();
// var dated100YearsBack = pastDate.setFullYear(1920);

// alert('Current date: ' + currentDate + '\n' + '100 years back, it was ' + pastDate);


// // Exercise No. 13


// var age = +prompt('Enter your age.');
// var current = new Date();
// var currentYear = current.getFullYear();
// var  birthYear = currentYear - age;


// document.write ('Your age is ' + age + '<br/>' + 'Your birth year is ' + birthYear)


// // Exercise No. 14


// var customerName = ('ABC Customer');
// var currentDate = new Date();
// var months = ['January' , 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// var currentMonth = months[currentDate.getMonth()];
// var units = 410;
// var charges = 16; 
// var netAmount = units*charges;
// var latePayment = 350;
// var grossAmount = netAmount+latePayment;

// document.write('<h2>' + 'K-Electric Bill' + '</h2>' + '<br/>' + '<b>' + 'Customer Name :' + '</b>' + customerName + '<br/>' + '<b>' + 'Month : ' + '</b>' + currentMonth + '<br/>' + '<b>' + 'Number of units :' + '</b>' + units + '<br/>' + '<b>' + 'Charges per unit :' + '</b>' + charges + '<br/>' + '<br/>' + '<b>' + 'Net Amount Payable (within Due Date) :' + '</b>' + netAmount + '<br/>' + '<b>' + 'Late payment surcharge :' + '</b>' + latePayment + '<br/>' + '<b>' + 'Gross Amount Payable (after Due Date) :' + '</b>' + grossAmount + '<br/>')


// // // END // //




// // // => ASSIGNMENT # 35-38 (FUNCTION)




// // Exercise No. 1


// function currentDate(){
    
//     document.write(new Date())    
// }

// currentDate();


// // Exercise No. 2


// function greeting(greet){
//     firstName = prompt('Enter Your First Name');
//     lastName = prompt('Enter Your Last Name');
    
//     document.write(greet + firstName + ' ' + lastName)
// }

// greeting('Welcome !')


// // Exercise No. 3


// function addition(){
//     num1 = +prompt('Enter the first number');
//     num2 = +prompt('Enter the second number');
//     return num1 + num2
    
// }

// var add = addition();
// document.write('The sum of ' + num1 + ' and ' + num2 + ' is ' + add + '<br/>');


// // Exercise No. 4

// function calc(num1,opr,num2){
//     num1 = +prompt('Enter the first number for calculation');
//     opr = prompt('Enter the operator')    
//     num2 = +prompt('Enter the second number for calculation');
    
//     if (opr === '+'){
//         return num1 + num2
//     }
//     else if (opr === '-'){
//         return num1 - num2
//     }
//     else if (opr === '*'){
//         return num1 * num2
//     }
//     else if (opr === '/'){
//         return num1 / num2
//     }
//     else if (opr === '%'){
//         return num1 % num2
//     }
//     else {
//         alert ('Invalid! Try Again')
//     }

// }

// alert(calc());


// // Exercise No. 5


// function square(num){
//     return num*num 
// }

// var calc = square(4);
// alert('The square of 4 is ' + calc);


// // Exercise No. 6


// function factorial(number){
//     if(number >= 0 && number <= 1){
//         return 1
//     }
//     else {
//         return number * factorial (number - 1)
//     }
// }

// var answer = factorial(6);
// document.write('The factorial of 6 is ' + answer);


// // Exercise No. 7


// function count(num1,num2){
//     num1 = +prompt('Enter the initial value');
//     num2 = +prompt('Enter the last value');
      
//     for (i = num1 ; i <= num2 ; i++){
//         document.write (i + ' ')
//     }
// }

// count ();


// // Exercise No. 8





// // Exercise No. 9



// // // // ARGUMENT IN VARIABLES // // //


// function area(){
//     width = 4;
//     height = 8;
//     return width * height 
// }

// var rect = area();
// document.write('The area of a rectangle is ' + rect);


// // // // ARGUMENT IN VALUES // // //


// function area(width , height){
  
//     document.write('The area of a rectangle is ' + width * height);
// }

// area(40,80); 



// // Exercise No. 10


// function palindrome(){
//     var word = prompt("Enter to check if the word is palindrome word");
//     var check = "";
//     for (var i = word.length - 1; i >= 0; i--){
//         check += word[i];
//     }
//     if(word === check){
//         document.write(word + " is a palindrome word")
//     }
//     else{
//         document.write(word + " is not a palindrome word")
//     }

// }   

// palindrome();


// // Exercise No. 11


// function first(firstChar){
//     return firstChar.replace(/\w\S*/g, 

//             function(word){
//                 return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
//     });

// }

// var a = first('The quick brown fox')
// document.write(a);


// // Exercise No. 12





// // Exercise No. 13





// // Exercise No. 14





// // // END // //