class SpaceShip {
    constructor(ctx, x, y, size, vx = 2, vy = 2, color = 'grey', fixedPos = false) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
        this.size = size
        this.color = color
        this.mass = this.size
        this.fixedPos = fixedPos
    }
    draw() {
        var size = this.size
        this.ctx.save()
        this.ctx.beginPath()
        // this.ctx.scale(0.2, 0.2)
        this.gradient = ctx.createLinearGradient(size, 0, 3*size, 0)
        this.gradient.addColorStop(0, this.color);
        this.gradient.addColorStop(0.5, 'lightgrey');
        this.gradient.addColorStop(1, this.color);
        this.ctx.fillStyle = this.gradient;
        this.ctx.shadowBlur = 0.25*size;
        this.ctx.shadowColor = "black";
        //draw the circle
        
        // this.ctx.strokeStyle = 'rgba(255, 255, 255, 0)';
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 1)';
        this.ctx.moveTo(this.x, this.y)
        this.ctx.arc(this.x, this.y+size, size, 0, Math.PI*2, true);
        this.ctx.stroke();
        //draw the pointy shape
        this.ctx.moveTo(this.x + size, this.y)
        this.ctx.lineTo(this.x, this.y-2*size)
        this.ctx.lineTo(size, 2*size)
        this.ctx.lineTo(2*size, 3*size)
        this.ctx.lineTo(3*size, 2*size)
        this.ctx.fill()
        this.ctx.stroke();
        this.ctx.closePath()
        this.ctx.restore()
    }
    update(allObjs) {
        if(this.fixedPos != true){
            var that = this
            var vxTemp = 0
            var vyTemp = 0
            var distX = 0
            var distY = 0
            var distSq = 0
            var dist = 0
            var force = 0
    
            allObjs.forEach(function(obj) {
                if(obj != that){
                    distX = Math.abs(that.x - obj.x)
                    distY = Math.abs(that.y - obj.y)
                    distSq = distX*distX + distY*distY;
                    dist = Math.sqrt(distSq);
                    force = gravConst*that.mass*obj.mass/distSq;
                    
                    if((that.x < obj.x) && (that.y < obj.y)) { //top-left
                        vxTemp += force * distX / dist;
                        vyTemp += force * distY / dist;
                    } else if((that.x < obj.x) && (that.y > obj.y)) { //bottom-left
                        vxTemp += force * distX / dist;
                        vyTemp += -1*force * distY / dist;
                    } else if((that.x > obj.x) && (that.y > obj.y)) { //bottom-right
                        vxTemp += -1*force * distX / dist;
                        vyTemp += -1*force * distY / dist;
                    } else if((that.x > obj.x) && (that.y < obj.y)) { //top-right
                        vxTemp += -1*force * distX / dist;
                        vyTemp += force * distY / dist;
                    }
                } 
            })
    
            this.vx += vxTemp
            this.vy += vyTemp
            this.x += this.vx
            this.y += this.vy
        }
    }
}