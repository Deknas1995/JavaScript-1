// Add event listener to the form, when submit is done trigger post request
document.getElementById('new-product-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevents page from refreshing

    // Create a FormData object from the form
    // event.target refers to the form that triggered the event
    const formData = new FormData(event.target);

    try {
        // Post request, submit data to server, send formData object containing all the form data
        const response = await fetch('/api/products', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Something went wrong when adding a product!');
        }

        const result = await response.json();
        console.log('Added product:', result);
        
        // Redirects the user to the /admin/products page
        window.location.href = '/admin/products';
    } catch (error) {
        console.error('Error:', error);
        alert('Could not add product: ' + error.message);
    }
});