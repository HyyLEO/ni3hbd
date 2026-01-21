// Password protection
document.getElementById('submit').addEventListener('click', function() {
    const password = document.getElementById('password').value;
    const error = document.getElementById('error');
    if (password === 'myselfni3') {
        document.getElementById('login').style.display = 'none';
        document.getElementById('main').style.display = 'block';
        initMainContent();
    } else {
        error.style.display = 'block';
    }
});

// Function to initialize main content after login
function initMainContent() {
    // Add click event to cake
    const cake = document.querySelector('.cake');
    cake.addEventListener('click', function() {
        alert('Happy Birthday Shantanu! 🎂🥳');
    });

    // Function to create floating balloons
    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.textContent = '🎈';
        balloon.style.left = Math.random() * 100 + '%';
        balloon.style.animationDelay = Math.random() * 5 + 's';
        document.querySelector('.animations').appendChild(balloon);

        // Remove after animation
        setTimeout(() => {
            balloon.remove();
        }, 6000);
    }

    // Create balloons every few seconds
    setInterval(createBalloon, 3000);
}