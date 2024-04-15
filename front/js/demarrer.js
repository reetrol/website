document.addEventListener('DOMContentLoaded', function() {
    var startMenu = document.getElementById('startMenu');
    var startMenuDropdown = document.getElementById('startMenuDropdown');

    startMenu.addEventListener('click', function(event) {
        startMenuDropdown.classList.toggle('start-menu__dropdown--show');
        event.stopPropagation();
    });

    document.addEventListener('click', function(event) {
        if (!startMenuDropdown.contains(event.target) && event.target !== startMenu) {
            startMenuDropdown.classList.remove('start-menu__dropdown--show');
        }
    });
});