function changeColor(){
    let color = document.getElementsByTagName('input')[0].value
    document.body.style.backgroundColor=color;
    document.getElementsByTagName('input')[0].style.color=color;
}

document.getElementsByTagName('button')[0].onclick=changeColor;
