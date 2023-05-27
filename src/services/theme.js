// document.documentElement.style.setProperty('--your-variable', '#YOURCOLOR');

export const themeState = {
	root: document.querySelector(":root"),
	styles: [
		{
			prefix: "--app-",
			prop: "default",
			postfix: "-bg",
		},
		{
			prefix: "--app-",
			prop: "default",
			postfix: "-font",
		},
	],
	currentTheme: "light",
	changeTheme() {
		this.currentTheme === "light" ? (this.currentTheme = "dark") : (this.currentTheme = "light");
		this.changeStylesByTheme(this.currentTheme);
	},	
	changeStylesByTheme(theme) {        
		this.styles.forEach(({ prefix, prop, postfix }) =>
			this.root.style.setProperty(`${prefix}${prop}${postfix}`, `var(${prefix}${theme}${postfix})`)
		);
	},
};
