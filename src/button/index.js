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
require("./style");
var Button = function (props) {
    var offsetTop = props.offsetTop;
    var _a = react_1.useState('hello world'), name = _a[0], setName = _a[1];
    react_1.useEffect(function () {
        setName(offsetTop);
    }, []);
    return (React.createElement("div", { className: 'mat-name' },
        React.createElement("button", { className: 'mat-btn' },
            React.createElement("span", null, name))));
};
exports.default = Button;
//# sourceMappingURL=index.js.map