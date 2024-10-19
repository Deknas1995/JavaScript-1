document.addEventListener('DOMContentLoaded', function() 
{
    const loadProductsBtn = document.getElementById('load-products-btn');
    const productTableBody = document.querySelector('#product-table tbody');

    loadProductsBtn.addEventListener('click', () => 
    {
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
                // Rensa tabellen innan vi lägger till nya produkter
                productTableBody.innerHTML = '';

                // Gå igenom produkterna och skapa rader
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
            .catch(error => {
                console.error('Det blev ett problem med fetch-operationen:', error);
            });
    });
});