"use strict";
const obj = {
    name: "Syed",
    age: 24,
    nickname: "zano",
    hobbies: ["Cricker"],
};
obj.hobbies.push("Badminton");
obj.hobbies.push(4);
obj.hobbies[0] = "Data";
console.log(obj);
