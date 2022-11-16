
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
  searchIcon.classList.remove('fa-times');
  searchForm.classList.remove('active');
}

let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('.search-form');



window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}


let list = document.querySelector(".list_img");
let box = document.querySelector(".box_img");

list.innerHTML += list.innerHTML;

let left = 0;

let timer;

function move() {
  clearInterval(timer)

  timer = setInterval(function () {

    left -= 5;
    if (left === -(950*11+25*10)){
      left = 0
    }
    list.style.left = left + 'px'
  },20)
}


move()
box.onmouseenter = function () {
  clearInterval(timer);
}
box.onmouseleave = function () {
  move();
}
