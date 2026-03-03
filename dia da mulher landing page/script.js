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

        // Elegant form processing
        btnText.classList.add('hidden');
        spinner.classList.remove('hidden');
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';

        // Fake processing
        setTimeout(() => {
            // Hide inputs with a fade
            const inputs = form.querySelectorAll('.input-wrapper');
            inputs.forEach(input => input.style.display = 'none');
            submitBtn.style.display = 'none';

            // Show delicate success message
            successMessage.classList.remove('hidden');
        }, 1200);
    });
});
