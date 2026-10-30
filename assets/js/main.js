document.addEventListener('DOMContentLoaded', function() {

    // MOBILE NAVIGATION
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (toggle && nav) {

        toggle.addEventListener('click', function() {

            nav.classList.toggle('open');

            toggle.textContent =
                nav.classList.contains('open') ? '×' : '☰';

        });

        nav.querySelectorAll('a').forEach(function(link) {

            link.addEventListener('click', function() {

                nav.classList.remove('open');
                toggle.textContent = '☰';

            });

        });
    }


    // SCROLL ANIMATIONS
    if ('IntersectionObserver' in window) {

        const observer = new IntersectionObserver(
            function(entries) {

                entries.forEach(function(entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add('visible');

                        observer.unobserve(entry.target);

                    }

                });

            }, { threshold: 0.12 }
        );

        document.querySelectorAll(
            '.reveal, .card, .service-row, .training-card, .industry'
        ).forEach(function(element) {

            element.classList.add('reveal');
            observer.observe(element);

        });

    } else {

        document.querySelectorAll('.reveal').forEach(function(element) {
            element.classList.add('visible');
        });

    }


    // ENQUIRY FORM
    // IMPORTANT:
    // Do not use preventDefault().
    // Do not use fetch().
    // Do not use mailto().
    // Let the browser submit the form directly to FormSubmit.

    const form = document.getElementById('inquiryForm');

    if (form) {

        form.addEventListener('submit', function() {

            const button = document.getElementById('submitBtn');
            const message = document.getElementById('formMessage');

            if (button && form.checkValidity()) {

                button.disabled = true;
                button.textContent = 'Submitting Enquiry...';

            }

            if (message) {

                message.textContent =
                    'Please wait while your enquiry is submitted.';

            }

        });

    }

});