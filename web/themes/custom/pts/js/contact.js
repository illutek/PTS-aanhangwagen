/**
 * Created by stefan on 30-11-2019.
 *
 */


(function () {
  'use strict';

  var openBtnContact = document.querySelector('.open-contact');
  var closeBtnContact = document.querySelector('.js-close-contact');
  var contactOverlay = document.querySelector('.r-overlay-contact');


  /** 
   *  Functions
  */

 function closeContact() {
  contactOverlay.classList.remove('r-overlay-contact--visible');
 }

 function openContact() {
  contactOverlay.classList.toggle('r-overlay-contact--visible');
 }

 openBtnContact.addEventListener('click', openContact);
 closeBtnContact.addEventListener('click', closeContact);

}());