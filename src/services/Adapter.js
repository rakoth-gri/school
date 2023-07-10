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
			case "Tabs":
				this[method](container, list)				
				break;
			case "Agreement":
				this[method](container)				
				break;						
			default:
				this[method](container, list, options)
				break;
		}
    };

	Tabs (container, list) {     
	container.insertAdjacentHTML(
		"beforeend",
		`${list.map(
			({ id, text }, i) => `<li class="${`tabs__panel_button 
			${i === 0 ? "active" : ""}`}" id="${id}"> <a> ${text} </a></li>`
		).join("")}	`
	)}

    Faq(container, list) {               
        container.insertAdjacentHTML(
			"beforeend",
			list
				.map(
					({ title, content, id }) => `
            <article class="faq__item" itemscope itemtype="http://schema.org/Question>
				<div class="faq__item_header">
					<h3 itemprop="name">${title}</h3>
					<i class="${`faq__item_trigger bi bi-chevron-up ${id === "0" ? "active" : ""}`}" id="${id}"></i>
				</div>
				<hr>
				<div class="faq__item_content" style="${id === "0" && "max-height: max-content;"}" id="${id}">
					<blockquote class="faq__item_body">
						<p itemprop="text">
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
						<textarea placeholder="Ваш запрос:" name="textarea" class="callback__form_el"/></textarea>	
						<span class="error"></span>						
					</div>	
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
                        <span class="agreementTrigger"> Согласие о предоставлении персональных данных </span>
                    </div>					
                    <div class="callback__form_block">
                        <input type="submit" class="callback__form_el" value="Оставить заявку"/>					
                    </div>
    </div>`;
    }

	Agreement(container) {
		container.innerHTML = `
		<article class="agreement__body">
			<h3> СОГЛАШЕНИЕ ОБ ИСПОЛЬЗОВАНИИ САЙТА И ОБРАБОТКЕ ПЕРСОНАЛЬНЫХ ДАННЫХ </h3>  
			<h3> 1 ОБЩИЕ ПОЛОЖЕНИЯ </h3>
			<p class="agreement__body_text">Настоящее Соглашение об использовании сайта и обработке персональных данных
				разработано в соответствии с Федеральным законом от 27.07.2006 г. № 152-
				ФЗ «О персональных данных» (далее – ФЗ-152). <br>  
				Настоящее Соглашение действует в отношении информации, которую администратор сайта (далее - Оператор) может
				получить о физических лицах – пользователях сайта (далее – «Пользователь») во время
				совершения последними действий на сайте gri-web.ru. (далее - Сайт): перемещение по сайту, изучение
				информационных материалов, заполнение форм обратной связи и т.п. Заполнение Пользователем любой из форм обратной связи на Сайте с последующей отправкой данных - означает полное согласие последнего с условиями сбора и обработки его персональных данных, установленными настоящим Соглашением и Политикой обработки персональных данных, опубликованной на сайте gri-web.ru. <br> 
				Пользователь, заполняя анкетные формы данных, размещенные на Сайте, в том числе при нажатии
				кнопки: «Оставить заявку» и установки галочки на чек-бокс ознакомления с настоящим электронным соглашением - дает свое согласие Оператору на сбор и обработку персональных данных. Под согласием в настоящем Соглашении понимается согласие субъекта персональных данных на
				обработку персональных данных в понимании Федерального закона № 152-ФЗ «О персональных данных».</p>
			<h3>2 ЦЕЛИ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ </h3>
			<p class="agreement__body_text">
				Оператор осуществляет обработку персональных данных Пользователей с целью оказания консультационных услуг, в том числе:
			<ul class="agreement__body_list">
				<li> сбор и обработка полученной от Пользователя информации;</li>
				<li> предоставление Пользователю информации справочного характера об
					услугах, реализуемых на Сайте, посредством отправки сообщений по электронной почте или телефона;</li>            
			</ul>
			</p>
			<h3>3 ВИДЫ ПЕРСОНАЛЬНЫХ ДАННЫХ </h3>
			<p class="agreement__body_text">
				В рамках настоящего Соглашения и Политики обработки персональных данных Оператор
				может получить от Пользователя следующую информацию:
			</p>
			<ul class="agreement__body_list">
				<li>ФИО;</li>
				<li>Телефон;</li>
				<li>Адрес электронной почты (e-mail);</li>
				<li>Язык программирования;</li>
				<li>Цель обращения;</li>
			</ul>          
			<p class="agreement__body_text">
				Персональные данные, описанные выше, после их использования по назначению подлежат <strong> немедленному </strong> удалению. Их обработка возможна в течение ограниченного периода времени! 
			</p>
			<p class="agreement__body_text">
				Для связи с Оператором - используйте контакты, указанные в соответствующих разделах Сайта 
			</p>
			<h3> 4 УСЛОВИЯ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ </h3>
			<p class="agreement__body_text">
				Оператор не использует технологию "cookies" для улучшения использования
				Пользователями Сайта. <br>
				Оператор не несет ответственности за передачу Пользователем информации по незащищенным
				каналам связи и в иных случаях, находящихся вне разумного контроля со стороны Оператора. <br>
				Пользователь обязан обеспечить достоверность предоставляемой им информации,
				а также принять меры к тому, чтобы при предоставлении Пользователем информации
				не было нарушено применимое законодательство, а также законные права, интересы и любая конфиденциальная информация Третьих лиц. <br>
				Сбор персональных данных, предоставляемых Пользователем, осуществляется
				исключительно в электронной форме. <br>
				Фактом совершения действий на Сайте (в любой форме, включая указанные выше),
				Пользователь выражает свое согласие с настоящим Соглашением и всеми его условиями,
				а также, подтверждает свое согласие на заключение настоящего электронного
				Соглашения, имеющего силу письменной формы соглашения (п.3 ст.434 ГК РФ). <br>
				Оператор не осуществляет хранение персональной информации Пользователей. После обработки персональных данных Пользователя - они подлежат немедленному удалению!
			</p>
      	</article>`;
	}
}