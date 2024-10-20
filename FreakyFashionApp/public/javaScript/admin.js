// This attaches an event listener to the document that listens for the DOMContentLoaded event
// This event is triggered when the initial HTML document has been completely loaded
document.addEventListener('DOMContentLoaded', function() 
{
    // Get the load products button
    const loadProductsBtn = document.getElementById('load-products-btn');
    // Get the <tbody> element to populate with products
    const productTableBody = document.querySelector('#product-table tbody');

    // Add click event listener to the load products button
    // When event is triggered, trigger the following arrow function
    loadProductsBtn.addEventListener('click', () => 
    {
        // Request to the /api/getProducts endpoint to return a list of products in JSON format
        fetch('/api/getProducts')
            .then(response => 
            {
                if (!response.ok) 
                {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(products => 
            {
                // Clear table before adding new products
                productTableBody.innerHTML = '';

                // For each product create table data with data from products
                products.forEach(product => 
                {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${product.name}</td>
                        <td>${product.sku}</td>
                        <td>${product.price} SEK</td>
                    `;
                    productTableBody.appendChild(row);
                });
            })
            .catch(error => 
            {
                console.error('Det blev ett problem med fetch-operationen:', error);
            });
    });
});