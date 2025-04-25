// Sample accounts for login
const accounts = [
    { username: "customer1", password: "password123" },
    { username: "customer2", password: "mypassword456" }
];

// Handle login form submission
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting traditionally

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check credentials
    const user = accounts.find(account => account.username === username && account.password === password);

    if (user) {
        alert("Login successful!");
        window.location.href = "https://redirected-site.com"; // Redirect to another site
    } else {
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.textContent = "Invalid username or password. Please try again.";
    }
});
