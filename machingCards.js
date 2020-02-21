const row=4,col=3;

const candidateColors=['red','red','pink','pink','green','green','white','white','orange','orange','yellow','yellow'];
let colors=[];

function randomColorSuffle(){

    for(let i=0;candidateColors.length>0;i++){
        colors=colors.concat(candidateColors.splice(Math.floor(Math.random()*candidateColors.length),1));
    }
}

function settingCard(col,row){
    for(let i=0;i<col*row;i++){
    const card=document.createElement('div');
    card.className='card';
    const cardInner=document.createElement('div');
    cardInner.className='card-inner';

    const cardFront=document.createElement('div');
    cardFront.className='card-front';
    const cardBack=document.createElement('div');
    cardBack.className='card-back';
    cardBack.style.backgroundColor=colors[i];

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);

    (function(c){
    card.addEventListener('click',function(){
      c.classList.toggle('flipped');
    });
    })(card);//for solving closure problem

    document.querySelector("#wrapper").appendChild(card);

    }//for
}

function initialShowing(){
    document.querySelectorAll('.card').forEach(function(card,index){

        setTimeout(function(){

            card.classList.add('flipped');

        },1000+100*index);
    });

    setTimeout(function(){
        document.querySelectorAll('.card').forEach(function(card,index){

            card.classList.remove('flipped');
        });
    },5000);
}

function init(){
    randomColorSuffle();
    settingCard(col,row);
    initialShowing();
}

init();
   

