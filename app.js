let seeds = 24;
let play1 = seeds;
let play2 = seeds;
const startSeeds= document.getElementsByClassName('seed') 
let allPits = document.getElementsByClassName('hole')
let totalSeeds = 0
// let dataset_seeds = startSeeds
// let singlePit = document.getElementsByClassName(`${hole[i]}`)


//adds event listener to all pit and seeds
//for loop to target allpits
for(let i = 0; i < allPits.length; i++){ 
   /// event listener to hear pits clicked
    allPits[i].addEventListener('click', () => {
        ///  targeting pits indivually but also the seeds amount within
        let currentSeeds = allPits[i].dataset.seed
        // hitting and changing hardcode html-- 4-4=0 
        allPits[i].innerHTML =  allPits[i].dataset.seed - currentSeeds
         
        console.log('clicked:', allPits[i])
        console.log(allPits[i+1])
        ///interating thru the following pits to add a seed
            allPits[i+1].dataset.seed++
        console.log('add', allPits[i+1].dataset.seed)
        //changing the hardcoded 4 to +1 to add to the next pits seed count
        allPits[i+1].innerHTML = allPits[i+1].dataset.seed
        //for loop to finish out the previous code 
        for(let k = 0; k < currentSeeds; k++){
            console.log('currentseeds', currentSeeds)
            //delivers the +1 seed to next pit
            currentSeeds[k] = allPits[i+k]
        }
    })
}








// function storingSeeds(){}
// function determiningWhenRowEmpty(){}
// let emptyRow = allPits.forEach( () => {
    
// });
// function countingSeedsWinner (){}


           
      
    