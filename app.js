let seeds = 24;
let play1 = seeds;
let play2 = seeds;
const moveSeeds= document.getElementsByClassName('seed') 
let allPits = document.getElementsByClassName('hole')

let start = null;
let board = []

//singles out pit

for(let i = 0; i < allPits.length; i++){
    allPits[i].addEventListener('click', () => {
        console.log('click')
    })
}

// function singlingOutOneSeeds in Pit(){}

for(let i = 0; i < moveSeeds.length; i++){
    moveSeeds[i].addEventListener('click', () => {
        console.log('click')
    })
}






// function moveSeeds(){}
// function storingSeeds(){}
// function determiningWhenRowEmpty(){}
// function countingSeedsWinner (){}

// currentPit.addEventListener('click',startGame)   
//         for (let i = start - 1; i >= limit; i--){
//             row[i].addEventListener('click', ()=>{
//                 if(play1 === true){
//                     console.log(grid[i])
//                     grid[i].innerHtml =
                    
               
           
      
    