document.addEventListener('DOMContentLoaded', function () {
    const firebaseConfig = {
        apiKey: "AIzaSyBr3GHLtueuC_cs9_Vrzv5E1SeLk3Y0eUU",
        authDomain: "my--vhs-mixtape.firebaseapp.com",
        projectId: "my--vhs-mixtape"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

    const userProfileArea = document.getElementById('user-profile-area');

    auth.onAuthStateChanged(user => {
        if (user) {
            // User is signed in
            userProfileArea.innerHTML = `
                <img src="${user.photoURL || 'assets/default-avatar.png'}" alt="Profile" class="profile-pic">
                <div id="user-dropdown" class="dropdown-content">
                    <a href="profile.html">My Profile</a>
                    <a href="#" id="logout-btn">Logout</a>
                </div>
            `;

            document.getElementById('logout-btn').addEventListener('click', (e) => {
                e.preventDefault();
                auth.signOut().then(() => {
                    window.location.href = 'index.html';
                });
            });
        } else {
            // User is signed out
            userProfileArea.innerHTML = '<a href="login.html" class="nav-item">Login/Sign Up</a>';
        }
    });

    const hamburger = document.querySelector('.hamburger-icon');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});