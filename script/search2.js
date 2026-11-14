const searchimput2 = document.getElementById("what-you-been-listen-to")
const background2 = document.querySelector(".cards-container2")
const album2 = background2.querySelectorAll(".album-card")
const result2 = document.querySelectorAll(".display-cards2")
const add2 = document.getElementById("add-albums-pago2")


album2.forEach(album =>{
    album.style.display = "none"
})

background2.style.display = "none"

// searchimput2.addEventListener("focus", () => {
//     const seachvalue = searchimput2.value.toLowerCase().trim();

    
   

//     album2.forEach(album => {
//         const albumName = album.querySelector("h3").textContent.toLowerCase();
//         const artistName = album.querySelector("h5").textContent.toLocaleLowerCase();

//         const Fitrarboth = albumName + " " +artistName;
      
//         if (seachvalue === "" || Fitrarboth.includes(seachvalue)) {
//             album.style.display = "";
//         }
//     });
// });

searchimput2.addEventListener("input", () => {

    const seachvalue = searchimput2.value.toLowerCase();
    let anunciopa = false;

     background2.style.display = "flex";
    
    album2.forEach(album => {

        const albumName = album.querySelector("h3").textContent.toLowerCase();
        const artistName = album.querySelector("h5").textContent.toLocaleLowerCase();
        const Fitrarboth = albumName + " " +artistName;

        if (Fitrarboth.includes(seachvalue)){
            album.style.display = "";
            anunciopa = true;
        }else{
            album.style.display = "none";
        }



        if(anunciopa){
            add2.style.display = "none";
        }else{
            add2.style.display = "flex";
        }


    });
})

searchimput2.addEventListener("blur", () => {
    setTimeout(() => {
        album2.forEach(album => album.style.display = "none");
        background2.style.display ="none"
    }, 200); 
});