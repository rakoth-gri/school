## LANDING - Создание современного APP на базе JS ----

## ПЛАН РАЗРАБОТКИ:

-   Эскиз макета выполним в **FIGMA**, не будем придерживаться концепции ** PIXEL PERFECT **
    1. Почти все иконки разработаем самостоятельно и экспортируем как .SVG для меньшего веса
    2. Создадим несколько кастомных фонов для темизации
    3. Массив шрифтов будет включать **_Montserrat_**, **_ROBOTO_**, **_GOTHAM_**
    4. Зададим эллипсовидную форму нашим фото при помощи фигур
-   Картинки возьмем бесплатные, используем изменение размеров и сжатие с использованием ресурса [resizepixel](https://www.resizepixel.com/ru/)
-   Шрифты будем скачивать в отдельную папку c локальным подключением при помощи директивы `@font+face`
-   Иконочные шрифты могут в перспективе понадобится для комфортной динамической стилизации
-   Цветовая палитра также разработана в фигме и перенесена в **index.css** в виде массива переменных (SASS):

```css
:root
    // color scheme
    --app-blue-color: #2C6E83
    --app-danger-color: #650B0B
    --app-logo-color: #B8A70A
    --app-black-color: #000000
    --app-green-color: #00843D
    --app-white-color: #ffffff
    --app-gray-color: #FFF1F1  // opacity 30%
    --app-brown-color: #E16363
    --app-purple-color: #30398E
    --app-violet-color: #7b1095
```

```css
.active {
	color: danger;
}
```

-   Для стилизации будем использовать **SASS**-препроцессор, с формированием корневого `index.sass`-файла, к которому подключим другие **SASS**-модули

    1. постараемся максимально периспользовать код (root-styles, mixins, css vars)
    2. Запрограммируем стили для 2-цветовых решений: **light** и **dark** в базовых стилях:

    ```css
    :root {
        //theme-params---------
        --app-light-color: #E3DBDB
        --app-dark-color: #3F3A3A

        --app-dark-font: var(--app-white-color)
        --app-light-font: var(--app-dark-color)

        --app-dark-bg: var(--app-dark-color)
        --app-light-bg: var(--app-white-color)

        --app-default-bg: var(--app-light-bg)
        --app-default-font: var(--app-light-font)
        }
    ```

-   Для динамической шаблонизации - возможно понадобится использовать **PHP** или **PUG**
-   Все UI-компоненты (**_forms_**, **_modals_**, **_buttons_**, **_smart-links_**, **\_sliders** и т.п.) напишем самостоятельно средствами современного JS (ES^6 и выше), без подключения сторонних библиотек!
-   Будем использовать динамический рендеринг всех однотипных элементов на странице (карточки, параграфы, ссылки меню и т.п.) и будем работать в концепции "SPA"
-   До подключения сборщика (**WEBPACK**), будем использовать нативные ES^6-модули, для разбиения кода и выделения отдельных сервисов. К примеру, есть **Класс Слайдера**, есть **Общий Словарь Констант** и т.п.:

```javascript
export default class Tech_Guide {
	constructor({ container, list, sidebar }) {
		this.$container = container;
		this.list = list;
		this.$sidebar = sidebar;
		// METHODS:
		this.render($container, list, ...);
		this.addListenerToElem();
		// ---
	}

	render(...params) {
		// ------
	};

	addListenerToElem() {
		// ------
	}

    .
    .
    .

}
```

-   Для статики - будем использовать тег `<picture> ... </picture>`, позволяющий реализовать для различных экранов + разные размеры одного и того же изображения, иконки...
-   В качестве сборщика проекта - будем юзать **WEBPACK-5**
-   для контроля версий и back-up исходников - будем пользоваться **GIT**, **GITHUB**,
-   Возможно типизируем проект с TS
-   Для микроразметки - воспользуемся готовыми шаблонами [ARTZOLIN](https://artzolin.ru/articles/schema-snippets/#html-organization)
-   После сборки проекта (WP) - протестировать ресурс перед выгрузкой на хостинг:
    1. HTML VALIDATORS
    2. [GOOGLE PAGE SPEED](https://pagespeed.web.dev/) (на предмет оптимизации статики и получения примерного индекса загрузки)
