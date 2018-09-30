webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_list_book_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cd_list_cd_list__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_bibliotheque_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage(bibliothequeService) {
        this.bibliothequeService = bibliothequeService;
        this.bookListPage = __WEBPACK_IMPORTED_MODULE_1__book_list_book_list__["a" /* BookListPage */];
        this.cdListPage = __WEBPACK_IMPORTED_MODULE_2__cd_list_cd_list__["a" /* CdListPage */];
    }
    TabsPage.prototype.ngOnInit = function () {
        this.bibliothequeService.fetchList();
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\Kossi\Desktop\Nouveau\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="bookListPage" tabTitle="Book List" tabIcon="book"></ion-tab>\n  <ion-tab [root]="cdListPage" tabTitle="Cd List" tabIcon="disc"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\Kossi\Desktop\Nouveau\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_bibliotheque_service__["a" /* BibliothequeService */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
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
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bibliotheque_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lend_book_lend_book__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookListPage = /** @class */ (function () {
    function BookListPage(modalCtrl, bibliothequeService, menuCtrl) {
        this.modalCtrl = modalCtrl;
        this.bibliothequeService = bibliothequeService;
        this.menuCtrl = menuCtrl;
    }
    BookListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.booksSubscription = this.bibliothequeService.books$.subscribe(function (books) {
            _this.booksList = books.slice();
        });
        this.bibliothequeService.fetchList();
        this.bibliothequeService.emitBooks();
        if (this.booksList.length > 1) {
            this.bibliothequeService.notEmpty = true;
        }
    };
    BookListPage.prototype.ionViewWillEnter = function () {
        this.booksList = this.bibliothequeService.booksList.slice();
    };
    BookListPage.prototype.onLoadBook = function (index) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__lend_book_lend_book__["a" /* LendBookPage */], { index: index });
        modal.present();
    };
    BookListPage.prototype.onToggleMenu = function () {
        this.menuCtrl.open();
    };
    BookListPage.prototype.ngOnDestroy = function () {
        this.booksSubscription.unsubscribe();
    };
    BookListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-book-list',template:/*ion-inline-start:"C:\Users\Kossi\Desktop\Nouveau\src\pages\book-list\book-list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>books</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="onToggleMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item\n            icon-start\n            *ngFor="let book of booksList; let i = index"\n            (click)="onLoadBook(i)"\n            [ngClass]="{\'is-lend\': book.isLend, \'is-rendered\': !book.isLend }">\n          <ion-icon name="share-alt" [color]="book.isLend ? \'danger\' : \'secondary\'"></ion-icon> \n          {{ book.title }}\n          <br>\n          {{ book.nomEmprunteur }}   \n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kossi\Desktop\Nouveau\src\pages\book-list\book-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1__services_bibliotheque_service__["a" /* BibliothequeService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* MenuController */]])
    ], BookListPage);
    return BookListPage;
}());

//# sourceMappingURL=book-list.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LendBookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bibliotheque_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LendBookPage = /** @class */ (function () {
    function LendBookPage(navParams, viewCtrl, bibliothequeService, formBuilder) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.bibliothequeService = bibliothequeService;
        this.formBuilder = formBuilder;
    }
    LendBookPage.prototype.ngOnInit = function () {
        this.initForm();
        this.index = this.navParams.get('index');
        this.book = this.bibliothequeService.booksList[this.index];
    };
    LendBookPage.prototype.initForm = function () {
        this.lendForm = this.formBuilder.group({
            nomEmprunteur: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    };
    LendBookPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    LendBookPage.prototype.onLendBook = function () {
        if (this.book.nomEmprunteur = this.lendForm.get('nomEmprunteur').value) {
            this.book.isLend = !this.book.isLend;
        }
    };
    LendBookPage.prototype.onReturnBook = function () {
        this.book.nomEmprunteur = '';
        this.book.isLend = !this.book.isLend;
    };
    LendBookPage.prototype.onValidate = function () {
        this.bibliothequeService.saveList();
        this.bibliothequeService.emitBooks();
        this.dismissModal();
    };
    LendBookPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lend-book',template:/*ion-inline-start:"C:\Users\Kossi\Desktop\Nouveau\src\pages\lend-book\lend-book.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons>\n      <button ion-button clear (click)="dismissModal()">Fermer</button>\n    </ion-buttons>\n    <ion-title>{{ book.title }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>{{ book.title }}</ion-card-header>\n    <ion-card-content>\n      <p *ngFor="let line of book.description">{{ line }}</p>\n      <h4 *ngIf = "book.isLend">nom de l\'emprunteur: {{ book.nomEmprunteur }}</h4>\n    </ion-card-content>\n    <form [formGroup]="lendForm" >\n      <ion-item *ngIf="!book.isLend">\n        <ion-input placeholder="Nom emprunteur" formControlName="nomEmprunteur" ></ion-input>  \n      </ion-item>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <button\n              ion-button\n              full\n              color="danger"\n              [disabled]="book.isLend"\n              (click)="onLendBook()">Prêter</button>\n          </ion-col>\n          <ion-col>\n            <button\n              ion-button\n              full\n              color="secondary"\n              [disabled]="!book.isLend"\n              (click)="onReturnBook()">Rendre</button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <button\n              ion-button\n              full\n              color="primary"\n              (click)="onValidate()">Valider</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kossi\Desktop\Nouveau\src\pages\lend-book\lend-book.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_bibliotheque_service__["a" /* BibliothequeService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], LendBookPage);
    return LendBookPage;
}());

//# sourceMappingURL=lend-book.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CdListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bibliotheque_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lend_cd_lend_cd__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CdListPage = /** @class */ (function () {
    function CdListPage(modalCtrl, bibliothequeService, menuCtrl) {
        this.modalCtrl = modalCtrl;
        this.bibliothequeService = bibliothequeService;
        this.menuCtrl = menuCtrl;
    }
    CdListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.cdsSubscription = this.bibliothequeService.cds$.subscribe(function (cds) {
            _this.cdsList = cds.slice();
        });
        this.bibliothequeService.fetchList();
        this.bibliothequeService.emitCds();
    };
    CdListPage.prototype.ionViewWillEnter = function () {
        this.cdsList = this.bibliothequeService.cdsList.slice();
    };
    CdListPage.prototype.onLoadCd = function (index) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__lend_cd_lend_cd__["a" /* LendCdPage */], { index: index });
        modal.present();
    };
    CdListPage.prototype.onToggleMenu = function () {
        this.menuCtrl.open();
    };
    CdListPage.prototype.ngOnDestroy = function () {
        this.cdsSubscription.unsubscribe();
    };
    CdListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cd-list',template:/*ion-inline-start:"C:\Users\Kossi\Desktop\Nouveau\src\pages\cd-list\cd-list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Cds</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="onToggleMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item\n            icon-start\n            *ngFor="let cd of cdsList; let i = index"\n            (click)="onLoadCd(i)"\n            [ngClass]="{\'is-lend\': cd.isLend, \'is-rendered\': !cd.isLend }">\n          <ion-icon name="share-alt" [color]="cd.isLend ? \'danger\' : \'secondary\'"></ion-icon> \n          {{ cd.title }}\n          <br>\n          {{ cd.nomEmprunteur }}\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Kossi\Desktop\Nouveau\src\pages\cd-list\cd-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1__services_bibliotheque_service__["a" /* BibliothequeService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* MenuController */]])
    ], CdListPage);
    return CdListPage;
}());

//# sourceMappingURL=cd-list.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LendCdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bibliotheque_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LendCdPage = /** @class */ (function () {
    function LendCdPage(navParams, viewCtrl, bibliothequeService, formBuilder) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.bibliothequeService = bibliothequeService;
        this.formBuilder = formBuilder;
    }
    LendCdPage.prototype.ngOnInit = function () {
        this.initForm();
        this.index = this.navParams.get('index');
        this.cd = this.bibliothequeService.cdsList[this.index];
    };
    LendCdPage.prototype.initForm = function () {
        this.lendForm = this.formBuilder.group({
            nomEmprunteur: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    };
    LendCdPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    LendCdPage.prototype.onLendCd = function () {
        if (this.cd.nomEmprunteur = this.lendForm.get('nomEmprunteur').value) {
            this.cd.isLend = !this.cd.isLend;
        }
    };
    LendCdPage.prototype.onReturnCd = function () {
        this.cd.nomEmprunteur = '';
        this.cd.isLend = !this.cd.isLend;
    };
    LendCdPage.prototype.onValidate = function () {
        this.bibliothequeService.saveList();
        this.bibliothequeService.emitCds();
        this.dismissModal();
    };
    LendCdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lend-cd',template:/*ion-inline-start:"C:\Users\Kossi\Desktop\Nouveau\src\pages\lend-cd\lend-cd.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-buttons>\n        <button ion-button clear (click)="dismissModal()">Fermer</button>\n      </ion-buttons>\n      <ion-title>{{ cd.title }}</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding>\n    <ion-card>\n      <ion-card-header>{{ cd.title }}</ion-card-header>\n      <ion-card-content>\n        <p *ngFor="let line of cd.description">{{ line }}</p>\n        <h4 *ngIf = "cd.isLend">nom de l\'emprunteur: {{ cd.nomEmprunteur }}</h4>\n      </ion-card-content>\n      <form [formGroup]="lendForm" >\n        <ion-item  *ngIf="!cd.isLend">\n          <ion-input placeholder="Nom emprunteur" formControlName="nomEmprunteur" ></ion-input>  \n        </ion-item>\n      </form>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <button\n              ion-button\n              full\n              color="danger"\n              [disabled]="cd.isLend"\n              (click)="onLendCd()">Prêter</button>\n          </ion-col>\n          <ion-col>\n            <button\n              ion-button\n              full\n              color="secondary"\n              [disabled]="!cd.isLend"\n              (click)="onReturnCd()">Rendre</button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <button\n              ion-button\n              full\n              color="primary"\n              (click)="onValidate()">Valider</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\Kossi\Desktop\Nouveau\src\pages\lend-cd\lend-cd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_bibliotheque_service__["a" /* BibliothequeService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], LendCdPage);
    return LendCdPage;
}());

//# sourceMappingURL=lend-cd.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bibliotheque_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = /** @class */ (function () {
    function SettingsPage(menuCtrl, bibliothequeService, toastCtrl, loadingCtrl) {
        this.menuCtrl = menuCtrl;
        this.bibliothequeService = bibliothequeService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.notEmpty = this.bibliothequeService.notEmpty;
    }
    SettingsPage.prototype.onToggleMenu = function () {
        this.menuCtrl.open();
    };
    SettingsPage.prototype.onSend = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Sauvegarde en cours ...'
        });
        loader.present();
        this.bibliothequeService.saveData().then(function () {
            loader.dismiss();
            _this.toastCtrl.create({
                message: 'Données sauvegardées !',
                duration: 3000,
                position: 'bottom'
            }).present();
        }, function (error) {
            loader.dismiss();
            _this.toastCtrl.create({
                message: error,
                duration: 3000,
                position: 'bottom'
            }).present();
        });
    };
    SettingsPage.prototype.onReceive = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Récupération en cours ...'
        });
        loader.present();
        this.bibliothequeService.retrieveData().then(function () {
            _this.bibliothequeService.saveList();
            loader.dismiss();
            _this.toastCtrl.create({
                message: 'Données récupérées !',
                duration: 3000,
                position: 'bottom'
            }).present();
        }, function (error) {
            loader.dismiss();
            _this.toastCtrl.create({
                message: error,
                duration: 3000,
                position: 'bottom'
            }).present();
        });
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\Kossi\Desktop\Nouveau\src\pages\settings\settings.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>settings</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="onToggleMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <button ion-button full (click)="onSend()" [disabled]="!notEmpty">Envoyer vers le backend</button>\n    <button ion-button full (click)="onReceive()">Recevoir du backend</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kossi\Desktop\Nouveau\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__services_bibliotheque_service__["a" /* BibliothequeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthPage = /** @class */ (function () {
    function AuthPage(authService, navParams, menuCtrl, formBuilder, navCtrl) {
        this.authService = authService;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
    }
    AuthPage.prototype.ngOnInit = function () {
        this.mode = this.navParams.get('mode');
        this.initForm();
    };
    AuthPage.prototype.onToggleMenu = function () {
        this.menuCtrl.open();
    };
    AuthPage.prototype.initForm = function () {
        this.authForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email]],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    };
    AuthPage.prototype.onSubmitForm = function () {
        var _this = this;
        console.log('onSubmitForm');
        var email = this.authForm.get('email').value;
        var password = this.authForm.get('password').value;
        if (this.mode === 'new') {
            this.authService.signUpUser(email, password).then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
            }, function (error) {
                _this.errorMessage = error;
            });
        }
        else if (this.mode === 'connect') {
            this.authService.signInUser(email, password).then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
            }, function (error) {
                _this.errorMessage = error;
            });
        }
    };
    AuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-auth',template:/*ion-inline-start:"C:\Users\Kossi\Desktop\Nouveau\src\pages\auth\auth.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="onToggleMenu()">\n        <ion-icon name = "menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title *ngIf = "mode === \'new\'">Nouvel utilisateur</ion-title>\n    <ion-title *ngIf = "mode === \'connect\'">Connexion</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="authForm">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Adresse mail</ion-label>\n        <ion-input type="email" formControlName="email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Mot de passe</ion-label>\n        <ion-input type="password" formControlName="password"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button full (click)="onSubmitForm()">Soumettre</button>\n    <span ion-text color="danger">{{ errorMessage }}</span>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kossi\Desktop\Nouveau\src\pages\auth\auth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AuthPage);
    return AuthPage;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);

var AuthService = /** @class */ (function () {
    function AuthService() {
        var _this = this;
        this.isAuth = false;
        __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.isAuth = true;
            }
            else {
                _this.isAuth = false;
            }
        });
    }
    AuthService.prototype.signUpUser = function (email, password) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().createUserWithEmailAndPassword(email, password).then(function (user) {
                resolve(user);
            }, function (error) {
                reject(error);
            });
        });
    };
    AuthService.prototype.signInUser = function (email, password) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().signInWithEmailAndPassword(email, password).then(function (user) {
                resolve(user);
            }, function (error) {
                reject(error);
            });
        });
    };
    AuthService.prototype.signOut = function () {
        __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().signOut();
    };
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_book_list_book_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cd_list_cd_list__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_bibliotheque_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_lend_book_lend_book__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_lend_cd_lend_cd__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_auth_auth__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(201);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_book_list_book_list__["a" /* BookListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_cd_list_cd_list__["a" /* CdListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_lend_book_lend_book__["a" /* LendBookPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_lend_cd_lend_cd__["a" /* LendCdPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_auth_auth__["a" /* AuthPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_book_list_book_list__["a" /* BookListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_cd_list_cd_list__["a" /* CdListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_lend_book_lend_book__["a" /* LendBookPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_lend_cd_lend_cd__["a" /* LendCdPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_auth_auth__["a" /* AuthPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__services_bibliotheque_service__["a" /* BibliothequeService */],
                __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_auth_auth__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        this.settingsPage = __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */];
        this.authPage = __WEBPACK_IMPORTED_MODULE_6__pages_auth_auth__["a" /* AuthPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            var config = {
                apiKey: "AIzaSyBnDDLPJd7V9Ij-UMdwys0Sjyx-22jX9yQ",
                authDomain: "bibliotheque-00003.firebaseapp.com",
                databaseURL: "https://bibliotheque-00003.firebaseio.com",
                projectId: "bibliotheque-00003",
                storageBucket: "bibliotheque-00003.appspot.com",
                messagingSenderId: "662594419108"
            };
            __WEBPACK_IMPORTED_MODULE_7_firebase__["initializeApp"](config);
            __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                    _this.isAuth = true;
                    _this.content.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */]);
                }
                else {
                    _this.isAuth = false;
                    _this.content.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_auth_auth__["a" /* AuthPage */], { mode: 'connect' });
                }
            });
        });
    }
    MyApp.prototype.onNavigate = function (page, data) {
        this.content.setRoot(page, data ? data : null);
        this.menuCtrl.close();
    };
    MyApp.prototype.onDisconnect = function () {
        __WEBPACK_IMPORTED_MODULE_7_firebase__["auth"]().signOut();
        this.menuCtrl.close;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */])
    ], MyApp.prototype, "content", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Kossi\Desktop\Nouveau\src\app\app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <button ion-item icon-start (click)="onNavigate(settingsPage)" *ngIf="isAuth">\n                <ion-icon name="settings"></ion-icon>\n                réglages\n            </button>\n            <button ion-item icon-start (click)="onNavigate(tabsPage)" *ngIf="isAuth">\n                <ion-icon name="albums"></ion-icon>\n                biblothéque\n            </button>\n            <button ion-item icon-start (click)="onNavigate(authPage, {mode: \'new\'})" *ngIf="!isAuth">\n                <ion-icon name="person-add"></ion-icon>\n                Nouvel utilisateur\n            </button>\n            <button ion-item icon-start (click)="onNavigate(authPage, {mode: \'connect\'})" *ngIf="!isAuth">\n                <ion-icon name="person"></ion-icon>\n                Connexion\n            </button>\n            <button ion-item icon-start (click)="onDisconnect()" *ngIf="isAuth">\n                <ion-icon name="exit"></ion-icon>\n                Déconnexion\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<ion-nav [root]="tabsPage" #content></ion-nav>\n'/*ion-inline-end:"C:\Users\Kossi\Desktop\Nouveau\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BibliothequeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BibliothequeService = /** @class */ (function () {
    function BibliothequeService(storage) {
        this.storage = storage;
        this.books$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.cds$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.booksList = [];
        this.cdsList = [];
        this.documentsList = [this.booksList, this.cdsList];
    }
    BibliothequeService.prototype.emitBooks = function () {
        this.books$.next(this.documentsList[0].slice());
    };
    BibliothequeService.prototype.emitCds = function () {
        this.cds$.next(this.documentsList[1].slice());
    };
    BibliothequeService.prototype.saveData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('documents').set(_this.documentsList).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    BibliothequeService.prototype.retrieveData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('documents').once('value').then(function (data) {
                _this.documentsList = data.val();
                _this.booksList = _this.documentsList[0];
                _this.cdsList = _this.documentsList[1];
                _this.emitCds();
                _this.emitBooks();
                resolve('Données récupérées avec succès !');
            }, function (error) {
                reject(error);
            });
        });
    };
    BibliothequeService.prototype.saveList = function () {
        this.storage.set('documents', this.documentsList);
    };
    BibliothequeService.prototype.fetchList = function () {
        var _this = this;
        this.storage.get('documents').then(function (list) {
            if (list && list.length) {
                _this.documentsList = list.slice();
                _this.booksList = list[0].slice();
                _this.cdsList = list[1].slice();
            }
            _this.emitBooks();
            _this.emitCds();
        });
    };
    BibliothequeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], BibliothequeService);
    return BibliothequeService;
}());

//# sourceMappingURL=bibliotheque.service.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map