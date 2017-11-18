"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
exports.default = function (element) { return PropTypes.shape({ type: PropTypes.oneOf([element]) }); };
