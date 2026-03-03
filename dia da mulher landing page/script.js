document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('sorteio-form');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const spinner = document.getElementById('spinner');
    const successMessage = document.getElementById('success-message');

    // Phone formatting
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function (e) {
        let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const referrer = document.getElementById('referrer').value.trim();
        const referred = document.getElementById('referred').value.trim();
        const phone = phoneInput.value.trim();

        if (!referrer || !referred || phone.length < 14) {
            alert("Por favor, preencha todos os campos do formulário com carinho 🌺");
            return;
        }

        // Format the message for WhatsApp
        const phoneNumber = "5514998944441";
        const message = `Olá! Acabei de preencher o formulário do Dia da Mulher.%0A%0A*Meu Nome (Indicador):* ${referrer}%0A*Mulher Indicada:* ${referred}%0A*WhatsApp da Indicada:* ${phone}%0A%0AQuero validar minha participação no sorteio da bolsa de 100%! 🌸`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

        // Redirect to WhatsApp after briefly showing the loader
        setTimeout(() => {
            // Restore button visual (in case they come back)
            btnText.classList.remove('hidden');
            spinner.classList.add('hidden');
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';

            // Redirect the user
            window.open(whatsappUrl, '_blank');

            // Optionally, show a success message on the page itself
            const inputs = form.querySelectorAll('.input-wrapper');
            inputs.forEach(input => input.style.display = 'none');
            submitBtn.style.display = 'none';
            successMessage.classList.remove('hidden');
        }, 800);
    });
});
