/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RComponent = exports.RComponent = function (_React$Component) {
    _inherits(RComponent, _React$Component);

    function RComponent() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, RComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RComponent.__proto__ || Object.getPrototypeOf(RComponent)).call.apply(_ref, [this].concat(args))), _this), _this.onUnmounts = [], _this.onMounts = [], _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(RComponent, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.mounted = true;
            this.onMounts.forEach(function (onMount) {
                return onMount();
            });
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.mounted = false;
            this.onUnmounts.forEach(function (onUnmount) {
                return onUnmount();
            });
        }
    }, {
        key: "safeUpdate",
        value: function safeUpdate() {
            if (this.mounted) {
                this.forceUpdate();
            }
        }
    }, {
        key: "onMount",
        value: function onMount(f) {
            this.onMounts.push(f);
        }
    }, {
        key: "onUnmount",
        value: function onUnmount(f) {
            this.onUnmounts.push(f);
        }
    }]);

    return RComponent;
}(React.Component);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DemoAll = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _rComponent = __webpack_require__(0);

var _demoLayout = __webpack_require__(25);

var _demoIntro = __webpack_require__(23);

var _examplesAll = __webpack_require__(22);

var _gettingStarted = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DemoAll = exports.DemoAll = function (_RComponent) {
    _inherits(DemoAll, _RComponent);

    function DemoAll() {
        _classCallCheck(this, DemoAll);

        return _possibleConstructorReturn(this, (DemoAll.__proto__ || Object.getPrototypeOf(DemoAll)).apply(this, arguments));
    }

    _createClass(DemoAll, [{
        key: "render",
        value: function render() {
            return React.createElement(
                _demoLayout.DemoLayout,
                { className: "" },
                React.createElement(_demoIntro.DemoIntro, null),
                React.createElement(_gettingStarted.GettingStarted, null),
                React.createElement(_examplesAll.ExamplesAll, null)
            );
        }
    }]);

    return DemoAll;
}(_rComponent.RComponent);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bindDomConfig = RlfDemo.RLF.bindDomConfig;
var match = RlfDemo.DomMod.match;


bindDomConfig.addExtraDirective(function (form) {
    return match("[lf-async-feedback]", function (props) {

        var path = props["lf-path"];

        var pathDataError = form.getPathDataError(path);
        var asyncErrorStatus = pathDataError && (pathDataError.getAsyncDataStatus && pathDataError.getAsyncDataStatus() || "inactive");
        return {
            setProps: {
                className: (0, _classnames2.default)(props.className, !asyncErrorStatus ? "glyphicon glyphicon-ok" : asyncErrorStatus == "delay" ? "glyphicon glyphicon-option-horizontal" : asyncErrorStatus == "running" ? "fa fa-spinner fa-spin" : asyncErrorStatus == "inactive" && "glyphicon glyphicon-remove")
            }
        };
    });
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CodePanel = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rComponent = __webpack_require__(0);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _tabs = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CodePanel = exports.CodePanel = function (_RComponent) {
    _inherits(CodePanel, _RComponent);

    function CodePanel() {
        _classCallCheck(this, CodePanel);

        return _possibleConstructorReturn(this, (CodePanel.__proto__ || Object.getPrototypeOf(CodePanel)).apply(this, arguments));
    }

    _createClass(CodePanel, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                data = _props.data,
                codes = _props.codes;


            return React.createElement(
                "div",
                { className: "code-panel" },
                React.createElement(_tabs.Tabs, {
                    tabs: [{
                        title: "Form Data",
                        content: function content() {
                            return React.createElement(
                                "pre",
                                null,
                                data !== undefined ? JSON.stringify(data) : "undefined"
                            );
                        }
                    }].concat(codes == null ? [] : codes.map(function (code) {
                        if (typeof code == "string") {
                            return {
                                title: "Source Code",
                                content: function content() {
                                    return React.createElement(
                                        "pre",
                                        null,
                                        code
                                    );
                                }
                            };
                        }
                        return {
                            title: code.name,
                            content: function content() {
                                return React.createElement(
                                    "pre",
                                    null,
                                    code.code
                                );
                            }
                        };
                    }))
                })
            );
        }
    }]);

    return CodePanel;
}(_rComponent.RComponent);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Tabs = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rComponent = __webpack_require__(0);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = exports.Tabs = function (_RComponent) {
    _inherits(Tabs, _RComponent);

    function Tabs(props, context) {
        _classCallCheck(this, Tabs);

        var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props, context));

        _this.state = {
            selected: 0
        };
        return _this;
    }

    _createClass(Tabs, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var tabs = this.props.tabs;
            var selected = this.state.selected;


            return React.createElement(
                "div",
                { className: "tabs" },
                React.createElement(
                    "ul",
                    { className: "nav nav-tabs" },
                    tabs.map(function (tab, i) {
                        return React.createElement(
                            "li",
                            {
                                className: (0, _classnames2.default)("nav-item", { active: selected == i }),
                                key: i,
                                onClick: function onClick() {
                                    return i != selected && _this2.setState({ selected: i });
                                }
                            },
                            React.createElement(
                                "a",
                                { className: "nav-link" },
                                tab.title
                            )
                        );
                    })
                ),
                React.createElement(
                    "div",
                    { className: "tab-content" },
                    tabs[selected].content()
                )
            );
        }
    }]);

    return Tabs;
}(_rComponent.RComponent);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _exampleAsync = __webpack_require__(7);

module.exports = {
    title: "Async validation",
    index: "2",
    subTitle: "Try code 'c1'",
    component: _exampleAsync.ExampleAsync,
    codes: [__webpack_require__(26)]

};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _RlfDemo$RLF = RlfDemo.RLF,
    bindDom = _RlfDemo$RLF.bindDom,
    bindCom = _RlfDemo$RLF.bindCom;
var _RlfDemo$RLF$validate = RlfDemo.RLF.validates,
    required = _RlfDemo$RLF$validate.required,
    async = _RlfDemo$RLF$validate.async;

// Mock api for validating code

function validateCode(code) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(code == "c1");
        }, 600);
    });
}

var ExampleAsync = exports.ExampleAsync = function (_React$Component) {
    _inherits(ExampleAsync, _React$Component);

    function ExampleAsync(props, context) {
        _classCallCheck(this, ExampleAsync);

        var _this = _possibleConstructorReturn(this, (ExampleAsync.__proto__ || Object.getPrototypeOf(ExampleAsync)).call(this, props, context));

        _this.form = bindCom({
            promotion_code: [required, async("promotion-code", validateCode) // by default, this will debounce 500ms before the check code api is called
            ]
        }, {
            component: _this
        });
        return _this;
    }

    _createClass(ExampleAsync, [{
        key: "render",
        value: function render() {
            return bindDom(this.form)(React.createElement(
                "div",
                { className: "form" },
                React.createElement(
                    "div",
                    {
                        "lf-fg": "promotion_code",
                        className: "form-group has-feedback"
                    },
                    React.createElement(
                        "label",
                        { className: "control-label" },
                        "Promotion Code"
                    ),
                    React.createElement("input", {
                        "lf-bind": true,
                        type: "email",
                        className: "form-control",
                        placeholder: "Promotion Code"
                    }),
                    React.createElement("span", { className: "form-control-feedback", "lf-async-feedback": true, "aria-hidden": "true" }),
                    React.createElement("p", { className: "help-block", "lf-err-msg": "Promotion Code" })
                ),
                React.createElement(
                    "button",
                    {
                        type: "submit", className: "btn btn-primary",
                        disabled: this.form.isInvalid()
                    },
                    "Claim code"
                )
            ));
        }
    }]);

    return ExampleAsync;
}(React.Component);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ExampleBox = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rComponent = __webpack_require__(0);

var _codePanel = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExampleBox = exports.ExampleBox = function (_RComponent) {
    _inherits(ExampleBox, _RComponent);

    function ExampleBox(props, context) {
        _classCallCheck(this, ExampleBox);

        var _this = _possibleConstructorReturn(this, (ExampleBox.__proto__ || Object.getPrototypeOf(ExampleBox)).call(this, props, context));

        _this.state = {
            data: null,
            initForm: false
        };
        return _this;
    }

    _createClass(ExampleBox, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                component = _props.component,
                title = _props.title,
                subTitle = _props.subTitle,
                index = _props.index,
                description = _props.description,
                codes = _props.codes;
            var _state = this.state,
                data = _state.data,
                initForm = _state.initForm;


            var ExampleComp = component;

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: "page-header" },
                    React.createElement(
                        "h1",
                        null,
                        "Example ",
                        index,
                        ": ",
                        title,
                        subTitle && React.createElement(
                            "span",
                            null,
                            " ",
                            React.createElement(
                                "small",
                                null,
                                "(",
                                subTitle,
                                ")"
                            )
                        )
                    )
                ),
                description && React.createElement(
                    "div",
                    { className: "" },
                    description
                ),
                React.createElement(ExampleComp, {
                    ref: function ref(formComp) {
                        if (formComp && !initForm) {
                            formComp.form.addDataChangedListener(function (data) {
                                _this2.setState({ data: data });
                            });
                            return _this2.setState({ data: formComp.form.getData(), initForm: true });
                        }
                    }
                }),
                React.createElement("hr", null),
                React.createElement(_codePanel.CodePanel, {
                    data: data,
                    codes: codes
                })
            );
        }
    }]);

    return ExampleBox;
}(_rComponent.RComponent);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _exampleDateTime = __webpack_require__(10);

module.exports = {
    title: "Date and time combined",
    index: "6",
    component: _exampleDateTime.ExampleDateTime,
    description: "This time we have 2 input fields but mapped to a single data entry",
    codes: [__webpack_require__(27)]
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ExampleDateTime = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tunnelDateString = __webpack_require__(11);

var _tunnelTimeString = __webpack_require__(12);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _RlfDemo$RLF = RlfDemo.RLF,
    bindDom = _RlfDemo$RLF.bindDom,
    bindCom = _RlfDemo$RLF.bindCom;
var required = RlfDemo.RLF.validates.required;

var ExampleDateTime = exports.ExampleDateTime = function (_React$Component) {
    _inherits(ExampleDateTime, _React$Component);

    function ExampleDateTime(props, context) {
        _classCallCheck(this, ExampleDateTime);

        var _this = _possibleConstructorReturn(this, (ExampleDateTime.__proto__ || Object.getPrototypeOf(ExampleDateTime)).call(this, props, context));

        _this.form = bindCom({
            meeting_time: [required]
        }, {
            component: _this
        });
        return _this;
    }

    _createClass(ExampleDateTime, [{
        key: "render",
        value: function render() {
            return bindDom(this.form)(React.createElement(
                "div",
                { className: "form" },
                React.createElement(
                    "div",
                    {
                        "lf-fg": "meeting_time!date",
                        className: "form-group"
                    },
                    React.createElement(
                        "label",
                        { className: "control-label" },
                        "Meeting date"
                    ),
                    React.createElement("input", {
                        "lf-bind": true,
                        "lf-tunnel": [_tunnelDateString.dateStr],
                        className: "form-control",
                        placeholder: "Meeting date... MM-DD-YYYY"
                    }),
                    React.createElement("p", { className: "help-block", "lf-err-msg": "Meeting date" })
                ),
                React.createElement(
                    "div",
                    {
                        "lf-fg": "meeting_time!time",
                        className: "form-group"
                    },
                    React.createElement(
                        "label",
                        { className: "control-label" },
                        "Meeting time"
                    ),
                    React.createElement("input", {
                        "lf-bind": true,
                        "lf-tunnel": [_tunnelTimeString.timeStr],
                        className: "form-control",
                        placeholder: "Meeting time... HH:mm"
                    }),
                    React.createElement("p", { className: "help-block", "lf-err-msg": "Meeting time" })
                ),
                React.createElement(
                    "button",
                    {
                        type: "submit", className: "btn btn-primary",
                        disabled: this.form.isInvalid()
                    },
                    "Add meeting"
                )
            ));
        }
    }]);

    return ExampleDateTime;
}(React.Component);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var simple = RlfDemo.RLF.tunnels.simple;
var _RlfDemo$Utils = RlfDemo.Utils,
    O = _RlfDemo$Utils.O,
    StringUtil = _RlfDemo$Utils.StringUtil;


exports.dateStr = simple("text-ymd", {
    format: function format(mv) {
        return mv && moment(mv).format("MM-DD-YYYY");
    },
    parse: function parse(vv, getOldData) {
        if (StringUtil.isEmpty(vv)) {
            return null;
        }

        if (vv.length < 10) {
            throw "Invalid Date";
        }

        var m = moment(vv, "MM-DD-YYYY");
        if (!m.isValid()) {
            throw "Invalid Date";
        }
        var oldData = getOldData();
        var newData = _extends({}, oldData && O.omit(moment(oldData).toObject(), ["date", "months", "years"]), O.omit(m.toObject(), ["hours", "minutes", "seconds", "milliseconds"]));
        return moment(newData).toISOString();
    }
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var simple = RlfDemo.RLF.tunnels.simple;
var _RlfDemo$Utils = RlfDemo.Utils,
    O = _RlfDemo$Utils.O,
    StringUtil = _RlfDemo$Utils.StringUtil;


exports.timeStr = simple("text-hm", {
    format: function format(mv) {
        return mv && moment(mv).format("HH:mm");
    },
    parse: function parse(vv, getOldData) {
        if (StringUtil.isEmpty(vv)) {
            return null;
        }

        if (vv.length < 5) {
            throw "Invalid Time";
        }

        var m = moment(vv, "HH:mm");
        if (!m.isValid()) {
            throw "Invalid Date";
        }
        var oldData = getOldData();
        var oldDataYMD = oldData && O.omit(moment(oldData).toObject(), ["hours", "minutes", "seconds", "milliseconds"]);
        var newData = _extends({}, oldDataYMD, O.omit(m.toObject(), ["date", "months", "years"]));
        return moment(newData).toISOString();
    }
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _exampleDate = __webpack_require__(14);

module.exports = {
    title: "Date string data type",
    index: "5",
    component: _exampleDate.ExampleDate,
    description: "User type in date value, during typing, the value can not be parsed to date, so the input is \n    marked as invalid and form can not submit",
    codes: [__webpack_require__(28), { name: "tunnel-date-string.js", code: __webpack_require__(29) }]
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ExampleDate = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tunnelDateString = __webpack_require__(15);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _RlfDemo$RLF = RlfDemo.RLF,
    bindDom = _RlfDemo$RLF.bindDom,
    bindCom = _RlfDemo$RLF.bindCom;
var required = RlfDemo.RLF.validates.required;

var ExampleDate = exports.ExampleDate = function (_React$Component) {
    _inherits(ExampleDate, _React$Component);

    function ExampleDate(props, context) {
        _classCallCheck(this, ExampleDate);

        var _this = _possibleConstructorReturn(this, (ExampleDate.__proto__ || Object.getPrototypeOf(ExampleDate)).call(this, props, context));

        _this.form = bindCom({
            meeting_date: [required]
        }, {
            component: _this
        });
        return _this;
    }

    _createClass(ExampleDate, [{
        key: "render",
        value: function render() {
            return bindDom(this.form)(React.createElement(
                "div",
                { className: "form" },
                React.createElement(
                    "div",
                    {
                        "lf-fg": "meeting_date",
                        className: "form-group"
                    },
                    React.createElement(
                        "label",
                        { className: "control-label" },
                        "Meeting date"
                    ),
                    React.createElement("input", {
                        "lf-bind": true,
                        "lf-tunnel": [_tunnelDateString.dateStr],
                        className: "form-control",
                        placeholder: "Meeting date... MM-DD-YYYY"
                    }),
                    React.createElement("p", { className: "help-block", "lf-err-msg": "Meeting date" })
                ),
                React.createElement(
                    "button",
                    {
                        type: "submit", className: "btn btn-primary",
                        disabled: this.form.isInvalid()
                    },
                    "Add meeting"
                )
            ));
        }
    }]);

    return ExampleDate;
}(React.Component);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var simple = RlfDemo.RLF.tunnels.simple;


exports.dateStr = simple("text-month-year", {
    format: function format(mv) {
        return mv && moment(mv).format("MM/DD/YYYY");
    },
    parse: function parse(vv) {
        if (vv == null) {
            return null;
        }

        if (vv.length < 10) {
            throw "Invalid Date";
        }
        var m = moment(vv, "MM-DD-YYYY");
        if (!m.isValid()) {
            throw "Invalid Date";
        }
        return m.toISOString();
    }
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _exampleList = __webpack_require__(17);

module.exports = {
    title: "List of data",
    index: "3",
    component: _exampleList.ExampleList,
    codes: [__webpack_require__(30)]
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ExampleList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _RlfDemo$RLF = RlfDemo.RLF,
    bindDom = _RlfDemo$RLF.bindDom,
    bindCom = _RlfDemo$RLF.bindCom;
var Cols = RlfDemo.Utils.Cols;
var _RlfDemo$RLF$validate = RlfDemo.RLF.validates,
    required = _RlfDemo$RLF$validate.required,
    minLength = _RlfDemo$RLF$validate.minLength,
    colNotEmpty = _RlfDemo$RLF$validate.colNotEmpty;

var ExampleList = exports.ExampleList = function (_React$Component) {
    _inherits(ExampleList, _React$Component);

    function ExampleList(props, context) {
        _classCallCheck(this, ExampleList);

        var _this = _possibleConstructorReturn(this, (ExampleList.__proto__ || Object.getPrototypeOf(ExampleList)).call(this, props, context));

        _this.state = {
            showErrors: false
        };

        var lf = {
            paths: {
                title: [required, minLength(20)],
                "questions": [colNotEmpty]
            },
            iterates: {
                "questions": {
                    "text": [required, minLength(20)]
                }
            }
        };
        _this.form = bindCom(lf, {
            component: _this
            // data: {
            //     title: "awfawf awf awfawf awf awfawf awf awfawf awf ",
            //     questions: [{}]
            // }
        });
        return _this;
    }

    _createClass(ExampleList, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var showErrors = this.state.showErrors;

            var form = this.form;

            return bindDom(form)(React.createElement(
                "div",
                { className: (0, _classnames2.default)("form example-list", showErrors && "show-errors") },
                React.createElement(
                    "div",
                    {
                        "lf-fg": "title",
                        className: "form-group"
                    },
                    React.createElement(
                        "label",
                        { className: "control-label" },
                        "Questionnaire title"
                    ),
                    React.createElement("input", {
                        "lf-bind": true,
                        className: "form-control",
                        placeholder: "Questionnaire title..."
                    }),
                    React.createElement("p", { className: "help-block", "lf-err-msg": "Questionnaire title" })
                ),
                React.createElement(
                    "div",
                    { className: "question-list" },
                    Cols.isEmpty(form.getPathData("questions")) && React.createElement(
                        "div",
                        { className: "box text-danger" },
                        "Questions list can not be empty, please create your first question be clicking the button below"
                    ),
                    form.toFormList("questions").map(function (questionForm, i) {
                        return bindDom(questionForm)(React.createElement(
                            "div",
                            { className: "box question-form", key: i },
                            React.createElement(
                                "div",
                                {
                                    "lf-fg": "text",
                                    className: "form-group"
                                },
                                React.createElement(
                                    "label",
                                    { className: "control-label" },
                                    "Question text"
                                ),
                                React.createElement("input", {
                                    "lf-bind": true,
                                    className: "form-control",
                                    placeholder: "Question text..."
                                }),
                                React.createElement("p", { className: "help-block", "lf-err-msg": "Question text" })
                            ),
                            React.createElement(
                                "button",
                                {
                                    className: "btn btn-default",
                                    onClick: function onClick() {
                                        return form.changePathData("questions", function (questions) {
                                            return Cols.remove1(questions, questionForm.getData());
                                        });
                                    }
                                },
                                "Delete this question"
                            )
                        ));
                    }),
                    React.createElement(
                        "button",
                        {
                            className: "btn btn-default",
                            onClick: function onClick() {
                                return form.changePathData("questions", function (questions) {
                                    return (questions || []).concat([{}]);
                                });
                            }
                        },
                        "Add a question"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "btns" },
                    React.createElement(
                        "button",
                        {
                            type: "submit", className: (0, _classnames2.default)("btn btn-primary", { disabled: this.form.isInvalid() }),
                            onClick: function onClick() {
                                if (_this2.form.isInvalid()) {
                                    _this2.setState({ showErrors: true });
                                    form.focusInvalidField();
                                } else {
                                    console.log("Submitting...", form.getData());
                                }
                            }
                        },
                        "Create questionnaire"
                    ),
                    this.form.isInvalid() && React.createElement(
                        "span",
                        { className: "help" },
                        " - click this to see errors (and focus)"
                    )
                )
            ));
        }
    }]);

    return ExampleList;
}(React.Component);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _exampleLogin = __webpack_require__(19);

module.exports = {
    title: "Simple login",
    index: "1",
    component: _exampleLogin.ExampleLogin,
    codes: [__webpack_require__(31)]
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _RlfDemo$RLF = RlfDemo.RLF,
    bindDom = _RlfDemo$RLF.bindDom,
    bindCom = _RlfDemo$RLF.bindCom;
var _RlfDemo$RLF$validate = RlfDemo.RLF.validates,
    required = _RlfDemo$RLF$validate.required,
    email = _RlfDemo$RLF$validate.email,
    minLength = _RlfDemo$RLF$validate.minLength;

var ExampleLogin = exports.ExampleLogin = function (_React$Component) {
    _inherits(ExampleLogin, _React$Component);

    function ExampleLogin(props, context) {
        _classCallCheck(this, ExampleLogin);

        var _this = _possibleConstructorReturn(this, (ExampleLogin.__proto__ || Object.getPrototypeOf(ExampleLogin)).call(this, props, context));

        _this.form = bindCom({
            email: [required, email],
            password: [required, minLength(6)]
        }, {
            component: _this,
            data: {
                email: "quanla2003@gmail.com"
            }
        });
        return _this;
    }

    _createClass(ExampleLogin, [{
        key: "render",
        value: function render() {
            return bindDom(this.form)(React.createElement(
                "div",
                { className: "form" },
                React.createElement(
                    "div",
                    {
                        "lf-fg": "email",
                        className: "form-group"
                    },
                    React.createElement(
                        "label",
                        { className: "control-label" },
                        "Email address"
                    ),
                    React.createElement("input", {
                        "lf-bind": true,
                        type: "email",
                        className: "form-control",
                        placeholder: "Email"
                    }),
                    React.createElement("p", { className: "help-block", "lf-err-msg": "Email" })
                ),
                React.createElement(
                    "div",
                    {
                        "lf-fg": "password",
                        className: "form-group"
                    },
                    React.createElement(
                        "label",
                        { className: "control-label" },
                        "Password"
                    ),
                    React.createElement("input", {
                        "lf-bind": true,
                        type: "password",
                        className: "form-control",
                        placeholder: "Password"
                    }),
                    React.createElement("p", { className: "help-block", "lf-err-msg": "Password" })
                ),
                React.createElement(
                    "button",
                    {
                        type: "submit", className: "btn btn-primary",
                        disabled: this.form.isInvalid()
                    },
                    "Login"
                )
            ));
        }
    }]);

    return ExampleLogin;
}(React.Component);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _exampleRelative = __webpack_require__(21);

module.exports = {
    title: "Validate with relative data reference",
    index: "4",
    component: _exampleRelative.ExampleRelative,
    description: "With this example, we have to check if the \"confirm password\" field is same with password",
    codes: [__webpack_require__(32)]
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _RlfDemo$RLF = RlfDemo.RLF,
    bindDom = _RlfDemo$RLF.bindDom,
    bindCom = _RlfDemo$RLF.bindCom;
var _RlfDemo$RLF$validate = RlfDemo.RLF.validates,
    required = _RlfDemo$RLF$validate.required,
    email = _RlfDemo$RLF$validate.email,
    minLength = _RlfDemo$RLF$validate.minLength,
    simple = _RlfDemo$RLF$validate.simple;

var ExampleRelative = exports.ExampleRelative = function (_React$Component) {
    _inherits(ExampleRelative, _React$Component);

    function ExampleRelative(props, context) {
        _classCallCheck(this, ExampleRelative);

        var _this = _possibleConstructorReturn(this, (ExampleRelative.__proto__ || Object.getPrototypeOf(ExampleRelative)).call(this, props, context));

        _this.form = bindCom({
            email: [required, email],
            password: [required, minLength(6)],
            confirm: [required, simple("confirm-password", function (confirm, getRelativeData) {
                return confirm == getRelativeData("password");
            })]
        }, {
            component: _this,
            data: {
                email: "quanla2003@gmail.com"
            }
        });
        return _this;
    }

    _createClass(ExampleRelative, [{
        key: "render",
        value: function render() {
            return bindDom(this.form)(React.createElement(
                "div",
                { className: "form" },
                React.createElement(
                    "h3",
                    null,
                    "Register"
                ),
                React.createElement(
                    "div",
                    {
                        "lf-fg": "email",
                        className: "form-group"
                    },
                    React.createElement(
                        "label",
                        { className: "control-label" },
                        "Email address"
                    ),
                    React.createElement("input", {
                        "lf-bind": true,
                        type: "email",
                        className: "form-control",
                        placeholder: "Email"
                    }),
                    React.createElement("p", { className: "help-block", "lf-err-msg": "Email" })
                ),
                React.createElement(
                    "div",
                    {
                        "lf-fg": "password",
                        className: "form-group"
                    },
                    React.createElement(
                        "label",
                        { className: "control-label" },
                        "Password"
                    ),
                    React.createElement("input", {
                        "lf-bind": true,
                        type: "password",
                        className: "form-control",
                        placeholder: "Password"
                    }),
                    React.createElement("p", { className: "help-block", "lf-err-msg": "Password" })
                ),
                React.createElement(
                    "div",
                    {
                        "lf-fg": "confirm",
                        className: "form-group"
                    },
                    React.createElement(
                        "label",
                        { className: "control-label" },
                        "Confirm password"
                    ),
                    React.createElement("input", {
                        "lf-bind": true,
                        type: "password",
                        className: "form-control",
                        placeholder: "Password"
                    }),
                    React.createElement("p", { className: "help-block", "lf-err-msg": "Confirm password" })
                ),
                React.createElement(
                    "button",
                    {
                        type: "submit", className: "btn btn-primary",
                        disabled: this.form.isInvalid()
                    },
                    "Register"
                )
            ));
        }
    }]);

    return ExampleRelative;
}(React.Component);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ExamplesAll = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rComponent = __webpack_require__(0);

var _exampleBox = __webpack_require__(8);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var examples = [__webpack_require__(18), __webpack_require__(6), __webpack_require__(16), __webpack_require__(34), __webpack_require__(20), __webpack_require__(13), __webpack_require__(9)];

var ExamplesAll = exports.ExamplesAll = function (_RComponent) {
    _inherits(ExamplesAll, _RComponent);

    function ExamplesAll() {
        _classCallCheck(this, ExamplesAll);

        return _possibleConstructorReturn(this, (ExamplesAll.__proto__ || Object.getPrototypeOf(ExamplesAll)).apply(this, arguments));
    }

    _createClass(ExamplesAll, [{
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                { className: "container" },
                examples.map(function (ex, i) {
                    return React.createElement(_exampleBox.ExampleBox, _extends({
                        key: i
                    }, ex));
                })
            );
        }
    }]);

    return ExamplesAll;
}(_rComponent.RComponent);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DemoIntro = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rComponent = __webpack_require__(0);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DemoIntro = exports.DemoIntro = function (_RComponent) {
    _inherits(DemoIntro, _RComponent);

    function DemoIntro() {
        _classCallCheck(this, DemoIntro);

        return _possibleConstructorReturn(this, (DemoIntro.__proto__ || Object.getPrototypeOf(DemoIntro)).apply(this, arguments));
    }

    _createClass(DemoIntro, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "demo-intro" },
                React.createElement(
                    "div",
                    { className: "container" },
                    "DemoIntro"
                )
            );
        }
    }]);

    return DemoIntro;
}(_rComponent.RComponent);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GettingStarted = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rComponent = __webpack_require__(0);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GettingStarted = exports.GettingStarted = function (_RComponent) {
    _inherits(GettingStarted, _RComponent);

    function GettingStarted() {
        _classCallCheck(this, GettingStarted);

        return _possibleConstructorReturn(this, (GettingStarted.__proto__ || Object.getPrototypeOf(GettingStarted)).apply(this, arguments));
    }

    _createClass(GettingStarted, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "section",
                { className: "getting-started" },
                React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement(
                        "div",
                        { className: "page-header" },
                        "Getting started"
                    )
                )
            );
        }
    }]);

    return GettingStarted;
}(_rComponent.RComponent);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DemoLayout = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rComponent = __webpack_require__(0);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DemoLayout = exports.DemoLayout = function (_RComponent) {
    _inherits(DemoLayout, _RComponent);

    function DemoLayout() {
        _classCallCheck(this, DemoLayout);

        return _possibleConstructorReturn(this, (DemoLayout.__proto__ || Object.getPrototypeOf(DemoLayout)).apply(this, arguments));
    }

    _createClass(DemoLayout, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "demo-layout" },
                React.createElement(
                    "header",
                    { className: "navbar navbar-default navbar-fixed-top navbar-inner" },
                    React.createElement(
                        "div",
                        { className: "container" },
                        "RLF"
                    )
                ),
                this.props.children
            );
        }
    }]);

    return DemoLayout;
}(_rComponent.RComponent);

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "const {bindDom, bindCom} = RlfDemo.RLF;\nconst {required, async} = RlfDemo.RLF.validates;\n\n// Mock api for validating code\nfunction validateCode(code) {\n    return new Promise((resolve, reject) => {\n        setTimeout(() => {\n            resolve(code == \"c1\");\n        }, 600);\n    });\n}\n\nexport class ExampleAsync extends React.Component {\n\n    constructor(props, context) {\n        super(props, context);\n\n        this.form = bindCom({\n            promotion_code: [\n                required,\n                async(\"promotion-code\", validateCode) // by default, this will debounce 500ms before the check code api is called\n            ],\n        }, {\n            component: this,\n        });\n    }\n\n    render() {\n        return bindDom(this.form)(\n            <div className=\"form\">\n\n                {/* access_code input */}\n                <div\n                    lf-fg=\"promotion_code\"\n                    className=\"form-group has-feedback\"\n                >\n                    <label className=\"control-label\">Promotion Code</label>\n                    <input\n                        lf-bind\n                        type=\"email\"\n                        className=\"form-control\"\n                        placeholder=\"Promotion Code\"\n                    />\n                    <span className=\"form-control-feedback\" lf-async-feedback aria-hidden=\"true\"/>\n                    <p className=\"help-block\" lf-err-msg=\"Promotion Code\"/>\n                </div>\n\n                {/* Submit button */}\n                <button\n                    type=\"submit\" className=\"btn btn-primary\"\n                    disabled={this.form.isInvalid()}\n                >\n                    Claim code\n                </button>\n            </div>\n        );\n    }\n}"

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "import {dateStr} from \"./tunnel-date-string\";\nimport {timeStr} from \"./tunnel-time-string\";\nconst {bindDom, bindCom} = RlfDemo.RLF;\nconst {required} = RlfDemo.RLF.validates;\n\nexport class ExampleDateTime extends React.Component {\n\n    constructor(props, context) {\n        super(props, context);\n\n        this.form = bindCom({\n            meeting_time: [required],\n        }, {\n            component: this,\n        });\n    }\n\n    render() {\n        return bindDom(this.form)(\n            <div className=\"form\">\n\n                <div\n                    lf-fg=\"meeting_time!date\"\n                    className=\"form-group\"\n                >\n                    <label className=\"control-label\">Meeting date</label>\n                    <input\n                        lf-bind\n                        lf-tunnel={[dateStr]}\n                        className=\"form-control\"\n                        placeholder=\"Meeting date... MM-DD-YYYY\"\n                    />\n                    <p className=\"help-block\" lf-err-msg=\"Meeting date\"/>\n                </div>\n\n                <div\n                    lf-fg=\"meeting_time!time\"\n                    className=\"form-group\"\n                >\n                    <label className=\"control-label\">Meeting time</label>\n                    <input\n                        lf-bind\n                        lf-tunnel={[timeStr]}\n                        className=\"form-control\"\n                        placeholder=\"Meeting time... HH:mm\"\n                    />\n                    <p className=\"help-block\" lf-err-msg=\"Meeting time\"/>\n                </div>\n\n                {/* Submit button */}\n                <button\n                    type=\"submit\" className=\"btn btn-primary\"\n                    disabled={this.form.isInvalid()}\n                >\n                    Add meeting\n                </button>\n            </div>\n        );\n    }\n}"

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "import {dateStr} from \"./tunnel-date-string\";\nconst {bindDom, bindCom} = RlfDemo.RLF;\nconst {required} = RlfDemo.RLF.validates;\n\nexport class ExampleDate extends React.Component {\n\n    constructor(props, context) {\n        super(props, context);\n\n        this.form = bindCom({\n            meeting_date: [required],\n        }, {\n            component: this,\n        });\n    }\n\n    render() {\n        return bindDom(this.form)(\n            <div className=\"form\">\n\n                <div\n                    lf-fg=\"meeting_date\"\n                    className=\"form-group\"\n                >\n                    <label className=\"control-label\">Meeting date</label>\n                    <input\n                        lf-bind\n                        lf-tunnel={[dateStr]}\n                        className=\"form-control\"\n                        placeholder=\"Meeting date... MM-DD-YYYY\"\n                    />\n                    <p className=\"help-block\" lf-err-msg=\"Meeting date\"/>\n                </div>\n\n                {/* Submit button */}\n                <button\n                    type=\"submit\" className=\"btn btn-primary\"\n                    disabled={this.form.isInvalid()}\n                >\n                    Add meeting\n                </button>\n            </div>\n        );\n    }\n}"

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "const {simple} = RlfDemo.RLF.tunnels;\n\nexports.dateStr   = simple(\"text-month-year\", {\n    format: (mv) => {\n        return mv && moment(mv).format(\"MM/DD/YYYY\");\n    },\n    parse: (vv) => {\n        if (vv == null) {\n            return null;\n        }\n\n        if (vv.length < 10) {\n            throw \"Invalid Date\";\n        }\n        let m = moment(vv, \"MM-DD-YYYY\");\n        if (!m.isValid()) {\n            throw \"Invalid Date\";\n        }\n        return m.toISOString();\n    }\n});"

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "import classnames from \"classnames\";\nconst {bindDom, bindCom} = RlfDemo.RLF;\nconst {Cols} = RlfDemo.Utils;\nconst {required, minLength, colNotEmpty} = RlfDemo.RLF.validates;\n\nexport class ExampleList extends React.Component {\n\n    constructor(props, context) {\n        super(props, context);\n\n        this.state = {\n            showErrors: false,\n        };\n\n        let lf = {\n            paths: {\n                title: [required, minLength(20)],\n                \"questions\": [colNotEmpty]\n            },\n            iterates: {\n                \"questions\": {\n                    \"text\": [required, minLength(20)]\n                }\n            },\n        };\n        this.form = bindCom(lf, {\n            component: this,\n            // data: {\n            //     title: \"awfawf awf awfawf awf awfawf awf awfawf awf \",\n            //     questions: [{}]\n            // }\n        });\n    }\n\n    render() {\n        const {showErrors} = this.state;\n        const form = this.form;\n\n        return bindDom(form)(\n            <div className={classnames(\"form example-list\", showErrors && \"show-errors\")}>\n\n                {/* access_code input */}\n                <div\n                    lf-fg=\"title\"\n                    className=\"form-group\"\n                >\n                    <label className=\"control-label\">Questionnaire title</label>\n                    <input\n                        lf-bind\n                        className=\"form-control\"\n                        placeholder=\"Questionnaire title...\"\n                    />\n                    <p className=\"help-block\" lf-err-msg=\"Questionnaire title\"/>\n                </div>\n\n\n                <div className=\"question-list\">\n                    {Cols.isEmpty(form.getPathData(\"questions\")) && (\n                        <div className=\"box text-danger\">\n                            Questions list can not be empty, please create your first question be clicking the button below\n                        </div>\n                    )}\n\n                    { form.toFormList(\"questions\").map((questionForm, i) => bindDom(questionForm)(\n                        <div className=\"box question-form\" key={i}>\n\n                            <div\n                                lf-fg=\"text\"\n                                className=\"form-group\"\n                            >\n                                <label className=\"control-label\">Question text</label>\n                                <input\n                                    lf-bind\n                                    className=\"form-control\"\n                                    placeholder=\"Question text...\"\n                                />\n                                <p className=\"help-block\" lf-err-msg=\"Question text\"/>\n                            </div>\n\n                            <button\n                                className=\"btn btn-default\"\n                                onClick={() => form.changePathData(\"questions\", (questions) => Cols.remove1(questions, questionForm.getData()))}\n                            >\n                                Delete this question\n                            </button>\n                        </div>\n                    ))}\n\n                    <button\n                        className=\"btn btn-default\"\n                        onClick={() => form.changePathData(\"questions\", (questions) => (questions || []).concat([{}]))}\n                    >\n                        Add a question\n                    </button>\n                </div>\n\n\n                {/* Submit button */}\n                <div className=\"btns\">\n                    <button\n                        type=\"submit\" className={classnames(\"btn btn-primary\", {disabled: this.form.isInvalid()})}\n                        onClick={() => {\n                            if (this.form.isInvalid()) {\n                                this.setState({showErrors: true});\n                                form.focusInvalidField();\n                            } else {\n                                console.log(\"Submitting...\", form.getData());\n                            }\n                        }}\n                    >\n                        Create questionnaire\n                    </button>\n\n                    {this.form.isInvalid() && (\n                        <span className=\"help\"> - click this to see errors (and focus)</span>\n                    )}\n                </div>\n            </div>\n        );\n    }\n}"

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "const {bindDom, bindCom} = RlfDemo.RLF;\nconst {required, email, minLength} = RlfDemo.RLF.validates;\n\nexport class ExampleLogin extends React.Component {\n\n    constructor(props, context) {\n        super(props, context);\n\n        this.form = bindCom({\n            email: [required, email],\n            password: [required, minLength(6)],\n        }, {\n            component: this,\n            data: {\n                email: \"quanla2003@gmail.com\"\n            },\n        });\n    }\n\n    render() {\n        return bindDom(this.form)(\n            <div className=\"form\">\n\n                {/* Email input */}\n                <div\n                    lf-fg=\"email\"\n                    className=\"form-group\"\n                >\n                    <label className=\"control-label\">Email address</label>\n                    <input\n                        lf-bind\n                        type=\"email\"\n                        className=\"form-control\"\n                        placeholder=\"Email\"\n                    />\n                    <p className=\"help-block\" lf-err-msg=\"Email\"/>\n                </div>\n\n                {/* Password input */}\n                <div\n                    lf-fg=\"password\"\n                    className=\"form-group\"\n                >\n                    <label className=\"control-label\">Password</label>\n                    <input\n                        lf-bind\n                        type=\"password\"\n                        className=\"form-control\"\n                        placeholder=\"Password\"\n                    />\n                    <p className=\"help-block\" lf-err-msg=\"Password\"/>\n                </div>\n\n                {/* Submit button */}\n                <button\n                    type=\"submit\" className=\"btn btn-primary\"\n                    disabled={this.form.isInvalid()}\n                >\n                    Login\n                </button>\n            </div>\n        );\n    }\n}"

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "const {bindDom, bindCom} = RlfDemo.RLF;\nconst {required, email, minLength, simple} = RlfDemo.RLF.validates;\n\nexport class ExampleRelative extends React.Component {\n\n    constructor(props, context) {\n        super(props, context);\n\n        this.form = bindCom({\n            email: [required, email],\n            password: [required, minLength(6)],\n            confirm: [required, simple(\"confirm-password\", (confirm, getRelativeData) => confirm == getRelativeData(\"password\"))],\n        }, {\n            component: this,\n            data: {\n                email: \"quanla2003@gmail.com\"\n            },\n        });\n    }\n\n    render() {\n        return bindDom(this.form)(\n            <div className=\"form\">\n\n                <h3>Register</h3>\n\n                {/* Email input */}\n                <div\n                    lf-fg=\"email\"\n                    className=\"form-group\"\n                >\n                    <label className=\"control-label\">Email address</label>\n                    <input\n                        lf-bind\n                        type=\"email\"\n                        className=\"form-control\"\n                        placeholder=\"Email\"\n                    />\n                    <p className=\"help-block\" lf-err-msg=\"Email\"/>\n                </div>\n\n                {/* Password input */}\n                <div\n                    lf-fg=\"password\"\n                    className=\"form-group\"\n                >\n                    <label className=\"control-label\">Password</label>\n                    <input\n                        lf-bind\n                        type=\"password\"\n                        className=\"form-control\"\n                        placeholder=\"Password\"\n                    />\n                    <p className=\"help-block\" lf-err-msg=\"Password\"/>\n                </div>\n\n                {/* Confirm password input */}\n                <div\n                    lf-fg=\"confirm\"\n                    className=\"form-group\"\n                >\n                    <label className=\"control-label\">Confirm password</label>\n                    <input\n                        lf-bind\n                        type=\"password\"\n                        className=\"form-control\"\n                        placeholder=\"Password\"\n                    />\n                    <p className=\"help-block\" lf-err-msg=\"Confirm password\"/>\n                </div>\n\n                {/* Submit button */}\n                <button\n                    type=\"submit\" className=\"btn btn-primary\"\n                    disabled={this.form.isInvalid()}\n                >\n                    Register\n                </button>\n            </div>\n        );\n    }\n}"

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _demoAll = __webpack_require__(2);

__webpack_require__(3);

ReactDOM.render(React.createElement(_demoAll.DemoAll, null), document.getElementById("app-container"));

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _exampleList = __webpack_require__(35);

module.exports = {
    title: "List of data (#2) - resemble Redux example",
    index: "3.1",
    component: _exampleList.ExampleList2,
    codes: [__webpack_require__(36)]
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ExampleList2 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _RlfDemo$RLF = RlfDemo.RLF,
    bindDom = _RlfDemo$RLF.bindDom,
    bindCom = _RlfDemo$RLF.bindCom;
var Cols = RlfDemo.Utils.Cols;
var _RlfDemo$RLF$validate = RlfDemo.RLF.validates,
    required = _RlfDemo$RLF$validate.required,
    maxLength = _RlfDemo$RLF$validate.maxLength,
    colNotEmpty = _RlfDemo$RLF$validate.colNotEmpty;


var validationSchema = {
    paths: {
        clubName: [required],
        "members": [colNotEmpty]
    },
    iterates: {
        "members": {
            paths: {
                "firstName": [required],
                "lastName": [required],
                "hobbies": [maxLength(5)]
            },
            iterates: {
                "hobbies": {
                    "@": [required]
                }
            }

        }
    }
};

var ExampleList2 = exports.ExampleList2 = function (_React$Component) {
    _inherits(ExampleList2, _React$Component);

    function ExampleList2(props, context) {
        _classCallCheck(this, ExampleList2);

        var _this = _possibleConstructorReturn(this, (ExampleList2.__proto__ || Object.getPrototypeOf(ExampleList2)).call(this, props, context));

        _this.state = {
            showErrors: false
        };

        _this.form = bindCom(validationSchema, {
            component: _this
        });
        return _this;
    }

    _createClass(ExampleList2, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var showErrors = this.state.showErrors;

            var form = this.form;

            var renderField = function renderField(path, label, key) {
                return React.createElement(
                    "div",
                    {
                        "lf-fg": path,
                        className: "form-group",
                        key: key
                    },
                    React.createElement(
                        "label",
                        { className: "control-label" },
                        label
                    ),
                    React.createElement("input", {
                        "lf-bind": true,
                        className: "form-control",
                        placeholder: label
                    }),
                    React.createElement("p", { className: "help-block", "lf-err-msg": label })
                );
            };

            var renderHobby = function renderHobby(hobbyForm, j) {
                return bindDom(hobbyForm)(renderField("@", "Hobby #" + (j + 1), "hobby-" + j));
            };

            var renderMember = function renderMember(memberForm, i) {
                return bindDom(memberForm)(React.createElement(
                    "div",
                    { className: "box member-form", key: "member-" + i },
                    React.createElement(
                        "h4",
                        null,
                        "Member #",
                        i + 1
                    ),
                    renderField("firstName", "First Name"),
                    renderField("lastName", "Last Name"),
                    memberForm.toFormList("hobbies").map(renderHobby),
                    memberForm.getPathDataError("hobbies") && React.createElement(
                        "div",
                        { className: "box text-danger" },
                        "No more than five hobbies allowed"
                    ),
                    React.createElement(
                        "div",
                        { className: "" },
                        React.createElement(
                            "button",
                            {
                                className: "btn btn-default",
                                onClick: function onClick() {
                                    return memberForm.changePathData("hobbies", function (hobbies) {
                                        return (hobbies || []).concat([""]);
                                    });
                                }
                            },
                            "Add new hobby"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "" },
                        React.createElement(
                            "button",
                            {
                                className: "btn btn-default",
                                onClick: function onClick() {
                                    return form.changePathData("members", function (members) {
                                        return Cols.remove1(members, memberForm.getData());
                                    });
                                }
                            },
                            "Delete this member"
                        )
                    )
                ));
            };

            return bindDom(form)(React.createElement(
                "div",
                { className: (0, _classnames2.default)("form example-list-2", showErrors && "show-errors") },
                renderField("clubName", "Club Name"),
                React.createElement(
                    "div",
                    { className: "member-list" },
                    form.getPathDataError("members") && React.createElement(
                        "div",
                        { className: "box text-danger" },
                        "At least one member must be entered"
                    ),
                    form.toFormList("members").map(renderMember),
                    React.createElement(
                        "button",
                        {
                            className: "btn btn-default",
                            onClick: function onClick() {
                                return form.changePathData("members", function (members) {
                                    return (members || []).concat([{}]);
                                });
                            }
                        },
                        "Add new member"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "btns" },
                    React.createElement(
                        "button",
                        {
                            type: "submit", className: (0, _classnames2.default)("btn btn-primary", { disabled: this.form.isInvalid() }),
                            onClick: function onClick() {
                                if (_this2.form.isInvalid()) {
                                    _this2.setState({ showErrors: true });
                                    form.focusInvalidField();
                                } else {
                                    console.log("Submitting...", form.getData());
                                }
                            }
                        },
                        "Create questionnaire"
                    ),
                    this.form.isInvalid() && React.createElement(
                        "span",
                        { className: "help" },
                        " - click this to see errors (and focus)"
                    )
                )
            ));
        }
    }]);

    return ExampleList2;
}(React.Component);

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "import classnames from \"classnames\";\nconst {bindDom, bindCom} = RlfDemo.RLF;\nconst {Cols} = RlfDemo.Utils;\nconst {required, maxLength, colNotEmpty} = RlfDemo.RLF.validates;\n\nconst validationSchema = {\n    paths: {\n        clubName: [required],\n        \"members\": [colNotEmpty]\n    },\n    iterates: {\n        \"members\": {\n            paths: {\n                \"firstName\": [required],\n                \"lastName\": [required],\n                \"hobbies\": [maxLength(5)],\n            },\n            iterates: {\n                \"hobbies\": {\n                    \"@\": [required],\n                }\n            },\n\n        },\n    },\n};\n\nexport class ExampleList2 extends React.Component {\n\n    constructor(props, context) {\n        super(props, context);\n\n        this.state = {\n            showErrors: false,\n        };\n\n        this.form = bindCom(validationSchema, {\n            component: this,\n        });\n    }\n\n    render() {\n        const {showErrors} = this.state;\n        const form = this.form;\n\n        const renderField = (path, label, key) => (\n            <div\n                lf-fg={path}\n                className=\"form-group\"\n                key={key}\n            >\n                <label className=\"control-label\">{label}</label>\n                <input\n                    lf-bind\n                    className=\"form-control\"\n                    placeholder={label}\n                />\n                <p className=\"help-block\" lf-err-msg={label}/>\n            </div>\n        );\n\n        const renderHobby = (hobbyForm, j) => bindDom(hobbyForm)(\n            renderField(\"@\", `Hobby #${j+1}`, `hobby-${j}`)\n        );\n\n        const renderMember = (memberForm, i) => bindDom(memberForm)(\n            <div className=\"box member-form\" key={`member-${i}`}>\n                <h4>\n                    Member #{i + 1}\n                </h4>\n\n                {renderField(\"firstName\", \"First Name\")}\n                {renderField(\"lastName\" , \"Last Name\")}\n\n                {memberForm.toFormList(\"hobbies\").map(renderHobby)}\n\n                {memberForm.getPathDataError(\"hobbies\") && (\n                    <div className=\"box text-danger\">\n                        No more than five hobbies allowed\n                    </div>\n                )}\n\n                <div className=\"\">\n                    <button\n                        className=\"btn btn-default\"\n                        onClick={() => memberForm.changePathData(\"hobbies\", (hobbies) => (hobbies || []).concat([\"\"]))}\n                    >\n                        Add new hobby\n                    </button>\n                </div>\n\n                <div className=\"\">\n\n                    <button\n                        className=\"btn btn-default\"\n                        onClick={() => form.changePathData(\"members\", (members) => Cols.remove1(members, memberForm.getData()))}\n                    >\n                        Delete this member\n                    </button>\n                </div>\n            </div>\n        );\n\n        return bindDom(form)(\n            <div className={classnames(\"form example-list-2\", showErrors && \"show-errors\")}>\n\n                {renderField(\"clubName\" , \"Club Name\")}\n\n                <div className=\"member-list\">\n                    {form.getPathDataError(\"members\") && (\n                        <div className=\"box text-danger\">\n                            At least one member must be entered\n                        </div>\n                    )}\n\n                    { form.toFormList(\"members\").map(renderMember)}\n\n                    <button\n                        className=\"btn btn-default\"\n                        onClick={() => form.changePathData(\"members\", (members) => (members || []).concat([{}]))}\n                    >\n                        Add new member\n                    </button>\n                </div>\n\n\n                {/* Submit button */}\n                <div className=\"btns\">\n                    <button\n                        type=\"submit\" className={classnames(\"btn btn-primary\", {disabled: this.form.isInvalid()})}\n                        onClick={() => {\n                            if (this.form.isInvalid()) {\n                                this.setState({showErrors: true});\n                                form.focusInvalidField();\n                            } else {\n                                console.log(\"Submitting...\", form.getData());\n                            }\n                        }}\n                    >\n                        Create questionnaire\n                    </button>\n\n                    {this.form.isInvalid() && (\n                        <span className=\"help\"> - click this to see errors (and focus)</span>\n                    )}\n                </div>\n            </div>\n        );\n    }\n}"

/***/ })
/******/ ]);