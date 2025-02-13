function nextPage() {
    document.getElementById('cover').style.display = 'none';
    document.getElementById('chatBox').style.display = 'block';
}

function nextChoco() {
    document.getElementById('chatBox').style.display = 'none';
    document.getElementById('chocoBox').style.display = 'block';
}

function shakeButton() {
    let btn = document.querySelector('.no-btn');
    let warning = document.getElementById('warning');
    btn.classList.add('shake');
    warning.classList.remove('hidden');
    setTimeout(() => btn.classList.remove('shake'), 2000);
}

function moveButton() {
    let btn = document.getElementById('tenChoco');
    let warning = document.getElementById('chocoWarning');
    let randomX = Math.floor(Math.random() * 200) - 100;
    let randomY = Math.floor(Math.random() * 200) - 100;
    btn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    warning.classList.remove('hidden');
}

function increaseNext() {
    let nextBtn = document.querySelector("#chatBox .next-btn");
    nextBtn.classList.add("big-btn");
}

function chooseChoco(choice) {
    if (choice === 2) {
        document.getElementById('chocoBox').style.display = 'none';
        document.getElementById('resultBox').style.display = 'block';
    }
}

function takeScreenshot() {
    html2canvas(document.body).then(canvas => {
        let link = document.createElement('a');
        link.download = 'valentine_page.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}

function shakeButton() {
    let warningText = document.getElementById("warning");
    warningText.style.display = "block"; // Menampilkan teks peringatan
}