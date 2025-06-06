const textArea = document.getElementById('text');
const voiceSelect = document.getElementById('voices');
const statusMsg = document.getElementById('status');
const statusMsgReading = document.getElementById('statusReading');
let voices = [];

function populateVoices() {
  voices = speechSynthesis.getVoices();
  voiceSelect.innerHTML = '';
  voices.forEach((voice, i) => {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  });
}

function speak() {
  statusMsg.textContent = ''; 
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
  }
  statusMsgReading.textContent = '🗣️ Reading you Text.';
  statusMsgReading.classList.add('showOn');
  const utterance = new SpeechSynthesisUtterance(textArea.value);
  utterance.voice = voices[voiceSelect.value];
  speechSynthesis.speak(utterance);
}

function stopSpeech() {
  speechSynthesis.cancel();
  statusMsg.textContent = '🛑 You stopped the Reading.';
  statusMsg.classList.add('show');
  statusMsgReading.classList.remove('showOn');

  // Auto-hide after 3 seconds
  setTimeout(() => {
    statusMsg.classList.remove('show');
  }, 3000);
}

speechSynthesis.onvoiceschanged = populateVoices;
populateVoices();
