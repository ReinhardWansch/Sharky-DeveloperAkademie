class Enemy extends Mob {
    static IMG_PATH= './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png';

    constructor() {
        super(60,50,550,350);
        this.loadImage(Enemy.IMG_PATH);
    }
}