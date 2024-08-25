const _modalIm = document.getElementById('modal-img');

_modalIm.addEventListener('mouseover', () => {
    $(_modalIm).blowup({
        "background" : "rgba(0,0,0,0.8)",
        "width" : 400,
        "height" : 400,
        "scale" : 3,
        "cursor": false,
    })
});