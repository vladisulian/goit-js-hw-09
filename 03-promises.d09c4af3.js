function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var u=r("eWCmQ");const l={delay:document.querySelector('[name="delay"]'),delayStep:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),submitButton:document.querySelector('[type="submit"]')};function i(e,t){return new Promise(((o,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}document.querySelector("form");l.submitButton.addEventListener("click",(t=>{t.preventDefault();let o=Number(l.delay.value),n=Number(l.delayStep.value);for(let t=0;t<l.amount.value;t++)i(1+t,o+t*n).then((({position:t,delay:o})=>{e(u).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(u).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)}))}));
//# sourceMappingURL=03-promises.d09c4af3.js.map
