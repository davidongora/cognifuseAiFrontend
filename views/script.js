const { default: axios } = require("axios");
const firebase = require("firebase/app");
require("firebase/auth"); // If you need it

// Initialize Firebase
const firebaseConfig = {
};
firebase.initializeApp(firebaseConfig);

document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const email = document.getElementById('username').value; // Assuming 'username' is actually the user's email
    const password = document.getElementById('password').value;

    try {
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        const user = userCredential.user;

        // User is signed in, you can now use the 'user' object for authenticated operations.
        // For example, you can get the user's ID token:
        const idToken = await user.getIdToken();

        // You can send this ID token to your server to verify the user's identity. to the login endpoint
        axios.post('/login', { idToken });

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error('Error:', errorCode, errorMessage);
    }
});