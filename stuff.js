
function more(){//runs when mouse/ArrowDown is clicked adds 10 spaceships
for(let j=0;j<5;j++){
invaders.push(new Invader(900*Math.random(),400*Math.random(),-4+8*Math.random(),-4+8*Math.random()));
 }}//end of function

function allIt(item){
	item.move();item.chbd();item.display();
}

function remIt(item){
	document.getElementById("bod1").removeChild(item.p);
}

function remBullit(item){
	if(item.chbd()){remIt(item);bullits.shift();
	}
}

function startInt(){
	gameStart=setInterval(start,10);
}

function stopInt(){
	clearInterval(gameStart);
}