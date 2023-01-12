'use strict';

const showBtns = document.querySelectorAll('.show-modal');

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const closeBtn = document.querySelector('.close-modal');

function addModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function removeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < showBtns.length; i++) {
  showBtns[i].addEventListener('click', addModal);
  closeBtn.addEventListener('click', removeModal);
  document.addEventListener('keydown', function (evt) {
    console.log(evt);

    if (evt.key === 'Escape' && !modal.classList.contains('hidden')) {
      removeModal();
    }
  });
}
