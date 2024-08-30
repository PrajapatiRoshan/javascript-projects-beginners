const imgBox = document.getElementById('imgBox');
const qrImg = document.getElementById('qaImage');
const ipText = document.getElementsByTagName('input')[0];

const GenerateQR = () => {
  if (ipText.value) {
    qrImg.src =
      'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + ipText.value;
    imgBox.classList.add('show-img');
  } else {
    imgBox.classList.remove('show-img');
    ipText.classList.add('error');
    setTimeout(() => {
      ipText.classList.remove('error');
    }, 1000);
  }
};
