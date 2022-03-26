var decrypted = document.getElementById("decoded");
var encrypted = document.getElementById("encoded");
var loader = document.querySelector(".loader");
var body = document.querySelector("body");

function startdecrypt() {
    var originalText = decrypted.textContent.split('').reverse();
    var decryptedText = "";
    var i = 0;
    decrypted.textContent = "";
    var shuffleInterval = setInterval(function(){
      var shuffledText = '';
      var j = originalText.length;
      while(j--) shuffledText += String.fromCharCode((Math.random()*94+33) | 0);
      if(i++ % 10 === 0) decryptedText += originalText.pop();
      decrypted.textContent = decryptedText;
      encrypted.textContent = shuffledText;
      if(!shuffledText.length) clearInterval(shuffleInterval);
    }, 15);
}

startdecrypt();
var interv = setInterval(startdecrypt, 10000);

function onLoaded() {
    setTimeout(() => {
        loader.classList.add("loaded");
        body.classList.remove("locked");
        clearInterval(interv);
    }, 3000);
}

if (window.addEventListener) {
    window.addEventListener('load', onLoaded, false); //W3C
} else {
    window.attachEvent('onload', onLoaded); //IE
}