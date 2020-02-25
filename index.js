console.log('hello git');
function square (edge) {
  return edge ** 2
}
console.log(square(24));

function cube (edge) {
  return edge ** 3
}
console.log(cube(10));

function circle (radius) {
  return 3.14 * ( radius ** 2 )
}
console.log(circle(2));
function cylinder (radius, height) {
  return circle(radius) * height
}

console.log(cylinder(5, 10));

function hello (name) {
  return `Hello my name is ${name}`
}
console.log(hello("Міша"))
