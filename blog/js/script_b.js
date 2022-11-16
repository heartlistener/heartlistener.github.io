
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
let left_img = document.querySelector("#left_img");
let right_img = document.querySelector("#right_img");
list.innerHTML += list.innerHTML;

let left = 0;

let n =34;
let speed = 2.5;

let timer;

function move() {
  clearInterval(timer)

  timer = setInterval(function () {

    left -= speed;
    if (left === -(950*n+25*(n-1))){
      left = 0
    }
    list.style.left = left + 'px'
  },10)
}

function speedup(){
  speed += 0.3;
}
function speeddown(){
  speed -= 0.3;
}

move()
box.onmouseenter = function () {
  clearInterval(timer);
}
box.onmouseleave = function () {
  move();
}


left_img.addEventListener("click",speeddown);
right_img.addEventListener("click",speedup);