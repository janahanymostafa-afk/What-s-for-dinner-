//-------Variables-------
var lastIndex;
var listOfIndex = [];
var imgSec = document.getElementById("imgSec");
var infoSec = document.getElementById("infoSec");
var ingredientSec = document.getElementById("ingredientSec");
var instructionSec = document.getElementById("instructionSec");
var nutritionSec = document.getElementById("nutritionSec");
var tipsSec = document.getElementById("tipsSec");
var Recipes = [
  {
    rating: 4.8,
    reviews: 356,
    prepTime: 10,
    cookTime: 15,
    serving: 2,
    imgUrl: "./Images/Shrimp Scampi.jpg",
    difficulty: "Easy",
    type: "Seafood",
    title: "Shrimp Scampi",
    description: "Garlicky shrimp in white wine butter sauce",
    ingredients: [
      "200g spaghetti pasta",
      "250g large shrimp",
      "4 garlic cloves, minced",
      "3 tbsp butter",
      "2 tbsp olive oil",
      "2 tbsp lemon juice",
      "Fresh parsley",
      "Salt and black pepper",
    ],
    instructions: [
      "Cook spaghetti in salted boiling water until tender.",
      "Heat olive oil and butter in a large pan.",
      "Add garlic and cook until fragrant.",
      "Add shrimp and cook for 2-3 minutes on each side.",
      "Add lemon juice, salt and black pepper.",
      "Mix cooked spaghetti with the shrimp sauce.",
      "Garnish with fresh parsley and serve.",
    ],
    nutrition: {
      calories: 450,
      protein: 32,
      carbohydrates: 48,
      fat: 15,
      fiber: 3,
      sodium: 620,
    },
    tips: [
      "Don't overcook the shrimp.",
      "Use fresh garlic for better flavor.",
      "Save some pasta water for the sauce.",
      "Add lemon juice before serving.",
    ],
    isOverTime: function () {
      return this.prepTime > 45;
    },
  },

  {
    rating: 4.9,
    reviews: 472,
    prepTime: 15,
    cookTime: 20,
    serving: 4,
    imgUrl: "./Images/Spaghetti Carbonara.jpg",
    difficulty: "Medium",
    type: "Pasta",
    title: "Spaghetti Carbonara",
    description: "Classic Italian pasta with eggs, cheese and pancetta",
    ingredients: [
      "400g spaghetti pasta",
      "150g pancetta, diced",
      "3 large eggs",
      "100g Parmesan cheese",
      "2 garlic cloves",
      "Freshly ground black pepper",
      "Salt",
    ],
    instructions: [
      "Cook spaghetti in salted boiling water.",
      "Fry pancetta in a pan until crispy.",
      "Whisk eggs with grated Parmesan cheese.",
      "Drain pasta and reserve some pasta water.",
      "Add hot pasta to the pancetta.",
      "Remove pan from heat and mix in the egg mixture.",
      "Add pasta water until the sauce becomes creamy.",
      "Serve with extra Parmesan and black pepper.",
    ],
    nutrition: {
      calories: 580,
      protein: 25,
      carbohydrates: 65,
      fat: 23,
      fiber: 3,
      sodium: 750,
    },
    tips: [
      "Use room temperature eggs.",
      "Remove the pan from heat before adding eggs.",
      "Never let the eggs scramble.",
      "Freshly grated Parmesan tastes better.",
    ],
    isOverTime: function () {
      return this.prepTime > 45;
    },
  },

  {
    rating: 4.7,
    reviews: 289,
    prepTime: 10,
    cookTime: 15,
    serving: 2,
    imgUrl: "./Images/Salmon.jpg",
    difficulty: "Easy",
    type: "Seafood",
    title: "Salmon Teriyaki",
    description: "Sweet and savory salmon with a sticky teriyaki glaze",
    ingredients: [
      "2 salmon fillets",
      "3 tbsp soy sauce",
      "2 tbsp honey",
      "2 garlic cloves, minced",
      "1 tsp fresh ginger",
      "1 tbsp olive oil",
      "1 tsp sesame seeds",
      "Green onions",
    ],
    instructions: [
      "Pat salmon fillets dry with paper towels.",
      "Mix soy sauce, honey, garlic and ginger in a bowl.",
      "Heat olive oil in a skillet over medium heat.",
      "Place salmon in the pan and cook for 4-5 minutes.",
      "Flip salmon and pour the teriyaki sauce over it.",
      "Cook for another 4-5 minutes until fully cooked.",
      "Garnish with sesame seeds and green onions.",
      "Serve with rice and vegetables.",
    ],
    nutrition: {
      calories: 420,
      protein: 35,
      carbohydrates: 18,
      fat: 22,
      fiber: 1,
      sodium: 690,
    },
    tips: [
      "Don't overcook the salmon.",
      "Use fresh ginger for extra flavor.",
      "Cook the sauce until slightly thick.",
      "Serve immediately while warm.",
    ],
    isOverTime: function () {
      return this.prepTime > 45;
    },
  },

  {
    rating: 4.8,
    reviews: 611,
    prepTime: 60,
    cookTime: 15,
    serving: 2,
    imgUrl: "./Images/Margherita Pizza.jpg",
    difficulty: "Easy",
    type: "Italian",
    title: "Margherita Pizza",
    description: "Classic pizza with tomato, mozzarella and fresh basil",
    ingredients: [
      "1 pizza dough",
      "100g tomato sauce",
      "150g mozzarella cheese",
      "Fresh basil leaves",
      "2 tbsp olive oil",
      "1 tsp oregano",
      "Salt and black pepper",
    ],
    instructions: [
      "Preheat oven to 220°C.",
      "Roll out the pizza dough on a floured surface.",
      "Spread tomato sauce evenly over the dough.",
      "Add mozzarella cheese on top.",
      "Drizzle with olive oil and sprinkle oregano.",
      "Bake for 12-15 minutes until golden.",
      "Add fresh basil leaves before serving.",
    ],
    nutrition: {
      calories: 520,
      protein: 22,
      carbohydrates: 58,
      fat: 21,
      fiber: 3,
      sodium: 780,
    },
    tips: [
      "Preheat your oven before baking.",
      "Don't add too much tomato sauce.",
      "Use fresh mozzarella for better texture.",
      "Add basil after baking.",
    ],
    isOverTime: function () {
      return this.prepTime > 45;
    },
  },

  {
    rating: 4.6,
    reviews: 418,
    prepTime: 50,
    cookTime: 15,
    serving: 3,
    imgUrl: "./Images/Chicken Stir Fry.jpg",
    difficulty: "Easy",
    type: "Asian",
    title: "Chicken Stir-Fry",
    description: "Quick and healthy chicken stir-fry with veggies",
    ingredients: [
      "300g chicken breast, sliced",
      "1 red bell pepper",
      "1 cup broccoli",
      "1 carrot, sliced",
      "3 tbsp soy sauce",
      "2 garlic cloves",
      "1 tbsp olive oil",
      "1 tsp sesame seeds",
    ],
    instructions: [
      "Cut chicken into small thin slices.",
      "Heat olive oil in a large frying pan.",
      "Add chicken and cook until golden.",
      "Add garlic and stir for one minute.",
      "Add broccoli, carrots and bell peppers.",
      "Pour soy sauce over the ingredients.",
      "Stir-fry for 5 minutes until vegetables are tender.",
      "Garnish with sesame seeds and serve with rice.",
    ],
    nutrition: {
      calories: 350,
      protein: 38,
      carbohydrates: 22,
      fat: 12,
      fiber: 5,
      sodium: 590,
    },
    tips: [
      "Cut vegetables into similar sizes.",
      "Use high heat for better results.",
      "Don't overcrowd the pan.",
      "Keep vegetables slightly crunchy.",
    ],
    isOverTime: function () {
      return this.prepTime > 45;
    },
  },

  {
    rating: 4.9,
    reviews: 723,
    prepTime: 10,
    cookTime: 12,
    serving: 1,
    imgUrl: "./Images/Chocolate Lava Cake.jpg",
    difficulty: "Medium",
    type: "Dessert",
    title: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a gooey melted center",
    ingredients: [
      "100g dark chocolate",
      "80g butter",
      "2 large eggs",
      "50g sugar",
      "30g all-purpose flour",
      "1 tsp vanilla extract",
      "Powdered sugar",
      "Fresh raspberries",
    ],
    instructions: [
      "Preheat oven to 200°C.",
      "Melt chocolate and butter together.",
      "Whisk eggs and sugar until fluffy.",
      "Add melted chocolate and vanilla extract.",
      "Fold in the flour gently.",
      "Pour mixture into greased ramekins.",
      "Bake for 10-12 minutes.",
      "Let rest for one minute and serve warm.",
    ],
    nutrition: {
      calories: 480,
      protein: 8,
      carbohydrates: 45,
      fat: 30,
      fiber: 3,
      sodium: 180,
    },
    tips: [
      "Use good quality dark chocolate.",
      "Don't overbake the cakes.",
      "Grease the ramekins properly.",
      "Serve immediately for a melted center.",
    ],
    isOverTime: function () {
      return this.prepTime > 45;
    },
  },
];

//-----Function-----
function getRandomRecipe() {
  if(listOfIndex.length === Recipes.length){
    listOfIndex = [];
  }
  var randomIndex = Math.floor(Math.random() * Recipes.length);
  while(lastIndex === randomIndex || listOfIndex.includes(randomIndex)){
    return getRandomRecipe();
  }
  lastIndex = randomIndex;
  listOfIndex.push(randomIndex)
  console.log(randomIndex);
  displayRecipe(randomIndex);
}

function displayRecipe(index) {
  var myRecipe = Recipes[index];
  var imgContent = `
              <img class="w-100 rounded-top-5" src="${myRecipe.imgUrl}" alt="${myRecipe.title}" />
              <div class="rating">
                <i class="fa-solid fa-star" style="color: rgb(253, 199, 0)"></i
                ><span><span class="text">${myRecipe.rating}</span> (${myRecipe.reviews} reviews)</span>
              </div>
              <div class="features">
                <div class="prep-time">
                  <i class="fa-solid fa-clock fa-lg" style="color: rgb(255, 105, 0)"></i>
                  <p class="p1">Prep Time</p>
                  <p class="p2">${myRecipe.prepTime} min</p>
                </div>
                <div class="cook-time">
                  <i class="fa-solid fa-fire-burner fa-lg" style="color: rgb(251, 44, 54)"></i>
                  <p class="p1">Cook Time</p>
                  <p class="p2">${myRecipe.cookTime} min</p>
                </div>
                <div class="serving">
                  <i class="fa-solid fa-users fa-lg" style="color: rgb(43, 127, 255)"></i>
                  <p class="p1">Serving</p>
                  <p class="p2">${myRecipe.serving} People</p>
                </div>
              </div> `;
  var recipeInfo = ` <div class="info">
              <div class="recipe-attriputes">
                <div class="difficulty">${myRecipe.difficulty}</div>
                <div class="food">${myRecipe.type}</div>
              </div>
              <h3>${myRecipe.title}</h3>
              <p>${myRecipe.description}</p>
              <div class="awareness ${myRecipe.isOverTime() ? "d-flex align-items-center" : "d-none"} ">
                    <i class="fa-solid fa-triangle-exclamation" style="color: rgb(251, 44, 54);"></i>
                    <div><p>Extended Preparation Time</p><span>This recipe requires more than 45 minutes to prepare. Plan accordingly!</span></div>
                  </div>`;
  var ingredientsList = "";
  for (var i = 0; i < myRecipe.ingredients.length; i++) {
    ingredientsList += ` <li class="ingredient-nodes">
                    <div>${i + 1}</div>
                    <span>${myRecipe.ingredients[i]}</span>
                  </li>`;
  }
  var instructionsList = "";
  for (var i = 0; i < myRecipe.instructions.length; i++) {
    instructionsList += ` <div class="instruction-nodes">
                  <div>${i + 1}</div>
                  <p>
                  ${myRecipe.instructions[i]}
                  </p>
                </div>`;
  }
  var nutrition = `
                  <div class="nutrition-nodes">
                    <div class="nodes-left">
                      <div class="nodes-l1"><i class="fa-solid fa-fire" style="color: rgb(245, 73, 0)"></i></div>
                      <span>Calories</span>
                    </div>
                    <span>${myRecipe.nutrition.calories} kcal</span>
                  </div>
                  <div class="nutrition-nodes">
                    <div class="nodes-left">
                      <div class="nodes-l2"><i class="fa-solid fa-dumbbell" style="color: rgb(21, 93, 252)"></i></div>
                      <span>Protein</span>
                    </div>
                    <span>${myRecipe.nutrition.protein}g</span>
                  </div>
                  <div class="nutrition-nodes">
                    <div class="nodes-left">
                      <div class="nodes-l3"><i class="fa-solid fa-wheat-awn" style="color: rgb(208, 135, 0)"></i></div>
                      <span>Carbohydrates</span>
                    </div>
                    <span>${myRecipe.nutrition.carbohydrates}g</span>
                  </div>
                  <div class="nutrition-nodes">
                    <div class="nodes-left">
                      <div class="nodes-l4"><i class="fa-solid fa-droplet" style="color: rgb(231, 0, 11)"></i></div>
                      <span>Fat</span>
                    </div>
                    <span>${myRecipe.nutrition.fat}g</span>
                  </div>
                  <div class="nutrition-nodes">
                    <div class="nodes-left">
                      <div class="nodes-l5"><i class="fa-solid fa-seedling" style="color: rgb(0, 166, 62)"></i></div>
                      <span>Fiber</span>
                    </div>
                    <span>${myRecipe.nutrition.fiber}g</span>
                  </div>
                  <div class="nutrition-nodes">
                    <div class="nodes-left">
                      <div class="nodes-l6"><i class="fa-solid fa-cube" style="color: rgb(230, 0, 118)"></i></div>
                      <span>Sodium</span>
                    </div>
                    <span>${myRecipe.nutrition.sodium}mg</span>
                  </div>`;
  var tipsList = "";
  for (var i = 0; i < myRecipe.tips.length; i++) {
    tipsList += ` <div class="tips-nodes">
                    <span><i class="fa-solid fa-check fa-xs" style="color: rgb(255, 251, 235)"></i></span>
                    <p>${myRecipe.tips[i]}</p>
                  </div>`;
  }
  imgSec.innerHTML = imgContent;
  infoSec.innerHTML = recipeInfo;
  ingredientSec.innerHTML = ingredientsList;
  instructionSec.innerHTML = instructionsList;
  nutritionSec.innerHTML = nutrition;
  tipsSec.innerHTML = tipsList;
}
getRandomRecipe();
