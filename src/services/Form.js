// document.forms[0] - варики
import { DATA } from "../constants/constants.js";
import fetchFormData from "./fetch.js";
import Adapter from "./Adapter.js";

function updateState(nodes) {
	return [...nodes].slice(0, -1).reduce((acc, el) => ({...acc, [el.name]: el.name !== "checkbox" ? "" : false}), {});
}

export default class Form {
	constructor({ container, list, options }) {
		this.list = list;
		this.options = options;
		this.$form = container;		
		// LOGIC
		this.adapter = new Adapter();
		// this.state = { name: "", phone: "", textarea: "", select: "", checkbox: false };		
		// METHODS
		this.render(this.$form, this.list, this.options);
		this.state = updateState(this.$form.elements)
		this.addListenerToFormWrap();
		this.addListenerToForm();
	}	

	render(container, list, options) {		
		this.adapter.controller(this.constructor.name, container, list, options)	
	}

	changeEventHandler(e) {
				
		if (!["INPUT", "SELECT", "TEXTAREA"].find(el => el === e.target.tagName)) return

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

		document.querySelector(".lds-ripple").classList.toggle("active");

		setTimeout(() => {
			fetchFormData("mail/mail.php", new FormData(this.$form))			
			.then(() => {				
				this.state = updateState(this.$form.elements)
				// DATA.DOM.MODAL_EL.classList.toggle("active");
			})
			.then(() => {
				setTimeout(() => {
					// DATA.DOM.MODAL_EL.classList.toggle("active");
					document.querySelector(".lds-ripple").classList.toggle("active");
					this.$form.reset();												
				}, 1300);
			});
		}, 300)
		
	};

	addListenerToForm() {
		this.$form.addEventListener("submit", this.submitEventHandler);
	}
}
