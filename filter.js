function filterById() {
    let ids = document.getElementById('idFilter').value.toLowerCase().split(",").map(item => item.trim());  
    document.querySelectorAll('#catalog li').forEach(item => {
        let itemId = item.id.toLowerCase();
        item.style.display = ids.includes(itemId) ? '' : 'none';
    });
}

function clearFilter() {
    document.getElementById('idFilter').value = '';
    document.querySelectorAll('#catalog li').forEach(item => {
        item.style.display = '';
    });
}   




