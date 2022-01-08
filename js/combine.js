function combine(input1, input2, value) {
    var result;
    if (value === "as-number") {
        result = +input1 + +input2;
        return result;
    }
    result = String(input1) + String(input2);
    return result;
}
var ages = combine("24", "25", "as-number123");
var names = combine("Syed ", "Ashraf", "as-text");
console.log(ages, names);
