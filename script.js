const text = "We Build Digital Solutions for Your Business";
let index = 0;

function typingEffect() {
    document.getElementById("typing").textContent = text.slice(0, index);
    index++;
    if (index <= text.length) {
        setTimeout(typingEffect, 80);
    }
}
typingEffect();

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const sectionId = this.getAttribute("href");
        document.querySelector(sectionId).scrollIntoView({ behavior: "smooth" });
    });
});


document.getElementById("themeBtn").addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        this.textContent = "Light Mode";
    } else {
        this.textContent = "Dark Mode";
    }
});


function learnMore() {
    alert("We provide high-quality Web, App & DevOps services to grow your business!");
}

function submitForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        alert("Please fill all fields before submitting.");
        return;
    }

    alert(`Thank you ${name}! We will contact you soon.`);
}
