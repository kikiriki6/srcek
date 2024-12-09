const canvas = document.getElementById('canvas'); 
const ctx = canvas.getContext('2d'); 
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight;
 const particlesArray = []; 
 const heartCoordinates = []; 
 for (let t = 0; t < Math.PI * 2; t += 0.05)
     { const x = 16 * Math.sin(t) ** 3; 
        const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)); 
        heartCoordinates.push({ x: x * 15, y: y * 15 }); }
 class Particle { constructor() { this.angle = Math.random() * Math.PI * 2; this.radius = Math.random() * 50 + 10; this.speed = Math.random() * 0.05 + 0.02; this.size = Math.random() * 3 + 1; this.color = `hsl(${Math.random() * 360}, 100%, 50%)`; this.offsetX = canvas.width / 2; this.offsetY = canvas.height / 2; } update() { this.angle += this.speed; } draw() { const heartPoint = heartCoordinates[Math.floor(Math.random() * heartCoordinates.length)]; const x = this.offsetX + heartPoint.x + Math.cos(this.angle) * this.radius; const y = this.offsetY + heartPoint.y + Math.sin(this.angle) * this.radius; ctx.fillStyle = this.color; ctx.beginPath(); ctx.arc(x, y, this.size, 0, Math.PI * 2); ctx.closePath(); ctx.fill(); } } function initParticles() { for (let i = 0; i < 200; i++) { particlesArray.push(new Particle()); } } function animate() { ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; ctx.fillRect(0, 0, canvas.width, canvas.height); particlesArray.forEach((particle) => { particle.update(); particle.draw(); }); requestAnimationFrame(animate); } initParticles(); 
animate();