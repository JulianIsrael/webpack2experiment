module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
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
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var React = __webpack_require__(0);
var mobx_react_1 = __webpack_require__(4);
var Blade1Comp = function (_super) {
    __extends(Blade1Comp, _super);
    function Blade1Comp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Blade1Comp.prototype.componentWillMount = function () {
        this.store = this.props.store;
    };
    Blade1Comp.prototype.render = function () {
        var _this = this;
        var _a = this.store.counters,
            count1 = _a.count1,
            count2 = _a.count2;
        return React.createElement("div", null, React.createElement("h1", null, " Blade1 hellow"), "count1: ", count1, "count2: ", count2, React.createElement("button", { onClick: function onClick() {
                return _this.store.countUp();
            } }, " CountUp "), React.createElement("button", { onClick: function onClick() {
                return _this.store.countDown();
            } }, " CountDown "));
    };
    return Blade1Comp;
}(React.Component);
Blade1Comp = __decorate([mobx_react_1.observer], Blade1Comp);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Blade1Comp;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__extends, "__extends", "C:/Users/julia/Desktop/webpack2experiment/packages/blade1/src/tsx/blade1.comp.tsx");

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "C:/Users/julia/Desktop/webpack2experiment/packages/blade1/src/tsx/blade1.comp.tsx");

    __REACT_HOT_LOADER__.register(Blade1Comp, "Blade1Comp", "C:/Users/julia/Desktop/webpack2experiment/packages/blade1/src/tsx/blade1.comp.tsx");
}();

;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var mobx_1 = __webpack_require__(3);
var Blade1Store = function () {
    function Blade1Store(props) {
        if (props === void 0) {
            props = {};
        }
        var count1 = props.count1,
            count2 = props.count2;
        this.counters = {
            count1: count1 ? count1 : 0,
            count2: count2 ? count2 : 0
        };
    }
    Blade1Store.prototype.updateState = function (props) {
        if (props === void 0) {
            props = {};
        }
        this._setState(props);
    };
    Blade1Store.prototype._setState = function (_a) {
        var count1 = _a.count1,
            count2 = _a.count2;
        this.counters.count1 = count1 ? count1 : 0;
        this.counters.count2 = count2 ? count2 : 0;
    };
    Blade1Store.prototype.countUp = function () {
        this.counters.count1++;
        this.counters.count2++;
    };
    Blade1Store.prototype.countDown = function () {
        this.counters.count1--;
        this.counters.count2--;
    };
    return Blade1Store;
}();
__decorate([mobx_1.observable], Blade1Store.prototype, "counters", void 0);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Blade1Store;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "C:/Users/julia/Desktop/webpack2experiment/packages/blade1/src/tsx/blade1.store.tsx");

    __REACT_HOT_LOADER__.register(Blade1Store, "Blade1Store", "C:/Users/julia/Desktop/webpack2experiment/packages/blade1/src/tsx/blade1.store.tsx");
}();

;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var React = __webpack_require__(0);
var blade1_store_1 = __webpack_require__(2);
var blade1_comp_1 = __webpack_require__(1);
;
var Blade1 = function (_super) {
    __extends(Blade1, _super);
    function Blade1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Blade1.prototype.componentWillMount = function () {
        this.setState({ store: new blade1_store_1.default(this.props) });
    };
    Blade1.prototype.componentWillReceiveProps = function (nextProps) {
        this.state.store.updateState(nextProps);
    };
    Blade1.prototype.render = function () {
        return React.createElement(blade1_comp_1.default, { store: this.state.store });
    };
    return Blade1;
}(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Blade1;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__extends, "__extends", "C:/Users/julia/Desktop/webpack2experiment/packages/blade1/src/tsx/index.tsx");

    __REACT_HOT_LOADER__.register(Blade1, "Blade1", "C:/Users/julia/Desktop/webpack2experiment/packages/blade1/src/tsx/index.tsx");
}();

;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDI5MzVlNDk2MWQ1YmNkNTAxYjUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9zcmMvdHN4L2JsYWRlMS5jb21wLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdHN4L2JsYWRlMS5zdG9yZS50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9ieFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vYngtcmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9zcmMvdHN4L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUEsa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsZ0NBQStCO0FBQy9CLHVDQUFzQztBQVF0QyxJQUErQjtBQUFTLDBCQUE4QjtBQUF0RTttRUFvQkE7QUFBQztBQWpCRyx5QkFBa0IscUJBQWxCO0FBQ1EsYUFBTSxRQUFPLEtBQU0sTUFDM0I7QUFBQztBQUVELHlCQUFNLFNBQU47QUFBQSxvQkFXQztBQVZVLDRCQUEwQjtZQUFmLFlBQU07WUFBRSxZQUFzQjtBQUN6QyxlQUNILGlDQUNJLGdDQUF1QiwrQkFDUixvQkFDQSx3Q0FDQSxTQUFFO0FBQU0sdUJBQUksTUFBTSxNQUFVO0FBQUEsZUFBM0MsRUFBK0QsOENBQ2hELFNBQUU7QUFBTSx1QkFBSSxNQUFNLE1BQVk7QUFBQSxlQUE3QyxFQUdaO0FBQUM7QUFFTCxXQUFDO0FBQUEsRUFwQjRDLE1Bb0I1QztBQXBCOEIseUJBRDlCLGFBQVEsV0FxQlI7O2tCQXBCOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUL0IsaUNBQTBDO0FBTzFDO0FBR0kseUJBQWdDO0FBQXBCO0FBQUEsb0JBQW9COztBQUNyQiwyQkFBTTtZQUFFLGVBQWdCO0FBQzNCLGFBQVM7QUFDSCxvQkFBVSxNQUFSLEdBQWlCLFNBQUk7QUFDdkIsb0JBQVUsTUFBUixHQUFpQixTQUVqQztBQUpvQjtBQUluQjtBQUVELDBCQUFXLGNBQVgsVUFBZ0M7QUFBcEI7QUFBQSxvQkFBb0I7O0FBQ3hCLGFBQVUsVUFDbEI7QUFBQztBQUVELDBCQUFTLFlBQVQsVUFBb0M7WUFBekIsWUFBTTtZQUFFLFlBQU07QUFDakIsYUFBUyxTQUFPLFNBQVcsTUFBUixHQUFpQixTQUFLO0FBQ3pDLGFBQVMsU0FBTyxTQUFXLE1BQVIsR0FBaUIsU0FDNUM7QUFBQztBQUVELDBCQUFPLFVBQVA7QUFDUSxhQUFTLFNBQVU7QUFDbkIsYUFBUyxTQUNqQjtBQUFDO0FBRUQsMEJBQVMsWUFBVDtBQUNRLGFBQVMsU0FBVTtBQUNuQixhQUFTLFNBQ2pCO0FBQUM7QUFFTCxXQUFDO0FBQUE7QUE3QmUsWUFBWCxPQUFVLHFEQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUm5DLGlDOzs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLGdDQUErQjtBQUUvQix5Q0FBeUM7QUFDekMsd0NBQXVDO0FBSXJDO0FBRUY7QUFBb0Msc0JBQThCO0FBQWxFO21FQWdCQTtBQUFDO0FBZEcscUJBQWtCLHFCQUFsQjtBQUNRLGFBQVMsU0FBQyxFQUFPLE9BQUUsSUFBSSxlQUFXLFFBQUssS0FDL0M7QUFBQztBQUVELHFCQUF5Qiw0QkFBekIsVUFBd0M7QUFDaEMsYUFBTSxNQUFNLE1BQVksWUFDaEM7QUFBQztBQUVELHFCQUFNLFNBQU47QUFDVyxlQUNILG9CQUFDLGNBQVUsV0FBTSxPQUFNLEtBQU0sTUFFckM7QUFBQztBQUVMLFdBQUM7QUFBQSxFQWhCd0MsTUFnQnhDIiwiZmlsZSI6ImJsYWRlMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDAyOTM1ZTQ5NjFkNWJjZDUwMWI1IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0JztcclxuaW1wb3J0IEJsYWRlMVN0b3JlIGZyb20gJy4vYmxhZGUxLnN0b3JlJztcclxuXHJcbmludGVyZmFjZSBPd25Qcm9wcyB7XHJcbiAgICBzdG9yZTogQmxhZGUxU3RvcmVcclxufVxyXG5cclxuQG9ic2VydmVyXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsYWRlMUNvbXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8T3duUHJvcHMsIGFueT4ge1xyXG4gICAgcHJpdmF0ZSBzdG9yZTogQmxhZGUxU3RvcmU7XHJcblxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuc3RvcmUgPSB0aGlzLnByb3BzLnN0b3JlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7Y291bnRlcnM6IHtjb3VudDEsIGNvdW50Mn19ID0gdGhpcy5zdG9yZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPiBCbGFkZTEgaGVsbG93PC9oMT5cclxuICAgICAgICAgICAgICAgIGNvdW50MToge2NvdW50MX1cclxuICAgICAgICAgICAgICAgIGNvdW50Mjoge2NvdW50Mn1cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zdG9yZS5jb3VudFVwKCl9PiBDb3VudFVwIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnN0b3JlLmNvdW50RG93bigpfT4gQ291bnREb3duIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vc3JjL3RzeC9ibGFkZTEuY29tcC50c3giLCJpbXBvcnQgeyBvYnNlcnZhYmxlLCBhY3Rpb24gfSBmcm9tICdtb2J4JztcclxuXHJcbmludGVyZmFjZSBDb3VudGVycyB7XHJcbiAgICBjb3VudDE/OiBudW1iZXJcclxuICAgIGNvdW50Mj86IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbGFkZTFTdG9yZSB7XHJcbiAgICBAb2JzZXJ2YWJsZSBjb3VudGVyczogQ291bnRlcnM7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IENvdW50ZXJzID0ge30pIHtcclxuICAgICAgICBjb25zdCB7Y291bnQxLCBjb3VudDJ9ID0gcHJvcHM7XHJcbiAgICAgICAgdGhpcy5jb3VudGVycyA9IHtcclxuICAgICAgICAgICAgY291bnQxOiAoY291bnQxKSA/IGNvdW50MSA6IDAsXHJcbiAgICAgICAgICAgIGNvdW50MjogKGNvdW50MikgPyBjb3VudDIgOiAwLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTdGF0ZShwcm9wczogQ291bnRlcnMgPSB7fSkge1xyXG4gICAgICAgIHRoaXMuX3NldFN0YXRlKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0U3RhdGUoe2NvdW50MSwgY291bnQyfTogQ291bnRlcnMpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXJzLmNvdW50MSA9IChjb3VudDEpID8gY291bnQxIDogMDtcclxuICAgICAgICB0aGlzLmNvdW50ZXJzLmNvdW50MiA9IChjb3VudDIpID8gY291bnQyIDogMDtcclxuICAgIH1cclxuXHJcbiAgICBjb3VudFVwKCkge1xyXG4gICAgICAgIHRoaXMuY291bnRlcnMuY291bnQxKys7XHJcbiAgICAgICAgdGhpcy5jb3VudGVycy5jb3VudDIrKztcclxuICAgIH1cclxuXHJcbiAgICBjb3VudERvd24oKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVycy5jb3VudDEtLTtcclxuICAgICAgICB0aGlzLmNvdW50ZXJzLmNvdW50Mi0tO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi9zcmMvdHN4L2JsYWRlMS5zdG9yZS50c3giLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb2J4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9ieFwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vYngtcmVhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb2J4LXJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEJsYWRlMVN0b3JlIGZyb20gJy4vYmxhZGUxLnN0b3JlJztcclxuaW1wb3J0IEJsYWRlMUNvbXAgZnJvbSAnLi9ibGFkZTEuY29tcCc7XHJcblxyXG5pbnRlcmZhY2UgT3duU3RhdGUge1xyXG4gICAgc3RvcmU6IEJsYWRlMVN0b3JlXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbGFkZTEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBPd25TdGF0ZT57XHJcblxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdG9yZTogbmV3IEJsYWRlMVN0b3JlKHRoaXMucHJvcHMpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnN0b3JlLnVwZGF0ZVN0YXRlKG5leHRQcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxCbGFkZTFDb21wIHN0b3JlPXt0aGlzLnN0YXRlLnN0b3JlfSAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3NyYy90c3gvaW5kZXgudHN4Il0sInNvdXJjZVJvb3QiOiIifQ==