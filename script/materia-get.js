const Urlparams = new URLSearchParams(window.location.search);
const selectId = Urlparams.get("id");

const albumWindow = albumsdata[selectId];
const reviewWindow = reviewdata[selectId];


if(reviewWindow){
    document.getElementById("profile-panel").src = reviewWindow.UserProfile;
    document.getElementById("username").textContent = reviewWindow.userName;
    document.getElementById("title-papa").textContent = reviewWindow.titulo;
    document.getElementById("review-conenido").textContent = reviewWindow.review;
     SetStar(reviewWindow.calification);

     const reviewAlbum = albumsdata[reviewWindow.albumId];
    if (reviewAlbum) {
        document.getElementById("album-panel").src = reviewAlbum.cover;
        document.getElementById("album-nombre").textContent = reviewAlbum.title;

        document.getElementById("date-album").textContent = reviewAlbum.Year;
        document.getElementById("tracks-cuantity").textContent = reviewAlbum.Tracks;
        document.getElementById("artist-imagen").src = reviewAlbum.artistImg;
        document.getElementById("artist-nombre").textContent = reviewAlbum.artist;
    }
}

if(albumWindow){
    document.getElementById("img-holder").src = albumWindow.cover;
    document.getElementById("artist-img").src = albumWindow.artistImg;
    document.getElementById("album-name").textContent = albumWindow.title;
    document.getElementById("year").textContent = albumWindow.Year;
    document.getElementById("artist-name").textContent = albumWindow.artist;
    document.getElementById("tracks-cantidad").textContent = albumWindow.Tracks
    document.getElementById("listen-on-stream").href = albumWindow.streamUrl

    document.getElementById("album-imagen").src = albumWindow.cover;
     document.getElementById("artist-name2").textContent = albumWindow.artist;
      document.getElementById("album-name2").textContent = albumWindow.title;
      document.getElementById("rating-name").textContent = albumWindow.title;
    
      
     
}else{
    document.getElementById("album-name").textContent ="Album not found";
}

