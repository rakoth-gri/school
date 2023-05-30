export default class Tech_Guide {
	constructor({ container, list, sidebar }) {
		this.$container = container;
		this.list = list;
		this.$sidebar = sidebar;
		// METHODS:
		this.renderTechGuideCards(this.$container, this.list);
		this.addListenerToContainer();
		this.addListenerToSidebar();
	}

	renderTechGuideCards(container, list) {
		container.insertAdjacentHTML(
			"beforeend",
			list
				.map(
					({ id, tech, figcaption, ul, src }) =>
						`<article class="card__item">
					<div class="card__item_card1">
						<h3 style="text-transform: uppercase">${tech}</h3>
						<img src="${src}" alt="" class="card__item_logo" loading="lazy" />
						<figcaption class="card__item_figcaption"> ${figcaption} </figcaption>
					</div>
					<div class="card__item_card2">
						<h3>В КУРСЕ:</h3>
						<ul class="card__item_desc"> 
                            ${ul.slice(0,3).map((li) => `<li> ${li} </li>`).join("")} 
                        </ul>
						<button class="card__item_btn" id="${id}"> Подробнее </button>
					</div>
			</article>`
				)
				.join("")
		);
	}

	containerClickHandler = (e) => {
		if (!e.target.closest(".card__item_btn")) return;

		const { tech, src, ul } = this.list[+e.target.id];

		this.$sidebar.innerHTML = `
            <div className="sidebar__context">
                <h2> ${tech} </h2>
                <i class="bi bi-box-arrow-right sidebar__icon"></i>
                <img src="${src}" alt="${src}" class="sidebar__img"/>
                <ul class="sidebar__list">
                ${ul.map((li) => `<li class="sidebar__li"> ${li} </li>`).join("")}
                </ul>
                <button class="sidebar__btn" data-tech="${tech}"> Задать вопрос </button>
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
				console.log(e.target.dataset.tech);
				break;
			default:
				this.classList.toggle("active");
				break;
		}
	}

	addListenerToSidebar() {
		this.$sidebar.addEventListener("click", this.sidebarClickHandler);
	}
}
