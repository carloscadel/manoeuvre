class Goal {
    constructor(ctx, x, y, radius, color = 'rgba(0, 255, 0, 0.1)', osc) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.beta = 0
        this.plug = 1
        // this.oscillator = Math.abs(Math.cos(this.beta))
    }
    draw(osc) {
        this.ctx.save()
        this.gradient = ctx.createRadialGradient(this.x, this.y, this.radius/5, this.x, this.y, this.radius*osc+40)
        this.gradient.addColorStop(0, 'rgba(255, 255, 255, 0');
        this.gradient.addColorStop(1, this.color);
        this.ctx.fillStyle = this.gradient;
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0)';
        this.ctx.beginPath()
        this.ctx.moveTo(this.x, this.y)
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
        this.ctx.fill()
        this.ctx.closePath()
        this.ctx.restore()

        // if(this.plug == 1) {
        //     while(this.oscillator < 200) {
        //         this.oscillator += 0.0001
        //         if(this.oscillator >= 200) {
        //             this.plug = 0
        //         }
        //     }
        // } else if(this.plug == 0) {
        //     while(this.oscillator > 40) {
        //         this.oscillator -= 0.0001
        //         if(this.oscillator <= 40) {
        //             this.plug = 1
        //         }
        //     }            
        // }
    }
    update() {


    }
}