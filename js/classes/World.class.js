class World {
    ctx;
    bgLights= [];

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.addBgLights('./img/3. Background/Layers/1. Light/COMPLETO.png');
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.drawBgLights();
        window.requestAnimationFrame(() => this.draw());
    }

    drawBgLights() {
        this.bgLights.forEach(bgObject => {
            bgObject.draw(this.ctx);
        });
    }

    addBgLights(path, scale=1, xPos=0, yPos=0) {
        this.bgLights.push(new BgLights(path, this.ctx, 1, 0, -600, -45));
    }
}