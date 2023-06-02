export default class Slider {
	constructor({ selector, slideList }) {
		// dom
		this.sliderContainer = document.querySelector(selector);
		this.tracker = null;
		this.slideList = [...slideList];
		this.slider = null;
		// логика:
		this.count = 0;
		this.interval = null;
		this.currentWidth = null;
		// МЕТОДЫ:
		this.renderSlides(this.slideList, selector);
		this.cssProps(this.slideList);
		this.addEventToSlider();
		this.slider.addEventListener("mousemove", this.startAction.bind(this));
	}

	renderSlides(list, selector) {
		this.sliderContainer.innerHTML = `<div class="slider" style="color: ${
			selector === ".education__slider" ? "#cc502B;" : "#fff"
		}">		
				<i class="bi bi-arrow-left-square arrows" id="prev" style="${selector === ".education__slider" && "opacity: 0.2;"}"></i>
				<i class="bi bi-arrow-right-square arrows" id="next" style="${
					selector === ".education__slider" && "opacity: 0.2;"
				}"></i>
				<div class="tracker">
					${list
						.map(({ src, text }) => {
							return `
						<div class="tracker__item">
							<a href="${src}" target="_blank">				
								<img
									src="${src}"
									alt="slide"
									class="tracker__img"
									loading="lazy"
									id="img"
								/>
							</a>
							<strong class="tracker__title"> ${text} </strong>
						</div>
						`;
						})
						.join("")}
				</div>
			</div>
			<i class="bi bi-box-arrow-right arrows exit" style="${selector === ".education__slider" && "display: none;"}"></i>
		</div>`;

		this.tracker = document.querySelector(".tracker");
		this.slider = document.querySelector(".slider");
	}

	cssProps() {
		this.currentWidth = this.slider.offsetWidth;

		for (let item of this.tracker.querySelectorAll(".tracker__item")) {
			item.style.width = `${this.currentWidth}px`;
		}

		this.tracker.style.width = `${this.slideList.length * this.currentWidth}px`;
	}

	addEventToSlider() {
		this.sliderContainer.addEventListener("click", this.changeCount);
	}

	changeCount = (e) => {
		e.preventDefault();

		switch (e.target.id) {
			case "next":
				this.Increment();
				break;
			case "prev":
				this.Decrement();
				break;
			default:
				this.sliderContainer.classList.remove("visible");
				document.body.style.overflow = "";
				break;
		}
	};

	getEvent(event) {
		return event.type.includes("touch") ? event.touches[0] : event;
	}

	startAction(event) {
		// if (!event.target.closest(".tracker__img")) return;

		let evt = this.getEvent(event);

		this.tracker.style.transition = "";

		if (evt.offsetX > Math.floor(0.9 * this.currentWidth)) {
			this.Increment();
		}
		if (evt.offsetX < Math.floor(0.1 * this.currentWidth)) {
			this.Decrement();
		}
	}

	Increment() {
		this.count++;
		this.checkCount(this.count);
	}

	Decrement() {
		this.count--;
		this.checkCount(this.count);
	}

	checkCount(count) {
		if (count >= this.slideList.length) this.count = 0;
		if (count < 0) this.count = this.slideList.length - 1;
		this.showActiveSlide(this.count);
	}

	showActiveSlide(count) {
		this.tracker.style.transform = `translateX(-${count * this.currentWidth}px)`;
	}

	setCurrentIndex(imageURL) {
		this.sliderContainer.classList.add("visible");
		this.cssProps();
		this.count = this.slideList.findIndex((item) => item.src === imageURL);
		this.showActiveSlide(this.count);
		document.body.style.overflow = "hidden";
	}
}

// Наследование ---------------------
export class EduSlider extends Slider {
	constructor(option) {
		super(option);
		// вызываем новые методы
		// this.autoSlider();
		// this.stopAutoSlider();
		// this.resumeAutoSlider();
	}

	autoSlider() {
		this.interval = setInterval(() => this.Increment(), 2000);
		this.slider.querySelectorAll(".arrows").forEach((arrow) => (arrow.style.opacity = 0.2));
	}

	stopAutoSlider() {
		this.slider.addEventListener("mouseenter", () => {
			clearInterval(this.interval);
			this.slider.querySelectorAll(".arrows").forEach((arrow) => (arrow.style.opacity = 1));
		});
	}

	resumeAutoSlider() {
		this.slider.addEventListener("mouseleave", this.autoSlider.bind(this));
	}
}


