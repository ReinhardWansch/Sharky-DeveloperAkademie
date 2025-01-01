class Character extends Mob {
    static IMG_PATH= './img/1.Sharkie/1.IDLE/1.png';

    constructor() {
        super(101,125,0,300);
        this.loadImage(Character.IMG_PATH);
    }
}