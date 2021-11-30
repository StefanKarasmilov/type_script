(() => {
  const addNumber = (a: number, b: number) => a + b
  const greet = (name: string) => `Hola ${name}`
  const saveTheWorld = () => `El mundo está salvado!`

  let myFunction: Function

  myFunction = addNumber
  console.log(myFunction(1, 2))

  myFunction = greet
  console.log(myFunction('Stefan'))

  myFunction = saveTheWorld
  console.log(myFunction())
})()
