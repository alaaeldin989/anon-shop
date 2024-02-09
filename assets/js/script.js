// modal varibals

const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function 
const modalCloseFunc = function () {modal.classList.add('closed')}

// modal EventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);

/* <!-- notfication-toast varibals--> */
const notficationTosat = document.querySelector('[data-toast]');
const tosatCloseBtn = document.querySelector('[data-toast-close]');

/* <!-- notfication-toast eventListenr--> */
tosatCloseBtn.addEventListener('click', function (){
    notficationTosat.classList.add('closed')
})

// mobile menu varible
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]')

for (let i = 0; i < mobileMenuOpenBtn.length; i++){
    
    // mobile menu function 
    const mobileMenuCloseFunc = function (){
        mobileMenu[i].classList.remove('active');
        overlay.classList.remove('active')
    }
    mobileMenuOpenBtn[i].addEventListener('click', function(){
        mobileMenu[i].classList.add('active');
        overlay.classList.add('active');
    });

    mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
//    overlay.addEventListener('click', mobileMenuCloseFunc);
}

// accordation varibal
const accordationBtn = document.querySelectorAll('[data-accordation-btn]');
const accordation = document.querySelectorAll('[data-accordation]');

for(let i = 0; i < accordation.length; i++){
    accordationBtn[i].addEventListener('click', function () {
const clickBtn = this.nextElementSibling.classList.contains('active');

for(let i = 0; i < accordation.length; i++){
    if (clickBtn) break;

    if(accordation[i].classList.contains('active')){

        accordation[i].classList.remove('active');
        accordationBtn[i].classList.remove('active');
    }
}
this.nextElementSibling.classList.toggle('active');
this.classList.toggle('active')

  })
}























