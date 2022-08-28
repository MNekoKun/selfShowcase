const element=document.getElementById('result')
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    element.innerHTML='enabled'
    element.style.color='green'
} else {
    element.innerHTML='disabled'
    element.style.color='red'
}