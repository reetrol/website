let progress = document.getElementsByClassName("music__playbar")[0];
let song = document.getElementsByClassName("music__player")[0];
let playpause = document.getElementById("music__button-playpause");
let musicTimeRN = document.getElementsByClassName("music__time-rn")[0];
let musicTimeTotal = document.getElementsByClassName("music__time-total")[0];


song.ondurationchange = function() {
    progress.max = song.duration;
    musicTimeTotal.innerHTML = formatSeconds(song.duration);
}

function formatSeconds(s) {
    let minutes = Math.floor(s / 60);
    let seconds = Math.floor(s % 60);
    const timeFormat = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    return timeFormat;
}


console.log(formatSeconds(song.duration));

playpause.addEventListener('click', function() {
    if (playpause.innerHTML === 'play') {
        song.play();
        playpause.innerHTML = 'pause'; //A changer avec des icones si j'ai pas la flemme
    } else {
        song.pause();
        playpause.innerHTML = 'play'; 
    }
});

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
        musicTimeRN.innerHTML = formatSeconds(song.currentTime);
    },500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    musicTimeRN.innerHTML = formatSeconds(song.currentTime);
}