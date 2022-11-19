//use property of one another inio another function or object
const person = {
    alive: true
}
const musician = {
    plays:true
}
Object.setPrototypeOf(musician, person);
console.log(musician.plays);
console.log(musician.alive);