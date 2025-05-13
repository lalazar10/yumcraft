// TODO: Butun datalari json faylina cevir.

// Categories
const categories = [
    {
        id: 'breakfast',
        name: 'Breakfast',
        description: 'Start your day with these delicious breakfast recipes',
        image: 'images/breakfast.png'
    },
    {
        id: 'lunch',
        name: 'Lunch',
        description: 'Perfect midday meals that are both satisfying and quick to prepare',
        image: 'images/lunch.png'
    },
    {
        id: 'dinner',
        name: 'Dinner',
        description: 'Hearty and delicious dinner recipes for the whole family',
        image: 'images/dinner.png'
    },
    {
        id: 'desserts',
        name: 'Desserts',
        description: 'Sweet treats to satisfy your cravings',
        image: 'images/desserts.png'
    },
    {
        id: 'vegetarian',
        name: 'Vegetarian',
        description: 'Delicious meat-free meals packed with flavor',
        image: 'images/vegetarian.png'
    },
    {
        id: 'quick-meals',
        name: 'Quick Meals',
        description: 'Ready in 30 minutes or less when you\'re short on time',
        image: 'images/quick-meals.png'
    }
];

// Recipes
const recipes = [
    {
        id: 'avocado-toast',
        name: 'Avocado Toast with Poached Egg',
        description: 'A simple yet delicious breakfast that\'s packed with healthy fats and protein',
        categoryId: 'breakfast',
        prepTime: 10,
        cookTime: 5,
        servings: 1,
        image: 'images/avocado-toast.png',
        ingredients: [
            '1 slice of sourdough bread',
            '1 ripe avocado',
            '1 egg',
            '1 tablespoon white vinegar',
            'Salt and pepper to taste',
            'Red pepper flakes (optional)',
            'Fresh herbs for garnish (optional)'
        ],
        instructions: [
            'Toast the bread until golden and crispy.',
            'Cut the avocado in half, remove the pit, and scoop the flesh into a bowl. Mash with a fork and season with salt and pepper.',
            'Bring a pot of water to a gentle simmer. Add vinegar.',
            'Crack the egg into a small bowl. Create a gentle whirlpool in the simmering water and carefully slide the egg in.',
            'Cook for 3-4 minutes for a runny yolk, then remove with a slotted spoon.',
            'Spread the mashed avocado on the toast, top with the poached egg, and season with salt, pepper, and red pepper flakes if desired.',
            'Garnish with fresh herbs if using.'
        ],
        dateAdded: '2023-06-15'
    },
    {
        id: 'blueberry-pancakes',
        name: 'Fluffy Blueberry Pancakes',
        description: 'Light and fluffy pancakes studded with juicy blueberries',
        categoryId: 'breakfast',
        prepTime: 10,
        cookTime: 15,
        servings: 4,
        image: 'images/blueberry-pancakes.png',
        ingredients: [
            '2 cups all-purpose flour',
            '2 tablespoons sugar',
            '1 tablespoon baking powder',
            '1/2 teaspoon salt',
            '2 eggs',
            '1 3/4 cups milk',
            '1/4 cup melted butter',
            '1 teaspoon vanilla extract',
            '1 cup fresh blueberries',
            'Maple syrup for serving'
        ],
        instructions: [
            'In a large bowl, whisk together flour, sugar, baking powder, and salt.',
            'In another bowl, beat the eggs, then add milk, melted butter, and vanilla.',
            'Pour the wet ingredients into the dry ingredients and stir until just combined. Some lumps are okay.',
            'Gently fold in the blueberries.',
            'Heat a griddle or non-stick pan over medium heat. Lightly grease with butter or cooking spray.',
            'Pour 1/4 cup of batter for each pancake. Cook until bubbles form on the surface, then flip and cook until golden.',
            'Serve warm with maple syrup.'
        ],
        dateAdded: '2023-05-20'
    },
    {
        id: 'caprese-sandwich',
        name: 'Caprese Sandwich',
        description: 'A simple Italian-inspired sandwich with tomato, mozzarella, and basil',
        categoryId: 'lunch',
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        image: 'images/caprese-sandwich.png',
        ingredients: [
            '1 ciabatta roll or small baguette',
            '2 slices fresh mozzarella',
            '1 ripe tomato, sliced',
            'Fresh basil leaves',
            '1 tablespoon extra virgin olive oil',
            '1 tablespoon balsamic glaze',
            'Salt and pepper to taste'
        ],
        instructions: [
            'Slice the roll or baguette in half horizontally.',
            'Layer the sliced mozzarella and tomato on the bottom half.',
            'Season with salt and pepper.',
            'Add fresh basil leaves on top.',
            'Drizzle with olive oil and balsamic glaze.',
            'Top with the other half of the bread and enjoy!'
        ],
        dateAdded: '2023-07-10'
    },
    {
        id: 'grilled-chicken-salad',
        name: 'Grilled Chicken Caesar Salad',
        description: 'A classic Caesar salad topped with juicy grilled chicken',
        categoryId: 'lunch',
        prepTime: 15,
        cookTime: 10,
        servings: 2,
        image: 'images/grilled-chicken-salad.png',
        ingredients: [
            '2 boneless, skinless chicken breasts',
            '1 tablespoon olive oil',
            '1 teaspoon Italian seasoning',
            'Salt and pepper to taste',
            '1 large head romaine lettuce, chopped',
            '1/2 cup Caesar dressing',
            '1/4 cup grated Parmesan cheese',
            '1 cup croutons',
            '1 lemon, cut into wedges'
        ],
        instructions: [
            'Season chicken breasts with olive oil, Italian seasoning, salt, and pepper.',
            'Preheat grill or grill pan to medium-high heat. Grill chicken for 5-6 minutes per side until fully cooked.',
            'Let chicken rest for 5 minutes, then slice into strips.',
            'In a large bowl, toss romaine lettuce with Caesar dressing.',
            'Divide the dressed lettuce between two plates.',
            'Top with sliced grilled chicken, Parmesan cheese, and croutons.',
            'Serve with lemon wedges on the side.'
        ],
        dateAdded: '2023-06-05'
    },
    {
        id: 'spaghetti-carbonara',
        name: 'Spaghetti Carbonara',
        description: 'Classic Italian pasta dish with a creamy egg sauce and pancetta',
        categoryId: 'dinner',
        prepTime: 10,
        cookTime: 15,
        servings: 4,
        image: 'images/spaghetti-carbonara.png',
        ingredients: [
            '1 pound (450g) spaghetti',
            '4 ounces (115g) pancetta or guanciale, diced',
            '2 large eggs plus 2 egg yolks',
            '1 cup grated Pecorino Romano cheese',
            '1 teaspoon freshly ground black pepper',
            'Salt to taste'
        ],
        instructions: [
            'Bring a large pot of salted water to a boil and cook spaghetti according to package directions until al dente.',
            'While pasta is cooking, heat a large skillet over medium heat. Add the diced pancetta and cook until crispy.',
            'In a bowl, whisk together eggs, egg yolks, and grated Pecorino Romano cheese.',
            'When pasta is done, reserve 1 cup of pasta water, then drain.',
            'Working quickly, add hot pasta to the skillet with pancetta, removing from heat.',
            'Immediately pour in egg mixture, stirring constantly. The residual heat will cook the eggs into a creamy sauce.',
            'Add some reserved pasta water if needed to achieve a silky consistency.',
            'Season with black pepper and serve immediately, topped with additional cheese if desired.'
        ],
        dateAdded: '2023-07-25'
    },
    {
        id: 'vegetable-curry',
        name: 'Vegetable Curry',
        description: 'A hearty, spiced vegetable curry that\'s both vegan and gluten-free',
        categoryId: 'dinner',
        prepTime: 15,
        cookTime: 30,
        servings: 4,
        image: 'images/vegetable-curry.png',
        ingredients: [
            '1 tablespoon vegetable oil',
            '1 large onion, diced',
            '3 cloves garlic, minced',
            '1 tablespoon grated ginger',
            '2 tablespoons curry powder',
            '1 teaspoon ground cumin',
            '1 teaspoon ground turmeric',
            '1 can (14 oz) diced tomatoes',
            '1 can (14 oz) coconut milk',
            '2 cups mixed vegetables (e.g., cauliflower, peas, carrots, bell peppers)',
            '1 can (15 oz) chickpeas, drained and rinsed',
            'Salt to taste',
            'Fresh cilantro for garnish',
            'Cooked rice for serving'
        ],
        instructions: [
            'Heat oil in a large pot over medium heat. Add onion and cook until soft, about 5 minutes.',
            'Add garlic and ginger and cook for another minute.',
            'Stir in curry powder, cumin, and turmeric and cook until fragrant, about 30 seconds.',
            'Add diced tomatoes and cook for 2-3 minutes.',
            'Add coconut milk, mixed vegetables, and chickpeas. Bring to a simmer.',
            'Cook covered for about 20 minutes, or until vegetables are tender.',
            'Season with salt to taste.',
            'Garnish with fresh cilantro and serve over rice.'
        ],
        dateAdded: '2023-04-18'
    },
    {
        id: 'chocolate-chip-cookies',
        name: 'Classic Chocolate Chip Cookies',
        description: 'Soft and chewy chocolate chip cookies with crisp edges',
        categoryId: 'desserts',
        prepTime: 15,
        cookTime: 10,
        servings: 24,
        image: 'images/chocolate-chip-cookies.png',
        ingredients: [
            '2 1/4 cups all-purpose flour',
            '1 teaspoon baking soda',
            '1 teaspoon salt',
            '1 cup (2 sticks) unsalted butter, softened',
            '3/4 cup granulated sugar',
            '3/4 cup packed brown sugar',
            '2 large eggs',
            '2 teaspoons vanilla extract',
            '2 cups semi-sweet chocolate chips'
        ],
        instructions: [
            'Preheat oven to 375°F (190°C). Line baking sheets with parchment paper.',
            'In a small bowl, whisk together flour, baking soda, and salt.',
            'In a large bowl, beat butter, granulated sugar, and brown sugar until creamy.',
            'Add eggs one at a time, then stir in vanilla.',
            'Gradually blend in the flour mixture.',
            'Stir in chocolate chips.',
            'Drop rounded tablespoons of dough onto baking sheets, spacing them about 2 inches apart.',
            'Bake for 9 to 11 minutes or until golden brown.',
            'Cool on baking sheets for 2 minutes, then transfer to wire racks to cool completely.'
        ],
        dateAdded: '2023-07-02',
    },
    {
        id: 'strawberry-smoothie',
        name: 'Strawberry Banana Smoothie',
        description: 'A refreshing and healthy smoothie that\'s perfect for breakfast or a snack',
        categoryId: 'breakfast',
        prepTime: 5,
        cookTime: 0,
        servings: 2,
        image: 'images/strawberry-smoothie.png',
        ingredients: [
            '2 cups frozen strawberries',
            '1 ripe banana',
            '1 cup Greek yogurt',
            '1 cup milk (dairy or plant-based)',
            '1 tablespoon honey or maple syrup (optional)',
            '1/2 teaspoon vanilla extract'
        ],
        instructions: [
            'Add all ingredients to a blender.',
            'Blend until smooth and creamy, about 1 minute.',
            'Add more milk if needed to reach desired consistency.',
            'Taste and add sweetener if needed.',
            'Pour into glasses and serve immediately.'
        ],
        dateAdded: '2023-07-28'
    },
    {
        id: 'veggie-stir-fry',
        name: 'Quick Vegetable Stir Fry',
        description: 'A colorful and nutritious stir fry that comes together in minutes',
        categoryId: 'quick-meals',
        prepTime: 10,
        cookTime: 10,
        servings: 2,
        image: 'images/veggie-stir-fry.png',
        ingredients: [
            '2 tablespoons vegetable oil',
            '2 cloves garlic, minced',
            '1 tablespoon grated ginger',
            '1 bell pepper, sliced',
            '1 carrot, thinly sliced',
            '1 cup broccoli florets',
            '1 cup snow peas',
            '2 tablespoons soy sauce',
            '1 tablespoon honey or maple syrup',
            '1 teaspoon sesame oil',
            '1/4 teaspoon red pepper flakes (optional)',
            '2 green onions, sliced',
            '1 tablespoon sesame seeds',
            'Cooked rice or noodles for serving'
        ],
        instructions: [
            'Heat vegetable oil in a large wok or skillet over high heat.',
            'Add garlic and ginger and stir for 30 seconds.',
            'Add bell pepper, carrot, broccoli, and snow peas. Stir fry for 3-4 minutes until vegetables are crisp-tender.',
            'In a small bowl, mix soy sauce, honey, and sesame oil.',
            'Pour sauce over vegetables and stir to coat.',
            'Cook for another 1-2 minutes until sauce thickens slightly.',
            'Stir in green onions and red pepper flakes if using.',
            'Sprinkle with sesame seeds and serve immediately over rice or noodles.'
        ],
        dateAdded: '2023-06-30'
    },
    {
        id: 'quinoa-salad',
        name: 'Mediterranean Quinoa Salad',
        description: 'A protein-rich salad with fresh Mediterranean flavors',
        categoryId: 'vegetarian',
        prepTime: 15,
        cookTime: 15,
        servings: 4,
        image: 'images/quinoa-salad.png',
        ingredients: [
            '1 cup uncooked quinoa, rinsed',
            '2 cups water',
            '1/4 cup olive oil',
            '2 tablespoons lemon juice',
            '1 clove garlic, minced',
            '1 teaspoon dried oregano',
            '1/2 cucumber, diced',
            '1 cup cherry tomatoes, halved',
            '1/2 red onion, finely diced',
            '1/2 cup kalamata olives, pitted and halved',
            '1/2 cup crumbled feta cheese',
            '1/4 cup fresh parsley, chopped',
            'Salt and pepper to taste'
        ],
        instructions: [
            'In a medium saucepan, combine quinoa and water. Bring to a boil, then reduce to a simmer, cover, and cook for 15 minutes until water is absorbed.',
            'Remove from heat and let stand, covered, for 5 minutes. Fluff with a fork and transfer to a large bowl to cool.',
            'In a small bowl, whisk together olive oil, lemon juice, garlic, and oregano to make the dressing.',
            'Once quinoa has cooled to room temperature, add cucumber, tomatoes, red onion, olives, feta cheese, and parsley.',
            'Pour dressing over the salad and toss gently to combine.',
            'Season with salt and pepper to taste.',
            'Serve immediately or refrigerate for up to 3 days.'
        ],
        dateAdded: '2023-05-12'
    }
];

