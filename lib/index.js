!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["react","prop-types"],t):"object"==typeof exports?exports.CodeHighlight=t(require("react"),require("prop-types")):e.CodeHighlight=t(e.react,e["prop-types"])}(this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),p=r(1),f=n(p),d=r(2),h=n(d),b=function(e){function t(e){i(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.schemaDisplay=r.schemaDisplay.bind(r),r.formBuilder=r.formBuilder.bind(r),r.onChange=r.onChange.bind(r),r.onSubmit=r.onSubmit.bind(r),r.getNestingString=r.getNestingString.bind(r),r.recursiveNestingString=r.recursiveNestingString.bind(r),r.propertyByString=r.propertyByString.bind(r),r.checkValidation=r.checkValidation.bind(r),r.fieldLabelCleanup=r.fieldLabelCleanup.bind(r),r.cleanObjectProperties=r.cleanObjectProperties.bind(r),r.fieldTagCleanup=r.fieldTagCleanup.bind(r),r}return s(t,e),c(t,[{key:"cleanObjectProperties",value:function(e){var t={};for(var r in e)"object"===u(e[r])?0!==Object.keys(e[r]).length&&(t[this.fieldTagCleanup(r)]=this.cleanObjectProperties(e[r])):t[this.fieldTagCleanup(r)]=e[r];return t}},{key:"schemaDisplay",value:function(e){var t=this,r=Object.getOwnPropertyNames(e);return r=r.map(function(r){return e[r]instanceof Object?[r].concat(a(t.schemaDisplay(e[r]))):r})}},{key:"formBuilder",value:function(e){var t=this;return console.log(e),f.default.createElement("ul",{className:"dbtool-unorderedList"},e.map(function(e){return Array.isArray(e)?f.default.createElement("div",null,f.default.createElement("li",l({className:"dbtool-nestedHeader"},t.checkValidation(e[0])),f.default.createElement("strong",null," ",t.fieldLabelCleanup(e[0])," ")),t.formBuilder(e.slice(1))):f.default.createElement("li",l({className:"dbtool-listItemWithInput"},t.checkValidation(e)),f.default.createElement("strong",null," ",t.fieldLabelCleanup(e),": "),f.default.createElement("input",l({className:"dbtool-input",onChange:t.onChange},t.checkValidation(e))))}))}},{key:"onChange",value:function(e){this.propertyByString(this.props.inSchema,this.getNestingString(e.target.id),e.target.value)}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var r=this.cleanObjectProperties(this.props.inSchema);this.props.createUser&&(r.email=r.email.toLowerCase(),this.props.firebaseObj.auth().createUserWithEmailAndPassword(r.email,r.password).then(function(e){})),this.setState({password:"",createdAt:Date()}),r.password&&delete r.password,r.createdAt=Date(),this.props.firebaseObj.database().ref("/"+this.props.branch+"/").push(r).then(function(e){t.setState({key:e.key}),t.props.createUser?t.props.firebaseObj.database().ref("/"+t.props.branch+"/"+e.key+"/userRights_key").once("value").then(function(e){t.props.firebaseObj.database().ref("/userRights/"+e.val()).once("value").then(function(e){"teacher"===e.val().name&&t.props.firebaseObj.database().ref("/activeTeachers/"+t.state.key).set("keyRef"),"parent"===e.val().name&&t.props.firebaseObj.database().ref("/activeParents/"+t.state.key).set("keyRef")})}):t.props.firebaseObj.database().ref("/"+t.props.branch+"/").push(r).then(function(e){})}),e.target.reset(),this.props.modalShutFunct&&this.props.modalShutFunct()}},{key:"getNestingString",value:function(e){for(var t=this.schemaDisplay(this.props.inSchema),r="",n=0;n<t.length;n++)if(Array.isArray(t[n])){var a=this.recursiveNestingString(t[n],e);a.length>0&&(r=t[n][0]+"."+a)}else t[n]===e&&(r=""+t[n]);return r}},{key:"recursiveNestingString",value:function(e,t){for(var r=0;r<e.length;r++)if(Array.isArray(e[r])){var n=this.recursiveNestingString(e[r],t);if(n.length>0)return e[r][0]+"."+n}else if(e[r]===t)return""+e[r];return""}},{key:"propertyByString",value:function(e,t,r){"string"==typeof t&&(t=t.split(".")),t.length>1?this.propertyByString(e[t.shift()],t,r):e[t[0]]=r}},{key:"checkValidation",value:function(e){var t={};if("_r"===e.slice(-2))switch(t.required="true",e.slice(-4,-2)){case"_e":t.type="email",t.id=e;break;default:t.id=e}else switch(e.slice(-2)){case"_e":t.type="email",t.id=e;break;case"_i":t.style={display:"none"};break;default:t.id=e}return t.id&&(t.placeholder="Enter "+this.fieldLabelCleanup(t.id)),t}},{key:"fieldTagCleanup",value:function(e){return"_r"===e.slice(-2)&&(e=e.slice(0,-2)),"_"===e.slice(-2,-1)&&(e=e.slice(0,-2)),e}},{key:"fieldLabelCleanup",value:function(e){var t;e=this.fieldTagCleanup(e),t=e,t=t.split(""),t[0]=t[0].toUpperCase();var r=[],n="";return t.map(function(e){return e===e.toLowerCase()&&(n=e,r.push(e)),e===e.toUpperCase()&&""!==n?(r.push(" "),r.push(e)):""===n&&r.push(e),null}),r=r.join("")}},{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement("h1",null," ",this.props.title," "),f.default.createElement("form",{onSubmit:this.onSubmit},this.formBuilder(this.schemaDisplay(this.props.inSchema)),f.default.createElement("footer",{className:"dbtool-footer"},f.default.createElement("button",{className:"dbtool-button",type:"submit"},"SAVE"))))}}]),t}(p.Component);t.default=b,DBTool.PropTypes={branch:h.default.string.isRequired,inSchema:h.default.object.isRequired,createUser:h.default.bool,modalShutFunct:h.default.func}},function(t,r){t.exports=e},function(e,r){e.exports=t}])});