//DOM =  DOCUMENT OBJECT MODEL
//geting element 
/* 
var btn1 = document.getElementsByClassName('btn1')[0];
function message1(){
    btn1.innerHTML= 'click me';
}

var btn2 = document.getElementsByTagName('button')[3];

function message2(){
    btn2.style.color='red';
} 

var head = document.getElementsByClassName('change')[0];

var font = document.querySelector('#font');
var color = document.getElementById('color');
var text = document.querySelector('.change #text');
var parag = document.querySelector('#para');

function fon(){
    parag.style.fontSize = '25px';
}
function colors(){
    parag.style.color = 'red';
}

function texts(){
    parag.innerHTML= 'you change this element text';
}
//create element 
var adding = document.createElement('h2');
var content = document.createTextNode('bangladesh is a small country .');


adding.appendChild(content);
head.appendChild(adding);


var adding2 = document.createElement('h1');
var content2 = document.createTextNode('bangladesh is a small country .last showed.');


adding2.appendChild(content2);
var heading0 = document.querySelector('.heading0');
head.insertBefore(adding2, heading0);


//class 
//add and remove class

heading0.classList.add('addingClass');
heading0.classList.add('addingClass_remove');
heading0.classList.remove('addingClass_remove');

 */


//class 38

//select
/* 
var area = document.querySelector('.area');

//child select

var pren = area.querySelector('.parent');
var list = pren.children[1];
list.style.fontSize = '30px';
list.style.color = 'red';
var list3 = list.nextElementSibling;
list3.innerHTML ='raju';
var parents = list.parentElement;
parents.style.backgroundColor = 'gray';
var areas = parents.previousSibling;
area.classList.add('rakib');

 */