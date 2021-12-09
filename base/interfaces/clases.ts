(() => {

  interface Xmen {
    name: string
    realName: string
    mutantPower: (id: number) => string
  }

  class Mutant implements Xmen {
    constructor(
      public name: string,
      public realName: string
    ) {
    }

    mutantPower(id: number): string {
      return ''
    }

  }

})()
