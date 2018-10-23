class Background {
    constructor(ctx, canvasWidth, canvasHeight) {
        this.ctx = ctx
        this.xLeft = 0
        this.xRight = canvasWidth
        this.yTop = 0
        this.yBottom = canvasHeight
    }
    draw(TopBottomLeftRight, dist) {
        
        var radius = 200

        this.ctx.save()
        this.ctx.beginPath()

        if(TopBottomLeftRight == 'top') {
            this.gradient = ctx.createRadialGradient(spaceShip.x, this.yTop, radius/5, spaceShip.x, this.yTop, Math.abs(dist + 150))
            this.ctx.moveTo(spaceShip.x, this.yTop)
            this.ctx.arc(spaceShip.x, this.yTop, radius, 0, Math.PI*2, true);
        } else if(TopBottomLeftRight == 'bottom') {
            this.gradient = ctx.createRadialGradient(spaceShip.x, this.yBottom, radius/5, spaceShip.x, this.yBottom, Math.abs(dist + 150))
            this.ctx.moveTo(spaceShip.x, this.yBottom)
            this.ctx.arc(spaceShip.x, this.yBottom, radius, 0, Math.PI*2, true);
        } else if(TopBottomLeftRight == 'left') {
            this.gradient = ctx.createRadialGradient(this.xLeft, spaceShip.y, radius/5, this.xLeft, spaceShip.y, Math.abs(dist + 150))
            this.ctx.moveTo(this.xLeft, spaceShip.y)
            this.ctx.arc(this.xLeft, spaceShip.y, radius, 0, Math.PI*2, true);
        } else if(TopBottomLeftRight == 'right') {
            this.gradient = ctx.createRadialGradient(this.xRight, spaceShip.y, radius/5, this.xRight, spaceShip.y, Math.abs(dist + 150))
            this.ctx.moveTo(this.xRight, spaceShip.y)
            this.ctx.arc(this.xRight, spaceShip.y, radius, 0, Math.PI*2, true);
        }
        
            this.gradient.addColorStop(0, 'rgba(255, 0, 0, 0.1');
            this.gradient.addColorStop(1, 'rgba(255, 255, 255, 0');
            this.ctx.fillStyle = this.gradient;
            // this.ctx.strokeStyle = 'rgba(100, 100, 100, 0)';
            this.ctx.fill()
            this.ctx.closePath()
            this.ctx.restore()
        

    }
    update() {
        var distTop = spaceShip.y //distance SpaceShip to top border, and so on
        var distBottom = this.yBottom - spaceShip.y
        var distLeft = spaceShip.x
        var distRight = this.xRight - spaceShip.x
        var dist = ''
       
        if(distTop <= 50) {
            dist = distTop
            this.draw('top', dist)
            // console.log('sending top')
        } 
        if(distBottom <= 50) {
            dist = distBottom
            this.draw('bottom', dist)
        } 
        if(distLeft <= 50) {
            dist = distLeft
            this.draw('left', dist)
        } 
        if(distRight <= 50) {
            dist = distRight
            this.draw('right', dist)
        } 



        
    }

    
}