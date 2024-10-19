const express = require('express');
const path = require('path');

const app = express();

// Serve static files (CSS, JS, images, etc.) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve static files from the 'admin' folder
app.use('/admin', express.static(path.join(__dirname, 'admin')));



// Sample product data
const products = [
    { name: "Svart T-shirt", price: "199 SEK", brand: "Levis", imageUrl: "../images/product.png", slug: "svart-tshirt", isNew: true },
    { name: "Vit T-shirt", price: "249 SEK", brand: "Nike", imageUrl: "../images/product.png", slug: "vit-tshirt", isNew: false },
    { name: "Blå T-shirt", price: "179 SEK", brand: "Adidas", imageUrl: "../images/product.png", slug: "bla-tshirt", isNew: false },
    { name: "Grön T-shirt", price: "299 SEK", brand: "Puma", imageUrl: "../images/product.png", slug: "gron-tshirt", isNew: false },
    { name: "Gul T-shirt", price: "159 SEK", brand: "H&M", imageUrl: "../images/product.png", slug: "gul-tshirt", isNew: false },
    { name: "Röd T-shirt", price: "199 SEK", brand: "Zara", imageUrl: "../images/product.png", slug: "rod-tshirt", isNew: false },
    { name: "Lila T-shirt", price: "279 SEK", brand: "Gucci", imageUrl: "../images/product.png", slug: "lila-tshirt", isNew: false },
    { name: "Orange T-shirt", price: "229 SEK", brand: "Reebok", imageUrl: "../images/product.png", slug: "orange-tshirt", isNew: false }
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
