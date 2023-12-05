import {mobileVhFix} from './utils/mobile-vh-fix.js';
import {initModals} from './modules/modals/init-modals';
import {initWheel} from "./modules/init-wheel.js";
import {initPrompt} from "./modules/init-prompt.js";
import './vendor/focus-visible-polyfill';

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  mobileVhFix();

  // Modules
  // ---------------------------------
  window.addEventListener('load', () => {
    initModals();
    initWheel();
    initPrompt();
  });
});
