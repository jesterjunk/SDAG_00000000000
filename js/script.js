document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('passwordInput');
    const togglePassword = document.getElementById('togglePassword');
    const eyeIcon = document.getElementById('eyeIcon');
    const eyeSlashIcon = document.getElementById('eyeSlashIcon');
    const loginForm = document.getElementById('loginForm');

    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        // Toggle the SVG icon visibility
        if (type === 'password') {
            eyeIcon.style.display = 'block';
            eyeSlashIcon.style.display = 'none';
        } else {
            eyeIcon.style.display = 'none';
            eyeSlashIcon.style.display = 'block';
        }
    });


    // Form submission handling
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submit action

        // Placeholder: Validate the password (additional validation logic can be added here)
        const password = passwordInput.value;
        if (password === "YourPassword") { // Replace "YourPassword" with the actual password
            setCookie("userLoggedIn", "true", 7); // Set a cookie for 7 days
            // Placeholder for successful login (e.g., load gallery)
            console.log("Login successful"); // Replace with actual functionality
        } else {
            // Placeholder for handling incorrect password
            console.log("Incorrect password"); // Replace with actual functionality
        }
    });


    // Function to set a cookie
    function setCookie(name, value, days) {
        const d = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }


    // Function to get a cookie value
    function getCookie(name) {
        let cookieName = name + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return "";
    }


    // Check if the user is already logged in
    if (getCookie("userLoggedIn") === "true") {
        // User is logged in; load gallery
        // Placeholder for loading gallery
        console.log("User already logged in. Load gallery."); // Replace with actual functionality
    }
});
