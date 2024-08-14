// console logs to test with node

let data = require("./recipes.json");
// console.log(JSON.stringify(data));
// console.log(data.recipes);
// console.log(data.recipes[0].ingredients);

// data.recipes[0].ingredients.map((ing) => {
//   console.log(ing.name + ing.amount);
// });

// data.recipes[0].map((ing) => {
//   console.log(ing);
// });
// console.log(data);
// console.log(data.recipes[0].language[0].english);
// console.log(data.recipes[1].language[0].swedish);

data.recipes[0].language[0].swedish.ingredients.map((i) => {
  console.log(i.name + " " + i.amount);
});

console.log(data.recipes[0].language[0].swedish.instructions);

// fetch("https://mbergq.github.io/json-recipes/path/to/your/jsonfile.json")'

async function fetchData() {
  const res = await fetch("https://mbergq.github.io/json-recipes/recipes.json");
  const data = await res.json();
  console.log(data);
}

fetchData();
