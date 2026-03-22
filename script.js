// ===== ULTRA HD BLACK, GOLD & SILVER THEME =====

document.addEventListener('DOMContentLoaded', function() {
    initAOS();
    initTypingEffect();
    initCounters();
    initMobileMenu();
    initSmoothScroll();
    initActiveNavigation();
    initDownloadCV();
    initFormValidation();
    initImageFix();
    initParallax();
    init3DCubes();
});

function initAOS() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        delay: 100,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    });
}

function initTypingEffect() {
    const typedElement = document.querySelector('.typed-text');
    if (!typedElement) return;
    
    const words = ['Java Developer', 'Data Analyst', 'NCC Cadet', 'Problem Solver'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typedElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }
    
    type();
}

function initCounters() {
    const counters = document.querySelectorAll('.stat-number, .ncc-number');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target') || counter.textContent);
                let count = 0;
                
                function updateCount() {
                    const increment = target / 50;
                    
                    if (count < target) {
                        count += increment;
                        counter.textContent = Math.ceil(count);
                        requestAnimationFrame(updateCount);
                    } else {
                        counter.textContent = target + '+';
                    }
                }
                
                updateCount();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(function(counter) {
        observer.observe(counter);
    });
}

function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!navToggle || !navMenu) return;
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        const icon = navToggle.querySelector('i');
        
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            document.body.style.overflow = 'hidden';
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            document.body.style.overflow = 'auto';
        }
    });
    
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                document.body.style.overflow = 'auto';
            }
        }
    });
    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                document.body.style.overflow = 'auto';
            }
        }
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                const navMenu = document.querySelector('.nav-menu');
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    const navToggle = document.querySelector('.nav-toggle i');
                    if (navToggle) {
                        navToggle.classList.remove('fa-times');
                        navToggle.classList.add('fa-bars');
                    }
                    document.body.style.overflow = 'auto';
                }
            }
        });
    });
}

function initActiveNavigation() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.pageYOffset + 100;
        
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(function(link) {
            link.classList.remove('active');
            const href = link.getAttribute('href')?.substring(1);
            if (href === current) {
                link.classList.add('active');
            }
        });
    });
}

function initDownloadCV() {
    const downloadBtn = document.getElementById('downloadCV');
    if (!downloadBtn) return;
    
    downloadBtn.addEventListener('click', function() {
        const cvContent = `ARMAAN SHARMA - CV
═══════════════════════════════════════
NCC Cadet | Java Developer | Data Analyst

CONTACT
═══════
• LinkedIn:  /in/armaan-sharma1008
• GitHub:    /armaan2396
• Email:     armaansharma@email.com
• Location:  Punjab, India

EDUCATION
═════════
• B.Tech Computer Science - LPU (2023-2027) - CGPA: 6.08
• Senior Secondary - Kangra, HP (2020-2021) - 80%
• High School - Kangra, HP (2018-2019) - 65%

TECHNICAL SKILLS
════════════════
• Languages: Java, Python, C, C++, JavaScript, SQL
• Data Science: NumPy, Pandas, Matplotlib, Tableau
• DSA: Arrays, Linked Lists, Stacks, Queues, Trees, Graphs
• Tools: Git, GitHub, VS Code, Eclipse, MySQL, Postman

NCC JOURNEY
═══════════
• Army Attachment Camp - February 2025
• NCC 'B' Certificate - March 2025
• NCC 'C' Certificate - March 2026

PROJECTS
════════
• Virtual Classroom Platform - Java, MySQL, REST APIs
• Smart Parking System - Java, DSA, Priority Queue
• Library Tracking System - Java, Linked Lists, Queues
• Drop of Hope - HTML5, CSS3, Chart.js

CERTIFICATIONS
══════════════
• Privacy & Security in Social Media - NPTEL
• Bits and Bytes Certificate - Coursera
• DSA with Java - Cipher School
• Data Analytics Simulation - Deloitte (Forage)`;
        
        const blob = new Blob([cvContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Armaan_Sharma_CV.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        
        showNotification('CV Downloaded!');
    });
}

function initFormValidation() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const inputs = form.querySelectorAll('input, textarea');
        let isValid = true;
        
        inputs.forEach(function(input) {
            if (!input.value.trim()) {
                isValid = false;
                showError(input, 'This field is required');
            } else if (input.type === 'email' && !isValidEmail(input.value)) {
                isValid = false;
                showError(input, 'Invalid email');
            } else {
                removeError(input);
            }
        });
        
        if (isValid) {
            createConfetti();
            showNotification('Message sent successfully!');
            form.reset();
        }
    });
    
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    function showError(input, message) {
        input.style.borderColor = '#ff3b3b';
        const error = document.createElement('div');
        error.className = 'error-message';
        error.style.color = '#ff3b3b';
        error.style.fontSize = '0.9rem';
        error.style.marginTop = '0.5rem';
        error.textContent = message;
        
        const existingError = input.parentElement.querySelector('.error-message');
        if (existingError) existingError.remove();
        
        input.parentElement.appendChild(error);
    }
    
    function removeError(input) {
        input.style.borderColor = '';
        const error = input.parentElement.querySelector('.error-message');
        if (error) error.remove();
    }
}

// IMAGE FIX FUNCTION
function initImageFix() {
    const profileImg = document.querySelector('.profile-img');
    if (!profileImg) return;
    
    console.log('Checking for image at: assets/profile.jpg');
    
    // Force image reload with timestamp to prevent caching
    const img = new Image();
    img.onload = function() {
        console.log('Image loaded successfully!');
        profileImg.src = img.src;
        profileImg.style.opacity = '1';
        profileImg.classList.add('loaded');
    };
    
    img.onerror = function() {
        console.log('Image not found at assets/profile.jpg');
        // Try with absolute path
        profileImg.src = 'assets/profile.jpg';
        profileImg.onerror = function() {
            console.log('Using fallback image');
            profileImg.src = 'https://randomuser.me/api/portraits/men/32.jpg';
        };
    };
    
    img.src = 'assets/profile.jpg';
    
    // Add loading animation
    profileImg.style.opacity = '0';
    profileImg.style.transition = 'opacity 1s';
}

function initParallax() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const cubes = document.querySelectorAll('.cube');
        
        cubes.forEach(function(cube, index) {
            const speed = 0.1 + (index * 0.05);
            cube.style.transform = `translateY(${scrolled * speed}px) rotateX(${scrolled * 0.1}deg) rotateY(${scrolled * 0.1}deg)`;
        });
    });
}

function init3DCubes() {
    const cubes = document.querySelectorAll('.cube');
    
    cubes.forEach(function(cube) {
        cube.addEventListener('mouseover', function() {
            this.style.animation = 'none';
            this.style.transform = 'rotateX(180deg) rotateY(180deg) scale(1.5)';
        });
        
        cube.addEventListener('mouseout', function() {
            this.style.animation = '';
            this.style.transform = '';
        });
    });
}

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            left: ${Math.random() * 100}%;
            top: -10px;
            width: 10px;
            height: 10px;
            background: ${Math.random() > 0.5 ? '#FFD700' : '#C0C0C0'};
            border-radius: 50%;
            z-index: 9999;
            pointer-events: none;
            box-shadow: 0 0 20px currentColor;
            animation: confettiFall ${3 + Math.random() * 2}s linear forwards;
        `;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Add confetti animation
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(${window.innerHeight + 100}px) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

function showNotification(message) {
    const notification = document.createElement('div');
    
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #000000, #1a1a1a);
        color: #FFD700;
        padding: 1rem 2rem;
        border-radius: 50px;
        font-size: 1rem;
        border: 2px solid #FFD700;
        box-shadow: 0 0 30px #FFD700;
        z-index: 9999;
        backdrop-filter: blur(10px);
        animation: slideInRight 0.3s ease;
        font-weight: 600;
        cursor: pointer;
    `;
    
    notification.textContent = `✨ ${message}`;
    
    notification.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Progress Bar
window.addEventListener('scroll', function() {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    let progressBar = document.querySelector('.progress-bar');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, #FFD700, #C0C0C0);
            z-index: 1001;
            transition: width 0.1s;
            box-shadow: 0 0 20px #FFD700;
        `;
        document.body.appendChild(progressBar);
    }
    progressBar.style.width = scrolled + '%';
});

// Keyboard Shortcuts
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'h') {
        e.preventDefault();
        document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
        showNotification('🏠 Home');
    }
    
    if (e.ctrlKey && e.key === 'c') {
        e.preventDefault();
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
        showNotification('📧 Contact Section');
    }
    
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const navToggle = document.querySelector('.nav-toggle i');
        
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (navToggle) {
                navToggle.classList.remove('fa-times');
                navToggle.classList.add('fa-bars');
            }
            document.body.style.overflow = 'auto';
        }
    }
});

// Animation styles
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
    
    .loaded {
        animation: imageReveal 1s ease;
    }
    
    @keyframes imageReveal {
        from {
            opacity: 0;
            transform: scale(0.95);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;

document.head.appendChild(animationStyle);

// Welcome message
window.addEventListener('load', function() {
    setTimeout(() => {
        showNotification('⚡ Hover over cards to see hidden games!');
    }, 1500);
});