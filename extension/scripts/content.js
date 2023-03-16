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

document.body.remove();
window.close(``, `_parent`, ``);
window.open("//blocked.html");

sleep(2000);

document.getElementById("blockreason").innerHTML = "susmic";
