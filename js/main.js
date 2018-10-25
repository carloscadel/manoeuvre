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
var requestId

var game = new Game(ctxIntro, levels[0])//Intro level

function frontPage() {
    game.isStarted = false
    game = new Game(ctxIntro, levels[0])//Intro level
    $('#frontpage').hide()
    $('#spaceCanvas').hide()
    $('.level-transition').hide()
    $('.transition-buttons').hide()
    $('#introCanvas').fadeIn(500)
    $('#frontpage').fadeIn(500)
    game.start()
    
}

frontPage()
//* DO NOT DELETE
//Levels to be called 
// var game = new Game(ctx, levels[1])
// var game = new Game(ctx, levels[2])
// var game = new Game(ctx, levels[3])

// game.start()


$('#training-button').click(function() {
})


$('#play-button').click(function() {
    // $('#introCanvas').hide()
    $('#introCanvas').fadeOut(500)
    $('#frontpage').fadeOut(500)

    setTimeout(() => {
        $('#transition-msg').text('Level 1')
        $('.level-transition').fadeIn(500)
    }, 500);

    setTimeout(() => {
        $('.level-transition').fadeOut(500)
    }, 2000);

    setTimeout(() => {
        $('#spaceCanvas').fadeIn(500)
        game = new Game(ctx, levels[1])
        game.start()
    }, 2500);

    document.onkeydown = function(e) {
        e.preventDefault()
        game.spaceShip.move(e.key) 
    }   
})


$('#about-button').click(function() {
    // console.log('click')
})

function gameOver(reason) {

    switch(reason) {

        case 'boundaries':
            game.isStarted = false
            $('#spaceCanvas').fadeOut(500)
            $('#transition-msg').text('Game Over')
            $('#transition-description').text("You went too far")
            setTimeout(() => {
                $('.level-transition').fadeIn(500)
            }, 1000);
            setTimeout(() => {
                $('#retry').fadeIn(500)
                $('#next-level').hide()
                $('#main-page').fadeIn(500)
                $('.transition-buttons').fadeIn(500)
            }, 1250);

            $('#main-page').click(function() {
                $('#retry').hide()
                $('#main-page').hide()
                $('.level-transition').hide()
                
                frontPage()
            })
                
        break;

        case 'fuel':
            $('#spaceCanvas').fadeOut(500)
            $('#transition-msg').text('Game Over')
            $('#transition-description').text("You ran out of fuel")
            setTimeout(() => {
                $('.level-transition').fadeIn(500)
            }, 1000);
        break;

        case 'win':
            $('#spaceCanvas').fadeOut(500)
            $('#transition-msg').text('Nice!')
            $('#transition-description').text("You are the chosen one")
            setTimeout(() => {
                $('.level-transition').fadeIn(500)
            }, 1000);

        break;
    }
}






//* DO NOT DELETE UP TO HERE

