(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var a=n("q1tI"),o=r(a),i=r(n("Gytx"));function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function m(){s=e(u.map((function(e){return e.props}))),d.canUseDOM?t(s):n&&(s=n(s))}var d=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var l=a.prototype;return l.shouldComponentUpdate=function(e){return!i(e,this.props)},l.componentWillMount=function(){u.push(this),m()},l.componentDidUpdate=function(){m()},l.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),m()},l.render=function(){return o.createElement(r,this.props)},a}(a.Component);return l(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),l(d,"canUseDOM",c),d}}},Gytx:function(e,t,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),c=0;c<o.length;c++){var s=o[c];if(!l(s))return!1;var u=e[s],m=t[s];if(!1===(a=n?n.call(r,u,m,s):void 0)||void 0===a&&u!==m)return!1}return!0}},Oyvg:function(e,t,n){var r=n("dyZX"),a=n("Xbzi"),o=n("hswa").f,i=n("kJMx").f,l=n("quPj"),c=n("C/va"),s=r.RegExp,u=s,m=s.prototype,d=/a/g,p=/a/g,E=new s(d)!==d;if(n("nh4g")&&(!E||n("eeVq")((function(){return p[n("K0xU")("match")]=!1,s(d)!=d||s(p)==p||"/a/i"!=s(d,"i")})))){s=function(e,t){var n=this instanceof s,r=l(e),o=void 0===t;return!n&&r&&e.constructor===s&&o?e:a(E?new u(r&&!o?e.source:e,t):u((r=e instanceof s)?e.source:e,r&&o?c.call(e):t),n?this:m,s)};for(var f=function(e){e in s||o(s,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},T=i(u),h=0;T.length>h;)f(T[h++]);m.constructor=s,s.prototype=m,n("KroJ")(r,"RegExp",s)}n("elZq")("RegExp")},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("oBti"),i=n("TJpk"),l=(n("+ZDr"),n("lw3w"),n("emEt").default.enqueue,a.a.createContext({}));function c(e){var t=e.staticQueryData,n=e.data,r=e.query,o=e.render,i=n?n.data:t[r]&&t[r].data;return a.a.createElement(a.a.Fragment,null,i&&o(i),!i&&a.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var t=e.data,n=e.query,r=e.render,o=e.children;return a.a.createElement(l.Consumer,null,(function(e){return a.a.createElement(c,{data:t,query:n,render:r||o,staticQueryData:e})}))};var u=function(e){var t=e.title,n=e.description,r=(e.image,e.pathname),l=e.article;return a.a.createElement(s,{query:d,render:function(e){var o=e.site.siteMetadata,c=o.defaultTitle,s=o.defaultDescription,u=o.siteUrl,m={title:t||c,description:n||s,url:""+u+(r||"/")};return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.Helmet,{title:m.title},a.a.createElement("meta",{name:"description",content:m.description}),a.a.createElement("meta",{name:"image",content:m.image}),m.url&&a.a.createElement("meta",{property:"og:url",content:m.url}),!l?null:a.a.createElement("meta",{property:"og:type",content:"article"}),m.title&&a.a.createElement("meta",{property:"og:title",content:m.title}),m.description&&a.a.createElement("meta",{property:"og:description",content:m.description}),m.image&&a.a.createElement("meta",{property:"og:image",content:m.image})))},data:o})},m=u;u.defaultProps={title:null,description:null,image:null,pathname:null,article:!1};var d="3557071514",p=function(){return a.a.createElement("div",{className:"has-background-black-ter has-text-centered has-text-white",style:{padding:"10px 0"}},a.a.createElement("p",null,"Made with ❤️ in New York City"))},E=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},a.a.createElement("path",{fill:"#363636",fillOpacity:"1",d:"M0,224L48,218.7C96,213,192,203,288,208C384,213,480,235,576,245.3C672,256,768,256,864,224C960,192,1056,128,1152,112C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"})),a.a.createElement("footer",{className:"footer has-background-grey-darker has-text-white"},a.a.createElement("div",{className:"content has-text-centered"},a.a.createElement("div",{className:"columns"},a.a.createElement("div",{className:"column"},a.a.createElement("h5",{className:"has-text-white"},"BMCCHacks II presents:"),a.a.createElement("h3",{className:"has-text-white"},"Spring Sandbox")),a.a.createElement("div",{className:"column"},a.a.createElement("h5",{className:"has-text-white is-uppercase"},"Socials"),a.a.createElement("p",null,"Instagram"),a.a.createElement("p",null,"Facebook"),a.a.createElement("p",null,"Twitter"),a.a.createElement("p",null,"Medium")),a.a.createElement("div",{className:"column"},a.a.createElement("h5",{className:"is-uppercase has-text-white"},"Past Years"),a.a.createElement("a",{href:"https://bmcchackathon.github.io/",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"white"}},"BMCCHacks 2019")),a.a.createElement("div",{className:"column"},a.a.createElement("h5",{className:"has-text-white is-uppercase"},"Links"),a.a.createElement("p",null,"Hacker Application"),a.a.createElement("p",null,"Volunteer Application")),a.a.createElement("div",{className:"column"},a.a.createElement("h6",{className:"has-text-white"},"Special thanks to Computer Programming Club and CSI Department!!"),a.a.createElement("p",null,"Copyright © 2020 BMCCHacks."))))),a.a.createElement(p,null))},f=function(e){var t=e.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement(m,null),a.a.createElement("main",null,t),a.a.createElement(E,null))},T=function(){return a.a.createElement("section",{className:"hero is-medium"},a.a.createElement("div",{className:"hero-body"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"content"},a.a.createElement("h1",{className:"title has-text-centered"},"What is BMCCHacks?"),a.a.createElement("p",null,"BMCCHacks is a one day hackathon taking place on April 4th, hosted at the Borough of Manhattan Community College. Come build your dream project, learn from our talks and mentors, and win prizes! BMCCHacks is free, and made possible thanks to our wonderful supporters and BMCC clubs."),a.a.createElement("p",null,"The purpose of this hackathon is to inspire BMCC students to work in a collaborative environment to solve real world problems by creating needed projects while helping current students familiarize with current technology.")))))},h=function(){return a.a.createElement("section",{className:"hero"},a.a.createElement("div",{className:"hero-body"},a.a.createElement("div",{className:"container"},a.a.createElement("h1",{className:"title has-text-centered"},"FAQ"),a.a.createElement("div",{className:"content"},a.a.createElement("h4",null,"What is a Hackathon?"),a.a.createElement("p",null,"A hackathon is a marathon software and hardware product creation event. At BMCCHacks, you can look forward to amazing guest speakers, helpful workshops, tons of skilled mentors, and, of course, fun games and great food."),a.a.createElement("h4",null,"Who can attend?"),a.a.createElement("p",null,"All BMCC undergraduate and alumni are welcome."),a.a.createElement("h4",null,"What should I bring?"),a.a.createElement("p",null,"Bring your student ID for entrance. You’ll also need your laptop and charger for hacking, and toiletries for hygiene."),a.a.createElement("h4",null,"How many team members?"),a.a.createElement("p",null,"The maximum team members permitted per group is 4 humans and the minimum is two humans."),a.a.createElement("h4",null,"Will this cost me money?"),a.a.createElement("p",null,"Nope! Admission is free and covers food, all the snacks you could ever want, and of course, our sponsors and BMCCHacks will provide you with the free swag and fun times you need to have an amazing weekend!!"),a.a.createElement("h4",null,"Need a computer?"),a.a.createElement("p",null,"Contact us before ","<date>"," at ","<email@address>","."),a.a.createElement("h4",null,"How to apply?"),a.a.createElement("p",null,"Fill out the following google form here.")))))},A=function(){return a.a.createElement("section",{className:"hero is-light has-text-centered"},a.a.createElement("div",{className:"hero-body"},a.a.createElement("div",{className:"container"},a.a.createElement("h1",{className:"title"},"Sponsors"),a.a.createElement("p",null,"TBA!"))))},g=function(){return a.a.createElement("section",{className:"hero is-light has-text-centered"},a.a.createElement("div",{className:"hero-body"},a.a.createElement("div",{className:"container"},a.a.createElement("p",null,"Interested in sponsoring BMCCHacks 2020? Contact us at ","<email@address>"))))},y=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("section",{className:"hero is-medium has-text-centered"},a.a.createElement("div",{className:"hero-body"},a.a.createElement("div",{className:"container"},a.a.createElement("h1",{className:"title",style:{paddingBottom:"50px"}},"Our Team"),a.a.createElement("div",{className:"columns is-12"},a.a.createElement("div",{className:"column"},a.a.createElement("figure",{className:"image container is-128x128"},a.a.createElement("img",{alt:"",className:"is-rounded",src:"https://bulma.io/images/placeholders/128x128.png"})),a.a.createElement("p",{className:"has-text-weight-bold"},"Dr. Mohammad Azhar"),a.a.createElement("p",null,"Advisor")),a.a.createElement("div",{className:"column"},a.a.createElement("figure",{className:"image container is-128x128"},a.a.createElement("img",{alt:"",className:"is-rounded",src:"https://bulma.io/images/placeholders/128x128.png"})),a.a.createElement("p",{className:"has-text-weight-bold"},"Katherine Bedoya"),a.a.createElement("p",null,"Director of Logistics")),a.a.createElement("div",{className:"column"},a.a.createElement("figure",{className:"image container is-128x128"},a.a.createElement("img",{alt:"",className:"is-rounded",src:"https://bulma.io/images/placeholders/128x128.png"})),a.a.createElement("p",{className:"has-text-weight-bold"},"Edwin Carbajal"),a.a.createElement("p",null,"Director of Web Development"),a.a.createElement("p",null,"Computer Science, 2020"),a.a.createElement("p",null,a.a.createElement("a",{style:{color:"black",textDecoration:"underline"},href:"https://www.linkedin.com/in/edwincarbajal/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn"))),a.a.createElement("div",{className:"column"},a.a.createElement("figure",{className:"image container is-128x128"},a.a.createElement("img",{alt:"",className:"is-rounded",src:"https://bulma.io/images/placeholders/128x128.png"})),a.a.createElement("p",{className:"has-text-weight-bold"},"Michael Hicks"),a.a.createElement("p",null,"Pending"))),a.a.createElement("div",{className:"columns is-12"},a.a.createElement("div",{className:"column"},a.a.createElement("figure",{className:"image container is-128x128"},a.a.createElement("img",{alt:"",className:"is-rounded",src:"https://bulma.io/images/placeholders/128x128.png"})),a.a.createElement("p",{className:"has-text-weight-bold"},"Mehmet Sahin"),a.a.createElement("p",null,"Co-Founder of BMCCHacks"),a.a.createElement("p",null,"Computer Science, 2019"),a.a.createElement("p",null,a.a.createElement("a",{style:{color:"black",textDecoration:"underline"},href:"https://www.linkedin.com/in/mehmetshin/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn"))),a.a.createElement("div",{className:"column"},a.a.createElement("figure",{className:"image container is-128x128"},a.a.createElement("img",{alt:"",className:"is-rounded",src:"https://bulma.io/images/placeholders/128x128.png"})),a.a.createElement("p",{className:"has-text-weight-bold"},"Fernanda Carvalho Santos"),a.a.createElement("p",null,"Director of Marketing + Design")),a.a.createElement("div",{className:"column"},a.a.createElement("figure",{className:"image container is-128x128"},a.a.createElement("img",{alt:"",className:"is-rounded",src:"https://bulma.io/images/placeholders/128x128.png"})),a.a.createElement("p",{className:"has-text-weight-bold"},"Thierry Thesatus"),a.a.createElement("p",null,"Pending")),a.a.createElement("div",{className:"column"},a.a.createElement("figure",{className:"image container is-128x128"},a.a.createElement("img",{alt:"",className:"is-rounded",src:"https://bulma.io/images/placeholders/128x128.png"})),a.a.createElement("p",{className:"has-text-weight-bold"},"Elizabeth Yan"),a.a.createElement("p",null,"Director of IT + Swag")))))),a.a.createElement(g,null))};n("bN3s");var v=function(){return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},a.a.createElement("path",{fill:"#FFFF99",fillOpacity:"1",d:"M0,288L48,272C96,256,192,224,288,218.7C384,213,480,235,576,213.3C672,192,768,128,864,90.7C960,53,1056,43,1152,37.3C1248,32,1344,32,1392,32L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"}))},b=new Date("April 4, 2020 00:00:00").getTime(),S=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={days:0,hours:0,minutes:0,seconds:0},n.countdown=n.countdown.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.getDerivedStateFromProps=function(){var e=(new Date).getTime(),t=b-e,n=Math.floor(t/864e5),r=Math.floor(t%864e5/36e5),a=Math.floor(t%36e5/6e4),o=Math.floor(t%6e4/1e3);return r<"10"&&r>"0"&&(r="0"+r),a<"10"&&r>"0"&&(a="0"+a),o<"10"&&r>"0"&&(o="0"+o),{days:n,hours:r,minutes:a,seconds:o}};var o=r.prototype;return o.componentDidMount=function(){this.timerID=setInterval(this.countdown,1e3)},o.componentWillUnmount=function(){clearInterval(this.timerID)},o.countdown=function(){var e=(new Date).getTime(),t=b-e,n=Math.floor(t/864e5),r=Math.floor(t%864e5/36e5),a=Math.floor(t%36e5/6e4),o=Math.floor(t%6e4/1e3);r<"10"&&r>"0"&&(r="0"+r),a<"10"&&r>"0"&&(a="0"+a),o<"10"&&r>"0"&&(o="0"+o),t>0?this.setState({days:n,hours:r,minutes:a,seconds:o}):clearInterval(this.timerID)},o.render=function(){var e=this.state,t=e.days,n=e.hours,r=e.minutes,o=e.seconds;return a.a.createElement(f,null,a.a.createElement("section",{className:"hero is-success is-fullheight"},a.a.createElement("div",{className:"hero-body"},a.a.createElement("div",{className:"container"},a.a.createElement("h3",{className:"subtitle is-3"},"BMCCHacks II presents:"),a.a.createElement("h2",{className:"title is-1"},"Spring Sandbox"),a.a.createElement("p",{className:"is-size-3 has-text-weight-semibold\t"},t+"d "+n+"h "+r+"m "+o+"s"),a.a.createElement("p",{className:"is-size-4\t"},"April 4, 2020"),a.a.createElement("p",{className:"is-size-4\t"},"Borough of Manhattan Community College"),a.a.createElement("div",{className:"buttons",style:{paddingTop:"20px"}},a.a.createElement("button",{className:"button is-primary is-rounded"},"Hacker Application"))))),a.a.createElement(v,null),a.a.createElement(T,null),a.a.createElement("itinerary",null),a.a.createElement(h,null),a.a.createElement(A,null),a.a.createElement(y,null))},r}(r.Component);t.default=S},TJpk:function(e,t,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=m(n("q1tI")),i=m(n("17x9")),l=m(n("8+s/")),c=m(n("bmMU")),s=n("v1p5"),u=n("hFT/");function m(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f,T,h,A=(0,l.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),g=(f=A,h=T=function(e){function t(){return p(this,t),E(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,o=e.newProps,i=e.newChildProps,l=e.nestedChildren;switch(a.type){case u.TAG_NAMES.TITLE:return r({},o,((t={})[a.type]=l,t.titleAttributes=r({},i),t));case u.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},i)});case u.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},i)})}return r({},o,((n={})[a.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=d(a,["children"]),l=(0,s.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,o),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=d(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(f,a)},a(t,null,[{key:"canUseDOM",set:function(e){f.canUseDOM=e}}]),t}(o.default.Component),T.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},T.defaultProps={defer:!0,encodeSpecialCharacters:!0},T.peek=f.peek,T.rewind=function(){var e=f.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},h);g.renderStatic=g.rewind,t.Helmet=g,t.default=g},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var l,c,s,u=r(t),m=r(n);if(u&&m){if((c=t.length)!=n.length)return!1;for(l=c;0!=l--;)if(!e(t[l],n[l]))return!1;return!0}if(u!=m)return!1;var d=t instanceof Date,p=n instanceof Date;if(d!=p)return!1;if(d&&p)return t.getTime()==n.getTime();var E=t instanceof RegExp,f=n instanceof RegExp;if(E!=f)return!1;if(E&&f)return t.toString()==n.toString();var T=a(t);if((c=T.length)!==a(n).length)return!1;for(l=c;0!=l--;)if(!o.call(n,T[l]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(l=c;0!=l--;)if(!("_owner"===(s=T[l])&&t.$$typeof||e(t[s],n[s])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},lw3w:function(e,t,n){var r;e.exports=(r=n("rzlk"))&&r.default||r},oBti:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"defaultTitle":"BMCCHacks II 2020 - April 4","defaultDescription":"BMCCHacks II Spring 2020","siteUrl":"https://bmcchacks.surge.sh"}}}}')},rzlk:function(e,t,n){"use strict";n.r(t);n("91GP");var r=n("q1tI"),a=n.n(r),o=n("IOVJ");t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null}},v1p5:function(e,t,n){(function(e){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=c(n("q1tI")),i=c(n("MgzW")),l=n("hFT/");function c(e){return e&&e.__esModule?e:{default:e}}var s,u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},m=function(e){var t=T(e,l.TAG_NAMES.TITLE),n=T(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=T(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},d=function(e){return T(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},E=function(e,t){return t.filter((function(e){return void 0!==e[l.TAG_NAMES.BASE]})).map((function(e){return e[l.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},f=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],s=c.toLowerCase();-1===t.indexOf(s)||n===l.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===l.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==l.TAG_PROPERTIES.INNER_HTML&&c!==l.TAG_PROPERTIES.CSS_TEXT&&c!==l.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][u]&&(r[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),c=0;c<o.length;c++){var s=o[c],u=(0,i.default)({},a[s],r[s]);a[s]=u}return e}),[]).reverse()},T=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){h(e)}),0)}),A=function(e){return clearTimeout(e)},g="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,y="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||A:e.cancelAnimationFrame||A,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},b=null,S=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,m=e.styleTags,d=e.title,p=e.titleAttributes;w(l.TAG_NAMES.BODY,r),w(l.TAG_NAMES.HTML,a),C(d,p);var E={baseTag:_(l.TAG_NAMES.BASE,n),linkTags:_(l.TAG_NAMES.LINK,o),metaTags:_(l.TAG_NAMES.META,i),noscriptTags:_(l.TAG_NAMES.NOSCRIPT,c),scriptTags:_(l.TAG_NAMES.SCRIPT,u),styleTags:_(l.TAG_NAMES.STYLE,m)},f={},T={};Object.keys(E).forEach((function(e){var t=E[e],n=t.newTags,r=t.oldTags;n.length&&(f[e]=n),r.length&&(T[e]=E[e].oldTags)})),t&&t(),s(e,f,T)},N=function(e){return Array.isArray(e)?e.join(""):e},C=function(e,t){void 0!==e&&document.title!==e&&(document.title=N(e)),w(l.TAG_NAMES.TITLE,t)},w=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(l.HELMET_ATTRIBUTE),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===a.indexOf(s)&&a.push(s);var m=o.indexOf(s);-1!==m&&o.splice(m,1)}for(var d=o.length-1;d>=0;d--)n.removeAttribute(o[d]);a.length===o.length?n.removeAttribute(l.HELMET_ATTRIBUTE):n.getAttribute(l.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(l.HELMET_ATTRIBUTE,i.join(","))}},_=function(e,t){var n=document.head||document.querySelector(l.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===l.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===l.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(l.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},M=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.REACT_TAG_MAP[n]||n]=e[n],t}),t)},P=function(e,t,n){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[l.HELMET_ATTRIBUTE]=!0,a=R(n,r),[o.default.createElement(l.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=M(n),o=N(t);return a?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+a+">"+u(o,r)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+u(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return R(t)},toString:function(){return M(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[l.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=l.REACT_TAG_MAP[e]||e;if(n===l.TAG_PROPERTIES.INNER_HTML||n===l.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+u(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===l.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){b&&y(b),e.defer?b=g((function(){S(e,(function(){b=null}))})):(S(e),b=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,m=e.title,d=void 0===m?"":m,p=e.titleAttributes;return{base:P(l.TAG_NAMES.BASE,t,r),bodyAttributes:P(l.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:P(l.ATTRIBUTE_NAMES.HTML,a,r),link:P(l.TAG_NAMES.LINK,o,r),meta:P(l.TAG_NAMES.META,i,r),noscript:P(l.TAG_NAMES.NOSCRIPT,c,r),script:P(l.TAG_NAMES.SCRIPT,s,r),style:P(l.TAG_NAMES.STYLE,u,r),title:P(l.TAG_NAMES.TITLE,{title:d,titleAttributes:p},r)}},t.reducePropsToState=function(e){return{baseTag:E([l.TAG_PROPERTIES.HREF],e),bodyAttributes:p(l.ATTRIBUTE_NAMES.BODY,e),defer:T(e,l.HELMET_PROPS.DEFER),encode:T(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(l.ATTRIBUTE_NAMES.HTML,e),linkTags:f(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:f(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:f(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:d(e),scriptTags:f(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:f(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:m(e),titleAttributes:p(l.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=g,t.warn=v}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-index-js-394badcd111005e6e079.js.map