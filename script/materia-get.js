const Urlparams = new URLSearchParams(window.location.search);
const selectId = Urlparams.get("id");

const albumWindow = albumsdata[selectId];

if(albumWindow){
    document.getElementById("img-holder").src = albumWindow.cover;
    document.getElementById("album-name").textContent = albumWindow.title;
    document.getElementById("year").textContent = albumWindow.Year;
    document.getElementById("artist-name").textContent = albumWindow.artist;
    document.getElementById("tracks-cantidad").textContent = albumWindow.Tracks
}else{
    document.getElementById("albums-name").textContent ="Album not found";
}