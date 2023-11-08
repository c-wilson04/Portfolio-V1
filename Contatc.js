window.onload = function (){
let bgMenuBtn = document.querySelector('.burger-menu-btn') 
let bgMenu = document.querySelector('.burger-menu') 
let isBurgerOpen = false;
// if(document.querySelector('.burger-menu-btn')){
    bgMenuBtn.onclick = function () {
    if (!isBurgerOpen) {
        bgMenu.style.display = "block";
        bgMenuBtn.style.color = "orange";
        isBurgerOpen = true;
    }
    else if (isBurgerOpen) {
        bgMenu.style.display = "none";
        bgMenuBtn.style.color = "black";
        isBurgerOpen = false;
    }
}
// }
let click1 = document.querySelectorAll('.click')
click1.forEach(element => {
     element.onclick = function () {
        bgMenu.style.display = "none";
        bgMenuBtn.style.color = "black"
     }
});
}