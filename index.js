 const Open  = document.querySelector('.open');
const Close = document.querySelector('.close');
const Modal = document.querySelector('.modal');


Open.addEventListener('click', () => {
    Modal.style.display = 'flex';
}
);

Close.addEventListener('click', () => {
    Modal.style.display = 'none';
}
);
 