let users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    {username:'user3',password:'pass1'}
];

let recipes = [];

// Load recipes from JSON file
fetch('recipes.json')
    .then(response => response.json())
    .then(data => {
        recipes = data;
    });

// Login functionality
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        window.location.href = 'recipe-options.html';
    } else {
        alert('Invalid credentials');
    }
});



// Find recipes by ingredients
document.getElementById('generateRecipe').addEventListener('click', function () {
    const ingredientsInput = document.getElementById('ingredients').value;
    const ingredients = ingredientsInput.split(',').map(ingredient => ingredient.trim());

    fetch('recipes.json')
        .then(response => response.json())
        .then(recipes => {
            const matchingRecipes = recipes.filter(recipe =>
                ingredients.every(ingredient => recipe.ingredients.includes(ingredient))
            );

            const recipeDisplay = document.getElementById('recipeDisplay');
            recipeDisplay.innerHTML = '';

            if (matchingRecipes.length > 0) {
                matchingRecipes.forEach(recipe => {
                    // Format ingredients step by step (no numbers)
                    const ingredientSteps = recipe.ingredients
                        .map(ingredient => `<li>${ingredient}</li>`)  // No numbering for ingredients
                        .join('');

                    // Format instructions without numbers or step labels
                    const instructionSteps = recipe.instructions
                        .map(instruction => `<li>${instruction}</li>`)  // Just display the instruction text without numbers
                        .join('');

                    // Display the recipe with ingredients and instructions
                    recipeDisplay.innerHTML += `
                        <div>
                            <h3>${recipe.name}</h3>
                            <h4>Ingredients:</h4>
                            <ul>
                                ${ingredientSteps}
                            </ul>
                            <h4>Instructions:</h4>
                            <ul>
                                ${instructionSteps}  <!-- Change here from <ol> to <ul> for list without numbers -->
                            </ul>
                        </div>
                        <hr>
                    `;
                });
            } else {
                recipeDisplay.innerHTML = '<p>No matching recipes found.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching recipes:', error);
        });
});
