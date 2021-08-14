const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const closeModal = document.querySelector('.js-modal-close');

function hideBuyTicket(){
    modal.classList.remove('open');
}

for(var buyBtn of buyBtns){
    buyBtn.addEventListener('click', function showBuyTicket(){
        modal.classList.add('open');
    });
}

closeModal.addEventListener('click', hideBuyTicket);
modal.addEventListener('click', hideBuyTicket);

modalContainer.addEventListener('click', (event) => {
    event.stopPropagation();
});