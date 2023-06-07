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
	currentTheme: null,
	getThemeFromLS() {
		this.currentTheme = localStorage.getItem("theme") || "light";
		this.changeStylesByTheme(this.currentTheme)
	},
	setThemeToLS(theme) {
		return localStorage.setItem("theme", theme);
	},
	changeTheme() {
		this.currentTheme === "light" ? (this.currentTheme = "dark") : (this.currentTheme = "light");
		this.changeStylesByTheme(this.currentTheme);
		this.setThemeToLS(this.currentTheme);
	},
	changeStylesByTheme(theme) {
		this.styles.forEach(({ prefix, prop, postfix }) =>
			this.root.style.setProperty(`${prefix}${prop}${postfix}`, `var(${prefix}${theme}${postfix})`)
		);
	},
};
