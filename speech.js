function speak() {
    var text = document.getElementById('text').value;
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
}
