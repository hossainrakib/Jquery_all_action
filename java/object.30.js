// create a object 
/* 
var name = 'raju';
var agea = 26;
var cgpa = 3.55;
var lang = ['english', 'bangla',' hindi'];

//this simple use in object

var student1 = {
    name : 'raju',
    age : 26,
    cgpa : 3.55,
    lang : ['english', 'bangla', 'hindi']
}

var student2 = {
    name : 'rakib',
    age : 26,
    cgpa : 3.55,
    lang : ['english', 'bangla', 'hindi']
}
var student3 = {
    name : 'kawcher',
    age : 26,
    cgpa : 3.55,
    lang : ['english', 'bangla', 'hindi']
}
document.write(student1.name + '</br>');
 */
//how to create a constructor
//adding function inside the constructor
/* 
function Student(name, age, cgpa, lang)
{
    this.name = name;
    this.age = age;
    this.cgpa= cgpa;
    this.lang = lang;

    this.dispaly = function()
    {
        document.write(this.name + '</br>');
        document.write(this.age + '</br>');
        document.write(this.cgpa + '</br>');
        document.write(this.lang + '</br>');
        
    }
}

var student4 = new Student('raju', 26, 4.00, ['english', 'bangla', 'hindi']);
var student5 = new Student('rakib', 26, 4.00, ['english', 'bangla', 'hindi']);
var student6 = new Student('kawcher', 26, 4.00, ['english', 'bangla', 'hindi']);

// document.write(student4.name + '</br>');

student4.dispaly();
student5.dispaly();
student6.dispaly();
 */
// object Math 

/* 

//squer root
var result = Math.sqrt(25);
var result = Math.min(2, 45,6 ,7,0);
var result = Math.max(2, 45,6 ,7,0);
var result = Math.min(2, 45,6 ,7,0);
var result = Math.floor(4.5);
var result = Math.ceil(4.5);
var result = Math.random() * 6;
var result = Math.floor(Math.random() * 6);
var result = Math.floor(Math.random() * 11) + 10;

document.write(result) */


//create a  guessing game 
/* var numOfWon = 0;
var numOfLoss = 0;
for(var i = 1; i <= 6; i++){
    var guessNum = parseInt(prompt('Enter your guessing number 1 of 5 : '));

    var randomNum =Math.floor(Math.random() * 5) + 1;
    
    if(guessNum == randomNum){
        console.log('you have Won');
        numOfWon++;
    }else{
        console.log('you have lose. Random number was ' + randomNum);
        numOfLoss++;
    }
}

document.write('number of won ' + numOfWon + '</br>' + 'number of loss' + numOfLoss);
 */



///date object 

/* var date = new Date();

document.write(date + '</br>');

var minute = date.getMinutes();
document.write(minute + 'minute </br>');


var day = date.getDay();
document.write(day + 'day </br>');


var year = date.getFullYear();
document.write(year + 'year </br>');


var month = date.getMonth() + 1;
document.write(month + 'month </br>');
 */

//second time 
/* 
function Student(name, age, cgpa, lang){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;
     
    this.dispaly= function(){
        document.write(this.name + '</br>')
        document.write(this.age + '</br>')
        document.write(this.cgpa + '</br>')
        document.write(this.lang + '</br>')
    }
}
 let student1 = new Student('rakib', 22, 4.50, ['english', 'bangla', 'hindi']);
 let student2 = new Student('raju', 22, 4.50, ['english', 'bangla', 'hindi']);
 let student3 = new Student('sakib', 22, 4.50, ['english', 'bangla', 'hindi']);

 student1.dispaly();
 student3.dispaly(); */


 //yahoo baba object
/*  
 var rakib = {
    fName: 'rakib',
    lName: 'hossain',
    age:  21,

    favMovies:['die', 'cay', 'lay'],

    selary: function(){
        return 24000 +"taka"
    },
    fullName: function(){
        return this.fName +' '+this.lName; 
    },
    
    living:{
        'city': "cumilla",
        'country': 'bangladesh'
    }
 }
 */
//  document.write(rakib.fName);
//   document.write(rakib.favMovies[2]);
//   document.write(rakib.selary());
//   document.write(rakib.fullName());
//   document.write(rakib.living.country);


//create a new object
/* 
var person = new Object();

person.fName ='raju'
person.lName = 'ahammad';
person.age = 26;

document.write(person['age']); */


// array under object **** array of object
/* 
var person = [
    {Name: 'rakib', age: 24},
    {Name: 'raju', age: 34},
    {Name: 'kawcher', age: 34},
]

// document.write(person[1].Name)''

for(var a = 0; a < person.length; a++){
    document.write('person name :' + person[a].Name +' '+ "person age" + person[a].age +'<br>')
} */



/* const variable change with Array & Object */

/* const a =[29, 59, 59];

console.log(a);

//value change array 

a[1]= 40;
a[2]= 80;
console.log(a);


const b ={
    name: 'rakib',
    age: 33
}

console.log(b);
//value change object

b.name = 'rasel';
b.age = 34;
console.log(b);
 */


/* 

long object easy display use for in loop 

 */

/* var rakib = {
    fName: 'rakib',
    lName: 'hossain',
    age:  21,

    favMovies:['die', 'cay', 'lay'],

    selary: function(){
        return 24000 +"taka"
    },
    fullName: function(){
        return this.fName +' '+this.lName; 
    },
    
    living:{
        'city': "cumilla",
        'country': 'bangladesh'
    }
 }

 for(var key in rakib){
    document.write(key + ' ' + rakib[key] + '<br>')
} */


/* map use */

/* 
var a =[3, 5, 6, 7, 9];

var b =a.map(test);

document.write(b)
function test(x){
    return x * 10;
} */


//array of object **** create a new array
/* 
var person = [
    {Name: 'rakib', age: 24},
    {Name: 'raju', age: 34},
    {Name: 'kawcher', age: 34},
]

var show = person.map(value);

function value(x){
    return x.Name + ' ' + x.age ;
}

document.write(show) */