const carouselImage = document.querySelectorAll(".carousel_image");
const btns = [document.querySelectorAll(".btn")]
k = 0;
btns[k].classList.add("active")
setInterval(function () {
    for (let i = 0; i < carouselImage.length; i++) {
        carouselImage[i].classList.remove("active");
        btns[i].classList.remove("active");
    }
    if (k < carouselImage.length) {
        carouselImage[k].classList.add("active");
        btns[k].classList.add("active");
        k++;
    }
    else if (k == carouselImage.length) {
        carouselImage[0].classList.add("active");
        k = 1;
    }
    else if (k > carouselImage.length) {
        k = 1;
    }

}, 2000);


btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        for (let i = 0; i < btns.length; i++) {
            btns[i].classList.remove("active");
            carouselImage[i].classList.remove("active");
            setTimeout(() => {
            btn.classList.remove("active");
        }, 3000)
        }
        console.log(i)
        btn.classList.add("active");
        carouselImage[i].classList.add("active");
    })
})