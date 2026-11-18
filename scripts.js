/* INFO2180 Project 1 - newsletter subscription */
document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('.newsletter form');
    var emailInput = document.getElementById('email');
    var message = document.querySelector('.newsletter .message');

    // Let our own message handle bad input instead of the browser's pop-up.
    form.noValidate = true;

    form.addEventListener('submit', function (event) {
        // Stop the page from reloading: we only simulate the submission.
        event.preventDefault();

        var email = emailInput.value.trim();
        var looksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!looksValid) {
            message.textContent = 'Please enter a valid email address.';
            return;
        }

        // textContent (not innerHTML) so typed text can never run as code.
        message.textContent = 'Thank you! Your email address ' + email + ' has been added to our mailing list!';
        form.reset();
    });
});
