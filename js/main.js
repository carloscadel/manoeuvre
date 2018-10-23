// window.onload = function() {

var canvas = document.getElementById('spaceCanvas')
var ctx = canvas.getContext('2d')
ctx.canvas.width = window.innerWidth
ctx.canvas.height = window.innerHeight
var width = canvas.width
var height = canvas.height
var gravConst = 2
// var gravConst = 6.67e10-11
const pi = Math.PI

// var osc = 0
// var angle = 0
var goal1 = new Goal(ctx, canvas.width - 100, 100, 200)
var planet = new Sphere(ctx, canvas.width/2, canvas.height/2, 75, 0, 0, 'rgb(0, 127, 127)', true, false, true)
var sat1 = new Sphere(ctx, canvas.width/2 - 200, canvas.height/2, 10, 0, -7, 'lightsalmon', false, false, true)
var sat2 = new Sphere(ctx, canvas.width/2, canvas.height/2 + 200, 10, -7, 0, 'lightsalmon', false, false, true)
var sat3 = new Sphere(ctx, canvas.width/2 + 200, canvas.height/2, 10, 0, 7, 'lightsalmon', false, false, true)
var sat4 = new Sphere(ctx, canvas.width/2, canvas.height/2 - 200, 10, 7, 0, 'lightgreen', false, true, true, goal1)
var spaceShip = new SpaceShip(ctx, 100, canvas.height - 100, 10, 0, 0, 'grey', false)
var bg = new Background(ctx, canvas.width, canvas.height)
// ctx.translate(ctx.width/2, ctx.height/2)
// var allObjs = [spaceShip]
var allObjs = [planet, sat1, sat2, sat3, sat4] // elements in here will affect other elements
// var asteroids = [planet, sat4]

// setInterval(function() {
//     update()
//     drawEverything()
//     }, 1000/60)

function startGame() {
    update()
    drawEverything()
    window.requestAnimationFrame(startGame)
}

document.onkeydown = function(e) {
    // console.log(e.key)
    e.preventDefault()
    spaceShip.move(e.key)
}
    
function update() {
    allObjs.forEach(el => el.update(allObjs))
    spaceShip.update(allObjs)
    bg.update()
}

function drawEverything() {
    ctx.clearRect(0,0,canvas.width, canvas.height)
    planet.draw()
    sat1.draw()
    sat2.draw()
    sat3.draw()
    goal1.draw(osc)
    sat4.draw()
    spaceShip.draw()
    bg.update(ctx, 'top')
}

 startGame()

// }
    