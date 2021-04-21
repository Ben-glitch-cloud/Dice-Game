let player_one = 0   

let player_two = 0

let player_one_state = true 

let player_two_state = false  

let test = document.getElementById('item') 

function stlying_one() {
    document.querySelector('.main_item_one').style.opacity = 1
    document.querySelector('.main_item_two').style.opacity = 0.5 
} 

function stlying_two() {
    document.querySelector('.main_item_one').style.opacity = 0.5
    document.querySelector('.main_item_two').style.opacity = 1
} 

function status_one() {
    player_one_state = false 
    player_two_state = true
} 

function status_two() {
    player_one_state = true
    player_two_state = false
}

stlying_one()

document.getElementById('item').addEventListener('click', function(){  

    let number = Math.floor(Math.random() * 6) + 1;    

    if (number === 1) {
        document.getElementById('dice_item').src = "dice-1.png";
    } else if (number === 2) {
        document.getElementById('dice_item').src = "dice-2.png";
    } else if (number === 3) {
        document.getElementById('dice_item').src = "dice-3.png";
    } else if (number === 4) {
        document.getElementById('dice_item').src = "dice-4.png";
    } else if (number === 5) {
        document.getElementById('dice_item').src = "dice-5.png";
    } else if (number === 6) {
        document.getElementById('dice_item').src = "dice-6.png";
    }

    if (player_one_state === true) {   
        stlying_one() 
        if (number > 1) {
            player_one += number 
            document.querySelector('.score').textContent = player_one 

        } else {
            player_one = 0  
            document.querySelector('.score').textContent = player_one 
            status_one()
            stlying_two() 
        }  
    } else if(player_two_state === true) {  
        stlying_two()
        if (number > 1) {
            player_two += number 
            document.querySelector('.score_two').textContent = player_two 
           
        } else {
            player_two = 0  
            document.querySelector('.score_two').textContent = player_two
            status_two()
            stlying_one() 
        }
    } 

    document.querySelector('.score').textContent = player_one
});   

document.getElementById('item_hold').addEventListener('click', function(){

    if (player_one_state === true) {
        status_one()
        stlying_two()

    } else {
        status_two()
        stlying_one()
    }

});   


document.getElementById('item_reset').addEventListener('click', function(){  
    stlying_one()  
    status_two()
    document.querySelector('.score').textContent = 0
    document.querySelector('.score_two').textContent = 0  
    player_one = 0   
    player_two = 0
    document.getElementById('dice_item').src = "dice-1.png";
}); 