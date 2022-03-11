
const btn1 = document.querySelector('.game')
const startSeeds= document.getElementsByClassName('seed') 
let allPits = document.getElementsByClassName('hole')
let totalSeeds = 0
let player1 = document.getElementById('player-one');
let player2 = document.getElementById('player-two');


//for loop to target allpits //adds event listener to all pit and seeds
for(let i = 0; i < allPits.length; i++){ 
    /// event listener to hear pits clicked
    allPits[i].addEventListener('click', () => {
        ///  targeting pits indivually but also the seeds amount within
        let currentSeeds = parseInt(allPits[i].dataset.seed)
        // hitting and changing hardcode html-- 4-4=0 
        allPits[i].innerHTML = 0
        allPits[i].dataset.seed = 0
        ///interating thru the following pits to add a seed
         if (i > 11){
                i=0
         } 

        let counter = currentSeeds
        while(currentSeeds){

          let counter = currentSeeds
       while(currentSeeds){

         for(let k = 1; k < counter; k++){
         if((i + k) > 11){
                i = 0
                k = 0
         }
         let nextSeed = parseInt(allPits[i+k].dataset.seed)
            allPits[i+k].dataset.seed = nextSeed + 1
            //changing the hardcoded 4 to +1 to add to the next pits seed count
<<<<<<< HEAD
        allPits[i+k].innerHTML = allPits[i+k].dataset.seed     
         }
        currentSeeds--
        }      
=======
        allPits[i+k].innerHTML = allPits[i+k].dataset.seed   
          
        }
        currentSeeds--
    }      
>>>>>>> bac913005c90db005a4a3de3c46d606b2ff0da5a
           
    })  

}          
            
           
           










// function storingSeeds(){} future prospects

    

// function countingSeedsWinner (){}future prospects


//button to restart and clear board My second Event listener
    btn1.addEventListener('click', ()=>{
             if (btn1.innerText ==='Press To Clear Board'){
            btn1.innerText= 'Restarting';
            }if (btn1.innerText ==='Restarting'){
                window.location.reload();
             } 
    });
