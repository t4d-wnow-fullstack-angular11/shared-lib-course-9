(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@t4d-wnow/shared-lib', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['t4d-wnow'] = global['t4d-wnow'] || {}, global['t4d-wnow']['shared-lib'] = {}), global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var confirmValue = function (firstControlName, secondControlName) { return function (formGroup) {
        var firstControl = formGroup.get(firstControlName);
        var secondControl = formGroup.get(secondControlName);
        if ((firstControl === null || firstControl === void 0 ? void 0 : firstControl.value) !== (secondControl === null || secondControl === void 0 ? void 0 : secondControl.value)) {
            return {
                confirmValue: {
                    firstControlName: firstControlName,
                    firstControlValue: firstControl === null || firstControl === void 0 ? void 0 : firstControl.value,
                    secondControlName: secondControlName,
                    secondControlValue: secondControl === null || secondControl === void 0 ? void 0 : secondControl.value,
                }
            };
        }
        return null;
    }; };

    var SetErrorMessage = /** @class */ (function () {
        function SetErrorMessage(errorMessage) {
            this.errorMessage = errorMessage;
        }
        return SetErrorMessage;
    }());
    SetErrorMessage.type = '[App] Set Error Message';
    var ClearErrorMessage = /** @class */ (function () {
        function ClearErrorMessage() {
        }
        return ClearErrorMessage;
    }());
    ClearErrorMessage.type = '[App] Clear Error Message';

    var SharedLibService = /** @class */ (function () {
        function SharedLibService() {
        }
        return SharedLibService;
    }());
    SharedLibService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SharedLibService_Factory() { return new SharedLibService(); }, token: SharedLibService, providedIn: "root" });
    SharedLibService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    SharedLibService.ctorParameters = function () { return []; };

    var SharedLibComponent = /** @class */ (function () {
        function SharedLibComponent() {
        }
        SharedLibComponent.prototype.ngOnInit = function () {
        };
        return SharedLibComponent;
    }());
    SharedLibComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-shared-lib',
                    template: "\n    <p>\n      shared-lib works!\n    </p>\n  "
                },] }
    ];
    SharedLibComponent.ctorParameters = function () { return []; };

    var SharedLibModule = /** @class */ (function () {
        function SharedLibModule() {
        }
        return SharedLibModule;
    }());
    SharedLibModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [SharedLibComponent],
                    imports: [],
                    exports: [SharedLibComponent]
                },] }
    ];

    /*
     * Public API Surface of shared-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ClearErrorMessage = ClearErrorMessage;
    exports.SetErrorMessage = SetErrorMessage;
    exports.SharedLibComponent = SharedLibComponent;
    exports.SharedLibModule = SharedLibModule;
    exports.SharedLibService = SharedLibService;
    exports.confirmValue = confirmValue;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=t4d-wnow-shared-lib.umd.js.map
