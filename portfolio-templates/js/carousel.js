const carouselImage = document.querySelectorAll(".carousel_image");
const btns = document.querySelectorAll(".btn")

const intervalFunction = function (time=10000) {
k = 1;
setInterval(function () {
    for (let i = 0; i < carouselImage.length; i++) {
        carouselImage[i].classList.remove("active");
    }
    if (k < carouselImage.length) {
        carouselImage[k].classList.add("active");
        k++;
    }
    else if (k == carouselImage.length) {
        carouselImage[0].classList.add("active");
        k = 1;
    }
    else if (k > carouselImage.length) {
        k = 1;
    }

}, time);   
}

intervalFunction()


btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        for (let i = 0; i < btns.length; i++) {
            btns[i].classList.remove("active");
            carouselImage[i].classList.remove("active");
            setTimeout(() => {
            btn.classList.remove("active");
        }, 10000)
        }
        btn.classList.add("active");
        carouselImage[i].classList.add("active");
    })
})