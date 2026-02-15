document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });

                // Update active nav link
                document.querySelectorAll('.nav a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });

    // Form submission handler
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }

    // Animate project cards on scroll
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (cardTop < screenHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });

    // Initialize animations
    const animateOnScroll = () => {
        const hero = document.querySelector('.hero');
        const about = document.querySelector('.about');
        const projects = document.querySelector('.projects');
        const skills = document.querySelector('.skills');
        const contact = document.querySelector('.contact');

        const heroTop = hero.offsetTop;
        const aboutTop = about.offsetTop;
        const projectsTop = projects.offsetTop;
        const skillsTop = skills.offsetTop;
        const contactTop = contact.offsetTop;

        const windowHeight = window.innerHeight;

        if (window.scrollY >= heroTop - windowHeight) {
            document.querySelector('.hero h2').style.opacity = '1';
            document.querySelector('.hero p').style.opacity = '1';
        }

        if (window.scrollY >= aboutTop - windowHeight) {
            document.querySelector('.about h2').style.opacity = '1';
        }

        if (window.scrollY >= projectsTop - windowHeight) {
            projectCards.forEach(card => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            });
        }

        if (window.scrollY >= skillsTop - windowHeight) {
            document.querySelector('.skills h2').style.opacity = '1';
        }

        if (window.scrollY >= contactTop - windowHeight) {
            document.querySelector('.contact h2').style.opacity = '1';
        }
    };

    window.addEventListener('scroll', animateOnScroll);

    // Initialize animations
    setTimeout(() => {
        document.querySelector('.hero h2').style.opacity = '1';
        document.querySelector('.hero p').style.opacity = '1';
        document.querySelector('.skills h2').style.opacity = '1';
        document.querySelector('.contact h2').style.opacity = '1';
    }, 100);

    // Mobile menu toggle
    window.addEventListener('resize', function() {
        const nav = document.querySelector('.nav');
        if (window.innerWidth <= 768) {
            nav.classList.add('active');
        } else {
            nav.classList.remove('active');
        }
    });
});