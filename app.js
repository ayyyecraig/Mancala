
const btn1 = document.querySelector('.game')
const startSeeds= document.getElementsByClassName('seed') 
let allPits = document.getElementsByClassName('hole')
let totalSeeds = 0
player1 = document.getElementById('player-one');
player2 = document.getElementById('player-two');
// function init() {
//     board = [4, 4, 4, 4, 4, 4, 0,
//              4, 4, 4, 4, 4, 4, 0];
//     gameOver = false;

    ///start game message here

// } 



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
        // console.log('clicked:', allPits[i])
        // console.log(allPits[i+1])
        ///interating thru the following pits to add a seed
        for(let k = 1; k <= currentSeeds; k++){
            //  if(i >  (allPits.length - 1)){
            //      console.log('the position id greater than the length')
            //      position = allPits[i]}
            let nextSeed = parseInt(allPits[i+k].dataset.seed)
            console.log(nextSeed)
            allPits[i+k].dataset.seed = nextSeed + 1 
           console.log(allPits[i+k].dataset.seed)
        //changing the hardcoded 4 to +1 to add to the next pits seed count
        allPits[i+k].innerHTML = allPits[i+k].dataset.seed
       if (i > 5 ){
           allPits[0]
        //   switch(allPits[i]) {
        //       case(5):
        //       nextSeed + 
          }
       }

               
   })
}          
            
           
           

            
     if (player1 = allPits[i].innerHTML =  parseInt(allPits[i].dataset.seed) - parseInt)
    









// function storingSeeds(){}
// function determiningWhenRowEmpty(){}
// let emptyRow = allPits.forEach( () => {
    

// function countingSeedsWinner (){}


//button to restart and clear board My second Event listener
    btn1.addEventListener('click', ()=>{
 if (btn1.innerText ==='Press To Clear Board'){
            btn1.innerText= 'Restarting';
            }if (btn1.innerText ==='Restarting'){
                window.location.reload();
             } 
 });
