document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animations with Intersection Observer
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => {
        observer.observe(el);
    });

    // Model Toggle Interaction
    const modelCards = document.querySelectorAll('.model-card');
    modelCards.forEach(card => {
        card.addEventListener('click', () => {
            modelCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });

    // Navbar transparency on scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.padding = '1rem 4rem';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.8)';
            navbar.style.padding = '1.5rem 4rem';
        }
    });

    // Simple code animation
    const codeBlock = document.querySelector('.code-anim pre code');
    if (codeBlock) {
        const text = codeBlock.innerText;
        codeBlock.innerText = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                codeBlock.innerText += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }

        // Start typing when visual is visible
        const visualObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                typeWriter();
                visualObserver.disconnect();
            }
        }, { threshold: 0.5 });

        visualObserver.observe(document.querySelector('.feature-visual'));
    }
});
