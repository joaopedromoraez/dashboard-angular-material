function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/
  /*! no static exports found */
  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }
    webpackEmptyAsyncContext.keys = function () {
      return [];
    };
    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<router-outlet></router-outlet>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/default/default.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/default/default.component.html ***!
    \**********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsDefaultDefaultComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-header (toggleSideBarForMe)=\"sideBarToggler()\"></app-header>\r\n\r\n<mat-drawer-container>\r\n    <mat-drawer mode=\"side\" [opened]=\"sideBarOpen\">\r\n        <app-sidebar></app-sidebar>\r\n    </mat-drawer>\r\n    <mat-drawer-content>\r\n        <router-outlet></router-outlet>\r\n    </mat-drawer-content>\r\n</mat-drawer-container>\r\n\r\n<app-footer></app-footer>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/dashboard.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/dashboard.component.html ***!
    \**************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div>\r\n    Em breve Line Charts\r\n</div>\r\n\r\n<mat-divider></mat-divider>\r\n\r\n<div>\r\n    <div>Em breve Line Chart</div>\r\n    <div>Em breve Line Chart</div>\r\n    <div>Em breve Line Chart</div>\r\n    <div>Em breve Line Chart</div>\r\n</div>\r\n\r\n<mat-divider></mat-divider>\r\n\r\n<div>\r\n    <div>Em breve Table</div>\r\n    <div>Em breve Pie Chart</div>\r\n\r\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/modules/file-upload/file-upload.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/file-upload/file-upload.component.html ***!
    \******************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesFileUploadFileUploadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-card class=\"uploadfilecontainer mat-elevation-z8\" (click)=\"fileInput.click()\" appDragDrop (onFileDropped)=\"uploadFile($event)\">\r\n    <input hidden type=\"file\" #fileInput (change)=\"uploadFile($event.target.files)\">\r\n    <p class=\"texto\">Arraste & Solte os arquivos ou Click para buscar</p>\r\n</mat-card>\r\n\r\n<mat-card *ngFor=\"let file of files;let i=index\" class=\"itens mat-elevation-z8\">\r\n    {{ file }}\r\n        <button class=\"btn-delete\" mat-icon-button (click)=\"deleteAttachment(i)\">\r\n            <mat-icon color=\"warn\">delete</mat-icon>\r\n        </button>\r\n</mat-card>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/modules/personagens/personagens.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/personagens/personagens.component.html ***!
    \******************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPersonagensPersonagensComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"example-container mat-elevation-z8\">\r\n    <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\r\n        <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n    </div>\r\n    <div class=\"example-table-container\">\r\n        <table mat-table [dataSource]=\"personagens\" class=\"mat-elevation-z8\">\r\n\r\n            <!-- Name Column -->\r\n            <ng-container matColumnDef=\"name\">\r\n                <th mat-header-cell *matHeaderCellDef>Nome</th>\r\n                <td mat-cell *matCellDef=\"let element\">{{element.name}}</td>\r\n            </ng-container>\r\n\r\n            <!-- Name Column -->\r\n            <ng-container matColumnDef=\"height\">\r\n                <th mat-header-cell *matHeaderCellDef>Altura (m)</th>\r\n                <td mat-cell *matCellDef=\"let element\">{{ element.height/100 }}</td>\r\n            </ng-container>\r\n\r\n            <!-- Name Column -->\r\n            <ng-container matColumnDef=\"mass\">\r\n                <th mat-header-cell *matHeaderCellDef>Massa (Kg)</th>\r\n                <td mat-cell *matCellDef=\"let element\">{{ element.mass }}</td>\r\n            </ng-container>\r\n\r\n            <!-- Name Column -->\r\n            <ng-container matColumnDef=\"hair_color\">\r\n                <th mat-header-cell *matHeaderCellDef>Cor de Cabelo</th>\r\n                <td mat-cell *matCellDef=\"let element\">{{ element.hair_color }}</td>\r\n            </ng-container>\r\n\r\n            <!-- Name Column -->\r\n            <ng-container matColumnDef=\"skin_color\">\r\n                <th mat-header-cell *matHeaderCellDef>Cor de Pele</th>\r\n                <td mat-cell *matCellDef=\"let element\">{{ element.skin_color }}</td>\r\n            </ng-container>\r\n\r\n            <!-- Name Column -->\r\n            <ng-container matColumnDef=\"eye_color\">\r\n                <th mat-header-cell *matHeaderCellDef>Cor de Olho</th>\r\n                <td mat-cell *matCellDef=\"let element\">{{ element.eye_color }}</td>\r\n            </ng-container>\r\n\r\n            <!-- Name Column -->\r\n            <ng-container matColumnDef=\"birth_year\">\r\n                <th mat-header-cell *matHeaderCellDef>Aniversario</th>\r\n                <td mat-cell *matCellDef=\"let element\">{{ element.birth_year }}</td>\r\n            </ng-container>\r\n\r\n            <!-- Name Column -->\r\n            <ng-container matColumnDef=\"gender\">\r\n                <th mat-header-cell *matHeaderCellDef>Genero</th>\r\n                <td mat-cell *matCellDef=\"let element\">{{ element.gender }}</td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n    </div>\r\n    <div>\r\n        <mat-paginator [hidePageSize]=\"true\" [length]=\"total_personagens\" [pageIndex]=0 [pageSize]=\"10\"\r\n            [pageSizeOptions]=\"[5, 10, 20, 50]\" [showFirstLastButtons]=\"true\" (page)=\"page($event)\"></mat-paginator>\r\n    </div>\r\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/posts.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/posts.component.html ***!
    \******************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPostsPostsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<p>posts works!</p>\r\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html ***!
    \******************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-divider></mat-divider>\r\n<footer>\r\n    &copy; Todos os Direitos Reservados 2020\r\n</footer>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html ***!
    \******************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\">\r\n    <mat-toolbar-row>\r\n        <button mat-icon-button (click)=\"toggleSideBar()\">\r\n            <mat-icon>menu</mat-icon>\r\n        </button>\r\n\r\n        <span>LOGO</span>\r\n\r\n        <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"flex-end\">\r\n            <ul fxLayout=\"row\" fxLayoutGap=\"20px\">\r\n                <li>\r\n                    <button mat-icon-button>\r\n                        <mat-icon>settings</mat-icon>\r\n                    </button>\r\n                </li>\r\n                <li>\r\n                    <button mat-icon-button>\r\n                        <mat-icon>help_outline</mat-icon>\r\n                    </button>\r\n                </li>\r\n                <li>\r\n                    <button mat-button [matMenuTriggerFor]=\"menu\">\r\n                        <mat-icon>person_outline</mat-icon>\r\n                    </button>\r\n                    <mat-menu #menu=\"matMenu\">\r\n                      <button mat-menu-item>\r\n                          <mat-icon>exit_to_app</mat-icon>\r\n                          Sign out\r\n                      </button>\r\n                    </mat-menu>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </mat-toolbar-row>\r\n</mat-toolbar>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/sidebar/sidebar.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/sidebar/sidebar.component.html ***!
    \********************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-nav-list>\r\n    <div class=\"profile-card\">\r\n        <div class=\"header\">\r\n            <h2>João Pedro Moraes</h2>\r\n            <h4>Joaopedromoraes@outlook.com</h4>\r\n        </div>\r\n        <img src=\"https://avatars3.githubusercontent.com/u/46731099?s=460&v=4\" alt=\"João Pedro Moraes\">\r\n    </div>\r\n\r\n    <mat-divider></mat-divider>\r\n\r\n    <h2 matSubheader>Paginas</h2>\r\n\r\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/\">\r\n        <mat-icon>dashboard</mat-icon> Dashboard\r\n    </a>\r\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/posts\">\r\n        <mat-icon>post_add</mat-icon> Posts\r\n    </a>\r\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/personagens\">\r\n        <mat-icon>perm_identity</mat-icon> Personagens\r\n    </a>\r\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/file-upload\">\r\n        <mat-icon>cloud_upload</mat-icon> File Upload\r\n    </a>\r\n    <mat-divider></mat-divider>\r\n\r\n    <h2 matSubheader>Ferramentas</h2>\r\n\r\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/contacts\">\r\n        <mat-icon>import_contacts</mat-icon>\r\n        Contatos\r\n    </a>\r\n\r\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/contacts\">\r\n        <mat-icon>contact_phone</mat-icon>\r\n        Lider\r\n    </a>\r\n\r\n</mat-nav-list>";

    /***/
  },

  /***/"./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/
  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
      return _extendStatics(d, b);
    };
    function __extends(d, b) {
      _extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return _assign.apply(this, arguments);
    };
    function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }
    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }
    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
        f,
        y,
        t,
        g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }
    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }
    function __exportStar(m, exports) {
      for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
        r,
        ar = [],
        e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    }
    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
      return ar;
    }
    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
      return r;
    }
    ;
    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;
      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }
    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }
    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
        i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }
    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    }
    ;
    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result["default"] = mod;
      return result;
    }
    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }
      return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }
      privateMap.set(receiver, value);
      return value;
    }

    /***/
  },

  /***/"./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/
  /*! exports provided: AppRoutingModule */
  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./layouts/default/default.component */"./src/app/layouts/default/default.component.ts");
    /* harmony import */
    var _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./modules/dashboard/dashboard.component */"./src/app/modules/dashboard/dashboard.component.ts");
    /* harmony import */
    var _modules_posts_posts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./modules/posts/posts.component */"./src/app/modules/posts/posts.component.ts");
    /* harmony import */
    var _modules_personagens_personagens_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./modules/personagens/personagens.component */"./src/app/modules/personagens/personagens.component.ts");
    /* harmony import */
    var _modules_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./modules/file-upload/file-upload.component */"./src/app/modules/file-upload/file-upload.component.ts");
    var routes = [{
      path: '',
      component: _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_3__["DefaultComponent"],
      children: [{
        path: '',
        component: _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
      }, {
        path: 'posts',
        component: _modules_posts_posts_component__WEBPACK_IMPORTED_MODULE_5__["PostsComponent"]
      }, {
        path: 'personagens',
        component: _modules_personagens_personagens_component__WEBPACK_IMPORTED_MODULE_6__["PersonagensComponent"]
      }, {
        path: 'file-upload',
        component: _modules_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_7__["FileUploadComponent"]
      }]
    }];
    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);

    /***/
  },

  /***/"./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/
  /*! exports provided: default */
  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";

    /***/
  },

  /***/"./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent */
  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);
      this.title = 'dashboard-angular-material';
    });
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./app.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./app.component.scss */"./src/app/app.component.scss"))["default"]]
    })], AppComponent);

    /***/
  },

  /***/"./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /*! exports provided: AppModule */
  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app-routing.module */"./src/app/app-routing.module.ts");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/platform-browser/animations */"./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */
    var _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./layouts/default/default.module */"./src/app/layouts/default/default.module.ts");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_6__["DefaultModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);

    /***/
  },

  /***/"./src/app/layouts/default/default.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/layouts/default/default.component.scss ***!
    \********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppLayoutsDefaultDefaultComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ":host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\nmat-drawer {\n  width: 350px;\n}\n\nmat-drawer-container {\n  height: 100%;\n}\n\nmat-drawer-content {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9kZWZhdWx0L0M6XFxVc2Vyc1xcam9hb3BcXFByb2pldG9zXFxQRVNTT0FMXFxkYXNoYm9hcmQtYW5ndWxhci1tYXRlcmlhbC9zcmNcXGFwcFxcbGF5b3V0c1xcZGVmYXVsdFxcZGVmYXVsdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0cy9kZWZhdWx0L2RlZmF1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL2RlZmF1bHQvZGVmYXVsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5tYXQtZHJhd2VyIHtcclxuICAgIHdpZHRoOiAzNTBweDtcclxufVxyXG5cclxubWF0LWRyYXdlci1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5tYXQtZHJhd2VyLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5tYXQtZHJhd2VyIHtcbiAgd2lkdGg6IDM1MHB4O1xufVxuXG5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxubWF0LWRyYXdlci1jb250ZW50IHtcbiAgcGFkZGluZzogMjBweDtcbn0iXX0= */";

    /***/
  },

  /***/"./src/app/layouts/default/default.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/layouts/default/default.component.ts ***!
    \******************************************************/
  /*! exports provided: DefaultComponent */
  /***/
  function srcAppLayoutsDefaultDefaultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DefaultComponent", function () {
      return DefaultComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var DefaultComponent = /*#__PURE__*/function () {
      function DefaultComponent() {
        _classCallCheck(this, DefaultComponent);
        this.sideBarOpen = true;
      }
      _createClass(DefaultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sideBarToggler",
        value: function sideBarToggler() {
          this.sideBarOpen = !this.sideBarOpen;
        }
      }]);
      return DefaultComponent;
    }();
    DefaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-default',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./default.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/default/default.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./default.component.scss */"./src/app/layouts/default/default.component.scss"))["default"]]
    })], DefaultComponent);

    /***/
  },

  /***/"./src/app/layouts/default/default.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/layouts/default/default.module.ts ***!
    \***************************************************/
  /*! exports provided: DefaultModule */
  /***/
  function srcAppLayoutsDefaultDefaultModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DefaultModule", function () {
      return DefaultModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./default.component */"./src/app/layouts/default/default.component.ts");
    /* harmony import */
    var src_app_modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! src/app/modules/dashboard/dashboard.component */"./src/app/modules/dashboard/dashboard.component.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var src_app_modules_posts_posts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! src/app/modules/posts/posts.component */"./src/app/modules/posts/posts.component.ts");
    /* harmony import */
    var src_app_modules_personagens_personagens_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! src/app/modules/personagens/personagens.component */"./src/app/modules/personagens/personagens.component.ts");
    /* harmony import */
    var src_app_modules_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! src/app/modules/file-upload/file-upload.component */"./src/app/modules/file-upload/file-upload.component.ts");
    /* harmony import */
    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! src/app/shared/shared.module */"./src/app/shared/shared.module.ts");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */
    var src_app_services_star_wars_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! src/app/services/star-wars-api.service */"./src/app/services/star-wars-api.service.ts");
    /* harmony import */
    var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! @angular/material/table */"./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */
    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! @angular/material/paginator */"./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */
    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! @angular/material/progress-spinner */"./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */
    var src_app_modules_file_upload_drag_drop_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! src/app/modules/file-upload/drag-drop.directive */"./src/app/modules/file-upload/drag-drop.directive.ts");
    /* harmony import */
    var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! @angular/material/card */"./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */
    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! @angular/material/icon */"./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */
    var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! @angular/material/button */"./node_modules/@angular/material/esm2015/button.js");
    var DefaultModule = /*#__PURE__*/_createClass(function DefaultModule() {
      _classCallCheck(this, DefaultModule);
    });
    DefaultModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_default_component__WEBPACK_IMPORTED_MODULE_3__["DefaultComponent"], src_app_modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], src_app_modules_posts_posts_component__WEBPACK_IMPORTED_MODULE_6__["PostsComponent"], src_app_modules_personagens_personagens_component__WEBPACK_IMPORTED_MODULE_7__["PersonagensComponent"], src_app_modules_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_8__["FileUploadComponent"], src_app_modules_file_upload_drag_drop_directive__WEBPACK_IMPORTED_MODULE_15__["DragDropDirective"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"]],
      providers: [src_app_services_star_wars_api_service__WEBPACK_IMPORTED_MODULE_11__["StarWarsApiService"]]
    })], DefaultModule);

    /***/
  },

  /***/"./src/app/modules/dashboard/dashboard.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/modules/dashboard/dashboard.component.scss ***!
    \************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppModulesDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */";

    /***/
  },

  /***/"./src/app/modules/dashboard/dashboard.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/modules/dashboard/dashboard.component.ts ***!
    \**********************************************************/
  /*! exports provided: DashboardComponent */
  /***/
  function srcAppModulesDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }
      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return DashboardComponent;
    }();
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./dashboard.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./dashboard.component.scss */"./src/app/modules/dashboard/dashboard.component.scss"))["default"]]
    })], DashboardComponent);

    /***/
  },

  /***/"./src/app/modules/file-upload/drag-drop.directive.ts":
  /*!************************************************************!*\
    !*** ./src/app/modules/file-upload/drag-drop.directive.ts ***!
    \************************************************************/
  /*! exports provided: DragDropDirective */
  /***/
  function srcAppModulesFileUploadDragDropDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DragDropDirective", function () {
      return DragDropDirective;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var DragDropDirective = /*#__PURE__*/function () {
      function DragDropDirective() {
        _classCallCheck(this, DragDropDirective);
        this.onFileDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.background = '#f5fcff';
        this.opacity = '1';
      }
      //Dragover listener
      _createClass(DragDropDirective, [{
        key: "onDragOver",
        value: function onDragOver(evt) {
          evt.preventDefault();
          evt.stopPropagation();
          this.background = '#9ecbec';
          this.opacity = '0.8';
        }
        //Dragleave listener
      }, {
        key: "onDragLeave",
        value: function onDragLeave(evt) {
          evt.preventDefault();
          evt.stopPropagation();
          this.background = '#f5fcff';
          this.opacity = '1';
        }
        //Drop listener
      }, {
        key: "ondrop",
        value: function ondrop(evt) {
          evt.preventDefault();
          evt.stopPropagation();
          this.background = '#f5fcff';
          this.opacity = '1';
          var files = evt.dataTransfer.files;
          if (files.length > 0) {
            this.onFileDropped.emit(files);
          }
        }
      }]);
      return DragDropDirective;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DragDropDirective.prototype, "onFileDropped", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.background-color')], DragDropDirective.prototype, "background", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.opacity')], DragDropDirective.prototype, "opacity", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragover', ['$event'])], DragDropDirective.prototype, "onDragOver", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragleave', ['$event'])], DragDropDirective.prototype, "onDragLeave", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event'])], DragDropDirective.prototype, "ondrop", null);
    DragDropDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appDragDrop]'
    })], DragDropDirective);

    /***/
  },

  /***/"./src/app/modules/file-upload/file-upload.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/modules/file-upload/file-upload.component.scss ***!
    \****************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppModulesFileUploadFileUploadComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".uploadfilecontainer {\n  background-image: url('cloud_upload-24px.svg');\n  background-repeat: no-repeat;\n  background-size: 100px;\n  background-position: center;\n  height: 200px;\n  margin: 20px auto;\n  border: 5px dotted #3F51B5;\n  border-radius: 10px;\n}\n\n.uploadfilecontainer:hover {\n  cursor: pointer;\n  background-color: #9ecbec !important;\n  opacity: 0.8;\n}\n\n.itens {\n  margin-top: 10px;\n}\n\n.btn-delete {\n  position: absolute;\n  right: 5px;\n  bottom: 7px;\n}\n\n.texto {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9maWxlLXVwbG9hZC9DOlxcVXNlcnNcXGpvYW9wXFxQcm9qZXRvc1xcUEVTU09BTFxcZGFzaGJvYXJkLWFuZ3VsYXItbWF0ZXJpYWwvc3JjXFxhcHBcXG1vZHVsZXNcXGZpbGUtdXBsb2FkXFxmaWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFO0VBQ0ksZ0JBQUE7QUNDTjs7QURFRTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNDTjs7QURFRTtFQUNJLGtCQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwbG9hZGZpbGVjb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2Nsb3VkX3VwbG9hZC0yNHB4LnN2Z1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgYm9yZGVyOiA1cHggZG90dGVkICMzRjUxQjU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAudXBsb2FkZmlsZWNvbnRhaW5lcjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWVjYmVjICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG5cclxuICAuaXRlbnMge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1kZWxldGUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgIGJvdHRvbTogN3B4O1xyXG4gIH1cclxuXHJcbiAgLnRleHRvIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH0iLCIudXBsb2FkZmlsZWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9jbG91ZF91cGxvYWQtMjRweC5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGJvcmRlcjogNXB4IGRvdHRlZCAjM0Y1MUI1O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4udXBsb2FkZmlsZWNvbnRhaW5lcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzllY2JlYyAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5pdGVucyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5idG4tZGVsZXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICBib3R0b206IDdweDtcbn1cblxuLnRleHRvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";

    /***/
  },

  /***/"./src/app/modules/file-upload/file-upload.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/modules/file-upload/file-upload.component.ts ***!
    \**************************************************************/
  /*! exports provided: FileUploadComponent */
  /***/
  function srcAppModulesFileUploadFileUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function () {
      return FileUploadComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var FileUploadComponent = /*#__PURE__*/function () {
      function FileUploadComponent() {
        _classCallCheck(this, FileUploadComponent);
        this.files = [];
      }
      _createClass(FileUploadComponent, [{
        key: "uploadFile",
        value: function uploadFile(event) {
          for (var index = 0; index < event.length; index++) {
            var element = event[index];
            this.files.push(element.name);
          }
        }
      }, {
        key: "deleteAttachment",
        value: function deleteAttachment(index) {
          this.files.splice(index, 1);
        }
      }]);
      return FileUploadComponent;
    }();
    FileUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-file-upload',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./file-upload.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/modules/file-upload/file-upload.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./file-upload.component.scss */"./src/app/modules/file-upload/file-upload.component.scss"))["default"]]
    })], FileUploadComponent);

    /***/
  },

  /***/"./src/app/modules/personagens/personagens.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/modules/personagens/personagens.component.scss ***!
    \****************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppModulesPersonagensPersonagensComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n\n.example-container {\n  position: relative;\n  min-height: 200px;\n}\n\n.example-loading-shade {\n  position: absolute;\n  top: 56px;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wZXJzb25hZ2Vucy9DOlxcVXNlcnNcXGpvYW9wXFxQcm9qZXRvc1xcUEVTU09BTFxcZGFzaGJvYXJkLWFuZ3VsYXItbWF0ZXJpYWwvc3JjXFxhcHBcXG1vZHVsZXNcXHBlcnNvbmFnZW5zXFxwZXJzb25hZ2Vucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wZXJzb25hZ2Vucy9wZXJzb25hZ2Vucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BlcnNvbmFnZW5zL3BlcnNvbmFnZW5zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1sb2FkaW5nLXNoYWRlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTZweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9IiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbn1cblxuLmV4YW1wbGUtbG9hZGluZy1zaGFkZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1NnB4O1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */";

    /***/
  },

  /***/"./src/app/modules/personagens/personagens.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/modules/personagens/personagens.component.ts ***!
    \**************************************************************/
  /*! exports provided: PersonagensComponent */
  /***/
  function srcAppModulesPersonagensPersonagensComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PersonagensComponent", function () {
      return PersonagensComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var src_app_services_star_wars_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/services/star-wars-api.service */"./src/app/services/star-wars-api.service.ts");
    /* harmony import */
    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/material/table */"./node_modules/@angular/material/esm2015/table.js");
    var PersonagensComponent = /*#__PURE__*/function () {
      function PersonagensComponent(starWarsApiService) {
        _classCallCheck(this, PersonagensComponent);
        this.starWarsApiService = starWarsApiService;
        this.isLoadingResults = false;
        this.personagens = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.displayedColumns = ['name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year', 'gender'];
      }
      _createClass(PersonagensComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.listarPersonagens(1);
        }
      }, {
        key: "page",
        value: function page(event) {
          console.log(event);
          this.listarPersonagens(event.pageIndex + 1);
        }
      }, {
        key: "listarPersonagens",
        value: function listarPersonagens(pagina) {
          var _this = this;
          this.isLoadingResults = true;
          this.starWarsApiService.listarPersonagens(pagina).subscribe(function (resposta) {
            _this.personagens.data = resposta["results"];
            _this.total_personagens = resposta["count"];
            _this.isLoadingResults = false;
            console.log(_this.personagens);
          }, function (error) {
            _this.isLoadingResults = false;
            switch (error.status) {
              case 401:
                alert("".concat(error.status, ": ").concat(error.error));
                break;
              case 402:
                alert("".concat(error.status, ": ").concat(error.error));
                break;
              case 403:
                alert("".concat(error.status, ": ").concat(error.error));
                break;
              case 404:
                alert("".concat(error.status, ": ").concat(error.error));
                break;
              case 406:
                alert("".concat(error.status, ": ").concat(error.error));
                break;
              case 422:
                alert("".concat(error.status, ": ").concat(error.error));
                break;
              case 429:
                alert("".concat(error.status, ": ").concat(error.error));
                break;
              case 400:
                alert("".concat(error.status, ": ").concat(error.error));
                break;
              case 500:
                alert("".concat(error.status, ": ").concat(error.error));
                break;
            }
          });
        }
      }]);
      return PersonagensComponent;
    }();
    PersonagensComponent.ctorParameters = function () {
      return [{
        type: src_app_services_star_wars_api_service__WEBPACK_IMPORTED_MODULE_2__["StarWarsApiService"]
      }];
    };
    PersonagensComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-personagens',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./personagens.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/modules/personagens/personagens.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./personagens.component.scss */"./src/app/modules/personagens/personagens.component.scss"))["default"]]
    })], PersonagensComponent);

    /***/
  },

  /***/"./src/app/modules/posts/posts.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/modules/posts/posts.component.scss ***!
    \****************************************************/
  /*! exports provided: default */
  /***/
  function srcAppModulesPostsPostsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdHMvcG9zdHMuY29tcG9uZW50LnNjc3MifQ== */";

    /***/
  },

  /***/"./src/app/modules/posts/posts.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/modules/posts/posts.component.ts ***!
    \**************************************************/
  /*! exports provided: PostsComponent */
  /***/
  function srcAppModulesPostsPostsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PostsComponent", function () {
      return PostsComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var PostsComponent = /*#__PURE__*/function () {
      function PostsComponent() {
        _classCallCheck(this, PostsComponent);
      }
      _createClass(PostsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return PostsComponent;
    }();
    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-posts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./posts.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/modules/posts/posts.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./posts.component.scss */"./src/app/modules/posts/posts.component.scss"))["default"]]
    })], PostsComponent);

    /***/
  },

  /***/"./src/app/services/star-wars-api.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/star-wars-api.service.ts ***!
    \***************************************************/
  /*! exports provided: StarWarsApiService */
  /***/
  function srcAppServicesStarWarsApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "StarWarsApiService", function () {
      return StarWarsApiService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    var StarWarsApiService = /*#__PURE__*/function () {
      function StarWarsApiService(http) {
        _classCallCheck(this, StarWarsApiService);
        this.http = http;
        this.urlApi = 'https://swapi.dev/api/';
      }
      _createClass(StarWarsApiService, [{
        key: "listarPersonagens",
        value: function listarPersonagens(page) {
          return this.http.get("".concat(this.urlApi, "people/?page=").concat(page));
        }
      }]);
      return StarWarsApiService;
    }();
    StarWarsApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };
    StarWarsApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StarWarsApiService);

    /***/
  },

  /***/"./src/app/shared/components/footer/footer.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/footer/footer.component.scss ***!
    \****************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppSharedComponentsFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "footer {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL0M6XFxVc2Vyc1xcam9hb3BcXFByb2pldG9zXFxQRVNTT0FMXFxkYXNoYm9hcmQtYW5ndWxhci1tYXRlcmlhbC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufSIsImZvb3RlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG59Il19 */";

    /***/
  },

  /***/"./src/app/shared/components/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/footer/footer.component.ts ***!
    \**************************************************************/
  /*! exports provided: FooterComponent */
  /***/
  function srcAppSharedComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }
      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return FooterComponent;
    }();
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./footer.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./footer.component.scss */"./src/app/shared/components/footer/footer.component.scss"))["default"]]
    })], FooterComponent);

    /***/
  },

  /***/"./src/app/shared/components/header/header.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/header/header.component.scss ***!
    \****************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppSharedComponentsHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "ul li {\n  list-style: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL0M6XFxVc2Vyc1xcam9hb3BcXFByb2pldG9zXFxQRVNTT0FMXFxkYXNoYm9hcmQtYW5ndWxhci1tYXRlcmlhbC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwgbGkge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufSIsInVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn0iXX0= */";

    /***/
  },

  /***/"./src/app/shared/components/header/header.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/header/header.component.ts ***!
    \**************************************************************/
  /*! exports provided: HeaderComponent */
  /***/
  function srcAppSharedComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
        this.toggleSideBarForMe = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleSideBar",
        value: function toggleSideBar() {
          this.toggleSideBarForMe.emit();
        }
      }]);
      return HeaderComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], HeaderComponent.prototype, "toggleSideBarForMe", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./header.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./header.component.scss */"./src/app/shared/components/header/header.component.scss"))["default"]]
    })], HeaderComponent);

    /***/
  },

  /***/"./src/app/shared/components/sidebar/sidebar.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/shared/components/sidebar/sidebar.component.scss ***!
    \******************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppSharedComponentsSidebarSidebarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ":host .mat-icon {\n  vertical-align: middle;\n  margin-right: 20px;\n}\n:host .profile-card {\n  text-align: center;\n  padding: 0 20px 20px 20px;\n}\n:host .profile-card img {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZWJhci9DOlxcVXNlcnNcXGpvYW9wXFxQcm9qZXRvc1xcUEVTU09BTFxcZGFzaGJvYXJkLWFuZ3VsYXItbWF0ZXJpYWwvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcc2lkZWJhclxcc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtBQ0FSO0FERUk7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FDQVI7QURDUTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ1oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICAubWF0LWljb24ge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLnByb2ZpbGUtY2FyZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweCAyMHB4IDIwcHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIjpob3N0IC5tYXQtaWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbjpob3N0IC5wcm9maWxlLWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMjBweCAyMHB4IDIwcHg7XG59XG46aG9zdCAucHJvZmlsZS1jYXJkIGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */";

    /***/
  },

  /***/"./src/app/shared/components/sidebar/sidebar.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
    \****************************************************************/
  /*! exports provided: SidebarComponent */
  /***/
  function srcAppSharedComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent() {
        _classCallCheck(this, SidebarComponent);
      }
      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return SidebarComponent;
    }();
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./sidebar.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/sidebar/sidebar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./sidebar.component.scss */"./src/app/shared/components/sidebar/sidebar.component.scss"))["default"]]
    })], SidebarComponent);

    /***/
  },

  /***/"./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/
  /*! exports provided: SharedModule */
  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./components/header/header.component */"./src/app/shared/components/header/header.component.ts");
    /* harmony import */
    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./components/footer/footer.component */"./src/app/shared/components/footer/footer.component.ts");
    /* harmony import */
    var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./components/sidebar/sidebar.component */"./src/app/shared/components/sidebar/sidebar.component.ts");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */
    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/flex-layout */"./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var SharedModule = /*#__PURE__*/_createClass(function SharedModule() {
      _classCallCheck(this, SharedModule);
    });
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]],
      exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]]
    })], SharedModule);

    /***/
  },

  /***/"./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/
  /*! exports provided: environment */
  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.

    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/"./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! hammerjs */"./node_modules/hammerjs/hammer.js");
    /* harmony import */
    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/platform-browser-dynamic */"./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./app/app.module */"./src/app/app.module.ts");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./environments/environment */"./src/environments/environment.ts");
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });

    /***/
  },

  /***/0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__( /*! C:\Users\joaop\Projetos\PESSOAL\dashboard-angular-material\src\main.ts */"./src/main.ts");

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map