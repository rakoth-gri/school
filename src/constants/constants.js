export const DATA = {
	DOM: {
		NAV_EL: document.querySelector(".header__nav"),
		BURGER_EL: document.querySelector(".header__burger"),
		TABS_EL: document.querySelector(".tabs__panel"),
		TABS_CONTENT_EL: document.querySelector(".tabs__content"),
		FEATURES_SLIDER_EL: document.querySelector(".features"),
		TECH_GUIDE_CARDS_EL: document.querySelector(".techGuide__cards"),
		ROAD_MAP_EL: document.querySelector(".roadmap__rects"),
		FORM_EL: document.querySelector(".callback__form"),
		SIDEBAR_EL: document.querySelector(".sidebar"),
		MODAL_EL: document.querySelector(".modal"),
		FAQ_EL: document.querySelector(".faq__container"),
		SOCIAL_EL: document.querySelector(".footer__social"),
		AGREEMENT_EL: document.querySelector(".agreement"),		
	},
	MENU_LIST: [
		{
			href: "#introduction",
			text: "О нас",
		},
		{
			href: "#features",
			text: "Особенности",
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
			href: "#faq",
			text: "Вопросы-ответы",
		},
		{
			href: "#callback",
			text: "Обратная связь",
		},
		{
			href: "#contacts",
			text: "Контакты",
		},
	],
	FEATURES_LIST: [
		{
			title: "начни с нуля разбираться в Web-разработке",
			desc: "начни с первых шагов и получи мощные базовые знания, чтобы в дальнейшем развиваться самостоятельно!",
		},
		{
			title: "выбирай только интересующие тебя кейсы",
			desc: "у нас можно &quot;прокачать&quot; свои знания по конкретной теме, заказав он-лайн консультацию",
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
		{
			title: "закрепляйте материал в любое свободное время",
			desc: "Вы получите доступ к видео-записи пройденного занятия, а также, тезисный план по изученному материалу",
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
			text: "Разберем для чего в серьезных проектах использует менеджеры состояний (<strong>State managers</strong>). Поговорим о базовых концептах, На практике научимся подключать Redux к React-проекту и поймем удобство инкапсуляции логики приложения в глобальном состоянии, пройдем типизацию Redux при помощи Typescript, поработаем с асинхронными экшенами и др.",
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
				"стандартизированный язык гипертекстовой разметки документов. Назначение - сформировать базовый &quot;карскас&quot; сайта из структурных единиц (тегов)",
			ul: [
				"что такое HTML-разметка, ее роль, правильная структура HTML-5",
				"теги - основные структурные элементы гипертекстовой разметки - их синтаксис, атрибуты, виды и назначение",
				"инструменты разработчика в Браузере для мониторинга объектной модели документа (DOM)",
				"проектирование страницы средствами HTML: заголовки, ссылки, текстовые элементы, таблицы, списки, формы и т.д.",
				"семантика - &quot;осознанная&quot; разметка Web-сайта. Пишем семантически размеченный каркас страницы",
				"изучаем возможности динамического формирования HTML-шаблонов с помощью языка <strong>PHP</strong>"
			],
			src: "./icons/langs/html.svg",
		},
		{
			id: "2",
			tech: "css",
			figcaption:
				"декларативный язык стилизации и описания внешнего вида документа. Назначение - стилизация и позиционирование элементов на странице",
			ul: [
				"cпособы подключения СSS-стилей к Web-странице, СSSOM и организация &quot;общих&quot; стилей",
				"user-agent стили, <strong> блочная модель </strong> элемента, строчные и блочные теги",
				"&quot;нормальный поток (flow) документа &quot; и способы позиционирования html-блоков на странице",
				"фундаментальные концепты СSS: <strong> Изменчивость, Наследование и Каскадирование </strong>",
				"технологии для формирования адаптивного LAYOUT блочного контейнера: FLEXBOX, FLOAT, GRID",
				"шрифты для Web-страниц: типы, способы подключения, иконочные шрифты",
				"трансформации, анимации и animation-friendly свойства",
				"&quotпродвинутое&quot использование псевдо: -классов, -селекторов, -элементов",
				"адаптивность сайта под различные девайсы (смартфоны, планшеты, десктопы). Организация стилей для  формирования адаптивных страниц",
				"изучаем препроцессор SASS, практикуем базовые концепции и сокращаем СSS-код",
				"графические фреймворки на примере <strong> BOOTSTRAP/TAILWIND CSS </strong>",
			],
			src: "./icons/langs/css.svg",
		},
		{
			id: "3",
			tech: "js",
			figcaption:
				"мультипарадигменный язык программирования, используемый для создания динамики Web-страниц (анимации, всплывающие элементы, валидация форм, получение данных с сервера и т.п.)",

			ul: ["назначение языка, способы подключения на страницу, пишем первые скрипты",
			 	"типы данных, переменные, приоритет операций и арифметика",
			  	"динамическая типизация: &quot;неявное&quot; и &quot;явное&quot; преобразование типов, поведение языка в логических и арифметических операциях",
			   	"условные и тернарные операторы, &quot;лживые&quot; значения языка, преобразования типов внутри условия",
			    "логические операторы короткого замыкания", 
				"циклы While и For. Практические примеры",
				"функции. Область видимости. Использование. Синтаксис. Функции Высшего порядка",
				"замыкания в функциях. Практические примеры",
				"базовые структуры данных и их API",
				"встроенные методы массивов на базе функций высшего порядка",
				"методы чисел, строк и объект Math",
				"объект Date. Базовы методы",
				"деструктуризация и оператор многоточия",
				"классы ES^6",
				"контекст. Практические примеры"],
			src: "./icons/langs/js.svg",
		},
		{
			id: "4",
			tech: "js_dom",
			figcaption:
				"программный интерфейс, поддерживаемый Javascript, для динамическиого взаимодействия с элементами на Web-странице (добавление, удаление, изменение стилей и атрибутов и т.п.)",

			ul: ["еще раз повторим <em> Объектную модель документа </em> - <strong>DOM</strong>",
			"получение, удаление и добавление элементов на страницу, динамическое управление <strong>inline-styles</strong>, &quot;живая&quot; и &quot;мертвая&quot; коллекции элементов",
			"создание и отображение элементов, динамическая генерировать HTML-шаблонов при помощи интерполяции",
			"работа с атрибутами элементов, кастомные атрибуты, геттеры и сеттеры",
			"работа с формой: получение данныx, формирование объекта с данными. Экземпляр FormData. Стандартное поведение Браузера",
			"пользовательские события: типы, обработка, всплытие, паттерн делегирования, объект &quot;Event&quot;",
			"использование браузерного API для реализации конкретных задач",
			"практикуем классы. Создаем простой класс кнопки и реализуем Табы"		
			],
			src: "./icons/langs/js_dom.svg",
		},
		{
			id: "5",
			tech: "js asynchronous",
			figcaption:
				"модуль, посвященный изучению асинхронной работы Javascript (запросы на сервер, обработка клиентских событий, таймауты, промисы и т.п.)",

			ul: ["Асинхронные функции <strong> браузерного API </strong>", "Промисы. Синтаксис. Назначение. Примеры использования", "Разбираем метод FETCH. Технология <strong> AJAX </strong>", "Браузерный метод <strong>FETCH</strong> на базе промисов. Основные типы асинхронных запросов. Учимся делать ajax-запросы к стороннему API", "Обработка ошибок. Конструкция <strong>&quot;TRY-CATCH&quot;</strong>", "Рассматриваем пользовательские события с точки зрения асинхронного кода"],
			src: "./icons/langs/js.svg",
		},
		{
			id: "6",
			tech: "typescript",
			figcaption:
				"язык программирования, расширяющий возможности Javascript и позволяющий реализовать концепт статической типизации.",

			ul: ["Рассмотрим какую проблему решает typescript в современных Web-приложения", "Разберем базовые типы, cуществующие в typescript", "Рассмотрим типизацию объектов. Посмотрим разницу между интерфейсами и типами. Литеральные типы.", "Дженерики (обощающий тип). Примеры", "Основы typescript в React JS"],
			src: "./icons/langs/ts.svg",
		},
		{
			id: "7",
			tech: "react",
			figcaption:
				"популярная библиотека для создание клиентской части приложения (фронтенд), написанная на Javascript, реализующая и оптимизирующая большое количество рутинных для программиста операций",

			ul: ["React. Назначение. Удобства использования. Понятие &quot;реактивности&quot;. Разворачиваем приложение на базе Vite JS, знакомимся со структурой папок", "Повторяем JS-концепты, используемые в библиотеке. JSX-синтаксис. JSX-атрибуты", "Стилизация компонентов в react. Препроцессоры. СSS-модули. CSS in JS.", "Разбираемся в понятиях React-элементы, React-компоненты. Пропсы. Рендеринг коллекций. Концепт &quot;Children&quot", "Понятие \"Состояние\" функциональных компонентов", "Роутинг. Библиотека React-Router-Dom. Понятия MPA и SPA", "Жизненный цикл  функциональных компонентов", "React Hooks для динамической функциональности SPA-приложений", "React-Icons, UUID, Use-debounce, React Spinners и другие библиотеки"],
			src: "./icons/langs/react.svg",
		},
		{
			id: "8",
			tech: "redux",
			figcaption:
				"менеджер управления состоянием клиентской части приложения, аккумулирующий большую часть логики приложения &quot;внутри себя&quot; и позволяющий разделить логику и представление данных",

			ul: ["Онлайн-сервис для разработки интерфейсов для Web-проектов. Поддерживает совместную работу"],
			src: "./icons/langs/redux.svg",
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
		textarea: [/.{20,}/s, "введите запрос"],
	},
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
			content: "Достаточно  базовых знаний средней школы",
		},
		{
			id: "3",
			title: "С какого возраста лучше начинать заниматься детям ?",
			content: "Лучше начинать с 14-15 лет"
		},
		{
			id: "4",
			title: "Будут ли доступны конспекты занятий, видео-лекции и т.п. ?",
			content:
				"Будет электронный кабинет с доступом к видео-материалам, домашним заданиям, тезисам по пройденному материалу.",
		},
		{
			id: "5",
			title: "Какие инструменты следует установить на ПК перед началом занятий ?",
			content:
				"Необходимо установить среду разработки <a href='https://code.visualstudio.com/download'> Visual Studio Code </a> с официального сайта. Зарегистрировать новый <a href=\"https://accounts.google.com/v3/signin/identifier?dsh=S-1224258872%3A1685454936764904&authuser=0&continue=https%3A%2F%2Fwww.google.com%2F%3Fhl%3Dru&ec=GAlAmgQ&hl=ru&flowName=GlifWebSignIn&flowEntry=AddSession\"> Google Account </a> или использовать имеющийся.",
		},
		{
			id: "6",
			title: "Как договориться о начале занятий ?",
			content: "Вы можете написать по указанным контактам либо воспользоваться формой обратной связи на сайте",
		},
		{
			id: "7",
			title: "Могу ли я выбрать конкретный курс из представленных в <a href=\"#roadmap\">Карте обучения</a> ?",
			content:
				"Можно пройти все курсы, выбрать определенный и даже конкретную тему, в которой имеются пробелы.",
		},
		{
			id: "8",
			title: "А что по ценам ?",
			content:
				"В отличии от многих школ программирования - мы предоставляем услуги репетитора напрямую и не выступаем в роли посредника. На итоговую цену, также, влияет продолжительность занятия. Возможна и <strong> договорная цена </strong>, к примеру, за 1 тематический блок",
		},
		{
			id: "9",
			title: "Существует ли рекомендуемая частота посещений занятий ?",
			content:
				"Если Вы взяли серию занятий (раздел), советуем заниматься не менее 2-х раз в неделю для продуктивного усвоения материала." 
		},
		{
			id: "10",
			title: "Доступен ли пробный урок ?",
			content: "Доступен (длительность: 45 мин.)",
		},
		{
			id: "11",
			title: "Нужно ли настраивать среду разработки (редактор кода) ?",
			content:
				"Безусловно, редактор - это лучший друг программиста. Он валидирует ошибки, помогает вспомнить синтаксис и пишет многие конструкции за Вас. От его правильной настройки - зависит скорость и качество Вашего будущего кода! Вы можете взять отдельное занятие по конфигурированию редактора",
		},
		{
			id: "12",
			title: "А какова длительность 1 занятия ?",
			content: "Все зависит от Ваших предпочтений. Мы рекомендуем заниматься не более 2 академических часов",
		},
		{
			id: "13",
			title: "Важно ли выполнять домашнюю работу ?",
			content:
				"Домашняя работа дается в любой форме: практическая задача, повторение материала, изучение конкретных разделов документации и т.д. Старайтесь всегда выполнять ДЗ!",
		},
		{
			id: "14",
			title: "Будут ли ссылки на документацию в течении занятия ?",
			content:
				"БУдут, важнейший навык программиста - умение самостоятельно разбираться в технической документации",
		},
	],
	TABS_LIST: [
		{
			text: "Оплата",
			id: 0,
			content: ["оплата производится за фактически проведенное занятие!", "Формы оплаты - безналичная", "В отличии от школ программирования - мы не просим предоплачивать курс, модуль и т.п."],			
		},
		{
			text: "актуальность",
			id: 1,
			content: ["современный деловой мир невозможно представить без интернета: гос. учреждения и частный бизнес в большинстве имеют собственный web-продукт (сайт, web-сервис, блог, CRM и т.п.), продвигающий конкретные услуги на рынок. Наблюдается устойчивый спрос не только на разработчиков, но и на смежных специалистов, квалификация которых включает базовые знания одного и более языков программирования (далее ЯП). Подтверждение последнему тезису можно легко увидеть на сайте крупнейших компаний интернет-рекрутмента (<strong> hh.ru и т.п. </strong>) <br/>", "с каждым годом растет число &quot;удаленных&quot; вакансий, требования которых вкоючают знания основ компьютерной грамотности и даже конкретных ЯП (аналитику, к примеру, полезно бывает знать язык SQL-запросов)", "в итоге, знание Web-программирования может оказаться твоим преимуществом не только в предметных, но и в смежных областях!"],			
		},
		{
			text: "Процесс обучения",
			id: 2,
			content: ["по-умолчанию, мы предлагаем дистанционный формат обучения", "Процесс обучения организован по принципу методической &quot;лестницы&quot;, т.о. движение идет от простых концептов к сложным. 90% времени занятия уделяется практической стороне (решение конкретных задач, разбор примеров, ссылки на документацию). В начале каждого занятия, будет разбор непонятных моментов и проверка ДЗ. Пройдя тему, ты будешь практиковаться на конкретной задаче учебного проекта", "весь код мы будем писать в <a href='https://code.visualstudio.com/download' target=\"_blanc\">IDE</a>, параллельно осваивая инструменты разработчика", "некоторые разделы, по согласованию, могут быть даны на самостоятельное обучение", "в процессе обучения будем использовать бесплатные инструменты и технологии для комфортного освоения материала", "продолжительность занятия выбирается на основе Твоих предпочтений, но мы не рекомендуем заниматься более 120 мин, т.к. качество усвоения материала может пострадать"],			
		},
		{
			text: "Избирательные темы",
			id: 3,
			content: "ты можешь обозначить конкретную тему, в которой необходимо разобраться. Просто отправь сообщение в телеграм-чат или воспользуйся <a href=\"#callback\"> обратной связью </a>",			
		},
		{
			text: "Необходимые инструменты",
			id: 4,
			content: "до старта - скачай IDE (редактор кода) и создать GOOGLE-аккаунт: все ссылки приведены в разделе <a href=\"#faq\"> Часто задаваемые вопросы </a>",			
		},
		{
			text: "Обучающие материалы",
			id: 5,
			content: ["доступ ко всем обучающим материалам: видео-записи занятий, ссылки на техническую документацию и т.п.", "в электронном классе публикуются основные тезисы пройденного материала, фрагменты кода и т.п."],			
		},
		{
			text: "Для кого",
			id: 6,
			content: ["занятия подходят как школьникам (7-11 класс), так и взрослым"],			
		},
		{
			text: "Миссия",
			id: 7,
			content: ["погружение в мир IT-разработки с формированием технических компетенций на этапе средней/старшей школы", "продуктивное использование времени за ПК", "обучение основам и актуальным технологиям Web-программирования", "получение знаний для смены рода деятельности", "обретение крутого, технологичного хобби и возможность в дальнейшем <strong>самостоятельно </strong> разбираться в этом направлении"],			
		},				
	],
	SOCIAL_LIST: [
		{
			className: "footer__social_link",			
			src: "./icons/social/telegram.svg",
			alt: "telegram",
			href: "https://telegram.me/umnik-rkh",			
		},
		{
			className: "footer__social_link",			
			src: "./icons/social/gmail.svg",
			alt: "gmail",
			href: "mailto:nowhere@gmail.com",			
		},
		{
			className: "footer__social_link",			
			src: "./icons/social/whatsapp.svg",
			alt: "whatsapp",
			href: "https://wa.me/79372222222",			
		},
	]
};


