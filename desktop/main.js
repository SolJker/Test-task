document.getElementById('basket_svg').onmouseenter = function(){
    var menu = document.getElementById('menu')

    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
    }
    else{
        menu.classList.add('hidden')
    }
}

var warning = document.getElementById('warning')
var warning2 = document.getElementById('warning2')
var input = document.getElementById('input')
var input2 = document.getElementById('input2')
var black = document.getElementById('black')
var app = document.getElementById('application') 

document.getElementById('submit').onclick = function(){
    if (input.value == '' || input2.value == ''){
        warning.classList.remove('hidden')
    }
    else{
        black.classList.remove('hidden')
        app.classList.remove('hidden')
        input.value = ''
        input2.value = ''
        warning.classList.add('hidden')
    }
}

document.getElementById('cross').onclick = function(){
    black.classList.add('hidden')
    app.classList.add('hidden')
}

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

document.getElementsByClassName('swiper-slide').classList.add('hidden')

