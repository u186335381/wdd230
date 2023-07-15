const baseURL = 'https://u186335381.github.io/wdd230/'

const linksURL = 'https://u186335381.github.io/wdd230/data/links.json'

async function getLinks() {
    const body = await fetch('https://u186335381.github.io/wdd230/data/links.json')
    const data = await body.json()
    displayLinks(data)
}

function displayLinks(weeks) {
    const element = document.querySelector("#card-1")
    element.innerHTML = `
    <section id="card-1" class="card"><h3>Learning Activities</h3><ul>` +
        weeks.weeks.map(week => `<li class='activities'>${week.week}: ` + week.links.map(e => ` <a href="${e.url}">${e.title}</a>`).join('')).join('') + `</ul></section>`
}

getLinks()