// Smooth scroll for navigation links
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Create Back-to-Top Button
    const backToTopBtn = document.createElement("button");
    backToTopBtn.innerText = "↑";
    backToTopBtn.id = "backToTop";
    document.body.appendChild(backToTopBtn);

    // Style it (can also be done in CSS)
    backToTopBtn.style.position = "fixed";
    backToTopBtn.style.bottom = "30px";
    backToTopBtn.style.right = "30px";
    backToTopBtn.style.padding = "10px 15px";
    backToTopBtn.style.fontSize = "20px";
    backToTopBtn.style.borderRadius = "50%";
    backToTopBtn.style.border = "none";
    backToTopBtn.style.backgroundColor = "#1e3a5f";
    backToTopBtn.style.color = "white";
    backToTopBtn.style.cursor = "pointer";
    backToTopBtn.style.display = "none";
    backToTopBtn.style.zIndex = "999";

    // Show/Hide button on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    // Scroll to top on button click
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
