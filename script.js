function nextPage() {
    document.getElementById('cover').style.display = 'none';
    document.getElementById('chatBox').style.display = 'block';
}

function nextChoco() {
    document.getElementById('chatBox').style.display = 'none';
    document.getElementById('chocoBox').style.display = 'block';
}

function shakeButton() {
    

    Swal.fire({
        icon: 'warning', 
        title: 'Awas!!!',
        text: 'seriusss nihhhh gamauuuu lanjuttt? akuuuuu udaaaaaa buatttt iniii semingguuuuu lebihhhh lohhhhh',
        confirmButtonText: 'Iya deh, aku lanjut',
        background: '#f2dede',
        color: '#721c24',
        confirmButtonColor: '#d33',
        willOpen: () => {
            // Menambahkan z-index di dalam SweetAlert2 menggunakan `willOpen`
            const swalPopup = document.querySelector('.swal2-popup');
            swalPopup.style.zIndex = '9999';
        }
    });
}

function moveButton() {
    let btn = document.getElementById('tenChoco');
    let warning = document.getElementById('chocoWarning');
    let randomX = Math.floor(Math.random() * 200) - 100;
    let randomY = Math.floor(Math.random() * 200) - 100;
    btn.style.transform = `translate(${randomX}px, ${randomY}px)`;

    Swal.fire({
        icon: 'warning', 
        title: 'Awas!!!',
        text: 'Gaaaaa boleeee makannnn coklatt banyaaaa banyaaaa nantiii diabetesss, akuuuu udaaaaa kenaaaa soal nyaaaaa, setiap akuuu ngeliattt kauuuu ituuuu akuuuuu selaluuuu kenaaaa diabetessss, soal nyaaaaa kauuuu ituuuuu manissss kaliii lebiiii manisss dariii coklattt',
        confirmButtonText: 'Oke, Aku Paham!',
        background: '#f2dede',
        color: '#721c24',
        confirmButtonColor: '#d33',
        willOpen: () => {
            // Menambahkan z-index di dalam SweetAlert2 menggunakan `willOpen`
            const swalPopup = document.querySelector('.swal2-popup');
            swalPopup.style.zIndex = '9999';
        }
    });
}


function increaseNext() {
    let nextBtn = document.querySelector("#chatBox .next-btn");
    nextBtn.classList.add("big-btn");
}

function chooseChoco(choice) {
    if (choice === 2) {
        document.getElementById('chocoBox').style.display = 'none';
        document.getElementById('resultBox').style.display = 'block';
        Swal.fire({
            icon: 'warning', 
            title: 'Baca!!!',
            text: 'nahhhh gituuuu donggg 2 ajaaaa, nantiii kirimm ss annn nyaaaa ke akuuuu, biarrr coklattt nyaaaa datangg',
            confirmButtonText: 'Oke, Aku Paham!',
            background: '#f2dede',
            color: '#721c24',
            confirmButtonColor: '#d33',
            willOpen: () => {
                // Menambahkan z-index di dalam SweetAlert2 menggunakan `willOpen`
                const swalPopup = document.querySelector('.swal2-popup');
                swalPopup.style.zIndex = '9999';
            }
        });
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
