const express = require('express');
const path = require('path');

const app = express();

// Serve static files (CSS, JS, images, etc.) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));




// Sample product data
const products = [
    { name: "Svart T-shirt", price: "199 SEK", brand: "Levis", sku:"AAA111", imageUrl: "../images/product.png", slug: "svart-tshirt", isNew: true },
    { name: "Vit T-shirt", price: "249 SEK", brand: "Nike", sku:"AAA112", imageUrl: "../images/product.png", slug: "vit-tshirt", isNew: false },
    { name: "Blå T-shirt", price: "179 SEK", brand: "Adidas",sku:"AAA113", imageUrl: "../images/product.png", slug: "bla-tshirt", isNew: false },
    { name: "Grön T-shirt", price: "299 SEK", brand: "Puma",sku:"AAA114", imageUrl: "../images/product.png", slug: "gron-tshirt", isNew: false },
    { name: "Gul T-shirt", price: "159 SEK", brand: "H&M",sku:"AAA115", imageUrl: "../images/product.png", slug: "gul-tshirt", isNew: false },
    { name: "Röd T-shirt", price: "199 SEK", brand: "Zara",sku:"AAA116", imageUrl: "../images/product.png", slug: "rod-tshirt", isNew: false },
    { name: "Lila T-shirt", price: "279 SEK", brand: "Gucci",sku:"AAA117", imageUrl: "../images/product.png", slug: "lila-tshirt", isNew: false },
    { name: "Orange T-shirt", price: "229 SEK", brand: "Reebok",sku:"AAA118", imageUrl: "../images/product.png", slug: "orange-tshirt", isNew: false }
];


// GET requests HOME
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// GET requests ADMIN
app.get('/admin/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin', 'products', 'index.html'));
});


// GET requests ADMIN new
app.get('/admin/products/new', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin', 'products', 'new.html'));
});


// GET requests to product details page (just serve HTML)
app.get('/products/:slug', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'product-details.html'));
});


// API route to get products
app.get('/api/getProducts', (req, res) => {
    res.json(products); // Return the product data as JSON
});


// GET product data as JSON
app.get('/api/products/:slug', (req, res) => {
    const productSlug = req.params.slug;
    const product = products.find(p => p.slug === productSlug);

    if (product) {
        res.json(product); // Return product data as JSON
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
