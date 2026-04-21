// Search Filtering for Inventory
const inventorySearch = document.getElementById('inventorySearch');
if (inventorySearch) {
    inventorySearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const rows = document.querySelectorAll('#inventoryTable tbody tr');
        
        rows.forEach(row => {
            const productName = row.cells[1].textContent.toLowerCase();
            const sku = row.cells[0].textContent.toLowerCase();
            
            if (productName.includes(searchTerm) || sku.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
}

// Billing Simulation
function processSale() {
    const btn = document.querySelector('.btn-success');
    const originalText = btn.innerHTML;
    
    // Disable button
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    
    setTimeout(() => {
        btn.style.background = 'var(--primary)';
        btn.innerHTML = '<i class="fas fa-check-double"></i> Sale Completed!';
        
        // Visual feedback for stock reduction (simulated)
        alert('Sale processed successfully! Inventory updated.');
        
        setTimeout(() => {
            btn.disabled = false;
            btn.innerHTML = originalText;
            btn.style.background = 'var(--success)';
        }, 2000);
    }, 1500);
}

// Low Stock Alert Pulsing Logic (Optional JS control if needed)
document.addEventListener('DOMContentLoaded', () => {
    const lowStockItems = document.querySelectorAll('.status-low');
    lowStockItems.forEach(item => {
        // We already have CSS animation, but we could add dynamic checks here
        console.log('Low stock item detected:', item.parentElement.parentElement.cells[1].textContent);
    });
});
