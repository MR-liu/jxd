"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function classNames(...args) {
    let result = '';
    for (const arg of args) {
        if (!arg) {
            continue;
        }
        if (typeof arg === 'string' || typeof arg === 'number') {
            result = `${result} ${arg}`;
            continue;
        }
        if (Array.isArray(arg)) {
            result = `${result} ${classNames(...arg)}`;
            continue;
        }
        if (typeof arg === 'object') {
            const keys = Object.keys(arg);
            for (const key of keys) {
                if (arg[key]) {
                    result = `${result} ${key}`;
                }
            }
        }
    }
    return result.trim();
}
exports.default = classNames;
//# sourceMappingURL=classnames.js.map