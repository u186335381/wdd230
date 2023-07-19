async function getWeather() {
    const body = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Valparaiso&appid=4a8dfd912f7300f5b84fbba2ec797ee8&units=imperial')
    const data = await body.json()
    const bodyforecast = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=Valparaiso&appid=4a8dfd912f7300f5b84fbba2ec797ee8&units=imperial')
    const dataForecast = await bodyforecast.json()
    const forecast = dataForecast.list[18]
    const element = document.querySelector(".weather-temperature")
    element.innerHTML = `<div class="weather-temperature">
    <img class="weather-icon" alt="Weather symbol" src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">
    <span>Today ${data.main.temp}°°F - ${data.weather[0].description}.</span><br>
    <img class="weather-icon" alt="Weather symbol" src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png">
    <span>Forecast for date ${forecast.dt_txt}: ${forecast.main.temp}°F - ${forecast.weather[0].description}.</span></div>`
}

function validateBannerVisibility() {
    const banner = document.querySelector(".banner-invitation-to-meet")
    if ([1, 2, 3].includes(new Date().getDay())) {
        const banner = document.querySelector(".banner-invitation-to-meet")
        banner.innerHTML = `<div class="banner-invitation-to-meet" role="banner"><img src="images/banner-invitation-to-chamber-meet.jpg" alt="Invitation to meet at the chamber"></div>`
    } else {
        banner.innerHTML = `<div class="banner-invitation-to-meet" role="banner"></div>`
    }
}

async function getSpotlightMembers() {
    const body = await fetch('https://u186335381.github.io/wdd230/chamber/data/members.json')
    const data = await body.json()
    displayLinks(data)
}

function displayLinks(members) {
    randomMembers = getRandomIndexFromArray(members.members)
    const article = document.querySelector(".section-spotlight")
    article.innerHTML = randomMembers.map(member => `<section class="section-spotlight"><h2>Spotlight</h2>
        <img class="img-company-spotlight" src="images/${member.imageFileName}" alt="Offices of company ${member.name}">
        <h2>${member.name}</h2>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p>${member.membershipLevel} Membership</p>
        <a href="${member.websiteURL}">View</a></section>`).join('')
}

function getRandomIndexFromArray(array) {
    randomMembers = []
    let counter = 1
    specificMemberships = []
    for (let index = 0; index < array.length; index++) {
        if (['Gold', 'Silver'].includes(array[index].membershipLevel)) {
            specificMemberships.push(array[index])
        }
    }

    while (counter <= 3) {
        index = Math.floor(Math.random() * specificMemberships.length)
        randomMembers.push(specificMemberships[index])
        specificMemberships.splice(index, 1)
        counter++
    }
    return randomMembers
}

validateBannerVisibility()
getSpotlightMembers()
getWeather()