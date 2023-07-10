import Adapter from "./Adapter.js"

export default class Agreement {
    constructor({container}) {
        this.$container = container
        this.$trigger = document.querySelector(".agreementTrigger")
        this.adapter = new Adapter();
        this.render(container)
        this.addListenerToContainer();
        this.addListenerToTrigger();       
    }

    render(container) {        
        this.adapter.controller(this.constructor.name, container)
    }

    addListenerToTriggerHandler() {
        this.$container.classList.toggle("active");
    }

    addListenerToTrigger() {       
        this.$trigger.addEventListener("click", this.addListenerToTriggerHandler.bind(this));
    }

    addListenerToContainerHandler = () => {
        this.$container.classList.toggle("active");
    }

    addListenerToContainer() {
        this.$container.addEventListener("click", this.addListenerToContainerHandler);
    }
}