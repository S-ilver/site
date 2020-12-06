'use strict';

document.addEventListener('DOMContentLoaded', () => {
    /* menu */
    const menuBtn = document.querySelector('.header__menu'),
          menuContent = document.querySelector('.header__nav');
    
    menuBtn.addEventListener('click',function() {
        this.classList.toggle('_menu');
        menuContent.classList.toggle('_menu');
        menuContent.parentElement.classList.toggle('_menu');
        document.body.classList.toggle('_menu');
    });
});