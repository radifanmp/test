//struktur koding

// switch(variable){
//     case <value>:
//         //blok kode
//         break;

//     case <value>:
//             //blok kode
//             break;

//     default:
//             //blok kode
// }

var undian = prompt("Selamat kamu memenangkan undian dari dumbways loh, silakan pilih no undian kamu dari 1 - 3");

var hadiah = "";

switch(undian){
    case "1":
        hadiah = "Kaos Dumbways.id";
        break;
    
    case "2":
        hadiah = "Macbook Air Pro";
        break;
    
    case "3":
        hadiah = "Stiker aja deh kayanya yang cocok sama tampang kamu";
        break;
    
    default:
        document.write("<h3>yang bener sikit lahkalian nih kalo mau hadiah</h3>")
}


if(hadiah === ""){
    document.write("<h4>Kamu gagal dapat hadiah makanya jangan asal pilihnya</h4>")
}

else {
    document.write("<h4>Selamat Kamu dapet hadiah "+ hadiah +" </h4>")
}