document.addEventListener("DOMContentLoaded", updateVisitsCounter)

async function getWeather() {
    const body = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Valparaiso&appid=4a8dfd912f7300f5b84fbba2ec797ee8&units=imperial')
    const data = await body.json()
    const element = document.querySelector(".weather")
    element.textContent = `${data.main.temp}°°F - ${data.weather[0].description}`
    const imgWeather = document.querySelector('.weather-icon')
    imgWeather.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.jpg`
}

function updateVisitsCounter() {
    const visits = document.querySelector(".visits")
    amountOfVisits = window.localStorage.getItem("amountOfVisits")
    if (amountOfVisits) {
        amountOfVisits++
    } else {
        amountOfVisits = 1
    }
    localStorage.setItem("amountOfVisits", Number(amountOfVisits))
    visits.textContent = `${amountOfVisits}`
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

const toggleDarkMode = () => {
    const btnDarkMode = document.querySelector(".btn-dark-mode")
    const card1 = document.querySelector("#card-1")
    const card2 = document.querySelector("#card-2")
    if (btnDarkMode.src.includes("images/btn-close-dark-mode.jpg")) {
        btnDarkMode.src = "images/btn-open-dark-mode.jpg"
        card1.style.color = 'black'
        card1.style.backgroundColor = 'rgb(199, 199, 205)'
        card2.style.color = 'black'
        card2.style.backgroundColor = 'rgb(199, 199, 205)'

    } else {
        btnDarkMode.src = "images/btn-close-dark-mode.jpg"
        card1.style.color = 'white'
        card1.style.backgroundColor = 'black'
        card2.style.color = 'white'
        card2.style.backgroundColor = 'black'
    }

}

const updateCurrentYearFooter = () => {
    const pCopyright = document.getElementById("p_copyright_and_information")
    pCopyright.innerHTML = pCopyright.innerHTML.replace("{year}", new Date().getFullYear())
}

const updateLastModifiedFooter = () => {
    const pLastModified = document.getElementById("lastModified")
    pLastModified.innerHTML = pLastModified.innerHTML.replace("{lastModification}", new Intl.DateTimeFormat('en-US', { dateStyle: 'short', timeStyle: 'short', timeZone: 'UTC' }).format(new Date()))
}

updateCurrentYearFooter()
updateLastModifiedFooter()
getWeather()