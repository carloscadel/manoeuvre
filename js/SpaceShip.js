class SpaceShip {
    constructor(ctx, x, y, size, vx = 2, vy = 2, color = 'grey', fixedPos = false) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
        this.size = size
        this.radius = size
        this.color = color
        this.mass = this.size
        this.fixedPos = fixedPos
        this.currentDirection = 0
    }
    draw() {
        var size = this.size
        var x = this.x
        var y = this.y

        this.ctx.save()
        this.ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
        this.gradient = ctx.createLinearGradient(x-size, 0, x+size, 0)
        this.gradient.addColorStop(0, this.color);
        this.gradient.addColorStop(0.5, 'lightgrey');
        this.gradient.addColorStop(1, this.color);
        this.ctx.fillStyle = this.gradient;
        this.ctx.shadowBlur = 0.5*size;
        this.ctx.shadowColor = "black";
        
        this.ctx.translate(x, y)
        this.ctx.rotate(this.currentDirection)
        this.ctx.translate(-x, -y)

        this.ctx.beginPath()
        this.ctx.moveTo(x, y+size)
        this.ctx.lineTo(x + size, y)
        this.ctx.lineTo(x, y-2*size)
        this.ctx.lineTo(x-size, y)
        this.ctx.lineTo(x, y+size)
        this.ctx.arc(x, y+size, size, -1*pi/4, 2*Math.PI, false);
        this.ctx.lineTo(x, y+size)
        this.ctx.fill()
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
                if((obj != that) && (obj.isWin == false)){
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
    move(direction) {
        var sinAngle = Math.abs(Math.sin(this.currentDirection))
        var cosAngle = Math.abs(Math.cos(this.currentDirection))

        this.ctx.save()
        switch(direction) {
            case 'ArrowUp':
            if((0 <= this.currentDirection) && (this.currentDirection <= Math.PI/2)) {
                this.vx += 1 * sinAngle
                this.vy -= 1 * cosAngle
            } else if((Math.PI/2 <= this.currentDirection) && (this.currentDirection <= Math.PI)) {
                this.vx += 1 * sinAngle
                this.vy += 1 * cosAngle
            } else if((Math.PI <= this.currentDirection) && (this.currentDirection <= 3*Math.PI/2)) {
                this.vx -= 1 * sinAngle
                this.vy += 1 * cosAngle
            } else if((3*Math.PI/2 <= this.currentDirection) && (this.currentDirection <= 2*Math.PI)) {
                this.vx -= 1 * sinAngle
                this.vy -= 1 * cosAngle
            }

            this.ctx.save()
            this.gradient = ctx.createRadialGradient(this.x, this.y, oscTargetRadius - 9, this.x, this.y, oscTargetRadius)
            this.gradient.addColorStop(0, 'rgba(0, 255, 0, 0.1');
            this.gradient.addColorStop(1, 'rgba(255, 255, 255, 0');
            this.ctx.fillStyle = this.gradient;
            this.ctx.strokeStyle = 'rgba(255, 255, 255, 0)';
            this.ctx.beginPath()
            this.ctx.moveTo(this.x, this.y)
            this.ctx.arc(this.x, this.y, 201, 0, Math.PI*2, true);
            this.ctx.fill()
            this.ctx.closePath()
            this.ctx.restore()

            break;
            case 'ArrowDown':
            if((0 <= this.currentDirection) && (this.currentDirection <= Math.PI/2)) {
                this.vx -= 1 * sinAngle
                this.vy += 1 * cosAngle
            } else if((Math.PI/2 <= this.currentDirection) && (this.currentDirection <= Math.PI)) {
                this.vx -= 1 * sinAngle
                this.vy -= 1 * cosAngle
            } else if((Math.PI <= this.currentDirection) && (this.currentDirection <= 3*Math.PI/2)) {
                this.vx += 1 * sinAngle
                this.vy -= 1 * cosAngle
            } else if((3*Math.PI/2 <= this.currentDirection) && (this.currentDirection <= 2*Math.PI)) {
                this.vx += 1 * sinAngle
                this.vy += 1 * cosAngle
            }
            break;
            case 'ArrowLeft':
            this.currentDirection -= pi/4
                if(this.currentDirection < 0){
                    this.currentDirection += 2*Math.PI
                } else if(this.currentDirection >= 2*Math.PI) {
                    this.currentDirection -= 2*Math.PI
                }
            break;
            case 'ArrowRight':
            this.currentDirection += pi/4
            if(this.currentDirection < 0){
                this.currentDirection += 2*Math.PI
            } else if(this.currentDirection >= 2*Math.PI) {
                this.currentDirection -= 2*Math.PI
            }
            break;
        }
        this.ctx.restore()
    }
}