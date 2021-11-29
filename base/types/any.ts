(() => {
  let avenger: any = 123
  let exists
  let power

  avenger = 'Dr Strange'

  console.log((avenger as string).charAt(0))

  avenger = 123312.123123
  console.log(avenger.toFixed(2))
})()
