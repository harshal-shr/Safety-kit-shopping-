// ==================== PRODUCT DATA ====================
const products = [
  // INDOOR KITS
  {
    id: 1,
    name: "Essential Home Safety Kit",
    category: "indoor",
    price: 2499,
    originalPrice: 3299,
    badge: "Best Seller",
    icon: "fa-fire-extinguisher",
    shortDesc: "Perfect starter kit for apartments & small homes",
    description: "The Essential Home Safety Kit is designed for Indian apartments and small homes. It covers the most common fire risks — kitchen oil fires, electrical short circuits, and solid material fires.",
    features: [
      "2kg ABC Dry Powder Fire Extinguisher (BIS Certified IS 15683)",
      "1m x 1m Silicone Coated Fire Blanket",
      "Photoelectric Smoke Alarm with 10-year battery",
      "Wall mounting brackets included",
      "Bilingual usage guide (English + Hindi/Marathi)"
    ],
    usage: "Place the extinguisher near the main exit. Mount the fire blanket within arm's reach of the stove. Install smoke alarm on ceiling outside bedrooms.",
    howToUse: "Extinguisher: Follow PASS method (Pull-Aim-Squeeze-Sweep). Blanket: Pull tabs, cover the fire completely, leave for 15 mins."
  },
  {
    id: 2,
    name: "Premium Kitchen Defense Kit",
    category: "indoor",
    price: 1899,
    originalPrice: 2499,
    badge: "Kitchen Special",
    icon: "fa-utensils",
    shortDesc: "Specialized protection for cooking oil & LPG risks",
    description: "Kitchen fires are the #1 cause of home fires in India. This kit is specifically engineered for cooking oil, ghee, and LPG related incidents.",
    features: [
      "Premium 1.2m x 1.2m Fire Blanket (higher temperature rating)",
      "500ml Aerosol Fire Spray (safe on oil & electrical)",
      "Carbon Monoxide Alarm with digital display",
      "Fire Safety Checklist Magnet for fridge",
      "Easy-mount wall hooks"
    ],
    usage: "Keep blanket and spray next to the cooking area. Place CO alarm near kitchen and sleeping areas.",
    howToUse: "For oil fires: Never use water. Cover with blanket or use the aerosol spray from safe distance. Evacuate if fire grows."
  },
  {
    id: 3,
    name: "Complete Home Protection Kit",
    category: "indoor",
    price: 5499,
    originalPrice: 7499,
    badge: "Most Complete",
    icon: "fa-house-chimney",
    shortDesc: "Full multi-room protection for large homes & villas",
    description: "Our flagship indoor kit provides layered protection across multiple rooms. Ideal for independent houses, duplexes and large flats.",
    features: [
      "2 × 2kg ABC Dry Powder Extinguishers",
      "2 × Premium Fire Blankets",
      "Interlinked Smoke + CO Combo Alarms (2 units)",
      "Automatic Fire Extinguisher Ball (1.3kg)",
      "Fireproof Document Bag",
      "Complete safety checklist & escape plan guide"
    ],
    usage: "Place one extinguisher on each floor. Install interlinked alarms. Keep fire ball near electrical panel or storage room.",
    howToUse: "The automatic ball activates in 3-10 seconds when exposed to fire. Use blankets and extinguishers as primary response tools."
  },
  {
    id: 4,
    name: "Office & Workspace Kit",
    category: "indoor",
    price: 3999,
    originalPrice: 4999,
    badge: "Office Ready",
    icon: "fa-briefcase",
    shortDesc: "Designed for offices, shops & commercial spaces",
    description: "Protect your workplace with this professional-grade kit suitable for small offices, retail shops and co-working spaces.",
    features: [
      "4kg ABC Dry Powder Extinguisher",
      "2kg CO2 Extinguisher (for electronics)",
      "Fire Blanket + First Aid Burn Kit",
      "Smoke Alarm + Emergency Horn",
      "Fire Warden Armband & Signage"
    ],
    usage: "Mount extinguishers near exits and electrical panels. Keep CO2 near server/computer areas.",
    howToUse: "CO2 is preferred for electronic equipment as it leaves no residue. Always cut power if safe before fighting electrical fires."
  },
  {
    id: 5,
    name: "Smart Home Safety Bundle",
    category: "indoor",
    price: 4299,
    originalPrice: 5699,
    badge: "Smart Choice",
    icon: "fa-wifi",
    shortDesc: "Modern kit with smart detection features",
    description: "Combines traditional firefighting tools with modern smart detection for early warning and peace of mind.",
    features: [
      "2kg ABC Extinguisher + Fire Blanket",
      "Wi-Fi enabled Smoke + CO Alarm (app alerts)",
      "Heat Detector for kitchen",
      "Portable Fire Spray (500ml)",
      "Mobile app monitoring guide"
    ],
    usage: "Connect the smart alarm to your home Wi-Fi. Receive alerts on your phone even when away.",
    howToUse: "Test smart alarms via the mobile app monthly. Keep traditional tools as primary response."
  },

  // OUTDOOR KITS
  {
    id: 6,
    name: "Camping & Adventure Kit",
    category: "outdoor",
    price: 2799,
    originalPrice: 3599,
    badge: "Adventure Ready",
    icon: "fa-campground",
    shortDesc: "Compact kit for camping, trekking & outdoor trips",
    description: "Lightweight and packable fire safety solution for outdoor enthusiasts. Perfect for tents, campsites and hiking.",
    features: [
      "Compact Aerosol Fire Extinguisher (500ml)",
      "2 × Emergency Fire Blankets (foldable)",
      "Emergency Whistle + Signal Mirror",
      "Waterproof Matches + Fire Starter",
      "Compact First Aid + Burn Cream",
      "Carry pouch with MOLLE straps"
    ],
    usage: "Keep in your backpack or tent. Ideal for campfires, cooking stoves and vehicle fires.",
    howToUse: "Use spray from upwind. Blanket can also be used as heat shield while escaping."
  },
  {
    id: 7,
    name: "Vehicle & Garage Safety Kit",
    category: "outdoor",
    price: 2199,
    originalPrice: 2899,
    badge: "Car Essential",
    icon: "fa-car",
    shortDesc: "Must-have protection for cars, bikes & garages",
    description: "Fires in vehicles and garages can escalate extremely fast. This kit is designed for quick access and high effectiveness.",
    features: [
      "1kg ABC Dry Powder Extinguisher (vehicle rated)",
      "Fire Blanket for engine & interior",
      "Heavy-duty Fire Gloves",
      "Emergency Window Breaker + Seatbelt Cutter",
      "Mounting bracket for car boot / garage wall"
    ],
    usage: "Mount in garage near exit. Keep smaller unit in car boot (accessible, not under seats).",
    howToUse: "For vehicle fires: If engine is on fire, open hood carefully from side and aim at base. Evacuate if fuel is involved."
  },
  {
    id: 8,
    name: "Wildfire Preparedness Kit",
    category: "outdoor",
    price: 4599,
    originalPrice: 5999,
    badge: "High Risk Areas",
    icon: "fa-mountain",
    shortDesc: "For homes in forest-adjacent & high fire-risk zones",
    description: "Comprehensive preparedness kit for families living near forests, hills or high wildfire risk areas.",
    features: [
      "4kg ABC Extinguisher + Large Fire Blanket",
      "N95 Masks (pack of 10) + Eye Protection",
      "Emergency Go-Bag essentials checklist",
      "Fireproof Document Pouch",
      "Battery Radio + Extra Batteries",
      "Reflective Emergency Blanket (thermal)"
    ],
    usage: "Keep near main exit for quick grab. Create a 'Ready-Set-Go' plan with your family.",
    howToUse: "In wildfire situations prioritize evacuation. Use equipment only for small spot fires while exiting."
  },
  {
    id: 9,
    name: "Outdoor BBQ & Patio Kit",
    category: "outdoor",
    price: 1699,
    originalPrice: 2199,
    badge: "Patio Special",
    icon: "fa-fire",
    shortDesc: "Safety for outdoor cooking, BBQ & fire pits",
    description: "Enjoy outdoor cooking without worry. This kit is perfect for terrace, garden and patio setups.",
    features: [
      "Fire Blanket (1.5m x 1.5m large size)",
      "Aerosol Fire Spray suitable for grease fires",
      "Heat-resistant Gloves",
      "Fire Pit / Grill Safety Mat guidance",
      "Quick reference safety card"
    ],
    usage: "Keep within 2 meters of BBQ or outdoor cooking area. Never leave open flame unattended.",
    howToUse: "For grease fires on grill: Turn off heat source, cover with blanket. Never pour water."
  },
  {
    id: 10,
    name: "All-Terrain Emergency Kit",
    category: "outdoor",
    price: 3499,
    originalPrice: 4499,
    badge: "Ultimate Outdoor",
    icon: "fa-truck",
    shortDesc: "Heavy-duty kit for farms, warehouses & remote sites",
    description: "Rugged and complete protection for farms, construction sites, warehouses and remote outdoor locations.",
    features: [
      "4kg ABC Extinguisher + 2kg CO2",
      "XL Fire Blanket (2m x 2m)",
      "Automatic Fire Ball for storage areas",
      "Heavy-duty Fire Gloves + Face Shield",
      "Emergency Lighting + Whistle",
      "Waterproof storage case"
    ],
    usage: "Store in a marked accessible location. Suitable for multiple vehicles and outdoor structures.",
    howToUse: "Train all staff/family on locations and basic PASS technique. Conduct drills periodically."
  }
];

// ==================== STATE ====================
let cart = JSON.parse(localStorage.getItem('safeguardCart')) || [];
let currentPage = 'home';
let lastPage = 'home';

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
  renderFeatured();
  renderProducts('indoor', 'indoorProducts');
  renderProducts('outdoor', 'outdoorProducts');
  updateCartUI();
});

// ==================== NAVIGATION ====================
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  
  const pageMap = {
    home: 'homePage',
    indoor: 'indoorPage',
    outdoor: 'outdoorPage',
    howto: 'howtoPage',
    about: 'aboutPage',
    product: 'productPage',
    checkout: 'checkoutPage',
    success: 'successPage'
  };

  const el = document.getElementById(pageMap[page]);
  if (el) {
    el.classList.add('active');
    currentPage = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Close cart if open
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('show');

  if (page === 'checkout') {
    renderCheckout();
  }
}

function goBack() {
  showPage(lastPage || 'home');
}

// ==================== RENDER PRODUCTS ====================
function renderFeatured() {
  const featured = [products[0], products[2], products[5], products[6]];
  const container = document.getElementById('featuredProducts');
  container.innerHTML = featured.map(p => productCardHTML(p)).join('');
}

function renderProducts(category, containerId) {
  const filtered = products.filter(p => p.category === category);
  const container = document.getElementById(containerId);
  container.innerHTML = filtered.map(p => productCardHTML(p)).join('');
}

function productCardHTML(p) {
  return `
    <div class="col-md-6 col-lg-4">
      <div class="product-card">
        <div class="product-img">
          ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
          <i class="fas ${p.icon}"></i>
        </div>
        <div class="product-body">
          <h5>${p.name}</h5>
          <p>${p.shortDesc}</p>
          <div class="d-flex justify-content-between align-items-center mt-3">
            <div class="product-price">
              ₹${p.price.toLocaleString('en-IN')}
              <small>₹${p.originalPrice.toLocaleString('en-IN')}</small>
            </div>
          </div>
          <div class="d-flex gap-2 mt-3">
            <button class="btn btn-view flex-fill" onclick="viewProduct(${p.id})">
              <i class="fas fa-eye me-1"></i> Details
            </button>
            <button class="btn btn-add flex-fill" onclick="addToCart(${p.id})">
              <i class="fas fa-cart-plus me-1"></i> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ==================== PRODUCT DETAIL ====================
function viewProduct(id) {
  const p = products.find(prod => prod.id === id);
  if (!p) return;

  lastPage = currentPage === 'product' ? lastPage : currentPage;

  const html = `
    <div class="col-lg-6">
      <div class="detail-img">
        <i class="fas ${p.icon}"></i>
      </div>
    </div>
    <div class="col-lg-6">
      <span class="badge bg-danger mb-2">${p.category === 'indoor' ? 'Indoor Kit' : 'Outdoor Kit'}</span>
      ${p.badge ? `<span class="badge bg-warning text-dark ms-1">${p.badge}</span>` : ''}
      <h2 class="mt-2 mb-3">${p.name}</h2>
      <div class="product-price mb-3">
        ₹${p.price.toLocaleString('en-IN')}
        <small>₹${p.originalPrice.toLocaleString('en-IN')}</small>
        <span class="badge bg-success ms-2">${Math.round((1 - p.price/p.originalPrice)*100)}% OFF</span>
      </div>
      <p class="text-muted mb-4">${p.description}</p>
      
      <h5 class="mb-3"><i class="fas fa-box-open me-2 text-danger"></i>What's Included</h5>
      <ul class="detail-features mb-4">
        ${p.features.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('')}
      </ul>

      <div class="glass-card p-3 mb-4">
        <h6><i class="fas fa-map-marker-alt me-2 text-warning"></i>Recommended Placement</h6>
        <p class="mb-0 text-muted small">${p.usage}</p>
      </div>

      <div class="glass-card p-3 mb-4">
        <h6><i class="fas fa-hand-point-right me-2 text-info"></i>How to Use</h6>
        <p class="mb-0 text-muted small">${p.howToUse}</p>
      </div>

      <div class="d-flex gap-3">
        <button class="btn btn-add btn-lg flex-fill" onclick="addToCart(${p.id})">
          <i class="fas fa-cart-plus me-2"></i>Add to Cart – ₹${p.price.toLocaleString('en-IN')}
        </button>
      </div>
    </div>
  `;

  document.getElementById('productDetail').innerHTML = html;
  showPage('product');
}

// ==================== CART ====================
function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveCart();
  updateCartUI();
  showToast(`${product.name} added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartUI();
}

function updateQty(id, change) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.qty += change;
  if (item.qty <= 0) {
    removeFromCart(id);
  } else {
    saveCart();
    updateCartUI();
  }
}

function saveCart() {
  localStorage.setItem('safeguardCart', JSON.stringify(cart));
}

function updateCartUI() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('cartCount').textContent = count;

  const container = document.getElementById('cartItems');
  const checkoutBtn = document.getElementById('checkoutBtn');

  if (cart.length === 0) {
    container.innerHTML = '<p class="text-muted text-center mt-5">Your cart is empty</p>';
    document.getElementById('cartTotal').textContent = '₹0';
    checkoutBtn.disabled = true;
    return;
  }

  checkoutBtn.disabled = false;

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">
        <i class="fas ${item.icon}"></i>
      </div>
      <div class="cart-item-info">
        <h6>${item.name}</h6>
        <div class="d-flex justify-content-between align-items-center">
          <span class="text-danger fw-bold">₹${(item.price * item.qty).toLocaleString('en-IN')}</span>
          <div class="qty-controls">
            <button class="qty-btn" onclick="updateQty(${item.id}, -1)">−</button>
            <span>${item.qty}</span>
            <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
            <button class="qty-btn ms-2" onclick="removeFromCart(${item.id})" title="Remove">
              <i class="fas fa-trash" style="font-size:0.7rem"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  document.getElementById('cartTotal').textContent = `₹${total.toLocaleString('en-IN')}`;
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('show');
}

// ==================== CHECKOUT ====================
function renderCheckout() {
  const container = document.getElementById('checkoutItems');
  if (cart.length === 0) {
    showPage('home');
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="d-flex justify-content-between align-items-center mb-2">
      <div>
        <span class="fw-medium">${item.name}</span>
        <small class="text-muted d-block">Qty: ${item.qty}</small>
      </div>
      <span>₹${(item.price * item.qty).toLocaleString('en-IN')}</span>
    </div>
  `).join('');

  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  document.getElementById('checkoutSubtotal').textContent = `₹${total.toLocaleString('en-IN')}`;
  document.getElementById('checkoutTotal').textContent = `₹${total.toLocaleString('en-IN')}`;
}

function placeOrder() {
  const form = document.getElementById('checkoutForm');
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // Generate order ID
  const orderId = 'SG-' + Math.random().toString(36).substr(2, 8).toUpperCase();
  document.getElementById('orderId').textContent = orderId;

  // Clear cart
  cart = [];
  saveCart();
  updateCartUI();

  showPage('success');
  showToast('Order placed successfully!');
}

// ==================== TOAST ====================
function showToast(message) {
  const toastEl = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = message;
  const toast = new bootstrap.Toast(toastEl, { delay: 2500 });
  toast.show();
}

