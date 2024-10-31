const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

let drops = [];
const numDrops = 100; // Adjust the number of raindrops
const colors = [
    'rgba(255, 255, 255, 0.5)',
    'rgba(0, 204, 255, 0.5)',
    'rgba(255, 0, 255, 0.5)',
    'rgba(255, 255, 0, 0.5)',
];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function createRaindrops() {
    for (let i = 0; i < numDrops; i++) {
        drops.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            length: Math.random() * 20 + 5, // Length of raindrop
            speed: Math.random() * 5 + 2, // Speed of raindrop
            color: colors[Math.floor(Math.random() * colors.length)], // Random color
        });
    }
}

function updateRaindrops() {
    for (let drop of drops) {
        drop.y += drop.speed;
        if (drop.y > canvas.height) {
            drop.y = 0; // Reset the drop to the top
            drop.x = Math.random() * canvas.width; // Random horizontal position
        }
    }
}

function drawRaindrops() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let drop of drops) {
        ctx.strokeStyle = drop.color;
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.length);
        ctx.stroke();
    }
}

function animate() {
    updateRaindrops();
    drawRaindrops();
    requestAnimationFrame(animate);
}

resizeCanvas();
createRaindrops();
animate();

window.addEventListener('resize', resizeCanvas);
