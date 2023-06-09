import Adapter from "./Adapter.js";

export default class Faq {
	constructor({ container, list }) {
		this.$container = container;
		this.contents = null;
		// логика ------
		this.list = list;
		this.adapter = new Adapter(); 
		// методы
		this.render(this.$container, this.list);
		this.addListenerToContainer();		
	}

	render(container, list) {		
		this.adapter.controller(this.constructor.name, container, list)		
		this.contents = document.querySelectorAll(".faq__item_content");
	}

	mouseEventHandler = (e) => {
		if (e.target.tagName !== "I") return;

		e.target.classList.toggle("active");

		if (this.contents[+e.target.dataset.id].offsetHeight) {
			this.contents[+e.target.dataset.id].style.maxHeight = "0px";
		} else {
			this.contents[+e.target.dataset.id].style.maxHeight = `${
				this.contents[+e.target.dataset.id].firstElementChild.offsetHeight
			}px`;
		}
	};

	addListenerToContainer() {
		this.$container.addEventListener("click", this.mouseEventHandler);
	}
}
