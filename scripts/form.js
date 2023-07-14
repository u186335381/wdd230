const passwordInput = document.querySelector("#password")
const passwordInput2 = document.querySelector("#repeat_password")

passwordInput.addEventListener("focusout", checkPasswords)
passwordInput2.addEventListener("focusout", checkPasswords)

const rangeRating = document.querySelector("#page_rating")
rangeRating.addEventListener("input", updateRangeCounter)

function updateRangeCounter() {
    const rangeRating = document.querySelector("#page_rating")
    const divRangeText = document.querySelector("#complete_range_text")
    divRangeText.textContent = rangeRating.value
}

function checkPasswords() {
    const password1 = document.querySelector("#password")
    const password2 = document.querySelector("#repeat_password")

    const message = document.querySelector("#form_message")
    if ((password1.value != "" & password2.value != "") & (password1.value !== password2.value)) {
        message.textContent = "Passwords do not match!"
        message.computedStyleMap.visibility = "show"
    } else {
        message.textContent = ""
        message.computedStyleMap.visibility = "hidden"
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