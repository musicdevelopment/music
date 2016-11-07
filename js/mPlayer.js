// Song Object


createSong = function(src, id, search, name, img){
  var self = {
    src:src,
    id:id,
    search:search,
    name:name,
    img:img,
  }


  self.doc = document.getElementById(self.id)

  self.doc.onclick = function(){
    self.play();
  }




  self.play = function(){
    playerIco.src = self.img;
    audio.src = self.src;
    audio.play();
  }



  return self;
}





// Create Songs


// var (sang navn) = createSong(audio path  ,  id til documentet,  søke navn (små bokstaver),  sangens Navn  ,   iconet / bildet til sangen  )




var RobbyEast = createSong("audio/Robby East - Leap of Faith (Original Mix).mp3", 'Robby-East', "leap of faith", "Leap Of Faith", "images/artists/OnTheHouse.png");
var RetroV = createSong("audio/RetroVision-Puzzle.mp3", 'RetroV-Puzz', "puzzle", "Puzzle", "images/artists/OnTheHouse.png");
var shine = createSong("audio/shine.mp3", "NoCopyrightSounds", "shine", "Shine", "images/artists/NCS.png");
var Wakingup = createSong("audio/Wakingup.mp3", "NCS", "wakingup", "Wakingup", "images/artists/NCS.png");
var crest = createSong("audio/Codeko - Crest [NCS Release].mp3", "crest", "crest", "Crest", "images/artists/NCS.png");
var thisLife = createSong("audio/OLWIK - This Life (feat. Johnning) [NCS Release].mp3", "thisLife", "thislife", "This Life", "images/artists/NCS.png");



// Grab all player buttons

var playB = document.getElementById('playB');

var skipCu = document.getElementById('skipCu');

var backCu = document.getElementById('backCu');

var volUp = document.getElementById('volUp');

var volDown = document.getElementById('volDown');



// Grab Icon and progress bar

var playerIco = document.getElementById('mIcon');

var progressBar = document.getElementById('progressBar');

var progress_value = 0;


var curr_tim = document.getElementById('curr_tim');
var dur_tim = document.getElementById('dur_tim');

//Define audio



var isPlaying = false;
var audio = new Audio("audio/RetroVision-Puzzle.mp3");



// Check if buttns are pressed


var volUPress = false;
var volDPress = false;







//Init when time updates


audio.ontimeupdate = function(){
  init();
}



function init(){
    progress_value = parseInt(audio.currentTime) / parseInt(audio.duration);
    progressBar.value = progress_value;
}





// button functions


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
  audio.currentTime += 3;
}

backCu.onclick = function(){
  audio.currentTime -= 3;
}


volUp.onmousedown = function(){
  volUPress = true;
}

volUp.onmouseup = function(){
  volUPress = false;
}

volDown.onmousedown = function(){
  volDPress = true;
}

volDown.onmouseup = function(){
  volDPress = false;
}




// The update function gets called 4 times a second


function update(){


  var curr_minutes = Math.floor(audio.currentTime / 60);

  var curr_seconds = Math.floor(audio.currentTime) - curr_minutes * 60;

  if(curr_seconds < 10){
    curr_seconds = "0" + curr_seconds;
  }

  if(curr_minutes < 10){
    curr_minutes = "0" + curr_minutes;
  }

  var dur_minutes = Math.floor(audio.duration / 60);

  var dur_seconds = Math.floor(audio.duration) - dur_minutes * 60;

  if(dur_seconds < 10){
    dur_seconds = "0" + dur_seconds;
  }

  if(dur_minutes < 10){
    dur_minutes = "0" + dur_minutes;
  }


  dur_tim.innerHTML = dur_minutes + ':' + dur_seconds;

  curr_tim.innerHTML = curr_minutes + ':' + curr_seconds;
  if(volUPress){
    if(audio.volume < 1)
      audio.volume += 0.1;
  }

  if(volDPress){
    if(audio.volume > 0.1)
    audio.volume -= 0.1;
  }


}
setInterval(update, 1000/4);
