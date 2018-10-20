class Planet {
    constructor(ctx, radius = 50, color = 'white') {
        this.x = ctx.canvas.width/2
        this.y = ctx.canvas.height/2
        this.radius = radius
        this.color = color
    }
    update() {
        
    }
    draw() {
        ctx.save()
        var grd = ctx.createRadialGradient(this.x, this.y, 5, this.x, this.y, 100);
        grd.addColorStop(0,"white");
        grd.addColorStop(1, 'rgb(88, 88, 88)');
        ctx.fillStyle = grd;
        ctx.shadowBlur = 15;
        ctx.shadowColor = "rgb(35, 35, 35)";
        ctx.strokeStyle = 'rgba(255, 255, 255, 0)';
        ctx.moveTo(this.x, this.y)
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
        ctx.stroke();
        ctx.fill();
        ctx.restore()
    }
}