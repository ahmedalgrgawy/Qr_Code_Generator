let container = document.querySelector('.container');
let geneBtn = document.querySelector(".gene-btn");
let qrInput = document.querySelector(".qr-input");
let qrImg = document.querySelector(".qr-img");

geneBtn.onclick = function () {
    if (qrInput.value.length > 0) {

        geneBtn.innerText = 'Generating Qr Code...';

        qrImg.src = ' https://api.qrserver.com/v1/create-qr-code/?size=190x190&data=' + qrInput.value;

        qrImg.onload = function () {

            container.classList.add("active");
            geneBtn.innerText = 'Generate Qr Code';

        }

    }
}