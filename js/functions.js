function checkIfCollide(obj1, obj2) {
  var sum = obj1.radius + obj2.radius
  var dist = Math.abs(Math.sqrt(obj2.x - obj1.x) + Math.sqrt(obj2.y - obj1.y))
  if (dist <= sum) {
    return true
  } else {
    return false
  }
}

function distance(obj1, obj2) {
  return Math.sqrt(Math.pow(obj2.x - obj1.x, 2) + Math.pow(obj2.y - obj1.y, 2))
}

var oscTargetRadius = 10
var osc = 0
var angle = 0

var oscillator = setInterval(function() {
  //this is a growing/shrinking oscillator for the goals
  angle += Math.PI / 200 //denominator controls the speed of the oscillation

  for (let i = 0; i < game.goals.length; i++) {
    game.goals[i].oscillator = Math.abs(Math.cos(angle))
  }

  //and this is a grow-and-repeat oscillator
  oscTargetRadius += 0.5
  if (oscTargetRadius >= 50) {
    oscTargetRadius = 10
  }

  if (game.spaceShip.fuel > 0) {
    game.spaceShip.fuel -= game.spaceShip.fuelRate / 60
  }

  // console.log(game.goals[0].oscillator)
}, 1000 / 60)

var breaker = 1
// function slowDown() {
//     var breaker = 1
//     var gameOver = setInterval(function() {
//         while(breaker > 0){
//             return breaker -= 0.0005
//             console.log(breaker)
//         }
//     }, 1000/20)

// }
