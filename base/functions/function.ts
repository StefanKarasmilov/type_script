(() => {
  const hero: string = 'Flash'

  function returnName(): string {
    return hero
  }

  const activateBatisenal = (): string => {
    return 'Batiseñal activada'
  }

  console.log(typeof activateBatisenal)

  const heroName = returnName()
})()
