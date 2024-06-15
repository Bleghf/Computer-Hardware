document.querySelectorAll('.show-details').forEach(item => {
    item.addEventListener('click', () => {
        const details = item.nextElementSibling;
        const isVisible = details.style.display === 'block';

        // Hide all other details
        document.querySelectorAll('.details').forEach(detail => {
            detail.style.display = 'none';
            detail.style.opacity = '0';
            detail.previousElementSibling.classList.remove('open');
            detail.previousElementSibling.querySelector('i').classList.remove('rotate');
        });

        if (!isVisible) {
            details.style.display = 'block';
            setTimeout(() => {
                details.style.opacity = '1';
            }, 10);
            item.classList.add('open');
            item.querySelector('i').classList.add('rotate');
        } else {
            details.style.opacity = '0';
            setTimeout(() => {
                details.style.display = 'none';
            }, 300);
            item.classList.remove('open');
            item.querySelector('i').classList.remove('rotate');
        }
    });
});