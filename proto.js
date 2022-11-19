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

const guitarist = {
    strings: 6,
    __proto__:musician
}
console.log(guitarist.alive);
console.log(guitarist.plays);
console.log(guitarist.strings);
