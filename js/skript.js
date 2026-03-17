// Zobrazenie odporucania na domovskej stranke
const offerBtn = document.getElementById('ukaz-ponuku-btn');
const offerAlert = document.getElementById('denna-akcia-alert');

if (offerBtn && offerAlert) {
    offerBtn.addEventListener('click', function () {
        offerAlert.classList.remove('d-none');
    });
}

// Jednoducha validacia kontaktneho formulara
const form = document.getElementById('contact-form');

if (form) {
    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
        }

        form.classList.add('was-validated');
    }, false);
}
