// Bind
function plane(gun, speed) {
    this.gun = gun
    this.speed = speed

    return this
}

this.pilot = 'Leo'
const result = plane.bind(this, 'missil', 800)

console.log(result())