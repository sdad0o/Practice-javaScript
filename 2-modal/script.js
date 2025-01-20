'use strict';
const modal = document.querySelector('.modal');
const overlay =document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// in this way we have 3 classes named show-modal and it will get the first one 
// const btnOpenModal = document.querySelector('.show-modal');
//  to avoid this we use "querySelectorAll"
const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal =function ()
{
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModal =function ()
{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i=0;i<btnOpenModal.length;i++)
    btnOpenModal[i].addEventListener('click',openModal);

btnCloseModal.addEventListener('click',closeModal);  
overlay.addEventListener('click',closeModal); 

// Key pressed events it's global events
document.addEventListener('keydown',(e)=>{
    if (e.key === 'Escape' && !modal.classList.contains('hidden'))
    {
        closeModal();
    }
});

