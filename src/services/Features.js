export default class Features {
	constructor({ container, list }) {
		// dom
		this.$container = container;
		this.tracker = null;
		this.list = list;
		this.slider = null;
		// логика:
		this.count = 0;
		this.interval = null;
		this.sliderBodyWidth = null;
		// МЕТОДЫ:
		this.renderSlides(this.$container, this.list);
		this.cssProps(this.list);
		this.addEventToSlider();
	}

	renderSlides(container, list) {
		container.insertAdjacentHTML(
			"beforeend",
			`<div class="slider__body">		
                <div class="slider__body_tracker">
                    ${list
						.map(({ title, desc }) => {
							return `
                        <div class="slider__body_item">
                            <h3> ${title} </h3>
                            <p> ${desc} </p>
                        </div>
                        `;
						})
						.join("")}
                </div>
                <div class="features__control">
                    <i class="bi bi-arrow-right features__control_next"></i>
                    Особенности нашего обучения
                </div>
            </div>			
        </div>`
		);

		this.tracker = document.querySelector(".slider__body_tracker");
		this.slider = document.querySelector(".slider__body");
	}

	cssProps() {
		this.sliderBodyWidth = this.slider.offsetWidth;

		for (let item of this.tracker.querySelectorAll(".slider__body_item")) {
			item.style.width = `${this.sliderBodyWidth}px`;
		}

		this.tracker.style.width = `${this.list.length * this.sliderBodyWidth}px`;
	}

	changeCount = (e) => {
		console.log(e);

		if (e.target.closest(".features__control_next")) console.log("here");
		this.Increment();
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
	}

	showActiveSlide(count) {
		this.tracker.style.transform = `translateX(-${count * this.sliderBodyWidth}px)`;
	}

	setCurrentIndex(imageURL) {
		this.$container.classList.add("visible");
		this.cssProps();
		this.count = this.list.findIndex((item) => item.src === imageURL);
		this.showActiveSlide(this.count);
		document.body.style.overflow = "hidden";
	}
}

// Наследование ---------------------
// export class EduSlider extends Slider {
// 	constructor(option) {
// 		super(option);
// 		// вызываем новые методы
// 		// this.autoSlider();
// 		// this.stopAutoSlider();
// 		// this.resumeAutoSlider();
// 	}

// 	autoSlider() {
// 		this.interval = setInterval(() => this.Increment(), 2000);
// 		this.slider.querySelectorAll(".arrows").forEach((arrow) => (arrow.style.opacity = 0.2));
// 	}

// 	stopAutoSlider() {
// 		this.slider.addEventListener("mouseenter", () => {
// 			clearInterval(this.interval);
// 			this.slider.querySelectorAll(".arrows").forEach((arrow) => (arrow.style.opacity = 1));
// 		});
// 	}

// 	resumeAutoSlider() {
// 		this.slider.addEventListener("mouseleave", this.autoSlider.bind(this));
// 	}
// }
