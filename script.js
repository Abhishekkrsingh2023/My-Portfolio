class TypewriterEffect {
    constructor(element, text, typingSpeed = 100, deleteSpeed = 50, pauseTime = 500) {
        this.element = element;
        this.text = text;
        this.typingSpeed = typingSpeed;
        this.deleteSpeed = deleteSpeed;
        this.pauseTime = pauseTime;
        this.charIndex = 0;
        this.start();
    }

    start() {
        this.type();
    }

    type() {
        if (this.charIndex < this.text.length) {
            this.element.textContent += this.text.charAt(this.charIndex);
            this.charIndex++;
            setTimeout(() => this.type(), this.typingSpeed);
        } else {
            setTimeout(() => this.delete(), this.pauseTime);
        }
    }

    delete() {
        if (this.charIndex > 0) {
            this.element.textContent = this.text.substring(0, this.charIndex - 1);
            this.charIndex--;
            setTimeout(() => this.delete(), this.deleteSpeed);
        } else {
            setTimeout(() => this.type(), this.pauseTime);
        }
    }
}

// Initialize the typewriter effect
document.addEventListener('DOMContentLoaded', function () {
    const element = document.getElementById('typewriter-text');
    new TypewriterEffect(element, "Aspiring Data Scientist,", 100, 50, 500);
});


// Menu toggle functionality
const menuToggle = document.querySelector('.menu-toggle');
const navBar = document.querySelector('.nav-bar');

menuToggle.addEventListener('click', () => {
    navBar.classList.toggle('active');
});

// Close menu when clicking on a nav link (optional, for better UX)
const navLinks = document.querySelectorAll('.nav-bar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navBar.classList.remove('active');
    });
});

// contact form handling
const form = document.querySelector('.contact-form');
console.log(form)

// Need configuration for backend to enable form submission

// const submitUserData = async (data) => {
//     try {
//         const response = await fetch('http://localhost:8000/contact', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         });
//         if (response.ok) {
//             alert('Form submitted successfully!');
//         }
//     } catch (error) {
//         console.error('Error submitting form:', error);
//     }
// };

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const userData = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        message: form.message.value.trim()
    };
    submitUserData(userData);

    form.reset();
});