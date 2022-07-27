// Navbar

window.addEventListener('scroll', function () {
    let header = document.querySelector('.nav');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})

// Button Naik

let naik = document.querySelector(".naik");
let home = document.querySelector(".home");

let homeoption = {
    rootMargin: "-200px 0px 0px 0px"
};

let homeobserver = new IntersectionObserver(function (entries, homeobserver) {
        entries.forEach(entry => {
            console.log(entry.target);
            if (!entry.isIntersecting) {
                naik.style.display = "block";
            } else {
                naik.style.display = "none";
            }
        });
    },
    homeoption);

homeobserver.observe(home);

// Dropdown

function show1() {
    document.getElementById("myDropdown1").classList.toggle("show");
}
function show2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}
function show3() {
    document.getElementById("myDropdown3").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
    }
}

