// Get slug from the URL
const slug = window.location.pathname.split('/').pop();

// Get product data from server via API-endpoint
fetch(`/api/products/${slug}`)
    .then(response => {
        if (!response.ok) { // Check if successfull or not
            throw new Error('Product not found');
        }
        return response.json();
    })
    .then(product => {
        // Update page title with product name
        document.title = product.name;

        // Update product info
        document.querySelector('.selected-product-headline').innerText = product.name;
        document.querySelector('.selected-product-brand').innerText = product.brand;
        document.querySelector('.selected-product-description').innerText = product.description; 
        document.querySelector('.selected-product-price').innerText = product.price;
        document.querySelector('.product-img img').src = product.imageUrl;
    })
    .catch(error => {
        console.error('Error fetching product data:', error);
        document.querySelector('.selected-product-headline').innerText = "Product not found";
    });