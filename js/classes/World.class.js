class World {
    ctx;
    bgObjects = [
        new MoB('./img/3. Background/Layers/2. Floor/D.png', 0.25)
    ]
    /*
    character = new Character();
    enemies = [
        new Enemy(),
        new Enemy(),
        new Enemy()
    ];
    */
    // debugObject= new MoB('./img/6.Botones/Start/1.png');

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.draw();
    }

    draw() {
        // console.log('World: draw()'); ///DEBUG
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        // draw background objects
        this.bgObjects.forEach((bgObject) => { 
            bgObject.draw(this.ctx);
        });
        // move background objects
        this.bgObjects.forEach((bgObject) => { 
            bgObject.moveForNextFrame();
        });
        requestAnimationFrame(()=>this.draw());
    }

}