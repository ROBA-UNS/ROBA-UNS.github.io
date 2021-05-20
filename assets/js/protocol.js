// Motor belakang
function belakangMaju() {
    return 1;
}

function belakangMundur() {
    return 2;
}

function belakangDiam() {
    return 3;
}

// Motor Depan

function depanKanan() {
    return 4;
}

function depanKiri() {
    return 5;
}

function depanDiam() {
    return 6;
}

// kamera
function kameraKanan() {
    return 11;
}

function kameraKiri() {
    return 10;
}

function kameraTengah() {
    return 12;
}

function kameraDiam() {
    return 13;
}

function command(belakang, depan, kamera){
    var kodeEnkripsi = "1" + "," + String(belakang) + "," + String(depan) + "," + String(kamera);
    return kodeEnkripsi;
}