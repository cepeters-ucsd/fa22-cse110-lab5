// expose.js

window.addEventListener('DOMContentLoaded', init);

const input = document.querySelector('select'); // select
const button = document.querySelector('button'); // button

const imagebox = document.querySelector('section img'); // horn image

const volumeSlider = document.getElementById('volume'); // volume slider
const volumeIcon = document.querySelector('div img'); // volume icon

const confetti = new JSConfetti();

let sound = "";
let volume = 50;

const audio = document.querySelector('audio');

function updateHorn(e) {
  
  if (e.target.value == 'car-horn') {
    imagebox.setAttribute('src', "assets/images/car-horn.svg");
    sound = "assets/audio/car-horn.mp3";
  }
  
  if (e.target.value == 'air-horn') {
    imagebox.setAttribute('src', "assets/images/air-horn.svg");
    sound = "assets/audio/air-horn.mp3";
  }
  
  if (e.target.value == 'party-horn') {
    imagebox.setAttribute('src', "assets/images/party-horn.svg");
    sound = "assets/audio/party-horn.mp3";
  }

}

function updateVolume(e) {

  console.log("output");

  volume = e.target.value;

  if (volume < 1) volumeIcon.setAttribute("src", "assets/icons/volume-level-0.svg");
  else if (volume >= 1 && volume < 33) volumeIcon.setAttribute("src", "assets/icons/volume-level-1.svg");
  else if (volume >= 33 && volume < 67) volumeIcon.setAttribute("src", "assets/icons/volume-level-2.svg");
  else if (volume >= 67) volumeIcon.setAttribute("src", "assets/icons/volume-level-3.svg");

  log.textContent = volume;
  
}

function playSound(e) {

  if (sound == "assets/audio/party-horn.mp3") {
    confetti.addConfetti();
  }

  audio.src = sound;
  audio.volume = volume / 100;
  audio.play();

}

function init() {
  input.addEventListener('input', updateHorn);
  volumeSlider.addEventListener('input', updateVolume);  
  button.addEventListener('click', playSound);
}