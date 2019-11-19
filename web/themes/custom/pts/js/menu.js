/**
 * Created by stefan on 01-11-2019.
 *
 */

(function () {
    'use strict';
  
    const openBtn = document.querySelector('.c-hamburger-btn');
    const openBtnContact = document.querySelector('.open-contact');
    const closeBtn = document.querySelector('.close-menu');
    const closeBtnContact = document.querySelector('.close-contact');
    const menuOverlay = document.querySelector('.menu-overlay');
    const contactOverlay = document.querySelector('.r-overlay-contact');
    const openmenu = document.querySelector('.menu-overlay');
  
    // console.log(contactOverlay);
  
    /** 
     *  Functions
    */
  
    function closeMenu() {
      menuOverlay.classList.remove('menu-overlay--visible');
    }

    function closeContact() {
      contactOverlay.classList.remove('r-overlay-contact--visible');
    }
  
    function openMenu() {
      menuOverlay.classList.toggle('menu-overlay--visible');
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