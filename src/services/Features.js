import Adapter from "./Adapter.js";

export default class Features {
	constructor({ container, list}) {
		// dom
		this.$container = container;
		this.$tracker = null;
		this.$slider = null;
		// логика:
		this.adapter = new Adapter();
		this.list = list;
		this.count = 0;
		this.interval = null;
		this.sliderBodyWidth = null;
		
		// МЕТОДЫ:
		this.render(this.$container, this.list);
		this.cssProps(this.list);
		this.addEventToSlider();
	}

	render(container, list) {		
		this.adapter.controller(this.constructor.name, container, list)		
		this.$tracker = document.querySelector(".slider__body_tracker");
		this.$slider = document.querySelector(".slider__body");
	}

	cssProps() {
		this.sliderBodyWidth = this.$slider.offsetWidth;
		for (let item of this.$tracker.querySelectorAll(".slider__body_item")) {
			item.style.width = `${this.sliderBodyWidth}px`;
		}
		this.$tracker.style.width = `${this.list.length * this.sliderBodyWidth}px`;
	}

	changeCount = (e) => {
		if (!(e.target.closest(".features__control") || e.target.closest(".features__dottes_item"))) return;

		switch (true) {
			case !!e.target.closest(".features__control"):
				this.Increment();
				break;
			default:
				this.count = +e.target.dataset.id;
				this.checkCount(this.count);
				break;
		}
	};

	addEventToSlider() {
		this.$container.addEventListener("click", this.changeCount);
	}

	Increment() {
		this.count++;
		this.checkCount(this.count);
	}

	checkCount(count) {
		if (count >= this.list.length) this.count = 0;
		if (count < 0) this.count = this.list.length - 1;
		this.showActiveSlide(this.count);
		this.showActiveButton(this.count);
	}

	showActiveButton(index) {
		document.querySelectorAll(".features__dottes_item").forEach((dot) => dot.classList.remove("active"));
		document.querySelectorAll(".features__dottes_item")[index].classList.add("active");
	}

	showActiveSlide(count) {
		this.$tracker.style.transform = `translateX(-${count * this.sliderBodyWidth}px)`;
	}

	setCurrentIndex(imageURL) {
		this.$container.classList.add("visible");
		this.cssProps();
		this.count = this.list.findIndex((item) => item.src === imageURL);
		this.showActiveSlide(this.count);
		document.body.style.overflow = "hidden";
	}

	builder() {
		this.autoSlider();
		this.stopAutoSlider();
		this.resumeAutoSlider();
	}
}

// Наследование ---------------------
export class AutoFeatures extends Features {
	constructor(option) {
		super(option);
		this.builder();		
	}

	autoSlider() {
		this.interval = setInterval(() => this.Increment(), 3500);
	}

	stopAutoSlider() {		
		this.$slider.addEventListener("mouseenter", () => clearInterval(this.interval));
	}

	resumeAutoSlider() {
		this.$slider.addEventListener("mouseleave", this.autoSlider.bind(this));
	}
}
