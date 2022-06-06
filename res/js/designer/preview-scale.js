function refreshPreviewSize() {
    //let wh = window.innerHeight // Unused
    let ww = window.innerWidth
    let vlw = $("#designer .views-list").offsetWidth 
    let tph = $(".top-panel").offsetHeight

    preview.style.transform = `translateX(${vlw}px) translateY(${tph}px) scale(${(ww - vlw) / ww}) `
    preview.style.borderBottom = `solid ${ww / (ww - vlw)}px var(--border-color)`
    preview.style.opacity = "1"
}

refreshPreviewSize()

window.onresize = () => refreshPreviewSize()

preview.oncontextmenu = event => {
    event.preventDefault();
}