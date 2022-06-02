let names = ["Guadalupe", "Ollie", "Aki"]
let birthday = "suprise"

function writeCards(names,birthday){
     let thankYouCards = [];
    for (let i = 0; i < names.length; i++) {
      thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${birthday} gift!`) 
        
    }
    return thankYouCards
}
function countDown(count){
    
    while(count>0){
        console.log(count)
        count --;
    };
    console.log(count);
}