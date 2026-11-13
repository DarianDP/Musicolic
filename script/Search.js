const searchimput = document.getElementById("Buscador")
const album = document.querySelectorAll(".album-card")
const result = document.querySelectorAll(".display-cards")

album.forEach(album =>{
    album.style.display = "none"
})

searchimput.addEventListener("focus", () => {
    const seachvalue = searchimput.value.toLowerCase().trim();
    album.forEach(album => {
        const albumName = album.querySelector("h3").textContent.toLowerCase();
      
        if (seachvalue === "" || albumName.includes(seachvalue)) {
            album.style.display = "";
        }
    });
});

searchimput.addEventListener("input", () => {

    const seachvalue = searchimput.value.toLowerCase();
    
    

    album.forEach(album => {

        const albumName = album.querySelector("h3").textContent.toLowerCase();

        if (albumName.includes(seachvalue)){
            album.style.display = "";
        }else{
            album.style.display = "none";
        }

        
    });
})

searchimput.addEventListener("blur", () => {
    setTimeout(() => {
        album.forEach(album => album.style.display = "none");
    }, 200); 
});