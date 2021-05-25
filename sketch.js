

function start(){

clear_Can();
t1.c.lineWidth=1;t1.c.font="20px Ariel";
t1.c.strokeStyle="blue";
t1.c.fillText("size of bullit array is "+bullits.length,30,20);
t1.c.fillText("size of S_ship array is "+invaders.length,30,40);

bullits.forEach(allIt);//moving bullits
invaders.forEach(allIt);//moving ships
bullits.forEach(rem);

if(invaders.length>50){catchShip=invaders.splice(0,45);catchShip.forEach(remIt);}

}//end of start

function moveShip(){
keyShip=event.key;
if(keyShip=='ArrowLeft'){ship1.moveL();ship1.display();}
if(keyShip=='ArrowRight'){ship1.moveR();ship1.display();}
if(keyShip=='ArrowUp'){bullits.push(new Bullit(ship1.x+20,ship1.y,3,str+total));total++;}	
if(keyShip=='ArrowDown'){more();}//adding ships	
}

function clear_Can(){
	 let canA=document.getElementById("can1");
	 let w=canA.width;
	 canA.width=w;//clears the screen.
 }
