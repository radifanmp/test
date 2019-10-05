var repeat = confirm("Ulangin terus klik oke aja");
var data = 0;

do {
    data++
    repeat = confirm("Ulangin terus klik oke aja");
}while(repeat)

document.write("Anda sudah ulangin ini sebanyak " + data + " kali");