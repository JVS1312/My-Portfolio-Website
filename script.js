const menuIcons = document.querySelector('#menu-icon');
const navlinks = document.querySelector('.nav_links');

const sections = document.querySelectorAll('section')
menuIcons.onclick = () =>{
    navlinks.classList.toggle('active')
}
const btnGroup = document.querySelector('.btn-group');

btnGroup.addEventListener('mouseover', () => {
 btnGroup.style.backgroundColor = 'none';
});

btnGroup.addEventListener('mouseout', () => {
 btnGroup.style.backgroundColor = null;
});