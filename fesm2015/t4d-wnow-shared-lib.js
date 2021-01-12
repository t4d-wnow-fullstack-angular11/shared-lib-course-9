import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

const confirmValue = (firstControlName, secondControlName) => (formGroup) => {
    const firstControl = formGroup.get(firstControlName);
    const secondControl = formGroup.get(secondControlName);
    if ((firstControl === null || firstControl === void 0 ? void 0 : firstControl.value) !== (secondControl === null || secondControl === void 0 ? void 0 : secondControl.value)) {
        return {
            confirmValue: {
                firstControlName,
                firstControlValue: firstControl === null || firstControl === void 0 ? void 0 : firstControl.value,
                secondControlName,
                secondControlValue: secondControl === null || secondControl === void 0 ? void 0 : secondControl.value,
            }
        };
    }
    return null;
};

class SetErrorMessage {
    constructor(errorMessage) {
        this.errorMessage = errorMessage;
    }
}
SetErrorMessage.type = '[App] Set Error Message';
class ClearErrorMessage {
}
ClearErrorMessage.type = '[App] Clear Error Message';

class SharedLibService {
    constructor() { }
}
SharedLibService.ɵprov = ɵɵdefineInjectable({ factory: function SharedLibService_Factory() { return new SharedLibService(); }, token: SharedLibService, providedIn: "root" });
SharedLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
SharedLibService.ctorParameters = () => [];

class SharedLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
SharedLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-shared-lib',
                template: `
    <p>
      shared-lib works!
    </p>
  `
            },] }
];
SharedLibComponent.ctorParameters = () => [];

class SharedLibModule {
}
SharedLibModule.decorators = [
    { type: NgModule, args: [{
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

export { ClearErrorMessage, SetErrorMessage, SharedLibComponent, SharedLibModule, SharedLibService, confirmValue };
//# sourceMappingURL=t4d-wnow-shared-lib.js.map
