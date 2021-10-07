console.log("work")

let themeSave = localStorage.getItem('theme')

if(themeSave == null) {
    setTheme('light')
}else{
    setTheme(themeSave)
}

let theme = document.getElementsByClassName('theme-dot')

for(var i = 0; i < theme.length; i++) {
    theme[i].addEventListener('click',function(){
        let mode = this.dataset.mode;
        console.log('Option clicked: ' , mode);
        setTheme(mode);
})
}

function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href='default.css';
    }
    if(mode == 'blue'){
        document.getElementById('theme-style').href='blue.css';
    }
    if(mode == 'pink'){
        document.getElementById('theme-style').href='pink.css';
    }
    if(mode == 'yellow'){
        document.getElementById('theme-style').href='yellow.css';
    }

    localStorage.setItem('theme', mode)
}