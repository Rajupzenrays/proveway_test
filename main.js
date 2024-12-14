const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        const radio = card.querySelector('input[type="radio"]');
        console.log("radio", radio.checked)
        if (radio) {
            radio.checked = true;
        }
    });
});



console.log("JavaScript connected successfully!");
