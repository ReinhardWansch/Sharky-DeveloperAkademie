class World {
    ctx;
    bgObjects= [
        new BgObject('./img/3. Background/Layers/2. Floor/D.png')
    ]
    character= new Character();
    enemies= [
        new Enemy(),
        new Enemy(),
        new Enemy()
    ];

    constructor(canvas) {
        this.ctx= canvas.getContext('2d');
        this.draw();
    }

    draw() {
        // console.log('World: draw()'); ///DEBUG
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.drawMoBAll(this.bgObjects);
        this.drawMoB(this.character);
        this.drawMoBAll(this.enemies);
        requestAnimationFrame(()=>this.draw());
    }

    drawMoB(mob) {
        this.ctx.drawImage(mob.img, mob.xPos, mob.yPos, mob.width, mob.height);
    }

    drawMoBAll(mobs) {
        mobs.forEach( mobI => this.drawMoB(mobI) );
    }

}