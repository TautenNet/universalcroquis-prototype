const viewsList = [
    {
        id: "builtin",

        displayName: "Built-in views",
        //icon: "Universal Croquis/Icon",

        views: [
            {
                id: "vbox",
                
                displayName: "Vertical box",
                icon: "Tauten/Vertical",

                html: `
                    <div>#{{views}}</div>
                `
            },
            
            {
                id: "hbox",
                
                displayName: "Horizontal box",
                icon: "Tauten/Horizontal",
            },
            
            {
                id: "fbox",
                
                displayName: "Free box",
                icon: "Tauten/Multi directionnal",
            },
            
            {
                id: "list",
                
                displayName: "List box",
                icon: "Tauten/List",
            },
            
            {
                id: "canvas",
                
                displayName: "Canvas",
                icon: "Tauten/Canvas",
            },
            
            {
                id: "label",
                
                displayName: "Label",
                icon: "Tauten/Text",
            },
            
            {
                id: "input",
                
                displayName: "Text Input",
                icon: "Tauten/Input",
            },
            
            {
                id: "button",
                
                displayName: "Button",
                icon: "Tauten/Button",
            },
            
            {
                id: "image",
        
                displayName: "Image",
                icon: "Tauten/Image",
            },
            
            {
                id: "checkbox",
                
                displayName: "Checkbox",
                icon: "Tauten/Ticked Checkbox",
            },
            
            {
                id: "radio",
                
                displayName: "Radio button",
                icon: "Tauten/Radio button",
            },
            
            {
                id: "iframe",
        
                displayName: "Webview",
                icon: "Tauten/Webview",
            },
        ]
    },
]

viewsList.forEach(group => {

    group.views.forEach(view => {
        viewsListElement.append($createElement(`
        <div id="${view.id}">
            <img class="icon" src="/res/img/${view.icon}.svg">
            <span>${view.displayName}</span>
        </div>
        `))
    })

})