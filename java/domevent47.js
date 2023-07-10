//input
/* const input = document.querySelector('input[name=name]');
input.addEventListener('change', changeHandler);

function changeHandler(e){
    //console.log(e);
    //console.log(e.type);
    //console.log(e.target.className);
    //console.log(e.target.className);
    //console.log(e.target.value);
} */

//checkbox

/* const checkbox = document.querySelectorAll('input[name=program]');

console.log(checkbox);

Array.from(checkbox).map((checkbox) => {
    checkbox.addEventListener('change', checkboxHandler);
});

function checkboxHandler(e){
    if(e.target.checked){
        console.log(e.target.value);
    }
    //console.log('checked')
}
 */


// select 
/* 
const selects = document.querySelector('#department');

 console.log(selects)

selects.addEventListener('change', valueHandler);

function valueHandler(e){
    console.log(e.target.value);
} */


// class 48
// form value control 

/* const from = document.querySelector('form');
// console.log('from');
const name = from.querySelector("div #name");
const email = from.querySelector("div #email");
const password = from.querySelector("div #password");

from.addEventListener('submit', formHandler);

function formHandler(e){
    e.preventDefault();
    // console.log(name.value);
    // console.log(email.value);
    // console.log(password.value);

    const userInfo = {
        name: name.value,
        email: email.value,
        password: password.value,
    };

    console.log(userInfo);
    name.value ='';
    email.value ='';
    password.value ='';
} */


//class 49

/* const videos = document.querySelector('video');

videos.addEventListener('canplay', function(){
    console.log('canplay');
});
videos.addEventListener('play', function(){
    console.log('play');
})
videos.addEventListener('playing', function(){
    console.log('playing');
})
videos.addEventListener('pause', function(){
    console.log('pause');
})
videos.addEventListener('ended', function(){
    console.log('thanks for watching');
});

videos.addEventListener('volumechange', function(){
    console.log('change volume');
}) */

// class 50 event
/* 
const diver = document.querySelector('div');
// console.log(diver);

diver.addEventListener('click', function(){
    console.log('click')
})

diver.addEventListener('dblclick', function(){
    console.log('dubble click')
})

diver.addEventListener('mouseover', function(){
    console.log('mouse over')
})

diver.addEventListener('mouseleave', function(){
    console.log('mouse leave')
})

diver.addEventListener('mouseenter', function(){
    console.log('mouse enter')
})

diver.addEventListener('mouseout', function(){
    console.log('mouse out')
})


diver.addEventListener('mousemove', function(e){
    // all window mouse move 

    // console.log('clientx =' + e.clientX +', ' + 'clienty =' +e.clientY);

    // div mouse move 
    // console.log('offsetx =' + e.offsetX +' ' + 'offsety =' + e.offsetY);
})

 */
/* class 51 window */
/* 
window.addEventListener('load', function(){
    console.log('load')
})
window.addEventListener('unload', function(){
    console.log('unload')
})
window.addEventListener('resize', function(){
  console.log('resize screan')
});

const details = document.querySelector('details');

details.addEventListener('toggle', function(e){
    // console.log('repaid class');
    console.log(e.target.open);
}) */


/* calss 51 */
//  key, keycode, code, shiftkey, altkey, ctrlkey, repeat, keydowm, keypress , keyup  

/* 
const textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', function(e){
    console.log('key down');
    //repeat
    if(e.repeat){
        alert('no repeat text')
    }
})
// textarea.addEventListener('keypress', function(){
//     console.log('key press');
// })

textarea.addEventListener('keyup', function(e){
    // console.log('key up');
    // console.log('key code  ' + e.key);
    // console.log('key code  ' + e.keyCode);
    // console.log('key code  ' + e.code);
    // if(e.shiftKey){
    //     console.log('shift key  is + ' + e.key);

    // }
  
})


const btn = document.querySelectorAll('button');
console.log(btn)

Array.from(btn).map((button) => {
    button.addEventListener('click', function(e){
        console.log(e.target.innerText)
    })
})

 */


/* CLASS 52 */

// FOCUS ALL EVENT 

/* const input = document.querySelector('input');

input.addEventListener('blur', function(e){
    // console.log('blur is occured') 
    input.style.background = 'transparent';
    input.value= e.target.value.toUpperCase();

})
input.addEventListener('focus', function(){
    // console.log('focus is occured')

    input.style.background = 'red';
})

// input.addEventListener('focusin', function(){
//     console.log('focusin is occured')
// })

// input.addEventListener('focusout', function(){
//     console.log('focusout is occured')
// })

 */