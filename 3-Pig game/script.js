'use strict';
// Selecting the elements

const player0 =document.querySelector('.player--0');
const player1 =document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');
const btnNew =document.querySelector(".btn--new");
const btnRoll =document.querySelector(".btn--roll");
const btnHold =document.querySelector(".btn--hold");

const current0El =document.querySelector('#current--0');
const current1El =document.querySelector('#current--1');
let scores,currentScore,activePlayer,playing ;
const init =function()
{
     scores=[0,0];
     currentScore =0;
     activePlayer =0;
     playing =true;

    score0El.textContent =0;
    score1El.textContent =0;
    current0El.textContent=0;
    current1El.textContent=0;

    diceEl.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
};
init();
const switchPlayer =function()
{
        currentScore=0;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        // to switch the player
        activePlayer = activePlayer === 0?1:0;
        //  if it has the class it will remove it and if not it will add it 
        player0.classList.toggle('player--active')
        player1.classList.toggle('player--active')
};

btnRoll.addEventListener('click',function(){
    if(playing)
    {
         const dice = Math.trunc(Math.random()*6)+1;
        diceEl.classList.remove('hidden');
        // to edit the attrubiet
        diceEl.src = `images/dice-${dice}.png`;
        if(dice !== 1)
        {
            currentScore +=dice;
            document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        
        }
        else
        {
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click',function() {
    if(playing)
    {
            // 1. add current score to active player 
    scores[activePlayer] +=currentScore;
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
    // 2. Check if player's score is >= 100 finish the game
    if(scores[activePlayer]>= 100)
    {
        playing=false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    }else{
    // 3. Switch to the next player
    switchPlayer();
    }        
    }

});

btnNew.addEventListener('click',init);