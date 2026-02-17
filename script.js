tsParticles.load("tsparticles", {
    background: { color: "transparent" },
    particles: {
        number: { value: 50 },
        color: { value: "#0077ff" },
        shape: { type: "circle" },
        opacity: { value: 0.3 },
        size: { value: 3 },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: { default: "bounce" }
        },
        links: {
            enable: true,
            color: "#0077ff",
            distance: 150,
            opacity: 0.2,
            width: 1
        }
    }
});

// Navbar scroll animation
window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

// Fade-in effect
const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

faders.forEach(fader => observer.observe(fader));

// Skills Animation
const skillSection = document.getElementById("skills");

const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector(".java").style.width = "85%";
            document.querySelector(".html").style.width = "90%";
            document.querySelector(".css").style.width = "85%";
            document.querySelector(".sql").style.width = "80%";
        }
    });
}, { threshold: 0.5 });

skillObserver.observe(skillSection);

// Dark Mode Toggle
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }
});
