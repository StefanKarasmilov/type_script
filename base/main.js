"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return text.length > 3;
    };
    Validations.validateDate = (fecha) => {
        return isNaN(fecha.valueOf());
    };
})(Validations || (Validations = {}));
//# sourceMappingURL=main.js.map