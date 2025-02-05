class Keyboard {

    constructor() {
        this.bindKeyHandlersToThisObject();
    }

    bindKeyHandlersToThisObject() {
        this.keydownHandler = this.keydownHandler.bind(this);
        this.keyupHandler = this.keyupHandler.bind(this);
    }

    addKeyListeners(object){
        object.addEventListener('keydown', this.keydownHandler);
        object.addEventListener('keyup', this.keyupHandler);
    }
    
    keydownHandler(event) {
        this[event.key] = true;
    }
    
    keyupHandler(event) {
        this[event.key] = false;
    }


}