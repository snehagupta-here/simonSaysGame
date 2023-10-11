let userseq=[];
let gameseq=[];
let colors = ['pink','blueviolet','greenyellow','aqua'];
let start = false;
let level=0;
let maxscore=0;
document.addEventListener("keypress",function(event)
{
    if(start==false  &&  event.key=='k')
    {
        console.log('game started');
        start=true;
        levelup();
    }
});
let h2 = document.querySelector('h2');
function gameflash(btn)
{
    btn.classList.add('gameflash');
    setTimeout( function (){
        btn.classList.remove('gameflash');
    },200);
}
function userflash(btn)
{
    btn.classList.add('userflash');
    setTimeout( function (){
        btn.classList.remove('userflash');
    },200);
}
function checkans(idx)
{
    let index = level-1;
    // console.log(`curr level: ${level}`);
    if(userseq[idx] == gameseq[idx])
      {
        if(idx==index)
        {    setTimeout(levelup,1000);
        }
      }
    else 
    {  if(maxscore<level)
        {
            maxscore=level;
        }
        h2.innerText = `Game Over! Press key 'k' to start again:Your Score: ${level} Highest Score:${maxscore}`
        let body = document.querySelector('body');
        body.style.backgroundColor = 'red';
        setTimeout(()=>{body.style.backgroundColor='white'},150);
        reset();
    }
}
function btnpress()
{  
    let color = this.getAttribute('id');
    userseq.push(color);
    let idx = userseq.length-1;
    console.log(`userseq: ${userseq}`);
    userflash(this);
    checkans(idx);
}
function levelup()
{
    userseq=[];
level++;
h2.innerText=`level ${level}`;
let randIndx = Math.floor(Math.random()*3);
let randcolor = colors[randIndx];
let color = document.querySelector(`.${randcolor}`);
let col = color.getAttribute('id');
gameseq.push(col);
console.log(`gameseq: ${gameseq}`);
gameflash(color);
}
let btns = document.querySelectorAll('.btn');
for(btn of btns)
{
    btn.addEventListener('click',btnpress);
}
function reset()
{
    level=0;
    gameseq=[];
    start = false;
}
