let modal = document.querySelector('.modal');
let modalOpen = document.querySelector('.modal-open');
let modalClose = document.querySelector('.modal-close');
let modalOverlay = document.querySelector('.modal-overlay');
modalOpen.addEventListener('click', () => {
    modal.classList.add('active');
    modalOverlay.classList.add('active');
    modalOpen.classList.add('active');
});
modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    modalOpen.classList.remove('active');
    modalOverlay.classList.remove('active');
});
modalOverlay.addEventListener('click', () => {
    modal.classList.remove('active');
    modalOpen.classList.remove('active');
    modalOverlay.classList.remove('active');
});