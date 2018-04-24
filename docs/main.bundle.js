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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<app-navbar></app-navbar>\n\n<div>\n  <img class=\"bgimg1\" [src]=\"navBackground\">\n</div>\n\n<div class=\"wrapper-grid\">\n  <div class=\"card left-profile\">\n    <div class=\"profile-div\">\n      <img class=\"profile-img\" [src]=\"profile\" alt=\"Profile\" >\n      <div class=\"profile-text\">Michael DeConzo</div>\n    </div>\n  \n    <h4>Web Application Developer</h4>\n    <ul class=\"personal-info\">\n      <li>Date Of Birth: January 20th, 1988</li>\n      <li>Email</li>\n      <li>Address</li>\n      <li>Phone</li>\n      <li>Website: <a href=\"https://ovarmorrow.github.io/\">Cover Page</a></li>\n    </ul>\n  \n    <!-- To do more work -->\n    <ul class=\"skills\">\n      <li>Computer Languages: C#, CSS, HTML, JavaScript, SQL, AngularJS</li>\n      <li>Platforms: Windows, ASP.NET/WebForms/MVC, ADO.NET, Entity Framework, Bootstrap, JQuery</li>\n      <li>Software: MS Office, Visual Studios SQL Server, SQ Lite, Git</li>\n      <!-- <li>Ability to translate business requirements from non-technical users to end product</li>\n      <li>Excellent verbal and written communication skills and strong attention to detail</li> -->\n    </ul>\n  \n    <h4>Experience</h4>\n    \n    <!-- <p>Junior Developer with knowledge of C#, ASP.Net MVC 5, SQL Server along with HTML 5, CSS and Bootstrap. I've been working\n      closely with a Senior Developer to build\n      <a href=\"https://www.outpourfilms.com/\" title=\"https://www.outpourfilms.com/\" target=\"_blank\" rel=\"noreferrer noopener\">Pinetop Systems.</a> I know how to work successfully with a team to get things done with the highest quality standards.\n      I thrive in a dynamic working environment and enjoy taking on new challenges. I am a quick study and have a passion for\n      technology and learning.</p> -->\n  </div>\n  \n  <div class=\"card work-experience\">\n    <h1>Work Experience</h1>\n  \n    <div>\n      <h3>Pinetop Systems - Junior Web Developer</h3>\n      <small class=\"timeline\"><i class=\"fas fa-calendar-alt\"></i>01/2018-Present</small>\n      <ul>\n        <li>Developer with knowledge of C#, ASP.Net MVC 5, SQL Server along with HTML 5, CSS and Bootstrap.</li>\n      </ul>\n    </div>\n    <hr />\n    <div>\n      <h3>Power Curbers - Shipping and Receiving</h3>\n      <small class=\"timeline\"><i class=\"fas fa-calendar-alt\"></i>11/2014-Present</small>\n      <ul>\n        <li>Thorough labeling, organization and continuing maintenance of all service inventory through use of SAGE mass system,\n          accompanying physical double checking. </li>\n        <li>Extensive experience with Starship transportation program and its tools for use in packaging and shipment of service\n          parts. </li>\n        <li>In Depth knowledge of various oversea requirements and stipulations depending on cargo, contents and shipment methods.\n          (LTL freight classing, heat treated lumber, air freight regulations and commercial invoicing)\n        </li>\n        <li>Setup and packaging for overseas container shipments as well as construction of Bill of Lading. </li>\n        <li>Extensive experience loading heavy equipment onto and into varying types of trailers (RGN, Stepdeck and Container)\n          as well as proper methods in properly securing cargo for transit.</li>\n      </ul>\n    </div>\n    <hr />\n    <div>\n      <h3>Power Curbers - Media Blaster</h3>\n      <small class=\"timeline\"><i class=\"fas fa-calendar-alt\"></i>05/2014-11/2014</small>\n      <ul>\n        <li>Thorough labeling, organization and continuing maintenance of all service inventory through use of SAGE mass system,\n          accompanying physical double checking. </li>\n        <li>Extensive experience with Starship transportation program and its tools for use in packaging and shipment of service\n          parts. </li>\n        <li>In Depth knowledge of various oversea requirements and stipulations depending on cargo, contents and shipment methods.\n          (LTL freight classing, heat treated lumber, air freight regulations and commercial invoicing)\n        </li>\n        <li>Setup and packaging for overseas container shipments as well as construction of Bill of Lading. </li>\n        <li>Extensive experience loading heavy equipment onto and into varying types of trailers (RGN, Stepdeck and Container)\n          as well as proper methods in properly securing cargo for transit.</li>\n      </ul>\n    </div>\n    <div>\n      <h3>Rodgers Unloading - Material Handler</h3>\n      <small class=\"timeline\"><i class=\"fas fa-calendar-alt\"></i>07/2014-10/2014</small>\n      <ul>\n        <li>Loaded materials into vehicles and installed strapping, bracing, or padding to prevent shifting or damage in transit</li>\n        <li>Conveyed materials to or from storage or work sites to designated area</li>\n        <li>Secured lifting attachments to materials and conveyed load to destination</li>\n      </ul>\n    </div>\n  </div>\n  \n  <div class=\"card education\">\n    <h1>Education</h1>\n  \n    <div>\n      <h3>Surry Community College</h3>\n      <small class=\"timeline\"><i class=\"fas fa-calendar-alt\"></i>08/2006-05/2008</small>\n      <p>Associate in Arts program coursework</p>\n    </div>\n    <hr />\n    <div>\n      <h3>West Stokes High School</h3>\n      <small class=\"timeline\"><i class=\"fas fa-calendar-alt\"></i>09/2002-05/2006</small>\n      <p>High School Diploma</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".left-profile {\n  grid-row: 0 / span 1;\n  grid-column: 0 / span 1;\n  width: 100%; }\n\n.bgimg1 {\n  height: 85vh;\n  width: 100%; }\n\n.education {\n  -ms-grid-column: 2;\n  grid-column: 2; }\n\n.profile-img {\n  max-width: 100%;\n  height: auto;\n  display: block; }\n\n.profile-text {\n  position: absolute;\n  bottom: 8px;\n  left: 25px;\n  height: 25px;\n  background-color: rgba(255, 255, 255, 0.15);\n  text-align: center;\n  font-family: 'Kaushan Script', cursive;\n  font-size: 19px; }\n\n.profile-div {\n  position: relative;\n  text-align: center;\n  color: black;\n  display: inline-block; }\n\n.left-profile > h4 {\n  padding-top: 1em; }\n\n.timeline {\n  color: #fa9000; }\n", ""]);

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
        this.title = 'app';
        this.navBackground = "/resume/assets/img/navBackground.jpg";
        this.profile = "/resume/assets/img/profile.jpg";
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-dark bg-dark\">\n  <ul class=\"navbuttons\">\n    <li class=\"navhome navinline navbutton\"><i class=\"fas fa-home fa-2x\"></i></li>\n    <li class=\"navabout navinline navbutton\"><i class=\"fas fa-address-book fa-2x\"></i></li>\n    <li class=\"navcontact navinline navbutton\"><i class=\"fas fa-mobile fa-2x\"></i></li>\n  </ul>\n</nav>\n  \n\n  \n  \n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Create a Parallax Effect */\n.bgimg-1, .bgimg-2, .bgimg-3 {\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n.navbar {\n  position: fixed;\n  width: 100%;\n  z-index: 99;\n  background: -webkit-gradient(linear, left top, right top, from(black), to(#613601));\n  background: linear-gradient(to right, black, #613601); }\n.navbuttons, .navbuttons > li {\n  display: inline;\n  padding-right: 50px;\n  font-size: 20px;\n  color: white;\n  line-height: 0.9;\n  margin: 2px 0 3px; }\n.navbuttons > li > svg:hover {\n  border-bottom: #ffffff solid 1.5px;\n  padding-bottom: 2px;\n  cursor: pointer; }\n/* Turn off parallax scrolling for tablets and phones */\n@media only screen and (max-device-width: 1024px) {\n  .bgimg-1, .bgimg-2, .bgimg-3 {\n    background-attachment: scroll; } }\n", ""]);

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* enableProdMode */])();
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