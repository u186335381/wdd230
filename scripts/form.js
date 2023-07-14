const passwordInput = document.querySelector("#password")
const passwordInput2 = document.querySelector("#repeat_password")

passwordInput.addEventListener("focusout", checkPasswords)
passwordInput2.addEventListener("focusout", checkPasswords)

const rangeRating = document.querySelector("#page_rating")
rangeRating.addEventListener("input", updateRangeCounter)

function updateRangeCounter() {
    const rangeRating = document.querySelector("#page_rating")
    const divRangeText = document.querySelector("#complete_range")
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