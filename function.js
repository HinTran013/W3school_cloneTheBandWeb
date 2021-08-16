//open and close modal behavior
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

//open and close mobile menu behavior
var header = document.getElementById('header');
var mobileBtn = document.querySelector('#header .mobile-menu-icon');
var headerHeight = header.clientHeight;

mobileBtn.addEventListener('click', ()=>{
    var isClosed = headerHeight === header.clientHeight;
    if(isClosed){
        header.style.height = 'auto';
    }else{
        header.style.height = null;
    }
})

//close menu and move to section of page
var menuItems = document.querySelectorAll('ul#nav li a[href*="#"]');

for(var menuItem of menuItems){
    menuItem.onclick = function(){
        header.style.height = null;
    }
}
