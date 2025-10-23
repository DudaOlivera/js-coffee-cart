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


});   

