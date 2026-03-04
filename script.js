(function () {
    emailjs.init({
        publicKey: "YOUR_PUBLIC_KEY"
    });
})();

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        formStatus.textContent = "Sending your message...";
        formStatus.classList.remove("error", "success");

        const templateParams = {
            from_name: document.getElementById("fromName").value,
            from_email: document.getElementById("fromEmail").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
        };

        emailjs
            .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
            .then(function () {
                formStatus.textContent = "Message sent successfully.";
                formStatus.classList.add("success");
                contactForm.reset();
            })
            .catch(function () {
                formStatus.textContent = "Unable to send message right now. Please try again later.";
                formStatus.classList.add("error");
            });
    });
}
