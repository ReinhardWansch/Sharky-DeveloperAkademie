// TODO: Water und Lights müssen noch verschiedene Geschwindigkeiten haben
class World {
    ctx;
    bgLights=[];
    bgObjects = [];

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        //water
        this.addMultipleBgObjects('./img/3. Background/Layers/5. Water/D.png', this.ctx.canvas.width, 3, 0);
        //lights
        this.addMultipleBgObjects('./img/3. Background/Layers/1. Light/COMPLETO.png', this.ctx.canvas.width*2, 3, -360);
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.drawBgObjects();
        window.requestAnimationFrame(() => this.draw());
    }

    /*################*/
    /*## BG OBJECTS ##*/
    /*################*/

    drawBgObjects() {
        this.bgObjects.forEach(bgObject => {
            bgObject.draw(this.ctx);
        });
    }

    addMultipleBgObjects(imgPath, width, amount, yPos) {
        let xPos = 0;
        for (let i = 0; i < amount; i++) {
            xPos= i*width;
            this.addBgObject(imgPath, width, xPos, yPos);
        }
    }

    addBgObject(imgPath, width, xPos, yPos) {
        let bgLightNew = new MOb(imgPath, 1, xPos, yPos);
        bgLightNew.img.decode()
            .then(() => bgLightNew.scaleToWidthOnly(width));
        this.bgObjects.push(bgLightNew);
    }

    /*###########*/
    /*## WATER ##*/
    /*###########*/



}
