var playB = document.getElementById('playB');


var isPlaying = false;
var audio = new Audio("audio/RetroVision-Puzzle.mp3");


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
