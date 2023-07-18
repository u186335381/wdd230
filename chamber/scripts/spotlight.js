async function getSpotlightMembers() {
    const body = await fetch('https://u186335381.github.io/wdd230/chamber/data/members.json')
    const data = await body.json()
    displayLinks(data)
}

function displayLinks(members) {
    randomMembers = getRandomIndexFromArray(members.members)
    const article = document.querySelector(".section-spotlight")
    article.innerHTML = randomMembers.map(member => `<section class="section-spotlight"><h2>Spotlight</h2>
        <img src="images/${member.imageFileName}" alt="Offices of company ${member.name}">
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

getSpotlightMembers()