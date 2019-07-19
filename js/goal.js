class Goal {
  constructor(
    name,
    ctx,
    x,
    y,
    radius = 20,
    color = 'rgba(181, 189, 137, 0.3)'
  ) {
    this.name = name
    this.ctx = ctx
    this.x = ctx.canvas.width * x
    this.y = ctx.canvas.height * y
    this.radius = radius
    this.color = color
    this.angle = 0
    this.oscillator = 0
  }
  draw() {
    this.ctx.save()
    this.gradient = ctx.createRadialGradient(
      this.x,
      this.y,
      this.radius,
      this.x,
      this.y,
      this.radius * this.oscillator + this.radius + 10
    )
    this.gradient.addColorStop(0, this.color)
    this.gradient.addColorStop(1, 'rgba(255, 255, 255, 0')
    this.ctx.fillStyle = this.gradient
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0)'
    this.ctx.beginPath()
    this.ctx.moveTo(this.x, this.y)
    this.ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2, true)
    this.ctx.fill()
    this.ctx.closePath()
    this.ctx.restore()
  }
  update() {}
  oscillator() {}
}
