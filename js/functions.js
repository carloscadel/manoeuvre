function checkIfCollide(obj1, obj2) {
    var sum = obj1.radius + obj2.radius
    var dist = Math.abs(Math.sqrt(obj2.x - obj1.x) + Math.sqrt(obj2.y - obj1.y))
    if(dist <= sum) {
        return true
    } else {
        return false
    }
}

function distance(obj1, obj2) {
    return Math.abs(Math.sqrt(obj2.x - obj1.x) + Math.sqrt(obj2.y - obj1.y))
}

var oscillator = setInterval(function() { 
    angle += Math.PI/200 //denominator controls the speed of the oscillation
    osc = Math.abs(Math.cos(angle))
}, 1000/60)


var oscTargetRadius = 10
var oscTarget = setInterval(function() {
    oscTargetRadius += 1
    if(oscTargetRadius >= 50) {
        oscTargetRadius = 10
    }
}, 1000/60)

// function drawLimit(ctx, TopBottomLeftRight, spaceShip.x, spaceShip.y) {
//     var radius = 200


//     if(TopBottomLeftRight == 'top') {
//         ctx.save()
//         var gradient = ctx.createRadialGradient(spaceShip.x, 0, radius/5, spaceShip.x, 0, radius)
//         gradient.addColorStop(0, 'red');
//         gradient.addColorStop(1, 'rgba(255, 255, 255, 0.1');
//         ctx.fillStyle = gradient;
//         ctx.strokeStyle = 'rgba(255, 255, 255, 0)';
//         ctx.beginPath()
//         ctx.moveTo(spaceShip.x, 0)
//         ctx.arc(spaceShip.x, 0, radius, 0, Math.PI*2, true);
//         ctx.fill()
//         ctx.closePath()
//         ctx.restore()
//     }


// }