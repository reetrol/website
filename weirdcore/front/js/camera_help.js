document.addEventListener("DOMContentLoaded", function() {
    const button_help = document.getElementById('help__surveillance-button');
    const button_close = document.getElementById('close-help__surveillance-button');
    const help_window = document.getElementsByClassName('help__surveillance')[0];
    console.log(help_window)

    button_help.addEventListener('click', function() {
        console.log(help_window.classList)
        if (!help_window.classList.contains('show')) {
            help_window.classList.add('show');
        }
    });
    button_close.addEventListener('click', function() {
        if(help_window.classList.contains('show')) {
            help_window.classList.remove('show');
        }
    });
});