


const buttons = document.querySelectorAll('.sort li');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        buttons.forEach(btn => {
            if (btn !== button) {
                btn.classList.add('blur');
            }
        });
    });

    button.addEventListener('mouseout', () => {
        buttons.forEach(btn => {
            btn.classList.remove('blur');
        });
    });
});


const boxes = document.querySelectorAll('[class^="features-box"]');

boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        boxes.forEach(b => {
            if (b !== box) {
                b.classList.add('blur');
            }
        });
    });

    box.addEventListener('mouseout', () => {
        boxes.forEach(b => {
            b.classList.remove('blur');
        });
    });
});


document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var navbar = document.querySelector('.navbar');

    if (scrollPosition > 100) {
        navbar.style.backgroundColor = '#F7F8F9';
        navbar.style.transition = 'background-color 0.3s ease';  
    } else {
        navbar.style.backgroundColor = '#fff';
        navbar.style.transition = 'background-color 0.3s ease';
    }
});
function toggleMenu() {
    const menuToggle = document.querySelectorAll('.menuToggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.forEach(toggle => toggle.classList.toggle('active'));

    if (mobileMenu.style.display === "none" || mobileMenu.style.display === "") {
        mobileMenu.style.display = "flex";
        setTimeout(() => {
            mobileMenu.style.transform = "translateX(0)";
        }, 10);  
    } else {
        mobileMenu.style.transform = "translateX(-100%) ";
        setTimeout(() => {
            mobileMenu.style.display = "none";
        }, 300);  
    }
}


function handleScrollAnimation(footerBoxes, className) {
    const trigBottom = (window.innerHeight / 5) * 4;

    footerBoxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < trigBottom) {
            box.classList.add(className);
        } else {
            box.classList.remove(className);
        }
    });
}

const features1 = document.querySelectorAll(".features-box-1");
const features2 = document.querySelectorAll(".features-box-2");
const features3 = document.querySelectorAll(".features-box-3");

const featuresText2 = document.querySelectorAll(".box-1-inner");
const featuresImg2 = document.querySelectorAll(".features-3-container-img");

const featuresText3 = document.querySelectorAll(".features-3-box-2");

const macbookImgs = document.querySelectorAll(".macbook-imgs");

const frame = document.querySelectorAll(".frame");
const camera = document.querySelectorAll(".camera");
const touchpad = document.querySelectorAll(".touchpad");
const artwork = document.querySelectorAll(".artwork");
const shape = document.querySelectorAll(".shape");
const elipse = document.querySelectorAll(".ellipse");
const shape2 = document.querySelectorAll(".shape-2");

const footer = document.querySelectorAll(".footer-sort");

function checkBoxAnimation() {
    if (window.innerWidth > 768) {
        handleScrollAnimation(features1, "animation-chap");
        handleScrollAnimation(features2, "animation-orta");
        handleScrollAnimation(features3, "animation-ong");
        handleScrollAnimation(featuresText2, "animation-chap");
        handleScrollAnimation(featuresImg2, "animation-orta");
        handleScrollAnimation(featuresText3, "animation-ong");
        handleScrollAnimation(macbookImgs, "animation-ong");
        handleScrollAnimation(frame, "animation-ong");
        handleScrollAnimation(camera, "animation-ong");
        handleScrollAnimation(touchpad, "animation-ong");
        handleScrollAnimation(artwork, "animation-chap");
        handleScrollAnimation(shape, "animation-chap");
        handleScrollAnimation(elipse, "animation-chap");
        handleScrollAnimation(shape2, "animation-chap");
        handleScrollAnimation(footer, "animation-orta");
    }
}

window.addEventListener('scroll', checkBoxAnimation);
window.addEventListener('resize', checkBoxAnimation);  

checkBoxAnimation();




document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.auto-number');

    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'), 10);
        const duration = 2000; 
        const stepTime = Math.abs(Math.floor(duration / target));
        
        const initialText = counter.textContent;
        const prefix = initialText[0] === '$' || initialText[0] === '+' ? initialText[0] : '';
        const startValue = prefix ? 0 : parseInt(initialText, 10);
        
        let current = startValue;
        const increment = () => {
            current += 1;
            counter.textContent = prefix + current.toLocaleString();
            if (current < target) {
                setTimeout(increment, stepTime);
            }
        };
        increment();
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });
});


