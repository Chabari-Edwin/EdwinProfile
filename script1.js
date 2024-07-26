document.addEventListener('DOMContentLoaded', () => {
    const starfield = document.querySelector('.starfield');
    const starCount = 100; // Adjust the number of stars
    const maxStarSize = 3; // Maximum size of stars in pixels

    // Set the height of the starfield to match the document height
    starfield.style.height = `${document.documentElement.scrollHeight}px`;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        const size = Math.random() * maxStarSize;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 3 + 1}s`;
        starfield.appendChild(star);
    }
});
