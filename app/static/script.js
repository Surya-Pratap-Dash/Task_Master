// JavaScript logic for any interactivity on the page
// This is a simple example of removing a task on clicking "Delete"

// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    // Get all the delete links
    const deleteLinks = document.querySelectorAll('a');

    // Attach event listener to each delete link
    deleteLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior

            // Confirm the user's action
            const confirmDelete = confirm('Are you sure you want to delete this task?');
            if (confirmDelete) {
                // Redirect to the delete URL
                window.location.href = link.getAttribute('href');
            }
        });
    });

    // Get all the update links
    const updateLinks = document.querySelectorAll('a[data-update]');

    // Attach event listener to each update link
    updateLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior

            // Confirm the user's action
            const confirmUpdate = confirm('Do you want to update the task?');
            if (confirmUpdate) {
                // Redirect to the update URL
                window.location.href = link.getAttribute('href');
            }
        });
    });
});
