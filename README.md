# Website_ADD
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Customized Watches E-Commerce</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
            background: #2f2f2f;
            color: #fff;
        }
        header {
            background-color: #444;
            color: white;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        header h1 {
            margin: 0;
            font-size: 1.8rem;
        }
        header nav a {
            color: white;
            text-decoration: none;
            margin-left: 1.5rem;
            font-weight: 600;
            transition: color 0.3s;
        }
        header nav a:hover {
            color: #4facfe;
        }
        .container {
            padding: 2rem;
            max-width: 1200px;
            margin: auto;
            display: none;
        }
        .login {
            max-width: 350px;
            margin: 10% auto;
            background: #3a3a3a;
            padding: 2rem;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
            border-radius: 10px;
            animation: fadeIn 1s ease-in-out;
        }
        .login h2 {
            text-align: center;
            margin-bottom: 1.5rem;
            font-size: 1.8rem;
            color: #fff;
        }
        .login form input {
            width: 85%;
            padding: 0.5rem;
            margin: 0.8rem auto;
            display: block;
            border: 1px solid #666;
            border-radius: 8px;
            font-size: 0.9rem;
            background: #444;
            color: white;
        }
        .login form label {
            font-size: 0.9rem;
            color: #ccc;
            display: block;
            text-align: left;
            margin: 0.5rem auto 0;
            width: 85%;
        }
        .login form input[type="checkbox"] {
            display: inline;
            width: auto;
            margin-right: 0.5rem;
        }
        .login form button {
            width: 90%;
            padding: 0.8rem;
            margin: 1rem auto;
            display: block;
            border: none;
            background: linear-gradient(to right, #4facfe, #00f2fe);
            color: white;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            border-radius: 8px;
            transition: background 0.3s;
        }
        .login form button:hover {
            background: linear-gradient(to right, #00f2fe, #4facfe);
        }
        .login form .agree {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.9rem;
            color: #ccc;
            margin-top: 1rem;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .home-description {
            text-align: center;
            padding: 2rem;
            background: #444;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
            margin-bottom: 2rem;
        }
        .home-description h2 {
            font-size: 2.5rem;
            color: #fff;
            margin-bottom: 1rem;
        }
        .home-description p {
            font-size: 1.2rem;
            color: #ccc;
            line-height: 1.6;
        }
        .search-bar {
            width: 70%;
            padding: 0.8rem;
            border: 1px solid #666;
            border-radius: 8px;
            margin: 1rem 0;
            background: #444;
            color: white;
            font-size: 1rem;
        }
        .filters {
            margin-top: 2rem;
            background: #444;
            padding: 1.5rem;
            border-radius: 8px;
        }
        .filters select {
            padding: 0.8rem;
            font-size: 1rem;
            border-radius: 6px;
            border: 1px solid #666;
            margin-bottom: 1rem;
            background: #444;
            color: white;
        }
        .products {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-top: 2rem;
        }
        .product {
            background: #3a3a3a;
            padding: 1.5rem;
            border-radius: 12px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            text-align: center;
            transition: transform 0.3s, box-shadow 0.3s;
        }
        .product:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
        }
        .product img {
            max-width: 100%;
            border-radius: 8px;
            margin-bottom: 1rem;
        }
        .product h3 {
            margin-bottom: 0.8rem;
            font-size: 1.2rem;
            color: #fff;
        }
        .product button {
            padding: 0.6rem 1.2rem;
            border: none;
            background: #4facfe;
            color: white;
            font-size: 1rem;
            cursor: pointer;
            border-radius: 6px;
            transition: background 0.3s;
        }
        .product button:hover {
            background: #00f2fe;
        }
        .profile {
            background: #3a3a3a;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            color: white;
            margin-top: 2rem;
        }
        .profile h2 {
            margin-bottom: 1.5rem;
            text-align: center;
        }
        #payment {
            display: none;
            text-align: center;
            margin-top: 2rem;
            background: #3a3a3a;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }
        #payment select {
            padding: 0.8rem;
            font-size: 1rem;
            border-radius: 6px;
            border: 1px solid #666;
            margin-bottom: 1rem;
            background: #444;
            color: white;
        }
        #payment button {
            margin-top: 1rem;
            padding: 0.8rem 1.5rem;
            border: none;
            background: #4facfe;
            color: white;
            font-size: 1.1rem;
            cursor: pointer;
            border-radius: 6px;
            transition: background 0.3s;
        }
        #payment button:hover {
            background: #00f2fe;
        }
        #payment img {
            max-width: 200px;
            margin: 1rem 0;
        }
    </style>
</head>
<body>
    <header>
        <h1>Watchify</h1>
            <nav>
                <a href="#" onclick="showSection('products')">Home</a>
                <a href="#" onclick="scrollToShop()">Shop</a>
                <a href="#" onclick="showSection('cart')">Cart</a>
                <a href="#" onclick="showSection('profile')">Profile</a>
                <a href="#" onclick="showSection('about')">About</a>

            </nav>
        </header>
        
    </header>

    <div id="login" class="container" style="display: block;">
        <div class="login">
            <h2>Login</h2>
            <form onsubmit="handleLogin(event)">
                <label for="username">Username</label>
                <input id="username" type="text" placeholder="Username" required>
                <label for="email">Email</label>
                <input id="email" type="email" placeholder="Email" required>
                <label for="mobile">Mobile Number</label>
                <input id="mobile" type="text" placeholder="Mobile Number" required>
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Password" required>
                <div class="agree">
                    <input type="checkbox" required> I agree to the terms and conditions
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>

    <div id="products" class="container">
        <div class="home-description">
            <h2>Welcome to Watchify</h2>
            <p>Discover our exclusive collection of customized watches. At Watchify, we blend elegance and personalization to bring you the perfect timepiece for every occasion. Start exploring now!</p>
        </div>
        <input type="text" id="search" class="search-bar" oninput="searchProduct()" placeholder="Search Watches...">
        <div class="filters">
            <select id="genderFilter" onchange="filterProducts()">
                <option value="">Select Gender</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
            </select>
            <select id="priceFilter" onchange="filterProducts()">
                <option value="">Select Price Range</option>
                <option value="100">Under $100</option>
                <option value="200">$100 - $200</option>
                <option value="300">$200 - $300</option>
            </select>
        </div>
        <h2 style="text-align: center; font-size: 2rem; color: white;">Our Watches</h2>
        <div class="products" id="product-list">
            <!-- Example products -->
            <div class="product">
                <img src="watch1.jpg" alt="Custom Watch 1">
                <h3>Elegant Watch</h3>
                <p>$120</p>
                <button onclick="addToCart('Elegant Watch', 120)">Add to Cart</button>
                <a href="product_details.html?id=1"><button>View Details</button></a>
            </div>
            <div class="product">
                <img src="watch2.jpg" alt="Custom Watch 2">
                <h3>Classic Watch</h3>
                <p>$150</p>
                <button onclick="addToCart('Classic Watch', 150)">Add to Cart</button>
                <a href="product_details.html?id=2"><button>View Details</button></a>
            </div>
            <div class="product">
                <img src="watch3.jpg" alt="Custom Watch 3">
                <h3>Blegant Watch</h3>
                <p>$1120</p>
                <button onclick="addToCart('Blegant Watch', 1120)">Add to Cart</button>
                <a href="product_details.html?id=1"><button>View Details</button></a>
            </div>
            <div class="product">
                <img src="watch4.jpg" alt="Custom Watch 3">
                <h3>Blegant Watch</h3>
                <p>$15120</p>
                <button onclick="addToCart('lentergant Watch', 15120)">Add to Cart</button>
                <a href="product_details.html?id=1"><button>View Details</button></a>
            </div>
            <div class="product">
                <img src="watch5.jpg" alt="Custom Watch 3">
                <h3>Linter Watch</h3>
                <p>$1520</p>
                <button onclick="addToCart('Linter Watch', 1520)">Add to Cart</button>
                <a href="product_details.html?id=1"><button>View Details</button></a>
            </div>
            <div class="product">
                <img src="watch6.jpg" alt="Custom Watch 3">
                <h3>Cluster Watch</h3>
                <p>$3020</p>
                <button onclick="addToCart('Clusster Watch', 3020)">Add to Cart</button>
                <a href="product_details.html?id=1"><button>View Details</button></a>
            </div>
            <div class="product">
                <img src="watch7.jpg" alt="Custom Watch 3">
                <h3>Bloteer Watch</h3>
                <p>$1720</p>
                <button onclick="addToCart('Bloter Watch', 1720)">Add to Cart</button>
                <a href="product_details.html?id=1"><button>View Details</button></a>
            </div>
        </div>
    </div>

    <div id="cart" class="container">
        <h2 style="text-align: center; font-size: 2rem; color: white;">Your Cart</h2>
        <ul id="cart-items" style="list-style: none; padding: 0; color: white; font-size: 1.2rem;"></ul>
        <button onclick="proceedToPayment()" style="margin-top: 1rem; padding: 0.8rem 1.5rem; background: #4facfe; color: white; border-radius: 6px;">Proceed to Payment</button>
    </div>

    <div id="payment" class="container">
        <h2 style="color: #fff;">Payment</h2>
        <p style="color: #ccc;">Select Payment Type:</p>
        <select id="payment-type">
            <option value="UPI">UPI</option>
            <option value="Card">Credit/Debit Card</option>
        </select>
        <button onclick="showQRCode()">Generate QR Code</button>
        <div id="qr-code"></div>
    </div>

    <div id="profile" class="container">
        <div id="about" class="container">
            <div class="home-description">
                <h2>About Watchify</h2>
                <p>Founded in 2020, Watchify aims to revolutionize the watch industry with bespoke, customizable timepieces that resonate with individual styles. We combine innovation with craftsmanship to deliver unique watches for every occasion.</p>
                <p>Our mission is to provide timeless designs with a personal touch, ensuring our customers always have the perfect timepiece for every moment.</p>
            </div>
        </div>
        
        <div class="profile">
            <h2>Your Profile</h2>
            <p>Name: <span id="user-name"></span></p>
            <p>Email: <span id="user-email"></span></p>
            <p>Mobile: <span id="user-mobile"></span></p>
        </div>
    <!-- Add this modal HTML near the end of the body -->
<div id="product-modal" class="modal" style="display: none;">
    <div class="modal-content">
        <span class="close-btn" onclick="closeModal()">&times;</span>
        <h2 id="modal-title"></h2>
        <img id="modal-image" src="" alt="Product Image">
        <p id="modal-price"></p>
        <p id="modal-description"></p>
        <button onclick="addToCartFromModal()">Add to Cart</button>
    </div>
</div>

<!-- Update styles in the <style> section -->
<style>
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
    .modal-content {
        background: #444;
        color: white;
        padding: 2rem;
        border-radius: 10px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
        text-align: center;
        max-width: 500px;
        width: 90%;
    }
    .modal-content img {
        max-width: 100%;
        border-radius: 10px;
        margin: 1rem 0;
    }
    .close-btn {
        position: absolute;
        top: 15px;
        right: 15px;
        font-size: 2rem;
        color: white;
        cursor: pointer;
    }
    .modal-content button {
        margin-top: 1rem;
        padding: 0.8rem 1.5rem;
        background: #4facfe;
        color: white;
        border-radius: 6px;
        border: none;
        font-size: 1rem;
        cursor: pointer;
    }
    .modal-content button:hover {
        background: #00f2fe;
    }
</style>

<!-- Update the JavaScript to include modal functionality -->
<script>
    let selectedproduct = null; // To hold the currently selected product details

    function openModal(title, price, image, description) {
        selectedProduct = { title, price }; // Store the product details for "Add to Cart"
        
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-price').textContent = `$${price}`;
        document.getElementById('modal-image').src = image;
        document.getElementById('modal-description').textContent = description || "This is a customizable watch. Add your personal touch!";
        
        document.getElementById('product-modal').style.display = 'flex';
    }

    function closeModal() {
        document.getElementById('product-modal').style.display = 'none';
    }

    function addToCartFromModal() {
        if (selectedProduct) {
            addToCart(selectedProduct.title, selectedProduct.price);
            closeModal();
        }
    }
</script>

<!-- Update each product card to use the modal -->
<div class="product">
    <img src="watch1.jpg" alt="Custom Watch 1">
    <h3>Elegant Watch</h3>
    <p>$120</p>
    <button onclick="addToCart('Elegant Watch', 120)">Add to Cart</button>
    <button onclick="openModal('Elegant Watch', 120, 'watch1.jpg', 'A sleek and stylish watch perfect for any occasion.')">View Details</button>
</div>
<div class="product">
    <img src="watch2.jpg" alt="Custom Watch 2">
    <h3>Classic Watch</h3>
    <p>$150</p>
    <button onclick="addToCart('Classic Watch', 150)">Add to Cart</button>
    <button onclick="openModal('Classic Watch', 150, 'watch2.jpg', 'A classic design to match your timeless style.')">View Details</button>
</div>
</div>

    <script>
    let selectedProduct = null; // To hold the currently selected product details
    let cart = [];

    // Function to add products to the cart
    function addToCart(name, price) {
        cart.push({ name, price });
        updateCartUI();
        alert(`${name} added to cart!`);
    }

    // Function to update the cart UI
    function updateCartUI() {
        const cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = ''; // Clear the cart items before updating

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<li>Your cart is empty.</li>';
        } else {
            cart.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.name} - $${item.price}`;
                cartItemsContainer.appendChild(li);
            });
        }
    }

    // Function to show a section
    function showSection(section) {
        // Hide all sections
        document.querySelectorAll('.container').forEach(el => el.style.display = 'none');

        // Show the selected section
        const selectedSection = document.getElementById(section);
        if (selectedSection) {
            selectedSection.style.display = 'block';
        }
    }

    // Function to handle login form submission
    function handleLogin(event) {
        event.preventDefault();

        // Get user input values
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;

        // Display user info in the profile
        document.getElementById('user-name').textContent = username;
        document.getElementById('user-email').textContent = email;
        document.getElementById('user-mobile').textContent = mobile;

        // Show the products section after login
        showSection('products');
    }

    // Function to search for a product
    function searchProduct() {
        const query = document.getElementById('search').value.toLowerCase();
        const products = document.querySelectorAll('.product');
        products.forEach(product => {
            const title = product.querySelector('h3').textContent.toLowerCase();
            product.style.display = title.includes(query) ? 'block' : 'none';
        });
    }

    // Function to filter products based on gender and price
    function filterProducts() {
        const genderFilter = document.getElementById('genderFilter').value;
        const priceFilter = document.getElementById('priceFilter').value;
        const products = document.querySelectorAll('.product');
        products.forEach(product => {
            const price = parseInt(product.querySelector('p').textContent.replace('$', ''));
            const isGenderMatch = !genderFilter || product.querySelector('h3').textContent.toLowerCase().includes(genderFilter.toLowerCase());
            const isPriceMatch = !priceFilter || price <= priceFilter;

            product.style.display = isGenderMatch && isPriceMatch ? 'block' : 'none';
        });
    }

    // Function to open product modal
    function openModal(title, price, image, description) {
        selectedProduct = { title, price }; // Store the product details for "Add to Cart"
        
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-price').textContent = `$${price}`;
        document.getElementById('modal-image').src = image;
        document.getElementById('modal-description').textContent = description || "This is a customizable watch. Add your personal touch!";
        
        document.getElementById('product-modal').style.display = 'flex';
    }

    // Function to close product modal
    function closeModal() {
        document.getElementById('product-modal').style.display = 'none';
    }

    // Function to add product to cart from modal
    function addToCartFromModal() {
        if (selectedProduct) {
            addToCart(selectedProduct.title, selectedProduct.price);
            closeModal();
        }
    }

    // Function to proceed to payment
    function proceedToPayment() {
        if (cart.length === 0) {
            alert("Your cart is empty. Add some items before proceeding.");
            return;
        }
        showSection('payment');
    }

    // Function to generate QR code for payment
    function showQRCode() {
        const qrCodeDiv = document.getElementById('qr-code');
        qrCodeDiv.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PaymentDetails" alt="QR Code">`;
    }

</script>
</body>
</html>
