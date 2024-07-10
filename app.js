document.addEventListener("DOMContentLoaded", function() {
    const loadingBar = document.querySelector('.loading-bar');
    const loadingScreen = document.querySelector('.loading-screen');
    const mainContent = document.querySelector('.main-content');

    function startTypewriter() {
        const text = "Hi! I'm Rajan Francisco";
        let index = 0;
        const speed = 120; // Adjust typing speed here (in milliseconds)

        function typeWriter() {
            if (index < text.length) {
                document.getElementById("typewriter").innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, speed);
            } else {
                // Remove the cursor after typing is complete
                document.getElementById("typewriter").style.borderRight = "none";
            }
        }

        typeWriter();
    }

    loadingBar.addEventListener('animationend', function() {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';
        // Start the typewriter effect after the loading screen is hidden
        startTypewriter();
    });
});
