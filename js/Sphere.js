class Sphere {
    constructor(ctx, x, y, radius, vx = 2, vy = 2, color = 'orange', fixedPos = false, isTarget = false, hasGravity = true, assignedGoal) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
        this.radius = radius
        this.color = color
        this.mass = this.radius //just simplifying
        this.fixedPos = fixedPos
        this.isTarget = isTarget
        this.assignedGoal = assignedGoal
        this.isHooked = false
        this.hasGravity = hasGravity
        this.isWin = false
    }
    draw() {
        if(this.isTarget == true) { this.drawTarget() }
        this.ctx.save()
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
        this.ctx.restore()

    }

    update(allObjs) {
        var that = this

        if(that.fixedPos != true){
            if((that.isTarget == true) && (that.isHooked == true) && (distance(that, that.assignedGoal) <= that.assignedGoal.radius)) {// reduce
                that.isWin = true
                this.x = this.assignedGoal.x
                this.y = this.assignedGoal.y
            } else if((that.isTarget == true) && (that.isHooked == true) && (that.isWin == false)) {// reduce
                this.x = spaceShip.x
                this.y = spaceShip.y
            } else if((that.isTarget == true) && (distance(that, spaceShip) < spaceShip.size) && (that.isWin == false)) {
                this.isHooked = true
                this.x = spaceShip.x
                this.y = spaceShip.y
            } else {
                var vxTemp = 0
                var vyTemp = 0
                var distX = 0
                var distY = 0
                var distSq = 0
                var dist = 0
                var force = 0
                allObjs.forEach(function(obj) {
                    if((obj != that) && (obj.isWin == false) && (obj.hasGravity == true) ){
                        distX = Math.abs(that.x - obj.x)
                        distY = Math.abs(that.y - obj.y)
                        distSq = distX*distX + distY*distY;
                        dist = Math.sqrt(distSq);
                        force = gravConst*obj.mass/distSq;
                        
                        if((that.x < obj.x) && (that.y < obj.y)) { //top-left
                            vxTemp += Math.sqrt(2 * force * distX / dist);
                            vyTemp += Math.sqrt(2 * force * distY / dist);
                        } else if((that.x < obj.x) && (that.y > obj.y)) { //bottom-left
                            vxTemp += Math.sqrt(2 * force * distX / dist);
                            vyTemp += -1*Math.sqrt(2 * force * distY / dist);
                        } else if((that.x > obj.x) && (that.y > obj.y)) { //bottom-right
                            vxTemp += -1*Math.sqrt(2 * force * distX / dist);
                            vyTemp += -1*Math.sqrt(2 * force * distY / dist);
                        } else if((that.x > obj.x) && (that.y < obj.y)) { //top-right
                            vxTemp += -1*Math.sqrt(2 * force * distX / dist);
                            vyTemp += Math.sqrt(2 * force * distY / dist);
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

    drawTarget() {
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

    }
}