export const hiddenToggle = (ID) => {
    document.getElementById(ID).classList.toggle('hidden')
    document.getElementById(ID).classList.toggle('block')
}

export const switchHidden = (ID, targetID) => {
    document.getElementById(ID).classList.toggle('hidden')
    document.getElementById(ID).classList.toggle('block')
    document.getElementById(targetID).classList.toggle('hidden')
    document.getElementById(targetID).classList.toggle('block')
}