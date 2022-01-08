//Admin Super_Admin Client
// const arr = ["Admin", "Super_Admin", "Client"];
enum role {
  ADMIN = 10,
  SUPER_ADMIN = 20,
  CLIENT = 30,
}
const person = {
  name: "Syed",
  age: 24,
  role: role.ADMIN,
};
person.role = role.SUPER_ADMIN;
console.log(person);

const arr: any[] = [12, "String", {}, []];
