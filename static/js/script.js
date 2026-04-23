document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('predictForm');
    const submitBtn = document.getElementById('submitBtn');

    form.addEventListener('submit', (e) => {
        // Show loading spinner on submission
        submitBtn.classList.add('loading');
        // Let the form submit naturally to the backend
    });

    // Add float label effect/validation style hints dynamically
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (input.value !== '') {
                input.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            } else {
                input.style.borderColor = 'var(--border-color)';
            }
        });
    });
});

// Demo Data functionality
function fillDemoData() {
    // Generate completely random but clinically plausible data every time
    const randomData = {
        age: Math.floor(Math.random() * (80 - 30 + 1)) + 30, // 30 to 80
        sex: Math.random() > 0.5 ? 1 : 0, // 0 or 1
        cp: Math.floor(Math.random() * 4), // 0 to 3
        bp: Math.floor(Math.random() * (180 - 100 + 1)) + 100, // 100 to 180
        chol: Math.floor(Math.random() * (350 - 150 + 1)) + 150, // 150 to 350
        fbs: Math.random() > 0.8 ? 1 : 0, // 20% chance of 1
        restecg: Math.floor(Math.random() * 3), // 0 to 2
        thalach: Math.floor(Math.random() * (200 - 100 + 1)) + 100, // 100 to 200
        exang: Math.random() > 0.7 ? 1 : 0, // 30% chance of 1
        oldpeak: (Math.random() * 4.0).toFixed(1), // 0.0 to 4.0
        slope: Math.floor(Math.random() * 3), // 0 to 2
        ca: Math.floor(Math.random() * 5), // 0 to 4
        thal: Math.floor(Math.random() * 3) + 1 // 1 to 3
    };

    // Make it look dynamic by adding a small stagger
    let delay = 0;
    for (const [key, value] of Object.entries(randomData)) {
        setTimeout(() => {
            const element = document.getElementById(key);
            if (element) {
                element.value = value;
                
                // Trigger a change event so any listeners (like blur) can fire
                element.dispatchEvent(new Event('change'));
                
                // Add a small flash effect to show it was auto-filled
                element.style.transition = 'background-color 0.3s ease, border-color 0.3s ease';
                element.style.backgroundColor = 'rgba(255, 42, 95, 0.2)'; // Primary color flash
                element.style.borderColor = 'var(--primary-color)';
                
                setTimeout(() => {
                    element.style.backgroundColor = 'rgba(15, 23, 42, 0.5)'; // Reset to original input background
                    element.style.borderColor = 'rgba(255, 255, 255, 0.3)'; // Set to filled state
                }, 400);
            }
        }, delay);
        delay += 50; // 50ms stagger between fields
    }
}

