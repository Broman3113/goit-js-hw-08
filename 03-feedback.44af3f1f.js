function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var o,r,i,f,a,u,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,l=t,f=e.apply(i,n)}function j(e){return l=e,a=setTimeout(h,t),c?y(e):f}function T(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=i}function h(){var e=v();if(T(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-u);return s?m(n,i-(e-l)):n}(e))}function w(e){return a=void 0,g&&o?y(e):(o=r=void 0,f)}function O(){var e=v(),n=T(e);if(o=arguments,r=this,u=e,n){if(void 0===a)return j(u);if(s)return a=setTimeout(h,t),y(u)}return void 0===a&&(a=setTimeout(h,t)),f}return t=b(t)||0,p(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=u=r=a=void 0},O.flush=function(){return void 0===a?f:w(v())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};const y={form:document.querySelector(".feedback-form")},j=JSON.parse(localStorage.getItem("feedback-form-state")),T=j||{};console.log(j),y.form.elements.email.value=(null==j?void 0:j.email)||"",y.form.elements.message.value=(null==j?void 0:j.message)||"",y.form.addEventListener("input",e(t)((function(e){T[e.target.name]=e.target.value,console.log(T),localStorage.setItem("feedback-form-state",JSON.stringify(T))}),500)),y.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),console.log(T)}));
//# sourceMappingURL=03-feedback.44af3f1f.js.map
