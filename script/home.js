let btnNavigasi = document.getElementById("btn-navigasi")
let navigasi = document.getElementById("navigasi")

let statusBtnNavigasi = false
btnNavigasi.addEventListener("click", () => {
    statusBtnNavigasi = !statusBtnNavigasi
    if(statusBtnNavigasi) navigasi.style.display = "flex"
    else navigasi.style.display = "none"
})

let orderBtn = document.getElementById("order-btn")
let orderDisplay = document.getElementById("order")
let closeOrderBtn = document.getElementById("btn-close-order")

orderBtn.addEventListener("click", () => {
    orderDisplay.style.display = "flex"
})

closeOrderBtn.addEventListener("click", () => {
    orderDisplay.style.display = "none"
})

let sliderBanner = document.getElementById("slider-banner")
let bannerImage = document.getElementById("banner-image")
let btnSliderPrevious = document.getElementById("btn-slider-previous")
let btnSliderNext = document.getElementById("btn-slider-next")
const bannerImages = [
    "assets/2112.i301.031.S.m004.c13.UI and UX designers concepts isometric composition.jpg",
    "assets/7065c1d722ba56108c9b5c5612014d71.jpg",
    "assets/—Pngtree—web development concept flat design_5363510.png"
]
let currentImage = 0

window.addEventListener("load", () => {
    bannerImage.setAttribute("src", bannerImages[currentImage])
})

btnSliderNext.addEventListener("click", () => {
    if(currentImage == bannerImages.length -1) currentImage = 0
    else currentImage++
    bannerImage.setAttribute("src", bannerImages[currentImage])
    console.log(currentImage)
})

btnSliderPrevious.addEventListener("click", () => {
    if(currentImage == 0) currentImage = bannerImages.length-1
    else currentImage--
    bannerImage.setAttribute("src", bannerImages[currentImage])
    console.log(currentImage)
})

