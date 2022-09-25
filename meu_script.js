for (var i = 0; i < 3; i++) {
    var num = Math.floor(Math.random() * 100);
    if(num % 2 == 0) {
        alert(`${num} é par`);
    } else {
        alert(`${num} é impar`);
    }
}

var dicionario = ["hoje", "certificados" ,"Ensolarado", "Ativar", "Paradigmas"]
for (palavras in dicionario) {
    alert(dicionario[palavras]);
}