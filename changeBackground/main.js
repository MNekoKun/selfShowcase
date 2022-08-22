function changeColor(){
    let colors = ['#712B75', '#C74B50', '#D49B54', '#346751', '#292929'];
    let color = Math.floor(Math.random()*colors.length);
    
    while (color===last){
        color = Math.floor(Math.random()*colors.length);
    }

    document.body.style.backgroundColor=colors[color];
    last=color;
}

let last = '#292929';
document.getElementsByTagName('button')[0].onclick=changeColor;