const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)
const $log = str => console.log(str)
const $body = $("body")
const $html = $("html")

// Create an element from String
function $createElement(str) {
    let template = document.createElement("template")
    
    template.innerHTML = str.trim()

    return template.content.firstChild
}