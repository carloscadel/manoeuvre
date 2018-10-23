class Background {
    constructor(ctx, canvasWidth, canvasHeight) {
        this.ctx = ctx
        this.xLeft = 0
        this.xRight = canvasWidth
        this.yTop = 0
        this.yBottom = canvasHeight
    }
    draw(TopBottomLeftRight) {
        
        var radius = 200

        if(TopBottomLeftRight == 'top') {
            this.ctx.save()
            this.gradient = ctx.createRadialGradient(spaceShip.x, spaceShip.y, radius/5, spaceShip.x, spaceShip.y, radius)
            this.gradient.addColorStop(0, 'red');
            this.gradient.addColorStop(1, 'rgba(0, 255, 0, 0.5');
            this.ctx.fillStyle = this.gradient;
            // console.log(this.gradient)
            this.ctx.strokeStyle = 'rgba(100, 100, 100, 0.5)';
            this.ctx.beginPath()
            this.ctx.moveTo(spaceShip.x, 10)
            this.ctx.arc(spaceShip.x, 10, radius, 0, Math.PI*2, true);
            this.ctx.fill()
            this.ctx.closePath()
            this.ctx.restore()
        }

        // this.ctx.save()
        // this.gradient = ctx.createRadialGradient(this.x, this.y, this.radius/5, this.x, this.y, this.radius)
        // this.gradient.addColorStop(0, this.color);
        // this.gradient.addColorStop(1, 'rgba(255, 255, 255, 0.1');
        // this.ctx.fillStyle = this.gradient;
        // this.ctx.strokeStyle = 'rgba(255, 255, 255, 0)';
        // this.ctx.beginPath()
        // this.ctx.moveTo(this.x, this.y)
        // this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
        // this.ctx.fill()
        // this.ctx.closePath()
        // this.ctx.restore()
    }
    update() {
        var distTop = spaceShip.y //distance SpaceShip to top border, and so on
        var distBottom = this.yBottom - spaceShip.y
        var distLeft = spaceShip.x
        var distRight = this.xRight - spaceShip.x
        console.log()
        if(distTop <= 100) {
            this.draw(this.ctx, 'top')
        } 
        if(distBottom <= 100) {
            this.draw(this.ctx, 'bottom')
        } 
        if(distLeft <= 100) {
            this.draw(this.ctx, 'left')
        } 
        if(distRight <= 100) {
            this.draw(this.ctx, 'right')
        } 



        
    }

    
}