import { DATA } from "./constants/constants.js";

renderRoadmapRects();
function renderRoadmapRects() {
	DATA.DOM.ROAD_MAP_EL.innerHTML = DATA.ROAD_MAP.map(
		({ strong, text, h3 }) => `<div class="roadmap__rect">
                <strong class="roadmap__digit"> ${strong} </strong>
                <h3>${h3}</h3>
                <p class="roadmap__text"> ${text} </p>
            </div>`
	).join("");
}

renderHeaderMenuLinks();
function renderHeaderMenuLinks() {
	DATA.DOM.HEADER_NAV.innerHTML = `
        <ul class="header__nav_ul">
            ${DATA.MENU.map(
				({ href, text }, i) => `
                <li>
                    <a data-scroll="${href}" class="${i === 0 ? "activeLink" : ""}">${text}</a>
                </li>`
			).join("")}
        </ul>`;
}

DATA.DOM.HEADER_NAV.addEventListener("click", (e) => {
	if (e.target.tagName !== "A") return;
	document.querySelectorAll(".header__nav a").forEach((link) => link.classList.remove("activeLink"));
	e.target.classList.add("activeLink");

	document.querySelector(e.target.dataset.scroll).scrollIntoView({ behavior: "smooth", block: "start" });
});

// TOP APPEARING ---
document.addEventListener("scroll", () => {
	if (document.documentElement.scrollTop > 500) {
		document.querySelector(".top").classList.add("active");
	} else {
		document.querySelector(".top").classList.remove("active");
	}
});

// SCROLL TO TOP ---
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
