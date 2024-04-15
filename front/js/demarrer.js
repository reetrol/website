document.addEventListener('DOMContentLoaded', function() {
    var startMenu = document.getElementById('startMenu');
    var dropdown = document.getElementById('startMenuDropdown');

    startMenu.addEventListener('click', function(event) {
        dropdown.classList.toggle('show');
        event.stopPropagation();
    });

    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    });
});