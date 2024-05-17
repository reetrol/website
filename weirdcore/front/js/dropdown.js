document.addEventListener("DOMContentLoaded", function() {
    var header__buttons = document.querySelectorAll(".header__button-style");
    var dropdowns = document.querySelectorAll('.header__dropdown-content');

    var category_button = document.querySelectorAll(".music__button-category-style")
    var dropdown_category = document.querySelectorAll('.music__dropdown-content')
    
    header__buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            var dropdown_associated = button.nextElementSibling;
            console.log(button)
            dropdown_associated.classList.toggle('show');

            dropdowns.forEach(function(dropdown) {
                if (dropdown !== dropdown_associated) {
                    dropdown.classList.remove('show');
                }
            });
            event.stopPropagation();
        });
    });

    window.addEventListener('click', function() {
        dropdowns.forEach(function(dropdown) {
            dropdown.classList.remove('show');
        });
    });

    category_button.forEach(function(button) {
        button.addEventListener('click', function(event) {
            var dropdown_associated = button.nextElementSibling;
            dropdown_associated.classList.toggle('show');

            dropdown_category.forEach(function(dropdown) {
                if (dropdown !== dropdown_associated) {
                    dropdown.classList.remove('show');
                }
            });
            event.stopPropagation();
        });
    });

    window.addEventListener('click', function() {
        dropdown_category.forEach(function(dropdown) {
            dropdown.classList.remove('show');
        });
    });
});
