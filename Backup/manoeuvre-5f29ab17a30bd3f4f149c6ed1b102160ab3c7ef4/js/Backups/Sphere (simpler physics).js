class Sphere {
    constructor(ctx, x, y, radius, vx = 2, vy = 2, color = 'orange', fixedPos = false) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
        this.radius = radius
        this.color = color
        this.mass = this.radius
        this.fixedPos = fixedPos
    }
    draw() {
        this.gradient = ctx.createRadialGradient(this.x, this.y, this.radius/15, this.x, this.y, this.radius*2)
        this.gradient.addColorStop(0, this.color);
        this.gradient.addColorStop(1, 'rgb(35, 35, 35)');
        this.ctx.fillStyle = this.gradient;
        this.ctx.shadowBlur = 0.35*this.radius;
        this.ctx.shadowColor = "black";
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0)';
        this.ctx.beginPath()
        this.ctx.moveTo(this.x, this.y)
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
        this.ctx.fill()
        this.ctx.stroke();
        this.ctx.closePath()
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