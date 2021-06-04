

function start(){
clear_Can();
t1.c.lineWidth=1;t1.c.font="20px Ariel";
t1.c.strokeStyle="blue";
t1.c.fillText("size of bullit array is "+bullits.length,30,20);
t1.c.fillText("size of S_ship array is "+invaders.length,30,40);

bullits.forEach(allIt);//moving bullits
invaders.forEach(allIt);//moving ships
bullits.forEach(remBullit);

for(let j=0;j<bullits.length;j=j+1){
	for(let k=0;k<invaders.length;k=k+1){
    let dist=coll(bullits[j],invaders[k]);
     if(dist<24){
		 t1.c.fillText(dist,30,160);
     document.getElementById("bod1").removeChild(invaders[k].p);	 
	 invaders.splice(k,1);
	 
	}}
	}

if(invaders.length>50){catchShip=invaders.splice(0,45);catchShip.forEach(remIt);}

}//end of start

function moveShip(){
keyShip=event.key;
if(keyShip=='ArrowLeft'){ship1.moveL();ship1.display();}
if(keyShip=='ArrowRight'){ship1.moveR();ship1.display();}
if(keyShip=='ArrowUp'){bullits.push(new Bullit(ship1.x+20,ship1.y,3));total++;}	
if(keyShip=='ArrowDown'){more();}//adding ships	
}

function clear_Can(){
	 let canA=document.getElementById("can1");
	 let w=canA.width;
	 canA.width=w;//clears the screen.
 }
 
 function coll(inv,bull){
	 let dist=Math.sqrt((inv.x-(bull.x+10))*(inv.x-(bull.x+10))+(inv.y-bull.y+5)*(inv.y-bull.y+5));
	return dist; 
	 }
 
 
 
 
