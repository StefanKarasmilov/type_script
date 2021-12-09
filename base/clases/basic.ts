(() => {

  class Avenger {
    static avgAge: number = 35

    constructor(
      private name: string,
      private team: string,
      private realName?: string
    ) {
    }

    static getAvgAge() {
      return this.avgAge
    }

    bio() {
      return `${this.name} (${this.team})`
    }
  }

  const antman = new Avenger('Antman', 'Captain', 'Scott Lang')

  // console.log(antman)
  // console.log(Avenger.getAvgAge())
})()
