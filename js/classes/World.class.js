class World {
    ctx;
    debugObject = new MOb('./spielwiese/200x200-underworld.jpg', 1);

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.draw();
    }

    draw() {
        console.log('draw()'); ///DEBUG
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.debugObject.draw(this.ctx); ///DEBUG
        window.requestAnimationFrame(() => this.draw());
    }

}