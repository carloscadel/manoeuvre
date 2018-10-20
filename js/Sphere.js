class Sphere {
    constructor(ctx, x, y, radius, color = 'orange', gravity = 9.81) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.vx = 1
        this.vy = -2
        this.radius = radius
        this.color = color
        this.gravity = gravity
        this.mass = this.radius
    }
    update() {
        var distX = Math.abs(this.x - planet.x)
        var distY = Math.abs(this.y - planet.y)
        var distSq = distX*distX + distY*distY;
        var dist = Math.sqrt(distSq);
        var force = this.mass*planet.mass/distSq;
        
        if((this.x < planet.x) && (this.y < planet.y)) { //top-left
            this.vx += force * distX / dist;
            this.vy += force * distY / dist;
        } else if((this.x < planet.x) && (this.y > planet.y)) { //bottom-left
            this.vx += force * distX / dist;
            this.vy += -1*force * distY / dist;
        } else if((this.x > planet.x) && (this.y > planet.y)) { //bottom-right
            this.vx += -1*force * distX / dist;
            this.vy += -1*force * distY / dist;
        } else if((this.x > planet.x) && (this.y < planet.y)) { //top-right
            this.vx += -1*force * distX / dist;
            this.vy += force * distY / dist;
        }
        this.x += this.vx
        this.y += this.vy
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