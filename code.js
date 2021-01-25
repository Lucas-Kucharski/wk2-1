function countdownTimer() {
    //start at 50
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = "50"
    }, 1000);

    //45 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = "45"
    }, 6000);

    //40 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = "40"
    }, 11000);

    //35 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = "35"
    }, 16000);

    //30 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = "30"
    }, 21000);

    //25 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = "25"
    }, 26000);

    //20 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = "20"
    }, 31000);

    //15 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = "15"
    }, 36000);

    //10 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = "10"
    }, 41000);

    //5 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = "5"
    }, 46000);

    //0 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = "0"
    }, 51000);
    setTimeout(function () { alert("Blastoff!"); }, 51100);


}