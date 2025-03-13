function toggleInfo() {
    const extraInfo = document.getElementById('extra-info');
    const button = document.querySelector('.toggle-btn');
    
    extraInfo.classList.toggle('hidden');
    button.textContent = extraInfo.classList.contains('hidden') ? 'Подробнее' : 'Свернуть';
}