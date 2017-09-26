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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n \n <md-card id=\"timeCard\">\n  \n \n <md-card-content>\n    <a style=\"font-size:300%\"> {{myDate | date: 'mediumTime'}}   </a> <a>{{myDate | date: 'fullDate'}}</a><a style=\"float:right\"><img src=\"assets/home.png\" (click)=\"goToHome()\" height=\"50\" width=\"50\"></a>\n\n  </md-card-content>\n\n</md-card>\n\n\n\n<!-- <app-maps></app-maps> -->\n\n<!-- <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n</agm-map> -->\n<!-- <div id=\"myCards\" style=\"margin-top: 1%;\n    margin-bottom: 3%;\">\n   <div class=\"owl-carousel owl-theme\">\n  <div class=\"carouselCard\"> <md-card style=\"background-color:lavender\"> <md-card-content>hello1</md-card-content></md-card> </div>\n  <div class=\"carouselCard\"> <md-card style=\"background-color:lavender\"> <md-card-content>hello2</md-card-content></md-card> </div>\n  <div class=\"carouselCard\"> <md-card style=\"background-color:lavender\"> <md-card-content>hello3</md-card-content></md-card> </div>\n <div class=\"carouselCard\"> <md-card style=\"background-color:lavender\"> <md-card-content>hello4</md-card-content></md-card> </div>\n  <div class=\"carouselCard\"> <md-card style=\"background-color:lavender\"> <md-card-content>hello5</md-card-content></md-card> </div>\n <div class=\"carouselCard\"> <md-card style=\"background-color:lavender\"> <md-card-content>hello6</md-card-content></md-card> </div>\n  <div class=\"carouselCard\"> <md-card style=\"background-color:lavender\"> <md-card-content>hello7</md-card-content></md-card> </div>\n</div></div> -->\n<!-- <md-toolbar>\n  <span><a style=\"font-size:300%\"> {{myDate | date: 'mediumTime'}}   </a> <a>{{myDate | date: 'fullDate'}}</a></span>\n\n\n</md-toolbar> -->\n<!--  <app-maps></app-maps>  -->\n<!-- \n<md-tab-group style=\"overflow-y:scroll;height:600px\">\n  <md-tab label=\"Maps\"><app-weather></app-weather></md-tab>\n  <md-tab label=\"Weather\"><app-maps></app-maps></md-tab>\n  <md-tab label=\"Translate\"><app-translate></app-translate></md-tab>\n  <md-tab label=\"News\"><app-news></app-news></md-tab>\n</md-tab-group> -->\n\n\n<router-outlet></router-outlet>\n\n<!-- <a>News</a>\n<a routerLink=\"/maps\" >Maps</a>\n<router-outlet></router-outlet> -->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
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
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__weather_weather_component__ = __webpack_require__("../../../../../src/app/weather/weather.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_weather_service__ = __webpack_require__("../../../../../src/app/services/weather.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__translate_translate_component__ = __webpack_require__("../../../../../src/app/translate/translate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__news_news_component__ = __webpack_require__("../../../../../src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__maps_maps_component__ = __webpack_require__("../../../../../src/app/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__routing_module__ = __webpack_require__("../../../../../src/app/routing-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_page_home_page_component__ = __webpack_require__("../../../../../src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__forex_forex_component__ = __webpack_require__("../../../../../src/app/forex/forex.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__weather_weather_component__["a" /* WeatherComponent */],
            __WEBPACK_IMPORTED_MODULE_10__translate_translate_component__["a" /* TranslateComponent */],
            __WEBPACK_IMPORTED_MODULE_11__news_news_component__["a" /* NewsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__maps_maps_component__["a" /* MapsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__home_page_home_page_component__["a" /* HomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_16__forex_forex_component__["a" /* ForexComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_14__routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_13__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBR07XK6MULjzRSEwvrHiA2FZEnI8dtJAU'
            }), __WEBPACK_IMPORTED_MODULE_9__angular_material__["h" /* MdToolbarModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material__["g" /* MdTabsModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MaterialModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material__["f" /* MdSelectModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material__["e" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material__["d" /* MdGridListModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material__["c" /* MdCheckboxModule */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]],
        providers: [__WEBPACK_IMPORTED_MODULE_7__services_weather_service__["a" /* WeatherService */], __WEBPACK_IMPORTED_MODULE_8__services_api_service__["a" /* ApiService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/forex/forex.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.example-card{\r\n    width: 120px;\r\n    height: 50px;\r\n    background-color: aliceblue;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forex/forex.component.html":
/***/ (function(module, exports) {

module.exports = "<md-grid-list style=\"margin-top:1%\" cols=\"7\" rowHeight=\"2:1\">\n    <md-grid-tile  *ngFor=\"let item of currency\">\n      \n  <md-card class=\"example-card\">\n      <md-card-header>\n        <md-card-title>{{item.currencyKey}}</md-card-title>\n        <md-card-subtitle>{{item.currencyValue}}</md-card-subtitle>\n      </md-card-header>\n      <!-- <img md-card-image src=\"assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\"> -->\n      <md-card-content>\n        <p>\n        \n        </p>\n      </md-card-content>\n   \n    </md-card>\n\n    </md-grid-tile>\n   \n  </md-grid-list>\n\n\n\n"

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


var ForexComponent = (function () {
    function ForexComponent(_apiService) {
        this._apiService = _apiService;
        this.currencyKeys = [];
        this.currency = new Array();
        this.list = {
            "USD": {
                "symbol": "$",
                "name": "US Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "USD",
                "name_plural": "US dollars"
            },
            "EUR": {
                "symbol": "€",
                "name": "Euro",
                "symbol_native": "€",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "EUR",
                "name_plural": "euros"
            },
            "AED": {
                "symbol": "AED",
                "name": "United Arab Emirates Dirham",
                "symbol_native": "د.إ.‏",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "AED",
                "name_plural": "UAE dirhams"
            },
            "AFN": {
                "symbol": "Af",
                "name": "Afghan Afghani",
                "symbol_native": "؋",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "AFN",
                "name_plural": "Afghan Afghanis"
            },
            "ALL": {
                "symbol": "ALL",
                "name": "Albanian Lek",
                "symbol_native": "Lek",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "ALL",
                "name_plural": "Albanian lekë"
            },
            "AMD": {
                "symbol": "AMD",
                "name": "Armenian Dram",
                "symbol_native": "դր.",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "AMD",
                "name_plural": "Armenian drams"
            },
            "ARS": {
                "symbol": "AR$",
                "name": "Argentine Peso",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "ARS",
                "name_plural": "Argentine pesos"
            },
            "AZN": {
                "symbol": "man.",
                "name": "Azerbaijani Manat",
                "symbol_native": "ман.",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "AZN",
                "name_plural": "Azerbaijani manats"
            },
            "BAM": {
                "symbol": "KM",
                "name": "Bosnia-Herzegovina Convertible Mark",
                "symbol_native": "KM",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "BAM",
                "name_plural": "Bosnia-Herzegovina convertible marks"
            },
            "BDT": {
                "symbol": "Tk",
                "name": "Bangladeshi Taka",
                "symbol_native": "৳",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "BDT",
                "name_plural": "Bangladeshi takas"
            },
            "BHD": {
                "symbol": "BD",
                "name": "Bahraini Dinar",
                "symbol_native": "د.ب.‏",
                "decimal_digits": 3,
                "rounding": 0,
                "code": "BHD",
                "name_plural": "Bahraini dinars"
            },
            "BIF": {
                "symbol": "FBu",
                "name": "Burundian Franc",
                "symbol_native": "FBu",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "BIF",
                "name_plural": "Burundian francs"
            },
            "BND": {
                "symbol": "BN$",
                "name": "Brunei Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "BND",
                "name_plural": "Brunei dollars"
            },
            "BOB": {
                "symbol": "Bs",
                "name": "Bolivian Boliviano",
                "symbol_native": "Bs",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "BOB",
                "name_plural": "Bolivian bolivianos"
            },
            "BWP": {
                "symbol": "BWP",
                "name": "Botswanan Pula",
                "symbol_native": "P",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "BWP",
                "name_plural": "Botswanan pulas"
            },
            "BYR": {
                "symbol": "BYR",
                "name": "Belarusian Ruble",
                "symbol_native": "BYR",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "BYR",
                "name_plural": "Belarusian rubles"
            },
            "BZD": {
                "symbol": "BZ$",
                "name": "Belize Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "BZD",
                "name_plural": "Belize dollars"
            },
            "CDF": {
                "symbol": "CDF",
                "name": "Congolese Franc",
                "symbol_native": "FrCD",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "CDF",
                "name_plural": "Congolese francs"
            },
            "CLP": {
                "symbol": "CL$",
                "name": "Chilean Peso",
                "symbol_native": "$",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "CLP",
                "name_plural": "Chilean pesos"
            },
            "COP": {
                "symbol": "CO$",
                "name": "Colombian Peso",
                "symbol_native": "$",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "COP",
                "name_plural": "Colombian pesos"
            },
            "CRC": {
                "symbol": "₡",
                "name": "Costa Rican Colón",
                "symbol_native": "₡",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "CRC",
                "name_plural": "Costa Rican colóns"
            },
            "CVE": {
                "symbol": "CV$",
                "name": "Cape Verdean Escudo",
                "symbol_native": "CV$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "CVE",
                "name_plural": "Cape Verdean escudos"
            },
            "DJF": {
                "symbol": "Fdj",
                "name": "Djiboutian Franc",
                "symbol_native": "Fdj",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "DJF",
                "name_plural": "Djiboutian francs"
            },
            "DOP": {
                "symbol": "RD$",
                "name": "Dominican Peso",
                "symbol_native": "RD$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "DOP",
                "name_plural": "Dominican pesos"
            },
            "DZD": {
                "symbol": "DA",
                "name": "Algerian Dinar",
                "symbol_native": "د.ج.‏",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "DZD",
                "name_plural": "Algerian dinars"
            },
            "EEK": {
                "symbol": "Ekr",
                "name": "Estonian Kroon",
                "symbol_native": "kr",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "EEK",
                "name_plural": "Estonian kroons"
            },
            "EGP": {
                "symbol": "EGP",
                "name": "Egyptian Pound",
                "symbol_native": "ج.م.‏",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "EGP",
                "name_plural": "Egyptian pounds"
            },
            "ERN": {
                "symbol": "Nfk",
                "name": "Eritrean Nakfa",
                "symbol_native": "Nfk",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "ERN",
                "name_plural": "Eritrean nakfas"
            },
            "ETB": {
                "symbol": "Br",
                "name": "Ethiopian Birr",
                "symbol_native": "Br",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "ETB",
                "name_plural": "Ethiopian birrs"
            },
            "GEL": {
                "symbol": "GEL",
                "name": "Georgian Lari",
                "symbol_native": "GEL",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "GEL",
                "name_plural": "Georgian laris"
            },
            "GHS": {
                "symbol": "GH₵",
                "name": "Ghanaian Cedi",
                "symbol_native": "GH₵",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "GHS",
                "name_plural": "Ghanaian cedis"
            },
            "GNF": {
                "symbol": "FG",
                "name": "Guinean Franc",
                "symbol_native": "FG",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "GNF",
                "name_plural": "Guinean francs"
            },
            "GTQ": {
                "symbol": "GTQ",
                "name": "Guatemalan Quetzal",
                "symbol_native": "Q",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "GTQ",
                "name_plural": "Guatemalan quetzals"
            },
            "HNL": {
                "symbol": "HNL",
                "name": "Honduran Lempira",
                "symbol_native": "L",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "HNL",
                "name_plural": "Honduran lempiras"
            },
            "HRK": {
                "symbol": "kn",
                "name": "Croatian Kuna",
                "symbol_native": "kn",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "HRK",
                "name_plural": "Croatian kunas"
            },
            "HUF": {
                "symbol": "Ft",
                "name": "Hungarian Forint",
                "symbol_native": "Ft",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "HUF",
                "name_plural": "Hungarian forints"
            },
            "IDR": {
                "symbol": "Rp",
                "name": "Indonesian Rupiah",
                "symbol_native": "Rp",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "IDR",
                "name_plural": "Indonesian rupiahs"
            },
            "ILS": {
                "symbol": "₪",
                "name": "Israeli New Sheqel",
                "symbol_native": "₪",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "ILS",
                "name_plural": "Israeli new sheqels"
            },
            "INR": {
                "symbol": "Rs",
                "name": "Indian Rupee",
                "symbol_native": "টকা",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "INR",
                "name_plural": "Indian rupees"
            },
            "IQD": {
                "symbol": "IQD",
                "name": "Iraqi Dinar",
                "symbol_native": "د.ع.‏",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "IQD",
                "name_plural": "Iraqi dinars"
            },
            "IRR": {
                "symbol": "IRR",
                "name": "Iranian Rial",
                "symbol_native": "﷼",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "IRR",
                "name_plural": "Iranian rials"
            },
            "ISK": {
                "symbol": "Ikr",
                "name": "Icelandic Króna",
                "symbol_native": "kr",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "ISK",
                "name_plural": "Icelandic krónur"
            },
            "JMD": {
                "symbol": "J$",
                "name": "Jamaican Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "JMD",
                "name_plural": "Jamaican dollars"
            },
            "JOD": {
                "symbol": "JD",
                "name": "Jordanian Dinar",
                "symbol_native": "د.أ.‏",
                "decimal_digits": 3,
                "rounding": 0,
                "code": "JOD",
                "name_plural": "Jordanian dinars"
            },
            "JPY": {
                "symbol": "¥",
                "name": "Japanese Yen",
                "symbol_native": "￥",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "JPY",
                "name_plural": "Japanese yen"
            },
            "KES": {
                "symbol": "Ksh",
                "name": "Kenyan Shilling",
                "symbol_native": "Ksh",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "KES",
                "name_plural": "Kenyan shillings"
            },
            "KHR": {
                "symbol": "KHR",
                "name": "Cambodian Riel",
                "symbol_native": "៛",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "KHR",
                "name_plural": "Cambodian riels"
            },
            "KMF": {
                "symbol": "CF",
                "name": "Comorian Franc",
                "symbol_native": "FC",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "KMF",
                "name_plural": "Comorian francs"
            },
            "KRW": {
                "symbol": "₩",
                "name": "South Korean Won",
                "symbol_native": "₩",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "KRW",
                "name_plural": "South Korean won"
            },
            "KWD": {
                "symbol": "KD",
                "name": "Kuwaiti Dinar",
                "symbol_native": "د.ك.‏",
                "decimal_digits": 3,
                "rounding": 0,
                "code": "KWD",
                "name_plural": "Kuwaiti dinars"
            },
            "KZT": {
                "symbol": "KZT",
                "name": "Kazakhstani Tenge",
                "symbol_native": "тңг.",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "KZT",
                "name_plural": "Kazakhstani tenges"
            },
            "LBP": {
                "symbol": "LB£",
                "name": "Lebanese Pound",
                "symbol_native": "ل.ل.‏",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "LBP",
                "name_plural": "Lebanese pounds"
            },
            "LKR": {
                "symbol": "SLRs",
                "name": "Sri Lankan Rupee",
                "symbol_native": "SL Re",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "LKR",
                "name_plural": "Sri Lankan rupees"
            },
            "LTL": {
                "symbol": "Lt",
                "name": "Lithuanian Litas",
                "symbol_native": "Lt",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "LTL",
                "name_plural": "Lithuanian litai"
            },
            "LVL": {
                "symbol": "Ls",
                "name": "Latvian Lats",
                "symbol_native": "Ls",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "LVL",
                "name_plural": "Latvian lati"
            },
            "LYD": {
                "symbol": "LD",
                "name": "Libyan Dinar",
                "symbol_native": "د.ل.‏",
                "decimal_digits": 3,
                "rounding": 0,
                "code": "LYD",
                "name_plural": "Libyan dinars"
            },
            "MAD": {
                "symbol": "MAD",
                "name": "Moroccan Dirham",
                "symbol_native": "د.م.‏",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "MAD",
                "name_plural": "Moroccan dirhams"
            },
            "MDL": {
                "symbol": "MDL",
                "name": "Moldovan Leu",
                "symbol_native": "MDL",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "MDL",
                "name_plural": "Moldovan lei"
            },
            "MGA": {
                "symbol": "MGA",
                "name": "Malagasy Ariary",
                "symbol_native": "MGA",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "MGA",
                "name_plural": "Malagasy Ariaries"
            },
            "MKD": {
                "symbol": "MKD",
                "name": "Macedonian Denar",
                "symbol_native": "MKD",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "MKD",
                "name_plural": "Macedonian denari"
            },
            "MMK": {
                "symbol": "MMK",
                "name": "Myanma Kyat",
                "symbol_native": "K",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "MMK",
                "name_plural": "Myanma kyats"
            },
            "MOP": {
                "symbol": "MOP$",
                "name": "Macanese Pataca",
                "symbol_native": "MOP$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "MOP",
                "name_plural": "Macanese patacas"
            },
            "MUR": {
                "symbol": "MURs",
                "name": "Mauritian Rupee",
                "symbol_native": "MURs",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "MUR",
                "name_plural": "Mauritian rupees"
            },
            "MXN": {
                "symbol": "MX$",
                "name": "Mexican Peso",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "MXN",
                "name_plural": "Mexican pesos"
            },
            "MYR": {
                "symbol": "RM",
                "name": "Malaysian Ringgit",
                "symbol_native": "RM",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "MYR",
                "name_plural": "Malaysian ringgits"
            },
            "MZN": {
                "symbol": "MTn",
                "name": "Mozambican Metical",
                "symbol_native": "MTn",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "MZN",
                "name_plural": "Mozambican meticals"
            },
            "NAD": {
                "symbol": "N$",
                "name": "Namibian Dollar",
                "symbol_native": "N$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "NAD",
                "name_plural": "Namibian dollars"
            },
            "NGN": {
                "symbol": "₦",
                "name": "Nigerian Naira",
                "symbol_native": "₦",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "NGN",
                "name_plural": "Nigerian nairas"
            },
            "NIO": {
                "symbol": "C$",
                "name": "Nicaraguan Córdoba",
                "symbol_native": "C$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "NIO",
                "name_plural": "Nicaraguan córdobas"
            },
            "NOK": {
                "symbol": "Nkr",
                "name": "Norwegian Krone",
                "symbol_native": "kr",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "NOK",
                "name_plural": "Norwegian kroner"
            },
            "NPR": {
                "symbol": "NPRs",
                "name": "Nepalese Rupee",
                "symbol_native": "नेरू",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "NPR",
                "name_plural": "Nepalese rupees"
            },
            "NZD": {
                "symbol": "NZ$",
                "name": "New Zealand Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "NZD",
                "name_plural": "New Zealand dollars"
            },
            "OMR": {
                "symbol": "OMR",
                "name": "Omani Rial",
                "symbol_native": "ر.ع.‏",
                "decimal_digits": 3,
                "rounding": 0,
                "code": "OMR",
                "name_plural": "Omani rials"
            },
            "PAB": {
                "symbol": "B/.",
                "name": "Panamanian Balboa",
                "symbol_native": "B/.",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "PAB",
                "name_plural": "Panamanian balboas"
            },
            "PEN": {
                "symbol": "S/.",
                "name": "Peruvian Nuevo Sol",
                "symbol_native": "S/.",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "PEN",
                "name_plural": "Peruvian nuevos soles"
            },
            "PHP": {
                "symbol": "₱",
                "name": "Philippine Peso",
                "symbol_native": "₱",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "PHP",
                "name_plural": "Philippine pesos"
            },
            "PKR": {
                "symbol": "PKRs",
                "name": "Pakistani Rupee",
                "symbol_native": "₨",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "PKR",
                "name_plural": "Pakistani rupees"
            },
            "PLN": {
                "symbol": "zł",
                "name": "Polish Zloty",
                "symbol_native": "zł",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "PLN",
                "name_plural": "Polish zlotys"
            },
            "PYG": {
                "symbol": "₲",
                "name": "Paraguayan Guarani",
                "symbol_native": "₲",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "PYG",
                "name_plural": "Paraguayan guaranis"
            },
            "QAR": {
                "symbol": "QR",
                "name": "Qatari Rial",
                "symbol_native": "ر.ق.‏",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "QAR",
                "name_plural": "Qatari rials"
            },
            "RON": {
                "symbol": "RON",
                "name": "Romanian Leu",
                "symbol_native": "RON",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "RON",
                "name_plural": "Romanian lei"
            },
            "RSD": {
                "symbol": "din.",
                "name": "Serbian Dinar",
                "symbol_native": "дин.",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "RSD",
                "name_plural": "Serbian dinars"
            },
            "RUB": {
                "symbol": "RUB",
                "name": "Russian Ruble",
                "symbol_native": "руб.",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "RUB",
                "name_plural": "Russian rubles"
            },
            "RWF": {
                "symbol": "RWF",
                "name": "Rwandan Franc",
                "symbol_native": "FR",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "RWF",
                "name_plural": "Rwandan francs"
            },
            "SAR": {
                "symbol": "SR",
                "name": "Saudi Riyal",
                "symbol_native": "ر.س.‏",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "SAR",
                "name_plural": "Saudi riyals"
            },
            "SDG": {
                "symbol": "SDG",
                "name": "Sudanese Pound",
                "symbol_native": "SDG",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "SDG",
                "name_plural": "Sudanese pounds"
            },
            "SEK": {
                "symbol": "Skr",
                "name": "Swedish Krona",
                "symbol_native": "kr",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "SEK",
                "name_plural": "Swedish kronor"
            },
            "SGD": {
                "symbol": "S$",
                "name": "Singapore Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "SGD",
                "name_plural": "Singapore dollars"
            },
            "SOS": {
                "symbol": "Ssh",
                "name": "Somali Shilling",
                "symbol_native": "Ssh",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "SOS",
                "name_plural": "Somali shillings"
            },
            "SYP": {
                "symbol": "SY£",
                "name": "Syrian Pound",
                "symbol_native": "ل.س.‏",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "SYP",
                "name_plural": "Syrian pounds"
            },
            "THB": {
                "symbol": "฿",
                "name": "Thai Baht",
                "symbol_native": "฿",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "THB",
                "name_plural": "Thai baht"
            },
            "TND": {
                "symbol": "DT",
                "name": "Tunisian Dinar",
                "symbol_native": "د.ت.‏",
                "decimal_digits": 3,
                "rounding": 0,
                "code": "TND",
                "name_plural": "Tunisian dinars"
            },
            "TOP": {
                "symbol": "T$",
                "name": "Tongan Paʻanga",
                "symbol_native": "T$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "TOP",
                "name_plural": "Tongan paʻanga"
            },
            "TRY": {
                "symbol": "TL",
                "name": "Turkish Lira",
                "symbol_native": "TL",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "TRY",
                "name_plural": "Turkish Lira"
            },
            "TTD": {
                "symbol": "TT$",
                "name": "Trinidad and Tobago Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "TTD",
                "name_plural": "Trinidad and Tobago dollars"
            },
            "TWD": {
                "symbol": "NT$",
                "name": "New Taiwan Dollar",
                "symbol_native": "NT$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "TWD",
                "name_plural": "New Taiwan dollars"
            },
            "TZS": {
                "symbol": "TSh",
                "name": "Tanzanian Shilling",
                "symbol_native": "TSh",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "TZS",
                "name_plural": "Tanzanian shillings"
            },
            "UAH": {
                "symbol": "₴",
                "name": "Ukrainian Hryvnia",
                "symbol_native": "₴",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "UAH",
                "name_plural": "Ukrainian hryvnias"
            },
            "UGX": {
                "symbol": "USh",
                "name": "Ugandan Shilling",
                "symbol_native": "USh",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "UGX",
                "name_plural": "Ugandan shillings"
            },
            "UYU": {
                "symbol": "$U",
                "name": "Uruguayan Peso",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "UYU",
                "name_plural": "Uruguayan pesos"
            },
            "UZS": {
                "symbol": "UZS",
                "name": "Uzbekistan Som",
                "symbol_native": "UZS",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "UZS",
                "name_plural": "Uzbekistan som"
            },
            "VEF": {
                "symbol": "Bs.F.",
                "name": "Venezuelan Bolívar",
                "symbol_native": "Bs.F.",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "VEF",
                "name_plural": "Venezuelan bolívars"
            },
            "VND": {
                "symbol": "₫",
                "name": "Vietnamese Dong",
                "symbol_native": "₫",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "VND",
                "name_plural": "Vietnamese dong"
            },
            "XAF": {
                "symbol": "FCFA",
                "name": "CFA Franc BEAC",
                "symbol_native": "FCFA",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "XAF",
                "name_plural": "CFA francs BEAC"
            },
            "XOF": {
                "symbol": "CFA",
                "name": "CFA Franc BCEAO",
                "symbol_native": "CFA",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "XOF",
                "name_plural": "CFA francs BCEAO"
            },
            "YER": {
                "symbol": "YR",
                "name": "Yemeni Rial",
                "symbol_native": "ر.ي.‏",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "YER",
                "name_plural": "Yemeni rials"
            },
            "ZAR": {
                "symbol": "R",
                "name": "South African Rand",
                "symbol_native": "R",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "ZAR",
                "name_plural": "South African rand"
            },
            "ZMK": {
                "symbol": "ZK",
                "name": "Zambian Kwacha",
                "symbol_native": "ZK",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "ZMK",
                "name_plural": "Zambian kwachas"
            }
        };
        this.list1 = {
            "AUD": {
                "symbol": "AU$",
                "name": "Australian Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "AUD",
                "name_plural": "Australian dollars"
            }, "BGN": {
                "symbol": "BGN",
                "name": "Bulgarian Lev",
                "symbol_native": "лв.",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "BGN",
                "name_plural": "Bulgarian leva"
            }, "BRL": {
                "symbol": "R$",
                "name": "Brazilian Real",
                "symbol_native": "R$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "BRL",
                "name_plural": "Brazilian reals"
            }, "CAD": {
                "symbol": "CA$",
                "name": "Canadian Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "CAD",
                "name_plural": "Canadian dollars"
            }, "CHF": {
                "symbol": "CHF",
                "name": "Swiss Franc",
                "symbol_native": "CHF",
                "decimal_digits": 2,
                "rounding": 0.05,
                "code": "CHF",
                "name_plural": "Swiss francs"
            }, "CNY": {
                "symbol": "CN¥",
                "name": "Chinese Yuan",
                "symbol_native": "CN¥",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "CNY",
                "name_plural": "Chinese yuan"
            }, "DKK": {
                "symbol": "Dkr",
                "name": "Danish Krone",
                "symbol_native": "kr",
                "decimal_digits": 2,
                "rounding": 0,
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
                "name_plural": "British pounds sterling"
            }, "CZK": {
                "symbol": "Kč",
                "name": "Czech Republic Koruna",
                "symbol_native": "Kč",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "CZK",
                "name_plural": "Czech Republic korunas"
            }, "HKD": {
                "symbol": "HK$",
                "name": "Hong Kong Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "HKD",
                "name_plural": "Hong Kong dollars"
            }
        };
    }
    ForexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._apiService.fetchForex().subscribe(function (data) {
            //console.log(data);
            _this.rates = data.rates;
            // console.log(this.rates);
            _this.currencyKeys = Object.keys(_this.rates);
            //console.log(this.currencyKeys);
            for (var i = 0; i < _this.currencyKeys.length; i++) {
                var x = new Currency();
                x.currencyKey = _this.currencyKeys[i];
                x.currencyValue = Number((1 / _this.rates[_this.currencyKeys[i]]).toFixed(2));
                _this.currency.push(x);
            }
            // console.log(this.currency);
        });
        //console.log(this.list1);
    };
    return ForexComponent;
}());
ForexComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-forex',
        template: __webpack_require__("../../../../../src/app/forex/forex.component.html"),
        styles: [__webpack_require__("../../../../../src/app/forex/forex.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], ForexComponent);

var Currency = (function () {
    function Currency() {
    }
    return Currency;
}());
var _a;
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

module.exports = "<md-grid-list cols=\"5\" rowHeight=\"1:1\">\n  <md-grid-tile>\n    <md-card class=\"example-card\">\n    <img md-card-image src=\"assets/weather.jpg\" (click)=\"goToWeather()\" class=\"myCardImage\" alt=\"Weather\">\n    <md-card-actions>\n  <p style=\"    font-size: 179%;\n  margin-top: -10%;\n  text-align: center;\">Weather</p>\n    </md-card-actions>\n  </md-card>\n</md-grid-tile>\n  <md-grid-tile>\n      <md-card class=\"example-card\">\n          <img md-card-image src=\"assets/translate.png\" (click)=\"goToTranslate()\" class=\"myCardImage\" alt=\"Translate\">\n          <md-card-actions>\n        <p style=\"    font-size: 179%;\n        margin-top: -10%;\n        text-align: center;\">Translate</p>\n          </md-card-actions>\n        </md-card>\n  </md-grid-tile>\n  <md-grid-tile>\n      <md-card class=\"example-card\">\n          <img md-card-image src=\"assets/news4.png\" class=\"myCardImage\" (click)=\"goToNews()\" alt=\"News\">\n          <md-card-actions>\n        <p style=\"    font-size: 179%;\n        margin-top: -10%;\n        text-align: center;\">News</p>\n          </md-card-actions>\n        </md-card>\n  </md-grid-tile>\n  <md-grid-tile>\n      <md-card class=\"example-card\">\n          <img md-card-image src=\"assets/maps.png\" class=\"myCardImage\" (click)=\"goToMaps()\" alt=\"News\">\n          <md-card-actions>\n        <p style=\"    font-size: 179%;\n        margin-top: -10%;\n        text-align: center;\">Maps</p>\n          </md-card-actions>\n        </md-card>\n  </md-grid-tile>\n  <md-grid-tile>\n      <md-card class=\"example-card\">\n          <img md-card-image src=\"assets/money2.png\" class=\"myCardImage\" (click)=\"goToForex()\" alt=\"News\">\n          <md-card-actions>\n        <p style=\"    font-size: 179%;\n        margin-top: -10%;\n        text-align: center;\">Forex</p>\n          </md-card-actions>\n        </md-card>\n  </md-grid-tile>\n</md-grid-list>\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePageComponent = (function () {
    function HomePageComponent(router) {
        this.router = router;
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent.prototype.goToNews = function () {
        this.router.navigateByUrl('news');
    };
    HomePageComponent.prototype.goToMaps = function () {
        this.router.navigateByUrl('maps');
    };
    HomePageComponent.prototype.goToTranslate = function () {
        this.router.navigateByUrl('translate');
    };
    HomePageComponent.prototype.goToWeather = function () {
        this.router.navigateByUrl('weather');
    };
    HomePageComponent.prototype.goToForex = function () {
        this.router.navigateByUrl('forex');
    };
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home-page',
        template: __webpack_require__("../../../../../src/app/home-page/home-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home-page/home-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], HomePageComponent);

var _a;
//# sourceMappingURL=home-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/maps/maps.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\r\n  height: 300px;\r\n\r\n}\r\n\r\n.sebm-google-map-container{\r\n  height: 500px;\r\n  width:900px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/maps/maps.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  maps works!\n</p>\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n</agm-map>\n\n\n<!-- <sebm-google-map \n[latitude]=\"lat\"\n[longitude]=\"lng\"\n[zoom]=\"zoom\"\n[disableDefaultUI]=\"false\"\n[zoomControl]=\"false\"\n(mapClick)=\"mapClicked($event)\">\n\n<sebm-google-map-marker \n    *ngFor=\"let m of markers; let i = index\"\n    (markerClick)=\"clickedMarker(m.label, i)\"\n    [latitude]=\"m.lat\"\n    [longitude]=\"m.lng\"\n    [label]=\"m.label\"\n    [markerDraggable]=\"m.draggable\"\n    (dragEnd)=\"markerDragEnd(m, $event)\">\n    \n  <sebm-google-map-info-window>\n    <strong>InfoWindow content</strong>\n  </sebm-google-map-info-window>\n  \n</sebm-google-map-marker>\n\n<sebm-google-map-circle [latitude]=\"lat + 0.3\" [longitude]=\"lng\" \n    [radius]=\"5000\"\n    [fillColor]=\"'red'\"\n    [circleDraggable]=\"true\"\n    [editable]=\"true\">\n</sebm-google-map-circle>\n\n</sebm-google-map> -->"

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

var MapsComponent = (function () {
    function MapsComponent() {
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    MapsComponent.prototype.ngOnInit = function () {
    };
    return MapsComponent;
}());
MapsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-maps',
        template: __webpack_require__("../../../../../src/app/maps/maps.component.html"),
        styles: [__webpack_require__("../../../../../src/app/maps/maps.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MapsComponent);

//# sourceMappingURL=maps.component.js.map

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
var WeatherModel = (function () {
    function WeatherModel() {
        this.list = [];
    }
    return WeatherModel;
}());

var City = (function () {
    function City() {
    }
    return City;
}());

var Coord = (function () {
    function Coord() {
    }
    return Coord;
}());

var Weather = (function () {
    function Weather() {
    }
    return Weather;
}());

var MainTemp = (function () {
    function MainTemp() {
    }
    return MainTemp;
}());

var Clouds = (function () {
    function Clouds() {
    }
    return Clouds;
}());

var ListVariable = (function () {
    function ListVariable() {
    }
    return ListVariable;
}());

//# sourceMappingURL=weather.js.map

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

module.exports = "\n\n<md-tab-group>\n  <md-tab label=\"Times Of India\">\n<md-card *ngFor=\"let news of toiNews\" class=\"news-card\">\n  <md-card-header>\n    <md-card-title style=\"color:lightcoral\">{{news.title}}</md-card-title>\n    <md-card-subtitle></md-card-subtitle>\n  </md-card-header>\n  <img md-card-image src={{news.urlToImage}}  >\n  <md-card-content>\n    <p>\n     {{news.description}}\n    </p>\n  </md-card-content>\n  <md-card-actions>\n  <a href={{news.url}} md-raised-button color=\"primary\" >Visit</a>&nbsp;&nbsp;&nbsp;&nbsp; <a>{{news.publishedAt}}</a>\n  </md-card-actions>\n</md-card>\n  </md-tab>\n  <md-tab label=\"The Hindu\">\n<md-card *ngFor=\"let news of hinduNews\" class=\"news-card\">\n  <md-card-header>\n    <md-card-title style=\"color:lightcoral\">{{news.title}}</md-card-title>\n    <md-card-subtitle></md-card-subtitle>\n  </md-card-header>\n  <img md-card-image src={{news.urlToImage}}  >\n  <md-card-content>\n    <p>\n     {{news.description}}\n    </p>\n  </md-card-content>\n  <md-card-actions>\n  <a href={{news.url}} target=\"_blank\"  md-raised-button color=\"primary\" >Visit</a>&nbsp;&nbsp;&nbsp;&nbsp; <a>{{news.publishedAt}}</a>\n  </md-card-actions>\n</md-card>\n\n  </md-tab>\n<md-tab label=\"Tech Radar\">\n\n  <md-card *ngFor=\"let news of techRadar\" class=\"news-card\">\n  <md-card-header>\n    <md-card-title style=\"color:lightcoral\">{{news.title}}</md-card-title>\n    <md-card-subtitle></md-card-subtitle>\n  </md-card-header>\n  <img md-card-image src={{news.urlToImage}}  >\n  <md-card-content>\n    <p>\n     {{news.description}}\n    </p>\n  </md-card-content>\n  <md-card-actions>\n  <a href={{news.url}} md-raised-button color=\"primary\" >Visit</a>&nbsp;&nbsp;&nbsp;&nbsp; <a>{{news.publishedAt}}</a>\n  </md-card-actions>\n</md-card>\n</md-tab>\n<md-tab label=\"Sport Bible\">\n\n  <md-card *ngFor=\"let news of sportBible\" class=\"news-card\">\n  <md-card-header>\n    <md-card-title style=\"color:lightcoral\">{{news.title}}</md-card-title>\n    <md-card-subtitle></md-card-subtitle>\n  </md-card-header>\n  <img md-card-image src={{news.urlToImage}}  >\n  <md-card-content>\n    <p>\n     {{news.description}}\n    </p>\n  </md-card-content>\n  <md-card-actions>\n  <a href={{news.url}} md-raised-button color=\"primary\" >Visit</a>&nbsp;&nbsp;&nbsp;&nbsp; <a>{{news.publishedAt}}</a>\n  </md-card-actions>\n</md-card>\n</md-tab>\n\n<md-tab label=\"The Verge\">\n  <md-card *ngFor=\"let news of theVerge\" class=\"news-card\">\n  <md-card-header>\n    <md-card-title style=\"color:lightcoral\">{{news.title}}</md-card-title>\n    <md-card-subtitle></md-card-subtitle>\n  </md-card-header>\n  <img md-card-image src={{news.urlToImage}}  >\n  <md-card-content>\n    <p>\n     {{news.description}}\n    </p>\n  </md-card-content>\n  <md-card-actions>\n  <a href={{news.url}} md-raised-button color=\"primary\" >Visit</a>&nbsp;&nbsp;&nbsp;&nbsp; <a>{{news.publishedAt}}</a>\n  </md-card-actions>\n</md-card>\n</md-tab>\n<md-tab label=\"New Scientist\">\n  <md-card *ngFor=\"let news of theNextWeb\" class=\"news-card\">\n  <md-card-header>\n    <md-card-title style=\"color:lightcoral\">{{news.title}}</md-card-title>\n    <md-card-subtitle></md-card-subtitle>\n  </md-card-header>\n  <img md-card-image src={{news.urlToImage}}  >\n  <md-card-content>\n    <p>\n     {{news.description}}\n    </p>\n  </md-card-content>\n  <md-card-actions>\n  <a href={{news.url}} md-raised-button color=\"primary\" >Visit</a>&nbsp;&nbsp;&nbsp;&nbsp; <a>{{news.publishedAt}}</a>\n  </md-card-actions>\n</md-card>\n</md-tab>\n</md-tab-group>"

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


var NewsComponent = (function () {
    function NewsComponent(_apiService) {
        this._apiService = _apiService;
        this.toiNews = [];
        this.hinduNews = [];
        this.techRadar = [];
        this.sportBible = [];
        this.theVerge = [];
        this.theNextWeb = [];
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        this._apiService.fetchNews('the-sport-bible').subscribe(function (data) {
            _this.sportBible = data.articles;
            for (var i = 0; i < _this.sportBible.length; i++) {
                _this.sportBible[i].publishedAt = new Date(_this.sportBible[i].publishedAt).toLocaleString('en-CA', { hour12: true });
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
    };
    return NewsComponent;
}());
NewsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-news',
        template: __webpack_require__("../../../../../src/app/news/news.component.html"),
        styles: [__webpack_require__("../../../../../src/app/news/news.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], NewsComponent);

var _a;
//# sourceMappingURL=news.component.js.map

/***/ }),

/***/ "../../../../../src/app/routing-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__weather_weather_component__ = __webpack_require__("../../../../../src/app/weather/weather.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__news_news_component__ = __webpack_require__("../../../../../src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__maps_maps_component__ = __webpack_require__("../../../../../src/app/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__translate_translate_component__ = __webpack_require__("../../../../../src/app/translate/translate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_page_home_page_component__ = __webpack_require__("../../../../../src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forex_forex_component__ = __webpack_require__("../../../../../src/app/forex/forex.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: 'weather', component: __WEBPACK_IMPORTED_MODULE_2__weather_weather_component__["a" /* WeatherComponent */] },
    { path: 'news', component: __WEBPACK_IMPORTED_MODULE_3__news_news_component__["a" /* NewsComponent */] },
    { path: 'maps', component: __WEBPACK_IMPORTED_MODULE_4__maps_maps_component__["a" /* MapsComponent */] },
    { path: 'translate', component: __WEBPACK_IMPORTED_MODULE_5__translate_translate_component__["a" /* TranslateComponent */] },
    { path: 'forex', component: __WEBPACK_IMPORTED_MODULE_7__forex_forex_component__["a" /* ForexComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

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



var ApiService = (function () {
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
    ApiService.prototype.translateText = function (targetLanguage, queryWord) {
        return this.http.get('https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=' + targetLanguage + '&dt=t&q=' + queryWord).map(function (res) { return res.json(); });
    };
    ApiService.prototype.fetchForex = function () {
        return this.http.get('http://api.fixer.io/latest?base=INR').map(function (res) { return res.json(); });
    };
    return ApiService;
}());
ApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=api.service.js.map

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



var WeatherService = (function () {
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
    return WeatherService;
}());
WeatherService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WeatherService);

var _a;
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

module.exports = "<p>\n  translate works!\n</p>\n<md-card >\n   <md-card-title style=\"color:limegreen\">\n\n  </md-card-title> \n  <md-card-content>\n <md-select placeholder=\"Target Lang.,\" (change)=\"selectLanguage($event)\" name=\"language\" >\n    <md-option *ngFor=\"let lang of languages\" [value]=\"lang.code\">\n      {{lang.value}}\n    </md-option>\n  </md-select>\n\n   <md-form-field class=\"example-full-width\">\n    <input mdInput placeholder=\"Query...\"  [(ngModel)]=\"queryWord\">\n  </md-form-field>\n\n  <button md-raised-button color=\"primary\" (click)=\"translate()\">Translate</button>\n\n  {{queryResult}}\n  </md-card-content>\n</md-card>"

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


var TranslateComponent = (function () {
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
    return TranslateComponent;
}());
TranslateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-translate',
        template: __webpack_require__("../../../../../src/app/translate/translate.component.html"),
        styles: [__webpack_require__("../../../../../src/app/translate/translate.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], TranslateComponent);

var _a;
//# sourceMappingURL=translate.component.js.map

/***/ }),

/***/ "../../../../../src/app/weather/weather.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#weatherCard{\r\n    width:15%;\r\n}\r\n\r\n\r\n.weatherText{\r\n    margin-bottom: -10px;\r\n}\r\n\r\n/* md-grid-tile {\r\n  background: lightblue;\r\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/weather/weather.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Today's Weather\n</p>\n<!-- <img src=\"http://openweathermap.org/img/w/01n.png\"> -->\n\n<!-- <div *ngIf=\"dataAvailable\"><p>Temperature: &nbsp;{{weatherData.list[0].main.temp}}</p>\n<p>Humidity: &nbsp;{{weatherData.list[0].main.humidity}} %</p> </div> -->\n\n\n\n\n<md-card id=\"weatherCard\"  *ngIf=\"city1dataAvailable\"  >\n   <md-card-title style=\"color:limegreen;text-align:left\">{{city1weatherDataNow.name}} <a><img src={{city1weatherIconUrl}} height=\"62\" width=\"62\" style=\"    margin-left: 2%;\n    margin-top: -17%;\n    margin-bottom: -11%;\"></a></md-card-title> \n  <md-card-content>\n   <div style=\"text-align:left\">\n    <p class=\"weatherText\">Temperature:&nbsp;{{city1weatherDataNow.main.temp}}°C </p>\n    <p class=\"weatherText\">Min:&nbsp;{{city1weatherDataNow.main.temp_min}}°C &nbsp;&nbsp;&nbsp; Max:&nbsp;{{city1weatherDataNow.main.temp_max}}°C</p>\n    <span><p class=\"weatherText\">Condition:&nbsp;{{city1weatherDataNow.weather[0].main}}</p></span>\n    <p class=\"weatherText\"><img src=\"/assets/sunrise.png\" style=\"margin-bottom:-2%\" height=\"32\" width=\"32\">&nbsp;{{city1sunrise}}      <img src=\"/assets/sunset.png\" style=\"margin-bottom:-2%\" height=\"32\" width=\"32\">&nbsp;{{city1sunset}}</p>\n   </div>\n  </md-card-content>\n</md-card>\n  \n<md-card id=\"weatherCard\"  *ngIf=\"city2dataAvailable\"  >\n   <md-card-title style=\"color:limegreen;text-align:left\">{{city2weatherDataNow.name}} <a><img src={{city2weatherIconUrl}} height=\"62\" width=\"62\" style=\"    margin-left: 2%;\n    margin-top: -17%;\n    margin-bottom: -11%;\"></a></md-card-title> \n  <md-card-content>\n   <div style=\"text-align:left\">\n    <p class=\"weatherText\">Temperature:&nbsp;{{city2weatherDataNow.main.temp}}°C </p>\n    <p class=\"weatherText\">Min:&nbsp;{{city2weatherDataNow.main.temp_min}}°C &nbsp;&nbsp;&nbsp; Max:&nbsp;{{city2weatherDataNow.main.temp_max}}°C</p>\n    <span><p class=\"weatherText\">Condition:&nbsp;{{city2weatherDataNow.weather[0].main}}</p></span>\n    <p class=\"weatherText\"><img src=\"/assets/sunrise.png\" style=\"margin-bottom:-2%\" height=\"32\" width=\"32\">&nbsp;{{city2sunrise}}      <img src=\"/assets/sunset.png\" style=\"margin-bottom:-2%\" height=\"32\" width=\"32\">&nbsp;{{city2sunset}}</p>\n   </div>\n  </md-card-content>\n</md-card>\n\n\n<md-card  style=\"width:10%;margin-top:1%\" *ngFor=\"let weather of weatherForecast\">\n   <md-card-title style=\"color:limegreen\">\n  </md-card-title> \n  <md-card-content>\n    <p class=\"weatherText\" style=\"color:limegreen;text-align:left;margin-top:-18%\"> {{weather.dt_txt}}</p>\n   <p class=\"weatherText\" style=\"text-align:left\"> {{weather.main.temp}}°C</p><a><img style=\"    margin-top: -16%;\n    margin-left: 15%;\" src=\"http://openweathermap.org/img/w/{{weatherForecast[0].weather[0].icon}}.png\"></a>\n   <p class=\"weatherText\" style=\"    text-align: left;\n    margin-top: -11%;color:lightcoral;\n    margin-bottom: -14%;\"> {{weather.weather[0].main}}</p>\n  </md-card-content>\n</md-card>\n\n<!-- <md-grid-list cols=\"3\" rowHeight=\"3:1\" style=\"width:50%\">\n  <md-grid-tile>\n    \n  </md-grid-tile>\n  <md-grid-tile style=\"margin-left:-13%\">\n    \n  </md-grid-tile>\n <md-grid-tile>\n    </md-grid-tile>\n</md-grid-list> -->"

/***/ }),

/***/ "../../../../../src/app/weather/weather.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_weather_service__ = __webpack_require__("../../../../../src/app/services/weather.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_weather__ = __webpack_require__("../../../../../src/app/models/weather.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WeatherComponent = (function () {
    function WeatherComponent(_weatherService, _apiService) {
        this._weatherService = _weatherService;
        this._apiService = _apiService;
        this.weatherData = new __WEBPACK_IMPORTED_MODULE_3__models_weather__["a" /* WeatherModel */]();
        this.weatherForecast = [];
    }
    WeatherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchWeather();
        this._apiService.fetchWeather().subscribe(function (data) {
            _this.weatherData = data;
            for (var i = 0; i < 10; i++) {
                _this.weatherForecast.push(_this.weatherData.list[i]);
            }
        });
    };
    WeatherComponent.prototype.fetchWeather = function () {
        var _this = this;
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
    return WeatherComponent;
}());
WeatherComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-weather',
        template: __webpack_require__("../../../../../src/app/weather/weather.component.html"),
        styles: [__webpack_require__("../../../../../src/app/weather/weather.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_weather_service__["a" /* WeatherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_weather_service__["a" /* WeatherService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _b || Object])
], WeatherComponent);

var _a, _b;
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
// The file contents for the current environment will overwrite these during build.
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
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