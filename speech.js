var synth = window.speechSynthesis;
var voices = [];
var msg = new SpeechSynthesisUtterance();

function populateVoices() {
    voices = synth.getVoices();
    var voiceSelect = document.getElementById('voice');
    voices.forEach((voice, i) => {
        var option = document.createElement('option');
        option.value = voice.name;
        option.innerHTML = voice.name;
        voiceSelect.appendChild(option);
    });
}

function speak() {
    var text = document.getElementById('text').value;
    var lang = document.getElementById('lang').value;
    var volume = document.getElementById('volume').value;
    var rate = document.getElementById('rate').value;
    var voice = document.getElementById('voice').value;

    msg.text = text;
    msg.lang = lang;
    msg.volume = volume;
    msg.rate = rate;
    msg.voice = voices.find(v => v.name === voice);

    synth.speak(msg);
}

function pauseResume() {
    if (synth.paused) {
        synth.resume();
    } else if (synth.speaking) {
        synth.pause();
    }
}

function stop() {
    synth.cancel();
}

window.onload = function() {
    populateVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoices;
    }
}
