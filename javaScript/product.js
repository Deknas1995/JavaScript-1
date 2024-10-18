// Get the full URL after the '?'
const urlParams = window.location.search;

// Extract the product slug by splitting the string
const productSlug = urlParams.split('/')[1]; // Get the part after 'product/'

// Function to get product data by slug
function getProductData(slug) {
    return products.find(product => product.slug === slug);
}

// Use the slug to find the right product and display its details
const productData = getProductData(productSlug);

if (productData) {
    // Update product details on the page
    document.querySelector('.selected-product-headline').innerText = productData.name;
    document.querySelector('.selected-product-brand').innerText = productData.brand;
    document.querySelector('.selected-product-description').innerText = 'Produktbeskrivning här'; // Lägg till din produktbeskrivning
    document.querySelector('.selected-product-price').innerText = productData.price;
    document.querySelector('.product-img img').src = productData.imageUrl;
}