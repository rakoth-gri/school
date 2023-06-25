import { DATA } from "../constants/constants.js";
import Adapter from "./Adapter.js";


export default class Tech_Guide {
	constructor({ container, list, sidebar }) {
		this.$container = container;
		this.list = list;
		this.$sidebar = sidebar;
		this.adapter = new Adapter();
		// METHODS:
		this.render(this.$container, this.list);
		this.addListenerToContainer();
		this.addListenerToSidebar();
	}

	render(container, list) {
		this.adapter.controller(this.constructor.name, container, list)
	}

	containerClickHandler = (e) => {
		if (!e.target.closest(".card__item_btn")) return;

		const { tech, src, ul } = this.list[+e.target.id];

		this.$sidebar.innerHTML = `
            <div className="sidebar__context">
                <h2> Программа по ${tech}: </h2>
                <i class="bi bi-box-arrow-right sidebar__icon"></i>
                <img src="${src}" alt="${src}" class="sidebar__img"/>
                <ul class="sidebar__list">
                	${ul.map((li) => `<li class="sidebar__li"> ${li} </li>`).join("")}
                </ul>
				<div class="sidebar__btn">
					<button class="sidebar__btn_el" data-tech="${tech}"> Задать вопрос </button>
				</div>                
            </div>            
        `;
		this.$sidebar.classList.toggle("active");
	};

	addListenerToContainer() {
		this.$container.addEventListener("click", this.containerClickHandler);
	}

	sidebarClickHandler(e) {
		switch (e.target.tagName) {
			case "BUTTON":
				DATA.DOM.FORM_EL.select.value = e.target.dataset.tech;				
				document.querySelector("#callback").scrollIntoView({ behavior: "smooth", block: "start" });
				break;
			default:				
				break;
		}
		this.classList.toggle("active");
	}

	addListenerToSidebar() {
		this.$sidebar.addEventListener("click", this.sidebarClickHandler);
	}
}
