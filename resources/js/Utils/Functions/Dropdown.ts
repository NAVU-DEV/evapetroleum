export const toggleDropdown = (ID) => {
    document.getElementById(ID).classList.toggle('hidden')
    document.getElementById(ID).classList.toggle('block')
}