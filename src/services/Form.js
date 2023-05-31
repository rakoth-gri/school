export default class Form {
	constructor({ container, list, options }) {
		this.list = list;
		this.options = options;
		this.$form = container;
		// METHODS
		this.render(this.$form, this.list, this.options);
	}

	render(container, list, options) {
		container.innerHTML = `					
						${list
							.map(
								({ name, type, placeholder }) => `
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
							<label for="checkbox" id="checkbox" data-style="checkbox"></label>
							<span class="error"></span>
						</div>					
						<div class="callback__form_block">
							<input type="submit" class="callback__form_el" value="Отправить"/>						
						</div>				
					`;
	}
}
