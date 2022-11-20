let images = document.querySelector('.images')
let image = document.querySelector('.image')
let n = 6;
for (let i = 1; i < n; i++) {
    var lis = document.createElement('div')
    lis.innerHTML = `<img class="img" src='images/life/img (` + i + `).png'>`
    images.appendChild(lis)
}
let img = document.querySelectorAll('.img')
for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", () => {
        image.style.display = "flex"
        let index = i + 1
        image.innerHTML = "<img src='images/life/img (" + index + ").png'>"
        document.body.style.overflow = 'hidden'; //禁止页面滑动
    })
}
image.addEventListener('click', () => {
    image.style.display = "none"
    document.body.style.overflow = 'auto'; //出现滚动条
})

