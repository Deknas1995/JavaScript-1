const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();

// Serve static files (CSS, JS, images, etc.) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' }); // Specify the directory for uploaded files


const products = [
    { name: "Svart T-shirt", description: "Elegant svart t-shirt.", price: "199 SEK", brand: "Levis", sku:"AAA111", imageUrl: "../images/product.png", slug: "svart-tshirt", isNew: true },
    { name: "Vit T-shirt", description: "Elegant Vit t-shirt.", price: "249 SEK", brand: "Nike", sku:"AAA112", imageUrl: "../images/product.png", slug: "vit-tshirt", isNew: false },
    { name: "Blå T-shirt", description: "Elegant Blå t-shirt.", price: "179 SEK", brand: "Adidas",sku:"AAA113", imageUrl: "../images/product.png", slug: "bla-tshirt", isNew: false },
    { name: "Grön T-shirt", description: "Elegant Grön t-shirt.", price: "299 SEK", brand: "Puma",sku:"AAA114", imageUrl: "../images/product.png", slug: "gron-tshirt", isNew: false },
    { name: "Gul T-shirt", description: "Elegant Gul t-shirt.", price: "159 SEK", brand: "H&M",sku:"AAA115", imageUrl: "../images/product.png", slug: "gul-tshirt", isNew: false },
    { name: "Röd T-shirt", description: "Elegant Röd t-shirt.", price: "199 SEK", brand: "Zara",sku:"AAA116", imageUrl: "../images/product.png", slug: "rod-tshirt", isNew: false },
    { name: "Lila T-shirt", description: "Elegant Lila t-shirt.", price: "279 SEK", brand: "Gucci",sku:"AAA117", imageUrl: "../images/product.png", slug: "lila-tshirt", isNew: false },
    { name: "Orange T-shirt", description: "Elegant Orange t-shirt.", price: "229 SEK", brand: "Reebok",sku:"AAA118", imageUrl: "../images/product.png", slug: "orange-tshirt", isNew: false }
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

// API route to add new products
app.post('/api/products', upload.single('bild'), (req, res) => {
    const newProduct = {
        name: req.body.name,
        description: req.body.beskrivning,
        sku: req.body.sku,
        price: req.body.pris,
        image: req.file ? req.file.path : null, // Save the path to the uploaded file if available
    };
    products.push(newProduct); // Add new product to the array
    res.status(201).json(newProduct); // Respond with the created product
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
