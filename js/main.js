// window.onload = function() {

var canvas = document.getElementById('spaceCanvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height
var gravConst = 4
// var gravConst = 6.67e10-11
const pi = Math.PI
var bg = new Background(ctx)
var planet = new Sphere(ctx, canvas.width/2, canvas.height/2, 75, 0, 0, 'rgb(0, 127, 127)', true)
var sat1 = new Sphere(ctx, canvas.width/2 - 200, canvas.height/2, 10, 0, -7, 'lightsalmon')
var sat2 = new Sphere(ctx, canvas.width/2, canvas.height/2 + 200, 10, 9, 0, 'purple')
var sat3 = new Sphere(ctx, canvas.width/2 + 200, canvas.height/2, 10, 0, 7, 'lightsalmon')
var sat4 = new Sphere(ctx, 200, 100, 10, 0, 5, 'lightblue', false, true)
var spaceShip = new SpaceShip(ctx, 100, 100, 10, 0, 0, 'grey', false)
var goal1 = new Goal(ctx, canvas.width, 0, 200)
// ctx.translate(ctx.width/2, ctx.height/2)
// var allObjs = [spaceShip]
var allObjs = [planet, sat1, sat2, sat3, sat4] // elements in here will affect other elements


// setInterval(function() {
//     update()
//     drawEverything()
//     }, 1000/100)


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
    planet.update(allObjs)
    sat1.update(allObjs)
    sat2.update(allObjs)
    sat3.update(allObjs)
    sat4.update(allObjs)
    spaceShip.update(allObjs)
}

function drawEverything() {
    ctx.clearRect(0,0,canvas.width, canvas.height)
    planet.draw()
    sat1.draw()
    sat2.draw()
    sat3.draw()
    goal1.draw()
    sat4.draw()
    spaceShip.draw()
}
 startGame()

// }
    