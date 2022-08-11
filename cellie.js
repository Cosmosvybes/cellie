function checkCellie() {
    //declare variable for user input---number
    var phoneNo = document.getElementById("myInput").value;
    phoneNo = Number(phoneNo)
    var telCos = document.getElementById("myTelCos");




    //declare variable for mobile networks
    var mtn = [07025, 07026, 0703, 0704, 0706, 0803, 0806, 0810, 0814, 0813, 0816, 0903, 0906];
    var globalcom = [0805, 0807, 0811, 0905, 0915, 0705, 0815];
    var _9mobile = [0809, 0909, 0908, 0818, 0817];
    var airtel = [0802, 0808, '0708', 0812, 0701, 0902, 0901, 0904, 0907, 0912]




    if (mtn.includes(phoneNo) ||
        phoneNo == String('07025') ||
        phoneNo == String('0703') ||
        phoneNo == String('07026') ||
        phoneNo == String('0704') ||
        phoneNo == String('0706')) {

        telcosImg.style.backgroundImage = "url('mtn.png')";
        telCos.innerHTML = "Mtn Line, Yello!"
    }
    else if (globalcom.includes(phoneNo) || phoneNo == String('0705')) {
        telcosImg.style.backgroundImage = "url('glo.jpg')";
        telCos.innerHTML = "Glo Line"

    }
    else if (_9mobile.includes(phoneNo)) {
        telcosImg.style.backgroundImage = "url('9mo.jpg')"
        telCos.innerHTML = "9mobile Line"
    }
    else if (airtel.includes(phoneNo) || phoneNo == String('0708')) {
        telcosImg.style.backgroundImage = "url('airtel.png')"
        telCos.innerHTML = "Airtel Line"
    }
    else if (phoneNo == " ") {
        telcosImg.style.backgroundImage = "none"
        return telCos.innerHTML = " ";

    }
    else if (String(phoneNo).length >= 11) {
        telCos.innerHTML = " invalid number"

    }
    else if (String(phoneNo).length <= 3) {
        telCos.innerHTML = " Complete your number"

    }
    else {
        return null;
    }

}