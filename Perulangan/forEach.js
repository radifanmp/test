var cars = ["Buggati","Lambhorghini","Porsche"];

//Perulangan Biasa
// for(i = 0; i < cars.length; i++){
//     document.write(i+". "+ cars[i] + "<br>");
// }


//mengunakan operator In
 for(i in cars){
         document.write(i+". "+ cars[i] + "<br>");
     }

//mengunakan method forEach
var brands = ["Vivo","Iphone","Xiaomi","Oneplus","Samsung","ROG"]

brands.forEach(function(brand){
    document.write("<p>"+ brand + "</p>");
})