// It's probably unreadable. I'm sorry if it's the case. (at least it works!.. yes it has some bugs, but it still works)

// Issues : You can't scroll in the views list anymore.

let yAdd = (window.matchMedia("(pointer: fine)").matches) ? "0" : "64"
let onmove = false
let target;

// It needs some optimisations too. For example, I shouldn't put 6 listeners for every single items of the views list.
// I can avoid easily that by only putting those listeners to the views list element.

$$("#designer .views-list > *").forEach(item => {
    // touchscreen
    item.ontouchstart = start
    item.ontouchmove = event => onmove ? move(event) : null
    item.ontouchend = end

    // mouse
    item.onclick = event => { if (!(yAdd > 0) && !onmove) start(event) }

    var startpos;

    function start(event) {
        onmove = true
        target = item;

        dragIcon.classList.add("moving")
        target.classList.add("moving")

        dragIcon.src = event.target.querySelector("img").src

        viewsListElement.style.overflow = "hidden"
        
        if (event.touches == undefined) {
            // mouse
            startpos = {x: event.pageX, y: event.pageY}

            setTimeout(() => {
                designer.onclick = event => { if (!(yAdd > 0) && onmove) end(event) }
                designer.onmousemove = move
            });
        } else {
            // touchscreen
            startpos = {x: event.touches[0].pageX, y: event.touches[0].pageY}
        }

        dragIcon.style.transform = `translate(${startpos.x - (dragIcon.offsetWidth / 2)}px, ${(startpos.y - (dragIcon.offsetHeight / 2)) - yAdd}px)`
    }

    function move(event) {
        let pos;

        if (event.touches == undefined) pos = {x: event.pageX, y: event.pageY}
        else pos = {x: event.touches[0].pageX, y: event.touches[0].pageY}

        dragIcon.style.transform = `translate(${pos.x - (dragIcon.offsetWidth / 2)}px, ${(pos.y - (dragIcon.offsetHeight / 2)) - yAdd}px)`
    }

    function end(event) {
        dragIcon.classList.remove("moving")
        target.classList.remove("moving")

        dragIcon.style.transform = `translate(${startpos.x - (dragIcon.offsetWidth / 2)}px, ${startpos.y - (dragIcon.offsetHeight / 2)}px)`

        onmove = false

        if (event.touches == undefined) designer.onclick = designer.onmousemove = null; // mouse
        //else item.ontouchstart = null; // touchscreen 
    }
});

let previewPos = {x: 0, y: 0}

preview.onpointermove = preview.ontouchmove = event => {
    previewPos = {x: event.layerX, y: event.layerY}
    preview.style.background = onmove ? "blue" : "red"
    $log("moving")
}