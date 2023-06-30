import { DATA } from "./constants/constants.js";
import { themeState } from "./services/theme.js";
// SERVICE CLASSES
import Faq from "./services/Faq.js";
import Tech_guide from "./services/Tech_guide.js";
import Form from "./services/Form.js";
import { AutoFeatures } from "./services/Features.js";
import Tabs from "./services/Tabs.js";
import Menu from "./services/Menu.js";
// Inter-Section observer:
import lazyObserver, { animeObserver } from "./services/observer.js";
// import "./sass/index.sass"

// **CHANGE_THEME

themeState.observer(() => {
	themeState.changeStylesByTheme(themeState.currentTheme);
	themeState.setThemeToLS(themeState.currentTheme);
	document.querySelector(".header__theme_img").src = `./icons/${themeState.currentTheme}.svg`;
	document.querySelector(".header__theme span").textContent = `${themeState.currentTheme}:`;
});

themeState.getThemeFromLS();

document.querySelector(".header__theme_icon").addEventListener("click", function (e) {
	themeState.changeTheme();
});


// **MENU_ELEM**
const menu = new Menu({
	container: DATA.DOM.NAV_EL,
	list: DATA.MENU_LIST,	
})


// **TABS_SECTION**
const tabs = new Tabs({
	container: DATA.DOM.TABS_EL,
	list: DATA.TABS_LIST,
	contentBlock: DATA.DOM.TABS_CONTENT_EL	
})


// **BURGER_ELEM**
DATA.DOM.BURGER_EL.onclick = function () {
	DATA.DOM.NAV_EL.classList.toggle("active");
};

// **FEATURES_SECTION**
const autoSlider = new AutoFeatures({
	container: DATA.DOM.FEATURES__SLIDER_EL,
	list: DATA.FEATURES_LIST,	
});

window.addEventListener("resize", () => {
	autoSlider.cssProps();
});

// **ROADMAP_SECTION**
(function renderRoadmapRects() {
	DATA.DOM.ROAD_MAP_EL.insertAdjacentHTML(
		"beforeend",
		DATA.ROAD_MAP_LIST.map(
			({ strong, text, h2, src, alt, className, title }, i) => `
			<article class="roadmap__rect">
                <strong class="roadmap__digit"> ${strong} </strong>
                <h3>${h2}</h3>
                <p class="roadmap__text"> ${text} </p>				
				<img src="" data-src="${src}" alt="${alt}" class="${`roadmap__img ${i === 2 ? "css" : ""} lazy`}" />			
            </article>
			<img src="" data-src="${src}" class="${className} lazy" alt="${alt}" title="${title}"/>`
		).join("")
	);
})();

// **TECH_GUIDE_SECTION**
const tech_guide = new Tech_guide({
	container: DATA.DOM.TECH_GUIDE_CARDS_EL,
	list: DATA.TECH_GUIDE_LIST,
	sidebar: DATA.DOM.SIDEBAR_EL,
});

// **CALLBACK_SECTION**
const form = new Form({ container: DATA.DOM.FORM_EL, list: DATA.FORM_LIST, options: DATA.OPTION_LIST });

// **TOP_BUTTON**
document.addEventListener("scroll", () => {
	if (document.documentElement.scrollTop > 500) {
		document.querySelector(".top").classList.add("active");
	} else {
		document.querySelector(".top").classList.remove("active");
	}
});

document.querySelector(".top").addEventListener("click", handleTop);

function handleTop() {
	let offset = document.documentElement.scrollTop;
	moveToHead(offset);
}

function moveToHead(offset) {
	if (offset > 0) {
		offset -= 100;
		window.scrollTo({
			top: offset,
			left: 0,
			behavior: "smooth",
		});
		return moveToHead(offset);
	} else {
		return true;
	}
}

// **FAQ_SECTION**
const faq = new Faq({ container: DATA.DOM.FAQ_EL, list: DATA.FAQ_LIST });

// ** LAZY AND ANIME OBSERVER
document.querySelectorAll(".lazy").forEach((img) => lazyObserver.observe(img));
document.querySelectorAll(".roadmap__rect").forEach((rect) => animeObserver.observe(rect));
