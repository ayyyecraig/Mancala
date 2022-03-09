
//cache elements
const startSeeds= document.getElementsByClassName('seed') 
let allPits = document.getElementsByClassName('hole')
let totalSeeds = 0

// let dataset_seeds = startSeeds
// let singlePit = document.getElementsByClassName(`${hole[i]}`)

function init() {
    board = [4, 4, 4, 4, 4, 4, 0,
             4, 4, 4, 4, 4, 4, 0];
    gameOver = false;
    player1 = document.getElementById('player-one');
    player2 = document.getElementById('player-two');
    ///start game message here

} 



//adds event listener to all pit and seeds
//for loop to target allpits
for(let i = 0; i < allPits.length; i++){ 
    /// event listener to hear pits clicked
    allPits[i].addEventListener('click', () => {
        ///  targeting pits indivually but also the seeds amount within
        let currentSeeds = parseInt(allPits[i].dataset.seed)
       
        // hitting and changing hardcode html-- 4-4=0 
        console.log(typeof(currentSeeds))
        allPits[i].innerHTML =  parseInt(allPits[i].dataset.seed) - parseInt(currentSeeds)
        console.log('clicked:', allPits[i])
        console.log(allPits[i+1])
        ///interating thru the following pits to add a seed
        for(let j = 1; j <= currentSeeds; j++){
            let nextSeed = parseInt(allPits[i+j].dataset.seed)
            console.log(nextSeed)
            allPits[i+j].dataset.seed = nextSeed + 1
            
           console.log(allPits[i+j].dataset.seed)
        // console.log('add', allPits[i+1].dataset.seed)
            // allPits[i+j].innerHTML = nextSeed
        //changing the hardcoded 4 to +1 to add to the next pits seed count
        allPits[i+j].innerHTML = allPits[i+j].dataset.seed
        //for loop to finish out the previous code 
        // for(let k = 0; k > currentSeeds; k){

            // console.log('currentseeds', currentSeeds)
            //delivers the +1 seed to next pit
            // currentSeeds[k] = allPits[i+k];{
                // if(currentSeeds[k] > 0){
                //     repeat()
                // }

                
            // }
        // }
        }
    })
}








// function storingSeeds(){}
// function determiningWhenRowEmpty(){}
// let emptyRow = allPits.forEach( () => {
    
// });
// function countingSeedsWinner (){}


           
      
    