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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** external "babel-runtime/regenerator" ***!
  \********************************************/
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/regenerator\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIj9lZDIyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!*************************!*\
  !*** ./routes/index.js ***!
  \*************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ 0);\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _koaRouter = __webpack_require__(/*! koa-router */ 11);\n\nvar _koaRouter2 = _interopRequireDefault(_koaRouter);\n\nvar _clientTpl = __webpack_require__(/*! ../views/clientTpl */ 10);\n\nvar _clientTpl2 = _interopRequireDefault(_clientTpl);\n\nvar _apis = __webpack_require__(/*! ../src/config/apis */ 9);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar index = new _koaRouter2.default();\n\nindex.get('/', function () {\n  var _ref = _asyncToGenerator(_regenerator2.default.mark(function _callee(ctx) {\n    return _regenerator2.default.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            ctx.body = _clientTpl2.default;\n            // await ctx.send({index: 'index'})\n\n          case 1:\n          case 'end':\n            return _context.stop();\n        }\n      }\n    }, _callee, undefined);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}());\n\n// 页面类型\nindex.post(_apis.pagetType, function () {\n  var _ref2 = _asyncToGenerator(_regenerator2.default.mark(function _callee2(ctx) {\n    return _regenerator2.default.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            console.log(ctx.request.body);\n            ctx.body = ctx.request.body;\n\n          case 2:\n          case 'end':\n            return _context2.stop();\n        }\n      }\n    }, _callee2, undefined);\n  }));\n\n  return function (_x2) {\n    return _ref2.apply(this, arguments);\n  };\n}());\n\nexports.default = index;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yb3V0ZXMvaW5kZXguanM/YmI1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gJ2tvYS1yb3V0ZXInXG5cbmltcG9ydCBjbGllbnRUcGwgZnJvbSAnLi4vdmlld3MvY2xpZW50VHBsJ1xuXG5pbXBvcnQge3BhZ2V0VHlwZX0gZnJvbSAnLi4vc3JjL2NvbmZpZy9hcGlzJ1xuXG5jb25zdCBpbmRleCA9IG5ldyBSb3V0ZXIoKVxuXG5pbmRleC5nZXQoJy8nLCBhc3luYyBjdHggPT4ge1xuICBjdHguYm9keSA9IGNsaWVudFRwbFxuICAvLyBhd2FpdCBjdHguc2VuZCh7aW5kZXg6ICdpbmRleCd9KVxufSlcblxuLy8g6aG16Z2i57G75Z6LXG5pbmRleC5wb3N0KHBhZ2V0VHlwZSwgYXN5bmMgY3R4ID0+IHtcbiAgY29uc29sZS5sb2coY3R4LnJlcXVlc3QuYm9keSlcbiAgY3R4LmJvZHkgPSBjdHgucmVxdWVzdC5ib2R5XG59KVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJvdXRlcy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCI/ZDBkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wb2x5ZmlsbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/***/ (function(module, exports) {

eval("module.exports = require(\"koa\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImtvYVwiP2IzNTUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwia29hXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** external "koa-bodyparser" ***!
  \*********************************/
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-bodyparser\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImtvYS1ib2R5cGFyc2VyXCI/NjZlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtYm9keXBhcnNlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImtvYS1ib2R5cGFyc2VyXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 5 */
/* unknown exports provided */
/* all exports used */
/*!***************************!*\
  !*** external "koa-json" ***!
  \***************************/
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-json\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImtvYS1qc29uXCI/N2FlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtanNvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImtvYS1qc29uXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 6 */
/* unknown exports provided */
/* all exports used */
/*!***************************!*\
  !*** external "koa-send" ***!
  \***************************/
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-send\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImtvYS1zZW5kXCI/MTg5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2Etc2VuZFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImtvYS1zZW5kXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 7 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-static\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImtvYS1zdGF0aWNcIj8zNDU4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYS1zdGF0aWNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJrb2Etc3RhdGljXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 8 */
/* unknown exports provided */
/* all exports used */
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ 0);\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\n__webpack_require__(/*! babel-polyfill */ 2);\n\nvar _koa = __webpack_require__(/*! koa */ 3);\n\nvar _koa2 = _interopRequireDefault(_koa);\n\nvar _koaJson = __webpack_require__(/*! koa-json */ 5);\n\nvar _koaJson2 = _interopRequireDefault(_koaJson);\n\nvar _routes = __webpack_require__(/*! ./routes/ */ 1);\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _koaStatic = __webpack_require__(/*! koa-static */ 7);\n\nvar _koaStatic2 = _interopRequireDefault(_koaStatic);\n\nvar _koaBodyparser = __webpack_require__(/*! koa-bodyparser */ 4);\n\nvar _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);\n\nvar _koaSend = __webpack_require__(/*! koa-send */ 6);\n\nvar _koaSend2 = _interopRequireDefault(_koaSend);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar app = new _koa2.default();\n\n// 静态目录\nvar DIST = __dirname + '/dist/';\nvar LIB = __dirname + '/node_modules/';\napp.use((0, _koaStatic2.default)(DIST));\napp.use((0, _koaStatic2.default)(LIB));\n\n// 传输JSON\napp.use((0, _koaJson2.default)());\napp.use((0, _koaBodyparser2.default)());\n\n// 路由\napp.use(_routes2.default.routes());\n\n// 发送文件\napp.use(function () {\n  var _ref = _asyncToGenerator(_regenerator2.default.mark(function _callee(ctx, next) {\n    return _regenerator2.default.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            ctx.send = _koaSend2.default;\n            _context.next = 3;\n            return next();\n\n          case 3:\n          case 'end':\n            return _context.stop();\n        }\n      }\n    }, _callee, undefined);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\n\nvar PORT = 3300;\napp.listen(PORT, function () {\n  return console.log('start server http://localhost:' + PORT);\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAuanM/MDM2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJ1xuaW1wb3J0IEtvYSBmcm9tICdrb2EnXG5pbXBvcnQganNvbiBmcm9tICdrb2EtanNvbidcbmltcG9ydCBpbmRleCBmcm9tICcuL3JvdXRlcy8nXG5pbXBvcnQgc3RhdGljU2VydmUgZnJvbSAna29hLXN0YXRpYydcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2tvYS1ib2R5cGFyc2VyJ1xuaW1wb3J0IHNlbmQgZnJvbSAna29hLXNlbmQnXG5jb25zdCBhcHAgPSBuZXcgS29hKClcblxuLy8g6Z2Z5oCB55uu5b2VXG5jb25zdCBESVNUID0gX19kaXJuYW1lICsgJy9kaXN0LydcbmNvbnN0IExJQiA9IF9fZGlybmFtZSArICcvbm9kZV9tb2R1bGVzLydcbmFwcC51c2Uoc3RhdGljU2VydmUoRElTVCkpXG5hcHAudXNlKHN0YXRpY1NlcnZlKExJQikpXG5cbi8vIOS8oOi+k0pTT05cbmFwcC51c2UoanNvbigpKVxuYXBwLnVzZShib2R5UGFyc2VyKCkpXG5cbi8vIOi3r+eUsVxuYXBwLnVzZShpbmRleC5yb3V0ZXMoKSlcblxuLy8g5Y+R6YCB5paH5Lu2XG5hcHAudXNlKGFzeW5jIChjdHgsIG5leHQpID0+IHtcbiAgY3R4LnNlbmQgPSBzZW5kXG4gIGF3YWl0IG5leHQoKVxufSlcblxuY29uc3QgUE9SVCA9IDMzMDBcbmFwcC5saXN0ZW4oUE9SVCwgKCkgPT4gY29uc29sZS5sb2coYHN0YXJ0IHNlcnZlciBodHRwOi8vbG9jYWxob3N0OiR7UE9SVH1gKSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 9 */
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** ./src/config/apis.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/**\n * 定义所有接口\n */\n\n// 页面类型\nvar pagetType = exports.pagetType = '/pageType';//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29uZmlnL2FwaXMuanM/MGZmNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOWumuS5ieaJgOacieaOpeWPo1xuICovXG5cbi8vIOmhtemdouexu+Wei1xuZXhwb3J0IGNvbnN0IHBhZ2V0VHlwZSA9ICcvcGFnZVR5cGUnXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbmZpZy9hcGlzLmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7O0FBSUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 10 */
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** ./views/clientTpl.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = \"\\n  <html>\\n    <head>\\n      <meta charset=\\\"utf-8\\\">\\n      <title>client</title>\\n      <meta name=\\\"viewport\\\" content=\\\"width=1000, initial-scale=1.0, maximum-scale=1.0\\\">\\n      <link href=\\\"/bootflat/css/bootstrap.min.css\\\" rel=\\\"stylesheet\\\">\\n      <link href=\\\"/bootflat/css/site.min.css\\\" rel=\\\"stylesheet\\\">\\n    </head>\\n    <body>\\n      <div id=\\\"root\\\"></div>\\n      <script src=\\\"/vendor.js\\\"></script>\\n      <script src=\\\"/bundle.js\\\"></script>\\n      <script>\\n        window.__INITSTATE__ = {}\\n      </script>\\n    </body>\\n  </html>\\n\";//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 11 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-router\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etcm91dGVyXCI/YTMzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2Etcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwia29hLXJvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);