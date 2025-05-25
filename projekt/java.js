const annoying = document.querySelector(".annoying");
const Button = document.querySelector(".Button");
const khalid = document.querySelector(".khalid");

Button.addEventListener("click", function (event) {
    annoying.style.display = "none";
     khalid.style.display = "none";
  });

  
let currentSize = 16; // Startstorlek i px

function makeTextBigger() {
  if (currentSize < 22)
  currentSize += 2;
  document.body.style.fontSize = currentSize + "px";
}

function makeTextSmaller() {
  if (currentSize > 10) {
    currentSize -= 2;
    document.body.style.fontSize = currentSize + "px";
  }
}
 