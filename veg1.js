function showVegetarianRecipes() {
    const recipeList = document.getElementById('recipeList');
    recipeList.innerHTML = ''; // Clear previous content

    const recipes = [
        {
            name: "Dosa",
            image: "dosa.jpg",
            ingredients: [
                "3 cups uncooked white rice",
                "1 cup urad dal (split black gram)",
                "1/2 teaspoon fenugreek seeds (optional)",
                "1/4 cup poha (flattened rice, optional)",
                "Salt to taste",
                "Water as needed for soaking and grinding"
            ],
            instructions: [
                "Soak the rice, urad dal, and fenugreek seeds in water for at least 6 hours or overnight.",
                "Drain the soaked ingredients and blend them with a little water to form a smooth batter.",
                "Add salt to the batter and let it ferment for 8-12 hours in a warm place.",
                "Heat a non-stick pan and pour a ladleful of batter, spreading it into a thin circle.",
                "Cook until the edges lift and the bottom is golden brown, then flip and cook for another minute.",
                "Serve hot with chutney or sambar."
            ]
        },
        {
            name: "Vegetable Stir Fry",
            image: "vegetable_stir_fry.jpg",
            ingredients: [
                "2 cups mixed vegetables (bell peppers, broccoli, carrots)",
                "2 tablespoons soy sauce",
                "1 tablespoon olive oil",
                "1 teaspoon garlic, minced",
                "Salt and pepper to taste",
                "Sesame seeds for garnish (optional)"
            ],
            instructions: [
                "Heat olive oil in a pan over medium heat.",
                "Add minced garlic and sauté for 1 minute.",
                "Add mixed vegetables and stir-fry for 5-7 minutes until tender.",
                "Pour in soy sauce, and season with salt and pepper.",
                "Cook for another 2 minutes, then serve hot, garnished with sesame seeds."
            ]
        },
        {
            name: "Chickpea Salad",
            image: "chickpea_salad.jpg",
            ingredients: [
                "1 can chickpeas, drained and rinsed",
                "1 cucumber, diced",
                "1 bell pepper, diced",
                "1/4 red onion, finely chopped",
                "2 tablespoons olive oil",
                "1 tablespoon lemon juice",
                "Salt and pepper to taste",
                "Fresh parsley for garnish (optional)"
            ],
            instructions: [
                "In a large bowl, combine chickpeas, cucumber, bell pepper, and red onion.",
                "In a small bowl, whisk together olive oil, lemon juice, salt, and pepper.",
                "Pour the dressing over the salad and toss to combine.",
                "Garnish with fresh parsley if desired and serve chilled."
            ]
        },
        {
            name: "Spinach and Ricotta Stuffed Shells",
            image: "stuffed_shells.jpg",
            ingredients: [
                "12 jumbo pasta shells",
                "1 cup ricotta cheese",
                "2 cups fresh spinach, chopped",
                "1/2 cup mozzarella cheese, shredded",
                "1/2 cup marinara sauce",
                "Salt and pepper to taste",
                "Parmesan cheese for topping (optional)"
            ],
            instructions: [
                "Preheat the oven to 375°F (190°C).",
                "Cook the pasta shells according to package instructions; drain and set aside.",
                "In a bowl, mix ricotta, spinach, mozzarella, salt, and pepper.",
                "Stuff each shell with the ricotta mixture and place in a baking dish.",
                "Pour marinara sauce over the stuffed shells and sprinkle with Parmesan cheese.",
                "Bake for 25-30 minutes until heated through and cheese is bubbly."
            ]
        },
        {
            name: "Vegetable Curry",
            image: "vegetable_curry.jpg",
            ingredients: [
                "1 tablespoon coconut oil",
                "1 onion, chopped",
                "2 cloves garlic, minced",
                "1 tablespoon ginger, grated",
                "2 cups mixed vegetables (carrots, peas, potatoes)",
                "1 can coconut milk",
                "2 tablespoons curry powder",
                "Salt to taste",
                "Fresh cilantro for garnish (optional)"
            ],
            instructions: [
                "Heat coconut oil in a pot over medium heat.",
                "Add onion, garlic, and ginger; sauté until onion is translucent.",
                "Add mixed vegetables and curry powder; stir to coat.",
                "Pour in coconut milk and bring to a simmer.",
                "Cook for 15-20 minutes until vegetables are tender; season with salt.",
                "Garnish with fresh cilantro and serve with rice or naan."
            ]
        },
        {
           Name: "Roasted Vegetable Salad",
           image:"roasted_veggesalad.jpg",
         ingredients:[
      "Mixed vegetables",
      "Olive oil",
      "Lemon juice",
      "Salt",
      "Pepper"
    ],
    instructions: [
      "Step 1: Preheat oven to 400°F (200°C).",
      "Step 2: Toss mixed vegetables with olive oil, salt, and pepper.",
      "Step 3: Roast in the oven for 20-25 minutes or until tender.",
      "Step 4: Mix with lemon juice and serve."
    ]
  },
  {
    Name: "Vegetable Khichdi",
    ingredients: [
      "Rice",
      "Moong dal",
      "Mixed vegetables",
      "Turmeric powder",
      "Cumin seeds",
      "Ginger",
      "Salt",
      "Ghee or olive oil"
    ],
    instructions: [
      "Step 1: Wash rice and moong dal together and soak for 30 minutes.",
      "Step 2: In a pressure cooker, heat ghee or olive oil and add cumin seeds.",
      "Step 3: Add chopped ginger and mixed vegetables; sauté for a few minutes.",
      "Step 4: Add soaked rice and dal, turmeric, salt, and enough water.",
      "Step 5: Cook for 2-3 whistles and let the pressure release naturally before serving."
    ]
  },
  {
    Name: "Sama Rice",
    ingredients: [
      "sama rice",
      "water",
      "Salt"
    ],
    instructions: [
      "Step 1: Rinse the sama rice thoroughly.",
      "Step 2: In a pot, add water and salt, and bring to a boil.",
      "Step 3: Add the rinsed sama rice, reduce heat to low, cover, and cook until the rice is tender",
      "Step 4: Fluff with a fork and serve."
    ]
  },
  {
    Name: "Millet Dosa",
    ingredients: [
      "millet flour",
      "rice flour",
      "urad dal flour",
      "Salt",
      "Water"
    ],
    instructions: [
      "Step 1: Mix millet flour, rice flour, urad dal flour, and salt in a bowl.",
      "Step 2: Add water gradually to make a smooth batter.",
      "Step 3: Heat a non-stick pan, pour a ladle of batter, and spread it into a circle.",
      "Step 4: Cook until golden brown on both sides and serve with chutney."
    ]
  },
  {
    Name: "Jowar Roti",
    ingredients: [
      "jowar flour",
      "Water",
      "Salt"
    ],
    instructions: [
      "Step 1: In a bowl, mix jowar flour and salt.",
      "Step 2: Gradually add water to form a soft dough.",
      "Step 3: Divide the dough into small balls and roll them out into flat discs.",
      "Step 4: Cook on a hot tava until both sides are cooked and serve hot."
    ]
  },
  {
    Name: "Oats Upma",
    ingredients: [
      "oats",
      "mixed vegetables",
      "onion",
      "green chilies",
      "Salt",
      "Oil"
    ],
    instructions: [
      "Step 1: Heat oil in a pan, add onions and green chilies, and sauté until onions are translucent.",
      "Step 2: Add mixed vegetables and cook for a few minutes.",
      "Step 3: Stir in oats and salt, and add water as needed.",
      "Step 4: Cook until oats are soft and serve hot."
    ]
  },
  {
    Name: "Oats Idli",
    ingredients: [
      "oats",
      "yogurt",
      "water",
      "baking soda",
      "Salt"
    ],
    instructions: [
      "Step 1: Grind oats into a fine powder.",
      "Step 2: Mix oats powder, yogurt, water, and salt to form a batter.",
      "Step 3: Add baking soda and mix well.",
      "Step 4: Pour the batter into idli molds and steam."
    ]
  },
  {
    Name: "Sprouts Salad",
    ingredients: [
      "mixed sprouts",
      "cucumber",
      "tomato",
      "onion",
      "Lemon juice",
      "Salt",
      "pepper"
    ],
    instructions: [
      "Step 1: In a bowl, combine mixed sprouts, cucumber, tomato, and onion.",
      "Step 2: Drizzle with lemon juice, and season with salt and pepper.",
      "Step 3: Toss well and serve fresh."
    ]
  },
  {
    Name: "Barley Khichdi",
    ingredients: [
      "barley",
      "moong dal",
      "onion",
      "tomato",
      "Spices",
      "Salt"
    ],
    instructions: [
      "Step 1: Rinse barley and moong dal thoroughly.",
      "Step 2: In a pressure cooker, sauté onions and tomatoes with spices.",
      "Step 3: Add barley, moong dal, and water.",
      "Step 4: Cook for a few whistles and serve hot."
    ]
  },
  {
    Name: "Chia Pudding",
    ingredients: [
      "chia seeds", 
      "almond milk",
      "sweetener",
      "vanilla extract",
      "fruits for topping"
    ],
    instructions: [
      "Step 1: In a bowl, combine chia seeds, almond milk, sweetener, and vanilla extract.",
      "Step 2: Mix well and let it sit for about 5 minutes.",
      "Step 3: Stir again to prevent clumping.",
      "Step 4: Cover and refrigerate for at least 2 hours or overnight to thicken.",
      "Step 5: Once set, serve chilled, topped with your choice of fruits."
    ]
  }
    ];

    recipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.className = 'recipe';
        recipeDiv.innerHTML = `
            <h2>${recipe.name}</h2>
            <button onclick="toggleDetails(this)">Show Details</button>
            <div class="image">
                <img src="${recipe.image}" alt="${recipe.name}">
            </div>
            <div class=ingredients>
                <strong>Ingredients:</strong>
                <ul>
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            </div>
            <div class=instructions>
                <strong>Instructions:</strong>
                <ol>
                    ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
                </ol>
            </div>
        `;
        recipeList.appendChild(recipeDiv);
    });
}

function toggleDetails(button) {
    const recipeDiv = button.parentElement;
    const image = recipeDiv.querySelector('.image');
    const ingredients = recipeDiv.querySelector('.ingredients');
    const instructions = recipeDiv.querySelector('.instructions');

    // Toggle visibility
    image.style.display = image.style.display === 'none' ? 'block' : 'none';
    ingredients.style.display = ingredients.style.display === 'none' ? 'block' : 'none';
    instructions.style.display = instructions.style.display === 'none' ? 'block' : 'none';
}