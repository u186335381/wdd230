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