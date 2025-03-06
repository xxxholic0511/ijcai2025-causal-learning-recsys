const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

function generatePattern() {
    const width = 100;
    const height = 100;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = '#f8f9fa';
    ctx.fillRect(0, 0, width, height);

    // Draw dots
    ctx.fillStyle = '#2c3e50';
    ctx.globalAlpha = 0.1;
    
    for (let i = 0; i < width; i += 20) {
        for (let j = 0; j < height; j += 20) {
            ctx.beginPath();
            ctx.arc(i, j, 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Draw lines
    ctx.strokeStyle = '#3498db';
    ctx.globalAlpha = 0.05;
    ctx.lineWidth = 1;

    for (let i = 0; i < width; i += 20) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
    }

    for (let i = 0; i < height; i += 20) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
        ctx.stroke();
    }

    // Save the pattern
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(path.join(__dirname, 'images', 'pattern-bg.png'), buffer);
}

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'images');
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir);
}

generatePattern(); 