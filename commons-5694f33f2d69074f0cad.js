(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+VNo":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"3nLz":function(e,t,r){"use strict";r("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"8+s/":function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}r("sc67"),r("AqHK"),r("pJf4"),r("pS08"),r("R48M");var a=r("q1tI"),i=n(a),o=n(r("Gytx"));function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function f(){c=e(l.map((function(e){return e.props}))),d.canUseDOM?t(c):r&&(c=r(c))}var d=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var s=a.prototype;return s.shouldComponentUpdate=function(e){return!o(e,this.props)},s.componentWillMount=function(){l.push(this),f()},s.componentDidUpdate=function(){f()},s.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),f()},s.render=function(){return i.createElement(n,this.props)},a}(a.Component);return s(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),s(d,"canUseDOM",u),d}}},"9eSz":function(e,t,r){"use strict";r("rzGZ"),r("Dq+y"),r("8npG"),r("YbXK"),r("eMsz"),r("zTTH"),r("3nLz");var n=r("TqRt");t.__esModule=!0,t.default=void 0;var a,i=n(r("PJYZ")),o=n(r("VbXa")),s=n(r("8OQS")),u=n(r("pVnL")),c=n(r("q1tI")),l=n(r("17x9")),f=function(e){var t=(0,u.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},d=function(e){var t=e.media;return!!t&&(m&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed;return T(t||r).src},T=function(e){if(m&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(d);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},h=Object.create({}),E=function(e){var t=f(e),r=p(t);return h[r]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,A=m&&window.IntersectionObserver,S=new WeakMap;function y(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:i}),c.default.createElement("source",{media:a,srcSet:r,sizes:i}))}))}function v(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function b(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function _(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function R(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var I=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),S.set(e,t)),function(){r.unobserve(e),S.delete(e)}},P=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",u=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",l=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+c+o+s+r+n+t+i+a+u+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=c.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,a=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=c.default.createElement(N,(0,u.default)({ref:t,src:r},i,{ariaHidden:o}));return n.length>1?c.default.createElement("picture",null,a(n),s):s})),N=c.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,i=e.style,o=e.onLoad,l=e.onError,f=e.loading,d=e.draggable,p=e.ariaHidden,T=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,u.default)({"aria-hidden":p,sizes:r,srcSet:n,src:a},T,{onLoad:o,onError:l,ref:t,loading:f,draggable:d,style:(0,u.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));N.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var w=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=m&&E(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!g&&A&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||m&&(g||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=c.default.createRef(),r.placeholderRef=t.placeholderRef||c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:E(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=E(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=f(e),r=p(t),h[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=f(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,s=void 0===o?{}:o,l=e.placeholderStyle,d=void 0===l?{}:l,p=e.placeholderClassName,h=e.fluid,E=e.fixed,g=e.backgroundColor,m=e.durationFadeIn,A=e.Tag,S=e.itemProp,v=e.loading,R=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,w=!0===this.state.fadeIn&&!this.state.imgCached,M=(0,u.default)({opacity:I?1:0,transition:w?"opacity "+m+"ms":"none"},s),C="boolean"==typeof g?"lightgray":g,L={transitionDelay:m+"ms"},G=(0,u.default)({opacity:this.state.imgLoaded?0:1},w&&L,s,d),H={title:t,alt:this.state.isVisible?"":r,style:G,className:p,itemProp:S};if(h){var x=h,j=T(h);return c.default.createElement(A,{className:(n||"")+" gatsby-image-wrapper",style:(0,u.default)({position:"relative",overflow:"hidden",maxWidth:j.maxWidth?j.maxWidth+"px":null,maxHeight:j.maxHeight?j.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},c.default.createElement(A,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),C&&c.default.createElement(A,{"aria-hidden":!0,title:t,style:(0,u.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},w&&L)}),j.base64&&c.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:H,imageVariants:x,generateSources:_}),j.tracedSVG&&c.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:H,imageVariants:x,generateSources:b}),this.state.isVisible&&c.default.createElement("picture",null,y(x),c.default.createElement(N,{alt:r,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:v,draggable:R})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:P((0,u.default)({alt:r,title:t,loading:v},j,{imageVariants:x}))}}))}if(E){var k=E,q=T(E),U=(0,u.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},i);return"inherit"===i.display&&delete U.display,c.default.createElement(A,{className:(n||"")+" gatsby-image-wrapper",style:U,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},C&&c.default.createElement(A,{"aria-hidden":!0,title:t,style:(0,u.default)({backgroundColor:C,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},w&&L)}),q.base64&&c.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:H,imageVariants:k,generateSources:_}),q.tracedSVG&&c.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:H,imageVariants:k,generateSources:b}),this.state.isVisible&&c.default.createElement("picture",null,y(k),c.default.createElement(N,{alt:r,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:v,draggable:R})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:P((0,u.default)({alt:r,title:t,loading:v},q,{imageVariants:k}))}}))}return null},t}(c.default.Component);w.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var M=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),C=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string,maxWidth:l.default.number,maxHeight:l.default.number});w.propTypes={resolutions:M,sizes:C,fixed:l.default.oneOfType([M,l.default.arrayOf(M)]),fluid:l.default.oneOfType([C,l.default.arrayOf(C)]),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var L=w;t.default=L},Bl7J:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),i=r("Wbzz"),o=(r("Dm0Y"),function(e){var t=e.children;return a.a.createElement("div",{style:{maxWidth:1180,margin:"0 auto"}},t)}),s=r("T78C"),u=r.n(s),c=function(){return a.a.createElement("nav",{role:"navigation"},a.a.createElement("ul",{className:u.a.navigation},a.a.createElement("div",{className:u.a.column},a.a.createElement("li",{className:u.a.navigationItem},a.a.createElement(i.a,{to:"/"},"Paul Ivanov"))),a.a.createElement("div",{className:u.a.column},a.a.createElement("li",{className:u.a.navigationItem},a.a.createElement(i.a,{to:"/"},"Home")),a.a.createElement("li",{className:u.a.navigationItem},a.a.createElement(i.a,{to:"/"},"About")),a.a.createElement("li",{className:u.a.navigationItem},a.a.createElement(i.a,{to:"/blog/"},"Blog")))))};t.a=function(e){e.location;var t=e.children;return"undefined"!=typeof __PREFIX_PATHS__&&__PREFIX_PATHS__&&"/gatsby-contentful-starter/",a.a.createElement(o,null,a.a.createElement(c,null),t)}},C9fy:function(e,t,r){var n=Date.prototype,a=n.toString,i=n.getTime;new Date(NaN)+""!="Invalid Date"&&r("IYdN")(n,"toString",(function(){var e=i.call(this);return e==e?a.call(this):"Invalid Date"}))},Dm0Y:function(e,t,r){},"EU/P":function(e,t,r){var n=r("P8UN"),a=r("ap2Z"),i=r("96qb"),o=r("+VNo"),s="["+o+"]",u=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),l=function(e,t,r){var a={},s=i((function(){return!!o[e]()||"​"!="​"[e]()})),u=a[e]=s?t(f):o[e];r&&(a[r]=u),n(n.P+n.F*s,"String",a)},f=l.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(c,"")),e};e.exports=l},Gytx:function(e,t,r){r("n7j8"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),e.exports=function(e,t,r,n){var a=r?r.call(n,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),u=0;u<i.length;u++){var c=i[u];if(!s(c))return!1;var l=e[c],f=t[c];if(!1===(a=r?r.call(n,l,f,c):void 0)||void 0===a&&l!==f)return!1}return!0}},R48M:function(e,t,r){var n=r("P8UN");n(n.S+n.F*!r("QPJK"),"Object",{defineProperty:r("rjfK").f})},SGlo:function(e,t,r){"use strict";var n=r("rj/q"),a=r("N+BI").getWeak,i=r("1a8y"),o=r("BjK0"),s=r("xa9o"),u=r("yde8"),c=r("Wadk"),l=r("qDzq"),f=r("O1i0"),d=c(5),p=c(6),T=0,h=function(e){return e._l||(e._l=new E)},E=function(){this.a=[]},g=function(e,t){return d(e.a,(function(e){return e[0]===t}))};E.prototype={get:function(e){var t=g(this,e);if(t)return t[1]},has:function(e){return!!g(this,e)},set:function(e,t){var r=g(this,e);r?r[1]=t:this.a.push([e,t])},delete:function(e){var t=p(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,r,i){var c=e((function(e,n){s(e,c,t,"_i"),e._t=t,e._i=T++,e._l=void 0,null!=n&&u(n,r,e[i],e)}));return n(c.prototype,{delete:function(e){if(!o(e))return!1;var r=a(e);return!0===r?h(f(this,t)).delete(e):r&&l(r,this._i)&&delete r[this._i]},has:function(e){if(!o(e))return!1;var r=a(e);return!0===r?h(f(this,t)).has(e):r&&l(r,this._i)}}),c},def:function(e,t,r){var n=a(i(t),!0);return!0===n?h(e).set(t,r):n[e._i]=r,e},ufstore:h}},T78C:function(e,t,r){e.exports={navigation:"navigation-module--navigation--1ZdF3",column:"navigation-module--column--1OGOp",navigationItem:"navigation-module--navigationItem--3T1mO"}},TJpk:function(e,t,r){r("MIFh"),r("wZFJ"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),r("JHok"),r("LagC"),r("pS08"),r("sc67"),r("R48M"),r("E5k/"),t.__esModule=!0,t.Helmet=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=f(r("q1tI")),o=f(r("17x9")),s=f(r("8+s/")),u=f(r("bmMU")),c=r("v1p5"),l=r("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h,E,g,m=(0,s.default)(c.reducePropsToState,c.handleClientStateChange,c.mapStateOnServer)((function(){return null})),A=(h=m,g=E=function(e){function t(){return p(this,t),T(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,u.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case l.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,a=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return n({},a,((t={})[r.type]=[].concat(a[r.type]||[],[n({},i,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,a=e.child,i=e.newProps,o=e.newChildProps,s=e.nestedChildren;switch(a.type){case l.TAG_NAMES.TITLE:return n({},i,((t={})[a.type]=s,t.titleAttributes=n({},o),t));case l.TAG_NAMES.BODY:return n({},i,{bodyAttributes:n({},o)});case l.TAG_NAMES.HTML:return n({},i,{htmlAttributes:n({},o)})}return n({},i,((r={})[a.type]=n({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=n({},t);return Object.keys(e).forEach((function(t){var a;r=n({},r,((a={})[t]=e[t],a))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=d(a,["children"]),s=(0,c.convertReactPropstoHtmlAttributes)(o);switch(r.warnOnInvalidChildren(e,i),e.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:s,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:s,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=d(e,["children"]),a=n({},r);return t&&(a=this.mapChildrenToProps(t,a)),i.default.createElement(h,a)},a(t,null,[{key:"canUseDOM",set:function(e){h.canUseDOM=e}}]),t}(i.default.Component),E.propTypes={base:o.default.object,bodyAttributes:o.default.object,children:o.default.oneOfType([o.default.arrayOf(o.default.node),o.default.node]),defaultTitle:o.default.string,defer:o.default.bool,encodeSpecialCharacters:o.default.bool,htmlAttributes:o.default.object,link:o.default.arrayOf(o.default.object),meta:o.default.arrayOf(o.default.object),noscript:o.default.arrayOf(o.default.object),onChangeClientState:o.default.func,script:o.default.arrayOf(o.default.object),style:o.default.arrayOf(o.default.object),title:o.default.string,titleAttributes:o.default.object,titleTemplate:o.default.string},E.defaultProps={defer:!0,encodeSpecialCharacters:!0},E.peek=h.peek,E.rewind=function(){var e=h.rewind();return e||(e=(0,c.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},g);A.renderStatic=A.rewind,t.Helmet=A,t.default=A},Wbzz:function(e,t,r){"use strict";r("YBKJ");var n=r("q1tI"),a=r.n(n),i=r("17x9"),o=r.n(i),s=r("+ZDr"),u=r.n(s);r.d(t,"a",(function(){return u.a}));r("lw3w"),r("emEt").default.enqueue,a.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},YBKJ:function(e,t,r){"use strict";var n=r("emib"),a=r("qDzq"),i=r("CCE/"),o=r("TUPI"),s=r("kxs/"),u=r("96qb"),c=r("chL8").f,l=r("Drra").f,f=r("rjfK").f,d=r("EU/P").trim,p=n.Number,T=p,h=p.prototype,E="Number"==i(r("nsRs")(h)),g="trim"in String.prototype,m=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){var r,n,a,i=(t=g?t.trim():d(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+t}for(var o,u=t.slice(2),c=0,l=u.length;c<l;c++)if((o=u.charCodeAt(c))<48||o>a)return NaN;return parseInt(u,n)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof p&&(E?u((function(){h.valueOf.call(r)})):"Number"!=i(r))?o(new T(m(t)),r,p):m(t)};for(var A,S=r("QPJK")?c(T):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;S.length>y;y++)a(T,A=S[y])&&!a(p,A)&&f(p,A,l(T,A));p.prototype=h,h.constructor=p,r("IYdN")(n,"Number",p)}},bmMU:function(e,t,r){"use strict";r("pJf4"),r("Ll4R"),r("q8oJ"),r("C9fy"),r("klQ5"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),r("MIFh");var n=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var s,u,c,l=n(t),f=n(r);if(l&&f){if((u=t.length)!=r.length)return!1;for(s=u;0!=s--;)if(!e(t[s],r[s]))return!1;return!0}if(l!=f)return!1;var d=t instanceof Date,p=r instanceof Date;if(d!=p)return!1;if(d&&p)return t.getTime()==r.getTime();var T=t instanceof RegExp,h=r instanceof RegExp;if(T!=h)return!1;if(T&&h)return t.toString()==r.toString();var E=a(t);if((u=E.length)!==a(r).length)return!1;for(s=u;0!=s--;)if(!i.call(r,E[s]))return!1;if(o&&t instanceof Element&&r instanceof Element)return t===r;for(s=u;0!=s--;)if(!("_owner"===(c=E[s])&&t.$$typeof||e(t[c],r[c])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},eMsz:function(e,t,r){"use strict";var n,a=r("emib"),i=r("Wadk")(0),o=r("IYdN"),s=r("N+BI"),u=r("k5Iv"),c=r("SGlo"),l=r("BjK0"),f=r("O1i0"),d=r("O1i0"),p=!a.ActiveXObject&&"ActiveXObject"in a,T=s.getWeak,h=Object.isExtensible,E=c.ufstore,g=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},m={get:function(e){if(l(e)){var t=T(e);return!0===t?E(f(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return c.def(f(this,"WeakMap"),e,t)}},A=e.exports=r("94Pd")("WeakMap",g,m,c,!0,!0);d&&p&&(u((n=c.getConstructor(g,"WeakMap")).prototype,m),s.NEED=!0,i(["delete","has","get","set"],(function(e){var t=A.prototype,r=t[e];o(t,e,(function(t,a){if(l(t)&&!h(t)){this._f||(this._f=new n);var i=this._f[e](t,a);return"set"==e?this:i}return r.call(this,t,a)}))})))},"hFT/":function(e,t,r){r("U6Bt"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),r("AqHK"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},klQ5:function(e,t,r){var n=r("emib"),a=r("TUPI"),i=r("rjfK").f,o=r("chL8").f,s=r("mhTz"),u=r("lb9j"),c=n.RegExp,l=c,f=c.prototype,d=/a/g,p=/a/g,T=new c(d)!==d;if(r("QPJK")&&(!T||r("96qb")((function(){return p[r("sOol")("match")]=!1,c(d)!=d||c(p)==p||"/a/i"!=c(d,"i")})))){c=function(e,t){var r=this instanceof c,n=s(e),i=void 0===t;return!r&&n&&e.constructor===c&&i?e:a(T?new l(n&&!i?e.source:e,t):l((n=e instanceof c)?e.source:e,n&&i?u.call(e):t),r?this:f,c)};for(var h=function(e){e in c||i(c,e,{configurable:!0,get:function(){return l[e]},set:function(t){l[e]=t}})},E=o(l),g=0;E.length>g;)h(E[g++]);f.constructor=c,c.prototype=f,r("IYdN")(n,"RegExp",c)}r("to/b")("RegExp")},lw3w:function(e,t,r){var n;e.exports=(n=r("rzlk"))&&n.default||n},rzlk:function(e,t,r){"use strict";r.r(t);r("E5k/");var n=r("q1tI"),a=r.n(n),i=r("17x9"),o=r.n(i),s=r("IOVJ"),u=function(e){var t=e.location,r=e.pageResources;return r?a.a.createElement(s.a,Object.assign({location:t,pageResources:r},r.json)):null};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},"t+fG":function(e,t,r){var n=r("P8UN"),a=r("96qb"),i=r("ap2Z"),o=/"/g,s=function(e,t,r,n){var a=String(i(e)),s="<"+t;return""!==r&&(s+=" "+r+'="'+String(n).replace(o,"&quot;")+'"'),s+">"+a+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(s),n(n.P+n.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},v1p5:function(e,t,r){(function(e){r("wZFJ"),r("HQhv"),r("1dPr"),r("JHok"),r("MIFh"),r("sc67"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),r("OeI1"),r("AqHK"),r("U6Bt"),r("sC2a"),r("E5k/"),r("m210"),r("4DPX"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=u(r("q1tI")),o=u(r("MgzW")),s=r("hFT/");function u(e){return e&&e.__esModule?e:{default:e}}var c,l=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=E(e,s.TAG_NAMES.TITLE),r=E(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,(function(){return t}));var n=E(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},d=function(e){return E(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},T=function(e,t){return t.filter((function(e){return void 0!==e[s.TAG_NAMES.BASE]})).map((function(e){return e[s.TAG_NAMES.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},h=function(e,t,r){var a={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&y("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var n={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var u=i[o],c=u.toLowerCase();-1===t.indexOf(c)||r===s.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||c===s.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(u)||u!==s.TAG_PROPERTIES.INNER_HTML&&u!==s.TAG_PROPERTIES.CSS_TEXT&&u!==s.TAG_PROPERTIES.ITEM_PROP||(r=u)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return a[r]||(a[r]={}),n[r]||(n[r]={}),!a[r][l]&&(n[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(n),u=0;u<i.length;u++){var c=i[u],l=(0,o.default)({},a[c],n[c]);a[c]=l}return e}),[]).reverse()},E=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},g=(c=Date.now(),function(e){var t=Date.now();t-c>16?(c=t,e(t)):setTimeout((function(){g(e)}),0)}),m=function(e){return clearTimeout(e)},A="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||g:e.requestAnimationFrame||g,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||m:e.cancelAnimationFrame||m,y=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},v=null,b=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,f=e.styleTags,d=e.title,p=e.titleAttributes;I(s.TAG_NAMES.BODY,n),I(s.TAG_NAMES.HTML,a),R(d,p);var T={baseTag:P(s.TAG_NAMES.BASE,r),linkTags:P(s.TAG_NAMES.LINK,i),metaTags:P(s.TAG_NAMES.META,o),noscriptTags:P(s.TAG_NAMES.NOSCRIPT,u),scriptTags:P(s.TAG_NAMES.SCRIPT,l),styleTags:P(s.TAG_NAMES.STYLE,f)},h={},E={};Object.keys(T).forEach((function(e){var t=T[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(E[e]=T[e].oldTags)})),t&&t(),c(e,h,E)},_=function(e){return Array.isArray(e)?e.join(""):e},R=function(e,t){void 0!==e&&document.title!==e&&(document.title=_(e)),I(s.TAG_NAMES.TITLE,t)},I=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(s.HELMET_ATTRIBUTE),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),u=0;u<o.length;u++){var c=o[u],l=t[c]||"";r.getAttribute(c)!==l&&r.setAttribute(c,l),-1===a.indexOf(c)&&a.push(c);var f=i.indexOf(c);-1!==f&&i.splice(f,1)}for(var d=i.length-1;d>=0;d--)r.removeAttribute(i[d]);a.length===i.length?r.removeAttribute(s.HELMET_ATTRIBUTE):r.getAttribute(s.HELMET_ATTRIBUTE)!==o.join(",")&&r.setAttribute(s.HELMET_ATTRIBUTE,o.join(","))}},P=function(e,t){var r=document.head||document.querySelector(s.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===s.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===s.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[n]?"":t[n];r.setAttribute(n,u)}r.setAttribute(s.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},O=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[s.REACT_TAG_MAP[r]||r]=e[r],t}),t)},w=function(e,t,r){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[s.HELMET_ATTRIBUTE]=!0,a=N(r,n),[i.default.createElement(s.TAG_NAMES.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=O(r),i=_(t);return a?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+a+">"+l(i,n)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+l(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return N(t)},toString:function(){return O(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[s.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach((function(e){var r=s.REACT_TAG_MAP[e]||e;if(r===s.TAG_PROPERTIES.INNER_HTML||r===s.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),i.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+l(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===s.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[s.HTML_TAG_MAP[r]||r]=e[r],t}),t)},t.handleClientStateChange=function(e){v&&S(v),e.defer?v=A((function(){b(e,(function(){v=null}))})):(b(e),v=null)},t.mapStateOnServer=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,u=e.noscriptTags,c=e.scriptTags,l=e.styleTags,f=e.title,d=void 0===f?"":f,p=e.titleAttributes;return{base:w(s.TAG_NAMES.BASE,t,n),bodyAttributes:w(s.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:w(s.ATTRIBUTE_NAMES.HTML,a,n),link:w(s.TAG_NAMES.LINK,i,n),meta:w(s.TAG_NAMES.META,o,n),noscript:w(s.TAG_NAMES.NOSCRIPT,u,n),script:w(s.TAG_NAMES.SCRIPT,c,n),style:w(s.TAG_NAMES.STYLE,l,n),title:w(s.TAG_NAMES.TITLE,{title:d,titleAttributes:p},n)}},t.reducePropsToState=function(e){return{baseTag:T([s.TAG_PROPERTIES.HREF],e),bodyAttributes:p(s.ATTRIBUTE_NAMES.BODY,e),defer:E(e,s.HELMET_PROPS.DEFER),encode:E(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(s.ATTRIBUTE_NAMES.HTML,e),linkTags:h(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:h(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:h(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:d(e),scriptTags:h(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:h(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:p(s.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=A,t.warn=y}).call(this,r("yLpj"))},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}e.exports=r},zTTH:function(e,t,r){"use strict";var n=r("P8UN"),a=r("Wadk")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),n(n.P+n.F*o,"Array",{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),r("Dq1/")(i)}}]);
//# sourceMappingURL=commons-5694f33f2d69074f0cad.js.map