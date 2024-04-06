const head=document.querySelector('.heading')
    ;
    head.textContent=head.textContent.toUpperCase();

      const score =   JSON.parse(localStorage.getItem('score')) ||
            {Wins:0, Loss:0,Ties:0
        };
        
        updateScoreElement();


        
       
    
        function playerGame(playerMove){
   
     const computerMove = pickRandomMove();
     let result = '';
     if(playerMove==='scissor')
     {
           if(computerMove==='rock'){
             result=('You Lose.')
           }
           else if(computerMove=== 'paper'){
             result=('You Win.');
           }
           else if(computerMove==='scissor'){
             result=('Tie.')
           }
 
          }
 
 else if(playerMove==='rock')
 {
     
     if(computerMove==='rock'){
       result=('Tie.')
     }
     else if(computerMove=== 'paper'){
       result=('You Lose.');
     }
     else if(computerMove==='scissor'){
       result=('You Win.')
     }
     
  
 }
   


 else if (playerMove==='paper') 
 {
     
     if(computerMove==='rock'){
       result=('You Win.')
     }
     else if(computerMove=== 'paper'){
       result=('Tie.');
     }
     else if(computerMove==='scissor'){
       result=('You Lose.')
     }
   }


     if(result==='You Win.'){
   score.Wins +=1;
   }
   else if(result==='You Lose.'){
     score.Loss+=1;
   }
   else if(result==='Tie.'){
     score.Ties +=1;
   }
   localStorage.setItem('score',JSON.stringify(score));

   updateScoreElement();


   document.querySelector('.js-result')
      .innerHTML=result;

   document.querySelector('.js-moves')
      .innerHTML=` You picked  <img src="rpc-img/${playerMove}-emoji.png" alt="" class="move-icon">   - computer picked <img src="rpc-img/${computerMove}-emoji.png" alt="" class="move-icon">`;
    
 

     
 
 
}

 
 
 function pickRandomMove(){
   const randomNumber = Math.random();
   let computerMove = '';
     if(randomNumber>=0 && randomNumber<1/3){
       computerMove= 'rock';
     }
     else if(randomNumber>=1/3 && randomNumber<2/3){
       computerMove = 'paper';
     }
     else if (randomNumber>=2/3 && randomNumber<1){
       computerMove = 'scissor';
     }
      

     return computerMove;
 }
  

 function updateScoreElement(){
  document.querySelector('.js-score')
        .innerHTML=`Wins: ${score.Wins} , Losses: ${score.Loss} , Ties: ${score.Ties} `;
 }
    
