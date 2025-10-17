// ========================
// Mobile menu toggle
// ========================
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// ========================
// Typewriter Effect (Continuous, no blank pause)
// ========================
const typewriterElement = document.getElementById("typewriter");
if (typewriterElement) {
    const roles = ["Web Designer", "Web Developer", "UI/UX Designer", "Content Writer"];
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    const speed = 100;
    const eraseSpeed = 50;

    function type() {
        const current = roles[roleIndex];
        if (!deleting && charIndex < current.length) {
            typewriterElement.textContent += current.charAt(charIndex);
            charIndex++;
            setTimeout(type, speed);
        } else if (deleting && charIndex > 0) {
            typewriterElement.textContent = current.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, eraseSpeed);
        } else if (!deleting && charIndex === current.length) {
            deleting = true;
            setTimeout(type, 1000); // brief pause before erasing
        } else if (deleting && charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(type, 500); // brief transition between words
        }
    }
    type();
}

// ========================
// Dynamic Year in Footer
// ========================
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// ========================
// Education Page Card Switcher (No smooth sliding)
// ========================
const eduCard = document.getElementById("eduCard");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

if (eduCard && nextBtn && prevBtn) {
    let currentCard = 0;

    const cards = [
        {
            title: "Education",
            content: `
                <p class="text-gray-800 font-medium mb-2">
                    <strong>BSc (Hons) in Computing</strong> — Herald College Kathmandu (University of Wolverhampton)
                </p>
                <p class="text-gray-500 mb-4">Expected 2026</p>
                <ul class="text-gray-700 list-disc list-inside space-y-1 text-left">
                    <li>Relevant Coursework: Web Development, Database Management, Software Engineering</li>
                    <li>Contributed to multiple real-world, team-based software development projects.</li>
                </ul>
            `
        },
        {
            title: "Technical Skills",
            content: `
                <div class="text-left space-y-3">
                    <p><span class="font-semibold text-gray-800">Frontend:</span> HTML5, CSS3, JavaScript, React.js, Tailwind CSS</p>
                    <p><span class="font-semibold text-gray-800">Backend & Databases:</span> Node.js, MongoDB</p>
                    <p><span class="font-semibold text-gray-800">Tools & Platforms:</span> Git, GitHub</p>
                    <p><span class="font-semibold text-gray-800">Content Creation:</span> YouTube Subtitle Editing, Article Writing</p>
                </div>
            `
        },
        {
            title: "Soft Skills",
            content: `
                <p class="text-gray-700 leading-relaxed">
                    Teamwork • Problem-Solving • Adaptability • Critical Thinking
                </p>
            `
        }
    ];

    function updateCard() {
        eduCard.innerHTML = `
            <div class="bg-white rounded-2xl shadow-lg p-8">
                <h3 class="text-2xl font-semibold text-red-600 mb-4">${cards[currentCard].title}</h3>
                ${cards[currentCard].content}
            </div>
        `;
    }

    nextBtn.addEventListener("click", () => {
        currentCard = (currentCard + 1) % cards.length;
        updateCard();
    });

    prevBtn.addEventListener("click", () => {
        currentCard = (currentCard - 1 + cards.length) % cards.length;
        updateCard();
    });
}
