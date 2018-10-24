class Game {
    constructor(ctx, level) {
        this.ctx = ctx
        this.goals = []
        this.planets = []
        this.sats = []
        this.spaceShip = new SpaceShip(this.ctx, level.spaceship.x, level.spaceship.y, level.spaceship.size, level.spaceship.vx, level.spaceship.vy, level.spaceship.color, level.spaceship.fixedPos)
        this.bg = new Background(this.ctx, this.ctx.canvas.width, this.ctx.canvas.height)

        // console.log(level)
        // console.log(this.spaceShip)

        for (var i = 0; i < level.goals.length; i++) {
            var goal = new Goal(level.goals[i].name, this.ctx, level.goals[i].x, level.goals[i].y, level.goals[i].radius, level.goals[i].color, osc)
            this.goals.push(goal)
        }
        for (var j = 0; j < level.planets.length; j++) {
            var planet = new Sphere(this.ctx, level.planets[j].x, level.planets[j].y, level.planets[j].radius, level.planets[j].vx, level.planets[j].vy, level.planets[j].color, level.planets[j].fixedPos, level.planets[j].isTarget, level.planets[j].hasGravity)
            this.planets.push(planet)
        }
        for (var k = 0; k < level.sats.length; k++) {
            // console.log( level.sats[k].assignedGoal)
            var sat = new Sphere(this.ctx, level.sats[k].x, level.sats[k].y, level.sats[k].radius, level.sats[k].vx, level.sats[k].vy, level.sats[k].color, level.sats[k].fixedPos, level.sats[k].isTarget, level.sats[k].hasGravity, level.sats[k].assignedGoal) 
            console.log(sat)
            this.sats.push(sat)
        }

        this.allObjs = [...this.planets, ...this.sats]

        
        // console.log('allObjs', this.allObjs)
  
    }
    draw() {
        this.ctx.clearRect(0,0,this.ctx.canvas.width, this.ctx.canvas.height)

        for (var i = 0; i < this.goals.length; i++) {
            this.goals[i].draw()
        }
        for (var j = 0; j < this.planets.length; j++) {
            this.planets[j].draw()
        }
        for (var k = 0; k < this.sats.length; k++) {
            this.sats[k].draw()
        }
        this.spaceShip.draw()
        // this.bg.draw()
        

    }

    update() {
        for (var i = 0; i < this.goals.length; i++) {
            this.goals[i].update()
        }
        for (var j = 0; j < this.planets.length; j++) {
            this.planets[j].update(this.allObjs)
        }
        for (var k = 0; k < this.sats.length; k++) {
            this.sats[k].update(this.allObjs)
        }
        this.spaceShip.update(this.allObjs)
        this.bg.update()
    }

    start() {
        var that = this
        this.update()
        this.draw()
        
        // window.requestAnimationFrame(that.start)
        window.requestAnimationFrame(function() {
            that.start()
        })
    }
}