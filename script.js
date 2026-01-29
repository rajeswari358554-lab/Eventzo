document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });

    // Dynamic Events Loading
    const events = [
        {
            title: "Crystal Grand Wedding",
            category: "Wedding",
            image: "https://0.soompi.io/wp-content/uploads/2025/12/21172640/kim-woo-bin-shin-min-ah-2-.jpg"
        },
        {
            title: "Global Business Forum",
            category: "Corporate",
            image: "https://static01.nyt.com/images/2012/09/03/business/global/03samsung_2/03samsung_2-jumbo.jpg"
        },
        {
            title: "Vibrant Social Gala",
            category: "Social",
            image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Echo Music Festival",
            category: "Concert",
            image: "https://wallpapercave.com/wp/wp8594836.jpg"
        },
        {
            title: "Horizon Tech Launch",
            category: "Corporate",
            image: "https://kongres-magazine.eu/wp-content/uploads/2020/02/korea_mice.png?x36696"
        },
        {
            title: "Moonlight Garden Dinner",
            category: "Social",
            image: "https://images-pw.pixieset.com/elementfield/223862011/fd100-558b3ac7.jpg"
        }
    ];

    const eventGallery = document.getElementById('eventGallery');

    if (eventGallery) {
        events.forEach((event, index) => {
            const eventItem = document.createElement('a');
            eventItem.href = 'booking.html';
            eventItem.className = 'event-item reveal';
            eventItem.style.textDecoration = 'none';
            eventItem.style.color = 'inherit';
            eventItem.style.display = 'block';
            eventItem.style.transitionDelay = `${index * 0.1}s`;
            eventItem.innerHTML = `
                <img src="${event.image}" alt="${event.title}" loading="lazy">
                <div class="event-details">
                    <h3>${event.title}</h3>
                    <p>${event.category}</p>
                </div>
            `;
            eventGallery.appendChild(eventItem);
        });
    }

    // Reveal Animation on Scroll
    const reveal = () => {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', reveal);
    reveal(); // Run once on load

    // Stats Counter Animation
    const stats = document.querySelectorAll('.stat-number');
    const statsSection = document.querySelector('.stats');
    let animated = false;

    const animateStats = () => {
        stats.forEach(stat => {
            const target = +stat.getAttribute('data-target');
            const count = +stat.innerText;
            const increment = target / 100;

            if (count < target) {
                stat.innerText = Math.ceil(count + increment);
                setTimeout(animateStats, 20);
            } else {
                stat.innerText = target + '+';
            }
        });
    };

    // Intersection Observer for stats
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animateStats();
                animated = true;
            }
        });
    }, observerOptions);

    if (statsSection) {
        observer.observe(statsSection);
    }

    // Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'Sending...';
            btn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                alert('Thank you! Your inquiry has been sent successfully. We will contact you shortly.');
                contactForm.reset();
                btn.innerText = originalText;
                btn.disabled = false;
            }, 2000);
        });
    }

    // Smooth Scroll for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
