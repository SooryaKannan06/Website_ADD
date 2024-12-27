const products = [
    {
        id: 1,
        name: 'Custom Watch Model A',
        price: 15000,
        image: 'img/watch1.jpg',
        description: 'A customizable luxury watch with various options.',
        details: [
            'Stainless steel case',
            'Leather strap',
            'Water resistant'
        ],
    },
    {
        id: 2,
        name: 'Custom Watch Model B',
        price: 12000,
        image: 'img/watch2.jpg',
        description: 'An elegant watch that can be tailored to your style.',
        details: [
            'Gold plating',
            'Mesh band',
            'Scratch resistant'
        ],
    },
  ];
  
  let cart = [];
  
  // Function to display products
  function displayProducts() {
     const productContainer = document.querySelector('.product-container');
     productContainer.innerHTML = ''; // Clear previous content
  
     products.forEach(product => {
         const productCard = createProductCard(product);
         productContainer.appendChild(productCard);
     });
  }
  
  // Function to create a product card
  function createProductCard(product) {
     const card = document.createElement('div');
     card.classList.add('product-card');
  
     const image = document.createElement('img');
     image.src = product.image;
     image.alt = product.name;
  
     const name = document.createElement('h2');
     name.classList.add('product-name');
     name.innerText = product.name;
  
     const description = document.createElement('p');
     description.innerText = product.description;
  
     const price = document.createElement('p');
     price.classList.add('product-price');
     price.innerText = `$${product.price}`;
  
     const addToCartBtn = document.createElement('button');
     addToCartBtn.classList.add('add-to-cart-btn'); 
     addToCartBtn.innerText = 'Add to Cart';
     
     addToCartBtn.addEventListener('click', () => addToCart(product.id));
     
     card.appendChild(image);
     card.appendChild(name);
     card.appendChild(description);
     card.appendChild(price);
     card.appendChild(addToCartBtn);
  
     return card;
  }
  
  // Function to add selected products to cart
  function addToCart(productId) {
       const product = products.find(p => p.id === productId);
       
       if (!cart.some(item => item.id === productId)) { // Prevent duplicates
           cart.push(product);
           updateCart();
           alert(`${product.name} has been added to your cart.`);
       } else {
           alert(`${product.name} is already in your cart.`);
       }
  }
  
  // Function to update the cart display
  function updateCart() {
       const cartCount = document.getElementById('cart-count');
       cartCount.innerText = cart.length;
  
       const cartItemsContainer = document.getElementById('cart-items');
       if (cartItemsContainer) { // Ensure we are on the correct page before updating it
           cartItemsContainer.innerHTML = '';
  
           if (cart.length === 0) {
               cartItemsContainer.innerText = 'Your cart is empty.';
               return;
           }
  
           cart.forEach(item => {
               const cartItem = document.createElement('div');
               cartItem.classList.add('cart-item');
  
               cartItem.innerHTML = `${item.name} - $${item.price}`;
               cartItemsContainer.appendChild(cartItem);
               
               // Add remove button
               const removeBtn = document.createElement('button');
               removeBtn.innerText = 'Remove';
               removeBtn.onclick = () => removeFromCart(item.id);
               cartItem.appendChild(removeBtn);
               
               // Style the remove button
               removeBtn.style.marginLeft = "10px";
               removeBtn.style.backgroundColor = "#dc3545"; // Red color
               removeBtn.style.color = "white";
               removeBtn.style.border = "none";
               removeBtn.style.padding = "5px";
               removeBtn.style.cursor = "pointer";
               
               removeBtn.onmouseover = () => { removeBtn.style.backgroundColor = "#c82333"; }; // Darker red on hover
               removeBtn.onmouseout = () => { removeBtn.style.backgroundColor = "#dc3545"; }; // Reset color
  
             });
       }
  }
  
  // Function to remove item from the cart
  function removeFromCart(productId) {
       cart = cart.filter(item => item.id !== productId);
       updateCart();
  }
  
  // Event listener for login form submission
  document.getElementById("login-form")?.addEventListener("submit", function(event) {
       event.preventDefault(); // Prevent default form submission
  
       // Simulate login success (in a real application, you'd validate credentials)
       alert("Login successful!");
       window.location.href = "index.html"; // Redirect to home page after login
  });
  
  // Initialize product display on home page load
  if (document.querySelector('.product-container')) {
       displayProducts();
  }
  