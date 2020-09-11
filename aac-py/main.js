let ringLeft, ringRight;
let playerLeft, playerRight;

function main() {
    ringLeft = document.querySelector("body > div > div.left.side > div");
    ringRight = document.querySelector("body > div > div.right.side > div");
    playerLeft = document.querySelector("body > div > div.left.side > audio");
    playerRight = document.querySelector("body > div > div.right.side > audio");

    playerLeft.addEventListener("play", leftPlay);
    playerLeft.addEventListener("pause", leftPause);
    playerRight.addEventListener("play", rightPlay);
    playerRight.addEventListener("pause", rightPause);
}

function leftPlay() {
    ringLeft.classList.add("active");
    playerRight.pause();
}

function leftPause() {
    ringLeft.classList.remove("active");
}

function rightPlay() {
    ringRight.classList.add("active");
    playerLeft.pause();
}

function rightPause() {
    ringRight.classList.remove("active");
}