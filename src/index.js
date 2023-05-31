import { DATA } from "./constants/constants.js";
import { themeState } from "./services/theme.js";
import Faq from "./services/Faq.js";
import Tech_guide from "./services/Tech_guide.js"
import Form from "./services/Form.js";
import lazyObserver, { animeObserver } from "./services/observer.js";

// import "./sass/index.sass"

// **RENDER MENU LINKS**
renderHeaderMenuLinks();
function renderHeaderMenuLinks() {
	DATA.DOM.NAV_EL.innerHTML = `
        <ul class="header__nav_ul">
            ${DATA.MENU_LIST.map(
				({ href, text }, i) => `
                <li>
                    <a data-scroll="${href}" class="${i === 0 ? "activeLink" : ""}">${text}</a>
                </li>`
			).join("")}
        </ul>`;
}

DATA.DOM.NAV_EL.addEventListener("click", (e) => {
	if (e.target.tagName !== "A") return;
	document.querySelectorAll(".header__nav a").forEach((link) => link.classList.remove("activeLink"));
	e.target.classList.add("activeLink");
	document.querySelector(e.target.dataset.scroll).scrollIntoView({ behavior: "smooth", block: "start" });
});

// **RENDER ROADMAP ARTICLES**
renderRoadmapRects();
function renderRoadmapRects() {
	DATA.DOM.ROAD_MAP_EL.innerHTML = DATA.ROAD_MAP_LIST.map(
		({ strong, text, h2, src, alt }, i) => `
			<article class="roadmap__rect">
                <strong class="roadmap__digit"> ${strong} </strong>
                <h3>${h2}</h3>
                <p class="roadmap__text"> ${text} </p>				
				<img src="" data-src="${src}" alt="${alt}" class="${`roadmap__img ${i === 2 ? "css" : ""} lazy`}" />			
            </article>`
	).join("");
}

// **RENDER TECH IMAGES**
renderRoadmapLangs();
function renderRoadmapLangs() {
	DATA.DOM.ROAD_MAP_EL.insertAdjacentHTML(
		"afterbegin",
		DATA.ROAD_MAP_LIST.map(
			({ alt, title, className, src }) =>
				`<img  src="" data-src="${src}" alt="${alt}" class="${className} lazy" title="${title}"/>`
		).join("")
	);
}

// **TECH_GUIDE_SECTION**
const tech_guide = new Tech_guide({ container: DATA.DOM.TECH_GUIDE_CARDS_EL, list: DATA.TECH_GUIDE_LIST, sidebar: DATA.DOM.SIDEBAR_EL })

// **CALLBACK_SECTION**
const form = new Form({ container: DATA.DOM.FORM_EL, list: DATA.FORM_LIST, options: DATA.OPTION_LIST })

// **TOP BUTTON**
document.addEventListener("scroll", () => {
	if (document.documentElement.scrollTop > 500) {
		document.querySelector(".top").classList.add("active");
	} else {
		document.querySelector(".top").classList.remove("active");
	}
});

// **SCROLL TO TOP** ---
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

// **CHANGE_THEME
document.querySelector(".header__theme_icon").addEventListener("click", function (e) {
	themeState.changeTheme();
	document.querySelector(".header__theme_img").src = `./icons/${themeState.currentTheme}.svg`;
	document.querySelector(".header__theme span").textContent = `${themeState.currentTheme}:`;
});

// ** Faq
const faq = new Faq({ container: ".faq__container", array: DATA.FAQ_LIST });

// ** LAZY AND ANIME OBSERVER
document.querySelectorAll(".lazy").forEach((img) => lazyObserver.observe(img));
document.querySelectorAll(".roadmap__rect").forEach((rect) => animeObserver.observe(rect));
