"use strict";
const block = document.querySelectorAll('.container-content'), modalTitle = document.querySelector('.overlay-title'), modalIm = document.getElementById('modal-img'), overlay = document.getElementById('overlay'), overlayImage = document.querySelector('.overlay-image-container'), date = new Date();
let active = false;
document.querySelector('.date').setAttribute('year', date.getFullYear().toString());
block.forEach((container) => {
    container.addEventListener('click', (event) => {
        const currImg = container.querySelector('img');
        if (!active) {
            overlay.style.visibility = 'visible';
            overlay.style.opacity = '1';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            document.body.style.overflow = 'hidden';
            container.style.transform = '';
            modalIm.src = currImg.src;
            modalTitle.style.width = window.getComputedStyle(modalIm).width;
            modalTitle.textContent = currImg.getAttribute('title');
            active = true;
        }
    });
});
document.addEventListener('click', (event) => {
    const isClickedIm = Array.prototype.slice.call(block).some((container) => container.contains(event.target)), isClicked = overlayImage.contains(event.target);
    if (!isClickedIm && !isClicked && active) {
        overlay.style.visibility = 'hidden';
        overlay.style.opacity = '0';
        document.body.style.overflow = 'auto';
        modalIm.style.transform = 'scale(1)';
        active = false;
    }
});
