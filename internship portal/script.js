document.addEventListener('DOMContentLoaded', function() {
    // Initialize Scrollspy from Bootstrap
    const mainNav = document.body.querySelector('#appNavbar');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#navbarNav',
            offset: 75, // Match this to the scroll-padding-top in CSS
        });
    }

    // Optional: More robust smooth scroll for all internal links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.hash !== "") {
                e.preventDefault();
                const hash = this.hash;
                const targetElement = document.querySelector(hash);
                
                if (targetElement) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const elementPosition = targetElement.offsetTop;
                    
                    window.scrollTo({
                        top: elementPosition - navbarHeight,
                        behavior: 'smooth'
                    });

                    // For mobile: close the navbar after clicking a link
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        navbarToggler.click();
                    }
                }
            }
        });
    });
});