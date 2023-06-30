import Adapter from "./Adapter.js";

export default class Menu {
	constructor({ container, list }) {
		this.$container = container;		
		// логика ------
		this.list = list;
		this.adapter = new Adapter(); 
		// методы
		this.render(this.$container, this.list);
		this.addListenerToContainer();		
	}

	render(container, list) {		
		container.innerHTML = `
        <ul class="header__nav_ul">
            ${list.map(
				({ href, text }, i) => `
                <li>
                    <a data-scroll="${href}" class="${i === 0 ? "activeLink" : ""}">${text}</a>
                </li>`
			).join("")}
        </ul>`;
	}

    handler = ({target}) => {
        if (target.tagName !== "A") return;
        document.querySelectorAll(".header__nav a").forEach((link) => link.classList.remove("activeLink"));
        target.classList.add("activeLink");
        document.querySelector(target.dataset.scroll).scrollIntoView({ behavior: "smooth", block: "start" });
        this.$container.classList.toggle("active");
    }

	addListenerToContainer() {
		this.$container.addEventListener("click", this.handler)
	}
}



