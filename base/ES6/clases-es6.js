(() => {

  class Avenger {
    name
    power

    constructor(name, power) {
      this.name = name
      this.power = power
    }
  }

  class FlyingAvenger extends Avenger {
    flying

    constructor(name, power) {
      super(name, power)
      this.flying = true
    }
  }

  const hulk = new Avenger('Hulk', 'Strength')
  const falcon = new FlyingAvenger('Hey', "Hou")

  console.log(hulk)
  console.log(falcon)

})()
