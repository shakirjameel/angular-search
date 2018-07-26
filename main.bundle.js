webpackJsonp([1,5],{

/***/ 1130:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(537);


/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateCartServiceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UpdateCartServiceService = (function () {
    function UpdateCartServiceService() {
        this.messageSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]([0, 0]);
        this.currentMessage = this.messageSource.asObservable();
    }
    UpdateCartServiceService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    UpdateCartServiceService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], UpdateCartServiceService);
    return UpdateCartServiceService;
}());
//# sourceMappingURL=D:/Users/sjameel/WebstormProjects/angular-search/src/update-cart-service.service.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchResultService = (function () {
    function SearchResultService(_http) {
        this._http = _http;
        this.baseUrl = 'http://10.242.232.140:5000';
    }
    SearchResultService.prototype.searchResult = function (queryList) {
        console.log("Search Result Service");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var data_result_payload = { "datasource_concept_list": queryList };
        var response = this._http
            .post("http://10.242.232.140:8093/get_data", data_result_payload, { headers: headers })
            .map(function (res) { return res.json(); });
        return response;
    };
    SearchResultService.prototype.getDescription = function (data_list, description_type) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var description_payload = { "subject_list": data_list, "description_type": description_type, "graph": "</PD_graph>" };
        var response = this._http
            .post(this.baseUrl + "/get_description", description_payload, { headers: headers })
            .map(function (res) { return res.json(); });
        return response;
    };
    SearchResultService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], SearchResultService);
    return SearchResultService;
    var _a;
}());
//# sourceMappingURL=D:/Users/sjameel/WebstormProjects/angular-search/src/search-result.service.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvisionToolService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProvisionToolService = (function () {
    function ProvisionToolService(_http) {
        this._http = _http;
        this.baseUrl = 'http://10.204.40.192:8090';
    }
    ProvisionToolService.prototype.createExternalTableDB = function (table_name) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        console.log("Create External Table on DB accessed");
        headers.append('Content-Type', 'application/json');
        var suggestion_api_payload = { 'tablename': table_name };
        console.log(suggestion_api_payload);
        var response = this._http
            .post(this.baseUrl + "/create_table", suggestion_api_payload, { headers: headers })
            .map(function (res) { return res.json(); });
        console.log(response);
        return response;
    };
    ProvisionToolService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], ProvisionToolService);
    return ProvisionToolService;
    var _a;
}());
//# sourceMappingURL=D:/Users/sjameel/WebstormProjects/angular-search/src/provision-tool.service.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescriptionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DescriptionService = (function () {
    function DescriptionService(_http) {
        this._http = _http;
        this.baseUrl = 'http://10.242.232.140:5000';
    }
    DescriptionService.prototype.getRelatedDatasets = function (fact_table) {
        console.log("Related Data sets service accessed!");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var related_datasets_api_payload = { "fact_name_uri": fact_table, "graph": "</PD_graph>" };
        console.log(related_datasets_api_payload);
        var response = this._http
            .post(this.baseUrl + "/related", related_datasets_api_payload, { headers: headers })
            .map(function (res) { return res.json(); });
        return response;
    };
    DescriptionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], DescriptionService);
    return DescriptionService;
    var _a;
}());
//# sourceMappingURL=D:/Users/sjameel/WebstormProjects/angular-search/src/description.service.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HierarchyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HierarchyService = (function () {
    function HierarchyService(_http) {
        this._http = _http;
        this.baseUrl = 'http://10.242.232.140:5000';
    }
    HierarchyService.prototype.fetchHierarchy = function (interest) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var suggestion_api_payload = { 'interest': interest.trim() };
        console.log(suggestion_api_payload);
        var response = this._http
            .post(this.baseUrl + "/get_hierarchy", suggestion_api_payload, { headers: headers })
            .map(function (res) { return res.json(); });
        return response;
    };
    HierarchyService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], HierarchyService);
    return HierarchyService;
    var _a;
}());
//# sourceMappingURL=D:/Users/sjameel/WebstormProjects/angular-search/src/hierarchy.service.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchService = (function () {
    function SearchService(_http) {
        this._http = _http;
        this.baseUrl = 'http://10.242.232.140:5000';
    }
    SearchService.prototype.search = function (queryString) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var suggestion_api_payload = { "input_characters": queryString };
        var response = this._http
            .post(this.baseUrl + "/get_suggestion", suggestion_api_payload, { headers: headers })
            .map(function (res) { return res.json(); });
        return response;
    };
    SearchService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], SearchService);
    return SearchService;
    var _a;
}());
//# sourceMappingURL=D:/Users/sjameel/WebstormProjects/angular-search/src/search.service.js.map

/***/ }),

/***/ 536:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 536;


/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(658);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/Users/sjameel/WebstormProjects/angular-search/src/main.js.map

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(840),
            styles: [__webpack_require__(834)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/Users/sjameel/WebstormProjects/angular-search/src/app.component.js.map

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_opd_popup__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search_component__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search_service__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_result_search_result_service__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__description_description_service__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_result_hierarchy_service__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__checkout_provision_tool_service__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__navbar_update_cart_service_service__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__search_result_search_result_component__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_router__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_expandable_list__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__description_description_component__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__navbar_navbar_component__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__checkout_checkout_component__ = __webpack_require__(659);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__search_search_component__["a" /* SearchComponent */] },
    { path: 'search-result', component: __WEBPACK_IMPORTED_MODULE_13__search_result_search_result_component__["a" /* SearchResultComponent */] },
    { path: 'description', component: __WEBPACK_IMPORTED_MODULE_16__description_description_component__["a" /* DescriptionComponent */] },
    { path: 'checkout', component: __WEBPACK_IMPORTED_MODULE_18__checkout_checkout_component__["a" /* CheckoutComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_13__search_result_search_result_component__["a" /* SearchResultComponent */],
                __WEBPACK_IMPORTED_MODULE_16__description_description_component__["a" /* DescriptionComponent */],
                __WEBPACK_IMPORTED_MODULE_17__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_18__checkout_checkout_component__["a" /* CheckoutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_15_angular2_expandable_list__["a" /* ExpandableListModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_4_ng2_opd_popup__["a" /* PopupModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__search_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_8__search_result_search_result_service__["a" /* SearchResultService */], __WEBPACK_IMPORTED_MODULE_9__description_description_service__["a" /* DescriptionService */], __WEBPACK_IMPORTED_MODULE_10__search_result_hierarchy_service__["a" /* HierarchyService */], __WEBPACK_IMPORTED_MODULE_11__checkout_provision_tool_service__["a" /* ProvisionToolService */], __WEBPACK_IMPORTED_MODULE_12__navbar_update_cart_service_service__["a" /* UpdateCartServiceService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/Users/sjameel/WebstormProjects/angular-search/src/app.module.js.map

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_opd_popup__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provision_tool_service__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_update_cart_service_service__ = __webpack_require__(179);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CheckoutComponent = (function () {
    function CheckoutComponent(popup, cart_service, _api_service, activated_route) {
        this.popup = popup;
        this.cart_service = cart_service;
        this._api_service = _api_service;
        this.activated_route = activated_route;
        this.dataset_list = [];
        this.dataset_count = 0;
        this.cart_content = [];
        this.start_provisioning = false;
        this.radio_button_selection = false;
        this.deletion_after_provision = [];
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        this.ui_alert_box = false;
        this.provisioning_data = false;
        this.provisioned_success = false;
        this.radio_button_selection = false;
        this.dataset_list = JSON.parse(this.activated_route.snapshot.queryParams["cart_content"])[0];
        this.dataset_count = JSON.parse(this.activated_route.snapshot.queryParams["cart_content"])[1];
        //this.dataset_count = cart_content[1];
        console.log(this.dataset_list);
    };
    CheckoutComponent.prototype.close_alert_box = function () {
        this.ui_alert_box = false;
    };
    CheckoutComponent.prototype.toolSelected = function (tool_name) {
        this.popup.options = {
            header: "Provisioning on Databricks",
            widthProsentage: 80,
            animationDuration: 1,
            showButtons: true,
            confirmBtnContent: "Confirm",
            cancleBtnContent: "Cancel",
            confirmBtnClass: "btn btn-default",
            cancleBtnClass: "btn btn-default",
            animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
        };
        if (tool_name === 'Databricks') {
            this.popup.show();
        }
        else {
            console.log("Add some flash message here!");
            this.ui_alert_box = true;
        }
    };
    CheckoutComponent.prototype.provisionData = function () {
        var _this = this;
        console.log(this.external_table_name);
        this.popup.hide();
        this.provisioning_data = true;
        this._api_service.createExternalTableDB(this.external_table_name).subscribe(function (result) {
            console.log("Result from DB service");
            console.log(result);
            if (result.status === 'success') {
                _this.provisioning_data = false;
                _this.remove_from_list(_this.deletion_after_provision);
                _this.provisioned_success = true;
            }
        });
    };
    CheckoutComponent.prototype.remove_from_list = function (dataset) {
        this.dataset_list.splice(this.dataset_list.indexOf(dataset), 1);
        console.log(this.dataset_list);
        this.dataset_count -= 1;
        this.cart_service.changeMessage([this.dataset_list, this.dataset_count]);
    };
    CheckoutComponent.prototype.successAlertClose = function () {
        this.provisioned_success = true;
    };
    CheckoutComponent.prototype.radioButtonClicked = function (dataset) {
        this.radio_button_selection = true;
        this.deletion_after_provision = dataset;
    };
    CheckoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: 'app-checkout',
            template: __webpack_require__(841),
            styles: [__webpack_require__(835)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_opd_popup__["b" /* Popup */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_opd_popup__["b" /* Popup */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__navbar_update_cart_service_service__["a" /* UpdateCartServiceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__navbar_update_cart_service_service__["a" /* UpdateCartServiceService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__provision_tool_service__["a" /* ProvisionToolService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__provision_tool_service__["a" /* ProvisionToolService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === 'function' && _d) || Object])
    ], CheckoutComponent);
    return CheckoutComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/Users/sjameel/WebstormProjects/angular-search/src/checkout.component.js.map

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__description_service__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_result_search_result_service__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_update_cart_service_service__ = __webpack_require__(179);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescriptionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DescriptionComponent = (function () {
    function DescriptionComponent(_api_service, _get_description, activateRoute, cart_service) {
        this._api_service = _api_service;
        this._get_description = _get_description;
        this.activateRoute = activateRoute;
        this.cart_service = cart_service;
        this.tab_active = false;
        this.description_flag = "active";
        this.schema_flag = "";
        this.related_datasets_response = [];
        this.next_realted_dataset = 0;
        this.ui_alert_box = false;
        this.dataset_list = [];
        this.dataset_count = 0;
        this.cart_content = [];
    }
    DescriptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataset = { name: "SRC_HLEE", short_description: "TEST 1", long_description: "TEST 2" };
        this.dataset_count = 0;
        this.ui_alert_box = false;
        this.cart_service.currentMessage.subscribe(function (message) { return _this.cart_content = message; });
        this.next_realted_dataset = 0;
        this.tab_active = false;
        var selected_data_uri = this.activateRoute.snapshot.queryParams['selected_data_uri'];
        var selected_data_name = this.activateRoute.snapshot.queryParams['selected_data_name'];
        var short_description = this.activateRoute.snapshot.queryParams['short_description'];
        console.log("The related data sets corresponding to the data selected -");
        console.log(selected_data_uri);
        this.data_name = selected_data_name;
        this._get_description.getDescription([selected_data_uri], "long").subscribe(function (description) {
            console.log(description.result);
            _this.long_description = description.result[selected_data_uri];
        });
        this._api_service.getRelatedDatasets(selected_data_uri).subscribe(function (result) {
            console.log(result.result);
            for (var each_result in result.result) {
                _this.related_datasets_response.push([result.result[each_result]["data_name"]["value"], result.result[each_result]["data_uri"]["value"], result.result[each_result]["description"]["value"]]);
            }
            _this.current_data_name = _this.related_datasets_response[_this.next_realted_dataset][0];
            _this.current_data_uri = _this.related_datasets_response[_this.next_realted_dataset][1];
            _this.current_data_description = _this.related_datasets_response[_this.next_realted_dataset][2];
            console.log("Realted Dataset response");
            console.log(_this.related_datasets_response[0]);
            console.log(_this.related_datasets_response);
        });
    };
    DescriptionComponent.prototype.add_to_cart = function (data_name, long_description, short_description) {
        this.ui_alert_box = true;
        this.dataset.name = data_name;
        this.dataset.long_description = long_description;
        this.dataset.short_description = short_description;
        this.dataset_list.push(this.dataset);
        this.dataset_count += 1;
        this.cart_content = [this.dataset_list, this.dataset_count];
        this.cart_service.changeMessage(this.cart_content);
    };
    DescriptionComponent.prototype.close_alert_box = function () {
        this.ui_alert_box = false;
    };
    DescriptionComponent.prototype.incrementNextRealatedDataset = function () {
        if (this.next_realted_dataset >= this.related_datasets_response.length - 1) {
            this.next_realted_dataset = 0;
            this.current_data_name = this.related_datasets_response[this.next_realted_dataset][0];
            this.current_data_uri = this.related_datasets_response[this.next_realted_dataset][1];
            this.current_data_description = this.related_datasets_response[this.next_realted_dataset][2];
        }
        else {
            this.next_realted_dataset = this.next_realted_dataset + 1;
            this.current_data_name = this.related_datasets_response[this.next_realted_dataset][0];
            this.current_data_uri = this.related_datasets_response[this.next_realted_dataset][1];
            this.current_data_description = this.related_datasets_response[this.next_realted_dataset][2];
        }
        return this.next_realted_dataset;
    };
    DescriptionComponent.prototype.decrementNextRelatedDataset = function () {
        if (this.next_realted_dataset <= 0) {
            this.next_realted_dataset = this.related_datasets_response.length - 1;
            this.current_data_name = this.related_datasets_response[this.next_realted_dataset][0];
            this.current_data_uri = this.related_datasets_response[this.next_realted_dataset][1];
            this.current_data_description = this.related_datasets_response[this.next_realted_dataset][2];
        }
        else {
            this.next_realted_dataset = this.next_realted_dataset - 1;
            this.current_data_name = this.related_datasets_response[this.next_realted_dataset][0];
            this.current_data_uri = this.related_datasets_response[this.next_realted_dataset][1];
            this.current_data_description = this.related_datasets_response[this.next_realted_dataset][2];
        }
        return this.next_realted_dataset;
    };
    DescriptionComponent.prototype.toggleActiveFlag = function (button_clicked) {
        if (button_clicked === 'Description') {
            this.description_flag = "active";
            this.schema_flag = "";
        }
        else if (button_clicked === 'Schema and Data Preview') {
            this.schema_flag = "active";
            this.description_flag = "";
        }
    };
    DescriptionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: 'app-description',
            template: __webpack_require__(842),
            styles: [__webpack_require__(836)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__description_service__["a" /* DescriptionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__description_service__["a" /* DescriptionService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__search_result_search_result_service__["a" /* SearchResultService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__search_result_search_result_service__["a" /* SearchResultService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__navbar_update_cart_service_service__["a" /* UpdateCartServiceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__navbar_update_cart_service_service__["a" /* UpdateCartServiceService */]) === 'function' && _d) || Object])
    ], DescriptionComponent);
    return DescriptionComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/Users/sjameel/WebstormProjects/angular-search/src/description.component.js.map

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__update_cart_service_service__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(cart_service, router) {
        this.cart_service = cart_service;
        this.router = router;
        this.badge_show = false;
        this.cart_content = [];
        this.cart_count = 0;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cart_service.currentMessage.subscribe(function (message) { return _this.cart_content = message; });
    };
    NavbarComponent.prototype.show_badge = function () {
        alert("badge");
        this.badge_show = true;
    };
    NavbarComponent.prototype.update_cart_counter = function () {
    };
    NavbarComponent.prototype.checkout = function () {
        console.log(this.cart_content);
        this.router.navigate(['/checkout'], { queryParams: { "cart_content": JSON.stringify(this.cart_content) } });
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__(843),
            styles: [__webpack_require__(837)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__update_cart_service_service__["a" /* UpdateCartServiceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__update_cart_service_service__["a" /* UpdateCartServiceService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Users/sjameel/WebstormProjects/angular-search/src/navbar.component.js.map

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_result_service__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hierarchy_service__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var SearchResultComponent = (function () {
    function SearchResultComponent(document, activateRoute, _api_service, _hierarchy_service, router) {
        this.document = document;
        this.activateRoute = activateRoute;
        this._api_service = _api_service;
        this._hierarchy_service = _hierarchy_service;
        this.router = router;
        this.results = [];
        this.results_arrays = [];
        this.data_list = [];
        this.hierarchy_list = [["Parent Concept"], ["Child Concept", "Parallel Child Concept"], ["Final Concept"]];
        this.visited = {};
        this.parentMap = {};
    }
    SearchResultComponent.prototype.renderTree = function (graph, root) {
        var html = "<ul>";
        for (var _i = 0, _a = graph[root]; _i < _a.length; _i++) {
            var child = _a[_i];
            console.log("### " + child);
            html += "<li class='hierarchy-item'>" + child;
            html += this.renderTree(graph, child);
            html += "</li>";
        }
        html += "</ul>";
        return html;
    };
    SearchResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("initialize counter as zero");
        this.counter = 0;
        var datasource_concept_list_str = this.activateRoute.snapshot.queryParams['datasource_concept_list'];
        var search_selection = this.activateRoute.snapshot.queryParams['search_selection'];
        console.log(datasource_concept_list_str);
        console.log("The search selection -");
        console.log(search_selection);
        this.searchResult = search_selection;
        this.datasource_concept_list = datasource_concept_list_str.split(",");
        console.log(this.datasource_concept_list);
        this._api_service.searchResult(this.datasource_concept_list)
            .subscribe(function (result) {
            if (result.status === "success") {
                console.log("Service gave a success response!");
                console.log(Object.keys(result["result"]).length);
                console.log(Object.keys(_this.datasource_concept_list).length);
                for (var i = 0; i < Object.keys(_this.datasource_concept_list).length; i++) {
                    _this.results[_this.datasource_concept_list[i]] = result.result[_this.datasource_concept_list[i]];
                }
                console.log("The value in this.results -");
                console.log(_this.results);
                //console.log(this.results["Equipment"]["fact_table_list"]);
                console.log(_this.datasource_concept_list);
                for (result in _this.results) {
                    console.log(result);
                    _this.results_arrays.push([result, _this.results[result]['fact_table_list'], 'fact_table']);
                    _this.results_arrays.push([result, _this.results[result]['document_list'], 'document']);
                    _this.results_arrays.push([result, _this.results[result]['public_ontology'], 'public_ontology']);
                }
                console.log("The value in the results_array -");
                console.log(_this.results_arrays);
            }
            else {
                console.log(result.status);
                console.log("service gave a bad response");
                console.log(result);
            }
        });
        var search_term = this.searchResult.split("in")[0].toString().replace(/<\/?[^>]+(>|$)/g, '');
        console.log("Search Term is - ");
        console.log(search_term);
        this._hierarchy_service.fetchHierarchy(search_term).subscribe(function (result) {
            console.log("Result from the hierarchy service - ");
            var res = result.result;
            console.log(res);
            var sub_graph = res.hierarchy;
            var roots = res.roots;
            console.log("++++ " + roots);
            for (var node in sub_graph) {
                _this.visited[node] = false;
                _this.parentMap[node] = [];
            }
            // this.dfs(sub_graph, "Process development");
            _this.HierarchyHtml = roots.map(function (x) { return ("<ul> <li class=\"hierarchy-item\"> " + x + " </li>") + _this.renderTree(sub_graph, x); });
            console.log(_this.HierarchyHtml);
        });
    };
    SearchResultComponent.prototype.selectedData = function (data, type_of_data) {
        console.log("Selected data is -");
        console.log(data);
        console.log(type_of_data);
        if (type_of_data === "document") {
            console.log("The type of data selected is a document!");
            this.document.location.assign(data[0]);
        }
        else if (type_of_data === "public_ontology") {
            console.log("The type of data selected is a public ontology");
            this.document.location.assign(data[0]);
        }
        else {
            var related_dataset_payload = {
                "selected_data_uri": data[0],
                "selected_data_name": data[1],
                "short_description": data[2]
            };
            this.router.navigate(['/description'], { queryParams: related_dataset_payload });
        }
    };
    SearchResultComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: 'app-search-result',
            template: __webpack_require__(844),
            styles: [__webpack_require__(838)]
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DOCUMENT */])), 
        __metadata('design:paramtypes', [Object, (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__search_result_service__["a" /* SearchResultService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__search_result_service__["a" /* SearchResultService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__hierarchy_service__["a" /* HierarchyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__hierarchy_service__["a" /* HierarchyService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], SearchResultComponent);
    return SearchResultComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/Users/sjameel/WebstormProjects/angular-search/src/search-result.component.js.map

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_service__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchComponent = (function () {
    function SearchComponent(_apiService, router) {
        this._apiService = _apiService;
        this.router = router;
        this.data = [];
        this.highlights = [];
        this.complete_dimension_list = [];
        this.queryField = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]();
        this.datasource_concept_list = [];
        this.result_list = [];
        this.result = [];
        this.result_set = [];
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.queryField.valueChanges
            .debounceTime(200)
            .distinctUntilChanged()
            .switchMap(function (query) { return _this._apiService.search(query); })
            .subscribe(function (result) {
            console.log("This is the result from the API");
            console.log(result);
            if (result.status === 400) {
                return;
            }
            else {
                _this.result_list = [];
                console.log(_this.result_list);
                console.log(result.result);
                _this.result = result.result;
                for (var _i = 0, _a = result.result; _i < _a.length; _i++) {
                    var single_result = _a[_i];
                    console.log("single result");
                    console.log(single_result);
                    console.log(single_result.highlight);
                    //single_result.highlight = JSON.parse(single_result.highlight);
                    var highlighted_data = JSON.parse(single_result.highlight);
                    var doc_data = JSON.parse(single_result.data);
                    // pushing all the dimensions in a consolidated list that can be used when the user selects a concept
                    _this.complete_dimension_list.push(doc_data.dimension);
                    console.log("The complete dimension list is - ");
                    console.log(_this.complete_dimension_list);
                    console.log("highlighted Data");
                    console.log(highlighted_data);
                    var _loop_1 = function(highlight) {
                        console.log("highlight");
                        console.log(highlight);
                        // if logic for mapping then push it to list that will be iterated in the html
                        if (highlight === "concept_tags.ngram") {
                            var narrower_suggestion = highlighted_data[highlight];
                            var broader_suggestion_1 = doc_data["concept"];
                            _this.result_list.push(narrower_suggestion.map(function (e) {
                                var narrower_search = e.toString().replace(/<\/?[^>]+(>|$)/g, '');
                                return ["concept_tags", narrower_search, e + " in " + broader_suggestion_1];
                            }));
                        }
                        if (highlight === "dimension_tags.ngram") {
                            var narrower_suggestion = highlighted_data[highlight];
                            var broader_suggestion_2 = doc_data["datasource"];
                            _this.result_list.push(narrower_suggestion.map(function (e) {
                                var narrower_search = e.toString().replace(/<\/?[^>]+(>|$)/g, '');
                                return ["dimension_tags", narrower_search, e + " in " + broader_suggestion_2];
                            }));
                        }
                        if (highlight === "datasource_tags.ngram") {
                            var narrower_suggestion = highlighted_data[highlight];
                            var broader_suggestion_3 = doc_data["concept"];
                            _this.result_list.push(narrower_suggestion.map(function (e) {
                                var narrower_search = e.toString().replace(/<\/?[^>]+(>|$)/g, '');
                                return ["datasource_tags", narrower_search, e + " in " + broader_suggestion_3];
                            }));
                        }
                        if (highlight === "concept.ngram") {
                            var narrower_search = highlighted_data[highlight].toString().replace(/<\/?[^>]+(>|$)/g, '');
                            _this.result_list.push("concept", narrower_search, highlighted_data[highlight]);
                        }
                    };
                    for (var _b = 0, _c = Object.keys(highlighted_data); _b < _c.length; _b++) {
                        var highlight = _c[_b];
                        _loop_1(highlight);
                    }
                    console.log("this.result_list - ");
                    console.log(_this.result_list);
                    _this.result_set = _this.result_list;
                }
            }
        });
    };
    SearchComponent.prototype.selectedSuggestion = function (search_selection) {
        console.log("The search selection is below - ");
        console.log(search_selection);
        // console.log("The result doc needs to change, meanwhile we would be using the first entry of the resultDoc.tags which is " +
        //   "(Also we would have to loop through the docs to create the list) -");
        //console.log(resultDoc.tags[0]);
        var tag_highlight = search_selection[0];
        //HERE
        var narrower_search = search_selection[1];
        for (var _i = 0, _a = this.result; _i < _a.length; _i++) {
            var single_result = _a[_i];
            console.log('inside the loop of selected suggestion');
            console.log(single_result);
            var data_obj = JSON.parse(single_result.data);
            console.log("The tag_highlight content is -");
            console.log(data_obj[tag_highlight]);
            if (typeof (data_obj[tag_highlight]) === 'object') {
                console.log("Important check, the tag_highlight content is of the type OBJECT");
                if (data_obj[tag_highlight].includes(narrower_search)) {
                    console.log("Found the narrower search in the document, pushing the dimension in the datasource_concept_list");
                    this.datasource_concept_list.push(data_obj.dimension);
                }
            }
            else {
                console.log("Important check, the tag_highlight content is of the type STRING");
                if (data_obj[tag_highlight] === narrower_search) {
                    console.log("Found the narrower search in the document, pushing the dimension in the datasource_concept_list");
                    this.datasource_concept_list.push(data_obj.dimension);
                }
            }
        }
        console.log("Looping complete, below is the complete datasource concept list -");
        console.log(this.datasource_concept_list);
        var search_result_payload = {
            datasource_concept_list: this.datasource_concept_list,
            search_selection: search_selection[2]
        };
        this.router.navigate(['/search-result'], { queryParams: search_result_payload });
        // for(let dimension in resultDoc.dimension){
        //   this.datasource_concept_list.push(dimension);
        // }
        // console.log(this.datasource_concept_list);
        // let search_result_payload = {
        //   datasource_concept_list: this.datasource_concept_list,
        //   search_query: resultDoc.concept
        // };
        // this.router.navigate(['/search-result'], {queryParams:search_result_payload});
    };
    SearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__(845),
            styles: [__webpack_require__(839)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__search_service__["a" /* SearchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__search_service__["a" /* SearchService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], SearchComponent);
    return SearchComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Users/sjameel/WebstormProjects/angular-search/src/search.component.js.map

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=D:/Users/sjameel/WebstormProjects/angular-search/src/environment.prod.js.map

/***/ }),

/***/ 834:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 835:
/***/ (function(module, exports) {

module.exports = ":focus{\r\n  outline:none;\r\n}\r\n.radio{\r\n  -webkit-appearance:button;\r\n  -moz-appearance:button;\r\n  appearance:button;\r\n  border:4px solid #ccc;\r\n  border-top-color:#bbb;\r\n  border-left-color:#bbb;\r\n  background:#fff;\r\n  width:25px;\r\n  height:25px;\r\n  border-radius:50%;\r\n}\r\n.radio:checked{\r\n  border:10px solid #4099ff;\r\n}\r\n\r\ndiv.false{\r\n  opacity: 0.5;\r\n}\r\n"

/***/ }),

/***/ 836:
/***/ (function(module, exports) {

module.exports = ".active {\r\n  display: block!important;\r\n}\r\n\r\n.checkout-card{\r\n  float: right;\r\n}\r\ndiv.card:hover{\r\n  background-color: #cccccc;\r\n}\r\n.btn-link{\r\n  text-decoration: none;\r\n}\r\n.container-fluid{\r\n  width: 100%;\r\n}\r\n.carousel-control-prev-icon,\r\n.carousel-control-next-icon {\r\n  height: 100px;\r\n  width: 100px;\r\n\r\n  background-size: 100%, 100%;\r\n\r\n  background-image: none;\r\n}\r\n\r\n.carousel-control-next-icon:after\r\n{\r\n  content: '>';\r\n  font-size: 40px;\r\n  color: black;\r\n}\r\n\r\n.carousel-control-prev-icon:after {\r\n  content: '<';\r\n  font-size: 40px;\r\n  color: black;\r\n}\r\n\r\n.footer{\r\n  width: 100%;\r\n  bottom: 0;\r\n  position: fixed;\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.carousel-item{\r\n  max-height: 250px;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n}\r\n\r\n"

/***/ }),

/***/ 837:
/***/ (function(module, exports) {

module.exports = ".navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:hover, .navbar-default .navbar-nav>.active>a:focus {\r\n  background-color: #cccccc;\r\n}\r\n\r\n.navbar-default .navbar-brand:hover,\r\n.navbar-default .navbar-brand:focus {\r\n  background-color: #cccccc;\r\n  color: #cccccc;\r\n}\r\n.navbar-brand\r\n{\r\n  font-family : \"Lato\", sans-serif;\r\n  font-weight : bold;\r\n  font-size : 15px;\r\n  color : #444444;\r\n}\r\n\r\n.navbar-default{\r\n  background: #fff;\r\n  border: 0;\r\n}\r\n\r\na {\r\n  font-family: \"Lato\", sans-serif;\r\n  font-weight: bold;\r\n  font-size: 15px;\r\n}\r\n.navbar-toggle {\r\n  margin-top: 15px;\r\n  margin-bottom: 0px;\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n\r\n.navbar-toggle .icon-bar {\r\n  display: block;\r\n  width: 20px;\r\n  height: 2px;\r\n  background-color: #111111;\r\n  border-radius: 1px;\r\n}\r\n"

/***/ }),

/***/ 838:
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Lato');\r\n\r\n.btn-link {\r\n  text-decoration: none;\r\n}\r\n\r\ndiv.row_result {\r\n  border-style: ridge;\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n  margin-top: 10px;\r\n  box-shadow: #cccccc;\r\n\r\n}\r\n\r\ndiv.col-lg-3 {\r\n  border-right: 3px solid #0062cc;\r\n}\r\n\r\n.grid {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 30% 70%;\r\n      grid-template-columns: 30% 70%;\r\n}\r\n\r\ndiv.result-container p {\r\n  margin-bottom: 30px;\r\n}\r\n\r\ndiv.col-lg-9 {\r\n\r\n  -ms-flex-align: center;\r\n\r\n      align-items: center;\r\n  /*  margin: auto;\r\n    width: 50%;\r\n    margin-top: 40px;\r\n    margin-bottom: 40px;*/\r\n\r\n  /* margin-top: 40px;\r\n  margin-left: 50px;\r\n  margin-right: 50px;\r\n  margin-bottom: 40px; */\r\n}\r\n\r\ndiv.card:hover {\r\n  background-color: #cccccc;\r\n}\r\n\r\ndiv.col-8 {\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\r\n\r\np {\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n\r\nelement.style {\r\n  position: fixed;\r\n  top: 90px;\r\n  width: 122.547px;\r\n  z-index: 2;\r\n}\r\n\r\n#scrollspy {\r\n  width: 100%;\r\n}\r\n\r\n*, ::after, ::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\ndiv {\r\n  /*display: block;*/\r\n}\r\n\r\nbody {\r\n  font-family: Roboto, sans-serif;\r\n  font-weight: 300;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  /*font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";*/\r\n  font-family: 'Lato', sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  color: #212529;\r\n  text-align: left;\r\n  background-color: #fff;\r\n}\r\n\r\n:root {\r\n  --blue: #007bff;\r\n  --indigo: #6610f2;\r\n  --purple: #6f42c1;\r\n  --pink: #e83e8c;\r\n  --red: #dc3545;\r\n  --orange: #fd7e14;\r\n  --yellow: #ffc107;\r\n  --green: #28a745;\r\n  --teal: #20c997;\r\n  --cyan: #17a2b8;\r\n  --white: #fff;\r\n  --gray: #6c757d;\r\n  --gray-dark: #343a40;\r\n  --primary: #007bff;\r\n  --secondary: #6c757d;\r\n  --success: #28a745;\r\n  --info: #17a2b8;\r\n  --warning: #ffc107;\r\n  --danger: #dc3545;\r\n  --light: #f8f9fa;\r\n  --dark: #343a40;\r\n  --breakpoint-xs: 0;\r\n  --breakpoint-sm: 576px;\r\n  --breakpoint-md: 768px;\r\n  --breakpoint-lg: 992px;\r\n  --breakpoint-xl: 1200px;\r\n  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\r\n}\r\n\r\nhtml {\r\n  font-family: sans-serif;\r\n  line-height: 1.15;\r\n  -webkit-text-size-adjust: 100%;\r\n  -ms-text-size-adjust: 100%;\r\n  -ms-overflow-style: scrollbar;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n*, ::after, ::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\n*, ::after, ::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\n"

/***/ }),

/***/ 839:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 840:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 841:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=provisioned_success class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n  <strong>Success!</strong> Your data has been provisioned! Click the <a href=\"https://databricks-edl.cloud.databricks.com/\" class=\"alert-link\">link</a> to redirect to Databricks!\r\n  <button (click)=\"successAlertClose()\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"alert alert-danger\" *ngIf=\"ui_alert_box\">\r\n  <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\" (click)=\"close_alert_box()\">&times;</a>\r\n  This tool is not configured for this demo!\r\n</div>\r\n\r\n<div *ngIf=provisioning_data class=\"alert alert-info\" role=\"alert\">\r\n  <i class=\"fa fa-spinner fa-spin\" style=\"font-size:24px; margin: auto\"></i> Please wait while your data is being provisioned ...\r\n</div>\r\n\r\n<popup (confirmClick)=\"provisionData()\" style=\"\">\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputEmail1\">External Table Name</label>\r\n      <input [(ngModel)]=\"external_table_name\" name=\"external_table_name\" type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter external table name...\">\r\n      <small id=\"emailHelp\" class=\"form-text text-muted\">Table with this name would be created in your personal workspace with your selected data</small>\r\n    </div>\r\n  </form>\r\n</popup>\r\n\r\n<div *ngIf=\"!provisioning_data\" class=\"container\">\r\n  <div class=\"row\">\r\n    <h1 class=\"display-4\">Checkout</h1>\r\n  </div>\r\n  <hr>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-8\">\r\n      <div class=\"jumbotron\" style=\"margin-top:10px;\">\r\n        <div class=\"repeat\" *ngFor=\"let dataset of dataset_list\">\r\n          <input type=\"radio\" (click)=\"radioButtonClicked(dataset)\" class=\"radio float-right\" name=\"test\" id=i1 style=\"margin-top:20px;\">\r\n          <h4 class=\"display-6\">{{dataset.name}}\r\n          </h4>\r\n          <p class=\"lead\">Dataset Decription</p>\r\n          <hr class=\"my-4\">\r\n          <p>{{dataset.short_description}}</p>\r\n          <p class=\"lead\">\r\n            <button type=\"button\" class=\"btn btn-danger btn-lg\" (click)=\"remove_from_list(dataset)\">Remove</button>\r\n          </p>\r\n          <hr>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"jumbotron {{radio_button_selection}}\" style=\"margin-top:10px;width:90%\">\r\n        <h3 class=\"display-4\">Provision</h3>\r\n        <p class=\"lead\">Provision Data</p>\r\n        <hr class=\"my-4\">\r\n\r\n        <div class=\"btn-group\" style=\"margin-bottom:10px;\">\r\n          <button [disabled]=\"!radio_button_selection\" class=\"btn btn-info btn-lg dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" >\r\n            Choose Tool\r\n          </button>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n            <a class=\"dropdown-item\" (click)=\"toolSelected('Databricks')\">Databricks</a>\r\n            <a class=\"dropdown-item\" (click)=\"toolSelected('Alteryx')\">Alteryx</a>\r\n            <a class=\"dropdown-item\" (click)=\"toolSelected('datascience.com')\">datascience.com</a>\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <!--<p class=\"lead\">\r\n          <a class=\"btn btn-success btn-lg\" role=\"button\">Checkout</a>\r\n        </p>-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 842:
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Lato\" rel=\"stylesheet\">\r\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.1.0/css/all.css\" integrity=\"sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt\" crossorigin=\"anonymous\">\r\n<div class=\"container\">\r\n<div class=\"row\">\r\n <div class=\"jumbotron\" style=\"margin-top:10px;width:90%\">\r\n   <div class=\"alert alert-success\" *ngIf=\"ui_alert_box\">\r\n     <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\" (click)=\"close_alert_box()\">&times;</a>\r\n     <strong>Success!</strong> Added Dataset {{data_name}} to cart\r\n   </div>\r\n  <div class=\"result-description\">\r\n    <h4 class=\"display-6\">Showing data for <b>{{data_name}}</b></h4>\r\n\r\n      <ul class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n        <li><a class=\"nav-item nav-link\" ngClass=\"{{description_flag}}\" (click)=\"toggleActiveFlag('Description')\" id=\"nav-home-tab\" data-toggle=\"tab\" href=\"#nav-home\" role=\"tab\" aria-controls=\"nav-home\" aria-selected=\"true\">Description</a></li>\r\n        <li><a class=\"nav-item nav-link\" ngClass=\"{{schema_flag}}\" (click)=\"toggleActiveFlag('Schema and Data Preview')\" id=\"nav-profile-tab\" data-toggle=\"tab\" href=\"#nav-profile\" role=\"tab\" aria-controls=\"nav-profile\" aria-selected=\"false\">Schema and Data Preview</a></li>\r\n      </ul>\r\n\r\n    <div class=\"tab-content\" id=\"nav-tabContent\">\r\n      <div class=\"tab-pane fade show\" ngClass=\"{{description_flag}}\"  id=\"nav-home\" role=\"tabpanel\" aria-labelledby=\"nav-home-tab\">\r\n        <div class=\"col-lg-8\" style=\"margin-top:10px;\">\r\n          <p style=\"\">{{long_description}}\r\n          <br>\r\n          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n          <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"add_to_cart(data_name, long_description, long_description)\"><i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i> Add to Cart</button>\r\n        </div>\r\n\t    </div>\r\n      <div class=\"tab-pane fade show\" ngClass=\"{{schema_flag}}\" id=\"nav-profile\" role=\"tabpanel\" aria-labelledby=\"nav-profile-tab\" style=\"max-height:400px;overflow-y:scroll;overflow-x:scroll;\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\" style=\"margin-top:10px;\">\r\n          <h4>Table Schema</h4>\r\n           <table class=\"table table-bordered table-hover\">\r\n          <thead>\r\n            <tr>\r\n              <th>Column Name</th>\r\n              <th>Column Datatype</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td>EQUIPMENT_AMG_ASSETNUMBER</td>\r\n              <td>VARCHAR2(100 BYTE)</td>\r\n            </tr>\r\n            <tr>\r\n              <td>EQUIPMENT_AMG_BUILDING</td>\r\n              <td>VARCHAR2(100 BYTE)</td>\r\n            </tr>\r\n            <tr>\r\n              <td>EQUIPMENT_AMG_SITE</td>\r\n              <td>VARCHAR2(100 BYTE)</td>\r\n            </tr>\r\n          <tr>\r\n              <td>EQUIPMENT_DEPARTMENT</td>\r\n              <td>VARCHAR2(100 BYTE)</td>\r\n            </tr>\r\n          <tr>\r\n              <td>EQUIPMENT_EQUIPMENTNAME</td>\r\n              <td>VARCHAR2(100 BYTE)</td>\r\n            </tr>\r\n              <tr>\r\n              <td>EQUIPMENT_EQUIPMENTTYPE</td>\r\n              <td>VARCHAR2(100 BYTE)</td>\r\n            </tr>\r\n                  <tr>\r\n              <td>EQUIPMENT_MANUFACTURER</td>\r\n              <td>VARCHAR2(100 BYTE)</td>\r\n            </tr>\r\n                      <tr>\r\n              <td>EQUIPMENT_MODEL</td>\r\n              <td>VARCHAR2(100 BYTE)</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\t  <div class=\"row\">\r\n\t  <div class=\"col-lg-12\" style=\"margin-top:10px;\">\r\n\t  <h4>Table Preview</h4>\r\n\t   <table class=\"table table-bordered table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th>EQUIPMENT_AMG_ASSETNUMBER</th>\r\n        <th>EQUIPMENT_AMG_BUILDING</th>\r\n\t\t<th>EQUIPMENT_AMG_SITE</th>\r\n\t\t<th>EQUIPMENT_DEPARTMENT</th>\r\n\t\t<th>EQUIPMENT_EQUIPMENTNAME</th>\r\n\t\t<th>EQUIPMENT_EQUIPMENTTYPE</th>\r\n\t\t<th>EQUIPMENT_MANUFACTURER</th>\r\n\t\t<th>EQUIPMENT_MODEL</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td>1017125</td>\r\n        <td>TO-0303112</td>\r\n\t\t<td>TO</td>\r\n\t\t<td>Amgen</td>\r\n\t\t<td>DPPD LYOPHILIZER</td>\r\n\t\t<td>S.P. INDUSTRIES VERTIS ADVANTAGE PLUS</td>\r\n\t\t<td>S.P. INDUSTRIES</td>\r\n\t\t<td>VERTIS ADVANTAGE PLUS</td>\r\n      </tr>\r\n\t  <tr>\r\n\t  <td>1060225</td>\r\n\t  <td>TO-0301854</td>\r\n\t  <td>TO</td>\r\n\t  <td>Default Department</td>\r\n\t<td>PRODUCT ATTRIBUTE</td>\r\n\t<td>SCIENCES PLATE READER</td>\r\n\t<td>PERKIN ELMER ENVISION 2104</td>\r\n\t<td>PERKIN ELMER\tENVISION 2104</td>\r\n\t</tr>\r\n    </tbody>\r\n  </table>\r\n\r\n\t  </div>\r\n\t  </div>\r\n\r\n\t  </div>\r\n    </div>\r\n  </div>\r\n  <!--<div class=\"checkout-card\">\r\n    <div class=\"card text-center\" align=\"center\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Checkout</h5>\r\n        <p class=\"card-text\"><b>{{data_name}}</b></p>\r\n        <a href=\"#\" class=\"btn btn-primary\"><i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i> Add to Cart</a><br>\r\n        <a href=\"#\" class=\"btn btn-primary\" style=\"margin-top: 10px\"><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i> Checkout</a>\r\n      </div>\r\n    </div>\r\n  </div>-->\r\n\t</div>\r\n</div>\r\n<div class=\"row\">\r\n<div class=\"col-lg-12\">\r\n  <hr>\r\n  <h4><b>Related Datasets</b></h4>\r\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-interval=\"false\" data-ride=\"carousel\" style=\"margin: 5px\">\r\n    <div class=\"carousel-inner\">\r\n      <div class=\"carousel-item active\">\r\n\t  <div class=\"card mx-auto\" style=\"width: 28rem;\">\r\n  <div class=\"card-body\">\r\n\t<h5 class=\"card-title\">{{current_data_name}}</h5>\r\n    <h6 class=\"card-subtitle mb-2 text-muted\">Description</h6>\r\n    <p class=\"card-text\">{{current_data_description}}</p>\r\n    <button type=\"button\" class=\"btn btn-primary btn-md\">Get Info</button>\r\n  </div>\r\n</div>\r\n\t\t<!--<div class=\"card w- btn-link mx-auto\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\"><b>{{current_data_name}}</b></h5>\r\n            <h6 class=\"card-subtitle mb-2 text-muted\">Description</h6>\r\n            <p class=\"card-text\">{{current_data_description}}</p>\r\n          </div>\r\n        </div>-->\r\n      </div>\r\n      <!--<div class=\"carousel-item\">\r\n        <div class=\"card w-75 btn-link mx-auto\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\"><b>DATA Name</b></h5>\r\n            <h6 class=\"card-subtitle mb-2 text-muted\">Description</h6>\r\n            <p class=\"card-text\">DATA Description</p>\r\n          </div>\r\n        </div>\r\n\r\n      </div>-->\r\n    </div>\r\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\" (click)=\"decrementNextRelatedDataset()\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\" (click)=\"incrementNextRealatedDataset()\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </div>\r\n</div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ 843:
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Lato\" rel=\"stylesheet\">\r\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.1.0/css/all.css\" integrity=\"sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt\" crossorigin=\"anonymous\">\r\n<nav class=\"navbar navbar-default navbar-fixed-top bg-light\">\r\n  <div class=\"navbar-header\">\r\n  <a class=\"navbar-brand\" href=\"#\"><img class=\"img-responsive\" style=\"margin:2px\" src=\"https://upload.wikimedia.org/wikipedia/commons/a/ab/Amgen.svg\"/></a></div>\r\n  <ul class=\"nav justify-content-end\">\r\n    <li class=\"nav-item\">\r\n      <a style=\"font-family: 'Lato', sans-serif\" class=\"nav-link \" href=\"/\"><i class=\"fas fa-user-tie\"></i>  User Account</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a style=\"font-family: 'Lato', sans-serif\" class=\"nav-link\" (click)=\"checkout()\"><i class=\"fas fa-shopping-cart\"></i> <span class=\"badge badge-secondary\" *ngIf=\"cart_content[1]\">{{cart_content[1]}}</span> Checkout</a>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n"

/***/ }),

/***/ 844:
/***/ (function(module, exports) {

module.exports = "<!-- <hello name=\"{{ name }}\"></hello>\r\n<p>\r\n  Start editing to see some magic happen :)\r\n</p> -->\r\n<link href=\"https://fonts.googleapis.com/css?family=Lato\" rel=\"stylesheet\">\r\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.1.0/css/all.css\"\r\n      integrity=\"sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt\" crossorigin=\"anonymous\">\r\n<div class=\"row\" style=\"margin:20px;\">\r\n  <div class=\"col-lg-3\">\r\n    <div class=\"jumbotron\">\r\n      <div id=\"hierarchy-list\" *ngFor=\"let x of HierarchyHtml\" [innerHTML]=\"x\">\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-8\">\r\n        <div class=\"jumbotron\">\r\n          <h4 class=\"display-8\">Showing results for <span [innerHTML]=\"searchResult\"></span></h4>\r\n          <span *ngFor=\"let result_arr of results_arrays\">\r\n      <span *ngFor=\"let data_value of result_arr[1]\">\r\n        <div class=\"card w-100 btn-link\" (click)=\"selectedData(data_value, result_arr[2])\" style=\"margin-top:10px;\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\"><b>{{data_value[1]}}</b> in {{result_arr[0]}}</h5>\r\n            <h6 class=\"card-subtitle mb-2 text-muted\" *ngIf=\"result_arr[2] !=='public_ontology'\">Description</h6>\r\n            <h6 class=\"card-subtitle mb-2 text-muted\" *ngIf=\"result_arr[2] ==='public_ontology'\"><b>Public Ontology</b></h6>\r\n            <p class=\"card-text\">{{data_value[2]}}</p>\r\n          </div>\r\n        </div>\r\n        </span>\r\n      </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 845:
/***/ (function(module, exports) {

module.exports = "<section class=\"filter-wrapper\">\r\n  <div class=\"keyword-wrapper\">\r\n    <input [formControl]=\"queryField\" type=\"text\" id=\"keyword\" placeholder=\"Search data here...\" autofocus/>\r\n  </div>\r\n  <span style=\"border-bottom: 1px\">\r\n  <span *ngFor=\"let result_arr of result_set\">\r\n    <ul class=\"filter-select\">\r\n      <span *ngFor=\"let result of result_arr\">\r\n      <li (click)=\"selectedSuggestion(result)\"  class=\"filter-select-list\">\r\n        <p class=\"artist-name\" [innerHTML]=\"result[2]\"></p>\r\n           <!--<span class=\"tags\" *ngFor='let result of result  | slice:0:6'>{{result}}</span>-->\r\n      </li>\r\n        <li *ngIf=\"result[1] === 'Equipment'\" (click)=\"selectedSuggestion(result)\"  class=\"filter-select-list\">\r\n          <p class=\"artist-name\">E<em>qu</em>ipment in Clinical Trails</p>\r\n          <!--<span class=\"tags\" *ngFor='let result of result  | slice:0:6'>{{result}}</span>-->\r\n      </li>\r\n      </span>\r\n    </ul>\r\n  </span>\r\n    </span>\r\n</section>\r\n\r\n"

/***/ })

},[1130]);
//# sourceMappingURL=main.bundle.map