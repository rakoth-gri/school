// document.forms[0] - варики
import { DATA } from "../constants/constants.js";
import fetchFormData from "./fetch.js";

export default class Form {
	constructor({ container, list, options }) {
		this.list = list;
		this.options = options;
		this.$form = container;
		// LOGIC
		this.state = { name: "", phone: "", select: "", checkbox: false };
		// METHODS
		this.render(this.$form, this.list, this.options);
		this.addListenerToFormWrap();
		this.addListenerToForm();
	}

	// showState() {
	// 	console.log(this.state);
	// }

	render(container, list, options) {
		container.innerHTML = `
			<div className="callback__form_wrap">				
						${list
							.map(
								({ name, type, placeholder, pattern }) => `
							<div class="callback__form_block">
								<input type="${type}" placeholder="${placeholder}" name="${name}" class="callback__form_el"/>                           
								<span class="error"></span>
							</div>`
							)
							.join("")}
						<div class="callback__form_block">                                        
							<select name="select" class="callback__form_el" > 
										${options
											.map(
												({ value, text }) =>
													`<option value='${value}' ${value === "" && "selected"}>${text}
													</option>`
											)
											.join("")}
							</select>
							<span class="error"></span>           
						</div>
						<div class="callback__form_block">
							<input type="checkbox" name="checkbox" id="checkbox"/>
							<label for="checkbox" data-style="checkbox"></label>
							<span style="font-size: 16px;"> Согласие о предоставлении персональных данных </span>
						</div>					
						<div class="callback__form_block">
							<input type="submit" class="callback__form_el" value="Оставить заявку"/>						
						</div>
				</div>						
					`;
	}

	changeEventHandler(e) {
		if (!(e.target.tagName === "INPUT" || e.target.tagName === "SELECT")) return;

		if (e.target.name !== "checkbox") {
			if (DATA.REG_EXP[e.target.name][0].test(e.target.value)) {
				Object.assign(this.state, { [e.target.name]: e.target.value });
				this.$form[e.target.name].nextElementSibling.textContent = "";
			} else {
				this.$form[e.target.name].nextElementSibling.textContent = DATA.REG_EXP[e.target.name][1];
				Object.assign(this.state, { [e.target.name]: "" });
			}
			return;
		}
		Object.assign(this.state, { [e.target.name]: e.target.checked });
		
	}

	addListenerToFormWrap() {
		this.$form.firstElementChild.addEventListener("change", this.changeEventHandler.bind(this));
	}

	submitEventHandler = (e) => {
		e.preventDefault();		

		const hasEmptyField = Object.keys(this.state).find((key) => !this.state[key]);

		if (hasEmptyField) {
			for (const key in this.state) {
				if (!this.state[key] && key !== "checkbox")
					e.target[key].nextElementSibling.textContent = "Заполните вышестоящее поле";
			}
			return;
		}		

		fetchFormData("https://jsonplaceholder.typicode.com/posts", new FormData(this.$form))			
			.then(() => {
				this.$form.reset();
				this.state = { name: "", phone: "", select: "", checkbox: false }
				DATA.DOM.MODAL_EL.classList.toggle("active");
			})
			.then(() => {
				setTimeout(() => {
					DATA.DOM.MODAL_EL.classList.toggle("active");
				}, 1300);
			});
	};

	addListenerToForm() {
		this.$form.addEventListener("submit", this.submitEventHandler);
	}
}
