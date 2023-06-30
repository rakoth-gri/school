// document.documentElement.style.setProperty('--your-variable', '#YOURCOLOR');
export const themeState = {
	root: document.querySelector(":root"),
	subscribers: [],
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
		this.subscribers.forEach(cb => cb())
	},
	setThemeToLS(theme) {
		localStorage.setItem("theme", theme);
	},
	changeTheme() {
		this.currentTheme === "light" ? (this.currentTheme = "dark") : (this.currentTheme = "light");		
		this.subscribers.forEach(cb => cb())
	},
	changeStylesByTheme(theme) {
		this.styles.forEach(({ prefix, prop, postfix }) =>
			this.root.style.setProperty(`${prefix}${prop}${postfix}`, `var(${prefix}${theme}${postfix})`)
		);
	},
	// 
	observer(callback) {
		this.subscribers.push(callback)
	},
};
