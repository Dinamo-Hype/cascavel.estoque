/* Variáveis globais */
let products = JSON.parse(localStorage.getItem('products')) || [];
let suppliers = JSON.parse(localStorage.getItem('suppliers')) || [];
let categories = JSON.parse(localStorage.getItem('categories')) || ['Eletrônicos', 'Alimentos', 'Limpeza', 'Vestuário'];
let settings = JSON.parse(localStorage.getItem('settings')) || {
    companyName: 'Minha Empresa',
    lowStockThreshold: 10,
    defaultCurrency: 'BRL',
    autoBackup: false
};

let currentPage = {
    products: 1,
    suppliers: 1
};

const itemsPerPage = 10;
let confirmActionCallback = null;
let categoryChart = null;

// Inicialização do sistema
document.addEventListener('DOMContentLoaded', function() {
    // Configura a data atual
    const now = new Date();
    document.getElementById('currentDate').textContent = now.toLocaleDateString('pt-BR', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    // Carrega os dados iniciais
    loadProducts();
    loadSuppliers();
    loadCategories();
    loadSettings();
    updateDashboard();
});