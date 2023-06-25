"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _constants = require("./constants/constants.js");

var _theme = require("./services/theme.js");

var _Faq = _interopRequireDefault(require("./services/Faq.js"));

var _Tech_guide = _interopRequireDefault(require("./services/Tech_guide.js"));

var _Form = _interopRequireDefault(require("./services/Form.js"));

var _Features = require("./services/Features.js");

var _observer = _interopRequireWildcard(require("./services/observer.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// SERVICE CLASSES
// import "./sass/index.sass"
// **CHANGE_THEME CODE
// OBSERVER
_theme.themeState.observer(function () {
  _theme.themeState.changeStylesByTheme(_theme.themeState.currentTheme);

  _theme.themeState.setThemeToLS(_theme.themeState.currentTheme);

  document.querySelector(".header__theme_img").src = "./icons/".concat(_theme.themeState.currentTheme, ".svg");
  document.querySelector(".header__theme span").textContent = "".concat(_theme.themeState.currentTheme, ":");
});

_theme.themeState.getThemeFromLS();

document.querySelector(".header__theme_icon").addEventListener("click", function (e) {
  _theme.themeState.changeTheme();
}); // **RENDER MENU LINKS**

renderHeaderMenuLinks();

function renderHeaderMenuLinks() {
  _constants.DATA.DOM.NAV_EL.innerHTML = "\n        <ul class=\"header__nav_ul\">\n            ".concat(_constants.DATA.MENU_LIST.map(function (_ref, i) {
    var href = _ref.href,
        text = _ref.text;
    return "\n                <li>\n                    <a data-scroll=\"".concat(href, "\" class=\"").concat(i === 0 ? "activeLink" : "", "\">").concat(text, "</a>\n                </li>");
  }).join(""), "\n        </ul>");
}

_constants.DATA.DOM.NAV_EL.addEventListener("click", function (e) {
  if (e.target.tagName !== "A") return;
  document.querySelectorAll(".header__nav a").forEach(function (link) {
    return link.classList.remove("activeLink");
  });
  e.target.classList.add("activeLink");
  document.querySelector(e.target.dataset.scroll).scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
  this.classList.toggle("active");
}); // **BURGER__ELEM**


_constants.DATA.DOM.BURGER_EL.onclick = function () {
  _constants.DATA.DOM.NAV_EL.classList.toggle("active");
}; // **RENDER TABS_ITEMS**


(function () {
  _constants.DATA.DOM.TABS_EL.insertAdjacentHTML("beforeend", "".concat(_constants.DATA.TABS_LIST.map(function (_ref2, i) {
    var id = _ref2.id,
        text = _ref2.text;
    return "<li class=\"".concat("tabs__panel_button \n\t\t\t".concat(i === 0 ? "active" : ""), "\" id=\"", id, "\"> <a> ").concat(text, " </a></li>");
  }).join(""), "\t"));

  renderTabsContent(document.querySelector(".tabs__content"), _constants.DATA.TABS_LIST[0]["content"], _constants.DATA.TABS_LIST[0]["title"]);
})();

_constants.DATA.DOM.TABS_EL.addEventListener("click", function (_ref3) {
  var target = _ref3.target;
  if (!target.closest(".tabs__panel_button")) return;
  document.querySelectorAll(".tabs__panel_button").forEach(function (button) {
    return button.classList.remove("active");
  });
  target.parentElement.classList.toggle("active");
  renderTabsContent(document.querySelector(".tabs__content"), _constants.DATA.TABS_LIST[+target.parentElement.id]["content"], _constants.DATA.TABS_LIST[+target.parentElement.id]["title"]);
});

function renderTabsContent(container, content, title) {
  container.innerHTML = "\n\t\t<h3 class=\"tabs__content_h3\"> ".concat(title, " </h3>\t\n\t\t<p class=\"tabs__content_p\"> ").concat(content, " </p>\n\t");
} // **FEATURES SLIDER**


var autoSlider = new _Features.AutoFeatures({
  container: _constants.DATA.DOM.FEATURES__SLIDER_EL,
  list: _constants.DATA.FEATURES_LIST
});
window.addEventListener("resize", function () {
  autoSlider.cssProps();
}); // **ROADMAP_SECTION**

(function renderRoadmapRects() {
  _constants.DATA.DOM.ROAD_MAP_EL.insertAdjacentHTML("beforeend", _constants.DATA.ROAD_MAP_LIST.map(function (_ref4, i) {
    var strong = _ref4.strong,
        text = _ref4.text,
        h2 = _ref4.h2,
        src = _ref4.src,
        alt = _ref4.alt,
        className = _ref4.className,
        title = _ref4.title;
    return "\n\t\t\t<article class=\"roadmap__rect\">\n                <strong class=\"roadmap__digit\"> ".concat(strong, " </strong>\n                <h3>").concat(h2, "</h3>\n                <p class=\"roadmap__text\"> ").concat(text, " </p>\t\t\t\t\n\t\t\t\t<img src=\"\" data-src=\"").concat(src, "\" alt=\"").concat(alt, "\" class=\"", "roadmap__img ".concat(i === 2 ? "css" : "", " lazy"), "\" />\t\t\t\n            </article>\n\t\t\t<img src=\"\" data-src=\"").concat(src, "\" class=\"").concat(className, " lazy\" alt=\"").concat(alt, "\" title=\"").concat(title, "\"/>");
  }).join(""));
})(); // **TECH_GUIDE_SECTION**


var tech_guide = new _Tech_guide["default"]({
  container: _constants.DATA.DOM.TECH_GUIDE_CARDS_EL,
  list: _constants.DATA.TECH_GUIDE_LIST,
  sidebar: _constants.DATA.DOM.SIDEBAR_EL
}); // **CALLBACK_SECTION**

var form = new _Form["default"]({
  container: _constants.DATA.DOM.FORM_EL,
  list: _constants.DATA.FORM_LIST,
  options: _constants.DATA.OPTION_LIST
}); // **TOP BUTTON**

document.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 500) {
    document.querySelector(".top").classList.add("active");
  } else {
    document.querySelector(".top").classList.remove("active");
  }
}); // **SCROLL TO TOP** ---

document.querySelector(".top").addEventListener("click", handleTop);

function handleTop() {
  var offset = document.documentElement.scrollTop;
  moveToHead(offset);
}

function moveToHead(offset) {
  if (offset > 0) {
    offset -= 100;
    window.scrollTo({
      top: offset,
      left: 0,
      behavior: "smooth"
    });
    return moveToHead(offset);
  } else {
    return true;
  }
} // ** Faq


var faq = new _Faq["default"]({
  container: ".faq__container",
  array: _constants.DATA.FAQ_LIST
}); // ** LAZY AND ANIME OBSERVER

document.querySelectorAll(".lazy").forEach(function (img) {
  return _observer["default"].observe(img);
});
document.querySelectorAll(".roadmap__rect").forEach(function (rect) {
  return _observer.animeObserver.observe(rect);
});