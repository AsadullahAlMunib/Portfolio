let qrText = document.getElementById('qrText');
let qrBox = document.getElementById('qrBox');
let qrImg = document.getElementById('qrImg');

function generateQR() {
    if (qrText.value.length > 0) {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data="+encodeURIComponent(qrText.value);
        qrBox.classList.add('qr_show');
    } else {
        qrText.classList.add('blank_input');
        setTimeout(() => {
            qrText.classList.remove('blank_input');
        }, 1000);
    }
}
