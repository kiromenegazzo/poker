!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";n.r(t),n.d(t,"h",function(){return l}),n.d(t,"createElement",function(){return l}),n.d(t,"cloneElement",function(){return u}),n.d(t,"Component",function(){return z}),n.d(t,"render",function(){return U}),n.d(t,"rerender",function(){return h}),n.d(t,"options",function(){return r});var o=function(){},r={},i=[],a=[];function l(e,t){var n,l,c,s,u=a;for(s=arguments.length;s-- >2;)i.push(arguments[s]);for(t&&null!=t.children&&(i.length||i.push(t.children),delete t.children);i.length;)if((l=i.pop())&&void 0!==l.pop)for(s=l.length;s--;)i.push(l[s]);else"boolean"==typeof l&&(l=null),(c="function"!=typeof e)&&(null==l?l="":"number"==typeof l?l=String(l):"string"!=typeof l&&(c=!1)),c&&n?u[u.length-1]+=l:u===a?u=[l]:u.push(l),n=c;var p=new o;return p.nodeName=e,p.children=u,p.attributes=null==t?void 0:t,p.key=null==t?void 0:t.key,void 0!==r.vnode&&r.vnode(p),p}function c(e,t){for(var n in t)e[n]=t[n];return e}var s="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;function u(e,t){return l(e.nodeName,c(c({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}var p=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,f=[];function d(e){!e._dirty&&(e._dirty=!0)&&1==f.push(e)&&(r.debounceRendering||s)(h)}function h(){var e,t=f;for(f=[];e=t.pop();)e._dirty&&L(e)}function m(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function b(e){var t=c({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function g(e){var t=e.parentNode;t&&t.removeChild(e)}function _(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===p.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,y,a):e.removeEventListener(t,y,a),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e){try{e[t]=null==o?"":o}catch(e){}null!=o&&!1!==o||"spellcheck"==t||e.removeAttribute(t)}else{var l=r&&t!==(t=t.replace(/^xlink:?/,""));null==o||!1===o?l?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(l?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function y(e){return this._listeners[e.type](r.event&&r.event(e)||e)}var v=[],w=0,k=!1,x=!1;function O(){for(var e;e=v.pop();)r.afterMount&&r.afterMount(e),e.componentDidMount&&e.componentDidMount()}function C(e,t,n,o,r,i){w++||(k=null!=r&&void 0!==r.ownerSVGElement,x=null!=e&&!("__preactattr_"in e));var a=j(e,t,n,o,i);return r&&a.parentNode!==r&&r.appendChild(a),--w||(x=!1,i||O()),a}function j(e,t,n,o,r){var i=e,a=k;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),P(e,!0))),i.__preactattr_=!0,i;var l,c,s=t.nodeName;if("function"==typeof s)return function(e,t,n,o){var r=e&&e._component,i=r,a=e,l=r&&e._componentConstructor===t.nodeName,c=l,s=b(t);for(;r&&!c&&(r=r._parentComponent);)c=r.constructor===t.nodeName;r&&c&&(!o||r._component)?(T(r,s,3,n,o),e=r.base):(i&&!l&&(D(i),e=a=null),r=E(t.nodeName,s,n),e&&!r.nextBase&&(r.nextBase=e,a=null),T(r,s,1,n,o),e=r.base,a&&e!==a&&(a._component=null,P(a,!1)));return e}(e,t,n,o);if(k="svg"===s||"foreignObject"!==s&&k,s=String(s),(!e||!m(e,s))&&(l=s,(c=k?document.createElementNS("http://www.w3.org/2000/svg",l):document.createElement(l)).normalizedNodeName=l,i=c,e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),P(e,!0)}var u=i.firstChild,p=i.__preactattr_,f=t.children;if(null==p){p=i.__preactattr_={};for(var d=i.attributes,h=d.length;h--;)p[d[h].name]=d[h].value}return!x&&f&&1===f.length&&"string"==typeof f[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=f[0]&&(u.nodeValue=f[0]):(f&&f.length||null!=u)&&function(e,t,n,o,r){var i,a,l,c,s,u=e.childNodes,p=[],f={},d=0,h=0,b=u.length,_=0,y=t?t.length:0;if(0!==b)for(var v=0;v<b;v++){var w=u[v],k=w.__preactattr_,x=y&&k?w._component?w._component.__key:k.key:null;null!=x?(d++,f[x]=w):(k||(void 0!==w.splitText?!r||w.nodeValue.trim():r))&&(p[_++]=w)}if(0!==y)for(var v=0;v<y;v++){c=t[v],s=null;var x=c.key;if(null!=x)d&&void 0!==f[x]&&(s=f[x],f[x]=void 0,d--);else if(h<_)for(i=h;i<_;i++)if(void 0!==p[i]&&(O=a=p[i],S=r,"string"==typeof(C=c)||"number"==typeof C?void 0!==O.splitText:"string"==typeof C.nodeName?!O._componentConstructor&&m(O,C.nodeName):S||O._componentConstructor===C.nodeName)){s=a,p[i]=void 0,i===_-1&&_--,i===h&&h++;break}s=j(s,c,n,o),l=u[v],s&&s!==e&&s!==l&&(null==l?e.appendChild(s):s===l.nextSibling?g(l):e.insertBefore(s,l))}var O,C,S;if(d)for(var v in f)void 0!==f[v]&&P(f[v],!1);for(;h<=_;)void 0!==(s=p[_--])&&P(s,!1)}(i,f,n,o,x||null!=p.dangerouslySetInnerHTML),function(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||_(e,o,n[o],n[o]=void 0,k);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||_(e,o,n[o],n[o]=t[o],k)}(i,t.attributes,p),k=a,i}function P(e,t){var n=e._component;n?D(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||g(e),S(e))}function S(e){for(e=e.lastChild;e;){var t=e.previousSibling;P(e,!0),e=t}}var N=[];function E(e,t,n){var o,r=N.length;for(e.prototype&&e.prototype.render?(o=new e(t,n),z.call(o,t,n)):((o=new z(t,n)).constructor=e,o.render=M);r--;)if(N[r].constructor===e)return o.nextBase=N[r].nextBase,N.splice(r,1),o;return o}function M(e,t,n){return this.constructor(e,n)}function T(e,t,n,o,i){e._disable||(e._disable=!0,e.__ref=t.ref,e.__key=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o)),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===r.syncComponentUpdates&&e.base?d(e):L(e,1,i)),e.__ref&&e.__ref(e))}function L(e,t,n,o){if(!e._disable){var i,a,l,s=e.props,u=e.state,p=e.context,f=e.prevProps||s,d=e.prevState||u,h=e.prevContext||p,m=e.base,g=e.nextBase,_=m||g,y=e._component,k=!1,x=h;if(e.constructor.getDerivedStateFromProps&&(u=c(c({},u),e.constructor.getDerivedStateFromProps(s,u)),e.state=u),m&&(e.props=f,e.state=d,e.context=h,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(s,u,p)?k=!0:e.componentWillUpdate&&e.componentWillUpdate(s,u,p),e.props=s,e.state=u,e.context=p),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!k){i=e.render(s,u,p),e.getChildContext&&(p=c(c({},p),e.getChildContext())),m&&e.getSnapshotBeforeUpdate&&(x=e.getSnapshotBeforeUpdate(f,d));var j,S,N=i&&i.nodeName;if("function"==typeof N){var M=b(i);(a=y)&&a.constructor===N&&M.key==a.__key?T(a,M,1,p,!1):(j=a,e._component=a=E(N,M,p),a.nextBase=a.nextBase||g,a._parentComponent=e,T(a,M,0,p,!1),L(a,1,n,!0)),S=a.base}else l=_,(j=y)&&(l=e._component=null),(_||1===t)&&(l&&(l._component=null),S=C(l,i,p,n||!m,_&&_.parentNode,!0));if(_&&S!==_&&a!==y){var z=_.parentNode;z&&S!==z&&(z.replaceChild(S,_),j||(_._component=null,P(_,!1)))}if(j&&D(j),e.base=S,S&&!o){for(var U=e,R=e;R=R._parentComponent;)(U=R).base=S;S._component=U,S._componentConstructor=U.constructor}}for(!m||n?v.unshift(e):k||(e.componentDidUpdate&&e.componentDidUpdate(f,d,x),r.afterUpdate&&r.afterUpdate(e));e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);w||o||O()}}function D(e){r.beforeUnmount&&r.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?D(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,g(t),N.push(e),S(t)),e.__ref&&e.__ref(null)}function z(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}function U(e,t,n){return C(n,e,{},!1,t,!1)}c(z.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=c(c({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),d(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),L(this,2)},render:function(){}});var R={h:l,createElement:l,cloneElement:u,Component:z,render:U,rerender:h,options:r};t.default=R},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ENTER_KEY_CODE=void 0;t.ENTER_KEY_CODE=13},function(e,t,n){"use strict";n(3);var o=n(0),r=n(5),i=n(7),a=n(9),l=n(11),c=u(n(13)),s=u(n(14));function u(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=document.getElementById("root"),y=function(e){function t(){var e,n,o,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l];return o=this,r=(e=h(t)).call.apply(e,[this].concat(a)),n=!r||"object"!==p(r)&&"function"!=typeof r?b(o):r,g(b(b(n)),"state",{dictionary:c.default,languages:["ru","en"],language:"ru",hands:f(c.default.ru.hands),hand:null,isLoaded:!1,coordinates:null,sprite:null}),g(b(b(n)),"fetchSprite",function(){fetch(s.default).then(function(e){return e.text()}).then(function(e){n.setState({sprite:e,isLoaded:!0})})}),g(b(b(n)),"handleChangeLanguage",function(e){n.setState({language:e.target.value,hands:f(c.default[e.target.value].hands)})}),g(b(b(n)),"handleClick",function(e,t){var o=n.state.hands,r=e.pageX,i=e.pageY,a=window,l=a.innerWidth,c=a.innerHeight,s={x:Math.round(r/l*100)||"50",y:Math.round(i/c*100)||"50"};n.setState({coordinates:s,hand:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){g(e,t,n[t])})}return e}({},o[t],{src:"#".concat(t+1)})})}),g(b(b(n)),"handleClose",function(){n.setState({coordinates:null,hand:null})}),n}var n,u,_;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,o.Component),n=t,(u=[{key:"componentDidMount",value:function(){this.fetchSprite()}},{key:"componentDidUpdate",value:function(){console.log("state is ",this.state)}},{key:"render",value:function(){var e=this.state,t=e.language,n=e.languages,c=e.hands,s=e.hand,u=e.isLoaded,p=e.dictionary,f=e.coordinates,d=e.sprite,h=p[t],m=h.title,b=h.text,g=h.error;return window.fetch?(0,o.h)("div",{className:"bg"},d&&(0,o.h)("span",{className:"hidden",dangerouslySetInnerHTML:{__html:d}}),(0,o.h)(l.Language,{language:t,languages:n,onChange:this.handleChangeLanguage}),(0,o.h)("h1",{className:"title"},m),(0,o.h)("p",{className:"subtitle"},b),u?(0,o.h)(r.Poker,{hands:c,onClick:this.handleClick}):(0,o.h)(i.Welcome,{language:t,languages:n}),(0,o.h)(a.Popup,{hand:s,coordinates:f,onClick:this.handleClose})):(0,o.h)("div",{className:"bg"},(0,o.h)("div",{className:"error"},(0,o.h)("span",{role:"img","aria-label":"error"},"❌️"),g))}}])&&d(n.prototype,u),_&&d(n,_),t}();(0,o.render)((0,o.h)(y,null),_)},function(e,t,n){(e.exports=n(4)(!1)).push([e.i,'body{width:100%;height:100%;font-family:Segoe UI,Helvetica,serif;color:#fff;-webkit-user-select:none;user-select:none;touch-action:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}*{margin:0;padding:0;box-sizing:border-box}.hidden{display:none}.bg{position:fixed;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-align-items:center;align-items:center;-webkit-justify-content:space-around;justify-content:space-around;width:100%;height:100%;text-align:center;background-image:radial-gradient(#367a42,#115c38)}.title{margin-top:2.5%;font-weight:700;text-transform:uppercase;line-height:1.2;color:#449953}.container{width:95%;margin-bottom:2%}.card__list{-webkit-flex-wrap:wrap;flex-wrap:wrap;height:100%}.card__item,.card__list{display:-webkit-flex;display:flex}.card__item{position:relative;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;align-items:center;text-align:center;cursor:pointer;outline:none}.card__item:active .card__title,.card__item:focus .card__title{background-image:linear-gradient(0deg,#347140,#249351)}.card__image{position:absolute;width:100%;pointer-events:none}.card__title{position:relative;margin-top:auto;padding-top:1.5vmin;padding-bottom:1.5vmin;font-weight:100;line-height:1;background-image:linear-gradient(180deg,#347140,#249351);-webkit-clip-path:polygon(90% 0,100% 50%,90% 100%,10% 100%,0 50%,10% 0);clip-path:polygon(90% 0,100% 50%,90% 100%,10% 100%,0 50%,10% 0);pointer-events:none}.error{max-width:90%;font-size:20px}.error [role=img]{display:block;margin-bottom:20px}.popup{position:fixed;display:-webkit-flex;display:flex;text-align:center;background-image:radial-gradient(#367a42,#115c38);border:2px solid #449953;border-radius:15px;-webkit-transform:scale(0);transform:scale(0)}.popup.\\--open{transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out;-webkit-transform:scale(1);transform:scale(1)}.popup__close{position:absolute;top:0;right:0;z-index:1;background-color:transparent;border:none;cursor:pointer;outline-color:#449953}.popup__close:active{-webkit-transform:scale(.9);transform:scale(.9)}.popup__close-inner{position:absolute;top:15%;left:15%;width:70%;height:70%;border:2px solid #449953;border-radius:50%}.popup__close:after,.popup__close:before{content:"";position:absolute;top:calc((100% - 2px)/2);left:30%;width:40%;height:2px;background-color:#449953}.popup__close:before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.popup__close:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.popup__image{position:relative}.popup__title{font-weight:400;color:#449953}.popup__desc{font-weight:100;font-style:italic;line-height:1}.preload{position:fixed;top:0;left:0;z-index:2;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;align-items:center;width:100%;height:100%;font-size:20px;font-weight:100;text-align:center;background-image:radial-gradient(#367a42,#115c38)}.preload__inner{width:80%}.preload__dot{display:inline-block;width:5vmin;height:5vmin;background-color:#fff;border-radius:50%;opacity:0;-webkit-animation:loading 1s infinite both;animation:loading 1s infinite both}.preload__dot:not(:last-of-type){margin-right:5vmin}.preload__dot:nth-of-type(3){-webkit-animation-delay:.66s;animation-delay:.66s}.preload__dot:nth-of-type(2){-webkit-animation-delay:.33s;animation-delay:.33s}.language{position:absolute;top:0;left:0;display:-webkit-flex;display:flex;-webkit-align-self:flex-start;align-self:flex-start;font-size:5.5vmin;background-color:#449953;border-radius:5px;border:1px solid #fff;-webkit-transform:translate3d(calc(-100% + 10vmin + 1px),0,0);transform:translate3d(calc(-100% + 10vmin + 1px),0,0);transition:-webkit-transform .5s ease-in-out;transition:transform .5s ease-in-out;transition:transform .5s ease-in-out,-webkit-transform .5s ease-in-out}.language.\\--open{-webkit-transform:translateZ(0);transform:translateZ(0)}.language__list{display:-webkit-flex;display:flex;-webkit-align-items:stretch;align-items:stretch}.language__item{position:relative;padding:0 10px;line-height:1.7;cursor:pointer;-webkit-user-select:none;user-select:none}.language__item:first-of-type{border-right:1px solid #fff}.language button{position:relative;width:10vmin;height:10vmin;background-color:transparent;border:none;border-left:1px solid #fff}.language .icon{position:absolute;top:10%;left:10%;width:80%;height:80%;border:.2vmin solid #fff;border-radius:50%;background-image:repeating-linear-gradient(180deg,transparent,transparent 24%,#fff 0,#fff 26%)}.language .icon:after,.language .icon:before{content:"";position:absolute;top:-1px;margin-left:-.1vmin;height:100%}.language .icon:after{left:50%;width:0;border:.1vmin solid #fff}.language .icon:before{left:25%;width:50%;border:.2vmin solid #fff;border-radius:50%}.language input{display:none}.language input:checked~span{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;background-color:#115c38}@media screen and (orientation:portrait){.title{font-size:5.5vmin}.subtitle{font-size:3vmin}.container{height:82%}.card__item{width:50%}.card__image{top:5%;height:90%}.card__title{width:60%;font-size:3.5vmin}.popup{top:1.5%;left:2.5%;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;align-items:center;width:95%;height:97%}.popup__close{width:10vh;height:10vh}.popup__image{width:100%;height:50%}.popup__title{font-size:12vmin}.popup__desc{width:90%;font-size:7vmin}}@media screen and (orientation:landscape){.title{font-size:7vmin}.subtitle{font-size:3.8vmin}.container{height:70%}.card__item{width:20%}.card__image{height:70%}.card__title{width:90%;font-size:3vmin}.popup{top:2.5%;left:1.5%;-webkit-align-items:center;align-items:center;width:97%;height:95%}.popup__close{width:15vh;height:15vh}.popup__image{-webkit-flex-grow:1;flex-grow:1;-webkit-flex-shrink:0;flex-shrink:0;width:60%;height:100%}.popup__title{margin-top:-20%;margin-right:9.5%;font-size:7vmin}.popup__desc,.popup__title{-webkit-flex-grow:1;flex-grow:1;-webkit-flex-shrink:0;flex-shrink:0;width:40%}.popup__desc{margin-top:20%;margin-left:-50%;padding-right:5%;padding-left:5%;font-size:5vmin}}@-webkit-keyframes loading{0%{opacity:1}to{opacity:.5}}',""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[n].concat(i).concat([r]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Poker",{enumerable:!0,get:function(){return o.Poker}});var o=n(6)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Poker=void 0;var o=n(0),r=n(1);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=function(e){function t(){var e,n,o,a,c,u,p;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var f=arguments.length,d=new Array(f),h=0;h<f;h++)d[h]=arguments[h];return o=this,a=(e=l(t)).call.apply(e,[this].concat(d)),n=!a||"object"!==i(a)&&"function"!=typeof a?s(o):a,c=s(s(n)),p=function(e,t){var o=e.keyCode,i=n.props.onClick;o===r.ENTER_KEY_CODE&&(e.preventDefault(),i(e,t))},(u="handleKeyDown")in c?Object.defineProperty(c,u,{value:p,enumerable:!0,configurable:!0,writable:!0}):c[u]=p,n}var n,u,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,o.Component),n=t,(u=[{key:"render",value:function(){var e=this,t=this.props,n=t.hands,r=t.onClick;return(0,o.h)("div",{className:"container"},(0,o.h)("div",{className:"card__list"},n.map(function(t,n){var i=t.name;return(0,o.h)("div",{className:"card__item",tabIndex:"0",role:"button",onClick:function(e){return r(e,n)},onKeyDown:function(t){return e.handleKeyDown(t,n)}},(0,o.h)("svg",{className:"card__image"},(0,o.h)("use",{xlinkHref:"#".concat(n+1)})),(0,o.h)("span",{className:"card__title"},i))})))}}])&&a(n.prototype,u),p&&a(n,p),t}();t.Poker=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Welcome",{enumerable:!0,get:function(){return o.Welcome}});var o=n(8)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Welcome=void 0;var o=n(0);t.Welcome=function(){return(0,o.h)("div",{className:"preload"},(0,o.h)("div",{className:"preload__inner"},(0,o.h)("div",{className:"preload__dot"}),(0,o.h)("div",{className:"preload__dot"}),(0,o.h)("div",{className:"preload__dot"})))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Popup",{enumerable:!0,get:function(){return o.Popup}});var o=n(10)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Popup=void 0;var o=n(0),r=n(1);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=function(e){function t(){var e,n,o,a,c,u,p;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var f=arguments.length,d=new Array(f),h=0;h<f;h++)d[h]=arguments[h];return o=this,a=(e=l(t)).call.apply(e,[this].concat(d)),n=!a||"object"!==i(a)&&"function"!=typeof a?s(o):a,c=s(s(n)),p=function(e){var t=e.keyCode,o=n.props.onClick;t===r.ENTER_KEY_CODE&&(e.preventDefault(),o())},(u="handleKeyDown")in c?Object.defineProperty(c,u,{value:p,enumerable:!0,configurable:!0,writable:!0}):c[u]=p,n}var n,u,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,o.Component),n=t,(u=[{key:"render",value:function(){var e=this.props,t=e.hand,n=e.coordinates,r=e.onClick,i=t||{},a=i.name,l=i.description,c=i.src,s=n||{},u=s.x,p=s.y,f="".concat(u,"% ").concat(p,"% 0");return(0,o.h)("div",{className:"popup ".concat(null!==n?"--open":""),role:"dialog","aria-modal":"true","aria-labelledby":"dialog__label",style:{transformOrigin:f}},(0,o.h)("button",{className:"popup__close",type:"button","aria-label":"Закрыть",onClick:r,onKeyDown:this.handleKeyDown},(0,o.h)("span",{className:"popup__close-inner"})),(0,o.h)("svg",{className:"popup__image"},(0,o.h)("use",{xlinkHref:c})),(0,o.h)("h2",{className:"popup__title",id:"dialog__label"},a),(0,o.h)("p",{className:"popup__desc"},l))}}])&&a(n.prototype,u),p&&a(n,p),t}();t.Popup=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Language",{enumerable:!0,get:function(){return o.Language}});var o=n(12)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Language=void 0;var o=n(0);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(e){function t(){var e,n,o,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,u=new Array(l),p=0;p<l;p++)u[p]=arguments[p];return o=this,i=(e=a(t)).call.apply(e,[this].concat(u)),n=!i||"object"!==r(i)&&"function"!=typeof i?c(o):i,s(c(c(n)),"state",{isOpen:!1}),s(c(c(n)),"handleClick",function(){var e=n.state.isOpen;n.setState({isOpen:!e})}),n}var n,u,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,o.Component),n=t,(u=[{key:"render",value:function(){var e=this,t=this.state.isOpen,n=this.props,r=n.language,i=n.languages,a=n.onChange;return(0,o.h)("div",{className:"language ".concat(t?"--open":"")},(0,o.h)("div",{className:"language__list"},i.map(function(t){return(0,o.h)("label",{className:"language__item",htmlFor:t},(0,o.h)("input",{id:t,type:"radio",name:"language",value:t,checked:t===r,onChange:function(t){a(t),e.handleClick()}}),(0,o.h)("span",null),t)})),(0,o.h)("button",{type:"button",onClick:this.handleClick},(0,o.h)("span",{className:"icon"})))}}])&&i(n.prototype,u),p&&i(n,p),t}();t.Language=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={ru:{title:"Покерные комбинации",text:"Нажмите, чтобы узнать подробнее о каждой комбинации",error:"Пожалуйста, используйте более современный браузер",hands:[{name:"Роял-флэш",description:"5 старших карт одной масти"},{name:"Стрит-флеш",description:"любые 5 карт одной масти по порядку"},{name:"Каре",description:"4 карты одного достоинства"},{name:"Фулл-хаус",description:"одна тройка и одна пара"},{name:"Флеш",description:"5 карт одной масти"},{name:"Стрит",description:"5 карт по порядку любых мастей"},{name:"Тройка",description:"3 карты одного достоинства"},{name:"Две пары",description:"две пары карт одного достоинства"},{name:"Пара",description:"две карты одного достоинства"},{name:"Старшая карта",description:"ни одна из вышеописанных комбинаций"}]},en:{title:"Poker hands",text:"Click to learn more about combination",error:"Please, use one of modern browsers",hands:[{name:"Royal flush",description:"5 high cards of one suit"},{name:"Straight flush",description:"any 5 cards of one suit in row"},{name:"Four of a kind",description:"4 cards of one quality"},{name:"Full house",description:"Three of a kind & one pair"},{name:"Flush",description:"5 cards of one suit"},{name:"Straight",description:"5 cards of any suits"},{name:"Three of a kind",description:"3 cards of one quality"},{name:"Two pairs",description:"2 card pairs of one quality"},{name:"One pair",description:"2 cards of one quality"},{name:"High card",description:"none of combinations"}]}};t.default=o},function(e,t,n){e.exports=n.p+"sprite.svg"}]);