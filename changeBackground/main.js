function changeColor(){
    let color = document.getElementsByTagName('input')[0].value
    color=color.split(' ').join('')
    console.log(color)
    document.body.style.backgroundColor=color;
    document.getElementsByTagName('input')[0].style.color=color;
}

document.getElementsByTagName('button')[0].onclick=changeColor;