const patra = document.getElementById("button-patra")
const sumit = document.getElementById("sumit-buttonId");
const thanks = document.getElementById("thanks")
const patra2 = document.getElementById("button-patra2")
const rateThatShit = document.getElementById("rate-album-wakata")
const backgroundKiller = document.querySelector(".rating-send");
const backgroundKiller2 = document.querySelector(".prendetojoan")
const ahorasi = document.getElementById("fomr-sumbmit")
let hidetimer ;

backgroundKiller.style.display = "none"
backgroundKiller2.style.display = "none"
 thanks.style.display = "none"

patra.addEventListener("click",() =>{


// ahorasi.style.display = "none"
 backgroundKiller.style.display = "none"
 backgroundKiller2.style.display = "none"

    
})

ahorasi.addEventListener("submit",(event) =>{
    event.preventDefault();
    

 backgroundKiller.style.display = "none"
 backgroundKiller2.style.display = "none"
thanks.style.display = "flex"


 

hidetimer = setTimeout(() =>{
     thanks.style.display = "none"
},4000)

ahorasi.reset();
})

patra2.addEventListener("click",() =>{
     thanks.style.display = "none"
})

rateThatShit.addEventListener("click",() =>{
    backgroundKiller.style.display = "flex"
backgroundKiller2.style.display = "flex"
})

