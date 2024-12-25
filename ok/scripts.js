// Search Functionality
function searchReviews() {
    // Get the search query and the list of review items
    const query = document.getElementById("search-bar").value.toLowerCase();
    const reviews = document.getElementsByClassName("review-item");

    // Loop through all review items
    for (let i = 0; i < reviews.length; i++) {
        let review = reviews[i].textContent.toLowerCase();

        // If the review matches the search query, show it; otherwise, hide it
        if (review.includes(query)) {
            reviews[i].style.display = "block";
        } else {
            reviews[i].style.display = "none";
        }
    }
}
