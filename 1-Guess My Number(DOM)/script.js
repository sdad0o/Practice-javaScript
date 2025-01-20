'use strict';
let secretNumber= Math.trunc(Math.random()*20)+1;
let score =20;
let highscore =0;
// Create the function to make the code cleaner and remove the dublicate code 
const displayMessage = function(message)
{
    document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click',()=>{
    // this function called event handeller -- announmes function 
    const guess = Number(document.querySelector('.guess').value);
    if (!guess)
    {
        // document.querySelector('.message').textContent='⛔ No number !';
        displayMessage('⛔ No number !');
    }
    else if(guess === secretNumber)
    {
       displayMessage('🎉 Correct number');
       document.querySelector('.number').textContent =secretNumber;
       document.querySelector('body').style.backgroundColor ='#60b347';
       document.querySelector('.number').style.width='30rem';
       if(score>highscore)
       {
            highscore =score;
            document.querySelector('.highscore').textContent=highscore;
       }

    }
    // Refaactor the code and remove the dublicate in this way 
     else if (guess !== secretNumber)
    {
        if(score>1)
        {
            displayMessage (guess>secretNumber ?'📈 Too high':'📉 Too low');
            score--;
            document.querySelector('.score').textContent =score;
        }
        else
        {
            displayMessage('😑 You lost the game');
            document.querySelector('.score').textContent =0;
            document.querySelector('body').style.backgroundColor ='#ff1919';
            document.querySelector('.number').textContent =secretNumber;
        }
    }
    
});
document.querySelector('.again').addEventListener('click',()=>{
    score =20;
    secretNumber= Math.trunc(Math.random()*20)+1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent =score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor ='#222';
    document.querySelector('.number').style.width='15rem';
    console.log('inside the again',secretNumber);
});
console.log(secretNumber);