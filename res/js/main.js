const up = document.getElementById("up");
const down = document.getElementById("down");
const left = document.getElementById("left");
const right = document.getElementById("right");
const player = document.getElementById("player");


var topNum = 0;
leftNum= 750;
leftNuma = 100;

right.onclick = () => {
    
    leftNum +=25;
    document.getElementById("player").style.left = leftNum + "px";
   
};
left.onclick = () => {
    
    leftNum -=25;
    document.getElementById("player").style.left = leftNum + "px";
   
};
up.onclick = () => {
    
    leftNuma -=25;
    document.getElementById("player").style.top = leftNuma + "px";
   
};
down.onclick = () => {
    
    leftNuma +=25;
    document.getElementById("player").style.top = leftNuma + "px";
   
};
const randomnumber = (minimum, maximum) => {
    const myNum = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    return myNum;
}
player.onclick = () => {
    changeColor();
    clearInterval(changeInterval);

    
}
setInterval(() => {
 changeColor();
}, 3000);

const changeColor = () => {
    const r = randomnumber(0, 255);
    const g = randomnumber(0, 255);
    const b = randomnumber(0, 255);
    player.style.background = `rgb(${r}, ${g}, ${b})`;
    console.log(`rgb(${r}, ${g}, ${b})`);
}
