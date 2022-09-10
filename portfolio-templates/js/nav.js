const navItems = document.querySelector('.nav-items');
const burger = document.querySelector('.burger');

function togleNav() {
    navItems.classList.toggle('mobile-navigation');
}


const l1 = document.querySelector('#l1');
const l2 = document.querySelector('#l2');
const l3 = document.querySelector('#l3');
let menuOpen = false

burger.addEventListener('click', function () {
    l1.classList.toggle('line1')
    l2.classList.toggle('line2')
    l3.classList.toggle('line3')
})



const headTop = document.getElementById("headTop");
        const navbar = document.getElementById("nav");
        window.addEventListener("scroll", () => {
            if (window.pageYOffset < 100) {
                headTop.style.backgroundColor = "rgba(37, 37, 37, 0.3)";
                headTop.style.height = "80px";
            }
            else {
                headTop.style.backgroundColor = "rgba(37, 37, 37, 1)";
                headTop.style.height = "60px";
            }
        })