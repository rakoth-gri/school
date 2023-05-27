export const DATA = {
	DOM: {
		ROAD_MAP_EL: document.querySelector(".roadmap__rects"),
		NAV_EL: document.querySelector(".header__nav"),
	},
	MENU: [
		{
			href: "#introduction",
			text: "О нас",
		},
		{
			href: "#specificity",
			text: "Как здесь учат",
		},
		{
			href: "#roadmap",
			text: "Карта обучения",
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
	ACCORDION_LIST: [
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
				"Желательно установить среду разработки <strong> Visual Studio Code </strong> с официального сайта. Зарегистрировать новый <strong> GOOGLE ACCOUNT </strong> или использовать имеющийся.",
		},
		{
			id: "6",
			title: "Как договориться о начале занятий ?",
			content:
				"Вы можете написать по указанным контактам либо воспользоваться формой обратной связи на сайте",
		},
		{
			id: "7",
			title: "Могу ли я выбрать конкретный курс из представленных в <strong> карте обучающего </strong> ?",
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
			content:
				"Конечно, можно взять пробный урок (длительность: 1 ак. час) совершенно бесплатно.",
		},
		{
			id: "11",
			title: "Нужно ли настраивать среду разработки (редактор кода) ?",
			content:
				"Безусловно, редактор - это лучший друг программиста. Он валидирует ошибки, помогает вспомнить синтаксис и пишет многие контсрукции за Вас. От правильной настройки последнего - зависит скорость и качество Вашего будущего кода! <br> Вы можете взять целое занятие по  его настройке",
		},
		{
			id: "12",
			title: "А какова длительность занятия ?",
			content:
				"Все зависит от Ваших предпочтений. Но мы не рекомендуем заниматься более 2 академических часов",
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
};