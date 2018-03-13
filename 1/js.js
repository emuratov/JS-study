// change class by clickable image
document.onclick = function (ev) {
    if (ev.target.tagName == 'IMG') {
        if (ev.target.classList.value == 'imgTarget') {
            ev.target.classList.remove('imgTarget');
        } else
        if (ev.target.classList.value !== 'imgTarget') {
            ev.target.classList.add('imgTarget');
        }
    }
}