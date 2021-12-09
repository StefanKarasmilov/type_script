"use strict";
(() => {
    class Mutant {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutant {
    }
    class Villian extends Mutant {
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        static getAvgAge() {
            return this.avgAge;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Captain', 'Scott Lang');
})();
(() => {
    class Avenger {
        constructor(_name, _realName) {
            this._name = _name;
            this._realName = _realName;
            console.log('Constructor Avenger llamado!!');
        }
        getFullName() {
            return `${this._name} - ${this._realName}`;
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get realName() {
            return this._realName;
        }
        set realName(value) {
            this._realName = value;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        getFullnameDesdeXmen() {
            console.log(super.getFullName());
        }
    }
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!this.instance) {
                this.instance = new Apocalipsis('Soy apocalipsis');
            }
            return Apocalipsis.instance;
        }
    }
    const apocalipsis = Apocalipsis.callApocalipsis();
    console.log(apocalipsis);
})();
//# sourceMappingURL=main.js.map