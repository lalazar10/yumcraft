document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const modal = document.getElementById('about-modal');
    const aboutLink = document.getElementById('about-link');
    const closeButton = document.querySelector('.close');

    aboutLink.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Page router
    const pathname = window.location.pathname;
    const params = new URLSearchParams(window.location.search);

    if (pathname.includes('index.html')) {
        renderHomePage();
    } else if (pathname.includes('categories.html')) {
        renderCategoriesPage();
    } else if (pathname.includes('category.html')) {
        const categoryId = params.get('id');
        if (categoryId) {
            renderCategoryPage(categoryId);
        } else {
            window.location.href = 'categories.html';
        }
    } else if (pathname.includes('recipe.html')) {
        const recipeId = params.get('id');
        if (recipeId) {
            renderRecipePage(recipeId);
        } else {
            window.location.href = 'index.html';
        }
    }
});

// Home page
function renderHomePage() {
    // Render featured categories
    const featuredCategoriesContainer = document.getElementById('featured-categories');
    if (featuredCategoriesContainer) {
        // Get random length of categories for display. ALways displays at leas the first 3 categories
        let value = Math.floor(Math.random() * 7);
        let random = value < 3 ? 3 : value;
        const featuredCategories = categories.slice(0, random);
        featuredCategoriesContainer.innerHTML = featuredCategories.map(category => createCategoryCard(category)).join(''); // dynamically create categories
    }

    // Render latest recipes
    const latestRecipesContainer = document.getElementById('latest-recipes');
    if (latestRecipesContainer) {
        // Sort recipes by date and get the 6 most recent
        const latestRecipes = [...recipes]
            .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
            .slice(0, 6);
        latestRecipesContainer.innerHTML = latestRecipes.map(recipe => createRecipeCard(recipe)).join('');
    }
}

// Categories page
function renderCategoriesPage() {
    const allCategoriesContainer = document.getElementById('all-categories');
    if (allCategoriesContainer) {
        allCategoriesContainer.innerHTML = categories.map(category => createCategoryCard(category)).join('');
    }
}

// Single category page
function renderCategoryPage(categoryId) {
    const category = categories.find(cat => cat.id === categoryId);
    if (!category) {
        window.location.href = 'categories.html';
        return;
    }

    // Set category details
    const categoryTitle = document.getElementById('category-title');
    const categoryDescription = document.getElementById('category-description');

    if (categoryTitle) categoryTitle.textContent = category.name;
    if (categoryDescription) categoryDescription.textContent = category.description;

    // Get recipes for this category
    const categoryRecipes = recipes.filter(recipe => recipe.categoryId === categoryId);
    const categoryRecipesContainer = document.getElementById('category-recipes');

    if (categoryRecipesContainer) {
        if (categoryRecipes.length > 0) {
            categoryRecipesContainer.innerHTML = categoryRecipes.map(recipe => createRecipeCard(recipe)).join('');
        } else {
            categoryRecipesContainer.innerHTML = '<p>No recipes found in this category yet.</p>';
        }
    }
}

// Recipe page
function renderRecipePage(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) {
        window.location.href = 'index.html';
        return;
    }

    // Set recipe details
    const recipeTitle = document.getElementById('recipe-title');
    const recipeDescription = document.getElementById('recipe-description');

    if (recipeTitle) recipeTitle.textContent = recipe.name;
    if (recipeDescription) recipeDescription.textContent = recipe.description;

    // Render recipe content
    const recipeContainer = document.getElementById('recipe-container');
    if (recipeContainer) {
        recipeContainer.innerHTML = `
            <div class="recipe-image">
                <img src="${recipe.image}" alt="${recipe.name}">
            </div>
            <div class="recipe-content">
                <div class="recipe-meta">
                    <div class="prep-time">
                        <strong>Prep Time:</strong> ${recipe.prepTime} mins
                    </div>
                    <div class="cook-time">
                        <strong>Cook Time:</strong> ${recipe.cookTime} mins
                    </div>
                    <div class="servings">
                        <strong>Servings:</strong> ${recipe.servings}
                    </div>
                </div>

                <div class="ingredients">
                    <h3>Ingredients</h3>
                    <ul class="ingredients-list">
                        ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                    </ul>
                </div>

                <div class="instructions">
                    <h3>Instructions</h3>
                    <ol class="instructions-list">
                        ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                    </ol>
                </div>

                <div class="category-link">
                    <p>Category: <a href="category.html?id=${recipe.categoryId}">${getCategoryName(recipe.categoryId)}</a></p>
                </div>
            </div>
        `;
    }

    // Related recipes (same category, excluding current recipe)
    const relatedRecipesContainer = document.getElementById('related-recipes');
    if (relatedRecipesContainer) {
        const relatedRecipes = recipes
            .filter(r => r.categoryId === recipe.categoryId && r.id !== recipe.id)
            .slice(0, 3);

        if (relatedRecipes.length > 0) {
            relatedRecipesContainer.innerHTML = relatedRecipes.map(recipe => createRecipeCard(recipe)).join('');
        } else {
            relatedRecipesContainer.innerHTML = '<p>No related recipes found.</p>';
        }
    }
}

// Helper functions to render each element
function createCategoryCard(category) {
    return `
        <a href="category.html?id=${category.id}" class="category-card">
            <div class="card-image">
                <img src="${category.image}" alt="${category.name}">
            </div>
            <div class="card-content">
                <h3>${category.name}</h3>
                <p>${category.description}</p>
            </div>
        </a>
    `;
}

function createRecipeCard(recipe) {
    return `
        <a href="recipe.html?id=${recipe.id}" class="recipe-card">
            <div class="card-image">
                <img src="${recipe.image}" alt="${recipe.name}">
            </div>
            <div class="card-content">
                <h3>${recipe.name}</h3>
                <p>${recipe.description}</p>
                <div class="recipe-meta">
                    <span>Category: ${getCategoryName(recipe.categoryId)}</span>
                    <span>Time: ${recipe.prepTime + recipe.cookTime} mins</span>
                </div>
            </div>
        </a>
    `;
}

function getCategoryName(categoryId) {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Uncategorized';
}

