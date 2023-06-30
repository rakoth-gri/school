import Adapter from "./Adapter.js";

export default class Tabs {
    constructor({ container, list, contentBlock}) {
        this.$container = container;
        this.$contentBlock = contentBlock;
        this.list = list;
        this.adapter = new Adapter()
        // methods 
        this.render(this.$container, this.list, this.$contentBlock)
        this.addEventToContainer();
    }

    render(container, list, contentBlock) {        
        this.adapter.controller(this.constructor.name, container, list);        
		this.renderTabsContent(contentBlock, this.list[0]["content"])
	}

    renderTabsContent(contentBlock, content) {
        contentBlock.innerHTML = `		
            ${
                content instanceof Array 
                ? content.map(text => `<p class="tabs__content_p"> ${text} </p>`).join("")
                : `<p class="tabs__content_p"> ${content} </p>`
            }`;
            contentBlock.classList.toggle("active");	
    }

    clearActiveClasses() {
        document.querySelectorAll(".tabs__panel_button").forEach((button) => button.classList.remove("active"));
        this.$contentBlock.classList.remove("active");
    }

    handler = ({ target }) => {
        if (!target.closest(".tabs__panel_button")) return;        
        this.clearActiveClasses()    
        target.parentElement.classList.toggle("active");    
        this.renderTabsContent(this.$contentBlock, this.list[+target.parentElement.id]["content"])
    }

    addEventToContainer() {        
        this.$container.addEventListener("click", this.handler) 
    }

}







