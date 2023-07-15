async function getLinks() {
    const body = await fetch('https://u186335381.github.io/wdd230/chamber/data/members.json')
    const data = await body.json()
    displayLinks(data)
}

function displayLinks(members) {
    const article = document.querySelector("#article-grid")
    article.innerHTML = `<article class="article-grid">
    <section>` + members.map(member => {
        `<img src="${member.imageFileName}" alt="">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p>${member.membershipLevel}</p>
        <a>${member.websiteURL}</a>
    </section>`
    }) + `</article>`
}

getLinks()