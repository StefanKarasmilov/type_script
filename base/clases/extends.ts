(() => {

  class Avenger {
    constructor(
      private _name: string,
      private _realName: string
    ) {
      console.log('Constructor Avenger llamado!!')
    }

    protected getFullName() {
      return `${this._name} - ${this._realName}`
    }


    get name(): string {
      return this._name
    }

    set name(value: string) {
      this._name = value
    }

    get realName(): string {
      return this._realName
    }

    set realName(value: string) {
      this._realName = value
    }
  }

  class Xmen extends Avenger {
    constructor(
      name: string,
      realName: string,
      public isMutant: boolean
    ) {
      super(name, realName)
    }

    getFullnameDesdeXmen() {
      console.log(super.getFullName())
    }

  }

  // const wolverine = new Xmen('Wolverine', 'Logan', true)

  // console.log(wolverine.name)
  // wolverine.name = 'hey'
  // console.log(wolverine.name)
})()
