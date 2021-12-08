"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.'
    };
    const { nick, ironman } = avengers;
    console.log(nick);
    console.log(ironman);
    const printAvengers = (_a) => {
        var all = __rest(_a, []);
        console.log(all);
    };
    const avengersArr = ['Cap. America', 'Ironman', 'Hulk'];
    const [, ironmanar] = avengersArr;
    console.log(ironmanar);
})();
(() => {
    const ironman = {
        name: 'Ironman',
        weapon: 'Traje'
    };
    const captainAmerica = {
        name: 'Capitan América',
        weapon: 'Escudo'
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir'
    };
    const avengers = [ironman, captainAmerica, thor];
    for (const avenger of avengers) {
        console.log(avenger);
    }
    for (const avengersKey in avengers) {
        console.log(avengers[avengersKey].name);
    }
})();
(() => {
    const a = 'Stefan';
})();
//# sourceMappingURL=main.js.map