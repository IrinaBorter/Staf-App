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
/******/ 	__webpack_require__.p = "http://localhost:4000/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module './node_modules/awesome-typescript-loader/dist/entry.js'\n    at Function.Module._resolveFilename (module.js:469:15)\n    at Function.Module._load (module.js:417:25)\n    at Module.require (module.js:497:17)\n    at require (internal/module.js:20:19)\n    at loadLoader (D:\\Staf-App\\node_modules\\loader-runner\\lib\\loadLoader.js:13:17)\n    at iteratePitchingLoaders (D:\\Staf-App\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at runLoaders (D:\\Staf-App\\node_modules\\loader-runner\\lib\\LoaderRunner.js:362:2)\n    at NormalModule.doBuild (D:\\Staf-App\\node_modules\\webpack\\lib\\NormalModule.js:129:2)\n    at NormalModule.build (D:\\Staf-App\\node_modules\\webpack\\lib\\NormalModule.js:180:15)\n    at Compilation.buildModule (D:\\Staf-App\\node_modules\\webpack\\lib\\Compilation.js:142:10)\n    at moduleFactory.create (D:\\Staf-App\\node_modules\\webpack\\lib\\Compilation.js:424:9)\n    at D:\\Staf-App\\node_modules\\webpack\\lib\\NormalModuleFactory.js:242:4\n    at D:\\Staf-App\\node_modules\\webpack\\lib\\NormalModuleFactory.js:93:13\n    at D:\\Staf-App\\node_modules\\tapable\\lib\\Tapable.js:204:11\n    at NormalModuleFactory.params.normalModuleFactory.plugin (D:\\Staf-App\\node_modules\\webpack\\lib\\CompatibilityPlugin.js:52:5)\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (D:\\Staf-App\\node_modules\\tapable\\lib\\Tapable.js:208:13)\n    at onDoneResolving (D:\\Staf-App\\node_modules\\webpack\\lib\\NormalModuleFactory.js:68:11)\n    at onDoneResolving (D:\\Staf-App\\node_modules\\webpack\\lib\\NormalModuleFactory.js:189:6)\n    at _combinedTickCallback (internal/process/next_tick.js:67:7)\n    at process._tickCallback (internal/process/next_tick.js:98:9)");

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map