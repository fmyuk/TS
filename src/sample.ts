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

const obj = {
  foo: false,
  bar: 1,
  baz: "2"
}

obj["foo"] = true
obj["foo"] = 0

function getPriceLabel(amount: number, tax: number) {
  return `¥$(amount * tax)`
}

function log(message: string) {
  console.log(message)
}

function getStringValue(value: number, prefix: string): string {
  if (prefix === undefined) return value
  return `${prefix} ${value}`
}

function getScore(score: number) {
  if (score < 0 || score > 100) return null
  return score
}

function getScoreAmount(score: "A" | "B" | "C") {
  switch (score) {
    case "A":
      return 100
    case "B":
      return 60
    case "C":
      return 30
  }
}

function wait(duration: number): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => resolve(`${duration}ms passed`). duration)
  })
}
wait(1000).then(res => { })

async function queue() {
  const message = await wait(1000)
  return message
}

function waitThenString(duration: number) {
  return new Promise<string>(resolve => {
    setTimeout(() => resolve(`${duration}ms passed`), duration)
  })
}

function waitThenNumber(duration: number) {
  return new Promise<number>(resolve => {
    setTimeout(() => resolve(duration), duration)
  })
}

function waitAll() {
  return Promise.all([
    waitThenString(10),
    waitThenNumber(100),
    waitThenString(1000)
  ])
}

function waitRace() {
  return Promise.race([
    waitThenString(10),
    waitThenNumber(100),
    waitThenString(1000)
  ])
}

async function main() {
  const [a, b, c] = await waitAll()
  const result = await waitRace()
}

import("./test").then(module => {
  const amount = module.value
})
async function main() {
  const { value } = await(import("./test"))
  const amount = value
}

interface User {
  id: number
  created_at: string
  profile: {
    name: {
      first: string
      last: string
    },
    age: number
    gender: string
    enabled: boolean
  }
}
type Users = User[]

type State = {
  readonly id: number
  name: string
}
const state: State = {
  id: 1,
  name: "Taro"
}
state.name = "Hanako"
state.id = 2

const defaultTheme = {
  backgroundColor: "orange",
  borderColor: "red"
}

const empty = {} as { value: "value" }
const fiction = empty.value

type ChangeUser = {
  name: string
  [k: string]: any
}
const userA: ChangeUser = {
  name: "Taro",
  age: 26
}
const x = userA.name
const y = userA.age

type Question = "exercise_habits" | "time_of_sleeping"
type Answer = "mighty" | "lot" | "few" | "entirely"
type UserAnswer = {
  name: string
  enquete: { [k in Question]?: Answer}
}
const userB: UserAnswer = {
  name: "Taro",
  enquete: {
    exercise_habits: "entirely",
    time_of_sleeping: "few"
  }
}
const xB = userB.enquete["exercise_habits"]
const yB = userB.enquete["steps_per_day"]

interface Functions {
  [k: string]: Function
}
const functions: Functions = {
  name: "Taro",
  age: 28,
  walk: () => { },
  talk: async () => {}
}

interface ReturnPromises {
  [k: string]: () => Promise<any>
}
const promises: ReturnPromises {
  name: "Taro",
  age: 28,
  walk: () => {},
  talk: async () => {}
}

const tuple1 = [false, 1, "2"] as [false, 1, "2"]
const tuple2 = [false, 1, "2"] as const

const u = "u"
const t = u

const A = "A" as const
let B = A

function increment() {
  return {type: "INCREMENT"}
}
function decrement() {
  return {type: "DECREMENT"} as const
}
const i = increment()
const d = decrement()

export default {
  increment: "INCREMENT",
  decrement: "DECREMENT",
  setCount: "SET_COUNT"
} as const

function greet(): any {
  console.log("hello")
}
const messageTo = greet()
console.log(messageTo.toUpperCase())

function greetOptional(name?: string) {
  console.log(`Hello ${name!.toUpperCase}`)
}
greetOptional()

function reset(value: number | string | boolean) {
  const v0 = value
  if (typeof value === "number") {
    const v1 = value
    return 0
  }
  const v2 = value
  if (typeof value === "string") {
    const v3 = value
    return ""
  }
  const v4 = value
  return false
}
console.log(reset(1))
console.log(reset("1"))
console.log(reset(true))

type UserS = {gender: string}
type UserA = UserS & { name: string }
type UserB = UserS & { age: number; graduate: string }
function judgeUserType(user: UserA | UserB) {
  if ("gender" in user) {
    const u0 = user
    console.log("user type is UserA | UserB")
  }
  if ("name" in user) {
    const u1 = user
    console.log("user type is UserA")
  }
  const u2 = user
  console.log("user type is UserB")
}

class Creature1 {
  breathe(){}
}
class Animal extends Creature1 {
  shakeTail(){}
}
class Human1 extends Creature1 {
  greet(){}
}

function action(creature: Animal | Human1 | Creature1) {
  const c0 = creature
  c0.breathe()
  if (creature instanceof Animal) {
    const c1 = creature
    return c1.shakeTail()
  }
  const c2 = creature
  if (creature instanceof Human) {
    const c3 = creature
    return c3.greet()
  }
  const c4 = creature
  return c4.breathe()
}

type UA = { gender: "male"; name: string }
type UB = { gender: "female"; age: number }
type UC = { gender: "other"; graducate: string }
function judgeUType(user: UA | UB | UC) {
  switch (user.gender) {
    case "male":
      const u0 = user
      return "user type is UA"
    case "female":
      const u1 = user
      return "user type is UB"
    case "other":
      const u2 = user
      return "user type is UC"
    default:
      const u3 = user
      return "user type if never"
  }
}

function isUserA(user: UserA | UserB): user is UserA {
  return user.name !== undefined
}
function isUserB(user: UserA | UserB): user is UserB {
  return user.age !== undefined
}

function getUserType(user: any) {
  const u0 = user
  if (isUserA(user)) {
    const u1 = user
    return "A"
  }
  if (isUserB(user)) {
    const u2 = user
    return "B"
  }
  return "unknown"
}
const n = getUserType({ name: "Taro" })

type UD = { name: string }
type UE = UD & { gender: "male" | "female" | "other" }
type UF = UD & { graduate: string }
const users: (UE | UF)[] = [
  { name: "Taro", gender: "male" },
  {name: "Hanako", graduate: "Tokyo"}
]
const filterUsers = users.filter(user => "graduate" in user)

function filterUser(user: UE | UF): user is UF {
  return "graduate" in user
}
const filteredUsers = users.filter(filterUser)

const filUsers = users.filter(
  (user: UE | UF): user is UF => "graduate" in user
)