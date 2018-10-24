class SpaceShip {
    constructor(ctx, x, y, size, vx = 2, vy = 2, color = 'grey', fixedPos = false) {
        this.ctx = ctx
        this.x = x * this.ctx.canvas.width
        this.y = y * this.ctx.canvas.height
        this.vx = vx
        this.vy = vy
        this.size = size
        this.radius = size
        this.color = color
        this.mass = this.size
        this.fixedPos = fixedPos
        this.currentDirection = 0
        this.fuelBarX = 25
        this.fuelBarY = 25
        this.fuel = 100 //up to 100
        this.fuelRate = 1.5 //speed at what the fuel is consumed
    }
    draw() {
        var size = this.size
        var x = this.x
        var y = this.y
        // console.log(this.currentDirection)

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

        //drawing the fuel bar, first the grey one and then the coloured one
        this.ctx.save()
        this.ctx.beginPath()
        this.ctx.fillStyle = 'rgba(211, 211, 211, 0.3'
        this.ctx.fillRect(this.fuelBarX, this.fuelBarY, 500, 5)
        this.ctx.fillStyle = 'rgba(127,255,212, 0.5'
        if(this.fuel < 75) {
            this.ctx.fillStyle = 'rgba(127,255,0, 0.5'
        }
        if(this.fuel < 50) {
            this.ctx.fillStyle = 'rgba(255, 255, 0, 0.5'
        }
        if(this.fuel < 25) {
            this.ctx.fillStyle = 'rgba(255, 0, 0, 0.5'
        }
        this.ctx.fillRect(this.fuelBarX, this.fuelBarY, this.fuel * 5, 5)
        this.ctx.closePath()
        this.ctx.restore()

        //Drawing the red glow by the edges
        var distTop = this.y //distance to top border, and so on
        var distBottom = this.ctx.canvas.height - this.y
        var distLeft = this.x
        var distRight = this.ctx.canvas.width - this.x
        var dist = 0
        var edge = ''

        if(distTop <= 75) {
            dist = distTop
            edge = 'top'
        } 
        if(distBottom <= 75) {
            dist = distBottom
            edge = 'bottom'
        } 
        if(distLeft <= 75) {
            dist = distLeft
            edge = 'left'
        } 
        if(distRight <= 75) {
            dist = distRight
            edge = 'right'
        } 
        var radius = 200
        
        this.ctx.save()
        this.ctx.beginPath()
        
        if(edge == 'top') {
            this.gradient = ctx.createRadialGradient(this.x, 0, radius/5, this.x, 0, Math.abs(dist) + radius/2)
            this.ctx.moveTo(this.x, 0)
            this.ctx.arc(this.x, 0, radius, 0, Math.PI*2, true);
        } else if(edge == 'bottom') {
            this.gradient = ctx.createRadialGradient(this.x, this.ctx.canvas.height, radius/5, this.x, this.ctx.canvas.height, Math.abs(dist) + radius/2)
            this.ctx.moveTo(this.x, this.ctx.canvas.height)
            this.ctx.arc(this.x, this.ctx.canvas.height, radius, 0, Math.PI*2, true);
        } else if(edge == 'left') {
            this.gradient = ctx.createRadialGradient(0, this.y, radius/5, 0, this.y, Math.abs(dist) + radius/2)
            this.ctx.moveTo(0, this.y)
            this.ctx.arc(0, this.y, radius, 0, Math.PI*2, true);
        } else if(edge == 'right') {
            this.gradient = ctx.createRadialGradient(this.ctx.canvas.width, this.y, radius/5, this.ctx.canvas.width, this.y, Math.abs(dist) + radius/2)
            this.ctx.moveTo(this.ctx.canvas.width, this.y)
            this.ctx.arc(this.ctx.canvas.width, this.y, radius, 0, Math.PI*2, true);
        }
        
            this.gradient.addColorStop(0, 'rgba(255, 0, 0, 0.2');
            this.gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0');
            this.ctx.fillStyle = this.gradient;
            // this.ctx.strokeStyle = 'rgba(100, 100, 100, 0.5)';
            this.ctx.fill()
            this.ctx.closePath()
            this.ctx.restore()
    
    }
    update(allObjs) {
        // Game over events
        if((this.x < -1000) || (this.x > this.ctx.canvas.width + 1000) || (this.y < -1000) || (this.y > this.ctx.canvas.height + 1000)) {
                game.stop(this.ctx, 'boundaries')
            } else if(this.fuel <= 0) {
                game.stop(this.ctx, 'fuel')
            }
        

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
        var that = this
        var sinAngle = Math.abs(Math.sin(that.currentDirection))
        var cosAngle = Math.abs(Math.cos(that.currentDirection))
        
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