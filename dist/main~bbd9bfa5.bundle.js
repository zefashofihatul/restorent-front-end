!function(n){function e(e){for(var i,a,s=e[0],c=e[1],p=e[2],d=0,l=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(n[i]=c[i]);for(f&&f(e);l.length;)l.shift()();return r.push.apply(r,p||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],i=!0,s=1;s<t.length;s++){var c=t[s];0!==o[c]&&(i=!1)}i&&(r.splice(e--,1),n=a(a.s=t[0]))}return n}var i={},o={4:0},r=[];function a(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=i,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)a.d(t,i,function(e){return n[e]}.bind(null,i));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var p=0;p<s.length;p++)e(s[p]);var f=c;r.push([31,1,0,3,2]),t()}({23:function(n,e,t){var i=t(24),o=t(25);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var r={insert:"head",singleton:!1};i(o,r);n.exports=o.locals||{}},25:function(n,e,t){(e=t(26)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Lato:wght@300;400;700&display=swap);"]),e.push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;500;600;700&display=swap);"]),e.push([n.i,'.container-save .save-restaurant {\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  bottom: 80px;\n  right: 80px;\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background-color: #5f45c7; }\n\n@media (min-width: 376px) and (max-width: 768px) {\n  .container-save .save-restaurant {\n    width: 64px;\n    height: 64px;\n    bottom: 30px;\n    right: 30px; } }\n  @media (max-width: 375px) {\n    .container-save .save-restaurant {\n      width: 64px;\n      height: 64px;\n      bottom: 30px;\n      right: 30px; } }\n  .container-save .save-restaurant button {\n    cursor: pointer;\n    border-style: none;\n    background-color: transparent;\n    font-size: 40px;\n    color: white; }\n    .container-save .save-restaurant button:focus {\n      outline: 4px solid yellow !important; }\n\nsection.detail-page .back-arrow {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 130px;\n  justify-content: space-between;\n  position: absolute;\n  padding: 0 40px; }\n  section.detail-page .back-arrow a {\n    cursor: pointer;\n    text-decoration: none;\n    background-color: transparent;\n    border-style: none;\n    font-size: 40px;\n    color: white; }\n    @media (max-width: 400px) {\n      section.detail-page .back-arrow a {\n        font-size: 34px; } }\n\n@media (min-width: 376px) and (max-width: 768px) {\n  section.detail-page .back-arrow a {\n    font-size: 34px; } }\n  @media (max-width: 400px) {\n    section.detail-page .back-arrow {\n      padding: 0 20px;\n      height: 80px; } }\n\n@media (min-width: 376px) and (max-width: 768px) {\n  section.detail-page .back-arrow {\n    height: 100px; } }\n  section.detail-page .back-arrow .saved p {\n    font-family: "Cormorant Garamond", sans-serif;\n    font-size: 24px;\n    font-weight: 400;\n    color: white; }\n    @media (max-width: 400px) {\n      section.detail-page .back-arrow .saved p {\n        font-size: 20px; } }\n\nsection.detail-page .container-general-information {\n  padding: 8% 4%;\n  background: #2f2e32; }\n  @media (max-width: 400px) {\n    section.detail-page .container-general-information {\n      padding-top: 80px; } }\n\n@media (min-width: 376px) and (max-width: 768px) {\n  section.detail-page .container-general-information {\n    padding-top: 90px; } }\n  section.detail-page .container-general-information .general-information {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column; }\n    section.detail-page .container-general-information .general-information .title-general-information {\n      text-align: center; }\n      section.detail-page .container-general-information .general-information .title-general-information h1 {\n        font-family: "Cormorant Garamond", sans-serif;\n        font-size: 72px;\n        font-weight: 300;\n        color: #fdf8ee; }\n        @media (max-width: 939px) {\n          section.detail-page .container-general-information .general-information .title-general-information h1 {\n            font-size: 54px; } }\n\n@media (min-width: 376px) and (max-width: 768px) {\n  section.detail-page .container-general-information .general-information .title-general-information h1 {\n    text-align: center;\n    font-size: 40px; } }\n        @media (max-width: 375px) {\n          section.detail-page .container-general-information .general-information .title-general-information h1 {\n            text-align: center;\n            font-size: 32px; } }\n    section.detail-page .container-general-information .general-information .img-general-information {\n      margin: 26px 0;\n      max-width: 540px; }\n      section.detail-page .container-general-information .general-information .img-general-information img {\n        width: 100%; }\n    section.detail-page .container-general-information .general-information .sub-general-information {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      flex-wrap: wrap; }\n      section.detail-page .container-general-information .general-information .sub-general-information .card-information {\n        width: 210px;\n        height: 100px;\n        border: 2px #fdf8ee solid;\n        margin: 4px 4px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column; }\n        section.detail-page .container-general-information .general-information .sub-general-information .card-information .card-information-title {\n          display: block;\n          font-family: "Darker Grotesque", sans-serif;\n          font-size: 16px;\n          font-weight: 400;\n          color: #fdf8ee; }\n        section.detail-page .container-general-information .general-information .sub-general-information .card-information .card-information-sub {\n          display: block;\n          font-family: "Darker Grotesque", sans-serif;\n          font-size: 24px;\n          font-weight: 500;\n          color: #fdf8ee; }\n        section.detail-page .container-general-information .general-information .sub-general-information .card-information .card-information-street {\n          padding: 24px;\n          display: block;\n          font-family: "Darker Grotesque", sans-serif;\n          font-size: 16px;\n          font-weight: 400;\n          color: #fdf8ee; }\n\nsection.detail-page .container-description {\n  padding: 4% 8%;\n  color: #212025; }\n  section.detail-page .container-description .description .description-content .description-content-title {\n    font-family: "Darker Grotesque", sans-serif;\n    font-size: 24px;\n    font-weight: 800; }\n  section.detail-page .container-description .description .description-content .description-content-article {\n    font-family: "Darker Grotesque", sans-serif;\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 32px; }\n  section.detail-page .container-description .container-menu-review {\n    display: flex;\n    justify-content: space-between; }\n\n@media (min-width: 376px) and (max-width: 768px) {\n  section.detail-page .container-description .container-menu-review {\n    flex-wrap: wrap; } }\n    @media (max-width: 375px) {\n      section.detail-page .container-description .container-menu-review {\n        flex-wrap: wrap; } }\n    section.detail-page .container-description .container-menu-review .menu {\n      margin-right: 40px; }\n      section.detail-page .container-description .container-menu-review .menu .foods-menu {\n        margin-top: 48px; }\n        section.detail-page .container-description .container-menu-review .menu .foods-menu .foods-menu-title {\n          font-family: "Darker Grotesque", sans-serif;\n          font-size: 24px;\n          font-weight: 800; }\n        section.detail-page .container-description .container-menu-review .menu .foods-menu .foods-menu-article {\n          font-family: "Darker Grotesque", sans-serif;\n          font-size: 22px;\n          font-weight: 400; }\n      section.detail-page .container-description .container-menu-review .menu .drinks-menu {\n        margin-top: 48px; }\n        section.detail-page .container-description .container-menu-review .menu .drinks-menu .drinks-menu-title {\n          font-family: "Darker Grotesque", sans-serif;\n          font-size: 24px;\n          font-weight: 800; }\n        section.detail-page .container-description .container-menu-review .menu .drinks-menu .drinks-menu-article {\n          font-family: "Darker Grotesque", sans-serif;\n          font-size: 22px;\n          font-weight: 400; }\n    section.detail-page .container-description .container-menu-review .costumer-review {\n      width: 600px;\n      margin-top: 48px; }\n      section.detail-page .container-description .container-menu-review .costumer-review .costumer-review-title {\n        font-family: "Darker Grotesque", sans-serif;\n        font-size: 24px;\n        font-weight: 800; }\n      section.detail-page .container-description .container-menu-review .costumer-review .costumer-review-description {\n        font-family: "Darker Grotesque", sans-serif;\n        font-size: 18px;\n        font-weight: 400; }\n      section.detail-page .container-description .container-menu-review .costumer-review .add-review {\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        margin-top: 16px; }\n        section.detail-page .container-description .container-menu-review .costumer-review .add-review .input {\n          width: 100%;\n          margin-bottom: 10px; }\n          section.detail-page .container-description .container-menu-review .costumer-review .add-review .input input {\n            padding: 8px;\n            width: 100%;\n            height: 100%;\n            border: solid 2px #212025;\n            font-family: "Darker Grotesque", sans-serif;\n            font-size: 18px;\n            font-weight: 500; }\n          section.detail-page .container-description .container-menu-review .costumer-review .add-review .input .warning {\n            border: solid 2px #e24040 !important;\n            transition: 0.1s; }\n        section.detail-page .container-description .container-menu-review .costumer-review .add-review .button {\n          width: 100%;\n          margin-bottom: 10px; }\n          section.detail-page .container-description .container-menu-review .costumer-review .add-review .button button {\n            cursor: pointer;\n            padding: 8px;\n            width: 100%;\n            height: 44px;\n            padding: 4px 8px;\n            text-decoration: none;\n            border-style: none;\n            background-color: #212025;\n            color: #fff; }\n      section.detail-page .container-description .container-menu-review .costumer-review .costumer-review-cards {\n        margin-top: 26px; }\n        section.detail-page .container-description .container-menu-review .costumer-review .costumer-review-cards .review {\n          display: flex;\n          align-items: center;\n          margin-bottom: 16px; }\n          section.detail-page .container-description .container-menu-review .costumer-review .costumer-review-cards .review .img-review {\n            width: 53px;\n            height: 53px;\n            background-color: #212025; }\n          section.detail-page .container-description .container-menu-review .costumer-review .costumer-review-cards .review .costumer-review-content {\n            flex: 1;\n            padding: 0 16px; }\n            section.detail-page .container-description .container-menu-review .costumer-review .costumer-review-cards .review .costumer-review-content .costumer-review-content-title {\n              display: flex;\n              align-items: center; }\n              section.detail-page .container-description .container-menu-review .costumer-review .costumer-review-cards .review .costumer-review-content .costumer-review-content-title h3 {\n                margin-right: 16px;\n                font-family: "Darker Grotesque", sans-serif;\n                font-size: 18px;\n                font-weight: 700; }\n              section.detail-page .container-description .container-menu-review .costumer-review .costumer-review-cards .review .costumer-review-content .costumer-review-content-title span {\n                font-family: "Darker Grotesque", sans-serif;\n                font-size: 12px;\n                font-weight: 800; }\n            section.detail-page .container-description .container-menu-review .costumer-review .costumer-review-cards .review .costumer-review-content .costumer-review-content-sub {\n              width: 300px; }\n              @media (max-width: 437px) {\n                section.detail-page .container-description .container-menu-review .costumer-review .costumer-review-cards .review .costumer-review-content .costumer-review-content-sub {\n                  width: 150px; } }\n              section.detail-page .container-description .container-menu-review .costumer-review .costumer-review-cards .review .costumer-review-content .costumer-review-content-sub p {\n                word-wrap: break-word;\n                line-height: 18px;\n                font-family: "Darker Grotesque", sans-serif;\n                font-size: 18px;\n                font-weight: 400; }\n\nsection.tab-content {\n  width: 100%;\n  display: flex;\n  justify-items: center;\n  padding: 2% 10% 2% 10%; }\n  section.tab-content .tab-explore {\n    width: 50%; }\n    section.tab-content .tab-explore button.tab-button-explore {\n      font-family: "Lato", sans-serif;\n      font-size: 18px;\n      font-weight: 700;\n      border: 2px solid #4caf50;\n      color: #4caf50;\n      width: 100%;\n      line-height: 40px;\n      background-color: #fff;\n      text-decoration: none;\n      cursor: pointer; }\n    section.tab-content .tab-explore button.on-mode {\n      background-color: #4caf50;\n      color: #fff; }\n  section.tab-content .tab-favorites {\n    width: 50%; }\n    section.tab-content .tab-favorites button.tab-button-favorites {\n      border: 2px solid #4caf50;\n      color: #fff;\n      font-family: "Lato", sans-serif;\n      font-size: 18px;\n      font-weight: 700;\n      width: 100%;\n      line-height: 40px;\n      text-decoration: none;\n      background-color: #4caf50;\n      cursor: pointer; }\n    section.tab-content .tab-favorites button.on-mode {\n      background-color: #fff;\n      color: #4caf50; }\n\n.restaurantNotFound {\n  margin-top: 40px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .restaurantNotFound p {\n    font-family: "Cormorant Garamond", sans-serif;\n    font-size: 24px;\n    font-weight: 400;\n    color: #3b3a40; }\n\n#loadingAnimation {\n  width: 120px;\n  height: 120px; }\n\n@keyframes animation {\n  0% {\n    stroke-dasharray: 1 98;\n    stroke-dashoffset: -105; }\n  50% {\n    stroke-dasharray: 80 10;\n    stroke-dashoffset: -160; }\n  100% {\n    stroke-dasharray: 1 98;\n    stroke-dashoffset: -300; } }\n\n#spinner {\n  transform-origin: center;\n  animation-name: animation;\n  animation-duration: 1.2s;\n  animation-timing-function: cubic-bezier;\n  animation-iteration-count: infinite; }\n\n#loadingCard {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n#loadingContainer {\n  width: 100%;\n  height: 100vh;\n  background-color: #fdf8ee;\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  bottom: 0;\n  transition: 0.5s; }\n  #loadingContainer #loading {\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n    #loadingContainer #loading h2 {\n      font-family: "Cormorant Garamond", sans-serif;\n      font-size: 160px;\n      font-weight: 300; }\n\n.loadingOpen {\n  bottom: 100% !important; }\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box; }\n\na:focus {\n  outline: 1px solid blue; }\n\n.skip-link {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  background-color: blue;\n  color: white;\n  padding: 8px;\n  z-index: 100;\n  text-decoration: none;\n  list-style: none; }\n\n.skip-link:focus {\n  outline: 1px solid blue;\n  top: 0; }\n\nheader {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  header picture {\n    width: 100vw;\n    overflow: hidden; }\n    header picture img {\n      min-width: 100%;\n      height: 100vh; }\n  header::after {\n    content: \'\';\n    top: 0;\n    left: 0;\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.8); }\n  header #header-content {\n    position: absolute;\n    z-index: 1; }\n    header #header-content h1.header-content-title {\n      font-family: "Cormorant Garamond", sans-serif;\n      font-size: 160px;\n      font-weight: 300;\n      color: #fdf8ee; }\n      @media (max-width: 939px) {\n        header #header-content h1.header-content-title {\n          font-size: 120px; } }\n\n@media (min-width: 376px) and (max-width: 768px) {\n  header #header-content h1.header-content-title {\n    text-align: center;\n    font-size: 62px; } }\n      @media (max-width: 375px) {\n        header #header-content h1.header-content-title {\n          text-align: center;\n          font-size: 40px; } }\n    header #header-content h2.header-content-subtitle {\n      font-family: "Cormorant Garamond", sans-serif;\n      font-size: 24px;\n      font-weight: 400;\n      color: #fdf8ee;\n      text-align: center; }\n\n@media (min-width: 376px) and (max-width: 768px) {\n  header #header-content h2.header-content-subtitle {\n    font-size: 22px; } }\n      @media (max-width: 375px) {\n        header #header-content h2.header-content-subtitle {\n          font-size: 16px; } }\n\nnav {\n  width: 100%;\n  height: 128px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 28px 108px 28px 108px;\n  z-index: 100; }\n  @media (max-width: 375px) {\n    nav {\n      padding: 16px; } }\n\n@media (min-width: 376px) and (max-width: 768px) {\n  nav {\n    padding: 22px 40px 22px 40px; } }\n  nav .topnav {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n    nav .topnav span {\n      font-family: "Cormorant Garamond", sans-serif;\n      font-size: 32px;\n      font-weight: 400;\n      color: #fdf8ee; }\n      @media (max-width: 375px) {\n        nav .topnav span {\n          font-size: 24px; } }\n    nav .topnav .link-content a.hamburger {\n      display: none;\n      color: #fdf8ee;\n      text-decoration: none;\n      min-width: 44px;\n      min-height: 44px;\n      font-size: 32px; }\n\n@media (min-width: 376px) and (max-width: 768px) {\n  nav .topnav .link-content a.hamburger {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer; } }\n      @media (max-width: 375px) {\n        nav .topnav .link-content a.hamburger {\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          cursor: pointer; } }\n    nav .topnav .link-content .drawer {\n      display: flex;\n      justify-content: center;\n      align-items: center; }\n      @media (max-width: 768px) {\n        nav .topnav .link-content .drawer {\n          position: fixed;\n          z-index: 5;\n          background-color: #212025;\n          width: 70%;\n          height: 100vh;\n          top: 0;\n          right: -70%;\n          flex-direction: column;\n          transition: 0.5s; } }\n      nav .topnav .link-content .drawer a.nav-wide {\n        display: block;\n        min-width: 44px;\n        min-height: 44px;\n        text-align: center;\n        list-style: none;\n        text-decoration: none;\n        color: #fdf8ee;\n        transition: 0.4s;\n        margin-left: 32px;\n        font-family: "Lato", sans-serif;\n        font-size: 16px;\n        font-weight: 300;\n        display: flex;\n        justify-content: center;\n        align-items: center; }\n        nav .topnav .link-content .drawer a.nav-wide:hover {\n          color: #3b3a40;\n          transition: 0.4s; }\n\n@media (min-width: 376px) and (max-width: 768px) {\n  nav .topnav .link-content .drawer a.nav-wide {\n    display: none;\n    font-size: 18px;\n    margin-left: 0; } }\n        @media (max-width: 375px) {\n          nav .topnav .link-content .drawer a.nav-wide {\n            display: none;\n            font-size: 18px;\n            margin-left: 0; } }\n\nsection.features {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  padding: 7% 10% 2% 10%; }\n  @media (max-width: 400px) {\n    section.features {\n      padding: 7% 4% 2% 4%; } }\n  section.features .services {\n    flex: 30%;\n    margin-bottom: 48px; }\n    section.features .services h2 {\n      font-family: "Lato", sans-serif;\n      font-size: 18px;\n      font-weight: 700;\n      color: #3b3a40; }\n    section.features .services .content-services {\n      margin-top: 16px;\n      min-width: 260px; }\n      section.features .services .content-services p {\n        font-family: "Lato", sans-serif;\n        font-size: 18px;\n        font-weight: 400;\n        color: #3b3a40;\n        line-height: 32px; }\n  section.features .about {\n    flex: 70%; }\n    section.features .about h2 {\n      font-family: "Lato", sans-serif;\n      font-size: 18px;\n      font-weight: 700;\n      color: #3b3a40; }\n    section.features .about .content-about {\n      max-width: 600px;\n      margin-top: 16px; }\n      section.features .about .content-about p {\n        font-family: "Lato", sans-serif;\n        font-size: 18px;\n        font-weight: 400;\n        color: #3b3a40;\n        line-height: 32px;\n        margin-bottom: 16px; }\n\nsection.explore {\n  padding: 0 10%;\n  margin: 40px 0 80px 0; }\n  @media (max-width: 400px) {\n    section.explore {\n      padding: 0 5%; } }\n  section.explore .explore-title {\n    margin-bottom: 36px; }\n    section.explore .explore-title h2 {\n      font-family: "Lato", sans-serif;\n      font-size: 18px;\n      font-weight: 700;\n      color: #3b3a40; }\n    section.explore .explore-title p {\n      font-family: "Lato", sans-serif;\n      font-size: 18px;\n      font-weight: 400;\n      color: #3b3a40;\n      line-height: 32px;\n      margin-top: 16px; }\n  section.explore .search-explore {\n    margin-bottom: 40px;\n    display: flex;\n    flex-direction: row; }\n    section.explore .search-explore .input-search-container {\n      width: 90%; }\n      section.explore .search-explore .input-search-container input {\n        padding: 8px;\n        width: 100%;\n        height: 100%;\n        border: solid 2px #212025;\n        font-family: "Darker Grotesque", sans-serif;\n        font-size: 18px;\n        font-weight: 500; }\n      section.explore .search-explore .input-search-container .warning {\n        border: solid 2px #e24040 !important;\n        transition: 0.1s; }\n    section.explore .search-explore .button-search-container {\n      width: 10%;\n      min-width: 44px;\n      min-height: 44px; }\n      section.explore .search-explore .button-search-container button {\n        cursor: pointer;\n        padding: 8px;\n        width: 100%;\n        height: 44px;\n        padding: 4px 8px;\n        text-decoration: none;\n        border-style: none;\n        background-color: #212025;\n        color: #fff; }\n  section.explore .explore-content,\n  section.explore .favorites-content {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap; }\n    section.explore .explore-content .restaurant,\n    section.explore .favorites-content .restaurant {\n      padding: 10px;\n      flex: 33.3%;\n      margin-bottom: 40px;\n      flex-direction: column; }\n\n@media (min-width: 376px) and (max-width: 768px) {\n  section.explore .explore-content .restaurant,\n  section.explore .favorites-content .restaurant {\n    display: flex;\n    justify-content: center;\n    align-items: center; } }\n      section.explore .explore-content .restaurant .main-image-container,\n      section.explore .favorites-content .restaurant .main-image-container {\n        width: 300px;\n        height: 300px;\n        overflow: hidden;\n        margin-bottom: 16px;\n        text-align: center; }\n        section.explore .explore-content .restaurant .main-image-container img.main-image,\n        section.explore .favorites-content .restaurant .main-image-container img.main-image {\n          height: 300px; }\n          @media (max-width: 400px) {\n            section.explore .explore-content .restaurant .main-image-container img.main-image,\n            section.explore .favorites-content .restaurant .main-image-container img.main-image {\n              height: 260px; } }\n        @media (max-width: 400px) {\n          section.explore .explore-content .restaurant .main-image-container,\n          section.explore .favorites-content .restaurant .main-image-container {\n            width: 260px;\n            height: 260px; } }\n        @media (max-width: 300px) {\n          section.explore .explore-content .restaurant .main-image-container,\n          section.explore .favorites-content .restaurant .main-image-container {\n            width: 220px; } }\n      section.explore .explore-content .restaurant .sub-info,\n      section.explore .favorites-content .restaurant .sub-info {\n        display: flex;\n        width: 300px;\n        margin-bottom: 16px; }\n        @media (max-width: 400px) {\n          section.explore .explore-content .restaurant .sub-info,\n          section.explore .favorites-content .restaurant .sub-info {\n            width: 220px; } }\n        section.explore .explore-content .restaurant .sub-info .rating,\n        section.explore .favorites-content .restaurant .sub-info .rating {\n          display: flex; }\n          section.explore .explore-content .restaurant .sub-info .rating span,\n          section.explore .favorites-content .restaurant .sub-info .rating span {\n            color: #ffb84e;\n            margin-right: 10px; }\n          section.explore .explore-content .restaurant .sub-info .rating p,\n          section.explore .favorites-content .restaurant .sub-info .rating p {\n            font-family: "Lato", sans-serif;\n            font-size: 16px;\n            font-weight: 400; }\n        section.explore .explore-content .restaurant .sub-info p.kota,\n        section.explore .favorites-content .restaurant .sub-info p.kota {\n          margin-left: 22px;\n          font-family: "Lato", sans-serif;\n          font-size: 16px;\n          font-weight: 400; }\n      section.explore .explore-content .restaurant .restaurant-info,\n      section.explore .favorites-content .restaurant .restaurant-info {\n        width: 300px; }\n        @media (max-width: 400px) {\n          section.explore .explore-content .restaurant .restaurant-info,\n          section.explore .favorites-content .restaurant .restaurant-info {\n            width: 220px; } }\n        @media (max-width: 300px) {\n          section.explore .explore-content .restaurant .restaurant-info,\n          section.explore .favorites-content .restaurant .restaurant-info {\n            width: 200px; } }\n        section.explore .explore-content .restaurant .restaurant-info h2,\n        section.explore .favorites-content .restaurant .restaurant-info h2 {\n          font-family: "Lato", sans-serif;\n          font-size: 22px;\n          font-weight: 600; }\n        section.explore .explore-content .restaurant .restaurant-info p,\n        section.explore .favorites-content .restaurant .restaurant-info p {\n          font-family: "Lato", sans-serif;\n          font-size: 16px;\n          font-weight: 400;\n          line-height: 32px; }\n      section.explore .explore-content .restaurant .restaurant-button,\n      section.explore .favorites-content .restaurant .restaurant-button {\n        width: 300px; }\n        section.explore .explore-content .restaurant .restaurant-button a,\n        section.explore .favorites-content .restaurant .restaurant-button a {\n          min-width: 44px;\n          min-height: 44px;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          background-color: #4caf50;\n          /* Green */\n          border: none;\n          color: white;\n          padding: 0px 8px;\n          margin-top: 8px;\n          text-align: center;\n          text-decoration: none;\n          font-size: 16px;\n          cursor: pointer; }\n          @media (max-width: 400px) {\n            section.explore .explore-content .restaurant .restaurant-button a,\n            section.explore .favorites-content .restaurant .restaurant-button a {\n              width: 100%; } }\n        @media (max-width: 400px) {\n          section.explore .explore-content .restaurant .restaurant-button,\n          section.explore .favorites-content .restaurant .restaurant-button {\n            width: 200px; } }\n\nfooter {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: center;\n  padding: 7% 10% 7% 10%;\n  background-color: #2f2e32; }\n  footer h2.title-footer-content {\n    font-family: "Cormorant Garamond", sans-serif;\n    font-size: 80px;\n    font-weight: 300;\n    color: #fdf8ee;\n    margin-bottom: 92px; }\n\n@media (min-width: 376px) and (max-width: 768px) {\n  footer h2.title-footer-content {\n    font-size: 48px; } }\n    @media (max-width: 375px) {\n      footer h2.title-footer-content {\n        font-size: 32px; } }\n  footer .footer-content {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap; }\n    footer .footer-content .about-me {\n      flex: 30%;\n      margin-bottom: 36px;\n      min-width: 300px; }\n      @media (max-width: 375px) {\n        footer .footer-content .about-me {\n          min-width: 200px; } }\n      footer .footer-content .about-me h3 {\n        font-family: "Lato", sans-serif;\n        font-size: 16px;\n        font-weight: 700;\n        color: #fdf8ee;\n        margin-bottom: 16px; }\n      footer .footer-content .about-me .about-me-content p {\n        font-family: "Lato", sans-serif;\n        font-size: 16px;\n        font-weight: 400;\n        color: #fdf8ee;\n        line-height: 32px; }\n    footer .footer-content .about-content {\n      flex: 40%;\n      margin-bottom: 36px;\n      min-width: 300px;\n      padding-right: 7%; }\n      @media (max-width: 375px) {\n        footer .footer-content .about-content {\n          min-width: 200px; } }\n      footer .footer-content .about-content h2 {\n        font-family: "Lato", sans-serif;\n        font-size: 16px;\n        font-weight: 700;\n        color: #fdf8ee;\n        margin-bottom: 16px; }\n      footer .footer-content .about-content .about-app-content p {\n        font-family: "Lato", sans-serif;\n        font-size: 16px;\n        font-weight: 400;\n        color: #fdf8ee;\n        line-height: 32px; }\n    footer .footer-content .for-work {\n      flex: 30%;\n      margin-bottom: 36px;\n      min-width: 300px; }\n      @media (max-width: 375px) {\n        footer .footer-content .for-work {\n          min-width: 200px; } }\n      footer .footer-content .for-work h2 {\n        font-family: "Lato", sans-serif;\n        font-size: 16px;\n        font-weight: 700;\n        margin-bottom: 16px;\n        color: #fdf8ee; }\n      footer .footer-content .for-work .for-work-content p {\n        font-family: "Lato", sans-serif;\n        font-size: 16px;\n        font-weight: 400;\n        color: #fdf8ee;\n        line-height: 32px; }\n\n.copyright {\n  width: 100%;\n  height: 87px;\n  background-color: #212025;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .copyright p {\n    font-family: "Lato", sans-serif;\n    font-size: 18px;\n    font-weight: 300;\n    color: #fdf8ee; }\n    @media (max-width: 375px) {\n      .copyright p {\n        font-size: 14px; } }\n\nnav .topnav .link-content .open {\n  transition: 0.5s;\n  right: 0; }\n\nnav .topnav .link-content .open .nav-wide {\n  display: block !important; }\n',""]),n.exports=e}});