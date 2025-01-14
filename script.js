// Example for tracking views and handling likes (for the first post)
const views1 = document.getElementById('views1');
const likeBtn1 = document.getElementById('likeBtn1');

let viewCount1 = 0;
let isLiked1 = false;

// Update views on page load
views1.textContent = viewCount1; 

// Increment views on each page load
viewCount1++;
views1.textContent = viewCount1;

likeBtn1.addEventListener('click', () => {
    if (isLiked1) {
        // If already liked, remove like
        likeBtn1.textContent = 'Like';
        isLiked1 = false;
    } else {
        // If not liked, add like
        likeBtn1.textContent = 'Liked';
        isLiked1 = true;
    }
});

// Add similar logic for other posts




// Function to share content
