let value = 0;
let valueprev = 0;
let btnPlus = document.getElementById('btnplus');
let btnMinus = document.getElementById('btnMinus');
let number = document.getElementById('number');
let delayInMilliseconds = 800;

function plus() {
    value++
    number.classList.add('animate__slideInDown')
    valueprev = value
    number.innerHTML = valueprev
    removeClass()
}
function minus() {
    number.classList.add('animate__slideInUp')
    valueprev = value--
    number.innerHTML = valueprev
    removeClass()
}

function removeClass() {
    setTimeout(function () {
        number.classList.remove('animate__slideInUp')
        number.classList.remove('animate__slideInDown')
    }, delayInMilliseconds)
}
