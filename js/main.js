console.log("JS file connected")
const dropBox = document.querySelector(".drop-box"),
iconAnimals = document.querySelectorAll(".icon-container img"),
dropZones = document.querySelectorAll(".drop-zone"),
dragZones = document.querySelector(".icon-container"),
iconsCute = document.querySelectorAll(".icon-container img"),
theAudioEl = document.querySelector('audio'),
playButton = document.querySelector('#Play_button'),
pauseButton = document.querySelector('#Pause-button'),
rewindButton = document.querySelector('#fast-forward'),
volSlider = document.querySelector('#VolumeControl');

let draggedAnimals;

//functions
function handleStartDrag() {
    //console.log("Started dragging this piece:", this)
    draggedAnimals = this;
    
}

function handleDragOver(e) {
    e.preventDefault();
    //this will prevent the default dragover behaviour
    //e is short for event, could be e, evt a well
    console.log("dragged over me");
}

function handleDrop(e) {
    e.preventDefault();
    console.log("dropped something on me");
  
    if (this.childElementCount == 1) {
        return;
      }
 
    this.appendChild(draggedAnimals);

}

function loadAudio() {
    let currentSrc = `audio/${this.dataset.trackref}.mp3`;
    theAudioEl.src = currentSrc;
    theAudioEl.load();
    playAudio;
}

function playAudio() {
    theAudioEl.play();
}

function pauseAudio() {
    theAudioEl.pause();
}

function restartAudio() {
    theAudioEl.currentTime = 0;
    playAudio();
}

function setVolume() {
    theAudioEl.volume = (this.value/100);
}


//eventListener
iconAnimals.forEach(animals => animals.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));

iconsCute.forEach(cute => cute.addEventListener('click', loadAudio));

pauseButton.addEventListener('click', pauseAudio);

playButton.addEventListener('click', playAudio);

rewindButton.addEventListener('click', restartAudio);

volSlider.addEventListener('change', setVolume);
