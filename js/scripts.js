// Simple preloader script
document.addEventListener('DOMContentLoaded', function() {
    // Hide preloader when page is loaded
    setTimeout(function() {
        var preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.display = 'none';
        }
    }, 200);
});