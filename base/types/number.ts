(() => {
  let avengers: number = 10
  let villains: number = 20

  if (avengers < villains) {
    console.log('Estamos en problemas')
  } else {
    console.log('Nos salvamos')
  }

  avengers = Number('123')

  console.log({ avengers })
})()
