const searchimput2 = document.getElementById("what-you-been-listen-to")
const album2 = document.querySelectorAll(".album-card")
const result2 = document.querySelectorAll(".display-cards2")
const background2 = document.querySelector(".cards-container2")

album2.forEach(album =>{
    album.style.display = "none"
})

background2.style.display = "none"

searchimput2.addEventListener("focus", () => {
    const seachvalue = searchimput2.value.toLowerCase().trim();

    background2.style.display = "flex";

    album2.forEach(album => {
        const albumName = album.querySelector("h3").textContent.toLowerCase();
        const artistName = album.querySelector("h5").textContent.toLocaleLowerCase();

        const Fitrarboth = albumName + " " +artistName;
      
        if (seachvalue === "" || Fitrarboth.includes(seachvalue)) {
            album.style.display = "";
        }
    });
});

searchimput2.addEventListener("input", () => {

    const seachvalue = searchimput2.value.toLowerCase();
    
    album2.forEach(album => {

        const albumName = album.querySelector("h3").textContent.toLowerCase();
        const artistName = album.querySelector("h5").textContent.toLocaleLowerCase();
        const Fitrarboth = albumName + " " +artistName;

        if (Fitrarboth.includes(seachvalue)){
            album.style.display = "";
        }else{
            album.style.display = "none";
        }
    });
})

searchimput2.addEventListener("blur", () => {
    setTimeout(() => {
        album2.forEach(album => album.style.display = "none");
        background2.style.display ="none"
    }, 200); 
});