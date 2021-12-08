(() => {

  type Avengers = {
    nick: string,
    ironman: string
  }

  const avengers: Avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.'
  }

  const { nick, ironman } = avengers

  console.log(nick)
  console.log(ironman)

  const printAvengers = ({ ...all }: Avengers) => {
    console.log(all)
  }

  const avengersArr = ['Cap. America', 'Ironman', 'Hulk']
  const [, ironmanar] = avengersArr
  console.log(ironmanar)
})()
