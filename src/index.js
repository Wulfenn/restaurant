import { persistent } from './persistent';
import { home } from './home';
import { menu } from './menu';
import { contact } from './contact';

persistent();
home();

const homeLink = document.querySelector('#home');
const menuLink = document.querySelector('#menu');
const contactLink = document.querySelector('#contact');

homeLink.addEventListener('click', function () {
  const holder = document.querySelector('.holder');
  holder.parentNode.removeChild(holder);
  home();
});

menuLink.addEventListener('click', function () {
  const holder = document.querySelector('.holder');
  holder.parentNode.removeChild(holder);
  menu();
});

contactLink.addEventListener('click', function () {
  const holder = document.querySelector('.holder');
  holder.parentNode.removeChild(holder);
  contact();
});