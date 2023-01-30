let navBar = document.getElementById('navigation') ;
let burgerBar = document.getElementById('burgerbar') ;
burgerBar.addEventListener('click', function() {
    navBar.classList.toggle('navtoggle')
    burgerBar.classList.toggle('activeMenu')
}) ;