function speak() {
    var text = document.getElementById('text').value;
    var lang = document.getElementById('lang').value;
    var volume = document.getElementById('volume').value;
    var rate = document.getElementById('rate').value;

    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = lang;
    msg.volume = volume;
    msg.rate = rate;

    window.speechSynthesis.speak(msg);
}
