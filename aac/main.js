function main() {

    // Bind elements

    window.startBtn = document.getElementById("btn-start");
    window.controlBtn = document.getElementById("btn-control");
    window.toggleBtn = document.getElementById("btn-toggle");
    window.audioPlayers = document.getElementsByTagName("audio");
    window.statusString = document.getElementById("status");
    window.paused = true;

    // Activate introduction screen

    if (window.location.href.split("#").length == 1) {
        window.location.href = "#intro";
    }

    // Event listeners

    startBtn.addEventListener("click", start);
    controlBtn.addEventListener("click", play);
    toggleBtn.addEventListener("click", toggle);
}

function start() {
    setInterval(function () {
        if (audioPlayers[0].paused && audioPlayers[0].paused) {
            paused = true;
            controlBtn.innerText = "Play";
        } else {
            paused = false;
            controlBtn.innerText = "Pause";
        }
    }, 100);
}

function play() {
    if (paused) {
        if (audioPlayers[0].readyState == 4 && audioPlayers[1].readyState == 4) {
            audioPlayers[0].play();
            audioPlayers[1].play();
        }
    } else {
        audioPlayers[0].pause();
        audioPlayers[1].pause();
    }
}

function toggle() {
    if (audioPlayers[0].muted) {
        audioPlayers[1].muted = true;
        audioPlayers[0].muted = false;
        statusString.innerText = "FFmpeg Native AAC";
    } else {
        audioPlayers[1].muted = false;
        audioPlayers[0].muted = true;
        statusString.innerText = "CoreAudio AAC";
    }
}