class Enemy extends Mob {
    static IMG_PATH= './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png';
    
    width= 60;
    height= 49;
    xPos= 250 + Math.random() * 450;
    yPos= 280;

    constructor() {
        super();
        this.loadImage(Enemy.IMG_PATH);
    }
}