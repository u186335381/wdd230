document.addEventListener("DOMContentLoaded", updateVisitsCounter)

function updateVisitsCounter() {
    const visits = document.querySelector(".visits")
    amountOfVisits = window.localStorage.getItem("amountOfVisitsChamber")
    if (amountOfVisits) {
        amountOfVisits++
    } else {
        amountOfVisits = 1
    }
    localStorage.setItem("amountOfVisitsChamber", Number(amountOfVisits))
    let message
    if (amountOfVisits == 1) {
        localStorage.setItem("dateFirstVisitChamber", Date.now())
        message = "Welcome! Let us know if you have any questions."
    } else if (amountOfVisits == 2) {
        message = "Back so soon! Awesome!"
    } else {
        dateFirstVisitChamber = window.localStorage.getItem("dateFirstVisitChamber")
        let daysSinceLastVisit = Number(((new Date(Number(dateFirstVisitChamber)) - Date.now()) / 84600000).toFixed(0))
        if (daysSinceLastVisit < 0) {
            daysSinceLastVisit = daysSinceLastVisit * -1
        }
        if (daysSinceLastVisit == 1) {
            message = `You last visited ${daysSinceLastVisit} day ago.`
        } else {
            message = `You last visited ${daysSinceLastVisit} days ago.`
        }
    }
    visits.textContent = message
}