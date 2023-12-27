var cross = document.getElementById('cross')
var black = document.getElementById('black')
var burger = document.getElementById('burgerOpen')
var menu = document.getElementById('burger')

cross.onclick = function(){
    if (menu.classList.contains('visible')) {
        menu.classList.remove('visible')
        menu.classList.add('hidden')
    }

    cross.classList.add('hidden')

    black.classList.add('hidden')
}

burger.onclick = function(){
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
        menu.classList.add('visible')
    }

    if (cross.classList.contains('hidden')) {
        cross.classList.remove('hidden')
        cross.classList.add('visible')
    }

    if (black.classList.contains('hidden')) {
        black.classList.remove('hidden')
        black.classList.add('visible')
    }
}

var warning = document.getElementById('warning')
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

document.getElementById('cons_cross').onclick = function(){
    black.classList.add('hidden')
    app.classList.add('hidden')
}