class Goal {
    constructor(ctx, x, y, radius = 20, color = 'rgba(0, 255, 0, 0.3)', osc) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        // this.beta = 0
        this.oscillator = 40
        // this.plug = 1
        // this.oscillator = Math.abs(Math.cos(this.beta))
    }
    draw(osc) {
        this.ctx.save()
        // this.gradient = ctx.createRadialGradient(this.x, this.y, this.radius/6, this.x, this.y, this.radius*osc + this.radius/6)
        this.gradient = ctx.createRadialGradient(this.x, this.y, 3, this.x, this.y, 3*10 + 3)
        this.gradient.addColorStop(1, 'rgba(255, 255, 255, 0');
        this.gradient.addColorStop(0, this.color);
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