// Product data
const products = [
    // Initial 6 products (existing)
    {
        id: 1,
        name: "Mountain Bike Pro",
        price: 1299.99,
        image: "Resources/images/giant-tcr.jpg",
        description: "High-performance mountain bike for rugged terrains.",
        stock: 15
    },
    {
        id: 2,
        name: "Road Bike Elite",
        price: 899.99,
        image: "Resources/images/bianchi-oltre.jpg",
        description: "Aerodynamic road bike for speed and efficiency.",
        stock: 8
    },
    {
        id: 3,
        name: "Hybrid Bike Comfort",
        price: 699.99,
        image: "Resources/images/cannondale-supersix.jpg",
        description: "Versatile hybrid bike perfect for city and trails.",
        stock: 0
    },
    {
        id: 4,
        name: "Electric Bike Power",
        price: 2499.99,
        image: "Resources/images/santa-cruz-hightower.jpg",
        description: "Electric assist bike for effortless riding.",
        stock: 5
    },
    {
        id: 5,
        name: "Kids Bike Fun",
        price: 299.99,
        image: "Resources/images/specialized-venge.jpg",
        description: "Safe and fun bike for young riders.",
        stock: 12
    },
    {
        id: 6,
        name: "Folding Bike Compact",
        price: 799.99,
        image: "Resources/images/trek-domane.jpg",
        description: "Portable folding bike for urban commuting.",
        stock: 3
    },

    // Additional Mountain Bikes
    {
        id: 7,
        name: "Santa Cruz V10 Carbon",
        price: 8999.99,
        image: "Resources/images/santa-cruz-hightower.jpg",
        description: "Ultimate carbon mountain bike for downhill racing.",
        stock: 2
    },
    {
        id: 8,
        name: "Trek Fuel EX 9.8",
        price: 6499.99,
        image: "Resources/images/trek-domane.jpg",
        description: "Full suspension e-MTB for technical trails.",
        stock: 4
    },
    {
        id: 9,
        name: "Giant Trance X2",
        price: 3299.99,
        image: "Resources/images/giant-tcr.jpg",
        description: "Advanced trail bike with 150mm travel.",
        stock: 6
    },
    {
        id: 10,
        name: "Specialized Epic Pro",
        price: 4999.99,
        image: "Resources/images/specialized-venge.jpg",
        description: "Cross-country racing bike with Brain technology.",
        stock: 0
    },
    {
        id: 11,
        name: "Cannondale Habit 4",
        price: 2799.99,
        image: "Resources/images/cannondale-supersix.jpg",
        description: "Versatile trail bike for all-mountain riding.",
        stock: 7
    },
    {
        id: 12,
        name: "Bianchi Methanol CV",
        price: 3999.99,
        image: "Resources/images/bianchi-oltre.jpg",
        description: "Italian craftsmanship meets trail performance.",
        stock: 3
    },
    {
        id: 13,
        name: "Yeti SB130 Turq",
        price: 5499.99,
        image: "Resources/images/santa-cruz-hightower.jpg",
        description: "130mm e-bike for efficient trail riding.",
        stock: 1
    },
    {
        id: 14,
        name: "Pivot Mach 6",
        price: 6999.99,
        image: "Resources/images/trek-domane.jpg",
        description: "Carbon full suspension for enduro racing.",
        stock: 2
    },
    {
        id: 15,
        name: "Ibis Ripley LS",
        price: 4599.99,
        image: "Resources/images/giant-tcr.jpg",
        description: "Lightweight carbon trail bike with dw-link suspension.",
        stock: 4
    },
    {
        id: 16,
        name: "Nukeproof Scout",
        price: 2499.99,
        image: "Resources/images/specialized-venge.jpg",
        description: "Affordable full suspension trail bike.",
        stock: 8
    },
    {
        id: 17,
        name: "Marin Bobcat Trail",
        price: 1899.99,
        image: "Resources/images/cannondale-supersix.jpg",
        description: "Hardtail trail bike with modern geometry.",
        stock: 9
    },
    {
        id: 18,
        name: "Diamondback Atroz",
        price: 1599.99,
        image: "Resources/images/bianchi-oltre.jpg",
        description: "Entry-level full suspension mountain bike.",
        stock: 5
    },

    // Road Bikes
    {
        id: 19,
        name: "Pinarello Dogma F12",
        price: 11999.99,
        image: "Resources/images/specialized-venge.jpg",
        description: "Professional road racing bike with total aero integration.",
        stock: 1
    },
    {
        id: 20,
        name: "Colnago C68",
        price: 8999.99,
        image: "Resources/images/cannondale-supersix.jpg",
        description: "Italian masterpiece with revolutionary design.",
        stock: 2
    },
    {
        id: 21,
        name: "Cervelo R5-CX",
        price: 7499.99,
        image: "Resources/images/bianchi-oltre.jpg",
        description: "Aero road bike optimized for all conditions.",
        stock: 3
    },
    {
        id: 22,
        name: "Trek Madone SLR 9",
        price: 9999.99,
        image: "Resources/images/trek-domane.jpg",
        description: "IsoFlow technology for comfort and speed.",
        stock: 1
    },
    {
        id: 23,
        name: "Giant Propel Advanced Pro",
        price: 4999.99,
        image: "Resources/images/giant-tcr.jpg",
        description: "Aero road bike with integrated cockpit.",
        stock: 4
    },
    {
        id: 24,
        name: "Specialized Allez Sprint",
        price: 1999.99,
        image: "Resources/images/specialized-venge.jpg",
        description: "Affordable aluminum road bike for beginners.",
        stock: 10
    },
    {
        id: 25,
        name: "Cannondale CAAD13",
        price: 2999.99,
        image: "Resources/images/cannondale-supersix.jpg",
        description: "Lightweight aluminum road frame with carbon fork.",
        stock: 6
    },
    {
        id: 26,
        name: "Bianchi Infinito CV",
        price: 3999.99,
        image: "Resources/images/bianchi-oltre.jpg",
        description: "Endurance road bike with Countervail technology.",
        stock: 3
    },
    {
        id: 27,
        name: "Felt IA",
        price: 3499.99,
        image: "Resources/images/trek-domane.jpg",
        description: "Integrated cockpit aero road bike.",
        stock: 2
    },
    {
        id: 28,
        name: "De Rosa King",
        price: 7999.99,
        image: "Resources/images/giant-tcr.jpg",
        description: "Handcrafted Italian road bike excellence.",
        stock: 1
    },
    {
        id: 29,
        name: "Wilier Cento10",
        price: 6499.99,
        image: "Resources/images/specialized-venge.jpg",
        description: "Italian carbon road bike with monocoque construction.",
        stock: 2
    },
    {
        id: 30,
        name: "Ridley Noah Fast",
        price: 5499.99,
        image: "Resources/images/cannondale-supersix.jpg",
        description: "Aero road bike with F-Steerer technology.",
        stock: 3
    },

    // Electric Bikes
    {
        id: 31,
        name: "Trek Powerfly 5",
        price: 3999.99,
        image: "Resources/images/santa-cruz-hightower.jpg",
        description: "Bosch-powered e-MTB for all-day adventures.",
        stock: 4
    },
    {
        id: 32,
        name: "Specialized Turbo Levo",
        price: 6999.99,
        image: "Resources/images/specialized-venge.jpg",
        description: "Revolutionary e-MTB with Master Mind technology.",
        stock: 2
    },
    {
        id: 33,
        name: "Giant Explore E+",
        price: 3299.99,
        image: "Resources/images/giant-tcr.jpg",
        description: "Yamaha-powered e-bike for urban and trail use.",
        stock: 6
    },
    {
        id: 34,
        name: "Cannondale Moterra Neo",
        price: 5999.99,
        image: "Resources/images/cannondale-supersix.jpg",
        description: "Bosch CX drive unit with 150km range.",
        stock: 3
    },
    {
        id: 35,
        name: "Bianchi E-Omnia",
        price: 4599.99,
        image: "Resources/images/bianchi-oltre.jpg",
        description: "Italian design meets electric performance.",
        stock: 2
    },
    {
        id: 36,
        name: "Rad Power Bikes RadCity",
        price: 1999.99,
        image: "Resources/images/trek-domane.jpg",
        description: "Affordable electric commuter bike.",
        stock: 8
    },
    {
        id: 37,
        name: "Aventon Pace 500.3",
        price: 2499.99,
        image: "Resources/images/santa-cruz-hightower.jpg",
        description: "Step-through e-bike for comfortable commuting.",
        stock: 5
    },
    {
        id: 38,
        name: "Lectric XP 3.0",
        price: 2999.99,
        image: "Resources/images/specialized-venge.jpg",
        description: "Fat tire e-bike for all-terrain adventures.",
        stock: 4
    },

    // Hybrid & Commuter Bikes
    {
        id: 39,
        name: "Trek Verve+",
        price: 2799.99,
        image: "Resources/images/trek-domane.jpg",
        description: "Electric hybrid bike for city commuting.",
        stock: 6
    },
    {
        id: 40,
        name: "Giant Escape 3",
        price: 699.99,
        image: "Resources/images/giant-tcr.jpg",
        description: "Versatile hybrid bike for daily commuting.",
        stock: 12
    },
    {
        id: 41,
        name: "Specialized Sirrus X",
        price: 899.99,
        image: "Resources/images/specialized-venge.jpg",
        description: "Fitness hybrid with comfortable upright position.",
        stock: 9
    },
    {
        id: 42,
        name: "Cannondale Quick",
        price: 1199.99,
        image: "Resources/images/cannondale-supersix.jpg",
        description: "Quick urban bike with integrated lighting.",
        stock: 7
    },
    {
        id: 43,
        name: "Bianchi Via Nirone 7",
        price: 1599.99,
        image: "Resources/images/bianchi-oltre.jpg",
        description: "Italian hybrid bike with elegant design.",
        stock: 4
    },
    {
        id: 44,
        name: "Fuji Absolute 2.0",
        price: 599.99,
        image: "Resources/images/trek-domane.jpg",
        description: "Entry-level hybrid bike for beginners.",
        stock: 11
    },

    // Kids & Family Bikes
    {
        id: 45,
        name: "Trek Precaliber 24",
        price: 499.99,
        image: "Resources/images/specialized-venge.jpg",
        description: "24-inch kids mountain bike for young adventurers.",
        stock: 8
    },
    {
        id: 46,
        name: "Giant ATX 24",
        price: 399.99,
        image: "Resources/images/giant-tcr.jpg",
        description: "24-inch kids bike with adjustable seat.",
        stock: 6
    },
    {
        id: 47,
        name: "Specialized Hotwalk",
        price: 349.99,
        image: "Resources/images/specialized-venge.jpg",
        description: "Balance bike for toddlers learning to ride."
    },
    {
        id: 48,
        name: "Cannondale Trail 5",
        price: 299.99,
        image: "Resources/images/cannondale-supersix.jpg",
        description: "16-inch kids bike with training wheels."
    },
    {
        id: 49,
        name: "Bianchi Kids Bella",
        price: 249.99,
        image: "Resources/images/bianchi-oltre.jpg",
        description: "Girls bike with colorful Italian design."
    },

    // Folding & Compact Bikes
    {
        id: 50,
        name: "Brompton H6L",
        price: 1499.99,
        image: "Resources/images/trek-domane.jpg",
        description: "Iconic folding bike from London."
    },
    {
        id: 51,
        name: "Trek Verve+ Lowstep",
        price: 3299.99,
        image: "Resources/images/trek-domane.jpg",
        description: "Electric folding bike for easy storage."
    },
    {
        id: 52,
        name: "Giant Halfway",
        price: 899.99,
        image: "Resources/images/giant-tcr.jpg",
        description: "Compact folding bike for urban living."
    },
    {
        id: 53,
        name: "Specialized Roll Low Entry",
        price: 799.99,
        image: "Resources/images/specialized-venge.jpg",
        description: "Low-step folding bike for easy access."
    },

    // Additional Premium Bikes
    {
        id: 54,
        name: "Santa Cruz Chameleon",
        price: 3999.99,
        image: "Resources/images/santa-cruz-hightower.jpg",
        description: "Versatile drop-bar gravel bike."
    },
    {
        id: 55,
        name: "Trek Checkpoint ALR",
        price: 1999.99,
        image: "Resources/images/trek-domane.jpg",
        description: "Aluminum gravel bike for adventure."
    },
    {
        id: 56,
        name: "Giant Revolt Advanced",
        price: 3499.99,
        image: "Resources/images/giant-tcr.jpg",
        description: "Carbon gravel bike with endurance geometry."
    },
    {
        id: 57,
        name: "Specialized Diverge Pro",
        price: 4299.99,
        image: "Resources/images/specialized-venge.jpg",
        description: "Future Shock suspension gravel bike."
    },
    {
        id: 58,
        name: "Cannondale Topstone",
        price: 2799.99,
        image: "Resources/images/cannondale-supersix.jpg",
        description: "Kingpin suspension gravel bike."
    },
    {
        id: 59,
        name: "Bianchi Zolder Pro",
        price: 2499.99,
        image: "Resources/images/bianchi-oltre.jpg",
        description: "Track bike for velodrome racing."
    },
    {
        id: 60,
        name: "Felt Bix",
        price: 1899.99,
        image: "Resources/images/trek-domane.jpg",
        description: "Fixed gear bike for urban riding."
    },

    // More Mountain Bikes
    {
        id: 61,
        name: "Norco Fluid FS",
        price: 3299.99,
        image: "Resources/images/santa-cruz-hightower.jpg",
        description: "Canadian full suspension trail bike."
    },
    {
        id: 62,
        name: "Kona Honzo",
        price: 2799.99,
        image: "Resources/images/trek-domane.jpg",
        description: "Hardtail mountain bike with modern geometry."
    },
    {
        id: 63,
        name: "Jamis Dakar",
        price: 1999.99,
        image: "Resources/images/giant-tcr.jpg",
        description: "XC hardtail for cross-country racing."
    },
    {
        id: 64,
        name: "Santa Cruz Tallboy",
        price: 3999.99,
        image: "Resources/images/santa-cruz-hightower.jpg",
        description: "27.5+ wheel trail bike with VPP suspension."
    },
    {
        id: 65,
        name: "Trek Slash",
        price: 6999.99,
        image: "Resources/images/trek-domane.jpg",
        description: "170mm e-MTB for extreme downhill."
    },

    // More Road Bikes
    {
        id: 66,
        name: "Factor O2",
        price: 5499.99,
        image: "Resources/images/specialized-venge.jpg",
        description: "Handbuilt carbon road bike."
    },
    {
        id: 67,
        name: "Open U.P",
        price: 3999.99,
        image: "Resources/images/cannondale-supersix.jpg",
        description: "Ultra-lightweight climbing bike."
    },
    {
        id: 68,
        name: "Argon 18 Gallium Pro",
        price: 2999.99,
        image: "Resources/images/bianchi-oltre.jpg",
        description: "Aero road bike with integrated cables."
    },
    {
        id: 69,
        name: "Parlee Z5",
        price: 4999.99,
        image: "Resources/images/trek-domane.jpg",
        description: "American handmade carbon road bike."
    },

    // More Electric Bikes
    {
        id: 70,
        name: "Haibike XDURO",
        price: 4999.99,
        image: "Resources/images/santa-cruz-hightower.jpg",
        description: "Bosch Performance Line CX e-MTB."
    },
    {
        id: 71,
        name: "Riese & Müller Charger",
        price: 5999.99,
        image: "Resources/images/specialized-venge.jpg",
        description: "German touring e-bike with Rohloff hub."
    },
    {
        id: 72,
        name: "Focus Jam2",
        price: 3499.99,
        image: "Resources/images/cannondale-supersix.jpg",
        description: "Yamaha-powered urban e-bike."
    },

    // More Hybrid & Commuter
    {
        id: 73,
        name: "Trek FX 3",
        price: 799.99,
        image: "Resources/images/trek-domane.jpg",
        description: "Fitness bike with IsoZone decoupler."
    },
    {
        id: 74,
        name: "Giant Roam",
        price: 649.99,
        image: "Resources/images/giant-tcr.jpg",
        description: "Adventure hybrid for light touring."
    },
    {
        id: 75,
        name: "Specialized Crossroads",
        price: 899.99,
        image: "Resources/images/specialized-venge.jpg",
        description: "Armadillo tire hybrid for mixed terrain."
    }
];

// Ensure every product has a stock value
products.forEach(product => {
    if (typeof product.stock === 'undefined') {
        product.stock = 5;
    }
});

let currentStockFilter = 'all';
let currentSortOrder = 'none';

function getFilteredProducts() {
    let visibleProducts = products.filter(product => {
        switch (currentStockFilter) {
            case 'in-stock':
                return product.stock > 0;
            case 'low-stock':
                return product.stock > 0 && product.stock <= 5;
            case 'out-of-stock':
                return product.stock === 0;
            default:
                return true;
        }
    });

    if (currentSortOrder === 'price-asc') {
        visibleProducts.sort((a, b) => a.price - b.price);
    } else if (currentSortOrder === 'price-desc') {
        visibleProducts.sort((a, b) => b.price - a.price);
    }

    return visibleProducts;
}

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        return;
    }

    if (product.stock <= 0) {
        alert('Sorry, this bike is out of stock.');
        return;
    }

    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${product.name} added to cart!`);

    product.stock -= 1;
    refreshCurrentProductsView();
}

function refreshCurrentProductsView() {
    if (productsView.style.display === 'block') {
        const productGrid = document.getElementById('product-grid-full');
        const visibleCount = fullProductsShown || fullProductsPerBatch;
        fullProductsShown = 0;
        productGrid.innerHTML = '';
        renderFullProducts(visibleCount);
    } else {
        const productGrid = document.getElementById('product-grid');
        const visibleCount = productsShown || productsPerBatch;
        productsShown = 0;
        productGrid.innerHTML = '';
        renderProducts(visibleCount);
    }
}

// Product pagination
let productsShown = 0;
const productsPerBatch = 15;
const maxBatches = 5; // Show up to 5 batches (75 products total)

// Full products view pagination
let fullProductsShown = 0;
const fullProductsPerBatch = 20; // Show 20 products initially on full page
const fullMaxBatches = 5; // Allow up to 5 batches (100 products total)

// View management
const homeView = document.getElementById('home-view');
const productsView = document.getElementById('products-view');

// Render products with pagination
function renderProducts(showCount = productsPerBatch) {
    const productGrid = document.getElementById('product-grid');

    // Clear when loading from the beginning
    if (productsShown === 0) {
        productGrid.innerHTML = '';
    }

    const startIndex = productsShown;
    const endIndex = Math.min(startIndex + showCount, products.length);

    for (let i = startIndex; i < endIndex; i++) {
        const product = products[i];
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <div class="product-image" style="background-image: url('${product.image}'); background-size: cover; background-position: center;">
                <span>${product.name}</span>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <p class="product-description">${product.description}</p>
                <p class="product-stock ${product.stock === 0 ? 'out-of-stock' : ''}">${product.stock > 0 ? `In stock: ${product.stock}` : 'Out of stock'}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})" ${product.stock === 0 ? 'disabled' : ''}>Add to Cart</button>
            </div>
        `;

        productGrid.appendChild(productCard);
    }

    productsShown = endIndex;

    // Update show more button
    updateShowMoreButton();
}

// Render full products view with pagination
function renderFullProducts(showCount = fullProductsPerBatch) {
    const productGrid = document.getElementById('product-grid-full');
    const noProductsMessage = document.getElementById('no-products-message');
    const visibleProducts = getFilteredProducts();

    if (fullProductsShown === 0) {
        productGrid.innerHTML = '';
    }

    const startIndex = fullProductsShown;
    const endIndex = Math.min(startIndex + showCount, visibleProducts.length);

    if (visibleProducts.length === 0) {
        noProductsMessage.style.display = 'block';
        document.getElementById('show-more-full-btn').style.display = 'none';
        return;
    }

    noProductsMessage.style.display = 'none';

    for (let i = startIndex; i < endIndex; i++) {
        const product = visibleProducts[i];
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <div class="product-image" style="background-image: url('${product.image}'); background-size: cover; background-position: center;">
                <span>${product.name}</span>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <p class="product-description">${product.description}</p>
                <p class="product-stock ${product.stock === 0 ? 'out-of-stock' : ''}">${product.stock > 0 ? `In stock: ${product.stock}` : 'Out of stock'}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})" ${product.stock === 0 ? 'disabled' : ''}>Add to Cart</button>
            </div>
        `;

        productGrid.appendChild(productCard);
    }

    fullProductsShown = endIndex;

    // Update show more button for full view
    updateFullShowMoreButton();
}

function updateShowMoreButton() {
    const showMoreBtn = document.getElementById('show-more-btn');
    const currentBatch = Math.ceil(productsShown / productsPerBatch);

    if (productsShown >= products.length || currentBatch >= maxBatches) {
        showMoreBtn.style.display = 'none';
    } else {
        showMoreBtn.style.display = 'inline-block';
        const remainingProducts = Math.min(products.length - productsShown, productsPerBatch);
        showMoreBtn.textContent = `Show ${remainingProducts} More Bikes`;
    }
}

function updateFullShowMoreButton() {
    const showMoreBtn = document.getElementById('show-more-full-btn');
    const visibleProducts = getFilteredProducts();
    const currentBatch = Math.ceil(fullProductsShown / fullProductsPerBatch);

    if (fullProductsShown >= visibleProducts.length || currentBatch >= fullMaxBatches) {
        showMoreBtn.style.display = 'none';
    } else {
        showMoreBtn.style.display = 'inline-block';
        const remainingProducts = Math.min(visibleProducts.length - fullProductsShown, fullProductsPerBatch);
        showMoreBtn.textContent = `Show ${remainingProducts} More Bikes`;
    }
}

// View switching functions
function showHomeView() {
    homeView.style.display = 'block';
    productsView.style.display = 'none';
    // Scroll to top when switching to home
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showProductsView() {
    homeView.style.display = 'none';
    productsView.style.display = 'block';
    
    // Initialize full products view if not already done
    if (fullProductsShown === 0) {
        renderFullProducts(fullProductsPerBatch);
    }
    
    // Scroll to top of products view
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Auto slide
let slideInterval = setInterval(nextSlide, 5000);

// Event listeners
prevBtn.addEventListener('click', () => {
    clearInterval(slideInterval);
    prevSlide();
    slideInterval = setInterval(nextSlide, 5000);
});

nextBtn.addEventListener('click', () => {
    clearInterval(slideInterval);
    nextSlide();
    slideInterval = setInterval(nextSlide, 5000);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(slideInterval);
        showSlide(index);
        slideInterval = setInterval(nextSlide, 5000);
    });
});

// Cart modal functionality
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const closeBtn = document.querySelector('.close');

// Checkout modal functionality
const checkoutModal = document.getElementById('checkout-modal');
const checkoutCloseBtn = document.getElementById('checkout-close');
const checkoutItems = document.getElementById('checkout-items');
const checkoutSubtotal = document.getElementById('checkout-subtotal');
const taxAmount = document.getElementById('tax-amount');
const checkoutFinalTotal = document.getElementById('checkout-final-total');
const placeOrderBtn = document.getElementById('place-order-btn');

function updateCartDisplay() {
    cartItems.innerHTML = '';
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartTotal.textContent = '0.00';
        return;
    }

    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="Resources/images/${getImageName(item.name)}" alt="${item.name}">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)}</p>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(cartItem);
    });
    cartTotal.textContent = total.toFixed(2);
}

function updateCheckoutDisplay() {
    checkoutItems.innerHTML = '';
    let subtotal = 0;
    
    cart.forEach((item) => {
        subtotal += item.price;
        const checkoutItem = document.createElement('div');
        checkoutItem.className = 'checkout-item';
        checkoutItem.innerHTML = `
            <img src="Resources/images/${getImageName(item.name)}" alt="${item.name}">
            <div class="checkout-item-details">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)}</p>
            </div>
        `;
        checkoutItems.appendChild(checkoutItem);
    });
    
    const tax = subtotal * 0.08; // 8% tax
    const finalTotal = subtotal + tax;
    
    checkoutSubtotal.textContent = subtotal.toFixed(2);
    taxAmount.textContent = tax.toFixed(2);
    checkoutFinalTotal.textContent = finalTotal.toFixed(2);
}

function validateForm() {
    const requiredFields = [
        'first-name', 'last-name', 'email', 'address', 'city', 'zip', 'country',
        'card-name', 'card-number', 'expiry', 'cvv'
    ];
    
    for (const fieldId of requiredFields) {
        const field = document.getElementById(fieldId);
        if (!field.value.trim()) {
            alert(`Please fill in the ${field.previousElementSibling.textContent.replace('*', '').trim()} field.`);
            field.focus();
            return false;
        }
    }
    
    // Basic email validation
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        document.getElementById('email').focus();
        return false;
    }
    
    // Basic card number validation (16 digits)
    const cardNumber = document.getElementById('card-number').value.replace(/\s/g, '');
    if (!/^\d{16}$/.test(cardNumber)) {
        alert('Please enter a valid 16-digit card number.');
        document.getElementById('card-number').focus();
        return false;
    }
    
    // Basic expiry validation (MM/YY)
    const expiry = document.getElementById('expiry').value;
    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
        alert('Please enter expiry date in MM/YY format.');
        document.getElementById('expiry').focus();
        return false;
    }
    
    // Basic CVV validation (3 digits)
    const cvv = document.getElementById('cvv').value;
    if (!/^\d{3}$/.test(cvv)) {
        alert('Please enter a valid 3-digit CVV.');
        document.getElementById('cvv').focus();
        return false;
    }
    
    return true;
}

function processOrder() {
    if (!validateForm()) return;
    
    // Simulate order processing
    placeOrderBtn.disabled = true;
    placeOrderBtn.textContent = 'Processing...';
    
    setTimeout(() => {
        // Generate order number
        const orderNumber = 'BKZ' + Date.now();
        
        // Clear cart
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        
        // Close checkout modal
        checkoutModal.style.display = 'none';
        
        // Show success message
        alert(`Order placed successfully!\n\nOrder Number: ${orderNumber}\n\nThank you for shopping with Biker Zone. You will receive a confirmation email shortly.`);
        
        // Reset form
        document.getElementById('shipping-form').reset();
        document.getElementById('payment-form').reset();
        
        placeOrderBtn.disabled = false;
        placeOrderBtn.textContent = 'Place Order';
    }, 2000); // Simulate 2-second processing time
}

function getImageName(bikeName) {
    // Map bike names to available images
    const nameMap = {
        // Original mappings
        'Mountain Bike Pro': 'giant-tcr.jpg',
        'Road Bike Elite': 'bianchi-oltre.jpg',
        'Hybrid Bike Comfort': 'cannondale-supersix.jpg',
        'Electric Bike Power': 'santa-cruz-hightower.jpg',
        'Kids Bike Fun': 'specialized-venge.jpg',
        'Folding Bike Compact': 'trek-domane.jpg',

        // Mountain bikes
        'Santa Cruz V10 Carbon': 'santa-cruz-hightower.jpg',
        'Trek Fuel EX 9.8': 'trek-domane.jpg',
        'Giant Trance X2': 'giant-tcr.jpg',
        'Specialized Epic Pro': 'specialized-venge.jpg',
        'Cannondale Habit 4': 'cannondale-supersix.jpg',
        'Bianchi Methanol CV': 'bianchi-oltre.jpg',
        'Yeti SB130 Turq': 'santa-cruz-hightower.jpg',
        'Pivot Mach 6': 'trek-domane.jpg',
        'Ibis Ripley LS': 'giant-tcr.jpg',
        'Nukeproof Scout': 'specialized-venge.jpg',
        'Marin Bobcat Trail': 'cannondale-supersix.jpg',
        'Diamondback Atroz': 'bianchi-oltre.jpg',

        // Road bikes
        'Pinarello Dogma F12': 'specialized-venge.jpg',
        'Colnago C68': 'cannondale-supersix.jpg',
        'Cervelo R5-CX': 'bianchi-oltre.jpg',
        'Trek Madone SLR 9': 'trek-domane.jpg',
        'Giant Propel Advanced Pro': 'giant-tcr.jpg',
        'Specialized Allez Sprint': 'specialized-venge.jpg',
        'Cannondale CAAD13': 'cannondale-supersix.jpg',
        'Bianchi Infinito CV': 'bianchi-oltre.jpg',
        'Felt IA': 'trek-domane.jpg',
        'De Rosa King': 'giant-tcr.jpg',
        'Wilier Cento10': 'specialized-venge.jpg',
        'Ridley Noah Fast': 'cannondale-supersix.jpg',

        // Electric bikes
        'Trek Powerfly 5': 'santa-cruz-hightower.jpg',
        'Specialized Turbo Levo': 'specialized-venge.jpg',
        'Giant Explore E+': 'giant-tcr.jpg',
        'Cannondale Moterra Neo': 'cannondale-supersix.jpg',
        'Bianchi E-Omnia': 'bianchi-oltre.jpg',
        'Rad Power Bikes RadCity': 'trek-domane.jpg',
        'Aventon Pace 500.3': 'santa-cruz-hightower.jpg',
        'Lectric XP 3.0': 'specialized-venge.jpg',

        // Hybrid & commuter
        'Trek Verve+': 'trek-domane.jpg',
        'Giant Escape 3': 'giant-tcr.jpg',
        'Specialized Sirrus X': 'specialized-venge.jpg',
        'Cannondale Quick': 'cannondale-supersix.jpg',
        'Bianchi Via Nirone 7': 'bianchi-oltre.jpg',
        'Fuji Absolute 2.0': 'trek-domane.jpg',

        // Kids bikes
        'Trek Precaliber 24': 'specialized-venge.jpg',
        'Giant ATX 24': 'giant-tcr.jpg',
        'Specialized Hotwalk': 'specialized-venge.jpg',
        'Cannondale Trail 5': 'cannondale-supersix.jpg',
        'Bianchi Kids Bella': 'bianchi-oltre.jpg',

        // Folding bikes
        'Brompton H6L': 'trek-domane.jpg',
        'Trek Verve+ Lowstep': 'trek-domane.jpg',
        'Giant Halfway': 'giant-tcr.jpg',
        'Specialized Roll Low Entry': 'specialized-venge.jpg',

        // Premium bikes
        'Santa Cruz Chameleon': 'santa-cruz-hightower.jpg',
        'Trek Checkpoint ALR': 'trek-domane.jpg',
        'Giant Revolt Advanced': 'giant-tcr.jpg',
        'Specialized Diverge Pro': 'specialized-venge.jpg',
        'Cannondale Topstone': 'cannondale-supersix.jpg',
        'Bianchi Zolder Pro': 'bianchi-oltre.jpg',
        'Felt Bix': 'trek-domane.jpg',

        // More mountain bikes
        'Norco Fluid FS': 'santa-cruz-hightower.jpg',
        'Kona Honzo': 'trek-domane.jpg',
        'Jamis Dakar': 'giant-tcr.jpg',
        'Santa Cruz Tallboy': 'santa-cruz-hightower.jpg',
        'Trek Slash': 'trek-domane.jpg',

        // More road bikes
        'Factor O2': 'specialized-venge.jpg',
        'Open U.P': 'cannondale-supersix.jpg',
        'Argon 18 Gallium Pro': 'bianchi-oltre.jpg',
        'Parlee Z5': 'trek-domane.jpg',

        // More electric bikes
        'Haibike XDURO': 'santa-cruz-hightower.jpg',
        'Riese & Müller Charger': 'specialized-venge.jpg',
        'Focus Jam2': 'cannondale-supersix.jpg',

        // More hybrid
        'Trek FX 3': 'trek-domane.jpg',
        'Giant Roam': 'giant-tcr.jpg',
        'Specialized Crossroads': 'specialized-venge.jpg'
    };

    return nameMap[bikeName] || 'trek-domane.jpg'; // Default fallback
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    updateCartCount();

    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Cart link click
    document.getElementById('cart-link').addEventListener('click', function(e) {
        e.preventDefault();
        updateCartDisplay();
        cartModal.style.display = 'block';
    });

    // Close modal
    closeBtn.addEventListener('click', function() {
        cartModal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    // Checkout button (opens checkout modal)
    document.querySelector('.checkout-btn').addEventListener('click', function() {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        cartModal.style.display = 'none';
        updateCheckoutDisplay();
        checkoutModal.style.display = 'block';
    });

    // Close checkout modal
    checkoutCloseBtn.addEventListener('click', function() {
        checkoutModal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === checkoutModal) {
            checkoutModal.style.display = 'none';
        }
    });

    // Place order button
    placeOrderBtn.addEventListener('click', processOrder);

    // Show more products button (home view)
    document.getElementById('show-more-btn').addEventListener('click', function() {
        renderProducts(productsPerBatch);
    });

    // Show more products button (full products view)
    document.getElementById('show-more-full-btn').addEventListener('click', function() {
        renderFullProducts(fullProductsPerBatch);
    });

    // Navigation links
    document.getElementById('home-link').addEventListener('click', function(e) {
        e.preventDefault();
        showHomeView();
    });

    document.getElementById('logo-link').addEventListener('click', function(e) {
        e.preventDefault();
        showHomeView();
    });

    document.getElementById('products-link').addEventListener('click', function(e) {
        e.preventDefault();
        showProductsView();
    });

    document.getElementById('stock-filter').addEventListener('change', function(e) {
        currentStockFilter = e.target.value;
        fullProductsShown = 0;
        renderFullProducts(fullProductsPerBatch);
    });

    document.getElementById('sort-filter').addEventListener('change', function(e) {
        currentSortOrder = e.target.value;
        fullProductsShown = 0;
        renderFullProducts(fullProductsPerBatch);
    });

    // Back to home button
    document.getElementById('back-to-home').addEventListener('click', function() {
        showHomeView();
    });
});