/* class 39 */
/* image slide */
/* index start = 0........... */
/* lenght start = 1........... */
/* 

var slide = ['image/img1.avif', 'image/img2.avif', 'image/img3.avif'];
var imageShow = document.querySelector('#slideImage');
let count = 0;

function next(){
    count++;
    if(count >= slide.length){
        count = 0;
        imageShow.src = slide[count];

    }else{
        imageShow.src = slide[count];

    }
}

function pre(){
    count--;
    if(count < 0){
        count = slide.length - 1;
        imageShow.src = slide[count];

    }else{
        imageShow.src = slide[count];

    }
}
 */