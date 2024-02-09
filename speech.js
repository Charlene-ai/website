function speak() {
    var text = document.getElementById('text').value;
    var lang = document.getElementById('lang').value;

    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = lang;

    window.speechSynthesis.speak(msg);
}
