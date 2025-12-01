// Sneaker Data
const sneakers = [
    {
        id: 1,
        name: "Air Jordan 1 Mid Chicago",
        type: "Men's Basketball Shoes",
        colors: 3,
        price: 129.99,
        originalPrice: 159.99,
        discount: 19,
        rating: 4.5,
        image: "https://i.pinimg.com/736x/0e/f1/13/0ef113de4b877881bd328ee17f51f640.jpg",
        category: ["jordan", "bestseller"],
        badge: "Bestseller",
        isNew: false
    },
    {
        id: 2,
        name: "Air Jordan 1 Mid Shadow",
        type: "Men's Lifestyle Shoes",
        colors: 2,
        price: 149.99,
        originalPrice: null,
        discount: 0,
        rating: 4.0,
        image: "https://i.pinimg.com/736x/ec/9a/31/ec9a31012708e92b75d9a38ee95e2660.jpg",
        category: ["jordan", "new"],
        badge: "New",
        isNew: true
    },
    {
        id: 3,
        name: "Air Jordan 1 High OG",
        type: "Men's Collectible Shoes",
        colors: 1,
        price: 299.99,
        originalPrice: 349.99,
        discount: 14,
        rating: 5.0,
        image: "https://i.pinimg.com/736x/32/7b/e8/327be839e4a9e4421a345682a8b776a7.jpg",
        category: ["jordan", "limited"],
        badge: "Limited",
        isNew: false
    },
    {
        id: 4,
        name: "Air Jordan 1 Retro High",
        type: "Men's Sneakers",
        colors: 4,
        price: 179.99,
        originalPrice: null,
        discount: 0,
        rating: 4.5,
        image: "https://i.pinimg.com/736x/57/2d/6b/572d6bdf8bf86e660d2d4b8272cddaed.jpg",
        category: ["jordan", "bestseller"],
        badge: "Bestseller",
        isNew: false
    },
    {
        id: 5,
        name: "Jordan Delta 2",
        type: "Men's Comfort Shoes",
        colors: 3,
        price: 134.99,
        originalPrice: 159.99,
        discount: 16,
        rating: 4.0,
        image: "https://i.pinimg.com/736x/93/0d/e3/930de319992a7b486f95eed4ecfccd76.jpg",
        category: ["jordan", "new"],
        badge: "New",
        isNew: true
    },
    {
        id: 6,
        name: "Air Jordan 4 Retro",
        type: "Men's Basketball Shoes",
        colors: 2,
        price: 249.99,
        originalPrice: null,
        discount: 0,
        rating: 4.5,
        image: "https://i.pinimg.com/736x/9c/e9/f6/9ce9f637d6d20f2743605b64df38ad82.jpg",
        category: ["jordan", "limited"],
        badge: "Limited",
        isNew: false
    },
    {
        id: 7,
        name: "Jordan Zion 1",
        type: "Men's Performance Shoes",
        colors: 5,
        price: 119.99,
        originalPrice: 139.99,
        discount: 14,
        rating: 3.5,
        image: "https://i.pinimg.com/736x/34/e9/d8/34e9d82d77339702b91ae93791e897a2.jpg",
        category: ["jordan", "popular"],
        badge: "Popular",
        isNew: false
    },
    {
        id: 8,
        name: "Air Jordan 1 Low",
        type: "Men's Casual Shoes",
        colors: 6,
        price: 109.99,
        originalPrice: null,
        discount: 0,
        rating: 5.0,
        image: "https://i.pinimg.com/736x/57/55/02/575502cdf6e5aa484a993e049215560a.jpg",
        category: ["jordan", "new"],
        badge: "New",
        isNew: true
    },
    {
        id: 9,
        name: "Nike Air Max 270",
        type: "Men's Lifestyle Shoes",
        colors: 4,
        price: 149.99,
        originalPrice: 179.99,
        discount: 17,
        rating: 4.5,
        image: "https://i.pinimg.com/736x/65/3d/1a/653d1ac4b68e92cd43ae88424cf4e1e9.jpg",
        category: ["nike", "bestseller"],
        badge: "Bestseller",
        isNew: false
    },
    {
        id: 10,
        name: "Nike Dunk Low",
        type: "Men's Skate Shoes",
        colors: 3,
        price: 99.99,
        originalPrice: 119.99,
        discount: 17,
        rating: 4.0,
        image: "https://i.pinimg.com/736x/45/19/3b/45193b409e9c7cd4f2b47a3e2bde02f7.jpg",
        category: ["nike", "popular"],
        badge: "Popular",
        isNew: false
    },
    {
        id: 11,
        name: "Nike Air Force 1",
        type: "Men's Casual Shoes",
        colors: 8,
        price: 89.99,
        originalPrice: null,
        discount: 0,
        rating: 4.8,
        image: "https://i.pinimg.com/736x/12/8a/7d/128a7dcf1e0b93002f279c31782f1f48.jpg",
        category: ["nike", "bestseller"],
        badge: "Bestseller",
        isNew: false
    },
    {
        id: 12,
        name: "Nike React Infinity Run",
        type: "Men's Running Shoes",
        colors: 3,
        price: 159.99,
        originalPrice: 179.99,
        discount: 11,
        rating: 4.3,
        image: "https://i.pinimg.com/736x/89/0c/7f/890c7f0fa14e89e3b743630e7e9d2005.jpg",
        category: ["nike", "new"],
        badge: "New",
        isNew: true
    }
];

// Cart state
let cart = [];
let currentFilter = 'all';
let maxPrice = 300;
let currentSort = 'default';

// DOM Elements
const shoesContainer = document.getElementById('shoes-container');
const filterButtons = document.querySelectorAll('.filter-btn');
const sortSelect = document.getElementById('sort-select');
const priceRange = document.getElementById('price-range');
const priceValue = document.getElementById('price-value');
const shoesCount = document.getElementById('shoes-count');
const cartIcon = document.querySelector('.cart-icon');
const cartModal = document.getElementById('cart-modal');
const closeModal = document.querySelector('.close-modal');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalPrice = document.getElementById('cart-total-price');
const cartCount = document.querySelector('.cart-count');

// Initialize the store
function initStore() {
    renderSneakers();
    setupEventListeners();
    updateCartCount();
}

// Render sneakers based on filters and sorting
function renderSneakers() {
    shoesContainer.innerHTML = '';
    
    // Filter and sort sneakers
    let filteredSneakers = sneakers.filter(sneaker => {
        // Price filter
        if (sneaker.price > maxPrice) return false;
        
        // Category filter
        if (currentFilter !== 'all' && !sneaker.category.includes(currentFilter)) {
            return false;
        }
        
        return true;
    });
    
    // Sort sneakers
    filteredSneakers = sortSneakers(filteredSneakers);
    
    // Update count
    shoesCount.textContent = `Showing ${filteredSneakers.length} products`;
    
    // Render each sneaker
    filteredSneakers.forEach(sneaker => {
        const card = createSneakerCard(sneaker);
        shoesContainer.appendChild(card);
    });
}

// Create sneaker card element
function createSneakerCard(sneaker) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.id = sneaker.id;
    
    // Generate star rating HTML
    const stars = generateStarRating(sneaker.rating);
    
    // Generate badge class
    const badgeClass = sneaker.badge.toLowerCase().replace(' ', '');
    
    card.innerHTML = `
        <div class="card-image">
            <img src="${sneaker.image}" alt="${sneaker.name}">
            <div class="badge ${badgeClass}">${sneaker.badge}</div>
        </div>
        <div class="details">
            <div class="description">
                <h3 class="shoe-name">${sneaker.name}</h3>
                <p class="shoe-type">${sneaker.type}</p>
                <p class="colors"><i class="fas fa-palette"></i> ${sneaker.colors} color variant${sneaker.colors > 1 ? 's' : ''}</p>
                <div class="price-section">
                    <p class="price">$${sneaker.price.toFixed(2)}</p>
                    ${sneaker.originalPrice ? `<p class="original-price">$${sneaker.originalPrice.toFixed(2)}</p>` : ''}
                    ${sneaker.discount > 0 ? `<span class="discount">-${sneaker.discount}%</span>` : ''}
                </div>
                <div class="rating">
                    ${stars}
                    <span class="rating-text">(${sneaker.rating})</span>
                </div>
            </div>
            <button class="cart-btn" data-id="${sneaker.id}">
                <i class="fas fa-shopping-cart"></i> Add to Cart
            </button>
        </div>
    `;
    
    // Add event listener to the cart button
    const cartBtn = card.querySelector('.cart-btn');
    cartBtn.addEventListener('click', () => addToCart(sneaker));
    
    return card;
}

// Generate star rating HTML
function generateStarRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (hasHalfStar && i === fullStars + 1) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    
    return stars;
}

// Sort sneakers based on current sort option
function sortSneakers(sneakers) {
    switch(currentSort) {
        case 'price-low':
            return [...sneakers].sort((a, b) => a.price - b.price);
        case 'price-high':
            return [...sneakers].sort((a, b) => b.price - a.price);
        case 'rating':
            return [...sneakers].sort((a, b) => b.rating - a.rating);
        case 'newest':
            return [...sneakers].sort((a, b) => {
                if (a.isNew && !b.isNew) return -1;
                if (!a.isNew && b.isNew) return 1;
                return 0;
            });
        default:
            return sneakers;
    }
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.dataset.filter;
            renderSneakers();
        });
    });
    
    // Sort select
    sortSelect.addEventListener('change', () => {
        currentSort = sortSelect.value;
        renderSneakers();
    });
    
    // Price range
    priceRange.addEventListener('input', () => {
        maxPrice = parseInt(priceRange.value);
        priceValue.textContent = `0 - ${maxPrice}`;
        renderSneakers();
    });
    
    // Cart icon
    cartIcon.addEventListener('click', () => {
        cartModal.classList.add('active');
        renderCart();
    });
    
    // Close modal
    closeModal.addEventListener('click', () => {
        cartModal.classList.remove('active');
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.classList.remove('active');
        }
    });
}

// Cart functions
function addToCart(sneaker) {
    const existingItem = cart.find(item => item.id === sneaker.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...sneaker,
            quantity: 1
        });
    }
    
    updateCartCount();
    showAddedToCartFeedback(sneaker.id);
}

function removeFromCart(sneakerId) {
    cart = cart.filter(item => item.id !== sneakerId);
    updateCartCount();
    renderCart();
}

function updateQuantity(sneakerId, change) {
    const item = cart.find(item => item.id === sneakerId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(sneakerId);
        } else {
            renderCart();
            updateCartCount();
        }
    }
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function renderCart() {
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-bag"></i>
                <p>Your cart is empty</p>
            </div>
        `;
        cartTotalPrice.textContent = '$0.00';
        return;
    }
    
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    <button class="remove-item" data-id="${item.id}">Remove</button>
                </div>
            </div>
            <div class="cart-item-total">$${itemTotal.toFixed(2)}</div>
        `;
        
        cartItemsContainer.appendChild(cartItem);
    });
    
    // Add event listeners to quantity buttons
    cartItemsContainer.querySelectorAll('.quantity-btn.minus').forEach(btn => {
        btn.addEventListener('click', () => updateQuantity(parseInt(btn.dataset.id), -1));
    });
    
    cartItemsContainer.querySelectorAll('.quantity-btn.plus').forEach(btn => {
        btn.addEventListener('click', () => updateQuantity(parseInt(btn.dataset.id), 1));
    });
    
    cartItemsContainer.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.id)));
    });
    
    cartTotalPrice.textContent = `$${total.toFixed(2)}`;
}

function showAddedToCartFeedback(sneakerId) {
    const cartBtn = document.querySelector(`.cart-btn[data-id="${sneakerId}"]`);
    if (cartBtn) {
        const originalText = cartBtn.innerHTML;
        cartBtn.innerHTML = '<i class="fas fa-check"></i> Added!';
        cartBtn.classList.add('added');
        
        setTimeout(() => {
            cartBtn.innerHTML = originalText;
            cartBtn.classList.remove('added');
        }, 1500);
    }
}

// Initialize the store when DOM is loaded
document.addEventListener('DOMContentLoaded', initStore);