const song = document.getElementById('song')
var i = 0;
function change() {
  let color = ["blue", "yellow", "green", "red"];
  document.body.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 300);

function toggleSong() {

    if(song.paused) {
        song.play()
        document.getElementById("icon").className = "fas fa-pause";
    } else {
        song.pause()
        document.getElementById("icon").className = "fas fa-play";
    }
    
}
