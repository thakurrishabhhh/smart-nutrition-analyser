

foods.forEach(food => {
    document.getElementById(`analyze-button-${food.name.toLowerCase()}`).addEventListener('click', function() {
        
        document.getElementById('protein').textContent = food.protein; // Protein in grams
        document.getElementById('carbs').textContent = food.carbs;   // Carbs in grams
        document.getElementById('fats').textContent = food.fats;    // Fats in grams
        document.getElementById('calories').textContent = food.calories; // Calories
    });

    document.getElementById(`save-results-${food.name.toLowerCase()}`).addEventListener('click', function() {
        alert(`${food.name} results saved!`); // Placeholder for saving functionality
    });
});
