// ===============================
// Mobile Navigation
// ===============================
console.log("Jerwin Tech Solutions JS Loaded!");

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuIcon = document.querySelector(".menu-btn i");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");

    } else {

        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");

    }

});

// Close menu when clicking a menu item

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");

    });

});

// ===============================
// EmailJS Initialization
// ===============================

emailjs.init("rd7-z0btKXLTHw6-D");

// ===============================
// Contact Form
// ===============================

const form = document.getElementById("contact-form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const submitBtn = form.querySelector("button");

        submitBtn.disabled = true;
        submitBtn.innerHTML = "Sending...";

        emailjs.sendForm(
            "service_qmdj0o8",
            "template_xkgo0fd",
            this
        )

        .then(function () {

            alert("✅ Thank you! Your inquiry has been sent successfully.");

            form.reset();

            submitBtn.disabled = false;
            submitBtn.innerHTML = "Send Inquiry";

        })

        .catch(function (error) {

    console.log("========== EMAILJS ERROR ==========");
    console.log(error);

    alert(
        "Status: " + error.status +
        "\n\nText: " + error.text
    );

    submitBtn.disabled = false;
    submitBtn.innerHTML = "Send Inquiry";

});

    });

}
