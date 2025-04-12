const playCircle1 = document.getElementById('play-circle1');
const playCircle2 = document.getElementById('play-circle2');
const playCircle3= document.getElementById('play-circle3');
const playCircle4 = document.getElementById('play-circle4');
const playCircle5= document.getElementById('play-circle5');
const playCircle6 = document.getElementById('play-circle6');

const toppss = document.getElementById('topss');    

const audio1 = document.getElementById('audio1'); 
const audio2 = document.getElementById('audio2'); 
const audio3 = document.getElementById('audio3'); 
const audio4 = document.getElementById('audio4'); 
const audio5 = document.getElementById('audio5'); 
const audio6 = document.getElementById('audio6'); 

let IsMusicPlaying = false; 

playCircle1.addEventListener('click', () => {
  if (!IsMusicPlaying) {
    audio1.play();                         
    toppss.classList.add('active');  
    playCircle1.classList.remove('bx-play-circle'); 
    playCircle1.classList.add('bx-pause-circle');
    playCircle1.style.fontSize = "70px";
    IsMusicPlaying = true;
  } else {
    audio1.pause();                    
    toppss.classList.remove('active');    
    playCircle1.classList.remove('bx-pause-circle');
    playCircle1.classList.add('bx-play-circle');
    playCircle1.style.fontSize = "70px";
    IsMusicPlaying = false;
  }
});

playCircle2.addEventListener('click', () => {
  if (!IsMusicPlaying) {
    audio2.play();                         
    toppss.classList.add('active');  
    playCircle2.classList.remove('bx-play-circle'); 
    playCircle2.classList.add('bx-pause-circle');
    playCircle2.style.fontSize = "70px";
    IsMusicPlaying = true;
  } else {
    audio2.pause();                    
    toppss.classList.remove('active');    
    playCircle2.classList.remove('bx-pause-circle');
    playCircle2.classList.add('bx-play-circle');
    playCircle2.style.fontSize = "70px";
    IsMusicPlaying = false;
  }
});

playCircle3.addEventListener('click', () => {
  if (!IsMusicPlaying) {
    audio3.play();                         
    toppss.classList.add('active');  
    playCircle3.classList.remove('bx-play-circle'); 
    playCircle3.classList.add('bx-pause-circle');
    playCircle3.style.fontSize = "70px";
    IsMusicPlaying = true;

  } else {
    audio3.pause();                    
    toppss.classList.remove('active');    
    playCircle3.classList.remove('bx-pause-circle');
    playCircle3.classList.add('bx-play-circle');
    playCircle3.style.fontSize = "70px";
    IsMusicPlaying = false;
  }
});

playCircle4.addEventListener('click', () => {
  if (!IsMusicPlaying) {
    audio4.play();                         
    toppss.classList.add('active');  
    playCircle4.classList.remove('bx-play-circle'); 
    playCircle4.classList.add('bx-pause-circle');
    playCircle4.style.fontSize = "70px";
    IsMusicPlaying = true;

  } else {
    audio4.pause();                    
    toppss.classList.remove('active');    
    playCircle4.classList.remove('bx-pause-circle');
    playCircle4.classList.add('bx-play-circle');
    playCircle4.style.fontSize = "70px";
    IsMusicPlaying = false;
  }
});

playCircle5.addEventListener('click', () => {
  if (!IsMusicPlaying) {
    audio5.play();                         
    toppss.classList.add('active');  
    playCircle5.classList.remove('bx-play-circle'); 
    playCircle5.classList.add('bx-pause-circle');
    playCircle5.style.fontSize = "70px";
    IsMusicPlaying = true;

  } else {
    audio5.pause();                    
    toppss.classList.remove('active');    
    playCircle5.classList.remove('bx-pause-circle');
    playCircle5.classList.add('bx-play-circle');
    playCircle5.style.fontSize = "70px";
    IsMusicPlaying = false;
  }
});

playCircle6.addEventListener('click', () => {
  if (!IsMusicPlaying) {
    audio6.play();                         
    toppss.classList.add('active');  
    playCircle6.classList.remove('bx-play-circle'); 
    playCircle6.classList.add('bx-pause-circle');
    playCircle6.style.fontSize = "70px";
    IsMusicPlaying = true;

  } else {
    audio6.pause();                    
    toppss.classList.remove('active');    
    playCircle6.classList.remove('bx-pause-circle');
    playCircle6.classList.add('bx-play-circle');
    playCircle6.style.fontSize = "70px";
    IsMusicPlaying = false;
  }
});


