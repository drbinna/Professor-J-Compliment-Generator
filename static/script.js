/**
 * Compliment Generator - JavaScript
 * Minimal JavaScript for text-to-speech functionality only
 */

// Store the current compliment for text-to-speech
let currentCompliment = '';
let selectedVoice = null;

// Load and select a better voice when page loads
function initializeVoices() {
    // Wait for voices to be loaded
    if (speechSynthesis.getVoices().length === 0) {
        speechSynthesis.addEventListener('voiceschanged', function() {
            selectBestVoice();
            populateVoiceSelect();
        });
    } else {
        selectBestVoice();
        populateVoiceSelect();
    }
}

// Populate the voice selector dropdown
function populateVoiceSelect() {
    const voiceSelect = document.getElementById('voiceSelect');
    if (!voiceSelect) return;
    
    const voices = speechSynthesis.getVoices();
    
    // Clear existing options except "Auto"
    while (voiceSelect.options.length > 1) {
        voiceSelect.remove(1);
    }
    
    // Add all available voices
    voices.forEach((voice, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${voice.name} (${voice.lang})`;
        
        // Mark the selected voice as selected
        if (selectedVoice && voice.name === selectedVoice.name) {
            option.selected = true;
        }
        
        voiceSelect.appendChild(option);
    });
}

// Select a better default voice (prefer natural-sounding voices)
function selectBestVoice() {
    const voices = speechSynthesis.getVoices();
    
    // Preferred voice names (more natural-sounding)
    const preferredVoices = [
        'Samantha',      // macOS - natural female voice
        'Alex',          // macOS - natural male voice
        'Victoria',      // macOS - natural female voice
        'Google UK English Female',  // Chrome - natural female
        'Google US English Female',  // Chrome - natural female
        'Microsoft Zira', // Windows - natural female
        'Microsoft David', // Windows - natural male
    ];
    
    // Try to find a preferred voice
    for (const preferred of preferredVoices) {
        const voice = voices.find(v => v.name.includes(preferred));
        if (voice) {
            selectedVoice = voice;
            return;
        }
    }
    
    // If no preferred voice found, look for any "enhanced" or "premium" voice
    const enhancedVoice = voices.find(v => 
        v.name.toLowerCase().includes('enhanced') || 
        v.name.toLowerCase().includes('premium') ||
        v.name.toLowerCase().includes('natural')
    );
    if (enhancedVoice) {
        selectedVoice = enhancedVoice;
        return;
    }
    
    // Prefer female voices as they often sound more natural
    const femaleVoice = voices.find(v => 
        v.name.toLowerCase().includes('female') ||
        v.name.toLowerCase().includes('samantha') ||
        v.name.toLowerCase().includes('victoria') ||
        v.name.toLowerCase().includes('zira')
    );
    if (femaleVoice) {
        selectedVoice = femaleVoice;
        return;
    }
    
    // Fallback to any available voice
    selectedVoice = voices[0] || null;
}

// Initialize voices when page loads
document.addEventListener('DOMContentLoaded', function() {
    if ('speechSynthesis' in window) {
        initializeVoices();
    }
});

// Style button selection
document.querySelectorAll('.style-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.style-btn').forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        // Update hidden input
        document.getElementById('styleInput').value = this.dataset.style;
    });
});

// Set default style button as active
document.querySelector('.style-btn[data-style="funny"]').classList.add('active');

// Form submission
document.getElementById('complimentForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const name = document.getElementById('nameInput').value.trim();
    const style = document.getElementById('styleInput').value;
    
    if (!name) {
        alert('Please enter a name');
        return;
    }
    
    // Show loading state
    const display = document.getElementById('complimentDisplay');
    display.innerHTML = '<p>Generating your compliment...</p>';
    document.getElementById('speakBtn').disabled = true;
    
    try {
        // Send request to Flask backend
        const formData = new FormData();
        formData.append('name', name);
        formData.append('style', style);
        
        const response = await fetch('/generate', {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        
        if (data.error) {
            display.innerHTML = `<p style="color: #000000;">${data.error}</p>`;
        } else {
            currentCompliment = data.compliment;
            display.innerHTML = `<p>${data.compliment}</p>`;
            document.getElementById('speakBtn').disabled = false;
        }
    } catch (error) {
        display.innerHTML = '<p>Error generating compliment. Please try again.</p>';
        console.error('Error:', error);
    }
});

// Handle voice selection change
document.addEventListener('DOMContentLoaded', function() {
    const voiceSelect = document.getElementById('voiceSelect');
    if (voiceSelect) {
        voiceSelect.addEventListener('change', function() {
            if (this.value === 'auto') {
                selectBestVoice();
            } else {
                const voices = speechSynthesis.getVoices();
                selectedVoice = voices[parseInt(this.value)];
            }
        });
    }
});

// Text-to-speech functionality
document.getElementById('speakBtn').addEventListener('click', function() {
    if (!currentCompliment) {
        return;
    }
    
    // Check if browser supports Web Speech API
    if ('speechSynthesis' in window) {
        // Stop any ongoing speech
        window.speechSynthesis.cancel();
        
        // Refresh voices list (in case they weren't loaded yet)
        const voices = speechSynthesis.getVoices();
        if (voices.length > 0) {
            if (!selectedVoice) {
                selectBestVoice();
            }
            // Update voice select if it exists
            populateVoiceSelect();
        }
        
        // Check if user selected a specific voice
        const voiceSelect = document.getElementById('voiceSelect');
        if (voiceSelect && voiceSelect.value !== 'auto') {
            const selectedIndex = parseInt(voiceSelect.value);
            if (voices[selectedIndex]) {
                selectedVoice = voices[selectedIndex];
            }
        }
        
        // Create speech utterance
        const utterance = new SpeechSynthesisUtterance(currentCompliment);
        
        // Use selected voice if available
        if (selectedVoice) {
            utterance.voice = selectedVoice;
        }
        
        // Better voice settings for more natural speech
        utterance.rate = 0.95;      // Slightly slower for clarity
        utterance.pitch = 1.0;      // Normal pitch
        utterance.volume = 1.0;     // Full volume
        
        // Speak the compliment
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Your browser does not support text-to-speech. Please try Chrome or Edge.');
    }
});

