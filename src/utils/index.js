var bind = require('./helpers/bind');

var toString = Object.prototype.toString;

// 将[object String]: 'string'
var kindOf = (function(cache) { // cache：空对象
  return function(thing) { // thing：要判断类型的数据
    var str = toString.call(thing); // 获取 thing 的类型
		
    // chache：{'[object type]':'type'}, 并返回type的小写形式
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase()); 
  };
})(Object.create(null));

// 判断是否为Array
function isArray(val) {
  return Array.isArray(val);
}

// 判断是否为undefined
function isUndefined(val) {
  return typeof val === 'undefined';
}

// 判断是否为null
function isNull(val) {
  return val === null;
}

// 判断是否为空
function isUndefinedOrNull(val) {
  return isUndefined(val) || isNull(val);
}

// 判断是否为String
function isString(val) {
  return typeof val === 'string';
}

// 判断是否为Number
function isNumber(val) {
  return typeof val === 'number';
}

// 判断是否为Function
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

// 判断是否为Object
function isObject(val) {
  return val !== null && typeof val === 'object';
}

// 判断是否为纯对象
function isPlainObject(val) {
  if (kindOf(val) !== 'object') { // 是Object类型
    return false;
  }

  var prototype = Object.getPrototypeOf(val); // 获取val的原型;
	
  // val的原型值为null或者{}
  return prototype === null || prototype === Object.prototype; 
}

// 去掉首尾空格
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
}

// 定义forEach方法
function forEach(obj, fn) {
  // obj不为空值
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // 不为引用类型
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  // Array类型
  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    for (var key in obj) { // 遍历对象的key
      if (Object.prototype.hasOwnProperty.call(obj, key)) { // 取obj自身属性
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      // 当result和val都是是纯对象 且都存在key属性时
      result[key] = merge(result[key], val); 
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val); // 当val是纯对象时
    } else if (isArray(val)) {
      result[key] = val.slice(); // 遍历对象的value为Array，进行slice处理
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue); // 遍历obj1, obj2, obj3
  }
  return result;
}

// 导出这些方法
module.exports = {
  isArray: isArray,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isFunction: isFunction,
  forEach: forEach,
  merge: merge,
  trim: trim,
  kindOf: kindOf,
  isUndefinedOrNull
};