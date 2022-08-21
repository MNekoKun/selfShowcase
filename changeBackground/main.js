function changeColor(){
    let colors = ['tan', 'brown', 'darkolivegreen', 'plum', 'teal'];
    let color = Math.floor(Math.random()*colors.length);
    
    while (color===last){
        color = Math.floor(Math.random()*colors.length);
    }

    document.body.style.backgroundColor=colors[color];
    last=color;
}

let last = '';
document.getElementsByTagName('button')[0].onclick=changeColor;