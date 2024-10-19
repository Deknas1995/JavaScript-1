// products.js

// List of products
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

// Function to get random products
function getRandomProducts(productArray, count) {
    const shuffled = productArray.sort(() => 0.5 - Math.random()); // Randomize product order
    return shuffled.slice(0, count); // Get the first 'count' products
}
