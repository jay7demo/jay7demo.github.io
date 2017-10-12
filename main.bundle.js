webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " #timeCard{\r\n    padding:1%;\r\n} \r\n\r\n.carouselCard{\r\n    padding:1%;\r\n}\r\n\r\nagm-map {\r\n    height: 300px;\r\n  \r\n  }\r\n\r\n  .example-card {\r\n  width: 130px;\r\n  height: 160px;\r\n}\r\n\r\n.myCardImage{\r\n    height: 150px;\r\n    width: 150px;\r\n    margin-top: -15px !important;\r\n    margin-left: -12px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n\n\n\n<!-- <app-maps></app-maps> -->\n\n<!-- <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n</agm-map> -->\n<!-- <div id=\"myCards\" style=\"margin-top: 1%;\n    margin-bottom: 3%;\">\n   <div class=\"owl-carousel owl-theme\">\n  <div class=\"carouselCard\"> <md-card style=\"background-color:lavender\"> <md-card-content>hello1</md-card-content></md-card> </div>\n  <div class=\"carouselCard\"> <md-card style=\"background-color:lavender\"> <md-card-content>hello2</md-card-content></md-card> </div>\n  <div class=\"carouselCard\"> <md-card style=\"background-color:lavender\"> <md-card-content>hello3</md-card-content></md-card> </div>\n <div class=\"carouselCard\"> <md-card style=\"background-color:lavender\"> <md-card-content>hello4</md-card-content></md-card> </div>\n  <div class=\"carouselCard\"> <md-card style=\"background-color:lavender\"> <md-card-content>hello5</md-card-content></md-card> </div>\n <div class=\"carouselCard\"> <md-card style=\"background-color:lavender\"> <md-card-content>hello6</md-card-content></md-card> </div>\n  <div class=\"carouselCard\"> <md-card style=\"background-color:lavender\"> <md-card-content>hello7</md-card-content></md-card> </div>\n</div></div> -->\n<!-- <md-toolbar>\n  <span><a style=\"font-size:300%\"> {{myDate | date: 'mediumTime'}}   </a> <a>{{myDate | date: 'fullDate'}}</a></span>\n\n\n</md-toolbar> -->\n<!--  <app-maps></app-maps>  -->\n<!-- \n<md-tab-group style=\"overflow-y:scroll;height:600px\">\n  <md-tab label=\"Maps\"><app-weather></app-weather></md-tab>\n  <md-tab label=\"Weather\"><app-maps></app-maps></md-tab>\n  <md-tab label=\"Translate\"><app-translate></app-translate></md-tab>\n  <md-tab label=\"News\"><app-news></app-news></md-tab>\n</md-tab-group> -->\n\n\n<router-outlet></router-outlet>\n\n<!-- <a>News</a>\n<a routerLink=\"/maps\" >Maps</a>\n<router-outlet></router-outlet> -->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
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
    function AppComponent(router, afAuth) {
        this.router = router;
        this.afAuth = afAuth;
        this.title = 'app';
    }
    AppComponent.prototype.goToHome = function () {
        this.router.navigateByUrl('home');
    };
    AppComponent.prototype.goToNews = function () {
        this.router.navigateByUrl('news');
    };
    AppComponent.prototype.goToMaps = function () {
        this.router.navigateByUrl('maps');
    };
    AppComponent.prototype.goToTranslate = function () {
        this.router.navigateByUrl('translate');
    };
    AppComponent.prototype.goToWeather = function () {
        this.router.navigateByUrl('weather');
    };
    AppComponent.prototype.goToForex = function () {
        this.router.navigateByUrl('forex');
    };
    AppComponent.prototype.ngOnInit = function () {
        this.utcTime();
    };
    AppComponent.prototype.utcTime = function () {
        var _this = this;
        setInterval(function () {
            _this.myDate = new Date();
        }, 1000);
    };
    AppComponent.prototype.startTime = function () {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = this.checkTime(m);
        s = this.checkTime(s);
        document.getElementById('txt').innerHTML =
            h + ":" + m + ":" + s;
        var t = setTimeout(this.startTime, 500);
    };
    AppComponent.prototype.checkTime = function (i) {
        if (i < 10) {
            i = "0" + i;
        }
        ; // add zero in front of numbers < 10
        return i;
    };
    AppComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
        /*   this.imageUrl = "";
          this.userName = "";
          this.isLoggedIn= false; */
        this.router.navigateByUrl("login");
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__weather_weather_component__ = __webpack_require__("../../../../../src/app/weather/weather.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_weather_service__ = __webpack_require__("../../../../../src/app/services/weather.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__translate_translate_component__ = __webpack_require__("../../../../../src/app/translate/translate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__news_news_component__ = __webpack_require__("../../../../../src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__maps_maps_component__ = __webpack_require__("../../../../../src/app/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__routing_module__ = __webpack_require__("../../../../../src/app/routing-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_page_home_page_component__ = __webpack_require__("../../../../../src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__forex_forex_component__ = __webpack_require__("../../../../../src/app/forex/forex.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__contacts_contacts_component__ = __webpack_require__("../../../../../src/app/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angular_async_local_storage__ = __webpack_require__("../../../../angular-async-local-storage/angular-async-local-storage.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__notes_notes_component__ = __webpack_require__("../../../../../src/app/notes/notes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__birthdays_birthdays_component__ = __webpack_require__("../../../../../src/app/birthdays/birthdays.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













//import { MdProgressSpinnerModule } from '@angular/material/typings/progress-spinner/index.d';


















var firebaseConfig = {
    apiKey: "AIzaSyB1InorrLBFffH9k-IvHvyFtLkXYdf0yGE",
    authDomain: "jay7-e3883.firebaseapp.com",
    databaseURL: "https://jay7-e3883.firebaseio.com",
    projectId: "jay7-e3883",
    storageBucket: "jay7-e3883.appspot.com",
    messagingSenderId: "389899719739"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__weather_weather_component__["a" /* WeatherComponent */],
                __WEBPACK_IMPORTED_MODULE_13__translate_translate_component__["a" /* TranslateComponent */],
                __WEBPACK_IMPORTED_MODULE_14__news_news_component__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__maps_maps_component__["a" /* MapsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__home_page_home_page_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_19__forex_forex_component__["a" /* ForexComponent */],
                __WEBPACK_IMPORTED_MODULE_20__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_22__contacts_contacts_component__["a" /* ContactsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__notes_notes_component__["a" /* NotesComponent */],
                __WEBPACK_IMPORTED_MODULE_27__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_28__birthdays_birthdays_component__["a" /* BirthdaysComponent */],
                __WEBPACK_IMPORTED_MODULE_29__chat_chat_component__["a" /* ChatComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"], __WEBPACK_IMPORTED_MODULE_25__swimlane_ngx_datatable__["NgxDatatableModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_24_angular_async_local_storage__["b" /* AsyncLocalStorageModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_17__routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_16__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyBR07XK6MULjzRSEwvrHiA2FZEnI8dtJAU'
                }), __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig), __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["b" /* AngularFireAuthModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["k" /* MdToolbarModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["f" /* MdNativeDateModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["j" /* MdTabsModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["a" /* MaterialModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["g" /* MdProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["h" /* MdSelectModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["e" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["b" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["d" /* MdGridListModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["c" /* MdCheckboxModule */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [__WEBPACK_IMPORTED_MODULE_21__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_10__services_weather_service__["a" /* WeatherService */], __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["b" /* AngularFireAuthModule */], __WEBPACK_IMPORTED_MODULE_11__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_23__services_user_service__["a" /* UserService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/birthdays/birthdays.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.example-card {\r\n    width: 400px;\r\n  } \r\n  .news-card {\r\n    width: 200px;\r\n   display: -ms-inline-grid;\r\n   display: inline-grid;\r\n   margin: 0.5%;\r\n  \r\n} ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/birthdays/birthdays.component.html":
/***/ (function(module, exports) {

module.exports = "<md-spinner *ngIf=\"spinner; else show\" style=\"    margin-left: 44%;\nmargin-top: 17%;\"></md-spinner>\n<ng-template #show>\n<md-expansion-panel #panel style=\"    width: 50%;\nmargin-left: 24%;\nmargin-top: 1%;\">\n    <md-expansion-panel-header>\n      <md-panel-title>\n        Add New Birthday\n      </md-panel-title>\n      <md-panel-description>\n        Type Name and choose Birth Date\n      </md-panel-description>\n    </md-expansion-panel-header>\n    \n    <md-form-field>\n      <input mdInput placeholder=\"Full Name\" [(ngModel)]=\"bdayName\">\n    </md-form-field>\n    \n    <md-form-field>\n      <input mdInput (change)=\"chooseDate($event)\" [(ngModel)]=\"newDate\" [mdDatepicker]=\"picker\" placeholder=\"Choose a date\">\n      <md-datepicker-toggle mdSuffix [for]=\"picker\"></md-datepicker-toggle>\n      <md-datepicker #picker></md-datepicker>\n    </md-form-field>\n    <button md-raised-button color=\"primary\" (click)=\"addNotes()\">Add Birthday</button>\n  </md-expansion-panel>\n\n<md-card *ngFor=\"let notes of bDays\" class=\"news-card\">\n  <md-card-header>\n    <md-card-title style=\"color:lightcoral;font-size:175%\">{{notes.name}}</md-card-title>\n    <md-card-subtitle>{{notes.age}} years</md-card-subtitle>\n  </md-card-header>\n <!--  <img md-card-image src={{news.urlToImage}}  > -->\n  <md-card-content style=\"overflow:auto;height:55px\">\n\n    <a style=\"font-size:300%;color:green\">\n     {{notes.daysToGo}}\n    </a>\n    <a>Days to </a>\n    <a style=\"font-size:160%;color:lightcoral\">{{notes.age+1}}</a>\n    \n  </md-card-content>\n  <md-card-actions>\n      <md-icon class=\"md-24\" style=\"    float: right;\n      color:coral;cursor:pointer\" aria-label=\"Example icon-button with a heart icon\" (click)=\"deleteBday(notes.timeStamp)\">delete</md-icon>\n  </md-card-actions>\n</md-card>\n</ng-template>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/birthdays/birthdays.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BirthdaysComponent; });
/* unused harmony export Bday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_async_local_storage__ = __webpack_require__("../../../../angular-async-local-storage/angular-async-local-storage.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BirthdaysComponent = /** @class */ (function () {
    function BirthdaysComponent(storage, router, snackBar, db) {
        this.storage = storage;
        this.router = router;
        this.snackBar = snackBar;
        this.db = db;
        this.bDays = [];
        this.newBday = new Bday();
        this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    }
    BirthdaysComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner = true;
        this.storage.getItem('email').subscribe(function (data) {
            // ////console.log(data);
            _this.x = data;
            var query = _this.db.database.ref('/users_List').orderByChild("email").equalTo(_this.x).once("value", function (snapshot) {
                var userData = snapshot.val();
                // //console.log(userData);
                _this.userKey = Object.keys(userData)[0];
                ////console.log(Object.keys(userData));
                _this.dbBdays = _this.db.list('users_List/' + Object.keys(userData) + '/bdays');
                var y = _this.dbBdays.subscribe(function (data) {
                    _this.bDays = data;
                    for (var i = 0; i < _this.bDays.length; i++) {
                        // //console.log(this.months[new Date(this.bDays[i].timeStamp).getMonth()]);
                        var thisYear;
                        if ((new Date(_this.bDays[i].timeStamp).getMonth()) >= (new Date().getMonth())) {
                            thisYear = new Date().getFullYear();
                            _this.bDays[i].age = (thisYear) - new Date(_this.bDays[i].timeStamp).getFullYear();
                        }
                        else {
                            thisYear = new Date().getFullYear() + 1;
                            _this.bDays[i].age = (thisYear - 1) - new Date(_this.bDays[i].timeStamp).getFullYear();
                        }
                        _this.bDays[i].dayString = _this.months[new Date(_this.bDays[i].timeStamp).getMonth()] + ' ' + new Date(_this.bDays[i].timeStamp).getDate() + ',' + thisYear;
                        //console.log(this.bDays[i].dayString);
                        var countDownDate = new Date(_this.bDays[i].dayString).getTime();
                        var now = new Date().getTime();
                        var distance = countDownDate - now;
                        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                        _this.bDays[i].daysToGo = days;
                        _this.bDays[i].age = (thisYear - 1) - new Date(_this.bDays[i].timeStamp).getFullYear();
                    }
                    //console.log(this.bDays);
                    //this.temp = [...data];
                    //this.contactsTable.loadingIndicator = false;
                    // //console.log(this.myContacts);
                });
            });
            _this.spinner = false;
        });
    };
    BirthdaysComponent.prototype.deleteBday = function (ts) {
        var _this = this;
        ////console.log(ts);
        var x = JSON.parse(JSON.stringify(this.bDays));
        for (var i = 0; i < x.length; i++) {
            if (x[i].timeStamp == ts) {
                x.splice(i, 1);
                break;
            }
        }
        var y = this.db.list('users_List/' + this.userKey);
        y.set('bdays', x).then(function (data) {
            ////console.log(data);
            _this.snackBar.open('Bday Deleted', '', {
                duration: 1000,
            });
        });
    };
    BirthdaysComponent.prototype.chooseDate = function (e) {
        //console.log(this.newDate);
    };
    BirthdaysComponent.prototype.addNotes = function () {
        var _this = this;
        //this.newBday.age = '25';
        this.newBday.timeStamp = this.newDate;
        this.newBday.name = this.bdayName;
        //console.log(this.newBday);
        var y = JSON.parse(JSON.stringify(this.bDays));
        y.push(this.newBday);
        var x = this.db.list('users_List/' + this.userKey);
        x.update('bdays', y).then(function (data) {
            ////console.log(data);
            _this.snackBar.open('Bday Added', '', {
                duration: 1000,
            });
        });
        this.newDate = null;
        this.bdayName = null;
        this.panel.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('panel'),
        __metadata("design:type", Object)
    ], BirthdaysComponent.prototype, "panel", void 0);
    BirthdaysComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-birthdays',
            template: __webpack_require__("../../../../../src/app/birthdays/birthdays.component.html"),
            styles: [__webpack_require__("../../../../../src/app/birthdays/birthdays.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular_async_local_storage__["a" /* AsyncLocalStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular_async_local_storage__["a" /* AsyncLocalStorage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdSnackBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object])
    ], BirthdaysComponent);
    return BirthdaysComponent;
    var _a, _b, _c, _d;
}());

var Bday = /** @class */ (function () {
    function Bday() {
    }
    return Bday;
}());

//# sourceMappingURL=birthdays.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n  \n  <md-tab-group>\n  <md-tab label=\"Users\">\n    <p *ngFor=\"let data of users\"  (click)=\"addConnection($event)\">\n      {{data.$value}} \n      </p>\n      \n  </md-tab>\n  <md-tab label=\"Connections\">\n    <p *ngFor = \"let data of myConversations\" (click)=\"goToConnection($event)\">{{data.$value}}</p>\n\n  </md-tab>\n  <md-tab label=\"Chat Window\">\n\n  \n        <p *ngFor = \"let data of q\">{{data}}</p>\n  \n    </md-tab>\n</md-tab-group>"

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_async_local_storage__ = __webpack_require__("../../../../angular-async-local-storage/angular-async-local-storage.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatComponent = /** @class */ (function () {
    function ChatComponent(storage, router, snackBar, db) {
        this.storage = storage;
        this.router = router;
        this.snackBar = snackBar;
        this.db = db;
        this.myConversations = [];
        this.users = [];
        this.chatContact = new Chat();
        this.chatConversation = [];
        this.q = [];
        this.userNamesList = this.db.list('/listOfUserNames');
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userNamesList.subscribe(function (data) {
            console.log(data);
            _this.users = data;
            _this.storage.getItem('userName').subscribe(function (data) {
                _this.userName = data;
                console.log(_this.userName);
            });
            var index = _this.users.indexOf(_this.userName);
            // this.users.splice(index,1);
        });
        console.log(this.users);
        this.storage.getItem('email').subscribe(function (data) {
            // console.log(data);
            _this.x = data;
            var query = _this.db.database.ref('/users_List').orderByChild("email").equalTo(_this.x).once("value", function (snapshot) {
                var userData = snapshot.val();
                // console.log(userData);
                _this.userKey = Object.keys(userData)[0];
                // console.log(Object.keys(userData));
                _this.conversations = _this.db.list('users_List/' + Object.keys(userData) + '/conversations');
                /* var y = this.conversations.subscribe(data=>{
                  this.myConversations = data;
                  
                }) */
                var z = _this.db.list('users_List/' + _this.userKey + '/conversations/list');
                z.subscribe(function (data) {
                    _this.myConversations = data;
                    console.log(_this.myConversations);
                });
            });
        });
    };
    ChatComponent.prototype.addConnection = function (event) {
        var _this = this;
        console.log(event.target.innerText);
        var name = event.target.innerText;
        this.chatContact.user1 = name;
        this.chatContact.user2 = this.userName;
        this.chatContact.uniqueKey = name + 'key' + this.userName;
        this.chatContact.conversation.push('Connection Added');
        var p = this.db.list('chatMsgs');
        p.push(this.chatContact);
        this.conversations.update('list', [this.chatContact.user1]);
        var query = this.db.database.ref('/users_List').orderByChild("userName").equalTo(name).once("value", function (snapshot) {
            var x = snapshot.val();
            console.log(x);
            var userKey = Object.keys(x)[0];
            var z = _this.db.list('users_List/' + userKey + '/conversations');
            z.update('list', [_this.chatContact.user2]);
        });
    };
    ChatComponent.prototype.goToConnection = function (e) {
        var _this = this;
        var name = e.target.innerText;
        /* var query = this.db.database.ref('users_List/'+this.userKey+'/conversations').orderByChild("user").equalTo(name).once("value",(snapshot)=>{
          var y = snapshot.val();
          this.chatKey = Object.keys(y)[0];
          this.p = y;
          console.log(this.chatKey);
        });
        var x = this.db.list('users_List/'+this.userKey+'/conversations/'+this.chatKey);
        x.subscribe(data=>{
          var z = data;
          console.log(z[0]);
          this.q = z[0];
        }) */
        var key = name + 'key' + this.userName;
        console.log(key);
        var x = this.db.database.ref('chatMsgs').orderByChild("uniqueKey").equalTo(key).once("value", function (snapshot) {
            //console.log(snapshot.val())
            var chatKey = Object.keys(snapshot.val());
            // console.log(chatKey);
            var z = _this.db.list('chatMsgs/' + chatKey);
            z.subscribe(function (data) {
                console.log(data[0]);
                _this.q = data[0];
            });
        });
        console.log(this.p);
        ;
    };
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__("../../../../../src/app/chat/chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular_async_local_storage__["a" /* AsyncLocalStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular_async_local_storage__["a" /* AsyncLocalStorage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdSnackBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object])
    ], ChatComponent);
    return ChatComponent;
    var _a, _b, _c, _d;
}());

var Chat = /** @class */ (function () {
    function Chat() {
        this.conversation = [];
    }
    return Chat;
}());
var ChatMsg = /** @class */ (function () {
    function ChatMsg() {
    }
    return ChatMsg;
}());
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "\n<md-spinner *ngIf=\"spinner; else show\" style=\"    margin-left: 44%;\n    margin-top: 17%;\"></md-spinner>\n<ng-template #show>\n<md-expansion-panel #panel style=\"    width: 80%;\nmargin-left: 9%;\nmargin-top: 1%;\">\n    <md-expansion-panel-header>\n      <md-panel-title>\n      Add New Contact\n      </md-panel-title>\n      <md-panel-description>\n        Type Name and Number\n      </md-panel-description>\n    </md-expansion-panel-header>\n    <td style=\"padding-left:5px\">\n    <md-form-field >\n        <input mdInput [(ngModel)]=\"newContact.fullName\" placeholder=\"Full Name\">\n      </md-form-field>\n    \n      <td style=\"padding-left:5px\"><md-form-field >\n        <input mdInput [(ngModel)]=\"newContact.nickName\" placeholder=\"Nick Name\">\n      </md-form-field>\n    \n      <td style=\"padding-left:5px\"><md-form-field >\n        <input mdInput [(ngModel)]=\"newContact.phoneNumber\" placeholder=\"Phone Number\">\n      </md-form-field>\n    \n      <td style=\"padding-left:5px\"><md-form-field >\n        <input mdInput [(ngModel)]=\"newContact.place\" placeholder=\"Place\">\n      </md-form-field>\n    \n      \n        <md-select placeholder=\"Select Group\" [(ngModel)]=\"newContact.group\" style=\"padding-left:5px\">\n          <md-option *ngFor=\"let group of groups\" [value]=\"group\">\n            {{ group }}\n          </md-option>\n        </md-select>\n\n  \n    <button style=\"padding-left:10px\" md-raised-button color=\"primary\" (click)=\"addContact()\">Add Contact</button>\n  </md-expansion-panel>\n\n  <div style=\"padding:1%;font-family:sans-serif\">\n      <input\n      type='text'\n      style='padding:8px;margin:15px auto;width:30%;'\n      placeholder='Search ur contacts...'\n      (keyup)='updateFilter($event)'\n    />\n\n  <ngx-datatable \n  #contactsTable\n  class=\"material\"\n  [headerHeight]=\"50\"\n  [limit]=\"6\"\n  [columnMode]=\"'force'\"\n  [footerHeight]=\"50\"\n  [rowHeight]=\"'auto'\"\n  \n  [rows]=\"myContacts\">\n  <ngx-datatable-column name=\"Full Name\" prop=\"fullName\">\n    <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\" let-column=\"column\">\n      <span\n        (dblclick)=\"editing[rowIndex + '-fullName'] = true\"\n        *ngIf=\"!editing[rowIndex + '-fullName']\">\n        {{value}}\n      </span>\n      <input\n        autofocus\n        (blur)=\"updateValue($event, 'fullName', rowIndex)\"\n        *ngIf=\"editing[rowIndex+ '-fullName']\"\n        type=\"text\"\n        [value]=\"value\"\n      />\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"Phone Number\" prop=\"phoneNumber\">\n    <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n      <span\n        (dblclick)=\"editing[rowIndex + '-phoneNumber'] = true\"\n        *ngIf=\"!editing[rowIndex + '-phoneNumber']\">\n        {{value}}\n      </span>\n      <input\n        autofocus\n        (blur)=\"updateValue($event, 'phoneNumber', rowIndex)\"\n        *ngIf=\"editing[rowIndex+ '-phoneNumber']\"\n        type=\"text\"\n        [value]=\"value\"\n      />\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"Group\" prop=\"group\">\n    <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\" let-column=\"column\">\n       <span\n        (dblclick)=\"editing[rowIndex + '-group'] = true\"\n        *ngIf=\"!editing[rowIndex + '-group']\">\n        {{value}}\n      </span>\n      <select\n        *ngIf=\"editing[rowIndex + '-group']\"\n        (change)=\"updateValue($event, 'group', rowIndex)\"\n        [value]=\"value\">\n        <option value=\"Friends\">Friends</option>\n        <option value=\"Family\">Family</option>\n        <option value=\"Work\">Work</option>\n      </select>\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"Place\" prop=\"place\">\n    <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n      <span\n        (dblclick)=\"editing[rowIndex + '-place'] = true\"\n        *ngIf=\"!editing[rowIndex + '-place']\">\n        {{value}}\n      </span>\n      <input\n        autofocus\n        (blur)=\"updateValue($event, 'place', rowIndex)\"\n        *ngIf=\"editing[rowIndex+ '-place']\"\n        type=\"text\"\n        [value]=\"value\"\n      />\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"Delete \" prop=\" \">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n          <button md-icon-button color=\"warn\">\n              <md-icon class=\"md-24\" aria-label=\"Example icon-button with a heart icon\" (click)=\"deleteContact(rowIndex)\">delete</md-icon>\n            </button>\n      </ng-template>\n    </ngx-datatable-column>\n  </ngx-datatable></div>\n  <button md-raised-button color=\"primary\" (click)=\"update()\">Update</button>\n</ng-template>\n\n  <!-- <md-form-field>\n      <input mdInput [mdDatepicker]=\"picker\" placeholder=\"Choose a date\">\n      <md-datepicker-toggle mdSuffix [for]=\"picker\"></md-datepicker-toggle>\n      <md-datepicker #picker></md-datepicker>\n    </md-form-field> -->\n<!-- \n      <div style=\"padding: 1%;\n      border: 1px solid black;\n      margin-top: 1%;\">\n      <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n        <td><md-form-field class=\"example-full-width\">\n          <input mdInput [(ngModel)]=\"newContact.fullName\" placeholder=\"Full Name\">\n        </md-form-field></td></tr>\n      \n        <tr><td><md-form-field class=\"example-full-width\">\n          <input mdInput [(ngModel)]=\"newContact.nickName\" placeholder=\"Nick Name\">\n        </md-form-field></td></tr>\n      \n        <tr><td><md-form-field class=\"example-full-width\">\n          <input mdInput [(ngModel)]=\"newContact.phoneNumber\" placeholder=\"Phone Number\">\n        </md-form-field></td></tr>\n      \n        <tr><td><md-form-field class=\"example-full-width\">\n          <input mdInput [(ngModel)]=\"newContact.place\" placeholder=\"Place\">\n        </md-form-field></td></tr>\n      \n        <tr><td>\n          <md-select placeholder=\"Select Group\" [(ngModel)]=\"newContact.group\">\n            <md-option *ngFor=\"let group of groups\" [value]=\"group\">\n              {{ group }}\n            </md-option>\n          </md-select>\n       </td></tr>\n      \n       \n      \n      </table>\n      \n      <button md-raised-button color=\"primary\" (click)=\"addContact()\">Add Contact</button>\n      \n  \n      </div> -->\n\n<!-- <md-tab-group>\n  <md-tab label=\"My Contacts\" (click)=\"grid()\">\n    \n  </md-tab>\n  <md-tab label=\"Add New\">\n    \n  </md-tab>\n</md-tab-group> -->"

/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
/* unused harmony export Contact */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_async_local_storage__ = __webpack_require__("../../../../angular-async-local-storage/angular-async-local-storage.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(storage, router, snackBar, db, _userService) {
        this.storage = storage;
        this.router = router;
        this.snackBar = snackBar;
        this.db = db;
        this._userService = _userService;
        this.groups = ['Friends', 'Family', 'School', 'College', 'Work'];
        this.newContact = new Contact();
        this.myContacts = new Array();
        this.editing = {};
        this.temp = [];
    }
    ContactsComponent.prototype.updateValue = function (event, cell, rowIndex) {
        this.editing[rowIndex + '-' + cell] = false;
        this.myContacts[rowIndex][cell] = event.target.value;
        // console.log(this.myContacts);
        this.myContacts = this.myContacts.slice();
    };
    ContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner = true;
        // this.contactsTable.loadingIndicator = true;
        this.storage.getItem('email').subscribe(function (data) {
            // console.log(data);
            _this.x = data;
            var query = _this.db.database.ref('/users_List').orderByChild("email").equalTo(_this.x).once("value", function (snapshot) {
                var userData = snapshot.val();
                // console.log(userData);
                _this.userKey = Object.keys(userData)[0];
                //console.log(Object.keys(userData));
                _this.contacts = _this.db.list('users_List/' + Object.keys(userData) + '/contacts');
                var y = _this.contacts.subscribe(function (data) {
                    _this.myContacts = data;
                    _this.temp = data.slice();
                    //this.contactsTable.loadingIndicator = false;
                    _this.spinner = false;
                    // console.log(this.myContacts);
                });
            });
        });
    };
    ContactsComponent.prototype.onPage = function () {
    };
    ContactsComponent.prototype.addContact = function () {
        var _this = this;
        // console.log(this.newContact);
        //this.contacts.push(this.newContact);
        //console.log(this._userService.userEmail);
        var y = JSON.parse(JSON.stringify(this.myContacts));
        y.push(this.newContact);
        var x = this.db.list('users_List/' + this.userKey);
        x.update('contacts', y).then(function (data) {
            //console.log(data);
            _this.snackBar.open('Contact Added', '', {
                duration: 1000,
            });
        });
        this.newContact.fullName = null;
        this.newContact.group = null;
        this.newContact.nickName = null;
        this.newContact.phoneNumber = null;
        this.newContact.place = null;
        this.panel.close();
        this.grid();
        // this.router.navigateByUrl('navbar/home');
    };
    ContactsComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.temp.filter(function (d) {
            return (d.fullName.toLowerCase().indexOf(val) && d.group.toLowerCase().indexOf(val) && d.phoneNumber.toLowerCase().indexOf(val) && d.place.toLowerCase().indexOf(val)) !== -1 || !val;
        });
        // update the rows
        this.myContacts = temp;
        // Whenever the filter changes, always go back to the first page
        //this.table.offset = 0;
    };
    ContactsComponent.prototype.grid = function () {
        var _this = this;
        setTimeout(function () {
            _this.contactsTable.recalculate();
        }, 400);
    };
    ContactsComponent.prototype.deleteContact = function (index) {
        var _this = this;
        //this.myContacts.splice(index,1);
        // console.log(this.myContacts);
        var y = JSON.parse(JSON.stringify(this.myContacts));
        y.splice(index, 1);
        var x = this.db.list('users_List/' + this.userKey);
        x.set('contacts', y).then(function (data) {
            _this.snackBar.open('Contact Deleted', '', {
                duration: 1000,
            });
        });
    };
    ContactsComponent.prototype.update = function () {
        var _this = this;
        //console.log(this.userKey);
        var x = this.db.list('users_List/' + this.userKey);
        x.update('contacts', this.myContacts).then(function (data) {
            _this.snackBar.open('Contacts Updated', '', {
                duration: 1000,
            });
        });
    };
    ContactsComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('contactsTable'),
        __metadata("design:type", Object)
    ], ContactsComponent.prototype, "contactsTable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('panel'),
        __metadata("design:type", Object)
    ], ContactsComponent.prototype, "panel", void 0);
    ContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__("../../../../../src/app/contacts/contacts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contacts/contacts.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angular_async_local_storage__["a" /* AsyncLocalStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular_async_local_storage__["a" /* AsyncLocalStorage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdSnackBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _e || Object])
    ], ContactsComponent);
    return ContactsComponent;
    var _a, _b, _c, _d, _e;
}());

var Contact = /** @class */ (function () {
    function Contact() {
    }
    return Contact;
}());

//# sourceMappingURL=contacts.component.js.map

/***/ }),

/***/ "../../../../../src/app/forex/forex.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.example-card{\r\n    width: 155px;\r\n    padding-right: 5px;\r\n    height: 50px;\r\n    background-color: aliceblue;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forex/forex.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <md-expansion-panel>\n  <md-expansion-panel-header>\n    <md-panel-title>\n      Personal data\n    </md-panel-title>\n \n  </md-expansion-panel-header>\n  \n \n</md-expansion-panel>\n -->\n <md-spinner *ngIf=\"spinner; else show\" style=\"    margin-left: 44%;\n margin-top: 17%;\"></md-spinner>\n <ng-template #show>\n <md-tab-group >\n    <md-tab label=\"India Vs All\" >\n      <a>Last Updated:&nbsp;{{date}}</a>\n      \n        <md-grid-list style=\"margin-top:1%\" cols=\"6\" rowHeight=\"2:1\">\n            <md-grid-tile  *ngFor=\"let item of currency\">\n              \n          <md-card class=\"example-card\">\n              <md-card-header>\n                  <div md-card-avatar ><img style=\"margin-left:-20px;margin-top:-21px\" src=\"assets/flags/{{item.flag}}.png\" height=\"42\" width=\"58\"></div>\n                <md-card-title>{{item.name}}</md-card-title>\n                <md-card-subtitle></md-card-subtitle><!-- <img src=\"assets/flags/{{item.flag}}.png\" alt=\"{{item.flag}}\" height=\"32\" width=\"62\" style=\"margin-top:30px\"> -->\n              </md-card-header>\n              <!-- <img md-card-image src=\"assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\"> -->\n              <md-card-content>\n                <p style=\"font-size:200%;margin-top:-10px;text-align:center\">\n                    {{item.currencyValue}} \n                </p>\n              </md-card-content>\n           \n            </md-card>\n        \n            </md-grid-tile>\n           \n          </md-grid-list>\n        \n    </md-tab>\n    <md-tab label=\"Convert\">Content 2</md-tab>\n  </md-tab-group>\n\n\n\n</ng-template>\n\n"

/***/ }),

/***/ "../../../../../src/app/forex/forex.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForexComponent = /** @class */ (function () {
    function ForexComponent(_apiService) {
        this._apiService = _apiService;
        this.currencyKeys = [];
        this.currency = new Array();
        this.list1 = {
            "AUD": {
                "symbol": "AU$",
                "name": "Australian Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "AUD",
                "flag": "au",
                "name_plural": "Australian dollars"
            }, "TRY": {
                "symbol": "TL",
                "name": "Turkish Lira",
                "symbol_native": "TL",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "TRY",
                "flag": "tr",
                "name_plural": "Turkish Lira"
            }, "THB": {
                "symbol": "฿",
                "name": "Thai Baht",
                "symbol_native": "฿",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "THB",
                "flag": "th",
                "name_plural": "Thai baht"
            },
            "SGD": {
                "symbol": "S$",
                "name": "Singapore Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "SGD",
                "flag": "sg",
                "name_plural": "Singapore dollars"
            }, "SEK": {
                "symbol": "Skr",
                "name": "Swedish Krona",
                "symbol_native": "kr",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "SEK",
                "flag": "se",
                "name_plural": "Swedish kronor"
            }, "PHP": {
                "symbol": "₱",
                "name": "Philippine Peso",
                "symbol_native": "₱",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "PHP",
                "flag": "ph",
                "name_plural": "Philippine pesos"
            }, "NZD": {
                "symbol": "NZ$",
                "name": "New Zealand Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "flag": "nz",
                "code": "NZD",
                "name_plural": "New Zealand dollars"
            }, "NOK": {
                "symbol": "Nkr",
                "name": "Norwegian Krone",
                "symbol_native": "kr",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "NOK",
                "flag": "no",
                "name_plural": "Norwegian kroner"
            }, "MYR": {
                "symbol": "RM",
                "name": "Malaysian Ringgit",
                "symbol_native": "RM",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "MYR",
                "flag": "my",
                "name_plural": "Malaysian ringgits"
            }, "ILS": {
                "symbol": "₪",
                "name": "Israeli New Sheqel",
                "symbol_native": "₪",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "ILS",
                "flag": "il",
                "name_plural": "Israeli new sheqels"
            }, "IDR": {
                "symbol": "Rp",
                "name": "Indonesian Rupiah",
                "symbol_native": "Rp",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "IDR",
                "flag": "id",
                "name_plural": "Indonesian rupiahs"
            }, "HUF": {
                "symbol": "Ft",
                "name": "Hungarian Forint",
                "symbol_native": "Ft",
                "decimal_digits": 0,
                "rounding": 0,
                "flag": "hu",
                "code": "HUF",
                "name_plural": "Hungarian forints"
            }, "EUR": {
                "symbol": "€",
                "name": "Euro",
                "symbol_native": "€",
                "decimal_digits": 2,
                "rounding": 0,
                "flag": "eu",
                "code": "EUR",
                "name_plural": "euros"
            }, "USD": {
                "symbol": "$",
                "name": "US Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "USD",
                "flag": "us",
                "name_plural": "US dollars"
            }, "RUB": {
                "symbol": "RUB",
                "name": "Russian Ruble",
                "symbol_native": "руб.",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "RUB",
                "flag": "ru",
                "name_plural": "Russian rubles"
            }, "RON": {
                "symbol": "RON",
                "name": "Romanian Leu",
                "symbol_native": "RON",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "RON",
                "flag": "ro",
                "name_plural": "Romanian lei"
            }, "PLN": {
                "symbol": "zł",
                "name": "Polish Zloty",
                "symbol_native": "zł",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "PLN",
                "flag": "pl",
                "name_plural": "Polish zlotys"
            }, "MXN": {
                "symbol": "MX$",
                "name": "Mexican Peso",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "MXN",
                "flag": "mx",
                "name_plural": "Mexican pesos"
            }, "KRW": {
                "symbol": "₩",
                "name": "South Korean Won",
                "symbol_native": "₩",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "KRW",
                "flag": "kr",
                "name_plural": "South Korean won"
            }, "JPY": {
                "symbol": "¥",
                "name": "Japanese Yen",
                "symbol_native": "￥",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "JPY",
                "flag": "jp",
                "name_plural": "Japanese yen"
            }, "BGN": {
                "symbol": "BGN",
                "name": "Bulgarian Lev",
                "symbol_native": "лв.",
                "decimal_digits": 2,
                "rounding": 0,
                "flag": "bg",
                "code": "BGN",
                "name_plural": "Bulgarian leva"
            }, "BRL": {
                "symbol": "R$",
                "name": "Brazilian Real",
                "symbol_native": "R$",
                "decimal_digits": 2,
                "rounding": 0,
                "flag": "br",
                "code": "BRL",
                "name_plural": "Brazilian reals"
            }, "CAD": {
                "symbol": "CA$",
                "name": "Canadian Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "CAD",
                "flag": "ca",
                "name_plural": "Canadian dollars"
            }, "CHF": {
                "symbol": "CHF",
                "name": "Swiss Franc",
                "symbol_native": "CHF",
                "decimal_digits": 2,
                "rounding": 0.05,
                "code": "CHF",
                "flag": "ch",
                "name_plural": "Swiss francs"
            }, "CNY": {
                "symbol": "CN¥",
                "name": "Chinese Yuan",
                "symbol_native": "CN¥",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "CNY",
                "flag": "cn",
                "name_plural": "Chinese yuan"
            }, "DKK": {
                "symbol": "Dkr",
                "name": "Danish Krone",
                "symbol_native": "kr",
                "decimal_digits": 2,
                "rounding": 0,
                "flag": "dk",
                "code": "DKK",
                "name_plural": "Danish kroner"
            },
            "GBP": {
                "symbol": "£",
                "name": "British Pound Sterling",
                "symbol_native": "£",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "GBP",
                "flag": "th",
                "name_plural": "British pounds sterling"
            }, "CZK": {
                "symbol": "Kč",
                "name": "Czech Republic Koruna",
                "symbol_native": "Kč",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "CZK",
                "flag": "cz",
                "name_plural": "Czech Republic korunas"
            }, "HKD": {
                "symbol": "HK$",
                "name": "Hong Kong Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "flag": "hn",
                "code": "HKD",
                "name_plural": "Hong Kong dollars"
            },
        };
    }
    ForexComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log(this.list1);
        this.spinner = true;
        this._apiService.fetchForex().subscribe(function (data) {
            //console.log(data);
            delete data.rates['HRK'];
            delete data.rates['ZAR'];
            delete data.rates['RON'];
            delete data.rates['HUF'];
            delete data.rates['NOK'];
            delete data.rates['CZK'];
            delete data.rates['KRW'];
            _this.rates = data.rates;
            //console.log(data);
            _this.date = data.date;
            _this.currencyKeys = Object.keys(_this.rates);
            //console.log(this.currencyKeys);
            for (var i = 0; i < _this.currencyKeys.length; i++) {
                var x = new Currency();
                x.currencyKey = _this.currencyKeys[i];
                x.currencyValue = Number((1 / _this.rates[_this.currencyKeys[i]]).toFixed(4));
                _this.currency.push(x);
            }
            for (var i = 0; i < _this.currency.length; i++) {
                if (_this.currency[i].currencyKey == _this.list1[_this.currency[i].currencyKey].code) {
                    _this.currency[i]['name'] = _this.list1[_this.currency[i].currencyKey].name;
                    _this.currency[i]['flag'] = _this.list1[_this.currency[i].currencyKey].flag;
                }
                // console.log(this.currency[i]['flag']);
            }
            _this.spinner = false;
        });
        //console.log(this.list1);
    };
    ForexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forex',
            template: __webpack_require__("../../../../../src/app/forex/forex.component.html"),
            styles: [__webpack_require__("../../../../../src/app/forex/forex.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _a || Object])
    ], ForexComponent);
    return ForexComponent;
    var _a;
}());

var Currency = /** @class */ (function () {
    function Currency() {
    }
    return Currency;
}());
//# sourceMappingURL=forex.component.js.map

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-card {\r\n    width: 130px;\r\n    height: 160px;\r\n  }\r\n  \r\n  .myCardImage{\r\n      height: 150px;\r\n      width: 150px;\r\n      margin-top: -15px !important;\r\n      margin-left: -12px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <md-card id=\"timeCard\" style=\"padding:0.5%\">\n  \n \n <md-card-content>\n    <a style=\"font-size:300%\"> {{myDate | date: 'mediumTime'}}   </a> <a>{{myDate | date: 'fullDate'}}</a><a style=\"float:right\"><img src=\"assets/home.png\" (click)=\"goToHome()\" height=\"50\" width=\"50\"><img src=\"assets/logout.png\" (click)=\"logout()\" height=\"50\" width=\"50\"></a>\n\n  </md-card-content>\n\n</md-card> -->\n\n\n<md-grid-list #show cols=\"8\" style=\"margin-top:1%\" rowHeight=\"1:1\">\n  <md-grid-tile style=\"height:20%\">\n    <md-card class=\"example-card\">\n    <img md-card-image src=\"assets/weather.jpg\" (click)=\"goToWeather()\" class=\"myCardImage\" alt=\"Weather\">\n    <md-card-actions>\n  <p style=\"    font-size: 179%;\n  margin-top: -10%;\n  text-align: center;\">Weather</p>\n    </md-card-actions>\n  </md-card>\n</md-grid-tile>\n  <md-grid-tile style=\"height:20%\">\n      <md-card class=\"example-card\">\n          <img md-card-image src=\"assets/translate.png\" (click)=\"goToTranslate()\" class=\"myCardImage\" alt=\"Translate\">\n          <md-card-actions>\n        <p style=\"    font-size: 179%;\n        margin-top: -10%;\n        text-align: center;\">Translate</p>\n          </md-card-actions>\n        </md-card>\n  </md-grid-tile>\n  <md-grid-tile style=\"height:20%\">\n      <md-card class=\"example-card\">\n          <img md-card-image src=\"assets/news4.png\" class=\"myCardImage\" (click)=\"goToNews()\" alt=\"News\">\n          <md-card-actions>\n        <p style=\"    font-size: 179%;\n        margin-top: -10%;\n        text-align: center;\">News</p>\n          </md-card-actions>\n        </md-card>\n  </md-grid-tile>\n  <md-grid-tile style=\"height:20%\">\n      <md-card class=\"example-card\">\n          <img md-card-image src=\"assets/maps.png\" class=\"myCardImage\" (click)=\"goToMaps()\" alt=\"Maps\">\n          <md-card-actions>\n        <p style=\"    font-size: 179%;\n        margin-top: -10%;\n        text-align: center;\">Maps</p>\n          </md-card-actions>\n        </md-card>\n  </md-grid-tile>\n  <md-grid-tile style=\"height:20%\">\n      <md-card class=\"example-card\">\n          <img md-card-image src=\"assets/money2.png\" class=\"myCardImage\" (click)=\"goToForex()\" alt=\"Forex\">\n          <md-card-actions>\n        <p style=\"    font-size: 179%;\n        margin-top: -10%;\n        text-align: center;\">Forex</p>\n          </md-card-actions>\n        </md-card>\n  </md-grid-tile>\n\n  <md-grid-tile style=\"height:20%\">\n    <md-card class=\"example-card\">\n        <img md-card-image src=\"assets/contact.png\" class=\"myCardImage\" (click)=\"goToContacts()\" alt=\"Contacts\">\n        <md-card-actions>\n      <p style=\"    font-size: 179%;\n      margin-top: -10%;\n      text-align: center;\">Contacts</p>\n        </md-card-actions>\n      </md-card>\n</md-grid-tile>\n\n<md-grid-tile style=\"height:20%\">\n  <md-card class=\"example-card\">\n      <img md-card-image src=\"assets/bday1.png\" class=\"myCardImage\" (click)=\"goToBirthdays()\"  alt=\"B'days\">\n      <md-card-actions>\n    <p style=\"    font-size: 179%;\n    margin-top: -10%;\n    text-align: center;\">B'days</p>\n      </md-card-actions>\n    </md-card>\n</md-grid-tile>\n\n<!-- <md-grid-tile>\n  <md-card class=\"example-card\">\n      <img md-card-image src=\"assets/chat.png\" class=\"myCardImage\"(click)=\"goToChat()\" alt=\"Chat\">\n      <md-card-actions>\n    <p style=\"    font-size: 179%;\n    margin-top: -10%;\n    text-align: center;\">Chat</p>\n      </md-card-actions>\n    </md-card>\n</md-grid-tile> -->\n\n<md-grid-tile style=\"height:20%\">\n  <md-card class=\"example-card\">\n      <img md-card-image src=\"assets/notes.png\"  (click)=\"goToNotes()\" class=\"myCardImage\"  alt=\"Notes\">\n      <md-card-actions>\n    <p style=\"    font-size: 179%;\n    margin-top: -10%;\n    text-align: center;\">Notes</p>\n      </md-card-actions>\n    </md-card>\n</md-grid-tile>\n</md-grid-list>\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(router, afAuth) {
        this.router = router;
        this.afAuth = afAuth;
        this.spinner = false;
    }
    HomePageComponent.prototype.goToHome = function () {
        this.router.navigateByUrl('navbar/home');
    };
    HomePageComponent.prototype.goToNotes = function () {
        this.router.navigateByUrl('navbar/notes');
    };
    HomePageComponent.prototype.goToNews = function () {
        this.router.navigateByUrl('navbar/news');
    };
    HomePageComponent.prototype.goToMaps = function () {
        this.router.navigateByUrl('navbar/maps');
    };
    HomePageComponent.prototype.goToTranslate = function () {
        this.router.navigateByUrl('navbar/translate');
    };
    HomePageComponent.prototype.goToWeather = function () {
        this.router.navigateByUrl('navbar/weather');
    };
    HomePageComponent.prototype.goToChat = function () {
        this.router.navigateByUrl('navbar/chat');
    };
    HomePageComponent.prototype.goToForex = function () {
        this.router.navigateByUrl('navbar/forex');
    };
    HomePageComponent.prototype.goToBirthdays = function () {
        this.router.navigateByUrl('navbar/birthdays');
    };
    HomePageComponent.prototype.goToContacts = function () {
        this.router.navigateByUrl('navbar/contacts');
    };
    HomePageComponent.prototype.ngOnInit = function () {
        this.utcTime();
        $(document).ready(function () {
            $('.owl-carousel').owlCarousel({
                items: 7,
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 1000,
            });
        });
    };
    HomePageComponent.prototype.utcTime = function () {
        var _this = this;
        setInterval(function () {
            _this.myDate = new Date();
        }, 1000);
    };
    HomePageComponent.prototype.startTime = function () {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = this.checkTime(m);
        s = this.checkTime(s);
        document.getElementById('txt').innerHTML =
            h + ":" + m + ":" + s;
        var t = setTimeout(this.startTime, 500);
    };
    HomePageComponent.prototype.checkTime = function (i) {
        if (i < 10) {
            i = "0" + i;
        }
        ; // add zero in front of numbers < 10
        return i;
    };
    HomePageComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
        /*   this.imageUrl = "";
          this.userName = "";
          this.isLoggedIn= false; */
        this.router.navigateByUrl("login");
    };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__("../../../../../src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object])
    ], HomePageComponent);
    return HomePageComponent;
    var _a, _b;
}());

//# sourceMappingURL=home-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<button mdl-button mdl-button-type=\"raised\" mdl-ripple (click)=\"login()\" *ngIf=\"!(user | async)?.uid\">Login</button>\n\n\n\n<nav *ngIf=\"(user | async)?.uid\">\n  <div class=\"nav-wrapper\">\n     <div class=\"chip\" style=\"width:12%\">\n  {{userName}}\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_async_local_storage__ = __webpack_require__("../../../../angular-async-local-storage/angular-async-local-storage.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginComponent = /** @class */ (function () {
    function LoginComponent(storage, _userService, afAuth, db, auth, router) {
        var _this = this;
        this.storage = storage;
        this._userService = _userService;
        this.afAuth = afAuth;
        this.db = db;
        this.auth = auth;
        this.router = router;
        this.jay7User = new __WEBPACK_IMPORTED_MODULE_6__models_user__["a" /* User */]();
        this.user = this.afAuth.authState;
        this.afAuth.authState.subscribe(function (auth) {
            if (auth) {
                // console.log(auth);
                _this.storage.setItem('userName', auth.displayName);
                _this.storage.setItem('email', auth.email);
                _this.storage.setItem('photoUrl', auth.photoURL).subscribe(function () {
                    // Done
                });
                _this.router.navigateByUrl('navbar');
            }
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider());
        var fireBaseUser = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
        var y;
        this.user.subscribe(function (data) {
            console.log(data);
            if (data != null) {
                _this.imageUrl = data.photoURL;
                _this.userName = data.displayName;
                _this.jay7User['userName'] = _this.userName;
                _this.jay7User.email = data.email;
                _this.storage.setItem('userName', _this.userName).subscribe(function (data) {
                    // console.log(data);
                });
                _this.storage.setItem('email', data.email).subscribe(function (data) {
                    //console.log(data);
                });
                /* this.storage.setItem('photoUrl', data.photoURL).subscribe(() => {
                
                }); */
                _this.usersList = _this.db.list('/users_List');
                _this.usersList.subscribe(function (data) {
                    //console.log(data);
                });
                _this.listOfUsers = _this.db.list('/listOfUserNames');
                var query = _this.db.database.ref('/users_List').orderByChild("email").equalTo(data.email).once("value", function (snapshot) {
                    var userData = snapshot.val();
                    if (userData) {
                        // console.log('user already exists');
                    }
                    else {
                        //console.log('user doesnt exits');
                        _this.usersList.push(_this.jay7User);
                        _this.listOfUsers.push(_this.jay7User.userName);
                    }
                    // console.log(userData);
                });
                _this.router.navigateByUrl('navbar/home');
            }
            /* this.imageUrl = this.afAuth.auth.currentUser.photoURL; */
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8_angular_async_local_storage__["a" /* AsyncLocalStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_angular_async_local_storage__["a" /* AsyncLocalStorage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _f || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/maps/maps.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\r\n  height: 300px;\r\n\r\n}\r\n\r\n.sebm-google-map-container{\r\n  height: 600px;\r\n  width:1080px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/maps/maps.component.html":
/***/ (function(module, exports) {

module.exports = "\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n</agm-map>\n\n\n<!-- <sebm-google-map \n[latitude]=\"lat\"\n[longitude]=\"lng\"\n[zoom]=\"zoom\"\n[disableDefaultUI]=\"false\"\n[zoomControl]=\"false\"\n(mapClick)=\"mapClicked($event)\">\n\n<sebm-google-map-marker \n    *ngFor=\"let m of markers; let i = index\"\n    (markerClick)=\"clickedMarker(m.label, i)\"\n    [latitude]=\"m.lat\"\n    [longitude]=\"m.lng\"\n    [label]=\"m.label\"\n    [markerDraggable]=\"m.draggable\"\n    (dragEnd)=\"markerDragEnd(m, $event)\">\n    \n  <sebm-google-map-info-window>\n    <strong>InfoWindow content</strong>\n  </sebm-google-map-info-window>\n  \n</sebm-google-map-marker>\n\n<sebm-google-map-circle [latitude]=\"lat + 0.3\" [longitude]=\"lng\" \n    [radius]=\"5000\"\n    [fillColor]=\"'red'\"\n    [circleDraggable]=\"true\"\n    [editable]=\"true\">\n</sebm-google-map-circle>\n\n</sebm-google-map> -->"

/***/ }),

/***/ "../../../../../src/app/maps/maps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapsComponent = /** @class */ (function () {
    function MapsComponent() {
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    MapsComponent.prototype.ngOnInit = function () {
    };
    MapsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-maps',
            template: __webpack_require__("../../../../../src/app/maps/maps.component.html"),
            styles: [__webpack_require__("../../../../../src/app/maps/maps.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapsComponent);
    return MapsComponent;
}());

//# sourceMappingURL=maps.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/models/weather.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherModel; });
/* unused harmony export City */
/* unused harmony export Coord */
/* unused harmony export Weather */
/* unused harmony export MainTemp */
/* unused harmony export Clouds */
/* unused harmony export ListVariable */
var WeatherModel = /** @class */ (function () {
    function WeatherModel() {
        this.list = [];
    }
    return WeatherModel;
}());

var City = /** @class */ (function () {
    function City() {
    }
    return City;
}());

var Coord = /** @class */ (function () {
    function Coord() {
    }
    return Coord;
}());

var Weather = /** @class */ (function () {
    function Weather() {
    }
    return Weather;
}());

var MainTemp = /** @class */ (function () {
    function MainTemp() {
    }
    return MainTemp;
}());

var Clouds = /** @class */ (function () {
    function Clouds() {
    }
    return Clouds;
}());

var ListVariable = /** @class */ (function () {
    function ListVariable() {
    }
    return ListVariable;
}());

//# sourceMappingURL=weather.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.chip {\r\n    display: inline-block;\r\n    padding: 0 25px;\r\n    height: 50px;\r\n    font-size: 16px;\r\n    line-height: 50px;\r\n    border-radius: 25px;\r\n    background-color: #f1f1f1;\r\n}\r\n\r\n.chip img {\r\n    float: left;\r\n    margin: 0 10px 0 -25px;\r\n    height: 50px;\r\n    width: 50px;\r\n    border-radius: 50%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<md-card id=\"timeCard\" style=\"padding:0.5%\">\n  \n \n <md-card-content>\n    <a style=\"font-size:300%\"> {{myDate | date: 'mediumTime'}}   </a> <a>{{myDate | date: 'fullDate'}}</a>\n    <a style=\"float:right;margin-top:7px\"><img src=\"assets/home.png\" (click)=\"goToHome()\" style=\"margin-right:10px\" height=\"50\" width=\"50\"><img src=\"assets/logout.png\" (click)=\"logout()\" height=\"50\" width=\"50\"></a>\n    <a style=\"margin-left:49%\" class=\"chip\" >\n      <!-- <img src=\"{{imageUrl}}\" width=\"96\" height=\"96\"> -->\n      {{name}}\n    </a>\n  </md-card-content>\n\n</md-card>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_async_local_storage__ = __webpack_require__("../../../../angular-async-local-storage/angular-async-local-storage.es5.js");
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
    function NavbarComponent(storage, router, afAuth) {
        this.storage = storage;
        this.router = router;
        this.afAuth = afAuth;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.utcTime();
        this.storage.getItem('userName').subscribe(function (data) {
            _this.name = data;
        });
        /*   this.storage.getItem('photoUrl').subscribe(data=>{
          this.imageUrl = data;
          }) */
    };
    NavbarComponent.prototype.utcTime = function () {
        var _this = this;
        setInterval(function () {
            _this.myDate = new Date();
        }, 1000);
    };
    NavbarComponent.prototype.goToHome = function () {
        this.router.navigateByUrl('navbar/home');
    };
    NavbarComponent.prototype.startTime = function () {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = this.checkTime(m);
        s = this.checkTime(s);
        document.getElementById('txt').innerHTML =
            h + ":" + m + ":" + s;
        var t = setTimeout(this.startTime, 500);
    };
    NavbarComponent.prototype.checkTime = function (i) {
        if (i < 10) {
            i = "0" + i;
        }
        ; // add zero in front of numbers < 10
        return i;
    };
    NavbarComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
        /*   this.imageUrl = "";
          this.userName = "";
          this.isLoggedIn= false; */
        this.storage.clear().subscribe(function () { });
        this.router.navigateByUrl("login");
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular_async_local_storage__["a" /* AsyncLocalStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular_async_local_storage__["a" /* AsyncLocalStorage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/news/news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".news-card {\r\n     width: 300px;\r\n    display: -ms-inline-grid;\r\n    display: inline-grid;\r\n    margin: 0.5%;\r\n   \r\n} ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<md-spinner *ngIf=\"spinner; else show\" style=\"    margin-left: 44%;\nmargin-top: 17%;\"></md-spinner>\n<ng-template #show>\n<md-tab-group style=\"height:600px;overflow-y:scroll\">\n  <md-tab label=\"Times Of India\">\n<md-card *ngFor=\"let news of toiNews\" class=\"news-card\">\n  <md-card-header>\n    <md-card-title style=\"color:lightcoral\">{{news.title}}</md-card-title>\n    <md-card-subtitle></md-card-subtitle>\n  </md-card-header>\n  <img md-card-image src={{news.urlToImage}}  >\n  <md-card-content>\n    <p>\n     {{news.description}}\n    </p>\n  </md-card-content>\n  <md-card-actions>\n  <a href={{news.url}} md-raised-button color=\"primary\" >Visit</a>&nbsp;&nbsp;&nbsp;&nbsp; <a>{{news.publishedAt}}</a>\n  </md-card-actions>\n</md-card>\n  </md-tab>\n  <md-tab label=\"The Hindu\">\n<md-card *ngFor=\"let news of hinduNews\" class=\"news-card\">\n  <md-card-header>\n    <md-card-title style=\"color:lightcoral\">{{news.title}}</md-card-title>\n    <md-card-subtitle></md-card-subtitle>\n  </md-card-header>\n  <img md-card-image src={{news.urlToImage}}  >\n  <md-card-content>\n    <p>\n     {{news.description}}\n    </p>\n  </md-card-content>\n  <md-card-actions>\n  <a href={{news.url}} target=\"_blank\"  md-raised-button color=\"primary\" >Visit</a>&nbsp;&nbsp;&nbsp;&nbsp; <a>{{news.publishedAt}}</a>\n  </md-card-actions>\n</md-card>\n\n  </md-tab>\n<md-tab label=\"Tech Radar\">\n\n  <md-card *ngFor=\"let news of techRadar\" class=\"news-card\">\n  <md-card-header>\n    <md-card-title style=\"color:lightcoral\">{{news.title}}</md-card-title>\n    <md-card-subtitle></md-card-subtitle>\n  </md-card-header>\n  <img md-card-image src={{news.urlToImage}}  >\n  <md-card-content>\n    <p>\n     {{news.description}}\n    </p>\n  </md-card-content>\n  <md-card-actions>\n  <a href={{news.url}} md-raised-button color=\"primary\" >Visit</a>&nbsp;&nbsp;&nbsp;&nbsp; <a>{{news.publishedAt}}</a>\n  </md-card-actions>\n</md-card>\n</md-tab>\n<md-tab label=\"National Geographic\">\n\n  <md-card *ngFor=\"let news of ngc\" class=\"news-card\">\n  <md-card-header>\n    <md-card-title style=\"color:lightcoral\">{{news.title}}</md-card-title>\n    <md-card-subtitle></md-card-subtitle>\n  </md-card-header>\n  <img md-card-image src={{news.urlToImage}}  >\n  <md-card-content>\n    <p>\n     {{news.description}}\n    </p>\n  </md-card-content>\n  <md-card-actions>\n  <a href={{news.url}} md-raised-button color=\"primary\" >Visit</a>&nbsp;&nbsp;&nbsp;&nbsp; <a>{{news.publishedAt}}</a>\n  </md-card-actions>\n</md-card>\n</md-tab>\n\n<md-tab label=\"The Verge\">\n  <md-card *ngFor=\"let news of theVerge\" class=\"news-card\">\n  <md-card-header>\n    <md-card-title style=\"color:lightcoral\">{{news.title}}</md-card-title>\n    <md-card-subtitle></md-card-subtitle>\n  </md-card-header>\n  <img md-card-image src={{news.urlToImage}}  >\n  <md-card-content>\n    <p>\n     {{news.description}}\n    </p>\n  </md-card-content>\n  <md-card-actions>\n  <a href={{news.url}} md-raised-button color=\"primary\" >Visit</a>&nbsp;&nbsp;&nbsp;&nbsp; <a>{{news.publishedAt}}</a>\n  </md-card-actions>\n</md-card>\n</md-tab>\n<md-tab label=\"New Scientist\">\n  <md-card *ngFor=\"let news of theNextWeb\" class=\"news-card\">\n  <md-card-header>\n    <md-card-title style=\"color:lightcoral\">{{news.title}}</md-card-title>\n    <md-card-subtitle></md-card-subtitle>\n  </md-card-header>\n  <img md-card-image src={{news.urlToImage}}  >\n  <md-card-content>\n    <p>\n     {{news.description}}\n    </p>\n  </md-card-content>\n  <md-card-actions>\n  <a href={{news.url}} md-raised-button color=\"primary\" >Visit</a>&nbsp;&nbsp;&nbsp;&nbsp; <a>{{news.publishedAt}}</a>\n  </md-card-actions>\n</md-card>\n</md-tab>\n<md-tab label=\"ESPN CricInfo\">\n  <md-card *ngFor=\"let news of espnCric\" class=\"news-card\">\n  <md-card-header>\n    <md-card-title style=\"color:lightcoral\">{{news.title}}</md-card-title>\n    <md-card-subtitle></md-card-subtitle>\n  </md-card-header>\n  <img md-card-image src={{news.urlToImage}}  >\n  <md-card-content>\n    <p>\n     {{news.description}}\n    </p>\n  </md-card-content>\n  <md-card-actions>\n  <a href={{news.url}} md-raised-button color=\"primary\" >Visit</a>&nbsp;&nbsp;&nbsp;&nbsp; <a>{{news.publishedAt}}</a>\n  </md-card-actions>\n</md-card>\n</md-tab>\n<md-tab label=\"Google News\">\n  <md-card *ngFor=\"let news of gnews\" class=\"news-card\">\n  <md-card-header>\n    <md-card-title style=\"color:lightcoral\">{{news.title}}</md-card-title>\n    <md-card-subtitle></md-card-subtitle>\n  </md-card-header>\n  <img md-card-image src={{news.urlToImage}}  >\n  <md-card-content>\n    <p>\n     {{news.description}}\n    </p>\n  </md-card-content>\n  <md-card-actions>\n  <a href={{news.url}} md-raised-button color=\"primary\" >Visit</a>&nbsp;&nbsp;&nbsp;&nbsp; <a>{{news.publishedAt}}</a>\n  </md-card-actions>\n</md-card>\n</md-tab>\n<md-tab label=\"Recode\">\n  <md-card *ngFor=\"let news of recode\" class=\"news-card\">\n  <md-card-header>\n    <md-card-title style=\"color:lightcoral\">{{news.title}}</md-card-title>\n    <md-card-subtitle></md-card-subtitle>\n  </md-card-header>\n  <img md-card-image src={{news.urlToImage}}  >\n  <md-card-content>\n    <p>\n     {{news.description}}\n    </p>\n  </md-card-content>\n  <md-card-actions>\n  <a href={{news.url}} md-raised-button color=\"primary\" >Visit</a>&nbsp;&nbsp;&nbsp;&nbsp; <a>{{news.publishedAt}}</a>\n  </md-card-actions>\n</md-card>\n</md-tab>\n</md-tab-group></ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsComponent = /** @class */ (function () {
    function NewsComponent(_apiService) {
        this._apiService = _apiService;
        this.toiNews = [];
        this.hinduNews = [];
        this.techRadar = [];
        this.ngc = [];
        this.theVerge = [];
        this.theNextWeb = [];
        this.espnCric = [];
        this.gnews = [];
        this.recode = [];
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner = true;
        this._apiService.fetchNews('the-times-of-india').subscribe(function (data) {
            _this.toiNews = data.articles;
            for (var i = 0; i < _this.toiNews.length; i++) {
                _this.toiNews[i].publishedAt = new Date(_this.toiNews[i].publishedAt).toLocaleString('en-CA', { hour12: true });
            }
        });
        this._apiService.fetchNews('the-hindu').subscribe(function (data) {
            _this.hinduNews = data.articles;
            for (var i = 0; i < _this.hinduNews.length; i++) {
                _this.hinduNews[i].publishedAt = new Date(_this.hinduNews[i].publishedAt).toLocaleString('en-CA', { hour12: true });
            }
        });
        this._apiService.fetchNews('techradar').subscribe(function (data) {
            _this.techRadar = data.articles;
            for (var i = 0; i < _this.techRadar.length; i++) {
                _this.techRadar[i].publishedAt = new Date(_this.techRadar[i].publishedAt).toLocaleString('en-CA', { hour12: true });
            }
        });
        this._apiService.fetchNews('national-geographic').subscribe(function (data) {
            _this.ngc = data.articles;
            for (var i = 0; i < _this.ngc.length; i++) {
                _this.ngc[i].publishedAt = new Date(_this.ngc[i].publishedAt).toLocaleString('en-CA', { hour12: true });
            }
        });
        this._apiService.fetchNews('the-verge').subscribe(function (data) {
            _this.theVerge = data.articles;
            for (var i = 0; i < _this.theVerge.length; i++) {
                _this.theVerge[i].publishedAt = new Date(_this.theVerge[i].publishedAt).toLocaleString('en-CA', { hour12: true });
            }
        });
        this._apiService.fetchNews('new-scientist').subscribe(function (data) {
            _this.theNextWeb = data.articles;
            for (var i = 0; i < _this.theNextWeb.length; i++) {
                _this.theNextWeb[i].publishedAt = new Date(_this.theNextWeb[i].publishedAt).toLocaleString('en-CA', { hour12: true });
            }
        });
        this._apiService.fetchNewslatest('espn-cric-info').subscribe(function (data) {
            _this.espnCric = data.articles;
            for (var i = 0; i < _this.espnCric.length; i++) {
                _this.espnCric[i].publishedAt = new Date(_this.espnCric[i].publishedAt).toLocaleString('en-CA', { hour12: true });
            }
        });
        this._apiService.fetchNews('google-news').subscribe(function (data) {
            _this.gnews = data.articles;
            for (var i = 0; i < _this.gnews.length; i++) {
                _this.gnews[i].publishedAt = new Date(_this.gnews[i].publishedAt).toLocaleString('en-CA', { hour12: true });
            }
            _this.spinner = false;
        });
        this._apiService.fetchNews('recode').subscribe(function (data) {
            _this.recode = data.articles;
            for (var i = 0; i < _this.recode.length; i++) {
                _this.recode[i].publishedAt = new Date(_this.recode[i].publishedAt).toLocaleString('en-CA', { hour12: true });
            }
        });
    };
    NewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-news',
            template: __webpack_require__("../../../../../src/app/news/news.component.html"),
            styles: [__webpack_require__("../../../../../src/app/news/news.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _a || Object])
    ], NewsComponent);
    return NewsComponent;
    var _a;
}());

//# sourceMappingURL=news.component.js.map

/***/ }),

/***/ "../../../../../src/app/notes/notes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.example-card {\r\n    width: 400px;\r\n  } \r\n  .news-card {\r\n    width: 300px;\r\n   display: -ms-inline-grid;\r\n   display: inline-grid;\r\n   margin: 0.5%;\r\n  \r\n} ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notes/notes.component.html":
/***/ (function(module, exports) {

module.exports = "<md-spinner *ngIf=\"spinner; else show\" style=\"    margin-left: 44%;\nmargin-top: 17%;\"></md-spinner>\n<ng-template #show>\n<md-tab-group>\n    <md-tab label=\"My Notes\">\n       <!--  <md-card *ngFor=\"let notes of myNotes\" class=\"example-card\">\n            <md-card-header>\n              \n              <md-card-title>{{notes.notesTitle}}</md-card-title>\n              <md-card-subtitle>{{notes.timeStamp}}</md-card-subtitle>\n            </md-card-header>\n            \n            <md-card-content>\n              <p>\n                {{notes.notesData}}\n              </p>\n            </md-card-content>\n            <md-card-actions>\n             \n            </md-card-actions>\n          </md-card> -->\n          <md-card *ngFor=\"let notes of myNotes\" class=\"news-card\">\n              <md-card-header>\n                <md-card-title style=\"color:lightcoral;font-size:175%\">{{notes.notesTitle}}</md-card-title>\n                <md-card-subtitle>{{notes.timeStamp | date}}</md-card-subtitle>\n              </md-card-header>\n             <!--  <img md-card-image src={{news.urlToImage}}  > -->\n              <md-card-content style=\"overflow:auto;height:80px\">\n                <p>\n                 {{notes.notesData}}\n                </p>\n              </md-card-content>\n              <md-card-actions>\n                  <md-icon class=\"md-24\" style=\"    float: right;\n                  color:coral;cursor:pointer\" aria-label=\"Example icon-button with a heart icon\" (click)=\"deleteNote(notes.timeStamp)\">delete</md-icon>\n              </md-card-actions>\n            </md-card>\n            \n\n    </md-tab>\n    <md-tab label=\"Add New\">\n        \n        <form class=\"example-form\">\n            <div>\n                <md-form-field class=\"example-full-width\">\n                      <input mdInput type=\"textarea\" placeholder=\"Title\" name=\"title\" [(ngModel)]=\"myTitle\" >\n                     \n                  \n                    </md-form-field>\n            <md-form-field class=\"example-ull-width\">\n            <!--   <input mdInput type=\"textarea\" placeholder=\"Favorite food\"> -->\n              <textarea mdInput  [(ngModel)]=\"myText\" placeholder=\"Note Text\" name=\"txtDescEd\" style=\"padding:1%\" cols=\"60\" rows=\"10\"></textarea>\n          \n            </md-form-field></div>\n          \n          </form>\n          <button md-raised-button color=\"primary\" (click)=\"addNotes()\">Add Notes</button>\n    </md-tab>\n  </md-tab-group>\n  </ng-template>\n  \n<!-- \n\nH7002E-sony\n\nx7002e\nx7500e -->"

/***/ }),

/***/ "../../../../../src/app/notes/notes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesComponent; });
/* unused harmony export Notes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_async_local_storage__ = __webpack_require__("../../../../angular-async-local-storage/angular-async-local-storage.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotesComponent = /** @class */ (function () {
    function NotesComponent(storage, router, snackBar, db) {
        this.storage = storage;
        this.router = router;
        this.snackBar = snackBar;
        this.db = db;
        this.myNotes = [];
        this.newNote = new Notes();
    }
    NotesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner = true;
        this.storage.getItem('email').subscribe(function (data) {
            // console.log(data);
            _this.x = data;
            var query = _this.db.database.ref('/users_List').orderByChild("email").equalTo(_this.x).once("value", function (snapshot) {
                var userData = snapshot.val();
                // console.log(userData);
                _this.userKey = Object.keys(userData)[0];
                //console.log(Object.keys(userData));
                _this.dbNotes = _this.db.list('users_List/' + Object.keys(userData) + '/notes');
                var y = _this.dbNotes.subscribe(function (data) {
                    _this.myNotes = data;
                    _this.spinner = false;
                    //console.log(this.myNotes);
                    //this.temp = [...data];
                    //this.contactsTable.loadingIndicator = false;
                    // console.log(this.myContacts);
                });
            });
        });
    };
    NotesComponent.prototype.deleteNote = function (ts) {
        var _this = this;
        //console.log(ts);
        var x = JSON.parse(JSON.stringify(this.myNotes));
        for (var i = 0; i < x.length; i++) {
            if (x[i].timeStamp == ts) {
                x.splice(i, 1);
                break;
            }
        }
        var y = this.db.list('users_List/' + this.userKey);
        y.set('notes', x).then(function (data) {
            //console.log(data);
            _this.snackBar.open('Note Deleted', '', {
                duration: 1000,
            });
        });
    };
    NotesComponent.prototype.addNotes = function () {
        var _this = this;
        this.newNote.notesData = this.myText;
        this.newNote.timeStamp = Date.now();
        this.newNote.notesTitle = this.myTitle;
        console.log(this.newNote);
        var y = JSON.parse(JSON.stringify(this.myNotes));
        y.push(this.newNote);
        var x = this.db.list('users_List/' + this.userKey);
        x.update('notes', y).then(function (data) {
            //console.log(data);
            _this.snackBar.open('Notes Added', '', {
                duration: 1000,
            });
        });
        this.myText = null;
        this.myTitle = null;
    };
    NotesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notes',
            template: __webpack_require__("../../../../../src/app/notes/notes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/notes/notes.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular_async_local_storage__["a" /* AsyncLocalStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular_async_local_storage__["a" /* AsyncLocalStorage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdSnackBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object])
    ], NotesComponent);
    return NotesComponent;
    var _a, _b, _c, _d;
}());

var Notes = /** @class */ (function () {
    function Notes() {
    }
    return Notes;
}());

//# sourceMappingURL=notes.component.js.map

/***/ }),

/***/ "../../../../../src/app/routing-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__weather_weather_component__ = __webpack_require__("../../../../../src/app/weather/weather.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news_news_component__ = __webpack_require__("../../../../../src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__maps_maps_component__ = __webpack_require__("../../../../../src/app/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__translate_translate_component__ = __webpack_require__("../../../../../src/app/translate/translate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_page_home_page_component__ = __webpack_require__("../../../../../src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__forex_forex_component__ = __webpack_require__("../../../../../src/app/forex/forex.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contacts_contacts_component__ = __webpack_require__("../../../../../src/app/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__notes_notes_component__ = __webpack_require__("../../../../../src/app/notes/notes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__birthdays_birthdays_component__ = __webpack_require__("../../../../../src/app/birthdays/birthdays.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */] },
    { path: 'navbar', component: __WEBPACK_IMPORTED_MODULE_12__navbar_navbar_component__["a" /* NavbarComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_7__home_page_home_page_component__["a" /* HomePageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]] },
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_7__home_page_home_page_component__["a" /* HomePageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]] },
            { path: 'weather', component: __WEBPACK_IMPORTED_MODULE_3__weather_weather_component__["a" /* WeatherComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]] },
            { path: 'news', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_4__news_news_component__["a" /* NewsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]] },
            { path: 'maps', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_5__maps_maps_component__["a" /* MapsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]] },
            { path: 'translate', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_6__translate_translate_component__["a" /* TranslateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]] },
            { path: 'forex', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_8__forex_forex_component__["a" /* ForexComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]] },
            { path: 'contacts', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_10__contacts_contacts_component__["a" /* ContactsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]] },
            { path: 'notes', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_11__notes_notes_component__["a" /* NotesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]] },
            { path: 'birthdays', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_13__birthdays_birthdays_component__["a" /* BirthdaysComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]] },
            { path: 'chat', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_14__chat_chat_component__["a" /* ChatComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]] }
        ] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=routing-module.js.map

/***/ }),

/***/ "../../../../../src/app/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.fetchWeather = function () {
        return this.http.get('https://api.openweathermap.org/data/2.5/forecast?id=1264527&apikey=0391eb5b9075f872d2e355a3f5ee3f1c&units=metric').map(function (res) { return res.json(); });
    };
    ApiService.prototype.fetchWeatherNow = function (city) {
        return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&apikey=0391eb5b9075f872d2e355a3f5ee3f1c').map(function (res) { return res.json(); });
    };
    ApiService.prototype.fetchNews = function (sourceTitle) {
        return this.http.get('https://newsapi.org/v1/articles?source=' + sourceTitle + '&sortBy=top&apiKey=2d99d74987364e95aaf013993c90327c').map(function (res) { return res.json(); });
    };
    ApiService.prototype.fetchNewslatest = function (sourceTitle) {
        return this.http.get('https://newsapi.org/v1/articles?source=' + sourceTitle + '&sortBy=latest&apiKey=2d99d74987364e95aaf013993c90327c').map(function (res) { return res.json(); });
    };
    ApiService.prototype.translateText = function (targetLanguage, queryWord) {
        return this.http.get('https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=' + targetLanguage + '&dt=t&q=' + queryWord).map(function (res) { return res.json(); });
    };
    ApiService.prototype.fetchForex = function () {
        return this.http.get('https://api.fixer.io/latest?base=INR').map(function (res) { return res.json(); });
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], ApiService);
    return ApiService;
    var _a;
}());

//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = /** @class */ (function () {
    function AuthService(auth, router) {
        this.auth = auth;
        this.router = router;
        this.currentUser = null;
    }
    AuthService.prototype.canActivate = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].from(this.auth.authState).take(1).map(function (state) { return !!state; }).do(function (authenticated) {
            if (!authenticated)
                _this.router.navigateByUrl('login');
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/weather.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeatherService = /** @class */ (function () {
    function WeatherService(http) {
        this.http = http;
    }
    //1264527
    WeatherService.prototype.fetchWeather = function () {
        return this.http.get('https://api.openweathermap.org/data/2.5/forecast?id=1270670&apikey=0391eb5b9075f872d2e355a3f5ee3f1c&units=metric').map(function (res) { return res.json(); });
    };
    WeatherService.prototype.fetchWeatherIcon = function (iconId) {
        return this.http.get('http://openweathermap.org/img/w/' + iconId + '.png');
    };
    WeatherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], WeatherService);
    return WeatherService;
    var _a;
}());

//# sourceMappingURL=weather.service.js.map

/***/ }),

/***/ "../../../../../src/app/translate/translate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/translate/translate.component.html":
/***/ (function(module, exports) {

module.exports = "\n<md-card >\n   <md-card-title style=\"color:limegreen\">\n\n  </md-card-title> \n  <md-card-content>\n <md-select placeholder=\"Target Lang.,\" (change)=\"selectLanguage($event)\" name=\"language\" >\n    <md-option *ngFor=\"let lang of languages\" [value]=\"lang.code\">\n      {{lang.value}}\n    </md-option>\n  </md-select>\n\n   <md-form-field class=\"example-full-width\">\n    <input mdInput placeholder=\"Query...\"  [(ngModel)]=\"queryWord\">\n  </md-form-field>\n\n  <button md-raised-button color=\"primary\" (click)=\"translate()\">Translate</button>\n\n  {{queryResult}}\n  </md-card-content>\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/translate/translate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TranslateComponent = /** @class */ (function () {
    function TranslateComponent(_apiService) {
        this._apiService = _apiService;
        this.languages = [
            { code: 'ar', value: 'Arabic' },
            { code: 'bn', value: 'Bengali' },
            { code: 'zh-CN', value: 'Chinese' },
            { code: 'nl', value: 'Dutch' },
            { code: 'fr', value: 'French' },
            { code: 'de', value: 'German' },
            { code: 'gu', value: 'Gujrati' },
            { code: 'hi', value: 'Hindi' },
            { code: 'id', value: 'Indonesia' },
            { code: 'kn', value: 'Kannada' },
            { code: 'ml', value: 'Malyalam' },
            { code: 'mr', value: 'Marathi' },
            { code: 'fa', value: 'Persian' },
            { code: 'pa', value: 'Punjabi' },
            { code: 'es', value: 'Spanish' },
            { code: 'ta', value: 'Tamil' },
            { code: 'te', value: 'Telugu' },
            { code: 'ur', value: 'Urdu' }
        ];
    }
    TranslateComponent.prototype.ngOnInit = function () {
        this.targetLanguage = 'ar';
    };
    TranslateComponent.prototype.selectLanguage = function (val) {
        this.targetLanguage = val.value;
    };
    TranslateComponent.prototype.translate = function () {
        var _this = this;
        console.log(this.queryWord);
        this._apiService.translateText(this.targetLanguage, this.queryWord).subscribe(function (data) {
            _this.queryResult = data[0][0][0];
        });
    };
    TranslateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-translate',
            template: __webpack_require__("../../../../../src/app/translate/translate.component.html"),
            styles: [__webpack_require__("../../../../../src/app/translate/translate.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _a || Object])
    ], TranslateComponent);
    return TranslateComponent;
    var _a;
}());

//# sourceMappingURL=translate.component.js.map

/***/ }),

/***/ "../../../../../src/app/weather/weather.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#weatherCard{\r\n    width:38%;\r\n}\r\n\r\n\r\n.weatherText{\r\n    margin-bottom: -10px;\r\n}\r\n\r\n/* md-grid-tile {\r\n  background: lightblue;\r\n} */\r\n.carouselCard{\r\n    padding:1%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/weather/weather.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- <img src=\"http://openweathermap.org/img/w/01n.png\"> -->\n\n<!-- <div *ngIf=\"dataAvailable\"><p>Temperature: &nbsp;{{weatherData.list[0].main.temp}}</p>\n<p>Humidity: &nbsp;{{weatherData.list[0].main.humidity}} %</p> </div> -->\n\n<md-spinner *ngIf=\"spinner; else show\" style=\"    margin-left: 44%;\nmargin-top: 17%;\"></md-spinner><ng-template #show>\n<md-grid-list cols=\"2\" rowHeight=\"3:1\" >\n  <md-grid-tile>\n    <md-card id=\"weatherCard\"  *ngIf=\"city1dataAvailable\"  >\n      <md-card-title style=\"color:limegreen;text-align:left\">{{city1weatherDataNow.name}} <a><img src={{city1weatherIconUrl}} height=\"62\" width=\"62\" style=\"    margin-left: 2%;\n       margin-top: -17%;\n       margin-bottom: -11%;\"></a></md-card-title> \n     <md-card-content>\n      <div style=\"text-align:left\">\n       <p class=\"weatherText\">Temperature:&nbsp;{{city1weatherDataNow.main.temp}}°C </p>\n       <p class=\"weatherText\">Min:&nbsp;{{city1weatherDataNow.main.temp_min}}°C &nbsp;&nbsp;&nbsp; Max:&nbsp;{{city1weatherDataNow.main.temp_max}}°C</p>\n       <span><p class=\"weatherText\">Condition:&nbsp;{{city1weatherDataNow.weather[0].main}}</p></span>\n       <p class=\"weatherText\"><img src=\"/assets/sunrise.png\" style=\"margin-bottom:-2%\" height=\"32\" width=\"32\">&nbsp;{{city1sunrise}}      <img src=\"/assets/sunset.png\" style=\"margin-bottom:-2%\" height=\"32\" width=\"32\">&nbsp;{{city1sunset}}</p>\n      </div>\n     </md-card-content>\n   </md-card>\n  </md-grid-tile>\n  <md-grid-tile>\n    <md-card id=\"weatherCard\"  *ngIf=\"city2dataAvailable\"  >\n      <md-card-title style=\"color:limegreen;text-align:left\">{{city2weatherDataNow.name}} <a><img src={{city2weatherIconUrl}} height=\"62\" width=\"62\" style=\"    margin-left: 2%;\n       margin-top: -17%;\n       margin-bottom: -11%;\"></a></md-card-title> \n     <md-card-content>\n      <div style=\"text-align:left\">\n       <p class=\"weatherText\">Temperature:&nbsp;{{city2weatherDataNow.main.temp}}°C </p>\n       <p class=\"weatherText\">Min:&nbsp;{{city2weatherDataNow.main.temp_min}}°C &nbsp;&nbsp;&nbsp; Max:&nbsp;{{city2weatherDataNow.main.temp_max}}°C</p>\n       <span><p class=\"weatherText\">Condition:&nbsp;{{city2weatherDataNow.weather[0].main}}</p></span>\n       <p class=\"weatherText\"><img src=\"/assets/sunrise.png\" style=\"margin-bottom:-2%\" height=\"32\" width=\"32\">&nbsp;{{city2sunrise}}      <img src=\"/assets/sunset.png\" style=\"margin-bottom:-2%\" height=\"32\" width=\"32\">&nbsp;{{city2sunset}}</p>\n      </div>\n     </md-card-content>\n   </md-card>\n  </md-grid-tile>\n  <md-grid-tile>\n    <md-select placeholder=\"Select City\" (change)=\"fetchCity($event.value)\">\n      <md-option *ngFor=\"let city of options\" [value]=\"city\">\n        {{ city }}\n      </md-option>\n    </md-select>\n\n    <md-card id=\"weatherCard\"  *ngIf=\"city3dataAvailable\"  >\n      <md-card-title style=\"color:limegreen;text-align:left\">{{city3weatherDataNow.name}} <a><img src={{city3weatherIconUrl}} height=\"62\" width=\"62\" style=\"    margin-left: 2%;\n       margin-top: -17%;\n       margin-bottom: -11%;\"></a></md-card-title> \n     <md-card-content>\n      <div style=\"text-align:left\">\n       <p class=\"weatherText\">Temperature:&nbsp;{{city3weatherDataNow.main.temp}}°C </p>\n       <p class=\"weatherText\">Min:&nbsp;{{city3weatherDataNow.main.temp_min}}°C &nbsp;&nbsp;&nbsp; Max:&nbsp;{{city3weatherDataNow.main.temp_max}}°C</p>\n       <span><p class=\"weatherText\">Condition:&nbsp;{{city3weatherDataNow.weather[0].main}}</p></span>\n       <p class=\"weatherText\"><img src=\"/assets/sunrise.png\" style=\"margin-bottom:-2%\" height=\"32\" width=\"32\">&nbsp;{{city3sunrise}}      <img src=\"/assets/sunset.png\" style=\"margin-bottom:-2%\" height=\"32\" width=\"32\">&nbsp;{{city3sunset}}</p>\n      </div>\n     </md-card-content>\n   </md-card>\n  </md-grid-tile>\n\n</md-grid-list>\n</ng-template>\n\n\n\n\n\n  \n\n\n<!-- <div class=\"owl-carousel owl-theme\">\n  <div class=\"carouselCard\"  *ngFor=\"let weather of weatherForecast\"> <md-card style=\"background-color:lavender\"> <md-card-content>weather.main.temp</md-card-content></md-card> </div>\n \n</div> -->\n\n<!-- <md-card  style=\"width:10%;margin-top:1%\" *ngFor=\"let weather of weatherForecast\">\n   <md-card-title style=\"color:limegreen\">\n  </md-card-title> \n  <md-card-content>\n    <p class=\"weatherText\" style=\"color:limegreen;text-align:left;margin-top:-18%\"> {{weather.dt_txt}}</p>\n   <p class=\"weatherText\" style=\"text-align:left\"> {{weather.main.temp}}°C</p><a><img style=\"    margin-top: -16%;\n    margin-left: 15%;\" src=\"http://openweathermap.org/img/w/{{weatherForecast[0].weather[0].icon}}.png\"></a>\n   <p class=\"weatherText\" style=\"    text-align: left;\n    margin-top: -11%;color:lightcoral;\n    margin-bottom: -14%;\"> {{weather.weather[0].main}}</p>\n  </md-card-content>\n</md-card> -->\n\n\n\n<!-- <div class=\"owl-carousel owl-theme\">\n  <div class=\"carouselCard\" *ngFor=\"let weather of weatherForecast\"><md-card-title style=\"color:limegreen\">\n  </md-card-title> \n  <md-card-content>\n    <p class=\"weatherText\" style=\"color:limegreen;text-align:left;margin-top:-18%\"> {{weather.dt_txt}}</p>\n   <p class=\"weatherText\" style=\"text-align:left\"> {{weather.main.temp}}°C</p><a><img style=\"    margin-top: -16%;\n    margin-left: 15%;\" src=\"http://openweathermap.org/img/w/{{weatherForecast[0].weather[0].icon}}.png\"></a>\n   <p class=\"weatherText\" style=\"    text-align: left;\n    margin-top: -11%;color:lightcoral;\n    margin-bottom: -14%;\"> {{weather.weather[0].main}}</p>\n  </md-card-content></div>\n \n</div> -->\n\n\n<!-- <md-grid-list cols=\"3\" rowHeight=\"3:1\" style=\"width:50%\">\n  <md-grid-tile>\n    \n  </md-grid-tile>\n  <md-grid-tile style=\"margin-left:-13%\">\n    \n  </md-grid-tile>\n <md-grid-tile>\n    </md-grid-tile>\n</md-grid-list> -->"

/***/ }),

/***/ "../../../../../src/app/weather/weather.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_weather_service__ = __webpack_require__("../../../../../src/app/services/weather.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_weather__ = __webpack_require__("../../../../../src/app/models/weather.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WeatherComponent = /** @class */ (function () {
    function WeatherComponent(_weatherService, _apiService) {
        this._weatherService = _weatherService;
        this._apiService = _apiService;
        this.weatherData = new __WEBPACK_IMPORTED_MODULE_3__models_weather__["a" /* WeatherModel */]();
        this.weatherForecast = [];
        this.options = [
            'Mumbai',
            'Delhi',
            'Greater Noida',
            'Hyderabad',
            'Mohali',
            'Kolkata'
        ];
        this.myControl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]();
    }
    WeatherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges
            .startWith(null)
            .map(function (val) { return val ? _this.filter(val) : _this.options.slice(); });
        this.fetchWeather();
        this._apiService.fetchWeather().subscribe(function (data) {
            _this.weatherData = data;
            for (var i = 0; i < 10; i++) {
                _this.weatherForecast.push(_this.weatherData.list[i]);
            }
            /*   $('.owl-carousel').owlCarousel({
                 items:this.weatherForecast.length,
                loop:true,
                margin:10,
                autoplay:true,
                autoplayTimeout:1000,
              
                }
              );
           */
        });
    };
    WeatherComponent.prototype.filter = function (val) {
        return this.options.filter(function (option) {
            return option.toLowerCase().indexOf(val.toLowerCase()) === 0;
        });
    };
    WeatherComponent.prototype.fetchWeather = function () {
        var _this = this;
        this.spinner = true;
        this._apiService.fetchWeatherNow('guntakal').subscribe(function (data) {
            _this.city1weatherDataNow = data;
            //console.log(this.city1weatherDataNow);
            _this.city1dataAvailable = true;
            _this.city1sunrise = _this.convertUtcToNormalTime(_this.city1weatherDataNow.sys.sunrise);
            _this.city1sunset = _this.convertUtcToNormalTime(_this.city1weatherDataNow.sys.sunset);
            _this.city1weatherIconUrl = 'http://openweathermap.org/img/w/' + _this.city1weatherDataNow.weather[0].icon + '.png';
            //console.log(this.city1weatherIconUrl);
        });
        this._apiService.fetchWeatherNow('chennai').subscribe(function (data) {
            _this.city2weatherDataNow = data;
            //console.log(this.city1weatherDataNow);
            _this.city2dataAvailable = true;
            _this.city2sunrise = _this.convertUtcToNormalTime(_this.city2weatherDataNow.sys.sunrise);
            _this.city2sunset = _this.convertUtcToNormalTime(_this.city2weatherDataNow.sys.sunset);
            _this.city2weatherIconUrl = 'http://openweathermap.org/img/w/' + _this.city2weatherDataNow.weather[0].icon + '.png';
            //console.log(this.city1weatherIconUrl);
            _this.spinner = false;
        });
    };
    WeatherComponent.prototype.fetchCity = function (city) {
        var _this = this;
        this._apiService.fetchWeatherNow(city).subscribe(function (data) {
            _this.city3weatherDataNow = data;
            _this.city3dataAvailable = true;
            _this.city3sunrise = _this.convertUtcToNormalTime(_this.city3weatherDataNow.sys.sunrise);
            _this.city3sunset = _this.convertUtcToNormalTime(_this.city3weatherDataNow.sys.sunset);
            _this.city3weatherIconUrl = 'http://openweathermap.org/img/w/' + _this.city3weatherDataNow.weather[0].icon + '.png';
        });
    };
    WeatherComponent.prototype.convertUtcToNormalTime = function (utcTime) {
        var date = new Date(utcTime * 1000);
        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();
        // Will display time in 10:30:23 format
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        return formattedTime;
    };
    WeatherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-weather',
            template: __webpack_require__("../../../../../src/app/weather/weather.component.html"),
            styles: [__webpack_require__("../../../../../src/app/weather/weather.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_weather_service__["a" /* WeatherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_weather_service__["a" /* WeatherService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _b || Object])
    ], WeatherComponent);
    return WeatherComponent;
    var _a, _b;
}());

//# sourceMappingURL=weather.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map