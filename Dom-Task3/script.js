document.getElementById('Toggle').addEventListener('click', function() {
    var contentDiv = document.getElementById('hidden');
    if (contentDiv.style.display === 'none') {
        contentDiv.style.display = 'block';
    } else {
        contentDiv.style.display = 'none';
    }
});