/**
Task:
- Write the code to help a user choose the perfect Christmas dinner idea
  based on the number of people attending.
- Include a checkbox for the user to specify the meal 
  should be vegetarian-friendly.

Dinner suggestions (or choose your own!):
Vegetarian: Winter Squash Risotto
4 people or less: Ham
5+ people: Turkey

Stretch goals:
- Add more dietary options.
- Show recipes when the meal has been selected.
 */
const numInput = document.getElementById("num-input");
const vegInput = document.getElementById("vegetarian-input");
const text = document.getElementById("result");
const food = document.getElementById("food");
const calculateBtn = document.getElementById("btn");

const dishes = [
  {
    isVegetarian: true,
    name: "Vegetarian Wellington",
    forMin: 2,
    forMax: 4,
    recipe:
      "Sauté the mushrooms, garlic, and spinach, mix with caramelized onions and herbs. Wrap the mixture in puff pastry and bake until golden brown.",
  },
  {
    isVegetarian: true,
    name: "Stuffed Acorn Squash",
    forMin: 5,
    forMax: 8,
    recipe:
      "Cut acorn squash in half, scoop out seeds, and roast. Cook quinoa and mix with black beans, corn, bell peppers, and onions. Stuff the squash with the mixture and bake until tender.",
  },
  {
    isVegetarian: true,
    name: "Cauliflower Roast with Cranberry Sauce",
    forMin: 9,
    forMax: Number.MAX_SAFE_INTEGER,
    recipe:
      "Coat the cauliflower with olive oil, garlic, thyme, rosemary, salt, and pepper. Roast until golden. In a saucepan, cook fresh cranberries with orange juice and sugar until they burst, creating a sweet-tart sauce.",
  },
  {
    isVegetarian: false,
    name: "Roast Turkey",
    forMin: 2,
    forMax: 4,
    recipe:
      "Season the turkey with herbs, salt, and pepper, and roast it until the skin is golden brown and the meat is cooked through. Basting with melted butter during roasting adds flavor and moisture",
  },
  {
    isVegetarian: false,
    name: "Stuffed Acorn Squash",
    forMin: 5,
    forMax: 8,
    recipe:
      "Score the ham, rub it with a mixture of brown sugar and Dijon mustard, insert cloves, and bake. During baking, baste the ham with the juices and glaze. Garnish with pineapple rings.",
  },
  {
    isVegetarian: false,
    name: "Cauliflower Roast with Cranberry Sauce",
    forMin: 9,
    forMax: Number.MAX_SAFE_INTEGER,
    recipe:
      "Rub the prime rib with a mixture of crushed garlic, chopped rosemary, thyme, salt, and pepper. Roast until the internal temperature reaches your desired doneness.",
  },
];

calculateBtn.addEventListener("click", getDinnerMenu);

let dish;

function getDinnerMenu() {
  const numGuests = parseInt(numInput.value);

  if (isNaN(numGuests) || numGuests < 1) {
    alert("Please enter a valid number of guests.");
    return;
  }

  const neededDish = dishes.find(
    (x) =>
      x.isVegetarian == vegInput.checked &&
      x.forMin <= numInput.value &&
      x.forMax >= numInput.value
  );

  dish = neededDish;

  food.innerHTML = neededDish.name;
}

text.addEventListener("mouseover", function () {
  if (dish != null) {
    food.innerHTML = `${dish.name} <br>${dish.recipe}`;
  }
});
