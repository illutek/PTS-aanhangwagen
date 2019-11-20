/**
 * Created by stefan on 01-11-2019.
 *
 */

(function () {
    'use strict';
  
    const openBtn = document.querySelector('.c-hamburger-btn');
    const openBtnContact = document.querySelector('.open-contact');
    const closeBtn = document.querySelector('.js-close-menu');
    const closeBtnContact = document.querySelector('.js-close-contact');
    const menuOverlay = document.querySelector('.r-menu-overlay');
    const contactOverlay = document.querySelector('.r-overlay-contact');
    const openmenu = document.querySelector('.r-menu-overlay');
  
    // console.log(contactOverlay);
  
    /** 
     *  Functions
    */
  
    function closeMenu() {
      menuOverlay.classList.remove('r-menu-overlay--visible');
    }

    function closeContact() {
      contactOverlay.classList.remove('r-overlay-contact--visible');
    }
  
    function openMenu() {
      menuOverlay.classList.toggle('r-menu-overlay--visible');
    }

    function openContact() {
      contactOverlay.classList.toggle('r-overlay-contact--visible');
    }
  
    openBtn.addEventListener('click', openMenu);
    openBtnContact.addEventListener('click', openContact);
  
    closeBtn.addEventListener('click', closeMenu);
    closeBtnContact.addEventListener('click', closeContact);
    openmenu.addEventListener('click', () => setTimeout(closeMenu, 500));
  
  })();