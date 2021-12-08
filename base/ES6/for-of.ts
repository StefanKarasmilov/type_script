(() => {

  type Avenger = {
    name: string,
    weapon: string
  }

  const ironman: Avenger = {
    name: 'Ironman',
    weapon: 'Traje'
  }

  const captainAmerica: Avenger = {
    name: 'Capitan América',
    weapon: 'Escudo'
  }

  const thor: Avenger = {
    name: 'Thor',
    weapon: 'Mjolnir'
  }

  const avengers = [ironman, captainAmerica, thor]

  for (const avenger of avengers) {
    console.log(avenger)
  }

  for (const avengersKey in avengers) {
    console.log(avengers[avengersKey].name)
  }

})()
