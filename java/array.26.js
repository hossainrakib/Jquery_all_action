/* // array is a object ;collection of variable;
// long variable sample call 
var name1 , name2 , name3 , name4, name5;

name1 = 'rakib';
name2 = 'kawcher';
name3 = 'raju';
name4 = 'nadim';
name5 = 'apu';
// array number not necessary

var age = new Array();
age[0]= 20;
age[1]= 30;
age[2]= 40;

var names = new Array(5);

names[0] = 'rakib';
names[1] = 'kawcher';
names[2] = 'raju';
names[3] = 'nadim';
names[4] = 'apu';

document.write(names[4] + '</br>');
// sample use 
var names = ['rakib','kawcher','raju','nadim','apu'];


document.write('all array name :' + names + '</br> array total =  ' + names.length + '</br>');

// array concat

let nameAge = names.concat(age);
document.write('all array name :' + nameAge + '</br> array total =  ' + nameAge.length + '</br>');

//push is add element last side

names.push('amin mia');
document.write('all array name :' + names + '</br> array total =  ' + names.length + '</br>');

//pop is remove last side

names.pop()
names.pop()
names.pop()
document.write('all array name :' + names + '</br> array total =  ' + names.length + '</br>');

//

// shift is opposite pop

names.shift();

document.write('all array name :' + names + '</br> array total =  ' + names.length + '</br>');

//unshift is opposite push

names.unshift('kizi apu vai  ');
document.write('all array name :  ' + names + '</br> array total =  ' + names.length + '</br>');

//splice (start , remove, adding elements )
//adding elements starting point 
// remove elements after starting elements
names.splice(1, 0, 'Bangladesh is a small country');
document.write('all splice name :  ' + names + '</br> array total =  ' + names.length + '</br>');

//

var nam = ['amin ', 'tania', 'tuhin'];
var nams = name.slice(2, 4);
document.write('all slice name :  ' + nams + '</br> array total =  ' + nams.length + '</br>');


//sort 
var names = names.sort();
document.write('all sort name :  ' + names + '</br> array total =  ' + names.length + '</br>');

var names = names.reverse();
document.write('all revers name :  ' + names + '</br> array total =  ' + names.length + '</br>');

//number sort

var number = [29, 14, 60, 106, 97, ];

number.sort(function(x, y){
    return x - y;
});
document.write('all number name :  ' + number + '</br> array total =  ' + number.length + '</br>');
// number revers
number.sort(function(x, y){
    return y - x;
});
document.write('all number name :  ' + number + '</br> array total =  ' + number.length + '</br>');


// loop
var sum = 0;  
for(var i = 0; i < 5; i++)
{
    document.write(number[i] + '</br>' );
    sum = sum + number[i];
}
document.write(sum + '</br>' );
document.write(' End ' + '</br>' );

var num = new Array();

for( var i = 0; i <= 4; i++)
{
    num[i] = parseInt(prompt('enter your number : '));
}

var sum = 0;

for( var i = 0; i <= 4; i++)
{
    document.write(num[i] + '</br>' );
    sum = sum + num[i];
}
document.write('total number = ' + sum + '</br>' );

 */

// 1 Dimensional Array 
// createa a function called heighestScore that will
// Receive a 1d array called scores
// return the heighest score 

/* 
function heighestScore(scores)
{
    var max = scores[0];

    for(var i = 1; i < scores.length; i++)
    {
        if(max < scores[i]){
            max = scores[i];
        }
    }
    return max;
}
 
let scores = [29, 45, 30, 60, 90];
var maxScores = heighestScore(scores);

document.write(maxScores + "</br>");

//minimum scores
function minimumtScore(score)
{
    var min = score[0];

    for(var i = 1; i < score.length; i++)
    {
        if(min > score[i]){
            min = score[i];
        }
    }
    return min;
}
 
let score = [300, 45, 30, 60, 90];
var minScores = minimumtScore(score);

document.write(minScores);
 */


// 2D Array 
/* 
 function heighestRunScores(playersInfo){
    var heighestScore = playersInfo[0][1];

    var heighestScore = playersInfo[0][0];
    for(var i = 1; i < playersInfo.length; i++){

        if(heighestScore < playersInfo[i][1]){

            heighestScore = playersInfo[i][1];
            heighestScore = playersInfo[i][0];

        }

    }
    return heighestScore;
}   

var playersInfo = [
    ['makib' , 34],
    ['shakib' , 400],
    ['nadim' , 21],
    ['sabbir' , 700]
]
var showName = heighestRunScores(playersInfo);

document.write(showName);
 */



//this good 
/* 
function heighestRunScore(score)
{
    var heighestScoreName = score[0][0];
    var heighestScoreRun = score[0][1];

    for(var x = 0; x < score.length; x++)
    {
        if(heighestScoreRun < score[x][1]){
            heighestScoreRun = score[x][1];
            heighestScoreName = score[x][0];
        }
    }
    return heighestScoreName;
};
var playersInfo =[
    ['rakib', 90],
    ['sakib', 60],
    ['skib', 600000],
    ['nakib', 9000000]
];
var showName = heighestRunScore(playersInfo);

console.log(showName);
 */

 