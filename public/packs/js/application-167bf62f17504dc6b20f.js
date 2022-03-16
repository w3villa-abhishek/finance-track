/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/w3villa/rails/finance-tracker/app/javascript/packs/application.js: Unexpected token, expected \",\" (26:16)\n\n  24 |  \n  25 |  myfunc = {\n> 26 |         document.getElementById('loading').innerHTML = \"Loading...\"\n     |                 ^\n  27 |     }\n  28 |\n    at Parser._raise (/home/w3villa/rails/finance-tracker/node_modules/@babel/parser/lib/index.js:476:17)\n    at Parser.raiseWithData (/home/w3villa/rails/finance-tracker/node_modules/@babel/parser/lib/index.js:469:17)\n    at Parser.raise (/home/w3villa/rails/finance-tracker/node_modules/@babel/parser/lib/index.js:430:17)\n    at Parser.unexpected (/home/w3villa/rails/finance-tracker/node_modules/@babel/parser/lib/index.js:3789:16)\n    at Parser.expect (/home/w3villa/rails/finance-tracker/node_modules/@babel/parser/lib/index.js:3773:28)\n    at Parser.parseObjectLike (/home/w3villa/rails/finance-tracker/node_modules/@babel/parser/lib/index.js:13086:14)\n    at Parser.parseExprAtom (/home/w3villa/rails/finance-tracker/node_modules/@babel/parser/lib/index.js:12498:23)\n    at Parser.parseExprSubscripts (/home/w3villa/rails/finance-tracker/node_modules/@babel/parser/lib/index.js:12149:23)\n    at Parser.parseUpdate (/home/w3villa/rails/finance-tracker/node_modules/@babel/parser/lib/index.js:12129:21)\n    at Parser.parseMaybeUnary (/home/w3villa/rails/finance-tracker/node_modules/@babel/parser/lib/index.js:12104:23)\n    at Parser.parseMaybeUnaryOrPrivate (/home/w3villa/rails/finance-tracker/node_modules/@babel/parser/lib/index.js:11901:61)\n    at Parser.parseExprOps (/home/w3villa/rails/finance-tracker/node_modules/@babel/parser/lib/index.js:11908:23)\n    at Parser.parseMaybeConditional (/home/w3villa/rails/finance-tracker/node_modules/@babel/parser/lib/index.js:11878:23)\n    at Parser.parseMaybeAssign (/home/w3villa/rails/finance-tracker/node_modules/@babel/parser/lib/index.js:11833:21)\n    at Parser.parseMaybeAssign (/home/w3villa/rails/finance-tracker/node_modules/@babel/parser/lib/index.js:11865:25)\n    at Parser.parseExpressionBase (/home/w3villa/rails/finance-tracker/node_modules/@babel/parser/lib/index.js:11769:23)\n    at /home/w3villa/rails/finance-tracker/node_modules/@babel/parser/lib/index.js:11763:39\n    at Parser.allowInAnd (/home/w3villa/rails/finance-tracker/node_modules/@babel/parser/lib/index.js:13817:16)\n    at Parser.parseExpression (/home/w3villa/rails/finance-tracker/node_modules/@babel/parser/lib/index.js:11763:17)\n    at Parser.parseStatementContent (/home/w3villa/rails/finance-tracker/node_modules/@babel/parser/lib/index.js:14256:23)\n    at Parser.parseStatement (/home/w3villa/rails/finance-tracker/node_modules/@babel/parser/lib/index.js:14113:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/w3villa/rails/finance-tracker/node_modules/@babel/parser/lib/index.js:14739:25)\n    at Parser.parseBlockBody (/home/w3villa/rails/finance-tracker/node_modules/@babel/parser/lib/index.js:14730:10)\n    at Parser.parseProgram (/home/w3villa/rails/finance-tracker/node_modules/@babel/parser/lib/index.js:14032:10)\n    at Parser.parseTopLevel (/home/w3villa/rails/finance-tracker/node_modules/@babel/parser/lib/index.js:14019:25)\n    at Parser.parse (/home/w3villa/rails/finance-tracker/node_modules/@babel/parser/lib/index.js:15940:10)\n    at parse (/home/w3villa/rails/finance-tracker/node_modules/@babel/parser/lib/index.js:15992:38)\n    at parser (/home/w3villa/rails/finance-tracker/node_modules/@babel/core/lib/parser/index.js:52:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/home/w3villa/rails/finance-tracker/node_modules/@babel/core/lib/transformation/normalize-file.js:87:38)");

/***/ })

/******/ });
//# sourceMappingURL=application-167bf62f17504dc6b20f.js.map