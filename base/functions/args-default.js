"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        return `${firstName} ${lastName !== null && lastName !== void 0 ? lastName : ''}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
