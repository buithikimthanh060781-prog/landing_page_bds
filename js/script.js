/**
 * ==========================================================================
 * VINHOMES GRAND PARK - INTERACTION SCRIPT
 * Tuân thủ quy chuẩn: Prompt/implementation.md & Prompt/project.md
 * JavaScript thuần (Vanilla JS), không dùng jQuery hay thư viện bên ngoài.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', function () {
    // --- 1. Sticky Navbar on Scroll ---
    const navbar = document.querySelector('.header-navbar');
    const backToTopBtn = document.getElementById('backToTopBtn');

    function handleScroll() {
        const scrollY = window.scrollY;

        // Sticky Navbar styling
        if (navbar) {
            if (scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Back to Top button visibility
        if (backToTopBtn) {
            if (scrollY > 400) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        }

        // Active Navbar Link Update
        updateActiveNavLink();
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial run

    // --- 2. Auto-close Mobile Navbar on Click ---
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });

    // --- 3. Active Nav Link on Scroll Spy ---
    const sections = document.querySelectorAll('section[id]');

    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 120;

        sections.forEach(function (current) {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop;
            const sectionId = current.getAttribute('id');
            const correspondingLink = document.querySelector(`.navbar-nav a[href="#${sectionId}"]`);

            if (correspondingLink) {
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    correspondingLink.classList.add('active');
                }
            }
        });
    }

    // --- 4. Back to Top Click Action ---
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --- 5. Consultation Form Handling ---
    const contactForm = document.getElementById('consultationForm');
    const successModalElement = document.getElementById('consultationSuccessModal');
    let successModal = null;

    if (successModalElement && typeof bootstrap !== 'undefined' && bootstrap.Modal) {
        successModal = new bootstrap.Modal(successModalElement);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const nameInput = document.getElementById('clientName');
            const phoneInput = document.getElementById('clientPhone');
            const emailInput = document.getElementById('clientEmail');
            const productSelect = document.getElementById('productInterest');

            const name = nameInput ? nameInput.value.trim() : '';
            const phone = phoneInput ? phoneInput.value.trim() : '';
            const email = emailInput ? emailInput.value.trim() : '';
            const product = productSelect ? productSelect.value : '';

            // Simple validation
            if (!name || !phone) {
                alert('Vui lòng nhập đầy đủ Họ và tên và Số điện thoại để nhận tư vấn.');
                return;
            }

            // Phone regex check (Vietnam format)
            const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
            if (!phoneRegex.test(phone.replace(/\s+/g, ''))) {
                alert('Vui lòng nhập số điện thoại hợp lệ (10 số).');
                return;
            }

            // Fill info in modal
            const confirmedNameElem = document.getElementById('confirmedClientName');
            const confirmedProductElem = document.getElementById('confirmedProduct');

            if (confirmedNameElem) {
                confirmedNameElem.textContent = name;
            }
            if (confirmedProductElem) {
                confirmedProductElem.textContent = product || 'Tư vấn dự án chung';
            }

            // Show feedback modal or alert
            if (successModal) {
                successModal.show();
            } else {
                alert(`Cảm ơn Quý khách ${name}! Chuyên viên tư vấn Vinhomes Grand Park sẽ liên hệ theo số ${phone} trong thời gian sớm nhất.`);
            }

            // Reset form
            contactForm.reset();
        });
    }
});
