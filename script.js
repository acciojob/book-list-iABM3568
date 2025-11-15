//your JS code here. If required.
// STEP 1: Get all the elements we need
        const titleInput = document.getElementById('title');
        const authorInput = document.getElementById('author');
        const isbnInput = document.getElementById('isbn');
        const submitButton = document.getElementById('submit');
        const bookList = document.getElementById('book-list');
        
        // STEP 2: Listen for the submit button click
        submitButton.addEventListener('click', function() {
            // Get the values from input fields
            const title = titleInput.value;
            const author = authorInput.value;
            const isbn = isbnInput.value;
            
            // Check if all fields are filled
            if (title === '' || author === '' || isbn === '') {
                alert('Please fill in all fields!');
                return;
            }
            
            // Create a new row
            const row = document.createElement('tr');
            
            // Add the book data to the row
            row.innerHTML = `
                <td>${title}</td>
                <td>${author}</td>
                <td>${isbn}</td>
                <td><button class="delete">Delete</button></td>
            `;
            
            // Add the row to the table
            bookList.appendChild(row);
            
            // Clear the input fields
            titleInput.value = '';
            authorInput.value = '';
            isbnInput.value = '';
            
            // Put focus back on title field
            titleInput.focus();
        });
        
        // STEP 3: Listen for delete button clicks (using event delegation)
        bookList.addEventListener('click', function(e) {
            // Check if the clicked element is a delete button
            if (e.target.classList.contains('delete')) {
                // Remove the row
                e.target.closest('tr').remove();
            }
        });
        
        // STEP 4: Allow pressing Enter to submit
        document.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                submitButton.click();
            }
        });