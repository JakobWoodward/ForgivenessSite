const messages = [
    "Sana kendimi affettirmek istiyorum.",
    "Özür dilediğimde gerek yok dedin ama ben hala kendimi suçlu hissediyorum.",
    "Son birkaç gün seninle konuşmadık...",
    "ve bu süreçte senin eksikliğini, o günaydın mesajının eksikliğini sertçe hissettim.",
    "Seninle dertleşmeye ve kafamda büyüttüğüm o...",
    "küçük, hafif dertlerimi anlatmaya ihtiyacım var.",
    "O neşeli ve umut veren tarafına inanarak şunu sormak istiyorum..."
];

const mutluOkuz = document.getElementById("mutlu-okuz");
const uzgunOkuz = document.getElementById("uzgun-okuz");
const speechText = document.getElementById("speech-text");
const speechDiv = document.getElementById("speech-div");
const buttonsDiv = document.getElementById("buttons-div");
const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");
const altYazi = document.getElementById("alt-yazi");

let msgIndex = 0;
console.log(msgIndex);

let buttonClicked = false;

speechDiv.addEventListener("click", () => {
    if (buttonClicked) return;

    if (msgIndex < messages.length) {
        speechText.textContent = messages[msgIndex];
        msgIndex++;
        mutluOkuz.style.display = "none";
        uzgunOkuz.style.display = "block";
    } else {
        speechText.textContent = "Bu öküzü affeder misin?";
        buttonsDiv.style.display = "flex";
        mutluOkuz.style.display = "block";
        uzgunOkuz.style.display = "none";
        altYazi.style.display = "none";
    }
});

yesBtn.addEventListener("click", () => {
    speechDiv.removeEventListener
    buttonsDiv.style.display = "none";
    speechText.textContent = "Eğer affediyorsan, bana yeşil kalp gönder ki yüzüm gülsün.";
    mutluOkuz.style.display = "block";
    uzgunOkuz.style.display = "none";
    buttonClicked = true
});

noBtn.addEventListener("click", () => {
    buttonsDiv.style.display = "none";
    speechText.textContent = "Peki o halde. Her şeyin sonu var demiştik değil mi? Eğer cevabın gerçekten hayırsa beni engelle ki anlayayım.";
    mutluOkuz.style.display = "none";
    uzgunOkuz.style.display = "block";
    buttonClicked = true
});