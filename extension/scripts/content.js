// Define functions

function getURL() {
    return window.location.href;
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

// working

let url = getURL()

window.close(``, `_parent`, ``);
document.body.remove();
document.head.remove();
window.open("https://wojtmic.github.io/BlockerThingy/");

sleep(8000);

document.getElementById("blockreason").innerHTML = "susmic";
