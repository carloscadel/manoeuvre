class Goal {
    constructor(name, ctx, x, y, radius = 20, color = 'rgba(0, 255, 0, 0.3)') {
        this.name = name
        this.ctx = ctx
        this.x = ctx.canvas.width * x
        this.y = ctx.canvas.height * y
        this.radius = radius
        this.color = color
        this.angle = 0
        this.oscillator = 0
        // this.plug = 1
        // this.oscillator = Math.abs(Math.cos(this.beta))
    }
    draw() {
        this.ctx.save()
        this.gradient = ctx.createRadialGradient(this.x, this.y, this.radius, this.x, this.y, this.radius*this.oscillator + this.radius + 10)
        this.gradient.addColorStop(0, this.color);
        this.gradient.addColorStop(1, 'rgba(255, 255, 255, 0');
        this.ctx.fillStyle = this.gradient;
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0)';
        this.ctx.beginPath()
        this.ctx.moveTo(this.x, this.y)
        this.ctx.arc(this.x, this.y, this.radius*2, 0, Math.PI*2, true);
        this.ctx.fill()
        this.ctx.closePath()
        this.ctx.restore()

    }
    update() {


    }
    oscillator() {
        
        var oscillator = setInterval(function() { 
        //this is a growing/shrinking oscillator
        this.angle += Math.PI/200 //denominator controls the speed of the oscillation
        return this.osc = Math.abs(Math.cos(this.angle)) //osc will be between 0 and 1

        }, 1000/60)
    }
}