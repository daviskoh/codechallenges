!function(C){if("object"==typeof exports)module.exports=C();else if("function"==typeof define&&define.amd)define(C);else{var h;"undefined"!=typeof window?h=window:"undefined"!=typeof global?h=global:"undefined"!=typeof self&&(h=self);h.Should=C()}}(function(){return function h(k,d,g){function l(f,c){if(!d[f]){if(!k[f]){var e="function"==typeof require&&require;if(!c&&e)return e(f,!0);if(a)return a(f,!0);throw Error("Cannot find module '"+f+"'");}e=d[f]={exports:{}};k[f][0].call(e.exports,function(b){var c=
k[f][1][b];return l(c?c:b)},e,e.exports,h,k,d,g)}return d[f].exports}for(var a="function"==typeof require&&require,e=0;e<g.length;e++)l(g[e]);return l}({1:[function(h,k,d){d=h("./should");d.use(h("./ext/assert")).use(h("./ext/chain")).use(h("./ext/bool")).use(h("./ext/number")).use(h("./ext/eql")).use(h("./ext/type")).use(h("./ext/string")).use(h("./ext/property")).use(h("./ext/error")).use(h("./ext/match")).use(h("./ext/browser/jquery")).use(h("./ext/deprecated"));k.exports=d},{"./ext/assert":3,
"./ext/bool":4,"./ext/browser/jquery":5,"./ext/chain":6,"./ext/deprecated":7,"./ext/eql":8,"./ext/error":9,"./ext/match":10,"./ext/number":11,"./ext/property":12,"./ext/string":13,"./ext/type":14,"./should":15}],2:[function(h,k,d){function g(f,c){if(f===c)return!0;if(a.isBuffer(f)&&a.isBuffer(c)){if(f.length!=c.length)return!1;for(var e=0;e<f.length;e++)if(f[e]!==c[e])return!1;return!0}return a.isDate(f)&&a.isDate(c)?f.getTime()===c.getTime():a.isRegExp(f)&&a.isRegExp(c)?f.source===c.source&&f.global===
c.global&&f.multiline===c.multiline&&f.lastIndex===c.lastIndex&&f.ignoreCase===c.ignoreCase:a.isObject(f)||a.isObject(c)?l(f,c):f==c}function l(f,c){if(a.isNullOrUndefined(f)||a.isNullOrUndefined(c)||f.prototype!==c.prototype)return!1;if(a.isArguments(f)){if(!a.isArguments(c))return!1;f=e.call(f);c=e.call(c);return g(f,c)}try{var m=Object.keys(f),b=Object.keys(c),p}catch(d){return!1}if(m.length!=b.length)return!1;m.sort();b.sort();for(p=m.length-1;0<=p;p--)if(m[p]!=b[p])return!1;for(p=m.length-1;0<=
p;p--)if(b=m[p],!g(f[b],c[b]))return!1;return!0}var a=h("./util");k.exports=g;var e=Array.prototype.slice},{"./util":16}],3:[function(h,k,d){var g=h("../util"),l=h("assert"),a=l.AssertionError;k.exports=function(e){var f=e.format;g.merge(e,l);e.exist=e.exists=function(c,g){if(null==c)throw new a({message:g||"expected "+f(c)+" to exist",stackStartFunction:e.exist});};e.not={};e.not.exist=e.not.exists=function(c,g){if(null!=c)throw new a({message:g||"expected "+f(c)+" to not exist",stackStartFunction:e.not.exist});
}}},{"../util":16,assert:17}],4:[function(h,k,d){k.exports=function(g,d){d.add("true",function(){this.is.exactly(!0)},!0);d.add("false",function(){this.is.exactly(!1)},!0);d.add("ok",function(){this.params={operator:"to be truthy"};this.assert(this.obj)},!0)}},{}],5:[function(h,k,d){var g=h("../../util");k.exports=function(d,a){function e(b,a,e,d,m){var h=(g.isObject(d)?Object.keys(d):[d]).reduce(function(a,r){var f=c(this.obj)[b](r);"undefined"!==typeof f&&(a[r]=f);return a}.bind(this),{});4===arguments.length&&
g.isObject(d)?(this.params={operator:"to have "+e+" "+f(d)},h.should.have.properties(d)):4===arguments.length?(this.params={operator:"to have "+a+" "+f(d)},h.should.have.property(d)):(this.params={operator:"to have "+a+" "+f(d)+" with value "+f(m)},h.should.have.property(d,m))}var f=d.format,c=this.jQuery||this.$;"undefined"!==typeof HTMLElement&&HTMLElement&&!HTMLElement.prototype.inspect&&(HTMLElement.prototype.inspect=function(){return this.outerHTML});"undefined"!==typeof jQuery&&jQuery&&!jQuery.prototype.inspect&&
(jQuery.fn.inspect=function(){var b=this.toArray().map(function(b){return g.inspect(b)}).join(", ");return this.selector?"SELECTOR("+this.selector+") matching "+this.length+" elements"+(b.length?": "+b:""):b});var m=function(b,f,e){a.add(f||b,function(){this.params={operator:"to be "+(e||b)};this.assert(c(this.obj).is(":"+b))},!0)};a.add("className",function(b){this.params={operator:"to have class "+b};this.assert(c(this.obj).hasClass(b))});a.add("css",function(b){this.params={operator:"to have css "+
f(b)};for(var a in b){var e=b[a];"auto"===e&&"auto"===c(this.obj).get(0).style[a]||c(this.obj).css(a).should.eql(e)}});m("visible");m("hidden");m("selected");m("checked");m("disabled");m("empty","emptyJq");m("focus","focused","focused");a.add("inDOM",function(){this.params={operator:"to be in the DOM"};this.assert(c.contains(document.documentElement,c(this.obj)[0]))},!0);a.add("exist",function(){this.params={operator:"to exist"};c(this.obj).should.not.have.length(0)},!0);a.add("attr",function(){var b=
["attr","attribute","attributes"].concat(Array.prototype.slice.call(arguments,0));e.apply(this,b)});a.add("prop",function(){var b=["prop","property","properties"].concat(Array.prototype.slice.call(arguments,0));e.apply(this,b)});a.add("elementId",function(b){this.params={operator:"to have ID "+f(b)};this.obj.should.have.attr("id",b)});a.add("html",function(b){this.params={operator:"to have HTML "+f(b)};c(this.obj).html().should.eql(c("<div/>").append(b).html())});a.add("containHtml",function(b){this.params=
{operator:"to contain HTML "+f(b)};c(this.obj).html().indexOf(c("<div/>").append(b).html()).should.be.above(-1)});a.add("text",function(b){this.params={operator:"to have text "+f(b)};var a=c.trim(c(this.obj).text());g.isRegExp(b)?a.should.match(b):a.should.eql(b)});a.add("containText",function(b){this.params={operator:"to contain text "+f(b)};var a=c.trim(c(this.obj).text());g.isRegExp(b)?a.should.match(b):a.indexOf(b).should.be.above(-1)});a.add("value",function(b){this.params={operator:"to have value "+
f(b)};c(this.obj).val().should.eql(b)});a.add("data",function(){var b=["data","data","data"].concat(Array.prototype.slice.call(arguments,0));e.apply(this,b)});a.add("containElement",function(b){this.params={operator:"to contain "+c(b).inspect()};c(this.obj).find(b).should.not.have.length(0)});a.add("matchedBy",function(b){this.params={operator:"to be matched by selector "+b};c(this.obj).filter(b).should.not.have.length(0)});a.add("handle",function(b){this.params={operator:"to handle "+b};var a=c._data(c(this.obj).get(0),
"events");if(!a||!b||"string"!==typeof b)return this.assert(!1);var f=b.split(".");b=f.shift();var e=f.slice(0).sort(),e=RegExp("(^|\\.)"+e.join("\\.(?:.*\\.)?")+"(\\.|$)");if(a[b]&&f.length){for(f=0;f<a[b].length;f++)if(e.test(a[b][f].namespace))return;this.assert(!1)}else a.should.have.property(b),a[b].should.not.have.length(0)});a.add("handleWith",function(b,a){this.params={operator:"to handle "+b+" with "+a};for(var f=b.split(".")[0],f=c._data(c(this.obj).get(0),"events")[f],e=0;e<f.length;e++)if(f[e].handler==
a)return;this.assert(!1)})}},{"../../util":16}],6:[function(h,k,d){k.exports=function(g,d){"an of a and be have with is which".split(" ").forEach(function(a){Object.defineProperty(d.prototype,a,{get:function(){return this}})})}},{}],7:[function(h,k,d){var g=h("../util"),l=h("../eql");k.exports=function(a,e){var f=a.format;e.add("include",function(c,a){if(Array.isArray(this.obj)||g.isString(this.obj))this.params={operator:"to include "+f(c),message:a},this.assert(~this.obj.indexOf(c));else{this.params=
{operator:"to include an object equal to "+f(c),message:a};var b={},e;for(e in c)b[e]=this.obj[e];this.assert(l(b,c))}});e.add("includeEql",function(c,a){this.params={operator:"to include an object equal to "+f(c),message:a};this.assert(this.obj.some(function(b){return l(c,b)}))})}},{"../eql":2,"../util":16}],8:[function(h,k,d){var g=h("../eql");k.exports=function(d,a){a.add("eql",function(a,f){this.params={operator:"to equal",expected:a,showDiff:!0,message:f};this.assert(g(a,this.obj))});a.add("equal",
function(a,f){this.params={operator:"to be",expected:a,showDiff:!0,message:f};this.assert(a===this.obj)});a.alias("equal","exactly")}},{"../eql":2}],9:[function(h,k,d){k.exports=function(g,d){var a=g.format;d.add("throw",function(e){var f=this.obj,c={},g="",b=!0;try{f(),b=!1}catch(d){c=d}b&&("string"==typeof e?b=e==c.message:e instanceof RegExp?b=e.test(c.message):"function"==typeof e&&(b=c instanceof e),e&&!b?"string"==typeof e?g=" with a message matching '"+e+"', but got '"+c.message+"'":e instanceof
RegExp?g=" with a message matching "+e+", but got '"+c.message+"'":"function"==typeof e&&(g=" of type "+e.name+", but got "+c.constructor.name):g=" (got "+a(c)+")");this.params={operator:"to throw exception"+g};this.assert(b)});d.alias("throw","throwError")}},{}],10:[function(h,k,d){var g=h("../util"),l=h("../eql");k.exports=function(a,e){var f=a.format;e.add("match",function(c,d){this.params={operator:"to match "+f(c),message:d};if(!l(this.obj,c))if(g.isRegExp(c))if(g.isString(this.obj))this.assert(c.exec(this.obj));
else if(Array.isArray(this.obj))this.obj.forEach(function(b){this.assert(c.exec(b))},this);else{if(g.isObject(this.obj)){var b=[],p=[];g.forOwn(this.obj,function(a,e){c.exec(a)?p.push(f(e)):b.push(f(e))},this);b.length&&(this.params.operator+="\n\tnot matched properties: "+b.join(", "));p.length&&(this.params.operator+="\n\tmatched properties: "+p.join(", "));this.assert(0==b.length)}}else if(g.isFunction(c)){var h;try{h=c(this.obj)}catch(k){throw k instanceof a.AssertionError&&(this.params.operator+=
"\n\t"+k.message),k;}h instanceof e&&(this.params.operator+="\n\t"+h.getMessage());g.isBoolean(h)&&this.assert(h)}else g.isObject(c)?(b=[],p=[],g.forOwn(c,function(c,f){try{this.obj[f].should.match(c),p.push(f)}catch(e){if(e instanceof a.AssertionError)b.push(f);else throw e;}},this),b.length&&(this.params.operator+="\n\tnot matched properties: "+b.join(", ")),p.length&&(this.params.operator+="\n\tmatched properties: "+p.join(", ")),this.assert(0==b.length)):this.assert(!1)});e.add("matchEach",function(c,
a){this.params={operator:"to match each "+f(c),message:a};var b=c;g.isRegExp(c)?b=function(b){return!!c.exec(b)}:g.isFunction(c)||(b=function(b){return l(b,c)});g.forOwn(this.obj,function(c,a){var f=b(c,a);g.isBoolean(f)&&this.assert(f)},this)})}},{"../eql":2,"../util":16}],11:[function(h,k,d){k.exports=function(g,d){d.add("NaN",function(){this.params={operator:"to be NaN"};this.assert(this.obj!==this.obj)},!0);d.add("Infinity",function(){this.params={operator:"to be Infinity"};this.is.a.Number.and.not.a.NaN.and.assert(!isFinite(this.obj))},
!0);d.add("within",function(a,e,f){this.params={operator:"to be within "+a+".."+e,message:f};this.assert(this.obj>=a&&this.obj<=e)});d.add("approximately",function(a,e,f){this.params={operator:"to be approximately "+a+" \u00b1"+e,message:f};this.assert(Math.abs(this.obj-a)<=e)});d.add("above",function(a,e){this.params={operator:"to be above "+a,message:e};this.assert(this.obj>a)});d.add("below",function(a,e){this.params={operator:"to be below "+a,message:e};this.assert(this.obj<a)});d.alias("above",
"greaterThan");d.alias("below","lessThan")}},{}],12:[function(h,k,d){var g=h("../util"),l=h("../eql"),a=Array.prototype.slice;k.exports=function(e,f){var c=e.format;f.add("property",function(b,c){if(1<arguments.length){var a={};a[b]=c;this.have.properties(a)}else this.have.properties(b);this.obj=this.obj[b]});f.add("properties",function(b){var f={};1<arguments.length?b=a.call(arguments):Array.isArray(b)||(g.isString(b)?b=[b]:(f=b,b=Object.keys(b)));var e=Object(this.obj),d=[];b.forEach(function(b){b in
e||d.push(c(b))});var h=d;0===h.length&&(h=b.map(c));var m=(1===h.length?"to have property ":"to have properties ")+h.join(", ");this.params={operator:m};this.assert(0===d.length);m=Object.keys(f);if(m.length){var k=[],h=[];m.forEach(function(b){var a=f[b];l(e[b],a)?h.push(c(b)+" of "+c(a)):k.push(c(b)+" of "+c(a)+" (got "+c(e[b])+")")});0<k.length&&(h=k);m=(1===h.length?"to have property ":"to have properties ")+h.join(", ");this.params={operator:m};this.assert(0===k.length)}});f.add("length",function(b,
c){this.have.property("length",b,c)});f.alias("length","lengthOf");var d=Object.prototype.hasOwnProperty;f.add("ownProperty",function(b,a){this.params={operator:"to have own property "+c(b),message:a};this.assert(d.call(this.obj,b));this.obj=this.obj[b]});f.alias("hasOwnProperty","ownProperty");f.add("empty",function(){this.params={operator:"to be empty"};if(g.isString(this.obj)||Array.isArray(this.obj)||g.isArguments(this.obj))this.have.property("length",0);else{var b=Object(this.obj),c;for(c in b)this.have.not.ownProperty(c)}},
!0);f.add("keys",function(b){1<arguments.length?b=a.call(arguments):1===arguments.length&&g.isString(b)?b=[b]:0===arguments.length&&(b=[]);var f=Object(this.obj),e=[];b.forEach(function(b){d.call(this.obj,b)||e.push(c(b))},this);var h=[];Object.keys(f).forEach(function(a){0>b.indexOf(a)&&h.push(c(a))});this.params={operator:(0===b.length?"to be empty":"to have "+(1===b.length?"key ":"keys "))+b.map(c).join(", ")};0<e.length&&(this.params.operator+="\n\tmissing keys: "+e.join(", "));0<h.length&&(this.params.operator+=
"\n\textra keys: "+h.join(", "));this.assert(0===e.length&&0===h.length)});f.alias("keys","key");f.add("containEql",function(b){this.params={operator:"to contain "+c(b)};var a=this.obj;Array.isArray(a)?this.assert(a.some(function(c){return l(c,b)})):g.isString(a)?this.assert(0<=a.indexOf(String(b))):g.isObject(a)?g.forOwn(b,function(b,c){a.should.have.property(c,b)}):this.assert(!1)});f.add("containDeep",function(b){this.params={operator:"to contain "+c(b)};var a=this.obj;if(Array.isArray(a))if(Array.isArray(b)){var f=
0;a.forEach(function(a){try{e(a).not.be.null.and.containDeep(b[f]),f++}catch(c){if(!(c instanceof e.AssertionError))throw c;}});this.assert(f==b.length)}else this.assert(!1);else g.isString(a)?this.assert(0<=a.indexOf(String(b))):g.isObject(a)?g.isObject(b)?g.forOwn(b,function(b,c){e(a[c]).not.be.null.and.containDeep(b)}):this.assert(!1):this.eql(b)})}},{"../eql":2,"../util":16}],13:[function(h,k,d){k.exports=function(d,h){h.add("startWith",function(a,e){this.params={operator:"to start with "+d.format(a),
message:e};this.assert(0===this.obj.indexOf(a))});h.add("endWith",function(a,e){this.params={operator:"to end with "+d.format(a),message:e};this.assert(0<=this.obj.indexOf(a,this.obj.length-a.length))})}},{}],14:[function(h,k,d){var g=h("../util");k.exports=function(d,a){a.add("Number",function(){this.params={operator:"to be a number"};this.assert(g.isNumber(this.obj))},!0);a.add("arguments",function(){this.params={operator:"to be arguments"};this.assert(g.isArguments(this.obj))},!0);a.add("type",
function(a,f){this.params={operator:"to have type "+a,message:f};(typeof this.obj).should.be.exactly(a,f)});a.add("instanceof",function(a,f){this.params={operator:"to be an instance of "+a.name,message:f};this.assert(Object(this.obj)instanceof a)});a.add("Function",function(){this.params={operator:"to be a function"};this.assert(g.isFunction(this.obj))},!0);a.add("Object",function(){this.params={operator:"to be an object"};this.assert(g.isObject(this.obj))},!0);a.add("String",function(){this.params=
{operator:"to be a string"};this.assert(g.isString(this.obj))},!0);a.add("Array",function(){this.params={operator:"to be an array"};this.assert(Array.isArray(this.obj))},!0);a.add("Boolean",function(){this.params={operator:"to be a boolean"};this.assert(g.isBoolean(this.obj))},!0);a.add("Error",function(){this.params={operator:"to be an error"};this.assert(g.isError(this.obj))},!0);a.add("null",function(){this.params={operator:"to be null"};this.assert(null===this.obj)},!0);a.alias("instanceof","instanceOf")}},
{"../util":16}],15:[function(h,k,d){var g=h("./util"),l=g.AssertionError,a=g.inspect,e=function(a){return new f(g.isWrapperType(a)?a.valueOf():a)},f=e.Assertion=function(a){this.obj=a};f.add=function(a,b,c){var d={};d[c?"get":"value"]=function(){var a=new f(this.obj);a.copy=a.copyIfMissing;try{b.apply(a,arguments)}catch(c){this.copy(a);if(c instanceof e.AssertionError){if(this.negate)return this.obj=a.obj,this.negate=!1,this;this.assert(!1)}throw c;}this.copy(a);this.negate&&this.assert(!1);this.obj=
a.obj;this.negate=!1;return this};Object.defineProperty(f.prototype,a,d)};f.alias=function(a,b){f.prototype[b]=f.prototype[a]};e.AssertionError=l;var c=e.format=function(c){return g.isDate(c)&&"function"!==typeof c.inspect?c.toISOString():a(c,{depth:null})};e.use=function(a){a(this,f);return this};k.exports=e;Object.defineProperty(Object.prototype,"should",{set:function(){},get:function(){return e(this)},configurable:!0});f.prototype={constructor:f,assert:function(a){if(!a){a=this.params;var b=a.message,
c=!1;b||(b=this.getMessage(),c=!0);b=new l({message:b,actual:this.obj,expected:a.expected,stackStartFunction:this.assert});b.showDiff=a.showDiff;b.operator=a.operator;b.generatedMessage=c;throw b;}},getMessage:function(){return"expected "+c(this.obj)+(this.negate?" not ":" ")+this.params.operator+("expected"in this.params?" "+c(this.params.expected):"")},copy:function(a){this.params=a.params},copyIfMissing:function(a){this.params||(this.params=a.params)},get not(){this.negate=!this.negate;return this}}},
{"./util":16}],16:[function(h,k,d){function g(a){return"number"===typeof a||a instanceof Number}function l(a){return"string"===typeof a||a instanceof String}function a(a){return"boolean"===typeof a||a instanceof Boolean}function e(a){return"object"===typeof a&&null!==a}d.isWrapperType=function(c){return g(c)||l(c)||a(c)};d.merge=function(a,f){if(a&&f)for(var b in f)a[b]=f[b];return a};d.isNumber=g;d.isBoolean=a;d.isString=l;d.isBuffer=function(a){return"undefined"!==typeof Buffer&&a instanceof Buffer};
d.isDate=function(a){return e(a)&&"[object Date]"===Object.prototype.toString.call(a)};d.isObject=e;d.isRegExp=function(a){return e(a)&&"[object RegExp]"===Object.prototype.toString.call(a)};d.isNullOrUndefined=function(a){return null==a};d.isArguments=function(a){return"[object Arguments]"===Object.prototype.toString.call(a)};d.isFunction=function(a){return"function"===typeof a||a instanceof Function};d.isError=function(a){return e(a)&&"[object Error]"===Object.prototype.toString.call(a)};d.inspect=
h("util").inspect;d.AssertionError=h("assert").AssertionError;var f=Object.prototype.hasOwnProperty;d.forOwn=function(a,e,b){for(var d in a)f.call(a,d)&&e.call(b,a[d],d)}},{assert:17,util:20}],17:[function(h,k,d){function g(a,b){return q.isUndefined(b)?""+b:q.isNumber(b)&&(isNaN(b)||!isFinite(b))||q.isFunction(b)||q.isRegExp(b)?b.toString():b}function l(a,b){return q.isString(a)?a.length<b?a:a.slice(0,b):a}function a(a,b,c,f,d){throw new n.AssertionError({message:c,actual:a,expected:b,operator:f,
stackStartFunction:d});}function e(b,c){b||a(b,!0,c,"==",n.ok)}function f(a,b){if(a===b)return!0;if(q.isBuffer(a)&&q.isBuffer(b)){if(a.length!=b.length)return!1;for(var c=0;c<a.length;c++)if(a[c]!==b[c])return!1;return!0}return q.isDate(a)&&q.isDate(b)?a.getTime()===b.getTime():q.isRegExp(a)&&q.isRegExp(b)?a.source===b.source&&a.global===b.global&&a.multiline===b.multiline&&a.lastIndex===b.lastIndex&&a.ignoreCase===b.ignoreCase:q.isObject(a)||q.isObject(b)?m(a,b):a==b}function c(a){return"[object Arguments]"==
Object.prototype.toString.call(a)}function m(a,b){if(q.isNullOrUndefined(a)||q.isNullOrUndefined(b)||a.prototype!==b.prototype)return!1;if(c(a)){if(!c(b))return!1;a=s.call(a);b=s.call(b);return f(a,b)}try{var d=t(a),e=t(b),g}catch(h){return!1}if(d.length!=e.length)return!1;d.sort();e.sort();for(g=d.length-1;0<=g;g--)if(d[g]!=e[g])return!1;for(g=d.length-1;0<=g;g--)if(e=d[g],!f(a[e],b[e]))return!1;return!0}function b(a,b){return a&&b?"[object RegExp]"==Object.prototype.toString.call(b)?b.test(a):a instanceof
b||!0===b.call({},a)?!0:!1:!1}function p(c,f,d,e){var g;q.isString(d)&&(e=d,d=null);try{f()}catch(h){g=h}e=(d&&d.name?" ("+d.name+").":".")+(e?" "+e:".");c&&!g&&a(g,d,"Missing expected exception"+e);!c&&b(g,d)&&a(g,d,"Got unwanted exception"+e);if(c&&g&&d&&!b(g,d)||!c&&g)throw g;}var q=h("util/"),s=Array.prototype.slice,v=Object.prototype.hasOwnProperty,n=k.exports=e;n.AssertionError=function(b){this.name="AssertionError";this.actual=b.actual;this.expected=b.expected;this.operator=b.operator;b.message?
(this.message=b.message,this.generatedMessage=!1):(this.message=l(JSON.stringify(this.actual,g),128)+" "+this.operator+" "+l(JSON.stringify(this.expected,g),128),this.generatedMessage=!0);var c=b.stackStartFunction||a;Error.captureStackTrace?Error.captureStackTrace(this,c):(b=Error(),b.stack&&(b=b.stack,c=b.indexOf("\n"+c.name),0<=c&&(c=b.indexOf("\n",c+1),b=b.substring(c+1)),this.stack=b))};q.inherits(n.AssertionError,Error);n.fail=a;n.ok=e;n.equal=function(b,c,f){b!=c&&a(b,c,f,"==",n.equal)};n.notEqual=
function(b,c,f){b==c&&a(b,c,f,"!=",n.notEqual)};n.deepEqual=function(b,c,d){f(b,c)||a(b,c,d,"deepEqual",n.deepEqual)};n.notDeepEqual=function(b,c,d){f(b,c)&&a(b,c,d,"notDeepEqual",n.notDeepEqual)};n.strictEqual=function(b,c,f){b!==c&&a(b,c,f,"===",n.strictEqual)};n.notStrictEqual=function(b,c,f){b===c&&a(b,c,f,"!==",n.notStrictEqual)};n.throws=function(a,b,c){p.apply(this,[!0].concat(s.call(arguments)))};n.doesNotThrow=function(a,b){p.apply(this,[!1].concat(s.call(arguments)))};n.ifError=function(a){if(a)throw a;
};var t=Object.keys||function(a){var b=[],c;for(c in a)v.call(a,c)&&b.push(c);return b}},{"util/":20}],18:[function(h,k,d){k.exports="function"===typeof Object.create?function(d,h){d.super_=h;d.prototype=Object.create(h.prototype,{constructor:{value:d,enumerable:!1,writable:!0,configurable:!0}})}:function(d,h){d.super_=h;var a=function(){};a.prototype=h.prototype;d.prototype=new a;d.prototype.constructor=d}},{}],19:[function(h,k,d){k.exports=function(d){return d&&"object"===typeof d&&"function"===
typeof d.copy&&"function"===typeof d.fill&&"function"===typeof d.readUInt8}},{}],20:[function(h,k,d){function g(b,c){var e={seen:[],stylize:a};3<=arguments.length&&(e.depth=arguments[2]);4<=arguments.length&&(e.colors=arguments[3]);v(c)?e.showHidden=c:c&&d._extend(e,c);r(e.showHidden)&&(e.showHidden=!1);r(e.depth)&&(e.depth=2);r(e.colors)&&(e.colors=!1);r(e.customInspect)&&(e.customInspect=!0);e.colors&&(e.stylize=l);return f(e,b,e.depth)}function l(a,b){var c=g.styles[b];return c?"\u001b["+g.colors[c][0]+
"m"+a+"\u001b["+g.colors[c][1]+"m":a}function a(a,b){return a}function e(a){var b={};a.forEach(function(a,c){b[a]=!0});return b}function f(a,g,h){if(a.customInspect&&g&&y(g.inspect)&&g.inspect!==d.inspect&&(!g.constructor||g.constructor.prototype!==g)){var k=g.inspect(h,a);t(k)||(k=f(a,k,h));return k}if(k=c(a,g))return k;var l=Object.keys(g),n=e(l);a.showHidden&&(l=Object.getOwnPropertyNames(g));if(x(g)&&(0<=l.indexOf("message")||0<=l.indexOf("description")))return m(g);if(0===l.length){if(y(g))return a.stylize("[Function"+
(g.name?": "+g.name:"")+"]","special");if(w(g))return a.stylize(RegExp.prototype.toString.call(g),"regexp");if(D(g))return a.stylize(Date.prototype.toString.call(g),"date");if(x(g))return m(g)}var k="",z=!1,A=["{","}"];s(g)&&(z=!0,A=["[","]"]);y(g)&&(k=" [Function"+(g.name?": "+g.name:"")+"]");w(g)&&(k=" "+RegExp.prototype.toString.call(g));D(g)&&(k=" "+Date.prototype.toUTCString.call(g));x(g)&&(k=" "+m(g));if(0===l.length&&(!z||0==g.length))return A[0]+k+A[1];if(0>h)return w(g)?a.stylize(RegExp.prototype.toString.call(g),
"regexp"):a.stylize("[Object]","special");a.seen.push(g);l=z?b(a,g,h,n,l):l.map(function(b){return p(a,g,h,n,b,z)});a.seen.pop();return q(l,k,A)}function c(a,b){if(r(b))return a.stylize("undefined","undefined");if(t(b)){var c="'"+JSON.stringify(b).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return a.stylize(c,"string")}if(n(b))return a.stylize(""+b,"number");if(v(b))return a.stylize(""+b,"boolean");if(null===b)return a.stylize("null","null")}function m(a){return"["+Error.prototype.toString.call(a)+
"]"}function b(a,b,c,d,f){for(var e=[],g=0,h=b.length;g<h;++g)Object.prototype.hasOwnProperty.call(b,String(g))?e.push(p(a,b,c,d,String(g),!0)):e.push("");f.forEach(function(f){f.match(/^\d+$/)||e.push(p(a,b,c,d,f,!0))});return e}function p(a,b,c,d,e,g){var h,k;b=Object.getOwnPropertyDescriptor(b,e)||{value:b[e]};b.get?k=b.set?a.stylize("[Getter/Setter]","special"):a.stylize("[Getter]","special"):b.set&&(k=a.stylize("[Setter]","special"));Object.prototype.hasOwnProperty.call(d,e)||(h="["+e+"]");k||
(0>a.seen.indexOf(b.value)?(k=null===c?f(a,b.value,null):f(a,b.value,c-1),-1<k.indexOf("\n")&&(k=g?k.split("\n").map(function(a){return"  "+a}).join("\n").substr(2):"\n"+k.split("\n").map(function(a){return"   "+a}).join("\n"))):k=a.stylize("[Circular]","special"));if(r(h)){if(g&&e.match(/^\d+$/))return k;h=JSON.stringify(""+e);h.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(h=h.substr(1,h.length-2),h=a.stylize(h,"name")):(h=h.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),h=a.stylize(h,
"string"))}return h+": "+k}function q(a,b,c){var d=0;return 60<a.reduce(function(a,b){d++;0<=b.indexOf("\n")&&d++;return a+b.replace(/\u001b\[\d\d?m/g,"").length+1},0)?c[0]+(""===b?"":b+"\n ")+" "+a.join(",\n  ")+" "+c[1]:c[0]+b+" "+a.join(", ")+" "+c[1]}function s(a){return Array.isArray(a)}function v(a){return"boolean"===typeof a}function n(a){return"number"===typeof a}function t(a){return"string"===typeof a}function r(a){return void 0===a}function w(a){return u(a)&&"[object RegExp]"===Object.prototype.toString.call(a)}
function u(a){return"object"===typeof a&&null!==a}function D(a){return u(a)&&"[object Date]"===Object.prototype.toString.call(a)}function x(a){return u(a)&&("[object Error]"===Object.prototype.toString.call(a)||a instanceof Error)}function y(a){return"function"===typeof a}function E(a){return 10>a?"0"+a.toString(10):a.toString(10)}function G(){var a=new Date,b=[E(a.getHours()),E(a.getMinutes()),E(a.getSeconds())].join(":");return[a.getDate(),H[a.getMonth()],b].join(" ")}var I=/%[sdj%]/g;d.format=
function(a){if(!t(a)){for(var b=[],c=0;c<arguments.length;c++)b.push(g(arguments[c]));return b.join(" ")}for(var c=1,d=arguments,e=d.length,b=String(a).replace(I,function(a){if("%%"===a)return"%";if(c>=e)return a;switch(a){case "%s":return String(d[c++]);case "%d":return Number(d[c++]);case "%j":try{return JSON.stringify(d[c++])}catch(b){return"[Circular]"}default:return a}}),f=d[c];c<e;f=d[++c])b=null!==f&&u(f)?b+(" "+g(f)):b+(" "+f);return b};d.deprecate=function(a,b){if(r(global.process))return function(){return d.deprecate(a,
b).apply(this,arguments)};if(!0===process.noDeprecation)return a;var c=!1;return function(){if(!c){if(process.throwDeprecation)throw Error(b);process.traceDeprecation?console.trace(b):console.error(b);c=!0}return a.apply(this,arguments)}};var B={},F;d.debuglog=function(a){r(F)&&(F=process.env.NODE_DEBUG||"");a=a.toUpperCase();if(!B[a])if(RegExp("\\b"+a+"\\b","i").test(F)){var b=process.pid;B[a]=function(){var c=d.format.apply(d,arguments);console.error("%s %d: %s",a,b,c)}}else B[a]=function(){};return B[a]};
d.inspect=g;g.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]};g.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"};d.isArray=s;d.isBoolean=v;d.isNull=function(a){return null===a};d.isNullOrUndefined=function(a){return null==a};d.isNumber=n;d.isString=t;d.isSymbol=function(a){return"symbol"===
typeof a};d.isUndefined=r;d.isRegExp=w;d.isObject=u;d.isDate=D;d.isError=x;d.isFunction=y;d.isPrimitive=function(a){return null===a||"boolean"===typeof a||"number"===typeof a||"string"===typeof a||"symbol"===typeof a||"undefined"===typeof a};d.isBuffer=h("./support/isBuffer");var H="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");d.log=function(){console.log("%s - %s",G(),d.format.apply(d,arguments))};d.inherits=h("inherits");d._extend=function(a,b){if(!b||!u(b))return a;for(var c=Object.keys(b),
d=c.length;d--;)a[c[d]]=b[c[d]];return a}},{"./support/isBuffer":19,inherits:18}]},{},[1])(1)});
