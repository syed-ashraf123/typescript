type both = number | string;
type value = "as-number" | "as-text";

function combine(input1: both, input2: both, value: value) {
  let result;
  if (value === "as-number") {
    result = +input1 + +input2;
    return result;
  }
  result = String(input1) + String(input2);
  return result;
}

const ages = combine("24", "25", "as-number");
const names = combine("Syed ", "Ashraf", "as-text");
console.log(ages, names);
