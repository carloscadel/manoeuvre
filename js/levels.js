// widthxheight = 1400x700

var levels = [
    {
        name: "Level 1",
        
        spaceship: {x: 100, 
                    y: 500,
                    size: 10,
                    vx: 0,
                    vy: 0,
                    color: 'grey',
                    fixedPos: false
                },
        
        planets: [{ x: 700, 
                    y: 350, 
                    radius: 75,
                    vx: 0,
                    vy: 0, 
                    color: 'rgb(0, 127, 127)',
                    fixedPos: true,
                    isTarget: false,
                    hasGravity: true}],

        sats:  [{   name: "sat1",
                    x: 500, 
                    y: 350, 
                    radius: 10,
                    vx: 0,
                    vy: -7,
                    color: 'lightsalmon',
                    fixedPos: false,
                    isTarget: false,
                    hasGravity: true,
                    assignedGoal: undefined
                },
                {   name: "sat2",
                    x: 900, 
                    y: 350, 
                    radius: 10,
                    vx: 0,
                    vy: -7,
                    color: 'lightsalmon',
                    fixedPos: false,
                    isTarget: false,
                    hasGravity: true,
                    assignedGoal: undefined
                },
                {   name: "sat3",
                    x: 350,
                    y: 500,
                    radius: 10,
                    vx: 0,
                    vy: -7,
                    color: 'lightsalmon',
                    fixedPos: false,
                    isTarget: false,
                    hasGravity: true,
                    assignedGoal: undefined
                },
                {   name: "sat4",
                    x: 350,    
                    y: 200,
                    radius: 10,
                    vx: 0,
                    vy: -7,
                    color: 'lightsalmon',
                    fixedPos: false,
                    isTarget: false,
                    hasGravity: true,
                    assignedGoal: undefined}],
        goals: [{   x: 1300, 
                    y: 100, 
                    radius: 20,
                    color: 'rgba(0, 255, 0, 0.3)'}]
                    
    }
]