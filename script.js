document.addEventListener('DOMContentLoaded', () => {
    
    const products = [
        {
            id: 1,
            name: 'Cappuccino Cremoso',
            price: 12.00,
            image: 'assets/cappuccino.jpg' 
        },
        {
            id: 2,
            name: 'Latte Macchiato Caramelo',
            price: 14.50,
            image: 'assets/latte_caramelo.jpg' 
        },
        {
            id: 3,
            name: 'Torta Red Velvet Fatia',
            price: 18.00,
            image: 'assets/red_velvet.jpg' 
        },
        {
            id: 4,
            name: 'Croissant Tradicional',
            price: 9.00,
            image: 'assets/croissant.jpg' 
        },
        {
            id: 5,
            name: 'Mocaccino Especial',
            price: 15.00,
            image: 'assets/mocaccino.jpg' 
        },
        {
            id: 6,
            name: 'Bolo de Cenoura com Cobertura',
            price: 17.50,
            image: 'assets/bolo_cenoura.jpg' 
        },
        {
            id: 7,
            name: 'Expresso Duplo Intenso',
            price: 9.00,
            image: 'assets/expresso_duplo.jpg' 
        },
        {
            id: 8,
            name: 'Pão de Queijo Gourmet',
            price: 7.00,
            image: 'assets/pao_queijo.jpg' 
        },
        {
            id: 9,
            name: 'Affogato Clássico',
            price: 19.00,
            image: 'assets/affogato.jpg' 
        }
    ];

     // --- 2. SELETORES DO DOM ---
    const productGrid = document.getElementById('product-grid');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartToggle = document.getElementById('cart-toggle');
    const cartClose = document.getElementById('cart-close');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const cartItemCountElement = document.getElementById('cart-item-count');
    const overlay = document.getElementById('sidebar-overlay');

     // --- Seletores do Modal e Checkout ---
    const checkoutBtn = document.querySelector('.checkout-btn');
    const orderModal = document.getElementById('order-modal');
    const modalCloseX = document.getElementById('modal-close-x');
    const modalCloseOk = document.getElementById('modal-close-ok');

    // --- 3. ESTADO DO CARRINHO (State) ---
    let cart = JSON.parse(localStorage.getItem('cart')) || [];


    // --- 4. FUNÇÕES PRINCIPAIS ---

    function renderProducts() {
        if (!productGrid) return; 
        
        productGrid.innerHTML = products.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h4>${product.name}</h4>
                    <p class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
                    <button class="add-to-cart-btn" data-id="${product.id}">Adicionar</button>
                </div>
            </div>
        `).join('');
    }

    function updateCartUI() {
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p id="empty-cart-msg">Seu carrinho está vazio.</p>';
            cartTotalElement.textContent = 'Total: R$ 0,00';
            cartItemCountElement.textContent = '0';
            cartItemCountElement.style.display = 'none'; 
            return;
        }

        cart.forEach(item => {
            const itemHTML = `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-info">
                        <h5>${item.name}</h5>
                        <p>R$ ${item.price.toFixed(2).replace('.', ',')}</p>
                        <p class="cart-item-quantity">Qtd: ${item.quantity}</p>
                    </div>
                    <button class="remove-from-cart-btn" data-id="${item.id}">Remover</button>
                </div>
            `;
            cartItemsContainer.innerHTML += itemHTML;
        });

        const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

        cartItemCountElement.textContent = totalItems;
        cartItemCountElement.style.display = 'flex'; 
        cartTotalElement.textContent = `Total: R$ ${totalPrice.toFixed(2).replace('.', ',')}`;
    }

    function addToCart(productId) {
        const existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            const productToAdd = products.find(p => p.id === productId);
            if (productToAdd) {
                cart.push({ ...productToAdd, quantity: 1 });
            }
        }

        updateCartUI();
        saveCartToLocalStorage();
    }

    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCartUI();
        saveCartToLocalStorage();
    }

    function saveCartToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function openCart() {
        cartSidebar.classList.add('open');
        overlay.classList.add('open');
    }

    function closeCart() {
        cartSidebar.classList.remove('open');
        overlay.classList.remove('open');
    }

    function openModal() {
        orderModal.classList.add('open');
    }

    function closeModal() {
        orderModal.classList.remove('open');
    }

    function finalizeOrder() {
        if (cart.length === 0) {
            return; 
        }
        
        closeCart();
        openModal();
        
        cart = []; 
        updateCartUI(); 
        saveCartToLocalStorage(); 
    }


    // --- 5. EVENT LISTENERS (Ouvintes de Eventos) ---

    cartToggle.addEventListener('click', openCart);
    cartClose.addEventListener('click', closeCart);
    overlay.addEventListener('click', closeCart);

    productGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const productId = parseInt(e.target.dataset.id);
            addToCart(productId);
        }
    });

    cartItemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-from-cart-btn')) {
            const productId = parseInt(e.target.dataset.id);
            removeFromCart(productId);
        }
    });

    checkoutBtn.addEventListener('click', finalizeOrder);
    modalCloseX.addEventListener('click', closeModal);
    modalCloseOk.addEventListener('click', closeModal);
    
    orderModal.addEventListener('click', (e) => {
        if (e.target === orderModal) {
            closeModal();
        }
    });

    // --- 6. INICIALIZAÇÃO ---
    renderProducts();
    updateCartUI();

});

