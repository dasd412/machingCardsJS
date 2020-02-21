const row=4,col=3;

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


    settingCard(col,row);

