const menu = document.querySelector(".menu")
const hamb = document.querySelector(".hamb")
const close = document.querySelector(".close")

console.log(document.body)

hamb.addEventListener("click", () => {
    menu.style.display = "block"
    close.style.display = "block"
    hamb.style.display = "none"
    document.body.style.overflow = "hidden"
})

close.addEventListener("click", () => {
    menu.style.display = "none"
    close.style.display = "none"
    hamb.style.display = "block"
    document.body.style.overflow = "auto"
})