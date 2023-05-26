export const DATA = {
	DOM: {
		ROAD_MAP_EL: document.querySelector(".roadmap__rects"),
		NAV_EL: document.querySelector(".header__nav"),
	},
	MENU: [
		{
			href: "#about",
			text: "О нас",
		},
		{
			href: "#specificity",
			text: "Как здесь обучают",
		},
		{
			href: "#roadmap",
			text: "Карта движения",
		},
		{
			href: "#guide",
			text: "Гайд по технологиям",
		},
		{
			href: "#contacts",
			text: "Контакты",
		},
		{
			href: "#faq",
			text: "Вопросы-ответы",
		},
	],
	ROAD_MAP: [
		{
			h2: "Cтарт:",
			strong: 1,
			text: "Начнем с семинара по WEB: описание направления, роль браузера, протоколы обмена данных в сети, структура своверменного веб-сайта, разработка в IDE и конфигурация",
			src: "./icons/langs/vscode.svg",
		},
		{
			h2: "HTML:",
			strong: 2,
			text: "Разбираемся с гипертекстовой разметкой (HTML), узнаем ее роль в структуре сайта, изучим базовый каркас страницы, пройдем основные элементы языка их назначение, поговорим о семантике и т.д.",
			src: "./icons/langs/html.svg",
		},
		{
			h2: "CSS:",
			strong: 3,
			text: "Разбираемся с каскадными таблиуами стилей (СSS), изучим основные понятия: синтаксис языка, блочная модель, наследование и изменчивость, позицинирование элементов, адаптивные сетки для создания layout (технологии FLEXBOX, GRID и др.), таблицы, формы и т.д.",
			src: "./icons/langs/css.svg",
		},
		{
			h2: "JS:",
			strong: 4,
			text: "Изучим практические концепты языка Javascript (JS): правильное подключение на страницу, типы данных, переменные, условные операторы, циклы функции, базовые структуры данных и их методы, методы примитивов, ключевое слово 'this' и т.д.",
			src: "./icons/langs/js.svg",
		},
		{
			h2: "JS DOM:",
			strong: 5,
			text: "Погрузимся в объектную модель документа (DOM) и научимся с ней взаимодействовать средствами JS: получать, добавлять, удалять элементы со страницы, динамически взаимодействовать со стилями элементов, создавать и обрабатывать пользовательские (клиентские) события, рендерить коллекции типовых элементов и т.д.",
			src: "./icons/langs/js_dom.svg",
		},
		{
			h2: "Асинхронность в JS",
			strong: 6,
			text: "Особенности работы с асинхронным кодом: концепт промисов, удобные надстройки над промисами, взаимодействие со стороннеми ресурсами в сети, асинхронные запросы к серверу, получение данных и последующая обработка на 'клиенте' и т.д.",
			src: "./icons/langs/js_dom.svg",
		},
		{
			h2: "Typescript",
			strong: 7,
			text: "Разберемся что такое строгая типизация и как ее реализовать в JS, пройдем базовые концепты для типизации различных данных и т.д.",
			src: "./icons/langs/ts.svg",
		},
		{
			h2: "React",
			strong: 8,
			text: "Разберем самую популярную библиотеку для построения пользовательского интерфейса для сайтов, поговорим об особенностях работы в React, разберем понятие 'SPA', на практике разберем основные концепции работы с React (компоненты, пропсы, состояние, хуки, props drilling, роутинг, layout, css-modules и т.д.)",
			src: "./icons/langs/react.svg",
		},
		{
			h2: "Redux",
			strong: 9,
			text: "Разберем понятие менеджера состояния (State manager): назначение и базовые концепты, как он помогает инкапсулировать и 'централизировать' логику на Клиенте, научимся подключать и работать с Redux, типизировать его структурные единицы, порабатаем с асинхроннстью и др.",
			src: "./icons/langs/redux.svg",
		},
	],
	ROAD_MAP_LANGS: [
		{
			title: "html",
			alt: "html",
			className: "roadmap__lang",
			src: "./icons/langs/html.svg",
		},
		{
			title: "css",
			alt: "css",
			className: "roadmap__lang",
			src: "./icons/langs/css.svg",
		},
		{
			title: "tw",
			alt: "tw",
			className: "roadmap__lang",
			src: "./icons/langs/tw.svg",
		},
		{
			title: "js",
			alt: "js",
			className: "roadmap__lang",
			src: "./icons/langs/js.svg",
		},
		{
			title: "js_dom",
			alt: "js_dom",
			className: "roadmap__lang",
			src: "./icons/langs/js_dom.svg",
		},
		{
			title: "figma",
			alt: "figma",
			className: "roadmap__lang",
			src: "./icons/langs/figma.svg",
		},
		{
			title: "ts",
			alt: "ts",
			className: "roadmap__lang",
			src: "./icons/langs/ts.svg",
		},
		{
			title: "react",
			alt: "react",
			className: "roadmap__lang",
			src: "./icons/langs/react.svg",
		},
		{
			title: "redux",
			alt: "redux",
			className: "roadmap__lang",
			src: "./icons/langs/redux.svg",
		},
	],
};
