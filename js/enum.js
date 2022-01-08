"use strict";
//Admin Super_Admin Client
// const arr = ["Admin", "Super_Admin", "Client"];
var role;
(function (role) {
    role[role["ADMIN"] = 10] = "ADMIN";
    role[role["SUPER_ADMIN"] = 20] = "SUPER_ADMIN";
    role[role["CLIENT"] = 30] = "CLIENT";
})(role || (role = {}));
const person = {
    name: "Syed",
    age: 24,
    role: role.ADMIN,
};
person.role = role.SUPER_ADMIN;
console.log(person);
const arr = [12, "String", {}, []];
