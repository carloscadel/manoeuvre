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

