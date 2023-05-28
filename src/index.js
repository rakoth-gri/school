import { DATA } from "./constants/constants.js";
import { themeState } from "./services/theme.js";
import Accordion from "./services/Accordion.js";
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

// **RENDER TECH GUIDE 3D CARDS**
renderTechGuideCards();
function renderTechGuideCards() {
	DATA.DOM.TECH_GUIDE_CARDS_EL.insertAdjacentHTML(
		"beforeend",
		DATA.TECH_GUIDE_LIST.map(
			({ id, tech, figcaption, p, src }) =>
				`<article class="card__item">
					<div class="card__item_card1">
						<h3 style="text-transform: uppercase">${tech}</h3>
						<img src="${src}" alt="" class="card__item_logo" loading="lazy" />
						<figcaption class="card__item_figcaption"> ${figcaption} </figcaption>
					</div>
					<div class="card__item_card2">
						<h3>В КУРСЕ:</h3>
						<p class="card__item_desc">	${p} </p>
						<button class="card__item_link" id="${id}"> Подробнее </button>
					</div>
			</article>`
		).join("")
	);
}

// **TOP BUTTON FUNCS**
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

// ** ACCORDION
const accordion = new Accordion({ container: ".faq__container", array: DATA.ACCORDION_LIST });

// ** LAZY AND ANIME OBSERVER
document.querySelectorAll(".lazy").forEach((img) => lazyObserver.observe(img));
document.querySelectorAll(".roadmap__rect").forEach((rect) => animeObserver.observe(rect));
