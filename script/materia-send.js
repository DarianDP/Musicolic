document.querySelectorAll(".album-card").forEach((card) =>{
    card.addEventListener("click",() =>{
        const id = card.getAttribute("materia-id") ;
        if(id){
            window.location.href = `albums.html?id=${id}`;
        }
    })
})