function resizeHandler(event) {
    if (window.innerWidth >= 500) {
        const menuElements = document.querySelector(".nav-sites")
        menuElements.style.visibility = 'visible'
    }
}


const toggleMenu = () => {
    const menuElements = document.querySelector(".nav-sites")
    const menuButton = document.querySelector(".btn-hamburguer-menu")
    if (menuElements.style.visibility === 'hidden') {
        menuElements.style.visibility = 'visible'
        menuButton.src = "images/btn-close-menu.jpg"
    } else {
        menuElements.style.visibility = 'hidden'
        menuButton.src = "images/btn-open-menu.jpg"
    }
}

const updateLastModifiedFooter = () => {
    const pLastModified = document.getElementById("lastModified")
    pLastModified.innerHTML = pLastModified.innerHTML.replace("{lastModification}", new Intl.DateTimeFormat('en-US', { dateStyle: 'short', timeStyle: 'short', timeZone: 'UTC' }).format(new Date()))
}

updateLastModifiedFooter()
window.addEventListener("resize", resizeHandler)