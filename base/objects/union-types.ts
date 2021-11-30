(() => {
  type Hero = {
    name: string
    age: number
    powers: string[]
    getName?: () => string
  }

  let customVariable: string | number | Hero = 'Stefan'
})()
