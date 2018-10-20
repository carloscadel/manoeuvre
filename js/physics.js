function init() {
    (function () { /* Are you trying to break something? */
        var stage = new createjs.Stage("canvas"),
            mouse = {
                startX: 0,
                startY: 0
            },
            allObjs = [];

        function fillWindow(obj) {
            obj.width = window.innerWidth;
            obj.height = window.innerHeight;
        }
        fillWindow(stage.canvas);
        $(window).on('resize', function () {
            fillWindow(stage.canvas);
        });

        function random(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function createPlanet(x, y, r, vx, vy) {
            var obj = new createjs.Shape();
            obj.graphics.f("#08F").dc(0, 0, r);
            obj.regX = obj.regY = -r;
            obj.x = x;
            obj.y = y;
            obj.m = r / 100;
            obj.vx = vx;
            obj.vy = vy;
            obj.fx = obj.fy = obj.a = 0;
            obj.w = obj.h = r * 2;
            allObjs.push(obj);
            stage.addChild(obj);
        }
        stage.on("stagemousedown", function (e) {
            mouse.startX = e.stageX;
            mouse.startY = e.stageY;
        });
        stage.on("stagemouseup", function (e) {
            createPlanet(mouse.startX - 5, mouse.startY - 5, 2, e.stageX - mouse.startX, e.stageY - mouse.startY);
        });

        createjs.Ticker.on("tick", tick);
        createjs.Ticker.setFPS(60);

        function tick() {
            allObjs.forEach(function (obj1) {
                allObjs.forEach(function (obj2) {
                    var diffX = obj2.x - obj1.x,
                        diffY = obj2.y - obj1.y;
                    var distSquare = diffX*diffX + diffY*diffY;
                    var dist = Math.sqrt(distSquare);
                    if (obj1 != obj2) {
                        if (dist > obj1.w/2 + obj2.w/2) {
                            //If you add mass to the objects change to obj1.mass * obj2.mass instead of 50
                            var totalForce = 50/distSquare;
                            obj1.vx += totalForce * diffX / dist;
                            obj1.vy += totalForce * diffY / dist;
                        } else {
                            //Collision has occurred
                            //If you add mass to the objects change to
                            //tempX = (obj1.mass*obj1.vx + obj2.mass*obj2.vx)/(obj1.mass+obj2.mass);
                            //tempY = (obj1.mass*obj1.vy + obj2.mass*obj2.vy)/(obj1.mass+obj2.mass);
                            var tempX = (obj1.vx + obj2.vx)/2;
                            var tempY = (obj1.vy + obj2.vy)/2;
                            obj1.vx = tempX; obj2.vx = tempX;
                            obj1.vy = tempY; obj2.vy = tempY;
                        }
                    }
                });
            });
            
            allObjs.forEach(function (obj1) {
                obj1.x += obj1.vx / 25;
                obj1.y += obj1.vy / 25;
            });
            stage.update();
        }
    })();
}

$(document).on("ready", function () {
    init();
});