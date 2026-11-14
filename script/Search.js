const searchimput = document.getElementById("Buscador")
const background = document.querySelector(".cards-container")
const album = background.querySelectorAll(".album-card")
const result = document.querySelectorAll(".display-cards")
const add = document.getElementById("add-albums-pago")


album.forEach(album =>{
    album.style.display = "none"
})

background.style.display = "none"

searchimput.addEventListener("focus", () => {
    const seachvalue = searchimput.value.toLowerCase().trim();

    background.style.display = "flex";

    album.forEach(album => {
        const albumName = album.querySelector("h3").textContent.toLowerCase();
        const artistName = album.querySelector("h5").textContent.toLocaleLowerCase();

        const Fitrarboth = albumName + " " +artistName;
      
        if (seachvalue === "" || Fitrarboth.includes(seachvalue)) {
            album.style.display = "";
           
        }
    });
});

searchimput.addEventListener("input", () => {

    const seachvalue = searchimput.value.toLowerCase();
    let anunciopa = false;
    
    

    album.forEach(album => {

        const albumName = album.querySelector("h3").textContent.toLowerCase();
        const artistName = album.querySelector("h5").textContent.toLocaleLowerCase();
        const Fitrarboth = albumName + " " +artistName;

        if (Fitrarboth.includes(seachvalue)){
            album.style.display = "";
            anunciopa = true;
        }else{
            album.style.display = "none";
            
        }

        if (anunciopa){
            add.style.display = "none"
        }else{
            add.style.display = "flex"
        }
         
            
        



        
    });
})

searchimput.addEventListener("blur", () => {
    setTimeout(() => {
        album.forEach(album => album.style.display = "none");
        background.style.display ="none"
    }, 200); 
});



