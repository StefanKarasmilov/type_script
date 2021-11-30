"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName !== null && lastName !== void 0 ? lastName : ''}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
