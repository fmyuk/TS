import { sampleText, sampleFunction } from "./sample";
const a = sampleFunction();
const b = sampleText;

export const value = 10
export const label = "label"
export function returnFalse() {
  return false
}

function getFormattedValue(value: number | null) {
  if(value === null) return "-- pt"
  return `${value.toFixed(1)} pt`
}
console.log(getFormattedValue(0.1))
console.log(getFormattedValue(0))
console.log(getFormattedValue(null))

function greet(name?: string) {
  if(name === undefined) return "Hello"
  return `Hello ${name.toUpperCase}`
}
console.log(greet())
console.log(greet("Taro"))

function getFormattedValueDefault(value: number, unit = "pt") {
  return `${value.toFixed(1)} ${unit.toUpperCase()}`
}
console.log(getFormattedValueDefault(100))
console.log(getFormattedValueDefault(100, "kg"))
console.log(getFormattedValueDefault(100, 0))

function getFormattedValueNull(value: number, unit: string | null = null) {
  const _value = value.toFixed(1)
  if (unit === null) return `${_value}`
  return `${_value} ${unit.toUpperCase}`
}