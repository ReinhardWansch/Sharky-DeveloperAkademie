class World {
    ctx;
    /*
    bgObjects = [
        new BgObject('./img/3. Background/Layers/2. Floor/D.png')
    ]
    character = new Character();
    enemies = [
        new Enemy(),
        new Enemy(),
        new Enemy()
    ];
    */
    debugObject= new DrawableObject('./img/6.Botones/Start/1.png', 0.5, 10, 10);

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.draw();
    }

    draw() {
        console.log('World: draw()'); ///DEBUG
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.debugObject.draw(this.ctx); ///DEBUG
        requestAnimationFrame(()=>this.draw());
    }

}