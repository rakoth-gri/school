export const DATA = {
	DOM: {
		ROAD_MAP_EL: document.querySelector(".roadmap__rects"),
		NAV_EL: document.querySelector(".header__nav"),
		TECH_GUIDE_CARDS_EL: document.querySelector(".techGuide__cards"),
		SIDEBAR_EL: document.querySelector(".sidebar"),
		FORM_EL: document.querySelector(".callback__form"),
		MODAL_EL: document.querySelector(".modal"),
		FEATURES__SLIDER_EL: document.querySelector(".features"),
	},
	MENU_LIST: [
		{
			href: "#introduction",
			text: "О нас",
		},
		{
			href: "#features",
			text: "Как здесь учат",
		},
		{
			href: "#roadmap",
			text: "Карта обучения",
		},
		{
			href: "#techGuide",
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
		{
			href: "#callback",
			text: "Обратная связь",
		},
	],
	ROAD_MAP_LIST: [
		{
			h2: "Cтарт:",
			strong: 1,
			text: "Начнем с семинара по WEB: описание направления, роль браузера, фундаментальные технологии, протоколы обмена данных в сети, структура современного Web-сайта, настройка среды разработки( IDE ) и др.",
			src: "./icons/langs/vscode.svg",
			title: "vscode",
			alt: "vscode",
			className: "roadmap__lang",
		},
		{
			h2: "HTML:",
			strong: 2,
			text: "Разбираемся с языком гипертекстовой разметки (<strong>HTML</strong>), роль HTML в структуре сайта, рассмотрим базовый каркас Web-страницы, пройдем основные синтаксические конструкции языка их назначение, поговорим о семантике и др.",
			src: "./icons/langs/html.svg",
			title: "html",
			alt: "html",
			className: "roadmap__lang",
		},
		{
			h2: "CSS:",
			strong: 3,
			text: "Разберемся с каскадными таблицами стилей (<strong>СSS</strong>), изучим все основные практические концепты: синтаксис, блочная модель, наследование и изменчивость, позицинирование, технологии FLEXBOX, СSS-GRID для проектирования адаптивных шаблонов, HTML-таблица, HTML-форма и др.",
			src: "./icons/langs/css.svg",
			alt: "css",
			className: "roadmap__lang",
			src: "./icons/langs/css.svg",
		},
		{
			h2: "JS:",
			strong: 4,
			text: "Изучим практические концепты языка Javascript (JS): подключение на страницу, типы данных, переменные, условные операторы, циклы функции, базовые структуры данных и их методы, методы примитивов, контекст, Switch-case, kлассы и др.",
			src: "./icons/langs/js.svg",
			title: "js",
			alt: "js",
			className: "roadmap__lang",
		},
		{
			h2: "JS DOM:",
			strong: 5,
			text: "Погрузимся в объектную модель документа (<strong>DOM</strong>) и научимся с ней взаимодействовать средствами JS: получать, добавлять, удалять элементы со страницы; динамически взаимодействовать с CSS-стилями;  создавать и обрабатывать пользовательские события, рендерить коллекции типовых элементов, создавать UI-элементы и т.д.",
			src: "./icons/langs/js_dom.svg",
			title: "js_dom",
			alt: "js_dom",
			className: "roadmap__lang",
		},
		{
			h2: "Асинхронность в JS",
			strong: 6,
			text: "Особенности работы с асинхронным кодом: концепт промисов, надстройки над промисами, взаимодействие со стороннеми ресурсами в сети, асинхронные запросы к серверу, получение данных и последующая обработка на &#8243;клиенте&#8243; и т.д.",
			src: "./icons/langs/js_dom.svg",
			title: "js_dom",
			alt: "js_dom",
			className: "roadmap__lang",
		},
		{
			h2: "Typescript",
			strong: 7,
			text: "Разберемся что такое строгая типизация, зачем она нужна и как ее реализовать в JS, пройдем базовые концепты для типизации различных типов данных и т.д.",
			src: "./icons/langs/ts.svg",
			title: "ts",
			alt: "ts",
			className: "roadmap__lang",
		},
		{
			h2: "React",
			strong: 8,
			text: "Разберем самую популярную библиотеку для построения пользовательских интерфейсов, поговорим об особенностях работы React, глубже погрузимся в core-концепты Javascript, разберем понятие <strong> &#8243;SPA&#8243; </strong>, будем практиковаться и изучем работу с: <strong>JSX</strong>, React-компонентами, пропсами, состоянием, хуками, роутинг-библиотеками, Layout, СSS-модулями, Styled-components и т.д.)",
			src: "./icons/langs/react.svg",
			title: "react",
			alt: "react",
			className: "roadmap__lang",
		},
		{
			h2: "Redux",
			strong: 9,
			text: "Разберем для чего в серьезных проектах использует менеджеры состояний (<strong> State managers </strong>). Поговорим о базовых концептах, На практике научимся подключать Redux к React-проекту и поймем удобство инкапсуляции логики приложения в глобальном состоянии, пройдем типизацию Redux при помощи Typescript, поработаем с асинхронными экшенами и др.",
			src: "./icons/langs/redux.svg",
			title: "redux",
			alt: "redux",
			className: "roadmap__lang",
		},
	],
	TECH_GUIDE_LIST: [
		{
			id: "0",
			tech: "figma",
			figcaption:
				"Онлайн-сервис для разработки интерфейсов для Web-проектов. Поддерживает совместную работу в режиме реального времени",
			ul: [
				"рассмотрим, для чего нужна Figma фронтендеру",
				"научися создавать frame-шаблоны для различных устройств и подключать сетку для проекта",
				"научимся использовать основные фигуры для создания UI-элементов",
				"разберемся как организовать кастомную цветовую палитру, текстовые стили и т.д.",
			],
			src: "./icons/langs/figma.svg",
		},
		{
			id: "1",
			tech: "html",
			figcaption:
				"Стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере",
			ul: [
				"Что такое HTML-разметка, ее роль, структура HTML-5",
				"теги - основные структурные элементы гипертекстовой разметки - их синтаксис, атрибуты, виды и назначение",
				"проектирование страницы средствами HTML: заголовки, ссылки, текстовые элементы, таблицы, списки, формы и т.д.",
				"семантика - &quot;осознанная&quot; разметка Web-сайта. Пишем семантически размеченный каркас страницы",
			],
			src: "./icons/langs/html.svg",
		},
		{
			id: "2",
			tech: "css",
			figcaption:
				"Декларативный язык стилизации и описания внешнего вида документа, написанного с использованием языка разметки",
			ul: [
				"Правильное подключение СSS-стилей к Web-странице и подготовка common-styles",
				"User-Agent стили, <strong> блочная модель </strong> элемента, строчные и блочные теги",
				"Что есть &quot; нормальный поток документа &quot; и как позиционировать блоки на странице",
				"Краеугольные концепты СSS: <strong> Изменчивость, Наследование и Каскадирование </strong>",
				"Технологии для формирования адаптивного LAYOUT нашего сайта: FLEXBOX CSS, FLOAT, GRID",
				"Шрифты для Web-страниц: виды, способы подключения, иконочные шрифты",
				"Трансформации, анимации и ANIMATION-FRIENDLY свойства",
				"&quotЗагадочные&quot псевдо: -классы, селекторы, элементы",
				"Адаптивность средствами медиа-запросов. Правила стилей для адаптивных старниц",
				"Графические фреймворки на примере <strong> TAILWIND CSS <strong>",
			],
			src: "./icons/langs/css.svg",
		},
		{
			id: "3",
			tech: "js",
			figcaption:
				"Онлайн-сервис для разработки интерфейсов для Web-проектов. Поддерживает совместную работу в режиме реального времени",

			ul: ["Онлайн-сервис для разработки интерфейсов для Web-проектов. Поддерживает совместную работу"],
			src: "./icons/langs/js.svg",
		},
		{
			id: "4",
			tech: "js_dom",
			figcaption:
				"Онлайн-сервис для разработки интерфейсов для Web-проектов. Поддерживает совместную работу в режиме реального времени",

			ul: ["Онлайн-сервис для разработки интерфейсов для Web-проектов. Поддерживает совместную работу"],
			src: "./icons/langs/js_dom.svg",
		},
		{
			id: "5",
			tech: "js asynchronous",
			figcaption:
				"Онлайн-сервис для разработки интерфейсов для Web-проектов. Поддерживает совместную работу в режиме реального времени",

			ul: ["Онлайн-сервис для разработки интерфейсов для Web-проектов. Поддерживает совместную работу"],
			src: "./icons/langs/js.svg",
		},
		{
			id: "6",
			tech: "typescript",
			figcaption:
				"Онлайн-сервис для разработки интерфейсов для Web-проектов. Поддерживает совместную работу в режиме реального времени",

			ul: ["Онлайн-сервис для разработки интерфейсов для Web-проектов. Поддерживает совместную работу"],
			src: "./icons/langs/ts.svg",
		},
		{
			id: "7",
			tech: "react",
			figcaption:
				"Онлайн-сервис для разработки интерфейсов для Web-проектов. Поддерживает совместную работу в режиме реального времени",

			ul: ["Онлайн-сервис для разработки интерфейсов для Web-проектов. Поддерживает совместную работу"],
			src: "./icons/langs/react.svg",
		},
		{
			id: "8",
			tech: "redux",
			figcaption:
				"Онлайн-сервис для разработки интерфейсов для Web-проектов. Поддерживает совместную работу в режиме реального времени",

			ul: ["Онлайн-сервис для разработки интерфейсов для Web-проектов. Поддерживает совместную работу"],
			src: "./icons/langs/redux.svg",
		},
	],
	FAQ_LIST: [
		{
			id: "0",
			title: "Что необходимо для начала занятий ?",
			content: "Ваше желание чему-то научиться, стабильное интернет-соединение и актуальный ПК (ноутбук).",
		},
		{
			id: "1",
			title: "Как проходят занятия ?",
			content:
				"Занятия проводятся в формате Видео-конференций с использованием соответствующего программного обеспечения",
		},
		{
			id: "2",
			title: "Какие Базовые знания необходимы для успешного освоения материала ?",
			content: "Будет вполне достаточно школьных базовых знаний",
		},
		{
			id: "3",
			title: "С какого возраста лучше начинать заниматься ?",
			content: "Мы рекомендуем наши занятия людям от 15 лет и старше",
		},
		{
			id: "4",
			title: "Будут ли доступны конспекты занятий, видео-лекции и т.п. ?",
			content:
				"Да! У каждого ученика будет личный кабинет, где он сможет посмотреть темы, видео-материалы и домашние задания по соответствующему занятию.",
		},
		{
			id: "5",
			title: "Какие организационные моменты лучше решить перед началом занятий ?",
			content:
				"Желательно установить среду разработки <strong> <a href='https://code.visualstudio.com/download' style='color: var(--app-blue-color)'> Visual Studio Code </a> </strong> с официального сайта. Зарегистрировать новый <strong> <a href='https://accounts.google.com/v3/signin/identifier?dsh=S-1224258872%3A1685454936764904&authuser=0&continue=https%3A%2F%2Fwww.google.com%2F%3Fhl%3Dru&ec=GAlAmgQ&hl=ru&flowName=GlifWebSignIn&flowEntry=AddSession' style='color: var(--app-blue-color)'> Google Account </a> </strong> или использовать имеющийся.",
		},
		{
			id: "6",
			title: "Как договориться о начале занятий ?",
			content: "Вы можете написать по указанным контактам либо воспользоваться формой обратной связи на сайте",
		},
		{
			id: "7",
			title: "Могу ли я выбрать конкретный курс из представленных в <strong> <em> карте обучения </em> </strong> ?",
			content:
				"Конечно, можно пройти все курсы, выбрать какой-то определенный и даже конкретную тему, в которой Вы чувствуете пробелы.",
		},
		{
			id: "8",
			title: "А что по ценам ?",
			content:
				"В отличии от многих школ программирования - мы предоставляем услуги репетитора напрямую и не выступаем в роли посредника. Соответственно, цены ниже. На цену также влияет продолжительность занятия. Возможна и <strong> договорная цена </strong>, к примеру, за 1 тематический блок",
		},
		{
			id: "9",
			title: "Существует ли какая-то рекомендуемая частота посещений занятий ?",
			content:
				"Если Вы решили взять несколько занятий (раздел), то советуем посещать их не реже 2 раз в неделю для качественного закрепления материала. Хотя, конечно, Вы сами вправе выбрать частоту посещений",
		},
		{
			id: "10",
			title: "Доступен ли пробный урок ?",
			content: "Конечно, можно взять пробный урок совершенно бесплатно( длительность: 1 академический час).",
		},
		{
			id: "11",
			title: "Нужно ли настраивать среду разработки (редактор кода) ?",
			content:
				"Безусловно, редактор - это лучший друг программиста. Он валидирует ошибки, помогает вспомнить синтаксис и пишет многие конструкции за Вас. От правильной настройки последнего - зависит скорость и качество Вашего будущего кода! <br> Вы можете взять целое занятие по  его настройке",
		},
		{
			id: "12",
			title: "А какова длительность занятия ?",
			content: "Все зависит от Ваших предпочтений. Но мы не рекомендуем заниматься более 2 академических часов",
		},
		{
			id: "13",
			title: "Важно ли выполнять домашнюю работу ?",
			content:
				"Домашняя работа может быть задана в любой форме: практическая задача, повторение материала или видео-лекции, изучение конкретных разделов документации и т.д. Мы настоятельно рекомендуем выполнять ДЗ, т.к. от него напрямую зависит качество усвоения материала",
		},
		{
			id: "14",
			title: "Будут ли ссылки на документацию в течении занятия ?",
			content:
				"Безусловно, важнейший навык программиста - умение мсамостоятельно читать и разбираться в технической документации",
		},
	],
	FORM_LIST: [
		{
			name: "name",
			type: "text",
			placeholder: "Имя",
		},
		{
			name: "phone",
			type: "tel",
			placeholder: "+7 XXX XXX XX XX",
		},
	],
	OPTION_LIST: [
		{
			value: "",
			text: "Выберите направление:",
		},
		{
			value: "figma",
			text: "figma",
		},
		{
			value: "html",
			text: "html",
		},
		{
			value: "css",
			text: "css",
		},
		{
			value: "js",
			text: "js",
		},
		{
			value: "js_dom",
			text: "js_dom",
		},
		{
			value: "typescript",
			text: "typescript",
		},
		{
			value: "react",
			text: "react",
		},
		{
			value: "redux",
			text: "redux",
		},
	],
	REG_EXP: {
		name: [/^[A-Z\sА-Яа-яa-z]{2,40}$/, "введите корректное имя"],
		phone: [/^\+?\d\s?\d{3}\s?\d{3}\s?\d{2}\s?\d{2}$/, "введите корректный номер"],
		select: [/^[a-z_]{1,40}$/, "выберите курс"],
	},
	FEATURES_LIST: [
		{
			title: "начни с нуля разбираться в Web-разработке",
			desc: "начни с первых шагов и получи мощные базовые знания, чтобы в дальнейшем развиваться самостоятельно!",
		},
		{
			title: "выбирай только интересующие тебя кейсы",
			desc: "у нас можно #8243;прокачать#8243; свои знания по конкретной теме, заказав он-лайн консультацию",
		},
		{
			title: "получи проект в портфолио",
			desc: "реализуй свой первый проект в портфолио и создай новые, используя полученные sкиллы!",
		},
		{
			title: "oкунись в мир современной Web-разработки",
			desc: "изучи актуальные инструменты и языки, используемые в современных приложениях!",
		},
		{
			title: "вся теория изучается на практических кейсах",
			desc: "Большую часть занятия - ты будешь писать код и выполнять конкретные задания.",
		},
	],
};
