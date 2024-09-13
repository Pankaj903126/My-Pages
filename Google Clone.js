
        function toggleNavbar() {
            var navbar = document.getElementById('navbar');
            var menuIcon = document.getElementById('menu-icon');
            var title = document.querySelector('.header .title');
            if (navbar.style.display === 'flex') {
                navbar.style.display = 'none';
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
                title.textContent = 'My Personal Webpage';
            } else {
                navbar.style.display = 'flex';
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
                title.textContent = 'MPW';
            }
        }
    
