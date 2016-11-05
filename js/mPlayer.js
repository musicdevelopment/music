var playB = document.getElementById('playB');
var skipCu = document.getElementById('skipCu');
var backCu = document.getElementById('backCu');

var volUp = document.getElementById('volUp');
var volDown = document.getElementById('volDown');


var playerIco = document.getElementById('mIcon');

var progressBar = document.getElementById('progressBar');

var isPlaying = false;
var audio = new Audio("audio/Robby East - Leap of Faith (Original Mix).mp3");
audio.ontimeupdate = function(){
  init();
}




var shit = 0;

playB.onclick = function(){
  if(isPlaying === false){
    playB.src = "images/pauseBu.png";
    audio.play();
    isPlaying = true;
    return;
  }

  if(isPlaying === true){
    playB.src = "images/playBu.png";
    audio.pause();
    isPlaying = false;
    return;
  }
}


skipCu.onclick = function(){
  audio.currentTime += 5;
}

backCu.onclick = function(){
  audio.currentTime -= 5;
}


volUp.onclick = function(){
  audio.volume += 0.1;
}

volDown.onclick = function(){
  audio.volume -= 0.1;
}









function init(){
    shit = parseInt(audio.currentTime) / parseInt(audio.duration);
    progressBar.value = shit;
}
