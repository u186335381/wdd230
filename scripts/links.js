const baseURL = 'https://u186335381.github.io/wdd230/'

const linksURL = 'https://u186335381.github.io/wdd230/data/links.json'

async function getLinks() {
    const body = await fetch('https://u186335381.github.io/wdd230/data/links.json')
    const data = await body.json()
    console.log(data)
}


getLinks()