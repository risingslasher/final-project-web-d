function searchItems() {
    // Get the search input and convert it to lowercase for case-insensitive matching
    const query = document.getElementById('search-bar').value.toLowerCase();
    
    // Get all the list items (reviews or posts)
    const items = document.querySelectorAll('.item');
    
    // Loop through all items and hide those that don't match the query
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        
        if (text.includes(query)) {
            item.style.display = '';  // Show item
        } else {
            item.style.display = 'none';  // Hide item
        }
    });
}
