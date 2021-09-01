const heroArray = [
    {
        name:"Shadow Fiend",

    }
];

const shuffleButton = document.querySelector('button');
shuffleButton.addEventListener('click',event=>{
    event.preventDefault();
    shuffleCard();
})

function shuffleCards(){
    const card = document.createElement('form');
    card
}