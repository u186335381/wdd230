const buttonGrid = document.getElementById('toggle-grid')
const buttonList = document.getElementById('toggle-list')
const sectionMembers = document.querySelector('.article-grid')

buttonGrid.addEventListener('click', () => {
    sectionMembers.classList.add('article-grid')
    sectionMembers.classList.remove('article-list')
})

buttonList.addEventListener('click', () => {
    sectionMembers.classList.add('article-list')
    sectionMembers.classList.remove('article-grid')
})

async function getLinks() {
    const body = await fetch('https://u186335381.github.io/wdd230/chamber/data/members.json')
    const data = await body.json()
    displayLinks(data)
}

function displayLinks(members) {
    const article = document.querySelector(".article-grid")
    article.innerHTML = members.members.map(member => `<section class="members-section">
        <img src="images/${member.imageFileName}" alt="Company ${member.name}">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p>${member.membershipLevel} Membership</p>
        <a href="${member.websiteURL}">Company's website</a></section>`).join('')
}

getLinks()
