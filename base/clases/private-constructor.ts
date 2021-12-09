(() => {

  class Apocalipsis {

    static instance: Apocalipsis

    private constructor(
      public name: string
    ) {
    }

    static callApocalipsis(): Apocalipsis {
      if (!this.instance) {
        this.instance = new Apocalipsis('Soy apocalipsis')
      }

      return Apocalipsis.instance
    }

  }

  const apocalipsis = Apocalipsis.callApocalipsis()

  // console.log(apocalipsis)

})()
