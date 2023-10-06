const loginForm = document.getElementById('login-form');
const errorMessage = document.querySelector('.alert-wrong-data');

loginForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Fetch user data from users.json (you may need to adjust the path)
        const response = await fetch('../Data/users.json');
        const users = await response.json();

        // Check if there's a user with matching email and password
        const user = users.find(u => u.mail === email && u.password === password);

        if (user) {
            // Store user info in localStorage
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('course_items', JSON.stringify([1]));

            // Redirect to the home page
            window.location.href = './main.html';
        } else {
            // errorMessage.style.display = 'block';
            errorMessage.style.opacity = '1';
        }
    } catch (error) {
        console.error('Error:', error);
    }
});