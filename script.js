var button = document.querySelector('#b');
var squares = document.querySelectorAll('td');
var pmsg = document.querySelector('#msg1');
var boxes = [null,null,null,null,null,null,null,null,null];

function clear(){
    
    for (var i =0; i<squares.length; i++){
        squares[i].innerHTML = '';
    }
    for(var i = 0; i<boxes.length;i++){
        boxes[i] = null;
    }
    pmsg.innerHTML="Let's see who will win!!";
    button.innerHTML = "RESTART";
}
button.addEventListener('click',clear);
button.addEventListener('click',gameon);

function playerwon(){
    // player 2 with O
    var msg = "Let's see who will win!!";
    if(boxes[0]=='O'){
        if(boxes[1]=='O' && boxes[2]=='O'){
            msg = 'Player 2 won by joining upper row';        
        }else if(boxes[3]=='O' && boxes[6]=='O'){
            msg = 'Player 2 won by joining left column';    
        }else if(boxes[4]=='O' && boxes[8]=='O'){
            msg = 'Player 2 won by joining diagonal';  
        }
    }
    if(boxes[8]=='O'){
        if(boxes[5]=='O' && boxes[2]=='O'){
            msg = 'Player 2 won by joining right column';
        }else if(boxes[7]=='O' && boxes[6]=='O'){
            msg = 'player 2 won by joining bottom row';
        }
    }
    if(boxes[2]=='O' && boxes[4]=='O' && boxes[6]=='O'){
        msg = 'player 2 won by joining diagonal';
    }
    if(boxes[4]=='O'){
        if(boxes[1]=='O' && boxes[7]=='O'){
            msg = 'player 2 won by joining middle column';
        }else if(boxes[3]=='O' && boxes[5]=='O'){
            msg = 'player 2 won by joining middle row';
        }
    }
    // player 1 with x
    if(boxes[0]=='X'){
        if(boxes[1]=='X' && boxes[2]=='X'){
            msg = 'player 1 won by joining upper row';          
        }else if(boxes[3]=='X' && boxes[6]=='X'){
            msg = 'player 1 won by joining left column';            
        }else if(boxes[4]=='X' && boxes[8]=='X'){
            msg = 'player 1 won by joining diagonal';            
        }
    }
    if(boxes[8]=='X'){
        if(boxes[5]=='X' && boxes[2]=='X'){
            msg = 'player 1 won by joining right column';            
        }else if(boxes[7]=='X' && boxes[6]=='X'){
            msg = 'player 1 won by joining bottom row';            
        }
    }
    if(boxes[2]=='X' && boxes[4]=='X' && boxes[6]=='X'){
        msg = 'player 1 won by joining diagonal';        
    }
    if(boxes[4]=='X'){
        if(boxes[1]=='X' && boxes[7]=='X'){
            msg = 'player 1 won by joining middle column';            
        }else if(boxes[3]=='X' && boxes[5]=='X'){
            msg = 'player 1 won by joining middle row';            
        }
    }
    
    pmsg.innerHTML = msg;
    return true;
}

function isGameTied(){
    count=0;
    for (let i = 0; i < boxes.length; i++) {
        if(boxes[i]!=null){
            count++;
        }    
    }
    if(count==9 && pmsg.innerHTML==="Let's see who will win!!"){
        pmsg.innerHTML = "Game Tied";
    }
}

function gameon(){
player1 = true;
player2 = false;
var one = document.getElementById(0);
one.addEventListener('click', function(){
    if(this.textContent===''){
        if(player1===true){
            this.textContent='X';
            player1=false;
            player2=true;
            boxes[0]='X';
        }else{
            this.textContent='O';
            player2=false;
            player1=true;
            boxes[0]='O';
        }
    }
    playerwon();
    isGameTied();
})
var two = document.getElementById(1);
two.addEventListener('click', function(){
    if(this.textContent===''){
        if(player1===true){
            this.textContent='X';
            player1=false;
            player2=true;
            boxes[1]='X';
        }else{
            this.textContent='O';
            player2=false;
            player1=true;
            boxes[1]='O';
        }
    }
    playerwon();
    isGameTied();
})
var three = document.getElementById(2);
three.addEventListener('click', function(){
    if(this.textContent===''){
        if(player1===true){
            this.textContent='X';
            player1=false;
            player2=true;
            boxes[2]='X';
        }else{
            this.textContent='O';
            player2=false;
            player1=true;
            boxes[2]='O';
        }
    }
    playerwon();
    isGameTied();
})
var four = document.getElementById(3);
four.addEventListener('click', function(){
    if(this.textContent===''){
        if(player1===true){
            this.textContent='X';
            player1=false;
            player2=true;
            boxes[3]='X';
        }else{
            this.textContent='O';
            player2=false;
            player1=true;
            boxes[3]='O';
        }
    }
    playerwon();
    isGameTied();
})
var five = document.getElementById(4);
five.addEventListener('click', function(){
    if(this.textContent===''){
        if(player1===true){
            this.textContent='X';
            player1=false;
            player2=true;
            boxes[4]='X';
        }else{
            this.textContent='O';
            player2=false;
            player1=true;
            boxes[4]='O';
        }
    }
    playerwon();
    isGameTied();
})
var six = document.getElementById(5);
six.addEventListener('click', function(){
    if(this.textContent===''){
        if(player1===true){
            this.textContent='X';
            player1=false;
            player2=true;
            boxes[5]='X';
        }else{
            this.textContent='O';
            player2=false;
            player1=true;
            boxes[5]='O';
        }
    }
    playerwon();
    isGameTied();
})
var seven = document.getElementById(6);
seven.addEventListener('click', function(){
    if(this.textContent===''){
        if(player1===true){
            this.textContent='X';
            player1=false;
            player2=true;
            boxes[6]='X';
        }else{
            this.textContent='O';
            player2=false;
            player1=true;
            boxes[6]='O';
        }
    }
    playerwon();
    isGameTied();
})
var eight = document.getElementById(7);
eight.addEventListener('click', function(){
    if(this.textContent===''){
        if(player1===true){
            this.textContent='X';
            player1=false;
            player2=true;
            boxes[7]='X';
        }else{
            this.textContent='O';
            player2=false;
            player1=true;
            boxes[7]='O';
        }
    }
    playerwon();
    isGameTied();
})
var nine = document.getElementById(8);
nine.addEventListener('click', function(){
    if(this.textContent===''){
        if(player1===true){
            this.textContent='X';
            player1=false;
            player2=true;
            boxes[8]='X';
        }else{
            this.textContent='O';
            player2=false;
            player1=true;
            boxes[8]='O';
        }
    }

    playerwon();
    isGameTied();
})

}

function getRandomColor() {
    var codes = ['#FF355E','#FD5B78','#FF6037','#FF9966','#FF9933','#FFCC33','#FFFF66','#FFFF66','#CCFF00','#66FF66','#AAF0D1','#50BFE6','#FF6EFF','#EE34D2','#FF00CC','#FF00CC'];
    var color ='';
    for(var i =0; i<codes.length; i++){
        color = codes[Math.floor(Math.random()*16)];
    }
    return color;
  }
var r = document.querySelector(':root');
function changeColor(){
    inputColor = getRandomColor();
    r.style.setProperty('--clr-neon', inputColor);
}


setInterval("changeColor()",600);

