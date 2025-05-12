document.addEventListener("DOMContentLoaded", function() {
    const navButtons = document.querySelectorAll(".nav-button");
    const contentPages = document.querySelectorAll(".page");
    const pageSection = document.querySelector(".page-section");
    const mainContent = document.querySelector(".main-content");

    function switchPage(targetId) {
        const currentPage = document.querySelector(".page.active");
        const nextPage = document.getElementById(targetId);
        const isMobile = window.matchMedia("(max-width: 600px)").matches;

        if (currentPage === nextPage || mainContent.classList.contains("animating"))
            return;

        /*Made sure that if the media query is active, the animation is not used when switching pages*/
        if (isMobile) {
            currentPage.classList.remove("active");
            navButtons.forEach(btn => btn.classList.remove("active"));
            document.querySelector(`.nav-button[data-target="${targetId}"]`).classList.add("active");
            nextPage.classList.add("active");
            return;
        }
        mainContent.classList.add("animating");
        pageSection.style.transform = "translateX(-100%)";

        setTimeout(() => {
            currentPage.classList.remove("active");
            navButtons.forEach(btn => btn.classList.remove("active"));
            document.querySelector(`.nav-button[data-target="${targetId}"]`).classList.add("active");
            nextPage.classList.add("active");
            pageSection.style.transform = "translateX(100%)";
            pageSection.style.transform = "translateX(0)";

            //Timeout so you cant navigate to another page while animating
            setTimeout(() => {
                mainContent.classList.remove("animating");
            }, 500);
        }, 500);
    }

    // On button click in navbar it will target the page id and go to that page
    // data-target = id of the page (about for example)
    navButtons.forEach(button => {
        button.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            switchPage(targetId);
        });
    });

    // This is just for the blue "Contact me" button in the profile section
    const profileContactButton = document.querySelector(".profile-section .contact-button");
    profileContactButton.addEventListener("click", function () {
        switchPage("contact");
        pageSection.scrollTo({top: 0, behavior: "smooth"});
    });

    //Created data-link attribute in the project cards to open a new tab with the link to the project
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach(card => {
        card.addEventListener("click", function () {
            const link = this.getAttribute("data-link");
            window.open(link, "_blank");
        });
    });

    // Mailto specific email with filled subject and body when clicking the button
    const mailtoEmail = document.querySelector(".submit-button");
    const subjectInput = document.querySelector(".subject-input");
    const messageInput = document.querySelector(".message-input");

    if (subjectInput && messageInput) {
        subjectInput.addEventListener("input", function () {
            subjectInput.value = this.value;
        });
        messageInput.addEventListener("input", function () {
            messageInput.value = this.value;
        });

        mailtoEmail.addEventListener("click", function () {
            if (subjectInput.value === "" || messageInput.value === "") {
                alert("You need to fill both the subject and message fields before you can send the email");
                return;
            }
            const subject = encodeURIComponent(subjectInput.value);
            const body = encodeURIComponent(messageInput.value);
            const mailtoEmail = `mailto:leo.c.jasper@gmail.com?subject=${subject}&body=${body}`;
            window.location.href = mailtoEmail;

    });
    }
});