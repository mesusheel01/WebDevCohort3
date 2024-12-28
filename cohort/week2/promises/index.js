class Reactangle{
  constructor(width, height, color){
    this.width = width
    this.height = height
    this.color = color
  }

  area(){
    const area = this.width * this.height
    return area
  }

  paint(){
    console.log(`Painting with color ${this.color}`);
  }
}

const react = new Reactangle(2,4 ,"red")
const area = react.area()
react.paint()
console.log(area)
