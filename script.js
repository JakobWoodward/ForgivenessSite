const messages = [
    "Mesaj1",
    "Mesaj2",
    "Mesaj3",
    "Mesaj4",
    "Mesaj5"
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
        speechText.textContent = "Beni affettin mi?";
        buttonsDiv.style.display = "flex";
        mutluOkuz.style.display = "block";
        uzgunOkuz.style.display = "none";
        altYazi.style.display = "none";
    }
});

yesBtn.addEventListener("click", () => {
    speechDiv.removeEventListener
    buttonsDiv.style.display = "none";
    speechText.textContent = "Hell Yeaah";
    mutluOkuz.style.display = "block";
    uzgunOkuz.style.display = "none";
    buttonClicked = true
});

noBtn.addEventListener("click", () => {
    buttonsDiv.style.display = "none";
    speechText.textContent = "Hell Naah";
    mutluOkuz.style.display = "none";
    uzgunOkuz.style.display = "block";
    buttonClicked = true
});