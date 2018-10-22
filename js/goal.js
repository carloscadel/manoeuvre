class Goal {
    constructor(ctx, x, y, radius, color = 'rgba(0, 255, 0, 0.5)') {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }
    draw() {
    
        this.ctx.save()
        this.gradient = ctx.createRadialGradient(this.x, this.y, this.radius/5, this.x, this.y, this.radius)
        this.gradient.addColorStop(0, this.color);
        this.gradient.addColorStop(1, 'rgba(255, 255, 255, 0.1');
        this.ctx.fillStyle = this.gradient;
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0)';
        this.ctx.beginPath()
        this.ctx.moveTo(this.x, this.y)
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
        this.ctx.fill()
        this.ctx.closePath()
        this.ctx.restore()
    }
    update() {


    }
}