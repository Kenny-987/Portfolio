const menu = document.querySelector(".menu")
const links = document.querySelector(".links")
const closeMenu = document.querySelector(".close")
const modeSwitch = document.querySelector(".slider")
const checkBox = document.querySelector(".checkbox")
const body = document.body;
const header =document.querySelector(".header")
const link = document.querySelectorAll('a')
const animatedBg = document.querySelector(".background")
const allAboutSection = document.querySelector(".allabout")
const overviewItem = document.querySelectorAll(".overview-item")
const priceitem = document.querySelectorAll(".priceitem")
const labels = document.querySelectorAll(".label")
const socialIcons = document.querySelectorAll(".social-icons")
const portfolioItem = document.querySelectorAll(".portfolio-item")
const contactLinks = document.querySelectorAll(".contact-info")

menu.addEventListener("click",(e)=>{
links.classList.toggle("showlinks")
})
closeMenu.addEventListener("click",()=>{
    links.classList.toggle("showlinks")
})

modeSwitch.addEventListener('click',(e)=>{  
    modeSwitch.classList.toggle('dark')
    body.classList.toggle("dark-mode")
    allAboutSection.classList.toggle("dark-mode")
    animatedBg.classList.toggle("showanimated")
    menu.classList.toggle("dark-mode")
    overviewItem.forEach((item)=>{
        item.classList.toggle('dark-mode')
    })
    
    link.forEach((a)=>{
        a.classList.toggle('dark-mode')
    })

    priceitem.forEach((item)=>{
        item.classList.toggle("dark-mode")
    })

    labels.forEach((label)=>{
        label.classList.toggle("dark-mode")
    })

    socialIcons.forEach((icon)=>{
        icon.classList.toggle("dark-mode")
    })

    portfolioItem.forEach((item)=>{
        item.classList.toggle("dark-mode")
    })
    contactLinks.forEach((link)=>{
        link.classList.toggle("dark-mode")
    })
    header.classList.toggle("dark-mode")
    localStorage.setItem('theme',body.classList.contains("dark-mode")?"dark":"light")
})

document.addEventListener("DOMContentLoaded",()=>{
   const theme= localStorage.getItem('theme')
    if(theme == 'dark'){
        body.classList.add("dark-mode")
        header.classList.add("dark-mode")
        allAboutSection.classList.add("dark-mode")
        animatedBg.classList.add("showanimated")
        menu.classList.add("dark-mode")
        overviewItem.forEach((item)=>{
            item.classList.add('dark-mode')
        })
        link.forEach((a)=>{
            a.classList.add('dark-mode')
        })

        priceitem.forEach((item)=>{
            item.classList.add("dark-mode")
        })

        labels.forEach((label)=>{
            label.classList.add("dark-mode")
        })

        socialIcons.forEach((icon)=>{
            icon.classList.add("dark-mode")
        })

        portfolioItem.forEach((item)=>{
            item.classList.add("dark-mode")
        })
        contactLinks.forEach((link)=>{
            link.classList.add("dark-mode")
        })
    }
})