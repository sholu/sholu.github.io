// No need for full jQuery wrapper for a simple preloader
document.addEventListener('DOMContentLoaded', function() {
    // Simple preloader with vanilla JavaScript
    setTimeout(function() {
        var preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.display = 'none';
        }
    }, 200);
});