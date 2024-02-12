//le code asynchrone => non-blocking-code

console.log(1);
console.log(2);

setTimeout(() => {
    console.log(3,"hey, code asynchrone => ce qui signifie que ce log s'affichera au bout de 5 secondes(5000 ms) et les autres s'effectueront pendant ce temps, bien que ce dernier soit à la position 3");
}, 5000);

console.log(4);
console.log(5);
