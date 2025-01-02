class Character extends Mob {
    static IMG_PATH= './img/1.Sharkie/1.IDLE/1.png';

    constructor() {
        super();
        this.loadImage(Character.IMG_PATH);
    }
}