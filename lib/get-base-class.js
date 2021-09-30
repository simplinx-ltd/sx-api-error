"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBaseClassNames = void 0;
function getBaseClassNames(o) {
    const list = [];
    if (o instanceof Function) {
        let baseClass = o;
        let remainingTryCount = 20;
        while (baseClass && remainingTryCount--) {
            list.push(baseClass.name);
            const newBaseClass = Object.getPrototypeOf(baseClass);
            if (newBaseClass && newBaseClass !== Object && newBaseClass.name) {
                baseClass = newBaseClass;
            }
            else {
                break;
            }
        }
        return list;
    }
    return null;
}
exports.getBaseClassNames = getBaseClassNames;
