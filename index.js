const container =document.querySelector('.container');
const colors =['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const squares=5000;
for(let i=0;i<squares;i++){
    const square=document.createElement('div');
    square.classList.add('square');
    console.log(square);
    container.append(square);
    square.addEventListener('mouseover',function(){
        const color=colors[Math.floor(Math.random()*colors.length)];
        square.style.backgroundColor = color;
        square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    });
    square.addEventListener('mouseout',function(){
        square.style.backgroundColor='#1e1e1e'
        square.style.boxShadow='0 0 2px #000'
    })
    container.append(square)
}