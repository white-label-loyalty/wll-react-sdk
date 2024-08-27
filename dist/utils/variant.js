"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createVariantSystem = createVariantSystem;
function createVariantSystem(baseStyle, variantStyles) {
  return function (theme, variant) {
    var styles = variantStyles(theme);
    return [baseStyle, styles[variant]];
  };
}