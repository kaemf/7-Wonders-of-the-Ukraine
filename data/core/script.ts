const block : NodeListOf<HTMLImageElement> = document.querySelectorAll('.container-content')!,
    modalTitle : HTMLElement = document.querySelector('.overlay-title') as HTMLElement,
    modalIm: HTMLImageElement = document.getElementById('modal-img') as HTMLImageElement,
    overlay : HTMLDivElement = document.getElementById('overlay') as HTMLDivElement,
    overlayImage : HTMLDivElement = document.querySelector('.overlay-image-container') as HTMLDivElement,
    date : Date = new Date();
let active : boolean = false;

document.querySelector('.date')!.setAttribute('year', date.getFullYear().toString());

block.forEach((container : HTMLElement) => {
    container.addEventListener('click', (event : Event) => {
        const currImg: HTMLImageElement = container.querySelector('img') as HTMLImageElement;

        if (!active){
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

document.addEventListener('click', (event : Event) => {
    const isClickedIm = Array.prototype.slice.call(block).some((container: HTMLElement) => container.contains(event.target as Node)),
        isClicked = overlayImage.contains(event.target as HTMLDivElement);
  
    if (!isClickedIm && !isClicked && active){
        overlay.style.visibility = 'hidden';
        overlay.style.opacity = '0';
        document.body.style.overflow = 'auto';
        modalIm.style.transform = 'scale(1)';
        active = false;
    } 
});