// widthxheight = 1400x700

var levels = [
    {
        name: "Level 1",
        
        spaceship: {x: 1/9, 
                    y: 1/9,
                    size: 10,
                    vx: 0,
                    vy: 0,
                    color: 'grey',
                    fixedPos: false
                },
        
        planets: [{ x: 1/2, 
                    y: 1/2, 
                    radius: 75,
                    vx: 0,
                    vy: 0, 
                    color: 'rgb(0, 127, 127)',
                    fixedPos: true,
                    isTarget: false,
                    hasGravity: true}],

        sats:  [{   name: "sat1",
                    x: 1/4, 
                    y: 1/2, 
                    radius: 10,
                    vx: 0,
                    vy: -5,
                    color: 'lightsalmon',
                    fixedPos: false,
                    isTarget: false,
                    hasGravity: false,
                    assignedGoal: undefined
                },
                {   name: "sat2",
                    x: 1/2, 
                    y: 1/4, 
                    radius: 10,
                    vx: 7,
                    vy: 0,
                    color: 'lightsalmon',
                    fixedPos: false,
                    isTarget: false,
                    hasGravity: false,
                    assignedGoal: undefined
                },
                {   name: "sat3",
                    x: 3/4,
                    y: 1/2,
                    radius: 10,
                    vx: 0,
                    vy: 5,
                    color: 'lightsalmon',
                    fixedPos: false,
                    isTarget: false,
                    hasGravity: false,
                    assignedGoal: undefined
                },
                {   name: "sat4",
                    x: 1/2,    
                    y: 3/4,
                    radius: 10,
                    vx: -7,
                    vy: 0,
                    color: 'lightgreen',
                    fixedPos: false,
                    isTarget: true,
                    hasGravity: false,
                    assignedGoal: 0}],
        goals: [{   name: 'goal0',
                    x: 7/8, 
                    y: 1/8, 
                    radius: 30,
                    color: 'rgba(0, 255, 0, 0.3)'
                }]
                    
    }
]