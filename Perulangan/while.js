var repeat = confirm("Ulangin terus klik oke aja");
var data = 0;

while(repeat){
    data++
    repeat = confirm("Ulangin terus klik oke aja");
}

document.write("Anda sudah ulangin ini sebanyak " + data + " kali");