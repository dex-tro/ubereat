window.addEventListener('scroll', scrolled)
function scrolled(){
    let navBg = document.querySelector('nav');
    let scroll = this.scrollY;

    if (scroll > 100){
        navBg.classList.add('navBg')
    }

    if (scroll < 100){
        navBg.classList.remove('navBg')
    }
}