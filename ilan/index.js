document.addEventListener('DOMContentLoaded', () => {
    const openWindow = document.getElementById('open-window');
    const btnWindow = document.getElementById('btn-window');

    btnWindow.addEventListener('click', (e) => {
        e.preventDefault();
        openWindow.style.display = 'flex';
    });
});
