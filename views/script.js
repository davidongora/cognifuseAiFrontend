document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
            document.getElementById('message').innerHTML = `<p>${data.message}</p>`;
            // Redirect to a new page after successful login
            window.location.href = './AdminSide.html'; // Redirect to admin.html
        } else {
            document.getElementById('message').innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
