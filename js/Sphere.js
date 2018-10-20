class Sphere {
    constructor(ctx, x, y, radius, color = 'orange') {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }
    update() {
        
    }
    draw() {
        this.gradient = ctx.createRadialGradient(this.x, this.y, this.radius/15, this.x, this.y, this.radius*2)
        this.gradient.addColorStop(0, this.color);
        this.gradient.addColorStop(1, 'rgb(35, 35, 35)');
        this.ctx.fillStyle = this.gradient;
        this.ctx.shadowBlur = 0.3*this.radius;
        this.ctx.shadowColor = "black";
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0)';
        this.ctx.beginPath()
        this.ctx.moveTo(this.x, this.y)
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
        this.ctx.fill()
        this.ctx.stroke();
        this.ctx.closePath()
    }
}