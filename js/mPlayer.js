var playB = document.getElementById('playB');

var progressBar = document.getElementById('progressBar');

var isPlaying = false;
var audio = new Audio("audio/RetroVision-Puzzle.mp3");
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

function init(){
    console.log(shit);
    //audio.value = parseInt(audio.currentTime) / parseInt(audio.duration);
    shit = parseInt(audio.currentTime) / parseInt(audio.duration);
    progressBar.value = shit;
}
