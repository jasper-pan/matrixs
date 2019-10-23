"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("react");
var Alert = function () {
    var _a = react_1.useState('hello world'), name = _a[0], setName = _a[1];
    react_1.useEffect(function () {
        setName('ohahahah');
    }, []);
    return (React.createElement("div", null, name));
};
exports.default = Alert;
//# sourceMappingURL=index.js.map