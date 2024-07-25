const menu = document.querySelector(".menu")
const links = document.querySelector(".links")
const closeMenu = document.querySelector(".close")
const modeSwitch = document.querySelector(".slider")
const checkBox = document.querySelector(".checkbox")
const body = document.body;
const header =document.querySelector(".header")
const link = document.querySelectorAll('a')
const animatedBg = document.querySelector(".background")

menu.addEventListener("click",(e)=>{
links.classList.toggle("showlinks")
})
closeMenu.addEventListener("click",()=>{
    links.classList.toggle("showlinks")
})

modeSwitch.addEventListener('click',(e)=>{  
    modeSwitch.classList.toggle('dark')
    body.classList.toggle("dark-mode")
    animatedBg.classList.toggle("showanimated")
    link.forEach((a)=>{
        a.classList.toggle('dark-mode')
    })
    header.classList.toggle("dark-mode")
    localStorage.setItem('theme',body.classList.contains("dark-mode")?"dark":"light")
})

document.addEventListener("DOMContentLoaded",()=>{
   const theme= localStorage.getItem('theme')
    if(theme == 'dark'){
        body.classList.add("dark-mode")
        header.classList.add("dark-mode")
        animatedBg.classList.add("showanimated")
        link.forEach((a)=>{
            a.classList.add('dark-mode')
        })
    }
})