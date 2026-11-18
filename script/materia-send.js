document.addEventListener("click",(e) =>{
    const card = e.target.closest(".album-card");
    if(!card) return;

    const id = card.getAttribute("materia-id");
    if(id !== null){
        window.location.href = `albums.html?id=${id}`;
    }
})

document.addEventListener("click",(r) =>{
    const card = r.target.closest(".album-header");
    if(!card) return;

    const id = card.getAttribute("materia-id");
    if(id !== null){
        window.location.href = `albums.html?id=${id}`;
    }
})

document.addEventListener("click",(t) =>{
    const card = t.target.closest(".album-details");
    if(!card) return;

    const id = card.getAttribute("materia-id");
    if(id !== null){
        window.location.href = `albums.html?id=${id}`;
    }
})