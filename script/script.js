// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
        const top = window.scrollY;
        if (top >= 400) {
            header.classList.add('navbarDark');
            header.classList.add('shadow');
        } else {
            header.classList.remove('navbarDark');
            header.classList.remove('shadow');
        }
    }
    // collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})