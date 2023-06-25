"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Adapter =
/*#__PURE__*/
function () {
  function Adapter() {
    _classCallCheck(this, Adapter);
  }

  _createClass(Adapter, [{
    key: "controller",
    value: function controller(method, container, list, options) {
      switch (method) {
        case "Faq":
          this[method](container, list);
          break;

        case "Features":
          console.log("Здесь");
          this[method](container, list);
          break;

        case "Tech_Guide":
          this[method](container, list);
          break;

        default:
          this[method](container, list, options);
          break;
      }
    }
  }, {
    key: "Faq",
    value: function Faq(container, list) {
      container.insertAdjacentHTML("beforeend", list.map(function (_ref) {
        var title = _ref.title,
            content = _ref.content,
            id = _ref.id;
        return "\n            <article class=\"faq__item\">\n\t\t\t\t<div class=\"faq__item_header\">\n\t\t\t\t\t<h3>".concat(title, "</h3>\n\t\t\t\t\t<i class=\"", "faq__item_trigger bi bi-chevron-up ".concat(id === "0" ? "active" : ""), "\" id=\"").concat(id, "\"></i>\n\t\t\t\t</div>\n\t\t\t\t<hr>\n\t\t\t\t<div class=\"faq__item_content\" style=\"").concat(id === "0" && "max-height: max-content;", "\" id=\"").concat(id, "\">\n\t\t\t\t\t<blockquote class=\"faq__item_body\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t").concat(content, "\n\t\t\t\t\t\t</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</blockquote>\n\t\t\t\t</div>\n\t\t\t</article>\n        ");
      }).join(""));
    }
  }, {
    key: "AutoFeatures",
    value: function AutoFeatures(container, list) {
      container.insertAdjacentHTML("beforeend", "<div class=\"slider__body\">\t\t\n                <div class=\"slider__body_tracker\">\n                    ".concat(list.map(function (_ref2, i) {
        var title = _ref2.title,
            desc = _ref2.desc;
        return "\n                        <div class=\"slider__body_item\">\n                            <h3> ".concat("".concat(i + 1, " ").concat(title), " </h3>\n                            <p> ", desc, " </p>\n                        </div>\n                        ");
      }).join(""), "\n                </div>\n\t\t\t\t<div class=\"features__dottes\">\n\t\t\t\t\t").concat(list.map(function (_, index) {
        return "<span class=\"".concat("features__dottes_item ".concat(index === 0 && "active"), "\" id=\"", index, "\"> 0").concat(index + 1, " </span>");
      }).join(""), "\n\t\t\t\t</div>\n                <div class=\"features__control\">\n                    <i class=\"bi bi-arrow-right features__control_next\"></i>\n                    \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0441\u043B\u0430\u0439\u0434\n                </div>\n            </div>"));
    }
  }, {
    key: "Tech_Guide",
    value: function Tech_Guide(container, list) {
      container.insertAdjacentHTML("beforeend", list.map(function (_ref3) {
        var id = _ref3.id,
            tech = _ref3.tech,
            figcaption = _ref3.figcaption,
            ul = _ref3.ul,
            src = _ref3.src;
        return "<article class=\"card__item\">\n\t\t\t\t\t<div class=\"card__item_card1\">\n\t\t\t\t\t\t<h3 style=\"text-transform: uppercase\"> ".concat(tech, ": </h3>\n\t\t\t\t\t\t<img src=\"").concat(src, "\" alt=\"\" class=\"card__item_logo\" loading=\"lazy\" />\n\t\t\t\t\t\t<figcaption class=\"card__item_figcaption\"> ").concat(figcaption, " </figcaption>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card__item_card2\">\n\t\t\t\t\t\t<h3>\u0412 \u041A\u0423\u0420\u0421\u0415:</h3>\n\t\t\t\t\t\t<ul class=\"card__item_desc\"> \n                            ").concat(ul.slice(0, 3).map(function (li) {
          return "<li> ".concat(li, " </li>");
        }).join(""), " \n                        </ul>\n\t\t\t\t\t\t<button class=\"card__item_btn\" id=\"").concat(id, "\"> \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 </button>\n\t\t\t\t\t</div>\n\t\t\t</article>");
      }).join(""));
    }
  }, {
    key: "Form",
    value: function Form(container, list, options) {
      container.innerHTML = "\n        <div className=\"callback__form_wrap\">\t\t\t\t\n                    ".concat(list.map(function (_ref4) {
        var name = _ref4.name,
            type = _ref4.type,
            placeholder = _ref4.placeholder,
            pattern = _ref4.pattern;
        return "\n                        <div class=\"callback__form_block\">\n                            <input type=\"".concat(type, "\" placeholder=\"").concat(placeholder, "\" name=\"").concat(name, "\" class=\"callback__form_el\"/>                           \n                            <span class=\"error\"></span>\n                        </div>");
      }).join(""), "\n                    <div class=\"callback__form_block\">                                        \n                        <select name=\"select\" class=\"callback__form_el\" > \n                                    ").concat(options.map(function (_ref5) {
        var value = _ref5.value,
            text = _ref5.text;
        return "<option value='".concat(value, "' ").concat(value === "" && "selected", ">").concat(text, "\n                                                </option>");
      }).join(""), "\n                        </select>\n                        <span class=\"error\"></span>           \n                    </div>\n                    <div class=\"callback__form_block\">\n                        <input type=\"checkbox\" name=\"checkbox\" id=\"checkbox\"/>\n                        <label for=\"checkbox\" data-style=\"checkbox\"></label>\n                        <span class=\"agreementSpan\"> \u0421\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043E \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 </span>\n                    </div>\t\t\t\t\t\n                    <div class=\"callback__form_block\">\n                        <input type=\"submit\" class=\"callback__form_el\" value=\"\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443\"/>\t\t\t\t\t\n                    </div>\n    </div>");
    }
  }]);

  return Adapter;
}();

exports["default"] = Adapter;