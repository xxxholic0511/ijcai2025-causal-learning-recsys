const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const speakers = [
    { name: 'speaker1', title: 'Prof. John Smith' },
    { name: 'speaker2', title: 'Dr. Sarah Johnson' },
    { name: 'panelist1', title: 'Dr. Michael Chen' },
    { name: 'panelist2', title: 'Prof. Emily Brown' },
    { name: 'panelist3', title: 'Dr. David Wilson' }
];

const colors = [
    '#2c3e50', '#3498db', '#e74c3c', '#2ecc71', '#f1c40f'
];

function generatePlaceholder(name, title, color) {
    const width = 400;
    const height = 400;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);

    // Add pattern
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    for (let i = 0; i < width; i += 20) {
        for (let j = 0; j < height; j += 20) {
            ctx.fillRect(i, j, 10, 10);
        }
    }

    // Add text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Split title into two lines if needed
    const words = title.split(' ');
    const line1 = words.slice(0, Math.ceil(words.length / 2)).join(' ');
    const line2 = words.slice(Math.ceil(words.length / 2)).join(' ');
    
    ctx.fillText(line1, width/2, height/2 - 20);
    ctx.fillText(line2, width/2, height/2 + 20);

    // Save the image
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(path.join(__dirname, 'images', `${name}.jpg`), buffer);
}

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'images');
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir);
}

// Generate placeholders for each speaker
speakers.forEach((speaker, index) => {
    generatePlaceholder(speaker.name, speaker.title, colors[index % colors.length]);
}); 