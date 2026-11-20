const release = document.getElementById("releases-button");
const popular = document.getElementById("popular-button");
const releasesBackground = document.querySelectorAll(".releases-background")
const albumRelease = document.querySelector(".albums-release");
const albumRelease2 = document.querySelector(".albums-news");
const hot = document.getElementById("popular-this-week");
const newPopular = document.getElementById("hot-releases");

albumRelease2.style.display = "none";
newPopular.style.display ="none"
popular.classList.add("active");

release.addEventListener("click", () =>{
    
    albumRelease.style.display = "none"
    hot.style.display = "none"
    popular.classList.remove("active");
    

    albumRelease2.style.display = "flex"
    newPopular.style.display ="flex"
    release.classList.add("active");


})

popular.addEventListener("click", () =>{
    
    albumRelease.style.display = "flex"
    hot.style.display = "flex"
    release.classList.remove("active");

    albumRelease2.style.display = "none"
    newPopular.style.display ="none "
    popular.classList.add("active");

})