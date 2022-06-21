window.onload = function() {
    console.log(ArSkaiciusYraDidesnis(123));
    console.log(ArSkaiciusYraDidesnis(-212));
}
function ArSkaiciusYraDidesnis(skaicius){
    if (skaicius > 100) {
        return true;
    }
    if (skaicius <= 100){
        return false
    }
}