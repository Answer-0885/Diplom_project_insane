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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_telephoneList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/telephoneList */ \"./modules/telephoneList.js\");\n/* harmony import */ var _modules_burgerMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/burgerMenu */ \"./modules/burgerMenu.js\");\n/* harmony import */ var _modules_telMask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/telMask */ \"./modules/telMask.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n\n\n\n\n\n\n(0,_modules_telephoneList__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n;(0,_modules_burgerMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_telMask__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('open-popup-1', 'close', 'popup-repair-types')\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('open-popup-2', 'close', 'popup-repair-types')\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/burgerMenu.js":
/*!*******************************!*\
  !*** ./modules/burgerMenu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst burgerMenu = () => {\n  const menuIcon = document.querySelector('.menu__icon');\n  const burgerMenu = document.querySelector('.popup-dialog-menu');\n  const body = document.querySelector('body');\n  const btnUp = document.querySelector('.button-footer');\n  'use strict'\n\n  // Открыть бургер меню\n  menuIcon.addEventListener('click', () => {\n    if (document.documentElement.clientWidth >= 576) {\n      burgerMenu.style.transform = 'translate3D(0px, 0 ,0)'\n      body.style.overflow = 'hidden';\n    } else {\n      burgerMenu.style.transform = 'translate3D(0, 0px, 0)'\n      body.style.overflow = 'hidden';\n    }\n  });\n  // Закрыть бургер меню\n  burgerMenu.addEventListener('click', (e) => {\n    if (e.target.closest('.close-menu')) {\n      if (document.documentElement.clientWidth >= 576) {\n        burgerMenu.style.transform = 'translate3D(645px, 0 ,0)'\n        body.style.overflow = 'auto';\n      } else {\n        burgerMenu.style.transform = 'translate3D(0, -645px, 0)'\n        body.style.overflow = 'auto';\n      }\n      // Реализация плавного перемещения и закрытия бургер меню\n    } else if (e.target.getAttribute('href')) {\n      e.preventDefault();\n      burgerMenu.style.transform = 'translate3D(645px, 0 ,0)'\n      body.style.overflow = 'auto';\n      // Плавно перемещаемся к выбранному блоку из списка меню\n      document.querySelector(e.target.getAttribute('href')).scrollIntoView({\n        behavior: 'smooth',\n        block: 'start'\n      });\n    }\n  })\n  // Нажатие на кнопку ВВЕРХ и плавноый переход к началу\n  btnUp.addEventListener('click', (e) => {\n    e.preventDefault();\n    if (e.target.closest('.button-footer')) {\n      const blockId = e.target.closest('a[href*=\"#\"]').getAttribute('href');\n      document.querySelector(blockId).scrollIntoView({\n        behavior: 'smooth',\n        block: 'start'\n      });\n    };\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burgerMenu);\n\n\n//# sourceURL=webpack:///./modules/burgerMenu.js?");

/***/ }),

/***/ "./modules/helper.js":
/*!***************************!*\
  !*** ./modules/helper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\n\r\n\r\nfunction animate({\r\n  timing,\r\n  draw,\r\n  duration\r\n}) {\r\n  let start = performance.now();\r\n  requestAnimationFrame(function animate(time) {\r\n    // timeFraction изменяется от 0 до 1\r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) timeFraction = 1;\r\n    // вычисление текущего состояния анимации\r\n    let progress = timing(timeFraction);\r\n    draw(progress); // отрисовать её\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helper.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./modules/helper.js\");\n\r\n;\r\nconst modal = (open, close, popUp) => {\r\n  const body = document.querySelector('body');\r\n  const popup = document.querySelector('.popup-repair-types');\r\n  const burgerMenu = document.querySelector('.popup-dialog-menu');\r\n  const modalOpen = document.querySelectorAll(`.${open}`);\r\n  // Модальные окна\r\n  const modal = document.querySelector(`.${popUp}`);\r\n\r\n\r\n\r\n  //Открываем модальные окна\r\n  modalOpen.forEach(btn => {\r\n    btn.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n      modal.style.visibility = 'visible';\r\n      burgerMenu.style.transform = 'translate3D(645px, 0 ,0)'\r\n      body.style.overflow = 'hidden';\r\n      (0,_helper__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n        duration: 600,\r\n        timing(timeFraction) {\r\n          return timeFraction;\r\n        },\r\n        draw(progress) {\r\n          modal.style.opacity = progress;\r\n        }\r\n      });\r\n    });\r\n  });\r\n  //Закрываем модальные окна на крестик или кликнув мимо окна\r\n  popup.addEventListener('click', (e) => {\r\n    if (e.target.classList.contains(`${close}`)) {\r\n      modal.style.visibility = 'hidden';\r\n      body.style.overflow = 'auto';\r\n    };\r\n  });\r\n\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

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