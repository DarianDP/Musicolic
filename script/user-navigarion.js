
// Add content

const selecta = document.getElementById("Add-contenidopa");
const addvaina = document.querySelector(".add-content-windows")
const addvaina2 = document.querySelector(".divisor-create")
const addvaina3 = document.querySelector(".create-rating")




selecta.addEventListener("click" ,() =>{

    addvaina.style.display = "flex";
    addvaina2.style.display = "flex";
    addvaina3.style.display = "flex";



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
    }
})


// searc bar

const searchAdd = document.getElementById("seach-add");
const background3 = document.querySelector(".add-search-background");



searchAdd.addEventListener("input",() =>{
    const search = searchAdd.ariaValueMax.toLocaleUpperCase();
   const album3 = document.querySelectorAll(".album-card");
  background3.style.display ="flex";
  

});


