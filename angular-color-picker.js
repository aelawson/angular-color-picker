(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(8);
var IE8_DOM_DEFINE = __webpack_require__(28);
var toPrimitive = __webpack_require__(17);
var dP = Object.defineProperty;

exports.f = __webpack_require__(2) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(10)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(1);
var createDesc = __webpack_require__(11);
module.exports = __webpack_require__(2) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(49);
var defined = __webpack_require__(14);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(21)('wks');
var uid = __webpack_require__(12);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(7);
var ctx = __webpack_require__(45);
var hide = __webpack_require__(4);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(9);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(32);
var enumBugKeys = __webpack_require__(22);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(21)('keys');
var uid = __webpack_require__(12);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(1).f;
var has = __webpack_require__(3);
var TAG = __webpack_require__(6)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(6);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(7);
var LIBRARY = __webpack_require__(15);
var wksExt = __webpack_require__(24);
var defineProperty = __webpack_require__(1).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(15);
var $export = __webpack_require__(16);
var redefine = __webpack_require__(30);
var hide = __webpack_require__(4);
var has = __webpack_require__(3);
var Iterators = __webpack_require__(18);
var $iterCreate = __webpack_require__(47);
var setToStringTag = __webpack_require__(23);
var getPrototypeOf = __webpack_require__(54);
var ITERATOR = __webpack_require__(6)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(2) && !__webpack_require__(10)(function () {
  return Object.defineProperty(__webpack_require__(29)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(8);
var dPs = __webpack_require__(48);
var enumBugKeys = __webpack_require__(22);
var IE_PROTO = __webpack_require__(20)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(29)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(53).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(3);
var toIObject = __webpack_require__(5);
var arrayIndexOf = __webpack_require__(50)(false);
var IE_PROTO = __webpack_require__(20)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(32);
var hiddenKeys = __webpack_require__(22).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _directive = __webpack_require__(38);

var _directive2 = _interopRequireDefault(_directive);

var _template = __webpack_require__(76);

var _template2 = _interopRequireDefault(_template);

var _optionsService = __webpack_require__(77);

var _optionsService2 = _interopRequireDefault(_optionsService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var colorPicker = angular.module('color.picker', []).service('ColorPickerOptions', _optionsService2.default).directive('colorPicker', _directive2.default).run(_template2.default);

exports.default = colorPicker;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = colorPickerDirective;

var _controller = __webpack_require__(39);

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function colorPickerDirective() {
    return {
        restrict: 'E',
        require: ['^ngModel'],
        scope: {
            ngModel: '=',
            options: '=?',
            api: '=?',
            eventApi: '=?'
        },
        bindToController: true,
        templateUrl: 'template/color-picker/directive.html',
        controller: _controller2.default,
        controllerAs: 'AngularColorPickerController',
        link: function link($scope, element, attrs, control) {
            $scope.control = control;
            $scope.init();
        }
    };
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__(40);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(36);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(71);

var _createClass3 = _interopRequireDefault(_createClass2);

var _tinycolor = __webpack_require__(75);

var _tinycolor2 = _interopRequireDefault(_tinycolor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AngularColorPickerController = function () {
    function AngularColorPickerController(_$scope, _$element, _$document, _$timeout, _ColorPickerOptions) {
        (0, _classCallCheck3.default)(this, AngularColorPickerController);

        // set angular injected variables
        this.$scope = _$scope;
        this.$element = _$element;
        this.$document = _$document;
        this.$timeout = _$timeout;
        this.ColorPickerOptions = _ColorPickerOptions;

        // make the init function available from the $scope (for the directive link function)
        this.$scope.init = this.init.bind(this);

        // set default values
        this.ngModelOptions = {};
        this.hue = 0;
        this.saturation = undefined;
        this.lightness = undefined;
        this.opacity = undefined;

        this.basicEventTypes = ['hue', 'saturation', 'lightness', 'opacity'];
        this.fullEventTypes = ['color', 'hue', 'saturation', 'lightness', 'opacity'];
    }

    //---------------------------
    // init functions
    //---------------------------

    (0, _createClass3.default)(AngularColorPickerController, [{
        key: 'init',
        value: function init() {

            // ng model options
            if (this.$scope.control[0].$options && this.$scope.control[0].$options.$$options) {
                this.ngModelOptions = this.$scope.control[0].$options.$$options;
            }

            // browser variables
            this.chrome = Boolean(window.chrome);
            var _android_version = window.navigator.userAgent.match(/Android\s([0-9\.]*)/i);
            this.android_version = _android_version && _android_version.length > 1 ? parseFloat(_android_version[1]) : NaN;

            // needed variables
            this.updateModel = true;

            // watchers
            this.initWatchers();

            // set default config settings
            this.initConfig();

            // mouse events
            this.initMouseEvents();
        }
    }, {
        key: 'initConfig',
        value: function initConfig() {
            if (!this.options) {
                this.options = {};
            }

            this.mergeOptions(this.options, this.ColorPickerOptions);

            this.is_open = this.options.inline;

            if (this.options.inline) {
                this.options.close.show = false;
            }

            this.pickerDimensions = {
                width: 150,
                height: 150
            };

            this.sliderDimensions = {
                width: this.options.horizontal ? this.pickerDimensions.width : 20,
                height: this.options.horizontal ? 20 : this.pickerDimensions.height
            };
        }
    }, {
        key: 'mergeOptions',
        value: function mergeOptions(options, defaultOptions) {
            for (var attr in defaultOptions) {
                if (defaultOptions.hasOwnProperty(attr)) {
                    if (!options || !options.hasOwnProperty(attr)) {
                        options[attr] = defaultOptions[attr];
                    } else if ((0, _typeof3.default)(defaultOptions[attr]) === 'object') {
                        this.mergeOptions(options[attr], defaultOptions[attr]);
                    }
                }
            }
        }

        //---------------------------
        // watcher functions
        //---------------------------

    }, {
        key: 'initWatchers',
        value: function initWatchers() {
            var _this = this;

            // ngModel

            this.$scope.$watch('AngularColorPickerController.internalNgModel', this.watchInternalNgModel.bind(this));
            this.$scope.$watch('AngularColorPickerController.ngModel', this.watchNgModel.bind(this));

            // options

            this.$scope.$watch('AngularColorPickerController.options.swatchPos', function (newValue) {
                if (newValue !== undefined) {
                    _this.initConfig();

                    _this.$timeout(function () {
                        _this.updateSwatchBackground();
                    });
                }
            });

            this.$scope.$watchGroup(['AngularColorPickerController.options.format', 'AngularColorPickerController.options.alpha', 'AngularColorPickerController.options.case', 'AngularColorPickerController.options.round', 'AngularColorPickerController.options.restrictToFormat', 'AngularColorPickerController.options.preserveInputFormat', 'AngularColorPickerController.options.allowEmpty', 'AngularColorPickerController.options.horizontal'], function (newValue) {
                if (newValue !== undefined) {
                    _this.initConfig();
                    _this.update();
                }
            });

            this.$scope.$watchGroup(['AngularColorPickerController.options.disabled', 'AngularColorPickerController.options.swatchBootstrap', 'AngularColorPickerController.options.swatchOnly', 'AngularColorPickerController.options.swatch', 'AngularColorPickerController.options.pos', 'AngularColorPickerController.options.inline', 'AngularColorPickerController.options.placeholder'], function (newValue) {
                if (newValue !== undefined) {
                    _this.initConfig();
                }
            });

            // api

            this.$scope.$watch('AngularColorPickerController.api', this.setupApi.bind(this));

            // internal

            this.$scope.$watch('AngularColorPickerController.swatchColor', this.updateSwatchBackground.bind(this));

            this.$scope.$watch('AngularColorPickerController.hue', function () {
                _this.valueUpdate('hue');
            });

            this.$scope.$watch('AngularColorPickerController.saturation', function () {
                _this.valueUpdate('saturation');
            });

            this.$scope.$watch('AngularColorPickerController.lightness', function () {
                _this.valueUpdate('lightness');
            });

            this.$scope.$watch('AngularColorPickerController.opacity', function () {
                _this.valueUpdate('opacity');
            });
        }
    }, {
        key: 'watchInternalNgModel',
        value: function watchInternalNgModel(newValue, oldValue) {
            // the mouse is still moving so don't do anything yet
            if (this.colorMouse) {
                return;
            }

            // calculate and set color values
            this.watchNgModelSet(newValue);
        }

        /** Triggered on change to internal or external ngModel value */

    }, {
        key: 'watchNgModel',
        value: function watchNgModel(newValue, oldValue) {
            // set initial value if not already set
            if (newValue !== undefined && !this.hasOwnProperty('initialNgModel')) {
                this.initialNgModel = newValue;
            }

            // sets the field to pristine or dirty for angular
            this.checkDirty(newValue);

            // update the internal model from external model
            this.internalNgModel = this.ngModelOptions.getterSetter ? this.ngModel() : this.ngModel;

            // the mouse is still moving so don't do anything yet
            if (this.colorMouse) {
                return;
            }

            // calculate and set color values
            this.watchNgModelSet(newValue);
        }

        /** Helper for watchNgModel to set internal values and validity */

    }, {
        key: 'watchNgModelSet',
        value: function watchNgModelSet(newValue) {
            var _this2 = this;

            if (newValue !== undefined && newValue !== null) {
                var color = (0, _tinycolor2.default)(newValue);
                var isValid = this.isColorValid(color);

                if (isValid) {
                    this.setColorValue(color);

                    this.updateModel = false;

                    this.$timeout(function () {
                        _this2.updateModel = true;
                    });
                }

                this.$scope.control[0].$setValidity('color', isValid);
            } else {
                if (newValue === null || newValue === '') {
                    this.hue = 0;
                    this.saturation = undefined;
                    this.lightness = undefined;
                    this.opacity = undefined;
                }

                this.swatchColor = '';
            }
        }

        //---------------------------
        // mouse/touch event functions
        //---------------------------

    }, {
        key: 'initMouseEvents',
        value: function initMouseEvents() {
            var _this3 = this;

            var eventHandlers = {
                mouseDown: this.onMouseDown.bind(this),
                mouseUp: this.onMouseUp.bind(this),
                mouseMove: this.onMouseMove.bind(this),
                keyUp: this.onKeyUp.bind(this)
            };

            // setup mouse events
            this.$document.on('mousedown', eventHandlers.mouseDown);
            this.$document.on('mouseup', eventHandlers.mouseUp);
            this.$document.on('mousemove', eventHandlers.mouseMove);

            // setup touch events
            this.$document.on('touchstart', eventHandlers.mouseDown);
            this.$document.on('touchend', eventHandlers.mouseUp);
            this.$document.on('touchmove', eventHandlers.mouseMove);

            // setup key events
            this.$document.on('keyup', eventHandlers.keyUp);

            // grid click
            this.find('.color-picker-grid').on('click', function (event) {
                _this3.onClick('color', event);
            });
            this.find('.color-picker-grid').on('touchend', function (event) {
                _this3.onClick('color', event);
            });

            // hue click
            this.find('.color-picker-hue').on('click', function (event) {
                _this3.onClick('hue', event);
            });
            this.find('.color-picker-hue').on('touchend', function (event) {
                _this3.onClick('hue', event);
            });

            // saturation click
            this.find('.color-picker-saturation').on('click', function (event) {
                _this3.onClick('saturation', event);
            });
            this.find('.color-picker-saturation').on('touchend', function (event) {
                _this3.onClick('saturation', event);
            });

            // lightness click
            this.find('.color-picker-lightness').on('click', function (event) {
                _this3.onClick('lightness', event);
            });
            this.find('.color-picker-lightness').on('touchend', function (event) {
                _this3.onClick('lightness', event);
            });

            // opacity click
            this.find('.color-picker-opacity').on('click', function (event) {
                _this3.onClick('opacity', event);
            });
            this.find('.color-picker-opacity').on('touchend', function (event) {
                _this3.onClick('opacity', event);
            });

            this.find('.color-picker-input').on('focusin', this.onFocus.bind(this));
            this.find('.color-picker-input').on('focusout', this.onBlur.bind(this));

            //---------------------------
            // destroy
            //---------------------------

            this.$scope.$on('$destroy', function () {
                // remove mouse events
                _this3.$document.off('mousedown', eventHandlers.mouseDown);
                _this3.$document.off('mouseup', eventHandlers.mouseUp);
                _this3.$document.off('mousemove', eventHandlers.mouseMove);

                // remove touch events
                _this3.$document.off('touchstart', eventHandlers.mouseDown);
                _this3.$document.off('touchend', eventHandlers.mouseUp);
                _this3.$document.off('touchmove', eventHandlers.mouseMove);

                // remove key events
                _this3.$document.off('keyup', eventHandlers.keyUp);

                _this3.eventApiDispatch('onDestroy');
            });
        }
    }, {
        key: 'onMouseDown',
        value: function onMouseDown(event) {
            this.has_moused_moved = false;

            // if disabled or not an element in this picker then do nothing
            if (this.options.disabled || this.find(event.target).length === 0) {
                return true;
            }

            for (var i = 0; i < this.fullEventTypes.length; i++) {
                this.onMouseDownType(this.fullEventTypes[i], event);
            }
        }
    }, {
        key: 'onMouseDownType',
        value: function onMouseDownType(type, event) {
            if (type === 'color' && (event.target.classList.contains('color-picker-grid-inner') || event.target.classList.contains('color-picker-picker') || event.target.parentNode.classList.contains('color-picker-picker'))) {
                this.mouseEventToggle(type, false, event);
            } else if (event.target.classList.contains('color-picker-' + type) || event.target.parentNode.classList.contains('color-picker-' + type)) {
                this.mouseEventToggle(type, false, event);
            }
        }
    }, {
        key: 'onMouseUp',
        value: function onMouseUp(event) {
            // no current mouse events and not an element in the picker
            if (!this.anyMouseEvents() && this.find(event.target).length === 0) {
                this.setupApi();
                if (this.options.hide.click) {
                    this.api.close(event);
                }
                this.$scope.$apply();
            } else {
                for (var i = 0; i < this.fullEventTypes.length; i++) {
                    this.onMouseUpType(this.fullEventTypes[i], event);
                }
            }
        }
    }, {
        key: 'onMouseUpType',
        value: function onMouseUpType(type, event) {
            if (this[type + 'Mouse'] && this.has_moused_moved) {
                this.mouseEventToggle(type, true, event);
                this.onChange(event);
            }
        }
    }, {
        key: 'onMouseMove',
        value: function onMouseMove(event) {
            for (var i = 0; i < this.fullEventTypes.length; i++) {
                this.onMouseMoveType(this.fullEventTypes[i], event);
            }
        }
    }, {
        key: 'onMouseMoveType',
        value: function onMouseMoveType(type, event) {
            if (this[type + 'Mouse']) {
                this.has_moused_moved = true;
                this.valueChange(type, event);
                this.$scope.$apply();
            }
        }
    }, {
        key: 'onKeyUp',
        value: function onKeyUp(event) {
            // escape key
            if (this.options.hide.escape && event.keyCode === 27) {
                this.api.close(event);
            }
        }
    }, {
        key: 'onClick',
        value: function onClick(type, event) {
            if (!this.options.disabled && !this.has_moused_moved) {
                this.valueChange(type, event);
                this.mouseEventToggle(type, true, event);
                this.onChange(event);
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(event) {
            // don't fire if it hasn't actually changed
            if (this.internalNgModel !== this.onChangeValue) {
                this.onChangeValue = this.internalNgModel;

                this.eventApiDispatch('onChange', [event]);
            }
        }
    }, {
        key: 'onBlur',
        value: function onBlur(event) {
            if (this.internalNgModel !== this.onChangeValue) {
                this.updateModel = true;
                this.update();
            }

            this.$scope.control[0].$setTouched();

            this.eventApiDispatch('onBlur', [event]);

            // if clicking outside the color picker
            if (this.options.hide.blur && this.find(event.relatedTarget).length === 0) {
                this.api.close(event);
            }
        }
    }, {
        key: 'onSwatchClick',
        value: function onSwatchClick($event) {
            if (this.options.show.swatch && !this.options.disabled) {
                this.api.open($event);
            }
        }
    }, {
        key: 'onFocus',
        value: function onFocus($event) {
            if (this.options.show.focus) {
                this.api.open($event);
            }
        }

        //---------------------------
        // api functions
        //---------------------------

        /** Sets up the external api */

    }, {
        key: 'setupApi',
        value: function setupApi() {
            var _this4 = this;

            if (!this.api) {
                this.api = {};
            }

            this.api.open = function (event) {
                // if already open then don't run show again
                if (_this4.is_open) {
                    return true;
                }

                _this4.is_open = true;
                _this4.hueMouse = false;
                _this4.opacityMouse = false;
                _this4.colorMouse = false;

                // force redraw
                _this4.$scope.$applyAsync();

                // force the sliders to re-caculate their position
                for (var i = 0; i < _this4.basicEventTypes.length; i++) {
                    _this4.valueUpdate(_this4.basicEventTypes[i]);
                }

                _this4.eventApiDispatch('onOpen', [event]);
            };

            this.api.close = function (event) {
                // check that it is not already closed
                if (!_this4.options.inline && (_this4.is_open || _this4.$element[0].querySelector('.color-picker-panel').offsetParent !== null)) {
                    _this4.is_open = false;
                    _this4.$scope.$applyAsync();

                    _this4.update();
                    _this4.eventApiDispatch('onClose', [event]);
                }
            };

            this.api.clear = function (event) {
                _this4.setNgModel(null);

                _this4.eventApiDispatch('onClear', [event]);
            };

            this.api.reset = function (event) {
                if (_this4.internalNgModel !== _this4.initialNgModel) {
                    _this4.setNgModel(_this4.initialNgModel);

                    _this4.eventApiDispatch('onReset', [event]);
                }
            };

            this.api.getElement = function () {
                return _this4.$element;
            };

            this.api.getScope = function () {
                return _this4.$scope;
            };
        }

        //---------------------------
        // model functions
        //---------------------------

        /** Sets the internal and external ngModel values */

    }, {
        key: 'setNgModel',
        value: function setNgModel(value) {
            this.internalNgModel = value;

            if (this.ngModelOptions.getterSetter) {
                this.ngModel(value);
            } else {
                this.ngModel = value;
            }
        }
    }, {
        key: 'update',
        value: function update() {
            if (!this.areAllValuesSet()) {
                return false;
            }

            var color = (0, _tinycolor2.default)(this.getColorValue());

            this.swatchColor = color.toHslString();

            this.updateGridBackground(color);
            this.updateHueBackground(color);
            this.huePosUpdate();
            this.updateSaturationBackground(color);
            this.saturationPosUpdate();
            this.updateLightnessBackground(color);
            this.lightnessPosUpdate();
            this.updateOpacityBackground(color);
            this.opacityPosUpdate();

            var skipUpdate = this.options.preserveInputFormat && (0, _tinycolor2.default)(this.internalNgModel).toHsvString() === color.toHsvString();

            if (this.updateModel && !skipUpdate) {
                var formats = {
                    rgb: 'toRgbString',
                    hex: 'toHex',
                    hex8: 'toHex8',
                    hexstring: 'toHexString',
                    hex8string: 'toHex8String',
                    hsv: 'toHsvString',
                    hsl: 'toHslString',
                    raw: 'clone'
                };

                var value = color[formats[this.options.format.toLowerCase()]]();

                if (this.options.format.match(/hex/i)) {
                    value = this.options.case === 'upper' ? value.toUpperCase() : value.toLowerCase();
                }

                this.setNgModel(value);
            }
        }

        //---------------------------
        // generic value functions
        //---------------------------

    }, {
        key: 'mouseEventToggle',
        value: function mouseEventToggle(type, up, event) {
            this.stopEvent(event);
            this[type + 'Mouse'] = !up;
            this.$scope.$apply();
        }
    }, {
        key: 'valueChange',
        value: function valueChange(type, event) {
            this.stopEvent(event);

            if (type === 'color') {
                return this.colorChange(event);
            }

            var el = this.find('.color-picker-' + type);
            var eventPos = this.getEventPos(event);
            var max = this.getMaxFromType(type);

            this[type] = this.calculateSliderPos(el, eventPos, max);

            if (this[type] > max) {
                this[type] = max;
            } else if (this[type] < 0) {
                this[type] = 0;
            }
        }
    }, {
        key: 'valueUpdate',
        value: function valueUpdate(type) {
            if (this[type] !== undefined) {
                if (type === 'saturation') {
                    this[type + 'Pos'] = this[type];
                } else {
                    var max = this.getMaxFromType(type);
                    this[type + 'Pos'] = (1 - this[type] / max) * 100;
                }

                if (this[type + 'Pos'] < 0) {
                    this[type + 'Pos'] = 0;
                } else if (this[type + 'Pos'] > 100) {
                    this[type + 'Pos'] = 100;
                }

                if (this.options.round) {
                    this.getRoundPos();
                    this.updateRoundPos();
                }

                this[type + 'PosUpdate']();
                this.update();
            }
        }

        //---------------------------
        // hue functions
        //---------------------------

    }, {
        key: 'huePosUpdate',
        value: function huePosUpdate() {
            var el = angular.element(this.$element[0].querySelector('.color-picker-hue .color-picker-slider'));

            if (this.options.horizontal) {
                el.css({
                    'left': this.sliderDimensions.width * this.huePos / 100 + 'px',
                    'top': 0
                });
            } else {
                el.css({
                    'left': 0,
                    'top': this.sliderDimensions.height * this.huePos / 100 + 'px'
                });
            }
        }
    }, {
        key: 'updateHueBackground',
        value: function updateHueBackground(color) {
            var el = this.find('.color-picker-hue .color-picker-overlay');
            var direction = this.options.horizontal ? 'left' : 'top';

            var zero_sixths = this.getColorValue();
            var one_sixths = this.getColorValue();
            var two_sixths = this.getColorValue();
            var three_sixths = this.getColorValue();
            var four_sixths = this.getColorValue();
            var five_sixths = this.getColorValue();
            var six_sixths = this.getColorValue();

            zero_sixths.h = 0;
            one_sixths.h = 60;
            two_sixths.h = 120;
            three_sixths.h = 180;
            four_sixths.h = 240;
            five_sixths.h = 300;
            six_sixths.h = 359;

            el.css({
                'background': 'linear-gradient(to ' + direction + ', ' + (0, _tinycolor2.default)(zero_sixths).toRgbString() + ' 0%, ' + (0, _tinycolor2.default)(one_sixths).toRgbString() + ' 17%, ' + (0, _tinycolor2.default)(two_sixths).toRgbString() + ' 33%, ' + (0, _tinycolor2.default)(three_sixths).toRgbString() + ' 50%, ' + (0, _tinycolor2.default)(four_sixths).toRgbString() + ' 67%, ' + (0, _tinycolor2.default)(five_sixths).toRgbString() + ' 83%, ' + (0, _tinycolor2.default)(six_sixths).toRgbString() + ' 100%)'
            });
        }

        //---------------------------
        // saturation functions
        //---------------------------

    }, {
        key: 'saturationPosUpdate',
        value: function saturationPosUpdate() {
            var el;

            if (!this.options.round) {
                el = angular.element(this.$element[0].querySelector('.color-picker-grid .color-picker-picker'));

                el.css({
                    'left': this.pickerDimensions.height * this.saturationPos / 100 + 'px'
                });
            }

            el = angular.element(this.$element[0].querySelector('.color-picker-saturation .color-picker-slider'));

            if (this.options.horizontal) {
                el.css({
                    'left': this.sliderDimensions.width * (100 - this.saturationPos) / 100 + 'px',
                    'top': 0
                });
            } else {
                el.css({
                    'left': 0,
                    'top': this.sliderDimensions.height * (100 - this.saturationPos) / 100 + 'px'
                });
            }
        }
    }, {
        key: 'updateSaturationBackground',
        value: function updateSaturationBackground(color) {
            var el = this.find('.color-picker-saturation .color-picker-overlay');
            var direction = this.options.horizontal ? 'right' : 'bottom';
            var high = this.getColorValue();
            var low = this.getColorValue();

            high.s = 100;
            low.s = 0;

            el.css({
                'background': 'linear-gradient(to ' + direction + ', ' + (0, _tinycolor2.default)(high).toRgbString() + ' 0%, ' + (0, _tinycolor2.default)(low).toRgbString() + ' 100%)'
            });
        }

        //---------------------------
        // lightness functions
        //---------------------------

    }, {
        key: 'lightnessPosUpdate',
        value: function lightnessPosUpdate() {
            var el;

            if (!this.options.round) {
                el = angular.element(this.$element[0].querySelector('.color-picker-grid .color-picker-picker'));

                el.css({
                    'top': this.pickerDimensions.width * this.lightnessPos / 100 + 'px'
                });
            }

            el = angular.element(this.$element[0].querySelector('.color-picker-lightness .color-picker-slider'));

            if (this.options.horizontal) {
                el.css({
                    'left': this.sliderDimensions.width * this.lightnessPos / 100 + 'px',
                    'top': 0
                });
            } else {
                el.css({
                    'left': 0,
                    'top': this.sliderDimensions.height * this.lightnessPos / 100 + 'px'
                });
            }
        }
    }, {
        key: 'updateLightnessBackground',
        value: function updateLightnessBackground(color) {
            var el = this.find('.color-picker-lightness .color-picker-overlay');
            var direction = this.options.horizontal ? 'right' : 'bottom';
            var bright = this.getColorValue();
            var middle = this.getColorValue();
            var dark = this.getColorValue();

            if (this.options.round) {
                bright.l = 100;
                middle.l = 50;
                dark.l = 0;
            } else {
                bright.v = 100;
                middle.v = 50;
                dark.v = 0;
            }

            el.css({
                'background': 'linear-gradient(to ' + direction + ', ' + (0, _tinycolor2.default)(bright).toRgbString() + ' 0%, ' + (0, _tinycolor2.default)(middle).toRgbString() + ' 50%, ' + (0, _tinycolor2.default)(dark).toRgbString() + ' 100%)'
            });
        }

        //---------------------------
        // opacity functions
        //---------------------------

    }, {
        key: 'opacityPosUpdate',
        value: function opacityPosUpdate() {
            var el = angular.element(this.$element[0].querySelector('.color-picker-opacity .color-picker-slider'));

            if (this.options.horizontal) {
                el.css({
                    'left': this.sliderDimensions.width * this.opacityPos / 100 + 'px',
                    'top': 0
                });
            } else {
                el.css({
                    'left': 0,
                    'top': this.sliderDimensions.height * this.opacityPos / 100 + 'px'
                });
            }
        }
    }, {
        key: 'updateOpacityBackground',
        value: function updateOpacityBackground(color) {
            var el = this.find('.color-picker-opacity .color-picker-overlay');
            var direction = this.options.horizontal ? 'right' : 'bottom';
            var opaque = this.getColorValue();
            var transparent = this.getColorValue();

            opaque.a = 1;
            transparent.a = 0;

            el.css({
                'background': 'linear-gradient(to ' + direction + ', ' + (0, _tinycolor2.default)(opaque).toRgbString() + ' 0%, ' + (0, _tinycolor2.default)(transparent).toRgbString() + ' 100%)'
            });
        }

        //---------------------------
        // color functions
        //---------------------------

    }, {
        key: 'colorChange',
        value: function colorChange(event) {
            this.stopEvent(event);

            var el = this.find('.color-picker-grid-inner');
            var eventPos = this.getEventPos(event);
            var offset = this.offset(el);

            if (this.options.round) {
                this.colorChangeRound(el, offset, eventPos);
            } else {
                this.colorChangeSquare(el, offset, eventPos);
            }
        }
    }, {
        key: 'colorChangeRound',
        value: function colorChangeRound(el, offset, eventPos) {
            var dx = (eventPos.pageX - offset.left) * 2.0 / el.prop('offsetWidth') - 1.0;
            var dy = -((eventPos.pageY - offset.top) * 2.0 / el.prop('offsetHeight')) + 1.0;

            var tmpHue = Math.atan2(dy, dx);
            var degHue = Math.round(tmpHue * 57.29577951308233); // rad to deg
            if (degHue < 0) {
                degHue += 360;
            }
            this.hue = degHue;

            var tmpSaturation = Math.sqrt(dx * dx + dy * dy);

            if (tmpSaturation > 1) {
                tmpSaturation = 1;
            } else if (tmpSaturation < 0) {
                tmpSaturation = 0;
            }

            this.saturation = tmpSaturation * 100;

            if (this.lightness === undefined) {
                this.lightness = 50;
            }
        }
    }, {
        key: 'colorChangeSquare',
        value: function colorChangeSquare(el, offset, eventPos) {
            this.saturation = (eventPos.pageX - offset.left) / el.prop('offsetWidth') * 100;
            this.lightness = (1 - (eventPos.pageY - offset.top) / el.prop('offsetHeight')) * 100;

            if (this.saturation > 100) {
                this.saturation = 100;
            } else if (this.saturation < 0) {
                this.saturation = 0;
            }

            if (this.lightness > 100) {
                this.lightness = 100;
            } else if (this.lightness < 0) {
                this.lightness = 0;
            }
        }
    }, {
        key: 'updateGridBackground',
        value: function updateGridBackground(color) {
            var el = this.find('.color-picker-grid .color-picker-overlay');
            var background = this.getColorValue();

            if (this.options.round) {
                background.s = 0;
            } else {
                background.s = 1;
                background.v = 1;
                background.a = 1;
            }

            el.css({
                'background-color': (0, _tinycolor2.default)(background).toRgbString(),
                'opacity': color.getAlpha()
            });

            this.find('.color-picker-grid .color-picker-grid-inner').css({
                'opacity': color.getAlpha()
            });
        }
    }, {
        key: 'updateSwatchBackground',
        value: function updateSwatchBackground() {
            var el = angular.element(this.$element[0].querySelector('.color-picker-swatch'));
            el.css({
                'background-color': this.swatchColor
            });
        }

        //---------------------------
        // helper functions
        //---------------------------

    }, {
        key: 'isColorValid',
        value: function isColorValid(color) {
            var isValid = color.isValid();

            if (isValid && this.options.restrictToFormat) {
                var format = this.options.format;
                isValid = color.getFormat() === this.getTinyColorFormat();
            }

            if (!isValid && this.options.allowEmpty) {
                var input = color.getOriginalInput();

                if (input === undefined || input === null || input === '') {
                    isValid = true;
                }
            }

            return isValid;
        }
    }, {
        key: 'getTinyColorFormat',
        value: function getTinyColorFormat() {
            if (this.options.format === 'hexString') {
                return 'hex';
            } else if (this.options.format === 'hex8String') {
                return 'hex8';
            }

            return this.options.format;
        }
    }, {
        key: 'areAllValuesSet',
        value: function areAllValuesSet() {
            if (this.hue === undefined || this.saturation === undefined || this.lightness === undefined) {
                return false;
            }

            return true;
        }
    }, {
        key: 'getColorValue',
        value: function getColorValue() {
            var includeOpacity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            var value = {
                h: this.hue,
                s: this.saturation + '%',
                v: this.lightness + '%'
            };

            if (this.options.round) {
                value = {
                    h: this.hue,
                    s: this.saturation + '%',
                    l: this.lightness + '%'
                };
            }

            if (includeOpacity) {
                value.a = this.opacity / 100;
            }

            return value;
        }

        /* eslint-disable complexity */

    }, {
        key: 'setColorValue',
        value: function setColorValue(color) {
            var noMouseEvents = !this.anyMouseEvents();
            var hsl = this.options.round ? color.toHsl() : color.toHsv();

            if (noMouseEvents || this.hueMouse) {
                this.hue = hsl.h;
            }

            if (noMouseEvents || this.saturationMouse) {
                this.saturation = hsl.s * 100;
            }

            if (noMouseEvents || this.lightnessMouse) {
                this.lightness = (this.options.round ? hsl.l : hsl.v) * 100;
            }

            if (this.options.alpha && (noMouseEvents || this.opacityMouse)) {
                this.opacity = hsl.a * 100;
            }
        }
        /* eslint-enable complexity */

    }, {
        key: 'checkDirty',
        value: function checkDirty(color) {
            // check dirty/pristine state
            if (this.hasOwnProperty('initialNgModel')) {
                if (color === this.initialNgModel) {
                    if (typeof this.$scope.control[0].$setPristine === 'function') {
                        this.$scope.control[0].$setPristine();
                    }
                } else {
                    if (typeof this.$scope.control[0].$setDirty === 'function') {
                        this.$scope.control[0].$setDirty();
                    }
                }
            }
        }
    }, {
        key: 'stopEvent',
        value: function stopEvent(event) {
            event.stopPropagation();
            event.preventDefault();
        }
    }, {
        key: 'getRoundPos',
        value: function getRoundPos() {
            var angle = this.hue * 0.01745329251994; // deg to rad
            var px = Math.cos(angle) * this.saturation;
            var py = -Math.sin(angle) * this.saturation;

            this.xPos = (px + 100.0) * 0.5;
            this.yPos = (py + 100.0) * 0.5;

            // because it are using percentages this can be half of 100%
            var center = 50;
            // distance of pointer from the center of the circle
            var distance = Math.pow(center - this.xPos, 2) + Math.pow(center - this.yPos, 2);
            // distance of edge of circle from the center of the circle
            var radius = Math.pow(center, 2);

            // if not inside the circle
            if (distance > radius) {
                var rads = Math.atan2(this.yPos - center, this.xPos - center);
                this.xPos = Math.cos(rads) * center + center;
                this.yPos = Math.sin(rads) * center + center;
            }
        }
    }, {
        key: 'updateRoundPos',
        value: function updateRoundPos() {
            var el = angular.element(this.$element[0].querySelector('.color-picker-grid .color-picker-picker'));

            el.css({
                left: this.pickerDimensions.width * this.xPos / 100 + 'px',
                top: this.pickerDimensions.height * this.yPos / 100 + 'px'
            });
        }
    }, {
        key: 'getEventPos',
        value: function getEventPos(event) {
            // if a touch event
            if (event.type.search('touch') === 0) {
                // if event modified by angular
                if (event.originalEvent && event.originalEvent.changedTouches) {
                    return event.originalEvent.changedTouches[0];
                    // if a standard js touch event
                } else if (event.changedTouches) {
                    return event.changedTouches[0];
                }
            }

            // return a non-touch event
            return event;
        }
    }, {
        key: 'calculateSliderPos',
        value: function calculateSliderPos(el, eventPos, multiplier) {
            if (this.options.horizontal) {
                return Math.round((1 - (eventPos.pageX - this.offset(el).left) / el.prop('offsetWidth')) * multiplier);
            }

            return Math.round((1 - (eventPos.pageY - this.offset(el).top) / el.prop('offsetHeight')) * multiplier);
        }
    }, {
        key: 'eventApiDispatch',
        value: function eventApiDispatch(name, args) {
            if (this.eventApi && typeof this.eventApi[name] === 'function') {
                if (!args) {
                    args = [];
                }

                args.unshift(this.internalNgModel);
                args.unshift(this.api);

                this.eventApi[name].apply(this, args);
            }
        }

        /** taken and modified from jQuery's find */

    }, {
        key: 'find',
        value: function find(selector) {
            var context = this.wrapper ? this.wrapper[0] : this.$element[0],
                results = [],
                nodeType;

            // Same basic safeguard as Sizzle
            if (!selector) {
                return results;
            }

            if (typeof selector === 'string') {
                // Early return if context is not an element or document
                if ((nodeType = context.nodeType) !== 1 && nodeType !== 9) {
                    return [];
                }

                results = context.querySelectorAll(selector);
            } else {
                if (context.contains(selector)) {
                    results.push(selector);
                }
            }

            return angular.element(results);
        }

        /** taken and modified from jQuery's offset */

    }, {
        key: 'offset',
        value: function offset(el) {
            var docElem,
                win,
                rect,
                doc,
                elem = el[0];

            if (!elem) {
                return;
            }

            // Support: IE<=11+
            // Running getBoundingClientRect on a
            // disconnected node in IE throws an error
            if (!elem.getClientRects().length) {
                return {
                    top: 0,
                    left: 0
                };
            }

            rect = elem.getBoundingClientRect();

            // Make sure element is not hidden (display: none)
            if (rect.width || rect.height) {
                doc = elem.ownerDocument;
                win = this.getWindowElements(doc);
                docElem = doc.documentElement;

                // hack for small chrome screens not position the clicks properly when the page is scrolled
                if (this.chrome && this.android_version < 6 && screen.width <= 768) {
                    return {
                        top: rect.top - docElem.clientTop,
                        left: rect.left - docElem.clientLeft
                    };
                }

                return {
                    top: rect.top + win.pageYOffset - docElem.clientTop,
                    left: rect.left + win.pageXOffset - docElem.clientLeft
                };
            }

            return rect;
        }
    }, {
        key: 'getWindowElements',
        value: function getWindowElements(doc) {
            return doc !== null && doc === doc.window ? doc : doc.nodeType === 9 && doc.defaultView;
        }
    }, {
        key: 'anyMouseEvents',
        value: function anyMouseEvents() {
            return this.colorMouse || this.hueMouse || this.saturationMouse || this.lightnessMouse || this.opacityMouse;
        }
    }, {
        key: 'getMaxFromType',
        value: function getMaxFromType(type) {
            return type === 'hue' ? 360 : 100;
        }
    }]);
    return AngularColorPickerController;
}();

exports.default = AngularColorPickerController;


AngularColorPickerController.$inject = ['$scope', '$element', '$document', '$timeout', 'ColorPickerOptions'];

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(41);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(60);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(42), __esModule: true };

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43);
__webpack_require__(56);
module.exports = __webpack_require__(24).f('iterator');


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(44)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(27)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(13);
var defined = __webpack_require__(14);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(46);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(31);
var descriptor = __webpack_require__(11);
var setToStringTag = __webpack_require__(23);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(4)(IteratorPrototype, __webpack_require__(6)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(1);
var anObject = __webpack_require__(8);
var getKeys = __webpack_require__(19);

module.exports = __webpack_require__(2) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(33);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(5);
var toLength = __webpack_require__(51);
var toAbsoluteIndex = __webpack_require__(52);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(13);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(13);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(3);
var toObject = __webpack_require__(55);
var IE_PROTO = __webpack_require__(20)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(14);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(57);
var global = __webpack_require__(0);
var hide = __webpack_require__(4);
var Iterators = __webpack_require__(18);
var TO_STRING_TAG = __webpack_require__(6)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(58);
var step = __webpack_require__(59);
var Iterators = __webpack_require__(18);
var toIObject = __webpack_require__(5);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(27)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(61), __esModule: true };

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(62);
__webpack_require__(68);
__webpack_require__(69);
__webpack_require__(70);
module.exports = __webpack_require__(7).Symbol;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(0);
var has = __webpack_require__(3);
var DESCRIPTORS = __webpack_require__(2);
var $export = __webpack_require__(16);
var redefine = __webpack_require__(30);
var META = __webpack_require__(63).KEY;
var $fails = __webpack_require__(10);
var shared = __webpack_require__(21);
var setToStringTag = __webpack_require__(23);
var uid = __webpack_require__(12);
var wks = __webpack_require__(6);
var wksExt = __webpack_require__(24);
var wksDefine = __webpack_require__(25);
var enumKeys = __webpack_require__(64);
var isArray = __webpack_require__(65);
var anObject = __webpack_require__(8);
var toIObject = __webpack_require__(5);
var toPrimitive = __webpack_require__(17);
var createDesc = __webpack_require__(11);
var _create = __webpack_require__(31);
var gOPNExt = __webpack_require__(66);
var $GOPD = __webpack_require__(67);
var $DP = __webpack_require__(1);
var $keys = __webpack_require__(19);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(35).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(26).f = $propertyIsEnumerable;
  __webpack_require__(34).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(15)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(4)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(12)('meta');
var isObject = __webpack_require__(9);
var has = __webpack_require__(3);
var setDesc = __webpack_require__(1).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(10)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(19);
var gOPS = __webpack_require__(34);
var pIE = __webpack_require__(26);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(33);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(5);
var gOPN = __webpack_require__(35).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(26);
var createDesc = __webpack_require__(11);
var toIObject = __webpack_require__(5);
var toPrimitive = __webpack_require__(17);
var has = __webpack_require__(3);
var IE8_DOM_DEFINE = __webpack_require__(28);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(2) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 68 */
/***/ (function(module, exports) {



/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25)('asyncIterator');


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25)('observable');


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(72);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(73), __esModule: true };

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(74);
var $Object = __webpack_require__(7).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(16);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(2), 'Object', { defineProperty: __webpack_require__(1).f });


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// TinyColor v1.4.1
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

(function(Math) {

var trimLeft = /^\s+/,
    trimRight = /\s+$/,
    tinyCounter = 0,
    mathRound = Math.round,
    mathMin = Math.min,
    mathMax = Math.max,
    mathRandom = Math.random;

function tinycolor (color, opts) {

    color = (color) ? color : '';
    opts = opts || { };

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
       return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color,
    this._r = rgb.r,
    this._g = rgb.g,
    this._b = rgb.b,
    this._a = rgb.a,
    this._roundA = mathRound(100*this._a) / 100,
    this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) { this._r = mathRound(this._r); }
    if (this._g < 1) { this._g = mathRound(this._g); }
    if (this._b < 1) { this._b = mathRound(this._b); }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
}

tinycolor.prototype = {
    isDark: function() {
        return this.getBrightness() < 128;
    },
    isLight: function() {
        return !this.isDark();
    },
    isValid: function() {
        return this._ok;
    },
    getOriginalInput: function() {
      return this._originalInput;
    },
    getFormat: function() {
        return this._format;
    },
    getAlpha: function() {
        return this._a;
    },
    getBrightness: function() {
        //http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function() {
        //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R, G, B;
        RsRGB = rgb.r/255;
        GsRGB = rgb.g/255;
        BsRGB = rgb.b/255;

        if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
        if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
        if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
    },
    setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100*this._a) / 100;
        return this;
    },
    toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
    },
    toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
        return (this._a == 1) ?
          "hsv("  + h + ", " + s + "%, " + v + "%)" :
          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
    },
    toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
    },
    toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
        return (this._a == 1) ?
          "hsl("  + h + ", " + s + "%, " + l + "%)" :
          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
    },
    toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function(allow3Char) {
        return '#' + this.toHex(allow3Char);
    },
    toHex8: function(allow4Char) {
        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function(allow4Char) {
        return '#' + this.toHex8(allow4Char);
    },
    toRgb: function() {
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
    },
    toRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function() {
        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
    },
    toPercentageRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function() {
        if (this._a === 0) {
            return "transparent";
        }

        if (this._a < 1) {
            return false;
        }

        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function(secondColor) {
        var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";

        if (secondColor) {
            var s = tinycolor(secondColor);
            secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
        }

        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
    },
    toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;

        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === "name" && this._a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === "rgb") {
            formattedString = this.toRgbString();
        }
        if (format === "prgb") {
            formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
        }
        if (format === "hex3") {
            formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
            formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
            formattedString = this.toHex8String();
        }
        if (format === "name") {
            formattedString = this.toName();
        }
        if (format === "hsl") {
            formattedString = this.toHslString();
        }
        if (format === "hsv") {
            formattedString = this.toHsvString();
        }

        return formattedString || this.toHexString();
    },
    clone: function() {
        return tinycolor(this.toString());
    },

    _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
    },
    lighten: function() {
        return this._applyModification(lighten, arguments);
    },
    brighten: function() {
        return this._applyModification(brighten, arguments);
    },
    darken: function() {
        return this._applyModification(darken, arguments);
    },
    desaturate: function() {
        return this._applyModification(desaturate, arguments);
    },
    saturate: function() {
        return this._applyModification(saturate, arguments);
    },
    greyscale: function() {
        return this._applyModification(greyscale, arguments);
    },
    spin: function() {
        return this._applyModification(spin, arguments);
    },

    _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function() {
        return this._applyCombination(analogous, arguments);
    },
    complement: function() {
        return this._applyCombination(complement, arguments);
    },
    monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
    },
    splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
    },
    triad: function() {
        return this._applyCombination(triad, arguments);
    },
    tetrad: function() {
        return this._applyCombination(tetrad, arguments);
    }
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
    if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
            if (color.hasOwnProperty(i)) {
                if (i === "a") {
                    newColor[i] = color[i];
                }
                else {
                    newColor[i] = convertToPercentage(color[i]);
                }
            }
        }
        color = newColor;
    }

    return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "#ff000000" or "ff000000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {

    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
        color = stringInputToObject(color);
    }

    if (typeof color == "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = "hsv";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
            a = color.a;
        }
    }

    a = boundAlpha(a);

    return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
    };
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
    };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
    var r, g, b;

    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    if(s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if(max == min) {
        h = 0; // achromatic
    }
    else {
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);

    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
}

// `rgbaToHex`
// Converts an RGBA color plus alpha transparency to hex
// Assumes r, g, b are contained in the set [0, 255] and
// a in [0, 1]. Returns a 4 or 8 character rgba hex
function rgbaToHex(r, g, b, a, allow4Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16)),
        pad2(convertDecimalToHex(a))
    ];

    // Return a 4 character hex if possible
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }

    return hex.join("");
}

// `rgbaToArgbHex`
// Converts an RGBA color to an ARGB Hex8 string
// Rarely used, but required for "toFilter()"
function rgbaToArgbHex(r, g, b, a) {

    var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    return hex.join("");
}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) { return false; }
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};

tinycolor.random = function() {
    return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
    });
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function desaturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function saturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function greyscale(color) {
    return tinycolor(color).desaturate(100);
}

function lighten (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

function brighten(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
    return tinycolor(rgb);
}

function darken (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
}

function triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
    ];
}

function tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
    ];
}

function splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
    ];
}

function analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;

    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
    }
    return ret;
}

function monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
        ret.push(tinycolor({ h: h, s: s, v: v}));
        v = (v + modification) % 1;
    }

    return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function(color1, color2, amount) {
    amount = (amount === 0) ? 0 : (amount || 50);

    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();

    var p = amount / 100;

    var rgba = {
        r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
        g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
        b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
        a: ((rgb2.a - rgb1.a) * p) + rgb1.a
    };

    return tinycolor(rgba);
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

// `contrast`
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
};

// `isReadable`
// Ensure that foreground and background color combinations meet WCAG2 guidelines.
// The third argument is an optional Object.
//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

// *Example*
//    tinycolor.isReadable("#000", "#111") => false
//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
tinycolor.isReadable = function(color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;

    out = false;

    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
            out = readability >= 4.5;
            break;
        case "AAlarge":
            out = readability >= 3;
            break;
        case "AAAsmall":
            out = readability >= 7;
            break;
    }
    return out;

};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// Optionally returns Black or White if the most readable color is unreadable.
// *Example*
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
tinycolor.mostReadable = function(baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size ;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors ;
    level = args.level;
    size = args.size;

    for (var i= 0; i < colorList.length ; i++) {
        readability = tinycolor.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
            bestScore = readability;
            bestColor = tinycolor(colorList[i]);
        }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
        return bestColor;
    }
    else {
        args.includeFallbackColors=false;
        return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
    }
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
    var flipped = { };
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
        }
    }
    return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }

    return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
    if (isOnePointZero(n)) { n = "100%"; }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if ((Math.abs(n - max) < 0.000001)) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
    return mathMin(1, mathMax(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
    if (n <= 1) {
        n = (n * 100) + "%";
    }

    return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
    return (parseIntFromHex(h) / 255);
}

var matchers = (function() {

    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

    return {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
})();

// `isValidCSSUnit`
// Take in a single string / number and check to see if it looks like a CSS unit
// (see `matchers` above for definition).
function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
}

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color == 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    if ((match = matchers.hsl.exec(color))) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    if ((match = matchers.hsla.exec(color))) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    if ((match = matchers.hsv.exec(color))) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    if ((match = matchers.hsva.exec(color))) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    if ((match = matchers.hex8.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex6.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
        };
    }
    if ((match = matchers.hex4.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            a: convertHexToDecimal(match[4] + '' + match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex3.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            format: named ? "name" : "hex"
        };
    }

    return false;
}

function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {"level":"AA", "size":"small"};
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
        level = "AA";
    }
    if (size !== "small" && size !== "large") {
        size = "small";
    }
    return {"level":level, "size":size};
}

// Node: Export function
if (typeof module !== "undefined" && module.exports) {
    module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {return tinycolor;}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
// Browser: Expose to window
else {
    window.tinycolor = tinycolor;
}

})(Math);


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = template;
function template($templateCache) {
    $templateCache.put('template/color-picker/directive.html', '<div class="color-picker-wrapper" ng-class="{' + '\'color-picker-disabled\': AngularColorPickerController.options.disabled,' + '\'color-picker-swatch-only\': AngularColorPickerController.options.swatchOnly,' + '\'color-picker-open\': AngularColorPickerController.is_open,' + '\'color-picker-closed\': !AngularColorPickerController.is_open,' + '\'color-picker-horizontal\': AngularColorPickerController.options.horizontal,' + '}">' + '<div class="color-picker-input-wrapper" ng-class="{\'input-group\': AngularColorPickerController.options.swatchBootstrap && AngularColorPickerController.options.swatch}">' + '<span ng-if="AngularColorPickerController.options.swatchPos === \'left\'" class="color-picker-swatch" ng-click="AngularColorPickerController.onSwatchClick($event)" ng-show="AngularColorPickerController.options.swatch" ng-class="{\'color-picker-swatch-left\': AngularColorPickerController.options.swatchPos !== \'right\', \'color-picker-swatch-right\': AngularColorPickerController.options.swatchPos === \'right\', \'input-group-addon\': AngularColorPickerController.options.swatchBootstrap}"></span>' + '<input ng-attr-id="{{AngularColorPickerController.options.id}}" ng-attr-name="{{AngularColorPickerController.options.name}}" class="color-picker-input {{AngularColorPickerController.options.inputClass}}" type="text" ng-model="AngularColorPickerController.internalNgModel" ng-model-options="AngularColorPickerController.ngModelOptions" ng-readonly="AngularColorPickerController.options.swatchOnly" ng-disabled="AngularColorPickerController.options.disabled" ng-change="AngularColorPickerController.onChange($event)" size="7" ng-class="{\'color-picker-input-swatch\': AngularColorPickerController.options.swatch && !AngularColorPickerController.options.swatchOnly && AngularColorPickerController.options.swatchPos === \'left\'}" placeholder="{{AngularColorPickerController.options.placeholder}}" ng-required="AngularColorPickerController.options.required">' + '<span ng-if="AngularColorPickerController.options.swatchPos === \'right\'" class="color-picker-swatch" ng-click="AngularColorPickerController.onSwatchClick($event)" ng-show="AngularColorPickerController.options.swatch" ng-class="{\'color-picker-swatch-left\': AngularColorPickerController.options.swatchPos !== \'right\', \'color-picker-swatch-right\': AngularColorPickerController.options.swatchPos === \'right\', \'input-group-addon\': AngularColorPickerController.options.swatchBootstrap}"></span>' + '</div>' + '<div class="color-picker-panel" ng-class="{' + '\'color-picker-panel-top color-picker-panel-right\': AngularColorPickerController.options.pos === \'top right\',' + '\'color-picker-panel-top color-picker-panel-left\': AngularColorPickerController.options.pos === \'top left\',' + '\'color-picker-panel-bottom color-picker-panel-right\': AngularColorPickerController.options.pos === \'bottom right\',' + '\'color-picker-panel-bottom color-picker-panel-left\': AngularColorPickerController.options.pos === \'bottom left\',' + '\'color-picker-panel-round\': AngularColorPickerController.options.round,' + '\'color-picker-show-hue\': AngularColorPickerController.options.hue,' + '\'color-picker-show-saturation\': AngularColorPickerController.options.saturation,' + '\'color-picker-show-lightness\': AngularColorPickerController.options.lightness,' + '\'color-picker-show-alpha\': AngularColorPickerController.options.alpha && AngularColorPickerController.options.format !== \'hex\',' + '\'color-picker-show-inline\': AngularColorPickerController.options.inline,' + '}">' + '<div class="color-picker-grid-wrapper">' + '<div class="color-picker-row">' + '<div class="color-picker-grid">' + '<div class="color-picker-overlay"></div>' + '<div class="color-picker-grid-inner"></div>' + '<div class="color-picker-picker">' + '<div></div>' + '</div>' + '</div>' + '<div class="color-picker-hue" ng-show="AngularColorPickerController.options.hue">' + '<div class="color-picker-overlay"></div>' + '<div class="color-picker-slider"></div>' + '</div>' + '<div class="color-picker-saturation" ng-show="AngularColorPickerController.options.saturation">' + '<div class="color-picker-overlay"></div>' + '<div class="color-picker-slider"></div>' + '</div>' + '<div class="color-picker-lightness" ng-show="AngularColorPickerController.options.lightness">' + '<div class="color-picker-overlay"></div>' + '<div class="color-picker-slider"></div>' + '</div>' + '<div class="color-picker-opacity" ng-show="AngularColorPickerController.options.alpha && AngularColorPickerController.options.format !== \'hex\'">' + '<div class="color-picker-overlay"></div>' + '<div class="color-picker-slider"></div>' + '</div>' + '</div>' + '</div>' + '<div class="color-picker-actions">' + '<button ' + 'type="button"' + 'class="color-picker-action color-picker-action-clear"' + 'tabindex="-1"' + 'ng-class="AngularColorPickerController.options.clear.class"' + 'ng-show="AngularColorPickerController.options.clear.show"' + 'ng-click="AngularColorPickerController.api.clear($event)"' + '>' + '{{AngularColorPickerController.options.clear.label}}' + '</button>' + '<button ' + 'type="button"' + 'class="color-picker-action color-picker-action-reset"' + 'tabindex="-1"' + 'ng-class="AngularColorPickerController.options.reset.class"' + 'ng-show="AngularColorPickerController.options.reset.show"' + 'ng-click="AngularColorPickerController.api.reset($event)"' + '>' + '{{AngularColorPickerController.options.reset.label}}' + '</button>' + '<button ' + 'type="button"' + 'class="color-picker-action color-picker-action-close"' + 'tabindex="-1"' + 'ng-class="AngularColorPickerController.options.close.class"' + 'ng-show="AngularColorPickerController.options.close.show"' + 'ng-click="AngularColorPickerController.api.close($event)"' + '>' + '{{AngularColorPickerController.options.close.label}}' + '</button>' + '</div>' + '</div>' + '</div>');
}

template.$inject = ['$templateCache'];

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(36);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AngularColorPickerOptions = function AngularColorPickerOptions() {
    (0, _classCallCheck3.default)(this, AngularColorPickerOptions);

    return {
        // input attributes
        id: undefined,
        name: undefined,
        required: false,
        disabled: false,
        placeholder: '',
        inputClass: '',
        // validation
        restrictToFormat: false,
        preserveInputFormat: false,
        allowEmpty: false,
        // color
        format: 'hsl',
        case: 'upper',
        hue: true,
        saturation: false,
        lightness: false,
        alpha: true,
        // picker
        round: false,
        pos: 'bottom left',
        inline: false,
        horizontal: false,
        // swatch
        swatch: true,
        swatchOnly: false,
        swatchPos: 'left',
        swatchBootstrap: true,
        // show/hide events
        show: {
            swatch: true,
            focus: true
        },
        hide: {
            blur: true,
            escape: true,
            click: true
        },
        // buttons
        close: {
            show: false,
            label: 'Close',
            class: ''
        },
        clear: {
            show: false,
            label: 'Clear',
            class: ''
        },
        reset: {
            show: false,
            label: 'Reset',
            class: ''
        }
    };
};

exports.default = AngularColorPickerOptions;

/***/ })
/******/ ])));