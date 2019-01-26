const BUT_NUM = 9

let x_num = []
let o_num = []

let symbol = [];

function massive_reload(){
for (let j = 0; j <= BUT_NUM; j++){
  if(x_num.indexOf(j)!=-1)
    {symbol[j] = "X"}
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
x_num+=element.id
reset_screen()
}
