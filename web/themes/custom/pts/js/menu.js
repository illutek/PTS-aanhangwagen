/**
 * Created by stefan on 01-11-2019.
 *
 */

(function () {
    'use strict';
  
    const openBtn = document.querySelector('.hamburger-btn');
    const closeBtn = document.querySelector('.hamburger-btn--close');
    const menuOverlay = document.querySelector('.menu-overlay');
    const openmenu = document.querySelector('.menu-overlay');
  
    // console.log(closeBtn);
  
    /** 
     *  Functions
    */
  
    function closeMenu() {
      menuOverlay.classList.remove('menu-overlay--visible');
    }
  
    function openMenu() {
      menuOverlay.classList.toggle('menu-overlay--visible');
    }
  
    openBtn.addEventListener('click', openMenu);
  
    closeBtn.addEventListener('click', closeMenu);
    openmenu.addEventListener('click', () => setTimeout(closeMenu, 1000));
  
  })();