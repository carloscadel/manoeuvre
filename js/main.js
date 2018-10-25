// window.onload = function() {
    
//canvas for the intro
var introCanvas = document.getElementById('introCanvas')
var ctxIntro = introCanvas.getContext('2d')
ctxIntro.canvas.width = window.innerWidth
ctxIntro.canvas.height = window.innerHeight

//canvas for the game
var canvas = document.getElementById('spaceCanvas')
var ctx = canvas.getContext('2d')
ctx.canvas.width = window.innerWidth
ctx.canvas.height = window.innerHeight
var width = canvas.width
var height = canvas.height


var gravConst = 3
// var gravConst = 6.67e10-11
const pi = Math.PI

$('#spaceCanvas').hide()

//* DO NOT DELETE
//Levels to be called 
var game = new Game(ctxIntro, levels[0])//Intro level
// var game = new Game(ctx, levels[1])
// var game = new Game(ctx, levels[2])
// var game = new Game(ctx, levels[3])

game.start()

$('#training-button').click(function() {
})


$('#play-button').click(function() {
    // $('#introCanvas').hide()
    $('#introCanvas').fadeOut(1000)
    $('#frontpage').fadeOut(1000)
    $('#spaceCanvas').fadeIn(2000)
    game = new Game(ctx, levels[1])
    game.start()
    document.onkeydown = function(e) {
        e.preventDefault()
        game.spaceShip.move(e.key) 
    }
})


$('#about-button').click(function() {
    // console.log('click')
})






//* DO NOT DELETE UP TO HERE

