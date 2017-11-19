"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var elementOf = function (element) { return PropTypes.shape({ type: PropTypes.oneOf([element]) }); };
exports.default = { elementOf: elementOf };
