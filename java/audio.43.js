/* class 44  add animation*/

for(var i = 0; i < 3; i++){
    var palyBtn = document.querySelectorAll('.songButton')[i].addEventListener('click', function(){
        var text = this.innerHTML;
        console.log(text);
        audioPlay(text);
        animatonPlay(text);
    });

};

function audioPlay(text){
    switch(text){
        case 'a':
            var audio = new Audio('sound/a.song.mp3');
            audio.play();
            break;
            
        case 'b':
            var audio = new Audio('sound/b.song.mp3');
            audio.play();
            break;
            
        case 'c':
            var audio = new Audio('sound/c.song.mp3');
            audio.play();
            break;
    }
}

function animatonPlay(text){
    var btnSelect = document.querySelector('.'+text);
    btnSelect.classList.add('animation');


    setTimeout(function(){
        btnSelect.classList.remove('animation');
    }, 1000)
}


/* class 43 */
/* audio paly */
//this play not stop

/* 
 for(var i = 0; i < 3; i++){
    var palyBtn = document.querySelectorAll('.songButton')[i].addEventListener('click', function(){
        var text = this.innerHTML;
        console.log(text);
        audioPlay(text);
    });

};

function audioPlay(text){
    switch(text){
        case 'a song':
            var audio = new Audio('sound/a.song.mp3');
            audio.play();
            break;
            
        case 'b song':
            var audio = new Audio('sound/b.song.mp3');
            audio.play();
            break;
            
        case 'c song':
            var audio = new Audio('sound/c.song.mp3');
            audio.play();
            break;
    }
}
 */

// play and pause
/* 
let audio = new Audio();

const letterButtons = document.querySelectorAll(".songButton");
Array.from(letterButtons).map((letterButton) =>
  letterButton.addEventListener("click", (e) => {
    playAudio(e.target.textContent);
  })
);

const playAudio = (text) => {
  console.log(text);
  audio.pause();
  audio.currentTime = 0.0;

  switch (text) {
    case "a song":
      audio = new Audio("sound/a.song.mp3");
      break;

    case "b song":
      audio = new Audio("sound/b.song.mp3");
      break;

    case "c song":
      audio = new Audio("sound/c.song.mp3");
      break;
  }
  audio.play();
}; */