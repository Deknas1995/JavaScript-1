const express = require('express');
const path = require('path');

const app = express();

// Serve static files (CSS, JS, images, etc.) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Sample product data
const products = [
    { name: "Svart T-shirt", price: "199 SEK", brand: "Levis", imageUrl: "/images/product.png", slug: "svart-tshirt", isNew: true },
    { name: "Vit T-shirt", price: "249 SEK", brand: "Nike", imageUrl: "/images/product.png", slug: "vit-tshirt", isNew: false },
    { name: "Blå T-shirt", price: "179 SEK", brand: "Adidas", imageUrl: "/images/product.png", slug: "bla-tshirt", isNew: false },
    // Add the rest of your products...
];

// Route for serving the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for serving a product detail page by slug
app.get('/products/:slug', (req, res) => {
    const productSlug = req.params.slug;
    const product = products.find(p => p.slug === productSlug);

    if (product) {
        res.sendFile(path.join(__dirname, 'public', 'product-details.html'));
    } else {
        res.status(404).send('Product not found');
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
