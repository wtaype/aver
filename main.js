import $ from 'jquery';
import { 
    Mensaje, 
    Notificacion, 
    savels, 
    getls, 
    witip,
    Tiempo,
    Capi,
    showLoading,
    infoo
} from './widev.js';

// ===== CONFIGURACIÓN ESENCIAL =====
const CONFIG = {
    POINTS: {
        'Parapente': 50, 'Buggie Privado': 30, 'City Tour': 20, 'Buggie 1 Hora': 15, 
        'Buggie 2 Horas': 15, 'Tour de bodegas': 15, 'Tablas Profesional': 15,
        'Tour de Paracas': 10, 'Cañón de los perdidos': 10, 'Cuatrimotos': 10, 
        'Sobrevuelo': 10, 'Nazca Terrestre': 10, 'Polaris': 10
    },
    PRICES: {
        'Parapente': 330, 'Buggie Privado': 200, 'Buggie 1 Hora': 25, 'Buggie 2 Horas': 35,
        'Tour de Paracas': 70, 'Cañón de los perdidos': 70, 'Tour de bodegas': 30,
        'Cuatrimotos': 70, 'Sobrevuelo': 200, 'Nazca Terrestre': 150, 'Tablas Profesional': 150,
        'Polaris': 380, 'City Tour': 200
    }
};

// ===== ESTADO GLOBAL =====
let APP = {
    sales: getls('sales') || [],
    currentMonth: `2025-${Tiempo('mes').toString().padStart(2, '0')}`,
    editingId: null
};

// ===== INICIALIZACIÓN =====
$(document).ready(() => {
    console.log('🚀 Reto del Mes 2025 iniciado');
    initApp();
});

function initApp() {
    // Configurar eventos
    setupEvents();
    
    // Cargar datos
    loadSales();
    updateStats();
    
    // Configurar fecha/hora actual
    setDateTime();
    
    // Configurar tabs
    setupTabs();
    
    // Inicializar temas
    initThemes();
    
    // Info general
    infoo();
    
    console.log('✅ Aplicación lista');
}

// ===== EVENTOS PRINCIPALES =====
function setupEvents() {
    // Form submission
    $('#saleForm').on('submit', handleSubmit);
    
    // Tour type change
    $('#tourType').on('change', updatePrices);
    $('#paxCount').on('input', updateTotal);
    
    // Month selector
    $('#monthSelector').on('change', e => {
        APP.currentMonth = e.target.value;
        loadSales();
        updateStats();
    });
    
    // Filter employees
    $('#filterEmployee').on('change', filterSales);
    
    // Today filter
    $('#todayFilter').on('click', () => {
        const today = Tiempo('iso');
        filterSalesByDate(today);
    });
    
    // Global functions for table buttons
    window.editSale = editSale;
    window.deleteSale = deleteSale;
    window.viewSale = viewSale;
    window.logout = () => {
        if (confirm('¿Cerrar sesión?')) {
            Notificacion('👋 Hasta pronto!', 'success');
            setTimeout(() => window.location.href = '/login.html', 1500);
        }
    };
}

// ===== MANEJO DE FORMULARIO =====
function handleSubmit(e) {
    e.preventDefault();
    
    const sale = getFormData();
    if (!validateSale(sale)) return;
    
    showLoading(true);
    
    if (APP.editingId) {
        updateSale(sale);
        Notificacion('✏️ Venta actualizada', 'success');
    } else {
        addSale(sale);
        Notificacion(`🎉 ¡+${sale.points} puntos!`, 'success');
    }
    
    clearForm();
    loadSales();
    updateStats();
    showLoading(false);
}

function getFormData() {
    const tourType = $('#tourType').val();
    const isCancelled = $('#tourCanceled').val() === 'SI';
    
    return {
        id: APP.editingId || `sale_${Date.now()}`,
        tourType,
        roomNumber: $('#roomNumber').val() || 'N/A',
        clientName: Capi($('#clientName').val().trim()),
        paxCount: parseInt($('#paxCount').val()) || 1,
        tourDate: $('#tourDate').val(),
        tourTime: $('#tourTime').val(),
        seller: 'RUBI', // Usuario actual
        unitPrice: parseFloat($('#unitPrice').val()) || 0,
        totalPrice: parseFloat($('#totalPrice').val()) || 0,
        paymentMethod: $('#paymentMethod').val() || 'Efectivo',
        providerPayment: parseFloat($('#providerPayment').val()) || 0,
        commission: parseFloat($('#commission').val()) || 0,
        tourCanceled: $('#tourCanceled').val(),
        points: isCancelled ? 0 : (CONFIG.POINTS[tourType] || 0),
        status: isCancelled ? 'CANCELADO' : 'PAGADO',
        month: APP.currentMonth,
        createdAt: new Date().toISOString()
    };
}

function validateSale(sale) {
    if (!sale.tourType) {
        witip('#tourType', 'Selecciona un tour', 'error');
        return false;
    }
    if (!sale.clientName) {
        witip('#clientName', 'Ingresa el nombre', 'error');
        return false;
    }
    if (!sale.tourDate) {
        witip('#tourDate', 'Selecciona la fecha', 'error');
        return false;
    }
    if (!sale.tourTime) {
        witip('#tourTime', 'Selecciona la hora', 'error');
        return false;
    }
    return true;
}

// ===== GESTIÓN DE VENTAS =====
function addSale(sale) {
    APP.sales.unshift(sale);
    saveSales();
}

function updateSale(sale) {
    const index = APP.sales.findIndex(s => s.id === APP.editingId);
    if (index !== -1) {
        APP.sales[index] = { ...APP.sales[index], ...sale };
        saveSales();
    }
    APP.editingId = null;
}

function deleteSale(id) {
    const sale = APP.sales.find(s => s.id === id);
    if (!sale) return;
    
    if (confirm(`¿Eliminar venta de ${sale.clientName}?`)) {
        APP.sales = APP.sales.filter(s => s.id !== id);
        saveSales();
        loadSales();
        updateStats();
        Notificacion('🗑️ Venta eliminada', 'warning');
    }
}

function editSale(id) {
    const sale = APP.sales.find(s => s.id === id);
    if (!sale) return;
    
    APP.editingId = id;
    populateForm(sale);
    
    // Scroll al formulario
    $('html, body').animate({
        scrollTop: $('.new-sale-panel').offset().top - 100
    }, 800);
    
    Notificacion(`✏️ Editando venta de ${sale.clientName}`, 'info');
}

function viewSale(id) {
    const sale = APP.sales.find(s => s.id === id);
    if (!sale) return;
    
    const details = `
        <h4>📋 Detalles de la Venta</h4>
        <p><strong>Tour:</strong> ${sale.tourType}</p>
        <p><strong>Cliente:</strong> ${sale.clientName}</p>
        <p><strong>PAX:</strong> ${sale.paxCount}</p>
        <p><strong>Fecha:</strong> ${sale.tourDate} ${sale.tourTime}</p>
        <p><strong>Habitación:</strong> ${sale.roomNumber}</p>
        <p><strong>Importe:</strong> S/ ${sale.totalPrice.toFixed(2)}</p>
        <p><strong>Puntos:</strong> ${sale.points}</p>
        <p><strong>Estado:</strong> ${sale.status}</p>
    `;
    
    showModal('Detalles de Venta', details);
}

function saveSales() {
    savels('sales', APP.sales, 8760); // 1 año
}

// ===== PRECIOS Y PUNTOS =====
function updatePrices() {
    const tourType = $('#tourType').val();
    if (!tourType) {
        $('#unitPrice, #totalPrice, #pointsPreview').val('').text('0');
        return;
    }
    
    const price = CONFIG.PRICES[tourType] || 0;
    const points = CONFIG.POINTS[tourType] || 0;
    
    $('#unitPrice').val(price);
    $('#pointsPreview').text(points);
    
    updateTotal();
    witip('#pointsPreview', `${points} puntos por ${tourType}`, 'success', 2000);
}

function updateTotal() {
    const unitPrice = parseFloat($('#unitPrice').val()) || 0;
    const pax = parseInt($('#paxCount').val()) || 1;
    $('#totalPrice').val((unitPrice * pax).toFixed(2));
}

// ===== CARGA Y FILTROS =====
function loadSales() {
    const monthSales = APP.sales.filter(s => s.month === APP.currentMonth);
    const $tbody = $('#salesTable tbody');
    
    if (monthSales.length === 0) {
        $tbody.html(`
            <tr class="no-data">
                <td colspan="9" style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                    <div class="empty-state">
                        <i class="fas fa-inbox empty-icon"></i>
                        <h3>No hay ventas registradas</h3>
                        <p class="empty-subtitle">Comienza agregando tu primera venta</p>
                    </div>
                </td>
            </tr>
        `);
        return;
    }
    
    const rows = monthSales.map(sale => createSaleRow(sale)).join('');
    $tbody.html(rows);
}

function createSaleRow(sale) {
    const isToday = sale.tourDate === Tiempo('iso');
    const statusIcon = sale.status === 'PAGADO' ? '✅' : '❌';
    
    return `
        <tr data-id="${sale.id}" class="${isToday ? 'today-highlight' : ''}">
            <td><span class="tour-badge">${sale.tourType}</span></td>
            <td>
                <strong class="client-name">${sale.clientName}</strong>
                ${sale.roomNumber !== 'N/A' ? `<small>Hab: ${sale.roomNumber}</small>` : ''}
            </td>
            <td><span class="pax-badge"><i class="fas fa-users"></i> ${sale.paxCount}</span></td>
            <td>
                <div class="datetime-info">
                    <span><i class="fas fa-calendar"></i> ${formatDate(sale.tourDate)}</span>
                    <span><i class="fas fa-clock"></i> ${sale.tourTime}</span>
                </div>
            </td>
            <td>
                <div class="seller-info">
                    <strong>${sale.seller}</strong>
                    <span class="seller-avatar">${sale.seller === 'RUBI' ? '👩‍💼' : '👨‍💼'}</span>
                </div>
            </td>
            <td><strong class="price-amount">S/ ${sale.totalPrice.toFixed(2)}</strong></td>
            <td><span class="points-badge"><i class="fas fa-star"></i> ${sale.points}</span></td>
            <td><span class="status-badge ${sale.status.toLowerCase()}">${statusIcon} ${sale.status}</span></td>
            <td>
                <div class="action-buttons">
                    <button class="btn-icon btn-view" onclick="viewSale('${sale.id}')" title="Ver">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn-icon btn-edit" onclick="editSale('${sale.id}')" title="Editar">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-icon btn-delete" onclick="deleteSale('${sale.id}')" title="Eliminar">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `;
}

function filterSales() {
    const employee = $('#filterEmployee').val();
    let sales = APP.sales.filter(s => s.month === APP.currentMonth);
    
    if (employee) {
        sales = sales.filter(s => s.seller === employee);
    }
    
    APP.filteredSales = sales;
    displayFilteredSales(sales);
}

function filterSalesByDate(date) {
    const sales = APP.sales.filter(s => s.tourDate === date);
    displayFilteredSales(sales);
    Notificacion(`📅 ${sales.length} venta(s) para hoy`, 'info');
}

function displayFilteredSales(sales) {
    const $tbody = $('#salesTable tbody');
    if (sales.length === 0) {
        $tbody.html('<tr><td colspan="9" style="text-align:center;padding:2rem;">No se encontraron ventas</td></tr>');
        return;
    }
    const rows = sales.map(sale => createSaleRow(sale)).join('');
    $tbody.html(rows);
}

// ===== ESTADÍSTICAS =====
function updateStats() {
    const monthSales = APP.sales.filter(s => s.month === APP.currentMonth && s.status !== 'CANCELADO');
    
    // Estadísticas por empleado
    const rubiSales = monthSales.filter(s => s.seller === 'RUBI');
    const piereSales = monthSales.filter(s => s.seller === 'PIERE');
    
    const rubiPoints = rubiSales.reduce((sum, s) => sum + s.points, 0);
    const pierePoints = piereSales.reduce((sum, s) => sum + s.points, 0);
    
    // Actualizar UI
    updateEmployeeCard('RUBI', {
        points: rubiPoints,
        sales: rubiSales.length,
        clients: rubiSales.reduce((sum, s) => sum + s.paxCount, 0)
    });
    
    updateEmployeeCard('PIERE', {
        points: pierePoints,
        sales: piereSales.length,
        clients: piereSales.reduce((sum, s) => sum + s.paxCount, 0)
    });
    
    // Actualizar rankings
    updateRankings(rubiPoints, pierePoints);
    
    // Resumen general
    updateCompetitionSummary(monthSales);
}

function updateEmployeeCard(employee, stats) {
    const $card = $(`.worker-card[data-employee="${employee}"]`);
    
    $card.find('.points-number').text(stats.points);
    const $statValues = $card.find('.stat-value');
    $statValues.eq(0).text(stats.sales);
    $statValues.eq(1).text(stats.clients);
    $statValues.eq(2).text(stats.sales > 0 ? '85%' : '0%');
    $statValues.eq(3).text('1d');
}

function updateRankings(rubiPoints, pierePoints) {
    $('.worker-card').removeClass('champion runner-up');
    
    if (rubiPoints > pierePoints) {
        $('.worker-card[data-employee="RUBI"]').addClass('champion');
        $('.worker-card[data-employee="PIERE"]').addClass('runner-up');
        $('.worker-card[data-employee="RUBI"] .rank-badge').html('<i class="fas fa-crown"></i> #1');
        $('.worker-card[data-employee="PIERE"] .rank-badge').html('<i class="fas fa-medal"></i> #2');
    } else if (pierePoints > rubiPoints) {
        $('.worker-card[data-employee="PIERE"]').addClass('champion');
        $('.worker-card[data-employee="RUBI"]').addClass('runner-up');
        $('.worker-card[data-employee="PIERE"] .rank-badge').html('<i class="fas fa-crown"></i> #1');
        $('.worker-card[data-employee="RUBI"] .rank-badge').html('<i class="fas fa-medal"></i> #2');
    } else {
        $('.worker-card').addClass('runner-up');
        $('.rank-badge').html('🤝 Empate');
    }
}

function updateCompetitionSummary(sales) {
    const $summary = $('.competition-summary');
    const $values = $summary.find('.summary-value');
    
    const totalPoints = sales.reduce((sum, s) => sum + s.points, 0);
    const todaySales = sales.filter(s => s.tourDate === Tiempo('iso'));
    
    $values.eq(0).text(sales.length);
    $values.eq(1).text(totalPoints);
    $values.eq(2).text(todaySales.length);
    $values.eq(3).text('100'); // Meta del mes
}

// ===== UTILIDADES =====
function setDateTime() {
    const now = new Date();
    $('#tourDate').val(Tiempo('iso'));
    
    const futureTime = new Date(now.getTime() + 30 * 60000);
    $('#tourTime').val(futureTime.toTimeString().slice(0, 5));
}

function clearForm() {
    $('#saleForm')[0].reset();
    APP.editingId = null;
    setDateTime();
    $('#pointsPreview').text('0');
    Notificacion('🧹 Formulario limpiado', 'info');
}

function populateForm(sale) {
    Object.keys(sale).forEach(key => {
        const $field = $(`#${key}`);
        if ($field.length) $field.val(sale[key]);
    });
    updatePrices();
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('es-ES', {
        day: '2-digit',
        month: 'short'
    });
}

// ===== TABS =====
function setupTabs() {
    $('.tab-btn').on('click', function() {
        const tabId = $(this).data('tab');
        
        $('.tab-btn').removeClass('active');
        $('.tab-content').removeClass('active');
        
        $(this).addClass('active');
        $(`#${tabId}-tab`).addClass('active');
    });
}

// ===== MODAL SIMPLE =====
function showModal(title, content) {
    const modalHTML = `
        <div class="custom-modal show" id="currentModal">
            <div class="modal-backdrop"></div>
            <div class="modal-container medium">
                <div class="modal-header">
                    <h3>${title}</h3>
                    <button class="modal-close" onclick="closeModal()">&times;</button>
                </div>
                <div class="modal-body">
                    ${content}
                </div>
                <div class="modal-footer">
                    <button class="btn secondary" onclick="closeModal()">Cerrar</button>
                </div>
            </div>
        </div>
    `;
    
    $('body').append(modalHTML);
    
    // Close on backdrop click
    $('.modal-backdrop').on('click', closeModal);
    
    // Close on Escape
    $(document).on('keydown.modal', e => {
        if (e.key === 'Escape') closeModal();
    });
}

function closeModal() {
    $('#currentModal').removeClass('show');
    setTimeout(() => {
        $('#currentModal').remove();
        $(document).off('keydown.modal');
    }, 300);
}

window.closeModal = closeModal;

// ===== TEMAS SIMPLES =====
function initThemes() {
    const themes = [
        { name: 'Cielo', color: '#1978d7' },
        { name: 'Dulce', color: '#ff3849' },
        { name: 'Paz', color: '#25b62a' },
        { name: 'Mora', color: '#6a00f5' },
        { name: 'Futuro', color: '#00f3ff' }
    ];

    const $witemas = $('.witemas');
    const savedTheme = getls('witema') || 'Dulce';
    
    themes.forEach(theme => {
        const $tema = $(`<div class="tema" data-theme="${theme.name}" title="Tema ${theme.name}" style="background: var(--bg-${theme.name})"></div>`);
        
        if (theme.name === savedTheme) {
            $tema.addClass('mtha');
            $('html').attr('data-theme', theme.name);
            $('meta[name="theme-color"]').attr('content', theme.color);
        }
        
        $tema.on('click', function() {
            $('.tema').removeClass('mtha');
            $(this).addClass('mtha');
            $('html').attr('data-theme', theme.name);
            $('meta[name="theme-color"]').attr('content', theme.color);
            savels('witema', theme.name, 720);
            Notificacion(`🎨 Tema ${theme.name} aplicado`, 'success');
        });
        
        $witemas.append($tema);
    });
}

console.log('✨ main.js compacto cargado - 195 líneas');