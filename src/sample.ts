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

let s1: "test" = "test"
let s2: string = s1
let s3: string = "test"
let s4: "test" = s3

let n1: 0 = 0
let n2: number = n1
let n3: number = 0
let n4: 0 = n3

let b1: any = false
let b2: string = b1
let b3 = b1 as number

let un1: unknown = "test"
let un2: string = un1
let un3: number = un1 as number

const u1 = "0"
const u2 = "0" as string
const u3 = 0 as string
const u4 = "0" as {}

let o1: {} = 0
let o2: {} = "1"
let o3: {} = false
let o4: {} = {}

let p1: object = 0
let p2: object = "1"
let p3: object = false
let p4: object = {}

type K0 = keyof {}
type K1 = keyof { K: "K" }
type K2 = keyof 0
type K3 = keyof "1"
type K4 = keyof false

let ob1 = { p1: 0 }
let ob2 = { p1: "test" }
ob1 = ob2
ob2 = ob1

let obj1 = { p1: "test" }
let obj2 = { p2: "test" }
obj1 = obj2
obj2 = obj1

let obje1 = { p1: "test" }
let obje2 = { p1: "test", p2: 0 }
obje1 = obje2
obje2 = obje1

let objec1 = {}
let objec2 = { p1: "test" }
objec1 = objec2
objec2 = objec1

let fn1 = (a1: number) => { }
let fn2 = (a1: string) => { }
fn2 = fn1
fn1 = fn2

let fun1 = (a: number) => 0
let fun2 = (b: number, s: string) => 0
fun2 = fun1
fun1 = fun2

class Ani {
  feet: number = 4
  constructor(name: string, numFeet: number) {}
}
class Hu {
  feet: number = 2
  hands: number = 2
  constructor(name: string, gender: string) {}
}
let animal: Ani = new Ani("dog", 4)
let hu: Hu = new Hu("Taro", "male")
hu = animal
animal = hu

const Test = {}
interface Test { }
namespace Test { }

const value1 = "test"
let value2 = "test"
function greetV() { }
const greetV = "hello"

interface User {
  name: string
}
interface User {
  age: number
}

type User = {
  name: string
}
type User = {
  age: number
}

interface Test {
  value: string
}
namespace Test {
  export interface Properties {
    name: string
  }
}
const test: Test = {
  value: "value"
}
const properties: Test.Properties = {
  name: "Taro"
}

interface Bounds {
  width: number
  height: number
  move(amount: string): string
}
interface Bounds {
  left: number
  top: number
  move(amount: number): string
}
interface Bounds {
  width: number
  height: string
}
const bounds: Bounds = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  move: (amount: string | number) => {
    return `${amount}`
  }
}
namespace Publisher {
  export const name = ""
  interface Appearance {
    color: "monochrome" | "4colors" | "fullcolors"
  }
  export interface Book {
    title: string
    appearance: Appearance
  }
}
namespace Publisher {
  export interface CookingBook extends Book {
    category: "cooking"
    appearance: Appearance
  }
}

namespace Publisher {
  export interface Book {
    lang: "ja"
  }
  export interface TravelBook extends Book {
    category: "travel"
  }
}

const cookingBook: Publisher.CookingBook = {} as Publisher.CookingBook
const travelBook: Publisher.TravelBook = {} as Publisher.TravelBook

declare global {
  namespace Express {
    interface Request { }
    interface Response { }
    interface Application { }
  }
}

declare global {
  namespace Express {
    interface Request {
      session?: Session;
      sessionID?: string;
    }
    interface SessionData {
      [key: string]: any;
      cookie: SessionCookieData;
    }
    interface SessionCookieData {
      originalMaxAge: number;
      path: string;
      maxAge: number;
      secure?: boolean;
      httpOnly: boolean;
      domain?: string
      expires: Date | boolean;
      sameSite?: boolean | string;
    }
    interface SessionCookie extends SessionCookieData {
      serialize(name: string, value: string): string;
    }
    interface Session extends SessionCookieData {
      id: string;
      regenerate(callback: (err: any) => void): void;
      destroy(callback: (err: any) => void): void;
      reload(callback: (err: any) => void): void;
      save(callback: (err: any) => void): void;
      touch(callback: (err: any) => void): void;
      cookie: SessionCookie;
    }
  }
}

interface Box<T> {
  value: T
}

const box0: Box = { value: "test" }
const box1: Box<string> = { value: "test" }
const box2: Box<number> = { value: "test" }

interface Box<T = string> {
  value: T
}

const bx0: Box = { value: "test" }
const bx1: Box<string> = { value: "test" }
const bx2: Box<number> = { value: "test" }

interface Box<T extends string | number> {
  value: T
}

const bo0: Box<string> = { value: "test" }
const bo1: Box<number> = { value: 0 }
const bo2: Box<boolean> = { value: false }

function boxed<T>(props: T) {
  return {value: props}
}

const boxed0 = boxed("test")
const boxed1 = boxed(0)
const boxed2 = boxed(false)
const boxed3 = boxed(null)

const boxed4 = boxed(false as boolean | null)
const boxed5 = boxed<string | null>(null)

const boxedC = <T>(props: T) => ({ value: props })

function boxedF<T extends string>(props: T) {
  return {value: props}
}
const boxedF1 = boxedF(0)
const boxedF2 = boxedF("test")

interface Props {
  amount: number
}
function boxF<T extends Props>(props: T) {
  return {value: props.amount.toFixed(1)}
}
const boxF1 = boxF({ amount: 0 })
const boxF2 = boxF({ value: 0 })
const boxF3 = boxF(amount: "test")

function pick<T, K extends keyof T>(props: T, key: K) {
  return props[key]
}

const objV = {
  name: "Taro",
  amount: 0,
  flag: false
}
const v1 = pick(objV, "name")
const v2 = pick(objV, "amount")
const v3 = pick(objV, "flag")
const v4 = pick(obj, "test")

class Person<T extends string> {
  name: T
  constructor(name: T) {
    this.name = name
  }
}
const person = new Person("Taro")
const personName = person.name

interface PersonProps {
  name: string
  age: number
  gender: "male" | "female" | "other"
}
class PersonP<T extends PersonProps> {
  name: T["name"]
  age: T["age"]
  gender: T["gender"]

  constructor(props: T) {
    this.name = props.name
    this.age = props.age
    this.gender = props.gender
  }
}
const personP = new PersonP({
  name: "Taro",
  age: 28,
  gender: "male"
})

type IsString<T> = T extends string ? true : false
type X = IsString<"test">
type Y = IsString<0>

interface Properties {
  name: string
  age: number
  flag: boolean
}
type IsType<T, U> = {
  [K in keyof T]: T[K] extends U ? true: false
}
type String = IsType<Properties, string>
type Number = IsType<Properties, number>
type Boolean = IsType<Properties, boolean>

interface Property {
  name: string
  age: number
  walk: () => void
  jump: () => Promise<void>
}
type Filter<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never
}[keyof T]
type StringKeys = Filter<Property, string>
type NumberKeys = Filter<Property, number>
type FunctionKeys = Filter<Property, Function>
type ReturnPropmiseKeys = Filter<Property, () => Promise<any>>

type StringKeysT<T> = Filter<T, string>
type NumberKeysT<T> = Filter<T, number>
type FunctionKeysT<T> = Filter<T, Function>
type ReturnPromiseKeys<T> = Filter<T, () => Promise<any>>

type Strings = Pick<Property, StringKeysT<Property>>
type Numbers = Pick<Property, NumberKeysT<Property>>
type FunctionsT = Pick<Property, FunctionKeysT<Property>>
type ReturnPromisesT = Pick<Property, ReturnPromiseKeys<Property>>

interface DeepNest {
  deep: { nest: { value: string } }
}
interface ShallowNest {
  shallow: { value: string }
}
interface P {
  deep: DeepNest
  shalow: ShallowNest
}
type Salvage<T extends DeepNest> = T["deep"]["nest"]["value"]
type DeepDive<T> = {
  [K in keyof T]: T[K] extends DeepNest ? Salvage<T[K]> : never
}
type XD = DeepDive<P>

function hello() {
  return "Hello"
}
type Return<T> = T extends (...arg: any[]) => infer U ? U : never
type R = Return<typeof hello>

function helloI(name: string, age: number) {
  return `Hello! I'm ${name}. ${age} years old.`
}
type A1<T> = T extends (...args: [infer U, ...any[]]) => any ? U : never
type A2<T> = T extends (...arg: [any, infer U, ...any[]]) => any ? U : never
type AA<T> = T extends (...arg: infer U) => any ? U : never

type XA = A1<typeof helloI>
type YA = A2<typeof helloI>
type ZA = AA<typeof helloI>

async function aisatsu() {
  return "Hello!"
}

type ResolveArg<T> = T extends () => Promise<infer U> ? U : never
type aX = typeof aisatsu
type aY = ResolveArg<typeof aisatsu>

interface UUser {
  name: string
  age: number | null
  gender: "male" | "female" | "other"
  birthplace?: string
}
type ReadonlyWrapUser = Readonly<UUser>
type PartialWrapUser = Partial<UUser>
type RequiredWrapUser = Required<UUser>
type UserRecord = Record<"user", UUser>
type UserGender = Pick<UUser, "gender">
type withoutBirthplace = Omit<UUser, "birthplace">
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type Exc = Exclude<"a" | "b", "b">
type ExcF = Exclude<"a" | (() => void), Function>
type Ext = Extract<"a" | "b", "b">
type ExtF = Extract<"a" | (() => void), Function>
type NN = NonNullable<string | null | undefined>
type Re = ReturnType<() => string>
type ReS = ReturnType<string>
class C {
  x = 0
  y = 0
}
type CC = InstanceType<typeof C>
const nc = {} as CC

type TypeName<T> =
  T extends string ? "string" :
  T extends number ? "number" :
  T extends boolean ? "boolean" :
  T extends undefined ? "undefined" :
  T extends Function ? "function" :
  "object"

type T0 = TypeName<string>
type T1 = TypeName<number>
type T2 = TypeName<boolean>
type T3 = TypeName<() => void>
type T4 = TypeName<string[]>

interface Part {
  id: number;
  name: string;
  subparts: Part[];
  updatePart(newName: string): void;
}
type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never
}[keyof T]
type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>
type FN = FunctionPropertyNames<Part>;
type FP = FunctionProperties<Part>;

type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K
}[keyof T]
type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>
type NF = NonFunctionPropertyNames<Part>;
type NP = NonFunctionProperties<Part>;

type Unpacked<T> =
  T extends (infer U)[] ? U :
  T extends (...args: any[]) => infer U ? U :
  T extends Promise<infer U> ? U :
  T
type U0 = Unpacked<string>
type U1 = Unpacked<string[]>
type U2 = Unpacked<() => string>
type U3 = Unpacked<Promise<string>>
type U4 = Unpacked<Promise<string>>
type U5 = Unpacked<Promise<string>[]>
type T5 = Unpacked<Unpacked<Promise<string>[]>>

interface User {
  name: string
  age: number
  gender: "male" | "female" | "other"
  birth: {
    day: Date
    place?: {
      country?: string | null
      state?: string
    }
  }
}
type Unbox<T> = T extends { [k: string]: infer U } ? U
  : T extends (infer U)[] ? U
  : T
type isPrimitive<T> = T extends Unbox<T> ? T : never

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends isPrimitive<T[P]>
  ? T[P]
  : DeepReadonly<T[P]>
}
type DeepReadonlyWrapUser = DeepReadonly<User>

type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends isPrimitive<T[P]>
  ? T[P]
  : DeepRequired<T[P]>
}
type DeepRequiredWrapUser = DeepRequired<User>

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends isPrimitive<T[P]>
  ? T[P]
  : DeepPartial<T[P]>
}
type DeepPartialWrapUser = DeepPartial<User>

type DeepNullable<T> = {
  [P in keyof T]?: T[P] extends isPrimitive<T[P]>
  ? T[P] | null
  : DeepNullable<T[P]>
}
type DeepNullableWrapUser = DeepNullable<User>

type DeepNonNullable<T> = {
  [P in keyof T]-?: T[P] extends isPrimitive<T[P]>
  ? Exclude<T[P], null | undefined>
  : DeepNonNullable<T[P]>
}
type DeepNonNullableWrapUser = DeepNonNullable<User>

type UnboxU<T> = T extends { [K in keyof T]: infer U } ? U : never
type T = UnboxU<{ a: "A"; b: "B"; c: "C" }>

type UTI<T> = T extends any ? (args: T) => void : never
type UnionToIntersection<T> = UTI<T> extends (args: infer I) => void ? I : never
type A_or_B = { a: "a" } | { b: "b" }
type A_and_B = UnionToIntersection<A_or_B>

type NonEmptyList<T> = [T, ...T[]]
const list1: NonEmptyList<string> = []
const list2: NonEmptyList<string> = ["test"]

type PickSet<T> = T extends Set<infer I> ? I : never
const set = new Set([1, 2] as const)
type SetValues = PickSet<typeof set>

const map = new Map([[0, "foo"], [1, "bar"]] as const)
type PickMapKeys<T> = T extends Map<infer KeyboardEvent, any> ? K : never
type MapKeys = PickMapKeys<typeof map>
type MapKeys: 0 | 1