// ===== Page Loader - Sab se pehle hide logic =====
function hideLoader() {
    const loader = document.getElementById('pageLoader');
    if (loader) {
        loader.classList.add('hidden');
    }
}

// Turant try karein - agar DOM ready ho
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(hideLoader, 1000);
    });
} else {
    setTimeout(hideLoader, 800);
}

// Fallback - 2.5 second ke baad force hide
setTimeout(hideLoader, 2500);

// ===== Baqi code DOMContentLoaded ke andar =====
document.addEventListener('DOMContentLoaded', function() {

// Form aur submit event listener setup
document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Page refresh hone se rokne ke liye

    // Input fields se values get karna
    const name = document.getElementById('studentName').value.trim();
    const studentClass = document.getElementById('studentClass').value;
    const phone = document.getElementById('studentPhone').value.trim();

    // Phone validation - sirf valid number par WhatsApp open karein
    if (phone.length < 10) {
        alert('Please enter a valid phone number (at least 10 digits)');
        return;
    }

    // Apna WhatsApp Number yahan daalein (Country Code 92 ke saath, bina + sign ke)
    const academyNumber = "9233131213"; 

    // Formatted WhatsApp Message
    const message = `Hello Ittehad Academy!%0A%0A` +
                    `*New Admission Inquiry*%0A` +
                    `*Name:* ${encodeURIComponent(name)}%0A` +
                    `*Class:* ${encodeURIComponent(studentClass)}%0A` +
                    `*Phone:* ${encodeURIComponent(phone)}`;

    // Direct WhatsApp Web / App link open karna
    const whatsappURL = `https://wa.me/${academyNumber}?text=${message}`;

    // New tab mein WhatsApp open karein
    window.open(whatsappURL, '_blank');
});

// ===== Scroll to Top Button =====
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Scroll par button show/hide
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

// Click par smooth scroll to top
scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== Smooth Scrolling for Nav Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Stats Counter Animation =====
const statNumbers = document.querySelectorAll('.stat-number');
let statsAnimated = false;

function animateStats() {
    if (statsAnimated) return;
    
    const statsSection = document.querySelector('.stats');
    const sectionTop = statsSection.offsetTop;
    const scrollPos = window.pageYOffset + window.innerHeight;
    
    if (scrollPos > sectionTop + 100) {
        statsAnimated = true;
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const step = target / (duration / 16);
            let current = 0;
            
            const counter = setInterval(() => {
                current += step;
                if (current >= target) {
                    stat.textContent = target + '+';
                    clearInterval(counter);
                } else {
                    stat.textContent = Math.floor(current);
                }
            }, 16);
        });
    }
}

window.addEventListener('scroll', animateStats);

// ===== Phone Number Validation =====
document.getElementById('studentPhone').addEventListener('input', function(e) {
    // Sirf numbers allow karein
    this.value = this.value.replace(/[^0-9]/g, '');
    
    // 11 digits se zyada allow nahi
    if (this.value.length > 11) {
        this.value = this.value.slice(0, 11);
    }
});

// Form submit par phone length check
document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    const phone = document.getElementById('studentPhone').value.trim();
    if (phone.length < 10) {
        e.preventDefault();
        alert('Please enter a valid phone number (at least 10 digits)');
        return;
    }
});

// ===== Page Loader - Page load hone par hide karein =====
function hideLoader() {
    const loader = document.getElementById('pageLoader');
    if (loader && !loader.classList.contains('hidden')) {
        loader.classList.add('hidden');
    }
}

// Multiple events par try karein - jo pehle fire ho
window.addEventListener('load', function() {
    setTimeout(hideLoader, 800);
});

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(hideLoader, 1200);
});

// Fallback - 3 second ke baad force hide (kabhi na chhoote)
setTimeout(hideLoader, 3000);

// Agar page already loaded ho jaye (cache se)
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(hideLoader, 800);
}

// ===== Header Scroll Effect =====
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===== Scroll Reveal Animations =====
// Saare sections aur cards ko reveal class add karein
const revealElements = document.querySelectorAll('.hero, .courses h2, .card, .why-us h2, .feature-card, .stats, .contact h2, .admission-section, .footer-content, .footer-bottom');

revealElements.forEach(el => {
    el.classList.add('reveal');
});

// Feature cards ko left/right animation dein
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach((card, index) => {
    card.classList.remove('reveal');
    if (index % 2 === 0) {
        card.classList.add('reveal-left');
    } else {
        card.classList.add('reveal-right');
    }
});

// Course cards ko scale animation dein
const courseCards = document.querySelectorAll('.card');
courseCards.forEach(card => {
    card.classList.remove('reveal');
    card.classList.add('reveal-scale');
});

// Intersection Observer se scroll par reveal karein
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Ek baar reveal ho jane par band karein
        }
    });
}, observerOptions);

// Saare reveal elements ko observe karein
document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
    observer.observe(el);
});

// ===== Hero Section Parallax Effect =====
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        const heroHeight = hero.offsetHeight;
        if (scrolled < heroHeight + 200) {
            hero.style.backgroundPositionY = scrolled * 0.3 + 'px';
        }
    }
});

// ===== Smooth Counter Animation Enhancement =====
// Stats section ke liye extra glow effect on scroll
const statsSection = document.querySelector('.stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statsSection.style.animation = 'pulse 2s ease-in-out';
            }
        });
    }, { threshold: 0.3 });
    
    statsObserver.observe(statsSection);
}

}); // DOMContentLoaded end
