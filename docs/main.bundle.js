webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"main-div\">\r\n  <router-outlet>\r\n </router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-div {\n  margin-top: 7vh; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "app";
        this.navBackground = "./assets/img/navBackground2.jpg";
        this.profile = "./assets/img/profile.jpeg";
        this.pdfResume = "./assets/img/pdfResume.pdf";
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-root",
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resume_resume_component__ = __webpack_require__("../../../../../src/app/resume/resume.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__portfolio_portfolio_component__["a" /* PortfolioComponent */],
                __WEBPACK_IMPORTED_MODULE_7__resume_resume_component__["a" /* ResumeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__app_router__["a" /* routes */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resume_resume_component__ = __webpack_require__("../../../../../src/app/resume/resume.component.ts");



var router = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__resume_resume_component__["a" /* ResumeComponent */], pathMatch: 'full' },
    { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_1__portfolio_portfolio_component__["a" /* PortfolioComponent */] }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(router);


/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark\">\r\n  <ul class=\"navbuttons\">\r\n    <li class=\"home navinline navbutton\">\r\n      <a routerLink=''><i class=\"fas fa-home fa-2x navIcons\"></i></a>\r\n    </li>\r\n    <li class=\"portfolio navinline navbutton\">\r\n      <a routerLink='portfolio'><i class=\"fas fa-folder-open fa-2x navIcons\"></i></a>\r\n    </li>\r\n  </ul>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 7vh;\n  z-index: 99;\n  background: #5093ce;\n  background: -webkit-gradient(linear, left top, right top, from(#5093ce), color-stop(54%, #4273ab), to(#0e518f));\n  background: linear-gradient(to right, #5093ce 0%, #4273ab 54%, #0e518f 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5093ce', endColorstr='#0e518f',GradientType=1 );\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.navIcons {\n  color: ghostwhite; }\n\n.navbuttons {\n  position: relative;\n  width: 100%;\n  margin: 0;\n  padding: 0; }\n\n.navbuttons > li {\n  display: inline-block;\n  padding: 0 10px;\n  font-size: 20px;\n  color: white;\n  line-height: 0.9;\n  margin: 10px 0; }\n\n.navbuttons > li > svg:hover {\n  border-bottom: #ffffff solid 1.5px;\n  padding-bottom: 2px;\n  cursor: pointer; }\n\n@media (max-width: 768px) {\n  .navbuttons {\n    text-align: center; }\n  .navbuttons > li {\n    width: 33.3333334%;\n    float: left; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-text\">\n  Portfolio\n</div>\n\n<div class=\"page-layout\">\n  <div class=\"side-left astrobg\"></div>\n\n  <div class=\"side-right astrobg\"></div>\n\n  <div class=\"container\">\n    <div class=\"main-img\">\n      <img src=\"./assets/img/Tao.jpg\" id=\"current\">\n    </div> <div class=\"imgs\">\n      <img (click)=\"imgClick($event)\" src=\"./assets/img/Tao.jpg\">\n      <img (click)=\"imgClick($event)\" src=\"./assets/img/TaoAbout.jpg\">\n      <img (click)=\"imgClick($event)\" src=\"./assets/img/TaoSchedule.jpg\">\n      <img (click)=\"imgClick($event)\" src=\"./assets/img/TaoRoster.jpg\">\n      <img (click)=\"imgClick($event)\" src=\"./assets/img/Daletributes.jpg\">\n      <img (click)=\"imgClick($event)\" src=\"./assets/img/LoanCalc1.jpg\">\n      <img (click)=\"imgClick($event)\" src=\"./assets/img/LoanCalc2.jpg\">\n      <img (click)=\"imgClick($event)\" src=\"./assets/img/drumKit.jpg\">\n    </div>\n  </div>\n</div>\n\n\n<!-- [style.background-image] = \"'url(\\'./assets/img/bgPalm.png\\')'\" -->\n"

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-layout {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[6];\n      grid-template-columns: repeat(6, 1fr);\n      grid-template-areas: \"side-left container container container container side-right\"\r \"side-left imgs imgs imgs imgs side-right\";\n  grid-gap: 20px;\n  width: 100%;\n  grid-auto-flow: dense; }\n\n.container {\n  width: 100%;\n  border: #386ba5 solid 3px;\n  background: rgba(0, 0, 0, 0.63);\n  padding-bottom: 12px;\n  -ms-grid-row: 1;\n  -ms-grid-column: 2;\n  -ms-grid-column-span: 4;\n  grid-area: container; }\n\n.side-left {\n  -ms-grid-row: 1;\n  -ms-grid-row-span: 2;\n  -ms-grid-column: 1;\n  grid-area: side-left;\n  grid-column-start: 1;\n  grid-column-end: 3;\n  margin-bottom: 5px;\n  margin-left: 5px;\n  margin-top: 5px; }\n\n.side-right {\n  -ms-grid-row: 1;\n  -ms-grid-row-span: 2;\n  -ms-grid-column: 6;\n  grid-area: side-right;\n  -ms-grid-column: 5;\n      grid-column-start: 5;\n  grid-column-end: 7;\n  -webkit-transform: scaleX(-1);\n  transform: scaleX(-1);\n  z-index: -1;\n  margin-bottom: 5px;\n  margin-right: 5px;\n  margin-top: 5px; }\n\n.astrobg {\n  background-image: url(\"https://i.imgur.com/4lwIqTP.jpg\"); }\n\n.main-img img,\n.imgs img {\n  width: 100%;\n  padding-top: 12px; }\n\n.imgs {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[4];\n      grid-template-columns: repeat(4, 1fr);\n  grid-gap: 5px;\n  background: #000;\n  -ms-grid-row: 2;\n  -ms-grid-column: 2;\n  -ms-grid-column-span: 4;\n  grid-area: imgs; }\n\n@-webkit-keyframes fadeIn {\n  to {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  to {\n    opacity: 1; } }\n\n.fade-in {\n  opacity: 0;\n  -webkit-animation: fadeIn 0.5s ease-in 1 forwards;\n          animation: fadeIn 0.5s ease-in 1 forwards; }\n\n@-webkit-keyframes filling {\n  from {\n    background-position: center 25%; }\n  to {\n    background-position: center 50%; } }\n\n@keyframes filling {\n  from {\n    background-position: center 25%; }\n  to {\n    background-position: center 50%; } }\n\n.container-text {\n  background-image: url(\"http://www.prosportsbackgrounds.com/assets/car-city2.png\");\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n  color: #FFFFFF;\n  font-size: 90px;\n  font-family: 'Bungee', cursive;\n  -webkit-animation: filling 3s ease forwards;\n          animation: filling 3s ease forwards;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
        this.tao = "./img/Tao.jpg";
        this.taoAbout = "./img/TaoAbout.jpg";
        this.taoSchedule = "./img/TaoSchedule.jpg";
        this.taoRoster = "./img/TaoRoster.jpg";
        this.daletributes = "./img/Daletributes.jpg";
        this.loanCalc1 = "./img/LoanCalc1.jpg";
        this.loanCalc2 = "./img/LoanCalc2.jpg";
        this.opacity = 0.6;
        this.bgPalm = "./img/bgPalm.png";
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        this.current = document.querySelector('#current');
        this.imgs = document.querySelectorAll('.imgs img');
        // Set first img opacity
        this.imgs[0].style.opacity = this.opacity;
    };
    PortfolioComponent.prototype.imgClick = function (e) {
        var _this = this;
        for (var i = 0; i < this.imgs.length; i++) {
            this.imgs[i].style.opacity = 1;
        }
        // Change current img to clicked img
        this.current.src = e.target.src;
        // Add fade in class
        this.current.classList.add('fade-in');
        // Remove fade-in class after .5s
        setTimeout(function () { return _this.current.classList.remove('fade-in'); }, 500);
        // Change opacity to opacity var
        e.target.style.opacity = this.opacity;
    };
    PortfolioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-portfolio',
            template: __webpack_require__("../../../../../src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portfolio/portfolio.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "../../../../../src/app/resume/resume.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <img class=\"bgimg1\" [src]=\"navBackground\">\n</div>\n\n<div class=\"wrapper-grid\">\n  <div class=\"card left-profile\">`\n    <div class=\"profile-div\">\n      <img class=\"profile-img\" [src]=\"profile\" alt=\"Profile\">\n      <div class=\"profile-text\">Michael DeConzo</div>\n    </div>\n    <!-- Left Section of column page -->\n    <h4>Web Application Developer</h4>\n    <ul class=\"personal-info\">\n      <li>Date Of Birth: January 20th, 1988</li>\n      <li>Email: Medeconzo@gmail.com</li>\n      <li>Website:\n        <a href=\"https://ovarmorrow.github.io/\">Landing Page</a>\n      </li>\n    </ul>\n\n\n    <ul class=\"skills\">\n      <li>Languages: C#, CSS, HTML, JavaScript, SQL, AngularJS, Bootstrap, JQuery</li>\n      <li>Platforms: Windows, ASP.NET/WebForms/MVC, Entity Framework </li>\n      <li>Software: MS Office, Visual Studios SQL Server, SQ Lite, Git</li>\n    </ul>\n\n    <h4>Experience</h4>\n\n    <p> Developer with knowledge of C#, ASP.Net MVC 5, SQL Server along with HTML 5, CSS and Bootstrap. I've been working closely\n      with Senior Developers to cement my knowledge of these languages and expand my portfolio. I know how to work successfully\n      with a team to get things done with the highest quality standards. I thrive in a dynamic working environment and enjoy\n      taking on new challenges. I am a quick study and have a passion for technology and learning.</p>\n\n    <h4>PDF Resume</h4>\n\n    <a [href]=\"MDResumeJuly18\" class=\"buttonDownload\" download>Download</a>\n\n  </div>\n  <!-- Right column section of page -->\n  <div class=\"card work-experience\">\n    <h1>Work Experience</h1>\n\n    <div>\n      <h3>Pinetop Systems - Junior Web Developer</h3>\n      <span class=\"timeline\">\n        <i class=\"fas fa-calendar-alt\"></i> 01/2018-Present</span>\n      <ul>\n        <li>Developed marketing website using bootstrap and database integration with SQL server</li>\n        <li>Built web pages using HTML, JQuery, Bootstrap, and C#</li>\n        <li>Partnered with designers to create sitemaps, improve Web page layouts and interfaces</li>\n        <li>Coordinated with marketing team for the presentation of website and other marketing material</li>\n\n      </ul>\n    </div>\n    <hr />\n    <div>\n      <h3>Power Curbers - Shipping and Receiving</h3>\n      <span class=\"timeline\">\n        <i class=\"fas fa-calendar-alt\"></i> 11/2014-Present</span>\n      <ul>\n        <li>Thorough labeling, organization and continuing maintenance of all service inventory through use of SAGE mass system,\n          accompanying physical double checking. </li>\n        <li>Extensive experience with Starship transportation program and its tools for use in packaging and shipment of service\n          parts. </li>\n        <li>In Depth knowledge of various oversea requirements and stipulations depending on cargo, contents and shipment methods.\n          (LTL freight classing, heat treated lumber, air freight regulations and commercial invoicing)\n        </li>\n        <li>Setup and packaging for overseas container shipments as well as construction of Bill of Lading. </li>\n        <li>Extensive experience loading heavy equipment onto and into varying types of trailers (RGN, Stepdeck and Container)\n          as well as proper methods in properly securing cargo for transit.</li>\n      </ul>\n    </div>\n    <hr />\n    <div>\n      <h3>Power Curbers - Media Blaster</h3>\n      <span class=\"timeline\">\n        <i class=\"fas fa-calendar-alt\"></i> 05/2014-11/2014</span>\n      <ul>\n        <li>Thorough labeling, organization and continuing maintenance of all service inventory through use of SAGE mass system,\n          accompanying physical double checking. </li>\n        <li>Extensive experience with Starship transportation program and its tools for use in packaging and shipment of service\n          parts. </li>\n        <li>In Depth knowledge of various oversea requirements and stipulations depending on cargo, contents and shipment methods.\n          (LTL freight classing, heat treated lumber, air freight regulations and commercial invoicing)\n        </li>\n        <li>Setup and packaging for overseas container shipments as well as construction of Bill of Lading. </li>\n        <li>Extensive experience loading heavy equipment onto and into varying types of trailers (RGN, Stepdeck and Container)\n          as well as proper methods in properly securing cargo for transit.</li>\n      </ul>\n    </div>\n    <div>\n      <h3>Rodgers Unloading - Material Handler</h3>\n      <span class=\"timeline\">\n        <i class=\"fas fa-calendar-alt\"></i> 07/2014-10/2014</span>\n      <ul>\n        <li>Loaded materials into vehicles and installed strapping, bracing, or padding to prevent shifting or damage in transit</li>\n        <li>Conveyed materials to or from storage or work sites to designated area</li>\n        <li>Secured lifting attachments to materials and conveyed load to destination</li>\n      </ul>\n    </div>\n  </div>\n  <!-- Right buttom column section -->\n  <div class=\"card education\">\n    <h1>Education</h1>\n\n    <div>\n      <h3>Surry Community College</h3>\n      <span class=\"timeline\">\n        <i class=\"fas fa-calendar-alt\"></i> 08/2006-05/2008</span>\n      <p>Associate in Arts program coursework</p>\n    </div>\n    <hr />\n    <div>\n      <h3>West Stokes High School</h3>\n      <span class=\"timeline\">\n        <i class=\"fas fa-calendar-alt\"></i> 09/2002-05/2006</span>\n      <p>High School Diploma</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/resume/resume.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".left-profile {\n  grid-area: profile;\n  width: 100%; }\n\n.work-experience {\n  grid-area: work; }\n\n.education {\n  grid-area: education; }\n\n.bgimg1 {\n  height: 25vh;\n  width: 100%; }\n\n.profile-img {\n  max-width: 100%;\n  height: auto;\n  display: block; }\n\n.profile-text {\n  position: absolute;\n  bottom: 8px;\n  left: 25px;\n  height: 25px;\n  background-color: rgba(255, 255, 255, 0.15);\n  text-align: center;\n  font-family: \"Kaushan Script\", cursive;\n  font-size: 19px; }\n\n.profile-div {\n  position: relative;\n  text-align: center;\n  color: black;\n  display: inline-block; }\n\n.left-profile > h4 {\n  padding-top: 1em; }\n\n.timeline {\n  color: #0b538f;\n  font-size: 1rem; }\n\n.buttonDownload {\n  display: inline-block;\n  position: relative;\n  padding: 10px 25px;\n  background-color: #0b538f;\n  color: white;\n  font-family: sans-serif;\n  text-decoration: none;\n  font-size: 0.9em;\n  text-align: center;\n  text-indent: 15px;\n  width: 131px; }\n\n.buttonDownload:hover {\n  background-color: #1f73b8;\n  color: white; }\n\n.buttonDownload:before,\n.buttonDownload:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  left: 15px;\n  top: 52%; }\n\n/* Download box shape  */\n\n.buttonDownload:before {\n  width: 10px;\n  height: 2px;\n  border-style: solid;\n  border-width: 0 2px 2px; }\n\n/* Download arrow shape */\n\n.buttonDownload:after {\n  width: 0;\n  height: 0;\n  margin-left: 1px;\n  margin-top: -7px;\n  border-style: solid;\n  border-width: 4px 4px 0 4px;\n  border-color: transparent;\n  border-top-color: inherit;\n  -webkit-animation: downloadArrow 2s linear infinite;\n          animation: downloadArrow 2s linear infinite;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused; }\n\n.buttonDownload:hover:before {\n  border-color: #fff; }\n\n.buttonDownload:hover:after {\n  border-top-color: #fff;\n  -webkit-animation-play-state: running;\n          animation-play-state: running; }\n\n/* keyframes for the download icon anim */\n\n@-webkit-keyframes downloadArrow {\n  /* 0% and 0.001% keyframes used as a hackish way of having the button frozen on a nice looking frame by default */\n  0% {\n    margin-top: -7px;\n    opacity: 1; }\n  0.001% {\n    margin-top: -15px;\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    margin-top: 0;\n    opacity: 0; } }\n\n@keyframes downloadArrow {\n  /* 0% and 0.001% keyframes used as a hackish way of having the button frozen on a nice looking frame by default */\n  0% {\n    margin-top: -7px;\n    opacity: 1; }\n  0.001% {\n    margin-top: -15px;\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    margin-top: 0;\n    opacity: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/resume/resume.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
        this.navBackground = "./img/navBackground2.jpg";
        this.profile = "./img/profile.jpeg";
        this.MDResumeJuly18 = "./img/MDResumeJuly18.pdf";
    }
    ResumeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-resume',
            template: __webpack_require__("../../../../../src/app/resume/resume.component.html"),
            styles: [__webpack_require__("../../../../../src/app/resume/resume.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map