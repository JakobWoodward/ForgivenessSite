// Metinler
const messages = [
    "Özür dilerim, seni üzdüğüm için",
    "Gerçekten istemeden yaptım",
    "Umarım beni affedersin",
    "Hata yaptım ve pişmanım"
];

let msgIndex = 0;

// Elemanlar
const mutluOkuz = document.getElementById('mutlu-okuz');
const uzgunOkuz = document.getElementById('uzgun-okuz');
const speechText = document.getElementById('speech-text');
const speechDiv = document.getElementById('speech-div');
const buttonsDiv = document.getElementById('buttons-div');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

// İlk sahne: Selam! Mutlu öküz
speechDiv.addEventListener('click', () => {
    if(msgIndex < messages.length){
        speechText.textContent = messages[msgIndex];
        msgIndex++;
        // Öküz üzgün olsun
        mutluOkuz.style.display = "none";
        uzgunOkuz.style.display = "block";
    } else {
        // Son sahne
        speechText.textContent = "Beni affettin mi?";
        buttonsDiv.style.display = "flex";
        // Öküz mutlu olacak
        mutluOkuz.style.display = "block";
        uzgunOkuz.style.display = "none";
    }
});

// Evet butonu
yesBtn.addEventListener('click', () => {
    buttonsDiv.style.display = "none";
    speechText.textContent = "Seni seviyorum!";
    mutluOkuz.style.display = "block";
    uzgunOkuz.style.display = "none";
});

// Hayır butonu
noBtn.addEventListener('click', () => {
    buttonsDiv.style.display = "none";
    speechText.textContent = "Olson yine de, özür dilerim.";
    mutluOkuz.style.display = "none";
    uzgunOkuz.style.display = "block";
});
