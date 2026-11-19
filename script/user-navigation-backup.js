// Add content

const selecta = document.getElementById("Add-contenidopa");


const addvaina = document.querySelector(".add-content-windows")
const addvaina2 = document.querySelector(".divisor-create")
const addvaina3 = document.querySelector(".create-rating")
const cancelButton = document.querySelector(".cancel-button")
const backdrop = document.querySelector(".backdrop")
const add3 = document.getElementById("add-albums-pago3")







selecta.addEventListener("click" ,() =>{

    addvaina.style.display = "flex";
    addvaina2.style.display = "flex";
    addvaina3.style.display = "flex";
    backdrop.style.display ="flex";



});



document.addEventListener("click",(Event) =>{
    const letopate = 
    selecta.contains(Event.target)||
    addvaina.contains(Event.target)||
    addvaina2.contains(Event.target)||
    addvaina3.contains(Event.target);

    if(!letopate){
    addvaina.style.display = "none";
    addvaina2.style.display = "none";
    addvaina3.style.display = "none";
     backdrop.style.display ="none";
    }
})




// searc bar

const searchAdd = document.getElementById("seach-add");
const background3 = document.querySelector(".add-search-background");



searchAdd.addEventListener("input",() =>{
    const search = searchAdd.value.toLowerCase();
    
    let paga = false ;
    
    const contenedorClean = document.querySelector(".cards-container2")
   const album3 = contenedorClean.querySelectorAll(".album-card");
   
   background3.querySelectorAll(".album-card").forEach(card => card.remove())
    

   album3.forEach(album =>{
    const albumName = album.querySelector("h3").textContent.toLowerCase();
    const artistName = album.querySelector("h5").textContent.toLowerCase();
    const Fitrarboth = albumName + " " +artistName;

    if(Fitrarboth.includes(search)){
            
    const clone = album.cloneNode(true);
    clone.style.display = "flex";
    background3.appendChild(clone);
    background3.style.display = "flex";
    paga = true;
            
        }
        
        
         
   })

   if(paga){
            add3.style.display = "none"
        }else{
            // const clone = add3.cloneNode(true);
            // clone.style.display = "flex"
            // background3.appendChild(clone);
            //  background3.style.display ="flex"
            add3.style.display = "flex"


            
        }

   
        

});

searchAdd.addEventListener("blur", () =>{
    setTimeout(() =>{
        background3.style.display = "none";
    },200)
})

cancelButton.addEventListener("click", () => {
    addvaina.style.display = "none";
    addvaina2.style.display = "none";
    addvaina3.style.display = "none";
     backdrop.style.display ="none";
})





