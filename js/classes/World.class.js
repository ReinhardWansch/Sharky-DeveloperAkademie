class World {
    ctx;
    /*
    bgObjects = [
        new MOb('./img/3. Background/Layers/2. Floor/D.png', 0.25)
    ]
    character = new Character();
    enemies = [
        new Enemy(),
        new Enemy(),
        new Enemy()
    ];
    */
    debugObject = new MOb('./img/3. Background/Layers/5. Water/D1.png', 1, true);
    // debugObject = new MOb('./img/4. Marcadores/1. Coins/1.png', 1, true);

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        // this.debugObject.scaleToWidthOnly(canvas.width); ///DEBUG
        // this.debugObject.scaleToHeightOnly(canvas.height); ///DEBUG
        this.draw();
    }

    draw() {
        // console.log('draw()'); ///DEBUG
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.debugObject.draw(this.ctx); ///DEBUG
        this.debugObject.moveForNextFrameRepeat(this.ctx); ///DEBUG
        /*
        // draw background objects
        this.bgObjects.forEach((bgObject) => { 
            bgObject.draw(this.ctx);
        });
        // move background objects
        this.bgObjects.forEach((bgObject) => { 
            bgObject.moveForNextFrame();
        });
        */
        window.requestAnimationFrame(() => this.draw());
    }

}