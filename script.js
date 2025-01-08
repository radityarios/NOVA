const textArray = ["Hello!", "Welcome guys!", "Have a Nice Day!"];
let textIndex = 0;
let charIndex = 0;

function typingEffect() {
  const target = document.querySelector("#typing");
  if (charIndex < textArray[textIndex].length) {
    target.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typingEffect, 150);
  } else {
    setTimeout(() => {
      target.textContent = "";
      charIndex = 0;
      textIndex = (textIndex + 1) % textArray.length;
      typingEffect();
    }, 2000);
  }
}

// Panggil fungsi saat DOM sudah dimuat
document.addEventListener("DOMContentLoaded", typingEffect);
