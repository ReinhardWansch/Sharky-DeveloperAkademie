class Keyboard {

    constructor() {
        this.bindKeyHandlersToThisObject();
    }

    /**
     * To use the handler functions as callbacks shomewhere else, 
     * they have to be bound to the object, 
     * beacause they are called in a different context and
     * they use the 'this' keyword.
     */
    bindKeyHandlersToThisObject() {
        this.keydownHandler = this.keydownHandler.bind(this);
        this.keyupHandler = this.keyupHandler.bind(this);
    }

    addKeyListenersTo(object) {
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