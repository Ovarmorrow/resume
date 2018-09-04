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

module.exports = "<div class=\"container-text\">\n  Portfolio\n</div>\n\n<div class=\"page-layout\">\n  <div class=\"side-left astrobg\"></div>\n\n  <div class=\"side-right astrobg\"></div>\n\n  <div class=\"container\">\n    <div class=\"main-img\">\n      <img src=\"./assets/img/Tao.jpg\" id=\"current\">\n    </div>\n    <span *ngFor=\"let p of projects; let i = index\">\n        <span id=\"project{{ i }}\" class=\"project-description\" style=\"color: white; display: none;\">{{ p.projectDesc }}</span> \n    </span>\n    <div class=\"imgs\">\n      <span *ngFor=\"let p of projects; let i = index\">\n          <!-- <p style=\"color: white\">{{ p.projectName }}</p> \n          <p style=\"color: white\">{{ p.projectDesc }}</p>  -->\n        <img [src]=\"p.projectImg\" alt=\"Primary\" (click)=\"imgClick($event, i)\">\n      </span>\n      <!-- <tr *ngFor=\"let c of content\">           \n          <td *ngFor=\"let key of c | keys\">{{key}}: {{c[key]}}</td>\n        </tr> -->\n        \n      <!-- <img (click)=\"imgClick($event)\" src=\"./assets/img/Tao.jpg\">\n      <img (click)=\"imgClick($event)\" src=\"./assets/img/TaoAbout.jpg\">\n      <img (click)=\"imgClick($event)\" src=\"./assets/img/TaoSchedule.jpg\">\n      <img (click)=\"imgClick($event)\" src=\"./assets/img/TaoRoster.jpg\">\n      <img (click)=\"imgClick($event)\" src=\"./assets/img/Daletributes.jpg\">\n      <img (click)=\"imgClick($event)\" src=\"./assets/img/LoanCalc1.jpg\">\n      <img (click)=\"imgClick($event)\" src=\"./assets/img/LoanCalc2.jpg\">\n      <img (click)=\"imgClick($event)\" src=\"./assets/img/drumKit.jpg\"> -->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-layout {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[6];\n      grid-template-columns: repeat(6, 1fr);\n      grid-template-areas: \"side-left container container container container side-right\"\r \"side-left imgs imgs imgs imgs side-right\";\n  grid-gap: 20px;\n  width: 100%;\n  grid-auto-flow: dense; }\n\n.container {\n  width: 100%;\n  border: #386ba5 solid 3px;\n  background: rgba(0, 0, 0, 0.63);\n  padding-bottom: 12px;\n  -ms-grid-row: 1;\n  -ms-grid-column: 2;\n  -ms-grid-column-span: 4;\n  grid-area: container; }\n\n.side-left {\n  -ms-grid-row: 1;\n  -ms-grid-row-span: 2;\n  -ms-grid-column: 1;\n  grid-area: side-left;\n  grid-column-start: 1;\n  grid-column-end: 5;\n  grid-row-start: 1;\n  grid-row-end: 4;\n  margin-bottom: 5px;\n  margin-left: 5px;\n  margin-top: 5px; }\n\n.side-right {\n  -ms-grid-row: 1;\n  -ms-grid-row-span: 2;\n  -ms-grid-column: 6;\n  grid-area: side-right;\n  -ms-grid-column: 4;\n      grid-column-start: 4;\n  grid-column-end: 7;\n  grid-row-start: 1;\n  grid-row-end: 4;\n  -webkit-transform: scaleX(-1);\n  transform: scaleX(-1);\n  z-index: -1;\n  margin-bottom: 5px;\n  margin-right: 5px;\n  margin-top: 5px; }\n\n.astrobg {\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(172, 213, 240, 0)), to(#4e95dc));\n  background: linear-gradient(to bottom, rgba(172, 213, 240, 0) 0%, #4e95dc 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00acd5f0', endColorstr='#4e95dc',GradientType=0 );\n  /* IE6-9 */ }\n\n.main-img img,\n.imgs img {\n  width: 100%;\n  padding-top: 12px; }\n\n.imgs {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[4];\n      grid-template-columns: repeat(4, 1fr);\n  grid-gap: 5px;\n  background: #000;\n  -ms-grid-row: 2;\n  -ms-grid-column: 2;\n  -ms-grid-column-span: 4;\n  grid-area: imgs; }\n\n@-webkit-keyframes fadeIn {\n  to {\n    opacity: 0.5;\n    -webkit-animation: fadeIn 0.5s ease-in 1 forwards;\n            animation: fadeIn 0.5s ease-in 1 forwards; } }\n\n@keyframes fadeIn {\n  to {\n    opacity: 0.5;\n    -webkit-animation: fadeIn 0.5s ease-in 1 forwards;\n            animation: fadeIn 0.5s ease-in 1 forwards; } }\n\n.fade-in {\n  opacity: 0;\n  -webkit-animation: fadeIn 0.5s ease-in 1 forwards;\n          animation: fadeIn 0.5s ease-in 1 forwards; }\n\n@-webkit-keyframes filling {\n  from {\n    background-position: center 25%; }\n  to {\n    background-position: center 50%; } }\n\n@keyframes filling {\n  from {\n    background-position: center 25%; }\n  to {\n    background-position: center 50%; } }\n\n.container-text {\n  background-image: url(\"https://images.pexels.com/photos/1292998/pexels-photo-1292998.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260\");\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n  color: #FFFFFF;\n  font-size: 90px;\n  font-family: 'Bungee', cursive;\n  -webkit-animation: filling 3s ease forwards;\n          animation: filling 3s ease forwards;\n  text-align: center; }\n", ""]);

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
        this.projects = [{
                "projectName": "p1",
                "projectDesc": "My first project! Panthers fan page built with just HTML and CSS",
                "projectImg": "./assets/img/Tao.jpg"
            },
            {
                "projectName": "p2",
                "projectDesc": "The About section of the Panthers page. It was exciting learning to tinker with img sizing and doing a source quote. HTML and CSS",
                "projectImg": "./assets/img/TaoAbout.jpg"
            },
            {
                "projectName": "p3",
                "projectDesc": "Challenge Project: Build a Dale Generator. It will randomize all the results in each column. Built with C#",
                "projectImg": "./assets/img/Daletributes.jpg"
            },
            {
                "projectName": "p4",
                "projectDesc": "Challenge Project: Build a loan calculator. The routing and math portions are my biggest accomplishments here. Built with C#",
                "projectImg": "./assets/img/LoanCalc1.jpg"
            },
            {
                "projectName": "p5",
                "projectDesc": "The final tables after loans are entered. Expanded my knowledge on the use of tables and changing their output display. C#",
                "projectImg": "./assets/img/LoanCalc2.jpg"
            },
            {
                "projectName": "p6",
                "projectDesc": "Fully vanilla Javascript keyboard drumkit. I grow to love js the more I sink my teeth into it",
                "projectImg": "./assets/img/drumKit.jpg"
            },
            {
                "projectName": "p7",
                "projectDesc": "Fully vanilla Javascript weather application. My first jump into consuming REST API service calls using AJAX and JSON, then filtering the return data",
                "projectImg": "./assets/img/UnderTheWeather.jpg"
            },
        ];
        this.tao = "./assets/img/Tao.jpg";
        this.taoAbout = "./assets/img/TaoAbout.jpg";
        this.taoSchedule = "./assets/img/TaoSchedule.jpg";
        this.taoRoster = "./assets/img/TaoRoster.jpg";
        this.daletributes = "./assets/img/Daletributes.jpg";
        this.loanCalc1 = "./assets/img/LoanCalc1.jpg";
        this.loanCalc2 = "./assets/img/LoanCalc2.jpg";
        this.underTheWeather = "./assets/img/UnderTheWeather.jpg";
        this.opacity = 0.6;
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        this.current = document.querySelector('#current');
        this.imgs = document.querySelectorAll('.imgs img');
        // Set first img opacity
        // this.imgs[0].style.opacity = this.opacity;
    };
    PortfolioComponent.prototype.imgClick = function (e, index) {
        var _this = this;
        //Reset all image opacity on click
        var imgArray = Array.from(document.querySelectorAll('.imgs img'));
        imgArray.forEach(function (img) {
            _this.img = img;
            _this.img.style.opacity = 1;
            // console.log("img", img);
        });
        // target all project-description elements and hide them
        this.pD = document.getElementsByClassName("project-description");
        // console.log('this.pD', this.pD);
        for (var i = 0; i < this.pD.length; i++) {
            this.pD[i].style.display = "none";
            // console.log('pD', this.pD[i]);
        }
        // console.log(this.imgs[1]);
        // Change current img to clicked img
        this.current.src = e.target.src;
        // Add fade in class
        this.current.classList.add('fade-in');
        // Remove fade-in class after .5s
        setTimeout(function () { return _this.current.classList.remove('fade-in'); }, 500);
        // Change opacity to opacity var
        e.target.style.opacity = this.opacity;
        var currentProject = "project" + index;
        console.log('currentProject', currentProject);
        var cP = document.getElementById(currentProject);
        cP.style.display = "flex";
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

module.exports = "<div>\n  <img class=\"bgimg1\" [src]=\"navBackground\">\n</div>\n\n<div class=\"wrapper-grid\">\n  <div class=\"card left-profile\">\n    <div class=\"profile-div\">\n      <img class=\"profile-img\" [src]=\"profile\" alt=\"Profile\">\n      <div class=\"profile-text\">Michael DeConzo</div>\n    </div>\n    <!-- Left column section of  page -->\n    <h4>Web Application Developer</h4>\n    <ul class=\"personal-info\">\n      <li>Date Of Birth: January 20th, 1988</li>\n      <li>Email: Medeconzo@gmail.com</li>\n      <li>Websites:\n        <a href=\"https://ovarmorrow.github.io/\">\n          <strong>Landing Page</strong>\n        </a> &nbsp;|&nbsp;&nbsp;\n        <a routerLink='portfolio'>\n          <strong>Portfolio</strong>\n        </a>\n      </li>\n    </ul>\n\n\n    <ul class=\"skills\">\n      <li>Languages: C#, JavaScript, CSS, Angular2+, HTML, SQL, Bootstrap</li>\n      <li>Platforms: Windows, ASP.NET/WebForms/MVC, Entity Framework </li>\n      <li>Software: MS Office, Visual Studios / VSCode, SQL Server, Git</li>\n    </ul>\n\n    <h4>PDF Resume</h4>\n\n    <a [href]=\"MDResumeAugust18\" class=\"buttonDownload\" download>Download</a>\n\n  </div>\n\n  <div class=\"card experience\">\n    <h1>Experience</h1>\n\n    <p> Web Developer with knowledge of C#, ASP.Net MVC 5, SQL Server along with HTML 5, CSS and Bootstrap. Working closely with\n      Senior Developers to cement knowledge of affore mentioned languages and expand my portfolio. Adept at working successfully\n      with a team to find solutions with the highest quality standards. I thrive in a dynamic working environment and enjoy\n      taking on new challenges. I am a quick study and have a passion for technology and erudition.</p>\n  </div>\n\n  <div class=\"card education\">\n    <h1>Education</h1>\n\n    <div>\n      <h3>Surry Community College</h3>\n      <span class=\"timeline\">\n        <i class=\"fas fa-calendar-alt\"></i> 08/2006-05/2008</span>\n      <p>Associate in Arts program coursework</p>\n    </div>\n    <hr />\n    <div>\n      <h3>West Stokes High School</h3>\n      <span class=\"timeline\">\n        <i class=\"fas fa-calendar-alt\"></i> 09/2002-05/2006</span>\n      <p>High School Diploma</p>\n    </div>\n  </div>\n  <!-- Right column section of page -->\n  <div class=\"card work-experience\">\n    <h1>Work Experience</h1>\n\n    <div>\n      <h3>Pinetop Systems - Junior Web Developer</h3>\n      <span class=\"timeline\">\n        <i class=\"fas fa-calendar-alt\"></i> 01/2018-Present</span>\n      <ul>\n        <li>Developed marketing website using bootstrap and database integration with SQL server</li>\n        <li>Built web pages using HTML, JQuery, Bootstrap, and C#</li>\n        <li>Partnered with designers to create sitemaps, improve Web page layouts and interfaces</li>\n        <li>Coordinated with marketing team for the presentation of website and other marketing material</li>\n\n      </ul>\n    </div>\n    <hr />\n    <div>\n      <h3>Power Curbers - Shipping and Receiving</h3>\n      <span class=\"timeline\">\n        <i class=\"fas fa-calendar-alt\"></i> 11/2014-Present</span>\n      <ul>\n        <li>Thorough labeling, organization and continuing maintenance of all service inventory through use of SAGE mass system,\n          accompanying physical double checking. </li>\n        <li>Extensive experience with Starship transportation program and its tools for use in packaging and shipment of service\n          parts. </li>\n        <li>In Depth knowledge of various oversea requirements and stipulations depending on cargo, contents and shipment methods.\n          (LTL freight classing, heat treated lumber, air freight regulations and commercial invoicing)\n        </li>\n        <li>Setup and packaging for overseas container shipments as well as construction of Bill of Lading. </li>\n        <li>Extensive experience loading heavy equipment onto and into varying types of trailers (RGN, Stepdeck and Container)\n          as well as proper methods in properly securing cargo for transit.</li>\n      </ul>\n    </div>\n    <hr />\n    <div>\n      <h3>Power Curbers - Media Blaster</h3>\n      <span class=\"timeline\">\n        <i class=\"fas fa-calendar-alt\"></i> 05/2014-11/2014</span>\n      <ul>\n        <li>Thorough labeling, organization and continuing maintenance of all service inventory through use of SAGE mass system,\n          accompanying physical double checking. </li>\n        <li>Extensive experience with Starship transportation program and its tools for use in packaging and shipment of service\n          parts. </li>\n        <li>In Depth knowledge of various oversea requirements and stipulations depending on cargo, contents and shipment methods.\n          (LTL freight classing, heat treated lumber, air freight regulations and commercial invoicing)\n        </li>\n        <li>Setup and packaging for overseas container shipments as well as construction of Bill of Lading. </li>\n        <li>Extensive experience loading heavy equipment onto and into varying types of trailers (RGN, Stepdeck and Container)\n          as well as proper methods in properly securing cargo for transit.</li>\n      </ul>\n    </div>\n    <div>\n      <h3>Rodgers Unloading - Material Handler</h3>\n      <span class=\"timeline\">\n        <i class=\"fas fa-calendar-alt\"></i> 07/2014-10/2014</span>\n      <ul>\n        <li>Loaded materials into vehicles and install strapping, bracing, or padding to prevent shifting or damage in transit</li>\n        <li>Conveyed materials to or from storage or work sites to designated area</li>\n        <li>Secured lifting attachments to materials and conveyed load to destination</li>\n      </ul>\n    </div>\n  </div>\n  <!-- Right bottom column section -->\n  <section class=\"card projects\">\n    <h1>Projects</h1>\n\n    <a class=\"filter\" data-filter=\"all\" tabindex=\"-1\">ALL</a>\n    <a class=\"filter\" data-filter=\"htmlcss\" tabindex=\"-1\">HTML/CSS</a>\n    <a class=\"filter\" data-filter=\"javascript\" tabindex=\"-1\">JAVASCRIPT</a>\n    <a class=\"filter\" data-filter=\"c#\" tabindex=\"-1\">C#</a>\n\n    <div (mouseenter)=\"mouseEnter($event)\" (mouseleave)=\"mouseLeave($event)\" class=\"thumbnails\" data-filter=\"htmlcss\">\n      <img src=\"./assets/img/Taothumb.jpg\">\n      <div class=\"overlay\">\n        <div class=\"text\">Third and Out</div>\n        <span class=\"highlight\">HTML / CSS</span>\n      </div>\n    </div>\n\n    <div (mouseenter)=\"mouseEnter($event)\" (mouseleave)=\"mouseLeave($event)\" class=\"thumbnails\" data-filter=\"c#\">\n      <img src=\"./assets/img/Loanthumb.jpg\">\n      <div class=\"overlay\">\n        <div class=\"text\">Loan Calculator</div>\n        <span class=\"highlight\">C#</span>\n      </div>\n    </div>\n\n    <div (mouseenter)=\"mouseEnter($event)\" (mouseleave)=\"mouseLeave($event)\" class=\"thumbnails\" data-filter=\"javascript\">\n      <img src=\"./assets/img/drumthumb.jpg\">\n      <div class=\"overlay\">\n        <div class=\"text\">Drumkit</div>\n        <span class=\"highlight\">Javascript</span>\n      </div>\n    </div>\n\n    <div (mouseenter)=\"mouseEnter($event)\" (mouseleave)=\"mouseLeave($event)\" class=\"thumbnails\" data-filter=\"javascript\">\n      <img src=\"./assets/img/Underthumb.jpg\">\n      <div class=\"overlay\">\n        <div class=\"text\">Under the Weather</div>\n        <span class=\"highlight\">Javascript</span>\n      </div>\n    </div>\n\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/resume/resume.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper-grid {\n  margin: 25px 2% 2% 2%;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 30% 1fr;\n      grid-template-columns: 30% 1fr;\n      grid-template-areas: \"profile work\" \"experience projects\" \"education projects\";\n  grid-gap: 20px; }\n\n.card {\n  text-align: left;\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  padding: 15px; }\n\nh1 {\n  font-family: 'Amaranth', sans-serif; }\n\n.experience {\n  -ms-grid-row: 2;\n  -ms-grid-column: 1;\n  grid-area: experience; }\n\n.experience p {\n    font-size: 13px; }\n\n.left-profile {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  font-size: 14px;\n  -ms-grid-row: 1;\n  -ms-grid-column: 1;\n  grid-area: profile;\n  width: 100%; }\n\n.left-profile .personal-info {\n    list-style: none; }\n\n.work-experience {\n  -ms-grid-row: 1;\n  -ms-grid-column: 2;\n  grid-area: work;\n  padding: 2%;\n  font-size: 15px; }\n\n.work-experience div {\n    margin: 4px; }\n\n.work-experience ul {\n    margin-top: 7px; }\n\n.work-experience li {\n    margin-top: 6px; }\n\n.work-experience .timeline {\n    margin-left: 20px; }\n\n.work-experience h3 {\n    margin-bottom: 10px; }\n\n.education {\n  -ms-grid-row: 3;\n  -ms-grid-column: 1;\n  grid-area: education; }\n\n.bgimg1 {\n  height: 25vh;\n  width: 100%; }\n\n.profile-img {\n  max-width: 100%;\n  height: auto;\n  display: block; }\n\n.profile-text {\n  position: absolute;\n  bottom: 8px;\n  left: 25px;\n  height: 25px;\n  background-color: rgba(255, 255, 255, 0.15);\n  text-align: center;\n  font-family: \"Kaushan Script\", cursive;\n  font-size: 19px; }\n\n.profile-div {\n  position: relative;\n  text-align: center;\n  color: black;\n  display: inline-block; }\n\n.left-profile > h4 {\n  padding-top: 1em;\n  font-family: 'Amaranth', sans-serif; }\n\n.timeline {\n  color: #0b538f;\n  font-size: 1.7rem; }\n\n.projects {\n  grid-row: span 2; }\n\nsection {\n  display: block;\n  float: left;\n  min-height: 300px;\n  width: 100%;\n  border-radius: 4px; }\n\n.filter {\n  display: block;\n  float: left;\n  margin-bottom: 25px;\n  width: 25%;\n  border: #fff 3px solid;\n  text-decoration: none;\n  text-align: center;\n  padding: 5px 0;\n  color: white;\n  background: #1271C7; }\n\n.filter:hover {\n    cursor: pointer;\n    background: black; }\n\nsection > div {\n  display: block;\n  float: left;\n  margin: 10px;\n  -webkit-transition: all .8s linear;\n  transition: all .8s linear;\n  margin-top: 20px; }\n\n.thumbnails {\n  position: relative;\n  margin: 0; }\n\n.thumbnails.active .text {\n    -webkit-transition-property: opacity;\n    transition-property: opacity;\n    -webkit-transition-duration: 2s;\n            transition-duration: 2s;\n    opacity: 1; }\n\n.thumbnails.active img {\n    opacity: 0.2; }\n\n.thumbnails.active .highlight {\n    -webkit-transition-property: opacity;\n    transition-property: opacity;\n    -webkit-transition-duration: 1s;\n            transition-duration: 1s;\n    opacity: 1; }\n\n.thumbnails img {\n  display: block;\n  height: 170px;\n  width: 100%;\n  max-width: 250px;\n  border-radius: 7px;\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-transition: all .2 ease-in-out;\n  transition: all .2 ease-in-out; }\n\n.overlay {\n  overflow: hidden;\n  width: 100%;\n  height: 100%; }\n\n.overlay:hover {\n    display: block; }\n\n.thumbnails img:hover {\n  opacity: 0.2; }\n\n.text {\n  opacity: 0;\n  text-align: center;\n  width: 100%;\n  font-family: 'Amaranth', sans-serif;\n  color: black;\n  font-size: 25px;\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.text:after {\n    content: \"\";\n    display: inline-block; }\n\n.highlight {\n  opacity: 0;\n  font-family: 'Quantico', sans-serif;\n  color: #1271C7;\n  text-shadow: 2px 2px #000000;\n  font-size: 22px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.card.projects .thumbnails:hover {\n  cursor: pointer; }\n\n.card.projects .filter {\n  text-decoration: none; }\n\na:focus[data-filter] {\n  opacity: .8;\n  outline: none; }\n\na[data-filter=\"htmlcss\"]:focus ~ div:not([data-filter=\"htmlcss\"]),\na[data-filter=\"htmlcss\"]:focus ~ div:not([data-filter=\"htmlcss\"]) img {\n  height: 0px;\n  width: 0px;\n  border: none;\n  margin: 0;\n  opacity: 0; }\n\na[data-filter=\"javascript\"]:focus ~ div:not([data-filter=\"javascript\"]),\na[data-filter=\"javascript\"]:focus ~ div:not([data-filter=\"javascript\"]) img {\n  height: 0px;\n  width: 0px;\n  border: none;\n  margin: 0;\n  opacity: 0; }\n\na[data-filter=\"c#\"]:focus ~ div:not([data-filter=\"c#\"]),\na[data-filter=\"c#\"]:focus ~ div:not([data-filter=\"c#\"]) img {\n  height: 0px;\n  width: 0px;\n  border: none;\n  margin: 0;\n  opacity: 0; }\n\n.buttonDownload {\n  display: inline-block;\n  position: relative;\n  padding: 10px 25px;\n  background-color: #0b538f;\n  color: white;\n  font-family: sans-serif;\n  text-decoration: none;\n  font-size: 0.9em;\n  text-align: center;\n  text-indent: 15px;\n  width: 131px; }\n\n.buttonDownload:hover {\n  background-color: #1f73b8;\n  color: white; }\n\n.buttonDownload:before,\n.buttonDownload:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  left: 15px;\n  top: 52%; }\n\n/* Download box shape  */\n\n.buttonDownload:before {\n  width: 10px;\n  height: 2px;\n  border-style: solid;\n  border-width: 0 2px 2px; }\n\n/* Download arrow shape */\n\n.buttonDownload:after {\n  width: 0;\n  height: 0;\n  margin-left: 1px;\n  margin-top: -7px;\n  border-style: solid;\n  border-width: 4px 4px 0 4px;\n  border-color: transparent;\n  border-top-color: inherit;\n  -webkit-animation: downloadArrow 2s linear infinite;\n          animation: downloadArrow 2s linear infinite;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused; }\n\n.buttonDownload:hover:before {\n  border-color: #fff; }\n\n.buttonDownload:hover:after {\n  border-top-color: #fff;\n  -webkit-animation-play-state: running;\n          animation-play-state: running; }\n\n/* keyframes for the download icon anim */\n\n@-webkit-keyframes downloadArrow {\n  /* 0% and 0.001% keyframes used as a hackish way of having the button frozen on a nice looking frame by default */\n  0% {\n    margin-top: -7px;\n    opacity: 1; }\n  0.001% {\n    margin-top: -15px;\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    margin-top: 0;\n    opacity: 0; } }\n\n@keyframes downloadArrow {\n  /* 0% and 0.001% keyframes used as a hackish way of having the button frozen on a nice looking frame by default */\n  0% {\n    margin-top: -7px;\n    opacity: 1; }\n  0.001% {\n    margin-top: -15px;\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    margin-top: 0;\n    opacity: 0; } }\n\n@media (max-width: 768px) {\n  .wrapper-grid {\n        grid-template-areas: \"profile profile\" \"work work\" \"experience experience\" \"education education\" \"projects projects\"; }\n  .projects {\n    grid-column: span 2; }\n  .thumbnails img {\n    width: 100%;\n    margin-left: 15%; }\n  .buttonDownload {\n    margin: 0 auto;\n    width: 80%; } }\n", ""]);

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
        this.navBackground = "./assets/img/navBackground4.png";
        this.profile = "./assets/img/profile.jpeg";
        this.MDResumeAugust18 = "./assets/img/MDResumeAugust18.pdf";
        this.underTheWeather = "./assets/img/UnderTheWeather.jpg";
        this.drumkit = "./assets/img/drumKit.jpg";
    }
    ResumeComponent.prototype.mouseEnter = function ($event) {
        $event.target.classList.add("active");
        // $event.target.classList.add("animated", "bounceInDown");
        $event.target.style.background = "whitesmoke";
    };
    ResumeComponent.prototype.mouseLeave = function ($event) {
        // $event.target.classList.remove("active");
        setTimeout(function () { return $event.target.classList.remove("active"); }, 500);
        // $event.target.classList.remove("animated", "bounceInDown");
        // $event.target.style.background = "none";
        console.log("mouseleave");
    };
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