const burger = document.querySelector('.burger')
const menu = document.querySelector('.left-menu')
const ext = document.querySelector('.ext')
const header_inner = document.querySelector('.header-inner')
const header = document.querySelector('.header')
const modal = document.querySelectorAll('.modal')
const img_slider = document.querySelectorAll('.img-slider')
let pageY = 0
function clearModal(){
    modal.forEach((item)=>{
        item.classList.remove('active')
    })
}
img_slider.forEach((img, index)=>{
    img.addEventListener('mouseover', () =>{
        clearModal()
        modal[index].classList.add('active')
    })
})
 
burger.onclick = function(){
    menu.style.left = '0px';
    header.classList.remove('active')
}
ext.onclick = function(){
    menu.style.left = '-300px';
    burger.style.display = 'inline-block'
    header.classList.add('active')
}

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 100){
        header.classList.add('active')
    }
    else{
        header.classList.remove('active')
    }
    pageY = window.scrollY
})