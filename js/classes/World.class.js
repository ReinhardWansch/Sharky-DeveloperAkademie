class World {
    ctx;
    bgLights = [];

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

    addBgLights(imgPath) {
        let bgLightsNew = new DrawableObject(imgPath);
        bgLightsNew.scaleToWidthOnly(this.ctx.canvas.width*2);
        bgLightsNew.xPos = -this.ctx.canvas.width/2;
        bgLightsNew.yPos = -360;
        this.bgLights.push(bgLightsNew);
    }
}