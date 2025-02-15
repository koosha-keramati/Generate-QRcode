const generatbtn =document.querySelector('form button');
const qrcodebox = document.querySelector('.qr-code');
const qrinput = document.querySelector('form input');
const qrimage = document .querySelector('.qr-code img');

generatbtn.addEventListener('click', function(){
    let qrvalue = qrinput.value;
    if (!qrvalue) {
        return alert('لطفا یه متن یا ادرس وارد بکن')
    }
    generatbtn.innerHTML="در حال تولید QR code"
    qrimage.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`;
    qrimage.addEventListener('load', function(){
        qrcodebox.classList.remove('hidden');
        generatbtn.innerHTML="تولید QR code";
    })
})
qrinput.addEventListener('keyup',function(){
    if(!qrinput.value){
        qrcodebox.classList.add('hidden');
    }
})