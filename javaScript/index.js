// Produktdata
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

// Function to create product div
function createProductDiv(productData) 
{
    // Create product div
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    // If new peoduct create a special label for it
    if(productData.isNew)
    {
        const productNewDiv = document.createElement('div');
        productNewDiv.classList.add('product-new');
        productNewDiv.innerText = 'Nyhet!'

        productDiv.appendChild(productNewDiv);
    }

    // Create an image link
    const productLink = document.createElement('a');
    productLink.href = 'product-details.html';

    const productImage = document.createElement('img');
    productImage.src = productData.imageUrl;
    productImage.alt = productData.name;

    productLink.appendChild(productImage);
    productDiv.appendChild(productLink);


    // Create favorite/heart icon
    const favoriteLink = document.createElement('a');
    favoriteLink.href = "#abc";

    const favoriteIcon = document.createElement('i');
    favoriteIcon.classList.add('fa-regular', 'fa-heart');

    favoriteLink.appendChild(favoriteIcon);
    productDiv.appendChild(favoriteLink);

    // Create product description containing text description, price and brand
    const productTextDiv = document.createElement('div');
    productTextDiv.classList.add('product-text-div');

    const productDescription = document.createElement('h4');
    productDescription.classList.add('product-description');
    productDescription.innerText = productData.name;
    productTextDiv.appendChild(productDescription);

    const productPrice = document.createElement('h4');
    productPrice.classList.add('product-price');
    productPrice.innerText = productData.price;
    productTextDiv.appendChild(productPrice);

    const productBrand = document.createElement('p');
    productBrand.classList.add('product-brand');
    productBrand.innerText = productData.brand;
    productTextDiv.appendChild(productBrand);

    productDiv.appendChild(productTextDiv);
    
    return productDiv; // Return the created products div
}

// Get the parent div for which the products will be dynamically added to
const productsGrid = document.getElementById('products-grid');

// For each product data in the products array create a product and append it to the parent div
products.forEach(productData => {
    const productElement = createProductDiv(productData); // This will create one product
    productsGrid.appendChild(productElement); // Appends the product to the parent div
});
