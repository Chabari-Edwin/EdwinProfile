// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animation for skill icons
    const skillIcons = document.querySelectorAll('.skill-icon');
    
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'popIn 0.5s forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    skillIcons.forEach(icon => {
        observer.observe(icon);
    });

    // Dynamic content loading for project showcases
    const projectsSection = document.getElementById('projects');
    const projectsContainer = projectsSection.querySelector('.projects-container');
    const loadMoreBtn = projectsSection.querySelector('.load-more');

    const projects = [
        { title: 'Project 1', description: 'Description for Project 1', image: 'path/to/image1.jpg' },
        { title: 'Project 2', description: 'Description for Project 2', image: 'path/to/image2.jpg' },
        { title: 'Project 3', description: 'Description for Project 3', image: 'path/to/image3.jpg' },
        // Add more projects as needed
    ];

    let currentIndex = 0;
    const projectsPerLoad = 2;

    function loadProjects() {
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < projectsPerLoad && currentIndex < projects.length; i++) {
            const project = projects[currentIndex];
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');
            projectElement.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            `;
            fragment.appendChild(projectElement);
            currentIndex++;
        }

        projectsContainer.appendChild(fragment);

        if (currentIndex >= projects.length) {
            loadMoreBtn.style.display = 'none';
        }
    }

    loadMoreBtn.addEventListener('click', loadProjects);

    // Initial load
    loadProjects();
});



