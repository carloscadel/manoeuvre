// window.onload = function() {

var canvas = document.getElementById('spaceCanvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height
const G = 6.674e-11
var bg = new Background(ctx)
var planet = new Sphere(ctx, canvas.width/2, canvas.height/2, 50, 'rgb(0, 127, 127)')
var satellite = new Sphere(ctx, canvas.width/2 + 100, canvas.height/2 + 100, 15, 'white')
var spaceShip = new SpaceShip(ctx)
// ctx.translate(ctx.width/2, ctx.height/2)



setInterval(function() {
    update()
    drawEverything()
  }, 1000/60)

function update() {
    // bg.update()
    // planet.update()
    satellite.update()
}

function drawEverything() {
    ctx.clearRect(0,0,canvas.width, canvas.height)
    planet.draw()
    satellite.draw()
    // spaceShip.draw()
}

// }
