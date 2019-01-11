"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import IconSizeType from './types/icon-sizes';
// import { IconType } from './types/icons';
const classnames_1 = require("classnames");
const react_1 = require("react");
const icon_scss_1 = require("./style/icon.scss");
const lightStyle = { color: 'white' };
exports.Icon = (_a) => {
    var { type, className, onClick: handleClick, onDark, size, style } = _a, attributes = __rest(_a, ["type", "className", "onClick", "onDark", "size", "style"]);
    let iconStyle;
    if (onDark) {
        iconStyle = Object.assign({}, style, lightStyle);
    }
    else {
        iconStyle = style;
    }
    return (react_1.default.createElement("i", Object.assign({ className: classnames_1.default(className, 'sg-icon', `sg-icon-${type}`, icon_scss_1.default['sg-icon'], icon_scss_1.default[`sg-icon-${type}`], {
            [icon_scss_1.default[`is-size-${size}`]]: size,
        }), onClick: handleClick, style: Object.keys(iconStyle).length ? iconStyle : null }, attributes)));
};
exports.Icon.defaultProps = {
    className: '',
    onDark: false,
    style: {},
};
exports.default = exports.Icon;
//# sourceMappingURL=icon.js.map