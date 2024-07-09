document.addEventListener("DOMContentLoaded", function() {
    const text = "Hi, I'm Rajan 'Ran' Francisco";
    let index = 0;
    const speed = 250; // Adjust typing speed here (in milliseconds)

    function typeWriter() {
        if (index < text.length) {
            document.getElementById("typewriter").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});
