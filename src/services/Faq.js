export default class Accordion {
	constructor({ container, array }) {
		this.$container = document.body.querySelector(container);
		this.contents = null;
		// логика ------
		this.array = array;
		// методы
		this.render(this.array);
		this.addListenerToContainer();
	}

	render(array) {
		this.$container.insertAdjacentHTML(
			"beforeend",
			array
				.map(
					({ title, content, id }) => `
            <article class="faq__item">
				<div class="faq__item_header">
					<h3>${title}</h3>
					<i class="${`faq__item_trigger bi bi-chevron-up ${id === "0" ? "active" : ""}`}" id="${id}"></i>
				</div>
				<hr>
				<div class="faq__item_content" style="${id === "0" && "max-height: max-content;"}" id="${id}">
					<blockquote class="faq__item_body">
						<p>
							${content}
						</p>								
					</blockquote>
				</div>
			</article>
        `
				)
				.join("")
		);
		this.contents = document.querySelectorAll(".faq__item_content");
	}

	mouseEventHandler = (e) => {
		if (e.target.tagName !== "I") return;

		e.target.classList.toggle("active");

		if (this.contents[+e.target.id].offsetHeight) {
			this.contents[+e.target.id].style.maxHeight = "0px";
		} else {
			this.contents[+e.target.id].style.maxHeight = `${
				this.contents[+e.target.id].firstElementChild.offsetHeight
			}px`;
		}
	};

	addListenerToContainer() {
		this.$container.addEventListener("click", this.mouseEventHandler);
	}
}
