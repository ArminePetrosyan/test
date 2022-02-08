// library part

let element = {
    switches: document.getElementsByClassName( 'switch' ),
    style: localStorage.getItem( 'style' ),
    
}
let events = {
    switchh :function switchh ()
            {
                for ( let i of element.switches )
                {
                    i.addEventListener('click', function () {
                    let theme = this.dataset.theme;
                    events.setTheme(theme);
                    })
                }
            },
    setTheme : function setTheme ( theme )
            {
                if ( theme == 'dark' )
                {
                    document.getElementById( 'switcher-id' ).href = './css/dark.css';
                } else if ( theme == 'christmas' )
                {
                    document.getElementById( 'switcher-id' ).href = './css/christmas.css';
                } 
                localStorage.setItem( 'style', theme );
            }
}

// library ends



if (element.style == null) {
  events.setTheme('dark');
} else {
  events.setTheme(element.style);
}
events.switchh()
