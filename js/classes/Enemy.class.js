class Enemy extends Mob {
    static IMG_PATH= './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png';

    constructor() {
        super();
        this.loadImage(Enemy.IMG_PATH);
        this.width= 60;
        this.height= 49;
        this.xPos= 250 + Math.random() * 450;
        this.yPos= 280;
    }
}