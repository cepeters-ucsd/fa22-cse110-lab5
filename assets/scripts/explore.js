// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    
  const synth = window.speechSynthesis;

  const voiceSelector = document.querySelector('select');
  const text = document.querySelector('textarea');
  const button = document.querySelector('button');

  const face = document.querySelector('img');

  let voices = [];

  function populateVoiceList() {

    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {

      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);

      voiceSelector.appendChild(option);

    }

  }

  function speak(e) {

    const utterThis = new SpeechSynthesisUtterance(text.value);

    const selectedOption = voiceSelector.selectedOptions[0].getAttribute('data-name');

    for (let i = 0; i < voices.length; i++) {

      if (voices[i].name === selectedOption) utterThis.voice = voices[i];

    }

    synth.speak(utterThis);

    face.src = 'assets/images/smiling-open.png';

    waitForFinish();

  }

  function waitForFinish() {

    if (synth.speaking) {

      setTimeout(waitForFinish, 10);

    } else {

      face.src = 'assets/images/smiling.png';

    }

  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  button.addEventListener('click', speak);
}