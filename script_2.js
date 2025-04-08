const playCircle = document.getElementById('play-circle');
const toppss = document.getElementById('topss');          
const audio = document.getElementById('audio'); 

let IsMusicPlaying = false; 

playCircle.addEventListener('click', () => {
  if (!IsMusicPlaying) {
    audio.play();                         
    toppss.classList.add('active');  
    playCircle.classList.remove('bx-play-circle'); 
    playCircle.classList.add('bx-pause-circle');
    IsMusicPlaying = true;
  } else {
    audio.pause();                    
    toppss.classList.remove('active');    
    playCircle.classList.remove('bx-pause-circle');
    playCircle.classList.add('bx-play-circle');
    IsMusicPlaying = false;
  }
});