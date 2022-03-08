/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_telephoneList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/telephoneList */ \"./modules/telephoneList.js\");\n/* harmony import */ var _modules_burgerMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/burgerMenu */ \"./modules/burgerMenu.js\");\n/* harmony import */ var _modules_telMask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/telMask */ \"./modules/telMask.js\");\n\n\n\n\n(0,_modules_telephoneList__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n;(0,_modules_burgerMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_telMask__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/burgerMenu.js":
/*!*******************************!*\
  !*** ./modules/burgerMenu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst burgerMenu = () => {\n  const menuIcon = document.querySelector('.menu__icon');\n  const burgerMenu = document.querySelector('.popup-dialog-menu');\n  const body = document.querySelector('body');\n  const btnUp = document.querySelector('.button-footer');\n\n  // Открыть бургер меню\n  menuIcon.addEventListener('click', () => {\n    if (document.documentElement.clientWidth >= 576) {\n      burgerMenu.style.transform = 'translate3D(0px, 0 ,0)'\n      body.style.overflow = 'hidden';\n    } else {\n      burgerMenu.style.transform = 'translate3D(0, 0px, 0)'\n      body.style.overflow = 'hidden';\n    }\n  });\n  // Закрыть бургер меню\n  burgerMenu.addEventListener('click', (e) => {\n    if (e.target.closest('.close-menu')) {\n      if (document.documentElement.clientWidth >= 576) {\n        burgerMenu.style.transform = 'translate3D(645px, 0 ,0)'\n        body.style.overflow = 'auto';\n      } else {\n        burgerMenu.style.transform = 'translate3D(0, -645px, 0)'\n        body.style.overflow = 'auto';\n      }\n      // Реализация плавного перемещения и закрытия бургер меню\n    } else if (e.target.getAttribute('href')) {\n      e.preventDefault();\n      burgerMenu.style.transform = 'translate3D(645px, 0 ,0)'\n      body.style.overflow = 'auto';\n      // Плавно перемещаемся к выбранному блоку из списка меню\n      document.querySelector(e.target.getAttribute('href')).scrollIntoView({\n        behavior: 'smooth',\n        block: 'start'\n      });\n    }\n  })\n  // Нажатие на кнопку ВВЕРХ и плавноый переход к началу\n  btnUp.addEventListener('click', (e) => {\n    e.preventDefault();\n    if (e.target.closest('.button-footer')) {\n      const blockId = e.target.closest('a[href*=\"#\"]').getAttribute('href');\n      document.querySelector(blockId).scrollIntoView({\n        behavior: 'smooth',\n        block: 'start'\n      });\n    };\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burgerMenu);\n\n\n//# sourceURL=webpack:///./modules/burgerMenu.js?");

/***/ }),

/***/ "./modules/telMask.js":
/*!****************************!*\
  !*** ./modules/telMask.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst telMask = () => {\r\n  window.addEventListener(\"DOMContentLoaded\", function () {\r\n    [].forEach.call(document.querySelectorAll('.input'), function (input) {\r\n      let keyCode;\r\n\r\n      function mask(event) {\r\n        event.keyCode && (keyCode = event.keyCode);\r\n        let pos = this.selectionStart;\r\n        if (pos < 3) event.preventDefault();\r\n        let matrix = \"+7 (___) ___-__-__\",\r\n          i = 0,\r\n          def = matrix.replace(/\\D/g, \"\"),\r\n          val = this.value.replace(/\\D/g, \"\"),\r\n          new_value = matrix.replace(/[_\\d]/g, function (a) {\r\n            return i < val.length ? val.charAt(i++) || def.charAt(i) : a\r\n          });\r\n        i = new_value.indexOf(\"_\");\r\n        if (i != -1) {\r\n          i < 5 && (i = 3);\r\n          new_value = new_value.slice(0, i)\r\n        }\r\n        let reg = matrix.substr(0, this.value.length).replace(/_+/g,\r\n          function (a) {\r\n            return \"\\\\d{1,\" + a.length + \"}\"\r\n          }).replace(/[+()]/g, \"\\\\$&\");\r\n        reg = new RegExp(\"^\" + reg + \"$\");\r\n        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;\r\n        if (event.type == \"blur\" && this.value.length < 5) this.value = \"\"\r\n      }\r\n\r\n      input.addEventListener(\"input\", mask, false);\r\n      input.addEventListener(\"focus\", mask, false);\r\n      input.addEventListener(\"blur\", mask, false);\r\n      input.addEventListener(\"keydown\", mask, false)\r\n\r\n    });\r\n\r\n  });\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (telMask);\r\n\n\n//# sourceURL=webpack:///./modules/telMask.js?");

/***/ }),

/***/ "./modules/telephoneList.js":
/*!**********************************!*\
  !*** ./modules/telephoneList.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst telephoneList = () => {\n  const headerContactsArrow = document.querySelector('.header-contacts__arrow');\n  const phoneNumberAccord = document.querySelector('.header-contacts__phone-number-accord>a');\n\n\n  headerContactsArrow.addEventListener('click', () => {\n    if (phoneNumberAccord.style.opacity === '') {\n      phoneNumberAccord.style.marginTop = '25px';\n      phoneNumberAccord.style.opacity = '1';\n      headerContactsArrow.style.transform = 'scale(1, -1)';\n    } else {\n      phoneNumberAccord.style.marginTop = '0px';\n      phoneNumberAccord.style.opacity = '';\n      headerContactsArrow.style.transform = 'scale(-1, 1)';\n    }\n\n  })\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (telephoneList);\n\n\n//# sourceURL=webpack:///./modules/telephoneList.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;