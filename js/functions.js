"use strict";
function add(n1, n2) {
    const result = n1 + n2;
    return result;
}
function add2(n1, n2) {
    const result = n1 + n2;
    return result;
}
let addition;
addition = add;
console.log(addition(3, 4));
addition = add2;
console.log(addition(333, 4));
