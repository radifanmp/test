var username = prompt("Username:");
var password = prompt("Password:");

if(username == "dumbways"){
    if(password == "dumbwaysdev"){
        document.write("<h2>Selamat Anda berhasil login di dumbways.id</h2>");
    } else {
        document.write("<p>Password salah, coba lagi!</p>");
    }
} else {
    document.write("<p>Anda ilegal!</p>");
}