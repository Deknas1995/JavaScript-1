// This event is triggered when the initial HTML document has been completely loaded
document.addEventListener('DOMContentLoaded', function () {

    // Get the container element for similar products
    const similarProductsContainer = document.getElementById('similar-products-grid');

    // Get products from server
    fetch('/api/getProducts')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(products => {
            // Fetch 3 random products
            const shuffled = products.sort(() => 0.5 - Math.random()); // Randomize product order
            const randomProducts = shuffled.slice(0, 3); // Get the first 3 products

            // Generate HTML for each product and add it to the container
            randomProducts.forEach(product => {
                const productHTML = `
                    <div class="product">
                        <a href="/products/${product.slug}">
                            <img src="${product.imageUrl}" alt="${product.name}">
                            <i class="fa-regular fa-heart"></i>
                        </a>
                        <div class="product-text-div">
                            <h4 class="product-description">${product.name}</h4>
                            <h4 class="product-price">${product.price}</h4>
                            <p class="product-brand">${product.brand}</p>
                        </div>
                    </div>
                `;
                similarProductsContainer.innerHTML += productHTML;
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
            similarProductsContainer.innerHTML = '<p>Det gick inte att hämta produkter.</p>';
        });
});
