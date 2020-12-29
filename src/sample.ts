function expo2(amount: number) {
  return amount ** 2;
}
console.log(expo2(1000));
console.log(expo2("1,000"));

function taxed(amount): number {
  return amount * 1.1;
}
function fee(amount): number {
  return amount * 1.4;
}
function price(amount): number {
  return `${fee(amount)}`;
}

class Creature {
  numberOfHands: number
  numberOfFeet: number
  constructor(numberOfHands: number, numberOfFeet: number) {
    this.numberOfHands = numberOfHands
    this.numberOfFeet = numberOfFeet
  }
}
const creature = new Creature(0, 4);

class Dog extends Creature {
  bark: string
  constructor(bark: string) {
    super(0, 4)
    this.bark = bark
  }
  
  barking() {
    return `${this.bark}! ${this.bark}!`
  }

  shakeTail() {
    console.log(this.barking())
  }
}

class Human extends Creature {
  name: string
  constructor(name: string) {
    super(2, 2)
    this.name = name
  }
  greet() {
    return `Hello! I'm ${this.name}.`
  }

  shakeHnads() {
    console.log(this.greet())
  }
}

const dog = new Dog("bow-wow")
const human = new Human("Hanako")

enum Direction {
  Up,
  Down,
  Left,
  Right
}
const left = Direction.Left

enum Ports {
  USER_SERVICE = "8080",
  REGISTER_SERVICE = "8081",
  MEDIA_SERVICE = "8888"
}

let user: string
let value: number
let flag: boolean

const wideningZero = 0
const nonWideningZero: 0 = 0
const asNonWideningZero = 0 as 0

let zeroA = 0
let zeroB = wideningZero
let zeroC = nonWideningZero
let zeroD = asNonWideningZero
const zeros = {
  zeroA,
  zeroB,
  zeroC,
  zeroD
}

const a1 = [true, false]
const a2 = [0, 1, "2"]
const a3 = [false, 1, "2"]

const a = [0 as 0, 1 as 1]
a.push(1)
a.push(2)

const t1 = [false] as [boolean]
const t2 = [false, 1] as [boolean, number]
const t3 = [false, 1, "2"] as [boolean, number, string]

const v3_0 = t3[0]
const v3_1 = t3[1]
const v3_2 = t3[2]
const v3_3 = t3[3]

t1.push(false)
t1.push(1)
t1.push("2")

t2.push(false)
t2.push(1)
t2.push("2")

t3.push(false)
t2.push(1)
t3.push("2")

let list = ["this", "is", "a", "test"]

list.push("!")
console.log(list)

list = list.map(item => item.toUpperCase())
console.log(list)

let message = list.reduce((prev, current) => `${prev} ${current}`)
console.log(message)