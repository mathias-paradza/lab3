document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("themeToggle");
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });
});

// form function to avoid submitting empty values
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const response = document.getElementById("response");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("nameInput").value.trim();
            const message = document.getElementById("messageInput").value.trim();

            if (name === "" || message === "") {
                alert("Please fill out all fields.");
            } else {
                response.innerText = `Thanks, ${name}. We'll get back to you soon!`;
                form.reset();
            }
            setTimeout(() => response.innerText = "", 5000); // clears after 5 sec
        });
    }
   

});

//api fecth implementation
document.getElementById("loadUsersBtn").addEventListener("click",
    async () => {
    try {
    const res = await
    fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    const userList = document.getElementById("userList");
    userList.innerHTML = "";
    users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = user.name;
    userList.appendChild(li);
    });
    } catch (err) {
    console.error("Failed to load users:", err);
    }
    });
    //FAQ
    document.querySelectorAll(".question").forEach((q) => {
        q.addEventListener("click", () => {
        q.nextElementSibling.classList.toggle("visible");
        });
        3
        });
        //back to top button functionality
        document.addEventListener("DOMContentLoaded", () => {
            const backToTopBtn = document.getElementById("backToTop");
        
            // Show or hide the button
            window.addEventListener("scroll", () => {
                if (window.scrollY > 300) {
                    backToTopBtn.style.display = "block";
                } else {
                    backToTopBtn.style.display = "none";
                }
            });
        
            // Scroll to top when clicked
            backToTopBtn.addEventListener("click", () => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            });
        });
        
