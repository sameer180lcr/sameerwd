// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards and steps
document.querySelectorAll('.feature-card, .step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Navbar background on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.background = 'rgba(15, 15, 30, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 15, 30, 0.8)';
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Create browser mockup screenshot placeholder
const browserContent = document.querySelector('.browser-content');
if (browserContent && !browserContent.querySelector('.screenshot').src.includes('http')) {
    // Create a canvas gradient as placeholder
    const canvas = document.createElement('canvas');
    canvas.width = 1600;
    canvas.height = 900;
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = '#0F0F1E';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Gradient overlay
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, 'rgba(139, 92, 246, 0.1)');
    gradient.addColorStop(1, 'rgba(236, 72, 153, 0.1)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Text
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 48px Inter';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('AI Browser Interface', canvas.width / 2, canvas.height / 2);

    // Convert to image
    const img = browserContent.querySelector('.screenshot');
    img.src = canvas.toDataURL();
}

// Download button tracking
document.querySelectorAll('.btn-download').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Track download event (you can integrate analytics here)
        console.log('Download initiated');

        // Check if file exists, show message if not
        const hasFile = btn.getAttribute('href') !== '#';
        if (!hasFile) {
            e.preventDefault();
            alert('Build the app first using: npm run build\nThen place the installer in website/downloads/');
        }
    });
});

// Add parallax effect to gradient blurs
window.addEventListener('mousemove', (e) => {
    const blurs = document.querySelectorAll('.gradient-blur');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    blurs.forEach((blur, index) => {
        const speed = (index + 1) * 10;
        const xOffset = (x - 0.5) * speed;
        const yOffset = (y - 0.5) * speed;
        blur.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
});

// Copy command on click
document.querySelectorAll('.step-content code').forEach(code => {
    code.style.cursor = 'pointer';
    code.title = 'Click to copy';

    code.addEventListener('click', () => {
        const text = code.textContent;
        navigator.clipboard.writeText(text).then(() => {
            const originalText = code.textContent;
            code.textContent = '✓ Copied!';
            code.style.color = '#10B981';

            setTimeout(() => {
                code.textContent = originalText;
                code.style.color = '';
            }, 2000);
        });
    });
});
