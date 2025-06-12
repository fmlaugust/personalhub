// Felicia's Code & Chronicles - Interactive Features
// ================================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all features
    initHeroAnimations();
    initProgressTracker();
    initThemeToggle();
    initRandomQuotes();
    initCurrentMood();
    initFloatingElements();
    initSmoothScrolling();
    initTypingEffect();
    
});

// Hero Section Animations
// =======================
function initHeroAnimations() {
    const hero = document.querySelector('.hero-block');
    if (!hero) return;
    
    // Add floating animation to hero elements
    hero.style.animation = 'heroFloat 3s ease-in-out infinite';
    
    // Create animated background elements
    createFloatingIcons();
}

function createFloatingIcons() {
    const container = document.querySelector('.container');
    const icons = ['💻', '🌸', '✨', '🚀', '📚', '🎨'];
    
    icons.forEach((icon, index) => {
        const floatingIcon = document.createElement('div');
        floatingIcon.className = 'floating-icon';
        floatingIcon.textContent = icon;
        floatingIcon.style.cssText = `
            position: absolute;
            font-size: 24px;
            opacity: 0.6;
            animation: float ${3 + index}s ease-in-out infinite;
            animation-delay: ${index * 0.5}s;
            left: ${10 + index * 15}%;
            top: ${20 + (index % 3) * 20}%;
            pointer-events: none;
            z-index: -1;
        `;
        container.appendChild(floatingIcon);
    });
}

// #100devs Progress Tracker
// =========================
function initProgressTracker() {
    const currentDay = 47; // Update this as you progress!
    const totalDays = 100;
    const percentage = (currentDay / totalDays) * 100;
    
    // Create progress bar if it doesn't exist
    let progressContainer = document.querySelector('.progress-container');
    if (!progressContainer) {
        progressContainer = document.createElement('div');
        progressContainer.className = 'progress-container';
        progressContainer.innerHTML = `
            <h4>#100devs Journey Progress</h4>
            <div class="progress-bar">
                <div class="progress-fill" data-progress="${percentage}">
                    Day ${currentDay} of ${totalDays}
                </div>
            </div>
            <p class="progress-message">Keep going! You're ${percentage.toFixed(1)}% there! 🚀</p>
        `;
        
        // Add to sidebar or create dedicated section
        const sidebar = document.querySelector('.sidebar-block') || document.querySelector('.container');
        sidebar.appendChild(progressContainer);
    }
    
    // Animate progress bar
    setTimeout(() => {
        const progressFill = document.querySelector('.progress-fill');
        if (progressFill) {
            progressFill.style.width = percentage + '%';
        }
    }, 500);
}

// Dark/Light Theme Toggle
// =======================
function initThemeToggle() {
    // Create theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '🌙';
    themeToggle.setAttribute('aria-label', 'Toggle dark/light mode');
    
    // Add to header or create floating button
    const header = document.querySelector('.nav-block') || document.body;
    header.appendChild(themeToggle);
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    updateThemeToggleIcon(savedTheme);
    
    // Toggle theme on click
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeToggleIcon(newTheme);
        
        // Add fun animation
        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = 'rotate(0deg)';
        }, 300);
    });
}

function updateThemeToggleIcon(theme) {
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Random Quotes & Daily Affirmations
// ==================================
function initRandomQuotes() {
    const quotes = [
        "Currently debugging life, one line of code at a time 🌸",
        "Coffee, code, and Korean memories ☕",
        "Every bug is just a feature waiting to be discovered 🐛",
        "Learning to code is like learning a new language... again! 🗣️",
        "From teaching English to teaching computers 💻",
        "Progress over perfection, always 📈",
        "Semicolons are optional in life; happiness is not 😊",
        "Building dreams one commit at a time 🚀"
    ];
    
    // Create quote container
    let quoteContainer = document.querySelector('.daily-quote');
    if (!quoteContainer) {
        quoteContainer = document.createElement('div');
        quoteContainer.className = 'daily-quote';
        
        const sidebar = document.querySelector('.sidebar-block') || document.querySelector('.container');
        sidebar.appendChild(quoteContainer);
    }
    
    // Display random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteContainer.innerHTML = `
        <h4>Today's Vibe</h4>
        <p class="quote-text">"${randomQuote}"</p>
        <button class="new-quote-btn" onclick="getNewQuote()">New Quote ✨</button>
    `;
    
    // Make getNewQuote available globally
    window.getNewQuote = () => {
        const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
        document.querySelector('.quote-text').textContent = `"${newQuote}"`;
    };
}

// Current Mood/Status
// ==================
function initCurrentMood() {
    const moods = [
        { emoji: '🚀', status: 'Coding mode activated' },
        { emoji: '🤔', status: 'Debugging mysteries' },
        { emoji: '☕', status: 'Caffeinated and ready' },
        { emoji: '📚', status: 'Learning something new' },
        { emoji: '🎨', status: 'Feeling creative' },
        { emoji: '🌸', status: 'Zen coding vibes' }
    ];
    
    const currentMood = moods[Math.floor(Math.random() * moods.length)];
    
    let moodContainer = document.querySelector('.current-mood');
    if (!moodContainer) {
        moodContainer = document.createElement('div');
        moodContainer.className = 'current-mood';
        
        const sidebar = document.querySelector('.sidebar-block') || document.querySelector('.container');
        sidebar.appendChild(moodContainer);
    }
    
    moodContainer.innerHTML = `
        <h4>Current Mood</h4>
        <div class="mood-display">
            <span class="mood-emoji">${currentMood.emoji}</span>
            <span class="mood-text">${currentMood.status}</span>
        </div>
    `;
}

// Floating Interactive Elements
// ============================
function initFloatingElements() {
    // Add hover effects to layout blocks
    const layoutBlocks = document.querySelectorAll('.layout-block');
    
    layoutBlocks.forEach(block => {
        block.addEventListener('mouseenter', () => {
            block.style.transform = 'translateY(-5px) scale(1.02)';
            block.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        });
        
        block.addEventListener('mouseleave', () => {
            block.style.transform = 'translateY(0) scale(1)';
            block.style.boxShadow = 'none';
        });
    });
}

// Smooth Scrolling Navigation
// ===========================
function initSmoothScrolling() {
    // Add smooth scrolling to any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Typing Effect for Hero
// =====================
function initTypingEffect() {
    const heroText = document.querySelector('.hero-block');
    if (!heroText) return;
    
    const phrases = [
        "Currently debugging life, one line of code at a time 🌸",
        "From teaching abroad to coding at home 🌍",
        "Building my future, one commit at a time 💻"
    ];
    
    let currentPhrase = 0;
    let currentChar = 0;
    let isDeleting = false;
    
    function typeEffect() {
        const current = phrases[currentPhrase];
        
        if (isDeleting) {
            currentChar--;
        } else {
            currentChar++;
        }
        
        const displayText = current.substring(0, currentChar);
        
        // Update the hero text (you'll need to add a typing-text element)
        let typingElement = document.querySelector('.typing-text');
        if (!typingElement) {
            typingElement = document.createElement('p');
            typingElement.className = 'typing-text';
            heroText.appendChild(typingElement);
        }
        
        typingElement.textContent = displayText;
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && currentChar === current.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && currentChar === 0) {
            isDeleting = false;
            currentPhrase = (currentPhrase + 1) % phrases.length;
            typeSpeed = 500; // Pause before starting new phrase
        }
        
        setTimeout(typeEffect, typeSpeed);
    }
    
    // Start typing effect after a short delay
    setTimeout(typeEffect, 1000);
}

// Utility Functions
// ================

// CSS styles are now handled in the main styles.css file
// This function is kept for any future dynamic styling needs
function addDynamicStyles() {
    // Reserved for any styles that need to be calculated dynamically
    console.log('Dynamic styles initialized');
}

// Initialize dynamic styles
addDynamicStyles();

// Console message for fellow developers
console.log(`
🌸 Welcome to Felicia's Code & Chronicles! 🌸
======================================
Currently on day 0 of #100devs journey!
Thanks for checking out my code 💻
Feel free to reach out if you want to connect!
`);

// Export functions for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initHeroAnimations,
        initProgressTracker,
        initThemeToggle,
        initRandomQuotes,
        initCurrentMood
    };
}