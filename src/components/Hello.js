"use strict";
// src/components/Hello.tsx
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
function Hello({ name, enthusiasmLevel = 1 }) {
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }
    return (React.createElement("div", { className: "hello" },
        React.createElement("div", { className: "greeting" },
            "Hello ",
            name + getExclamationMarks(enthusiasmLevel))));
}
exports.default = Hello;
// helpers
function getExclamationMarks(numChars) {
    return Array(numChars + 1).join('!');
}
//# sourceMappingURL=Hello.js.map