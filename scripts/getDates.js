const updateCurrentYearFooter = () => {
    const pCopyright = document.getElementById("p_copyright_and_information")
    pCopyright.innerHTML = pCopyright.innerHTML.replace("{year}", new Date().getFullYear())
}

const updateLastModifiedFooter = () => {
    const pLastModified = document.getElementById("lastModified")
    pLastModified.innerHTML = pLastModified.innerHTML.replace("{lastModification}", new Intl.DateTimeFormat('en-US', { dateStyle: 'short', timeStyle: 'short', timeZone: 'UTC' }).format(new Date()))
}

const toggleMenu = () => {
    const menuElements = document.querySelector(".nav-sites")
    const menuButton = document.querySelector(".btn-hamburguer-menu")
    if (menuElements.style.visibility === 'hidden') {
        menuElements.style.visibility = 'visible'
        menuButton.src = "images/btn-close-menu.png"
    } else {
        menuElements.style.visibility = 'hidden'
        menuButton.src = "images/btn-open-menu.png"
    }
}

const toggleDarkMode = () => {
    const btnDarkMode = document.querySelector(".btn-dark-mode")
    const card1 = document.querySelector("#card-1")
    const card2 = document.querySelector("#card-2")
    if (btnDarkMode.src.includes("images/btn-close-dark-mode.png")) {
        btnDarkMode.src = "images/btn-open-dark-mode.png"
        card1.style.color = 'black'
        card1.style.backgroundColor = 'rgb(199, 199, 205)'
        card2.style.color = 'black'
        card2.style.backgroundColor = 'rgb(199, 199, 205)'

    } else {
        btnDarkMode.src = "images/btn-close-dark-mode.png"
        card1.style.color = 'white'
        card1.style.backgroundColor = 'black'
        card2.style.color = 'white'
        card2.style.backgroundColor = 'black'
    }

}

updateCurrentYearFooter()
updateLastModifiedFooter()