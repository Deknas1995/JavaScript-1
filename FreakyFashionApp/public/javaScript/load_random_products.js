document.addEventListener('DOMContentLoaded', function () {
    console.log("loaded");
    // List of example products
    const products = [
        { name: "Svart T-shirt", price: "199 SEK", brand: "Levis", imageUrl: "../images/product.png", url: "#product1" },
        { name: "Blå Jeans", price: "399 SEK", brand: "Wrangler", imageUrl: "../images/product.png", url: "#product2" },
        { name: "Vit Skjorta", price: "299 SEK", brand: "H&M", imageUrl: "../images/product.png", url: "#product3" },
        { name: "Grön Hoodie", price: "499 SEK", brand: "Adidas", imageUrl: "../images/product.png", url: "#product4" },
        { name: "Röd Klänning", price: "599 SEK", brand: "Zara", imageUrl: "../images/product.png", url: "#product5" },
        { name: "Svarta Skor", price: "899 SEK", brand: "Nike", imageUrl: "../images/product.png", url: "#product6" }
    ];

    // Function to get random products
    function getRandomProducts(productArray, count) {
        const shuffled = productArray.sort(() => 0.5 - Math.random()); // Randomize product order
        return shuffled.slice(0, count); // Get the first 'count' products
    }

    // Get the container element for similar products
    const similarProductsContainer = document.getElementById('similar-products-grid');

    // Fetch 3 random products
    const randomProducts = getRandomProducts(products, 3);

    // Generate HTML for each product and add it to the container
    randomProducts.forEach(product => {
        const productHTML = `
            <div class="product">
                <a href="${product.url}">
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
});
