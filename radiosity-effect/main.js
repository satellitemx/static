let radiosity, radiosity_effect, radiosity_body, artist, data, current;

window.onload = function() {
    radiosity = document.querySelector(".radiosity");
    radiosity_effect = document.querySelector(".radiosity-effect");
    radiosity_body = document.querySelector(".radiosity-body");
    artist = document.querySelector(".artist");
    main();
}

async function main() {
    data = await fetch("./data.json").then((res) => {return res.json();});
    current = data[0];
    changeImage();
    setInterval(changeImage, 10 * 1000);
}

function changeImage() {
    let lucky_one = data[Math.floor(Math.random() * data.length)];
    changeImageURI(lucky_one.img);
    artist.innerText = lucky_one.artist;
    artist.href = "https://unsplash.com/" + lucky_one.handle;
}

async function changeImageURI(url) {
    console.log(url);
    let res = await fetch("./imgs/" + url);
    let blob = await res.blob();
    let URI = URL.createObjectURL(blob);
    radiosity_effect.src = URI;
    radiosity_body.src = URI;
    radiosity.classList.add("fade");
    setTimeout(function() {
        radiosity.classList.remove("fade");
    }, 1100);
}