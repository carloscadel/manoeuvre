// widthxheight = 1400x700

var levels = 
[
    {
        name: "Intro",
        
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
                    radius: 20,
                    vx: 0,
                    vy: 0, 
                    color: 'rgb(114, 158, 161)',
                    fixedPos: true,
                    isTarget: false,
                    hasGravity: true}],

        sats:  [
                {   name: "sat1",
                    x: 1/2,    
                    y: 1/4,
                    radius: 10,
                    vx: 3,
                    vy: 0,
                    color: 'rgb(152, 206, 0)',
                    fixedPos: false,
                    isTarget: true,
                    hasGravity: false,
                    assignedGoal: 0},

                {   name: "sat2",
                    x: 1/2,    
                    y: 3/4,
                    radius: 10,
                    vx: -3,
                    vy: 0,
                    color: 'rgb(255, 107, 53)',
                    fixedPos: false,
                    isTarget: false,
                    hasGravity: false,
                    assignedGoal: 0}],

        goals: [{   name: 'goal0',
                    x: 7/8, 
                    y: 1/8, 
                    radius: 30,
                    color: 'rgba(0, 255, 0, 0.3)'
                }]
                    
    }, 
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
                    color: 'rgb(114, 158, 161)',
                    fixedPos: true,
                    isTarget: false,
                    hasGravity: true}

                ],

        sats:  [{   name: "sat1",
                    x: 1/2, 
                    y: 1/8, 
                    radius: 10,
                    vx: 5,
                    vy: 0,
                    color: 'rgb(255, 107, 53)',
                    fixedPos: false,
                    isTarget: false,
                    hasGravity: false,
                    assignedGoal: undefined
                },
                {   name: "sat2",
                    x: 1/4, 
                    y: 1/2, 
                    radius: 10,
                    vx: 0,
                    vy: 5,
                    color: 'rgb(255, 107, 53)',
                    fixedPos: false,
                    isTarget: false,
                    hasGravity: false,
                    assignedGoal: undefined
                },
                {   name: "sat3",
                    x: 1/2,
                    y: 7/8,
                    radius: 10,
                    vx: -5,
                    vy: 0,
                    color: 'rgb(255, 107, 53)',
                    fixedPos: false,
                    isTarget: false,
                    hasGravity: false,
                    assignedGoal: undefined
                },
                {   name: "sat4",
                    x: 3/4,    
                    y: 1/2,
                    radius: 10,
                    vx: 0,
                    vy: -5,
                    color: 'rgb(152, 206, 0)',
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
                    
    },
    {
        name: "Level 2",
        
        spaceship: {x: 1/9, 
                    y: 1/9,
                    size: 10,
                    vx: 0,
                    vy: 0,
                    color: 'grey',
                    fixedPos: false
                },

        planets: [{ x: 0.7, 
                    y: 0.7, 
                    radius: 75,
                    vx: 0,
                    vy: 0, 
                    color: 'rgb(114, 158, 161)',
                    fixedPos: true,
                    isTarget: false,
                    hasGravity: true}

                ],

        sats:  [{   name: "sat1",
                    x: 0.7, 
                    y: 1.0, 
                    radius: 10,
                    vx: -5,
                    vy: 0,
                    color: 'rgb(255, 107, 53)',
                    fixedPos: false,
                    isTarget: false,
                    hasGravity: false,
                    assignedGoal: undefined
                },
                {   name: "sat2",
                    x: 1.0, 
                    y: 0.7, 
                    radius: 10,
                    vx: 0,
                    vy: 5,
                    color: 'rgb(255, 107, 53)',
                    fixedPos: false,
                    isTarget: false,
                    hasGravity: false,
                    assignedGoal: undefined
                },
                {   name: "sat3",
                    x: 0.7,
                    y: 0.3,
                    radius: 10,
                    vx: -5,
                    vy: 0,
                    color: 'rgb(152, 206, 0)',
                    fixedPos: false,
                    isTarget: true,
                    hasGravity: false,
                    assignedGoal: 0
                },
                {   name: "sat4",
                    x: 0.7,    
                    y: 0.5,
                    radius: 10,
                    vx: -5,
                    vy: 0,
                    color: 'rgb(255, 107, 53)',
                    fixedPos: false,
                    isTarget: false,
                    hasGravity: false,
                    assignedGoal: undefined}],

        goals: [{   name: 'goal0',
                    x: 0.2, 
                    y: 0.2, 
                    radius: 30,
                    color: 'rgba(0, 255, 0, 0.3)'
                }]
                    
    }
]