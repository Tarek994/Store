let image = document.querySelector('.image');
window.onscroll = function(){
    let value = scrollY;
    image.style.left = value + 'px';
}
