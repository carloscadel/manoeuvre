// window.onload = function() {

var canvas = document.getElementById('spaceCanvas')
var ctx = canvas.getContext('2d')
ctx.canvas.width = window.innerWidth
ctx.canvas.height = window.innerHeight
var width = canvas.width
var height = canvas.height
var gravConst = 3
// var gravConst = 6.67e10-11
const pi = Math.PI


// var game = new Game(ctx, levels[0])

// var game = new Game(ctx, levels[1])
var game = new Game(ctx, levels[2])
// var game = new Game(ctx, levels[3])


game.start()

document.onkeydown = function(e) {
    e.preventDefault()
    game.spaceShip.move(e.key) 
}
