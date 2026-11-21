const quenopa = document.getElementById("delete-stars");
const form = document.getElementById("rating-star");

quenopa.style.display = "none";

form.addEventListener("change",() =>{
    quenopa.style.display = "flex"

})

quenopa.addEventListener("click",() =>{
    const cleanstars = document.querySelector("#rating-star input:checked")

    if(cleanstars){
        cleanstars.checked = false;
        
    }
    quenopa.style.display = "none"

})