// navbar javascript start--------------------------------

let navList = document.querySelector('#navList').querySelectorAll('a');

navList.forEach(element => {
    element.addEventListener("click", function(){
        navList.forEach(nav=>nav.classList.remove("active"))

        this.classList.add("active");
    })
})


window.addEventListener('scroll', function(){
    let navBar = document.querySelector('.navbar');
    navBar.classList.toggle('sticky', window.scrollY > 50);
})

// navbar javascript start--------------------------------


let resume = document.querySelector('.resume_content_btn').querySelectorAll('a');

resume.forEach(element => {
    element.addEventListener("click", function(){
        resume.forEach(nav=>nav.classList.remove("active"))

        this.classList.add("active");
    })
})


let pricing = document.querySelector('.pricing_content_btn').querySelectorAll('a');

pricing.forEach(element => {
    element.addEventListener("click", function(){
        pricing.forEach(nav=>nav.classList.remove("active"))

        this.classList.add("active");
    })
})

// var slide = document.getElementById('slide');
// var arrow = document.getElementById('arrow');
// var arrow2 = document.getElementById('arrow2');

// let x = 0;

// arrow.onclick = function(){
//     x = x - 600;
//     slide.style.top = x + "px"
// }

// navbar javascript end

// let typed = new Typed('.typingText', {
//     strings: ["Developer...", "professional", "coder..."],
//     typeSpeed: 70,
//     backSpeed: 70,
//     loop: true
// }) 

