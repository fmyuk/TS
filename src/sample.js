export let sampleText = "sampleText";
export function sampleFunction() {
  return true;
}

function expo2(amount) {
  return amount ** 2;
}
const value = expo2("1,000");
const withTax = value * 1.1;


function taxed(amount) {
  return amount * 1.1;
}
function fee(amount) {
  return `{amount * 1.4}`;
}
function price(amount) {
  return `${fee(amount)}`;
}
const demand = "¥" + taxed(price(1000));