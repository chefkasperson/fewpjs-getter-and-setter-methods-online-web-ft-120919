// Add your Circle class here
let pi = Math.PI
class Circle {
  constructor(radius) {
    this.radius = radius
  }

  // DIAMETER, CIRCUFERENCE, AREA

  get diameter() {
    return this.radius * 2
  }

  get circumference() {
    return this.radius * 2 * pi
  }

  get area() {
    return pi * this.radius**2
  }

 set diameter(dmtr) {
   this.radius = dmtr / 2
 }

 set circumference(crc) {
   this.radius = crc / (2 * pi)
 }

 set area(a) {
   this.area = Math.sqrt((a / pi))
 }
}