document.addEventListener('DOMContentLoaded', function() {
    // Home page - Enlighten button
    const enlightenButton = document.getElementById('enlightenButton');
    const poemContainer = document.getElementById('poemContainer');
    
    if (enlightenButton && poemContainer) {
        poemContainer.style.display = 'none'; // Ensure poem is hidden initially
        enlightenButton.addEventListener('click', function() {
            // Toggle visibility of poemContainer
            if (poemContainer.style.display === 'none') {
                poemContainer.style.display = 'block';
            } else {
                poemContainer.style.display = 'none';
            }
        });
    }

    // Recipes page - Dropdown functionality
    const recipeButtons = document.querySelectorAll('.recipe-button');
    
    recipeButtons.forEach(button => {
        // Hide all recipe content initially
        const content = button.nextElementSibling;
        content.style.display = 'none';
        
        button.addEventListener('click', function() {
            // Toggle visibility of recipe content
            if (content.style.display === 'none') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});
