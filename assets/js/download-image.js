const https = require('https');
const fs = require('fs');
const path = require('path');

const imageUrl = 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1920&q=80';
const imagePath = path.join(__dirname, 'images', 'montreal-skyline.jpg');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'images');
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir);
}

// Download the image
https.get(imageUrl, (response) => {
    if (response.statusCode === 200) {
        response.pipe(fs.createWriteStream(imagePath));
        console.log('Montreal skyline image downloaded successfully!');
    } else {
        console.error('Failed to download image:', response.statusCode);
    }
}).on('error', (err) => {
    console.error('Error downloading image:', err.message);
}); 