const SQR_SIZE = 2

let symbol = [];
for (let j = 0; j <= SQR_SIZE; j++){
  symbol[j] = [];
  for (let jj = 0; jj <= SQR_SIZE; jj++){
     symbol[j][jj] = "?";
   }}

var div = document.createElement('div')
document.body.appendChild(div)

function reset_screen(){
  div.innerHTML = " ";
  for (let y = 0; y < 3; y++){
    for(let x = 0; x < 3; x++){
       div.innerHTML+= "<button id='"+(x*10+y)+"' onclick='butclick(this)'>"+symbol[x][y]+"</button>"
       if(x==2) {div.innerHTML+="<br>"}
     }
   }
 }

reset_screen()

function butclick(element){
alert(element.id)
let sy = element.id%10
let sx = 0
if(element.id>=10)
  {sx = Math.floor(element.id/10)}
alert(sx+";"+sy)
symbol[sx,sy] = "X"
reset_screen()
}
