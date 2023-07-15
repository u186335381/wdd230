async function getLinks() {
    const body = await fetch('https://u186335381.github.io/wdd230/chamber/data/members.json')
    const data = await body.json()
    displayLinks(data)
}

function displayLinks(members) {
    const article = document.querySelector(".article-grid")
    article.innerHTML = members.members.map(member => `<section>
        <img src="${member.imageFileName}" alt="">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p>${member.membershipLevel} Membership</p>
        <a href="${member.websiteURL}">Company's website</a></section>`).join('')
}

getLinks()