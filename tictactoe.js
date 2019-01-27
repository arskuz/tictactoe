const BUT_NUM = 9

let symbol = [];

let gameover = false

function massive_reload(){
for (let j = 0; j <= BUT_NUM; j++){
   {symbol[j] = "?"}
   }
 }

var div = document.createElement('div')
document.body.appendChild(div)

massive_reload()

function reset_screen(){
  div.innerHTML = " ";
  for (let x = 0; x < BUT_NUM; x++){
       div.innerHTML+= "<button id='"+x+"' onclick='butclick(this)'>"+symbol[x]+"</button>"
       if( (x+1)%3==0 )
       {div.innerHTML+="<br>"}
     }
   }

reset_screen()

function butclick(element){

if(gameover){
  alert(gameover)
  return}

if (freecell(element.id) == false) {
  alert("This cell is already occupied!")
  return
}

if(scanline("X")==element.id)
  {gameover = "Game over! You've won against artifical mastermind!"
  alert(gameover)
  symbol[ element.id ] = "X"
  reset_screen()
  return
}

symbol[ element.id ] = "X"
mastermind()
check_draw()
reset_screen()
}

function freecell(cell_n){
  if(symbol[cell_n]=="?")
    {return true}
  else{
    return false
  }
}

function check_draw(){

  if(gameover){return}

  let drw = true

  for (let i = 0; i <= BUT_NUM; i++){
    if(symbol[i]=="?")
      {drw = false}
    }

  if(drw){
    gameover = "Game over! Draw!"
    alert(gameover)
    reset_screen()
    return
  }
}

function mastermind(){

  if(freecell(4)){
    symbol[4]="0"
    return}
  else if(scanline("0")>-1)
    {symbol[scanline("0")]="0"
    gameover = "Game over! You've lost to artifical mastermind!"
    alert(gameover)
    return}
  else if(scanline("X")>-1)
    {symbol[scanline("X")]="0"
    return}
  else {
    for (let k = 0; k <= BUT_NUM; k++){
      if(symbol[k]=="?")
        {symbol[k] = "0"
        return}
       }
     }
  }

function end_game(msg){
  gameover = msg
  reset_screen()
}
// | 036 147 258
// - 012 345 678
function scanline(toscan){

//horisontal
if(freecell(0) && symbol[1]==toscan && symbol[2]==toscan)
  {return 0}
else if(freecell(1) && symbol[0]==toscan && symbol[2]==toscan)
  {return 1}
else if(freecell(2) && symbol[1]==toscan && symbol[0]==toscan)
  {return 2}

else if(freecell(3) && symbol[4]==toscan && symbol[5]==toscan)
  {return 3}
else if(freecell(4) && symbol[5]==toscan && symbol[3]==toscan)
  {return 4}
else if(freecell(5) && symbol[3]==toscan && symbol[4]==toscan)
  {return 5}


else if(freecell(6) && symbol[7]==toscan && symbol[8]==toscan)
  {return 6}
else if(freecell(7) && symbol[6]==toscan && symbol[8]==toscan)
  {return 7}
else if(freecell(8) && symbol[6]==toscan && symbol[7]==toscan)
  {return 8}

//vertical

else if(freecell(0) && symbol[3]==toscan && symbol[6]==toscan)
  {return 0}
else if(freecell(3) && symbol[0]==toscan && symbol[6]==toscan)
  {return 3}
else if(freecell(6) && symbol[0]==toscan && symbol[3]==toscan)
  {return 6}


else if(freecell(1) && symbol[4]==toscan && symbol[7]==toscan)
  {return 1}
else if(freecell(4) && symbol[1]==toscan && symbol[7]==toscan)
  {return 4}
else if(freecell(7) && symbol[1]==toscan && symbol[4]==toscan)
  {return 7}

else if(freecell(2) && symbol[5]==toscan && symbol[8]==toscan)
  {return 2}
else if(freecell(5) && symbol[2]==toscan && symbol[8]==toscan)
  {return 5}
else if(freecell(8) && symbol[2]==toscan && symbol[5]==toscan)
  {return 8}

//diagonal

else if(freecell(0) && symbol[4]==toscan && symbol[8]==toscan)
  {return 0}
else if(freecell(4) && symbol[0]==toscan && symbol[8]==toscan)
  {return 4}
else if(freecell(8) && symbol[0]==toscan && symbol[4]==toscan)
  {return 8}

  else if(freecell(2) && symbol[4]==toscan && symbol[6]==toscan)
    {return 2}
  else if(freecell(4) && symbol[2]==toscan && symbol[6]==toscan)
    {return 4}
  else if(freecell(6) && symbol[2]==toscan && symbol[4]==toscan)
    {return 6}

else {return -1}

}
