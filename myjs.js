const scriptURL = 'https://script.google.com/macros/s/AKfycby_V_l4e8uWSEUvgYPPvLxHJpkmmKLobG1_4rWoqN5Ofe_5poT6DMnqWnA7WTCPUujcKA/exec'
const form = document.forms['contact-form']
const btnSubmit = document.querySelector('.btn-submit')
const btnLoading = document.querySelector('.btn-loading')
const alertSuccess = document.querySelector('.alert-success')
const alertDanger = document.querySelector('.alert-danger')

form.addEventListener('submit', e => {
    e.preventDefault()
    btnLoading.classList.toggle('d-none')
    btnSubmit.classList.toggle('d-none')
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            console.log('Success!', response)
            btnLoading.classList.toggle('d-none')
            btnSubmit.classList.toggle('d-none')
            alertSuccess.classList.toggle('d-none')
            form.reset()
        })
        .catch(error => {
            console.error('Error!', error.message)
            alertDanger.classList.toggle('d-none')
            btnLoading.classList.toggle('d-none')
            btnSubmit.classList.toggle('d-none')
            form.reset()
        })
})