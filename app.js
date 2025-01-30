const menu = document.querySelector(".menu")
const links = document.querySelector(".links")
const closeMenu = document.querySelector(".close")


menu.addEventListener("click",(e)=>{
links.classList.toggle("showlinks")
})
closeMenu.addEventListener("click",()=>{
    links.classList.toggle("showlinks")
})


