const BUT_NUM = 9

let x_num = []
let o_num = []

let symbol = [];

function massive_reload(){
for (let j = 0; j <= BUT_NUM; j++){
  if(x_num.indexOf(j)!=-1)
    {symbol[j] = "X"}
  else if(o_num.indexOf(j)!=-1)
      {symbol[j] = "0"}
  else
    {symbol[j] = "?"}
   }
 }

var div = document.createElement('div')
document.body.appendChild(div)

function reset_screen(){
  div.innerHTML = " ";
  massive_reload()
  for (let x = 0; x < BUT_NUM; x++){
       div.innerHTML+= "<button id='"+x+"' onclick='butclick(this)'>"+symbol[x]+"</button>"
       if( (x+1)%3==0 )
       {div.innerHTML+="<br>"}
     }
   }

reset_screen()

function butclick(element){
if (o_num.indexOf(element.id)!=-1 || x_num.indexOf(element.id)!=-1) {
  alert("This cell is already occupied!")
  return
}
x_num+=element.id
alert(element.id)
mastermind()
reset_screen()
}

function freecell(cell_n){
  if(o_num.indexOf(cell_n)==-1 && x_num.indexOf(4)==-1)
    {return true}
  else{
    return false
  }
}

function mastermind(){
  if(o_num.indexOf(4)==-1 && x_num.indexOf(4)==-1 && o_num.indexOf(4)==-1){
    o_num+=4
    return}
  else if(scanline()>-1)
    {o_num+=scanline()
    return}
}
// | 036 147 258
// - 012 345 678
function scanline(){
//horisontal
if(freecell(1)==true && x_num.indexOf(0)!=-1 && x_num.indexOf(2)!=-1)
  {return 1}
else if(freecell(0)==true && x_num.indexOf(1)!=-1 && x_num.indexOf(2)!=-1)
  {return 0}
else if(freecell(0)==true && x_num.indexOf(1)!=-1 && x_num.indexOf(0)!=-1)
  {return 2}

else if(freecell(3)==true && x_num.indexOf(4)!=-1 && x_num.indexOf(5)!=-1)
  {return 3}
else if(freecell(4)==true && x_num.indexOf(3)!=-1 && x_num.indexOf(5)!=-1)
  {return 4}
else if(freecell(5)==true && x_num.indexOf(4)!=-1 && x_num.indexOf(3)!=-1)
  {return 5}

else if(freecell(6)==true && x_num.indexOf(7)!=-1 && x_num.indexOf(8)!=-1)
  {return 6}
else if(freecell(7)==true && x_num.indexOf(6)!=-1 && x_num.indexOf(8)!=-1)
  {return 7}
else if(freecell(8)==true && x_num.indexOf(6)!=-1 && x_num.indexOf(7)!=-1)
  {return 8}
//vertical
else if(freecell(0)==true && x_num.indexOf(3)!=-3 && x_num.indexOf(6)!=-6)
  {return 0}
else if(freecell(3)==true && x_num.indexOf(0)!=-1 && x_num.indexOf(6)!=-1)
  {return 3}
else if(freecell(6)==true && x_num.indexOf(0)!=-1 && x_num.indexOf(3)!=-1)
  {return 6}

  else if(freecell(1)==true && x_num.indexOf(4)!=-3 && x_num.indexOf(7)!=-3)
    {return 1}
  else if(freecell(4)==true && x_num.indexOf(1)!=-1 && x_num.indexOf(7)!=-1)
    {return 4}
  else if(freecell(7)==true && x_num.indexOf(1)!=-1 && x_num.indexOf(4)!=-1)
    {return 7}

  else if(freecell(2)==true && x_num.indexOf(5)!=-3 && x_num.indexOf(8)!=-3)
    {return 2}
  else if(freecell(5)==true && x_num.indexOf(2)!=-1 && x_num.indexOf(8)!=-1)
    {return 5}
  else if(freecell(8)==true && x_num.indexOf(2)!=-1 && x_num.indexOf(5)!=-1)
    {return 8}

else {return -1}

}
