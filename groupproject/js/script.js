$(document).ready(function() {
    // Smooth scrolling for navigation links
    $("a.nav-link").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });

    // Form submission alert (just a basic example)
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        alert("Thank you for your message! I'll get back to you soon.");
        $(this).trigger("reset"); // Reset form fields after submission
    });
});
