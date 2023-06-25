export default class Adapter {
    constructor() {}

    controller(method, container, list, options) {
                        				
		switch (method) {
			case "Faq":
				this[method](container, list)				
				break;
			case "Features":
                console.log("Здесь");
                
				this[method](container, list)				
				break;
			case "Tech_Guide":
				this[method](container, list)				
				break;					
			default:
				this[method](container, list, options)
				break;
		}
    };

    Faq(container, list) {               
        container.insertAdjacentHTML(
			"beforeend",
			list
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
    };

    AutoFeatures(container, list) {
        container.insertAdjacentHTML(
			"beforeend",
			`<div class="slider__body">		
                <div class="slider__body_tracker">
                    ${list
						.map(({ title, desc }, i) => {
							return `
                        <div class="slider__body_item">
                            <h3> ${`${i+1} ${title}`} </h3>
                            <p> ${desc} </p>
                        </div>
                        `;
						})
						.join("")}
                </div>
				<div class="features__dottes">
					${list
						.map(
							(_, index) =>
								`<span class="${`features__dottes_item ${index === 0 && "active"}`}" id="${index}"> 0${
									index + 1
								} </span>`
						)
						.join("")}
				</div>
                <div class="features__control">
                    <i class="bi bi-arrow-right features__control_next"></i>
                    следующий слайд
                </div>
            </div>`
		);
    };


    Tech_Guide(container, list) {
        container.insertAdjacentHTML(
			"beforeend",
			list
				.map(
					({ id, tech, figcaption, ul, src }) =>
						`<article class="card__item">
					<div class="card__item_card1">
						<h3 style="text-transform: uppercase"> ${tech}: </h3>
						<img src="${src}" alt="" class="card__item_logo" loading="lazy" />
						<figcaption class="card__item_figcaption"> ${figcaption} </figcaption>
					</div>
					<div class="card__item_card2">
						<h3>В КУРСЕ:</h3>
						<ul class="card__item_desc"> 
                            ${ul
								.slice(0, 3)
								.map((li) => `<li> ${li} </li>`)
								.join("")} 
                        </ul>
						<button class="card__item_btn" id="${id}"> Подробнее </button>
					</div>
			</article>`
				)
				.join("")
		);
    };

    Form(container, list, options) {
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
                        <span class="agreementSpan"> Согласие о предоставлении персональных данных </span>
                    </div>					
                    <div class="callback__form_block">
                        <input type="submit" class="callback__form_el" value="Оставить заявку"/>					
                    </div>
    </div>`;
    }
}