const https = require('https');
const fs = require('fs');
const path = require('path');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../images');
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir);
}

// Montreal skyline image URL
const imageUrl = 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
const imagePath = path.join(imagesDir, 'montreal-skyline.jpg');

// Download the image
https.get(imageUrl, (response) => {
    if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(imagePath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
            fileStream.close();
            console.log('Montreal skyline image downloaded successfully');
        });
    } else {
        console.error('Failed to download image:', response.statusCode);
    }
}).on('error', (err) => {
    console.error('Error downloading image:', err.message);
}); 