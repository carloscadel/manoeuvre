// window.onload = function() {

var canvas = document.getElementById('spaceCanvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height
var gravConst = 1.5
var bg = new Background(ctx)
var planet = new Sphere(ctx, canvas.width/2, canvas.height/2, 75, 0, 0, 'rgb(0, 127, 127)')
var sat1 = new Sphere(ctx, canvas.width/2 - 100, canvas.height/2 - 100, 10, 1, -3, 'lightsalmon')
var sat2 = new Sphere(ctx, canvas.width/2 - 100, canvas.height/2 + 100, 10, 2, 1, 'lightsalmon')
var sat3 = new Sphere(ctx, canvas.width/2 + 100, canvas.height/2 + 100, 10, -1, 3, 'lightsalmon')
var sat4 = new Sphere(ctx, canvas.width/2 + 100, canvas.height/2 - 100, 10, -2, -1, 'lightsalmon')
var spaceShip = new SpaceShip(ctx)
// ctx.translate(ctx.width/2, ctx.height/2)
var allObjs = [planet, sat1, sat3]
// var allObjs = [sat1, sat2, sat3, sat4]


setInterval(function() {
    update()
    drawEverything()
  }, 1000/100)

function update() {
    // planet.update(allObjs)
    sat1.update(allObjs)
    // sat2.update(allObjs)
    sat3.update(allObjs)
    // sat4.update(allObjs)
}

function drawEverything() {
    ctx.clearRect(0,0,canvas.width, canvas.height)
    planet.draw()
    sat1.draw()
    // sat2.draw()
    sat3.draw()
    // sat4.draw()
}

// }
