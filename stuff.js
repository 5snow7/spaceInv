
function more(){//runs when mouse is clicked..manyP is an array of par
for(let j=0;j<10;j++){
invaders.push(new Invader(900*Math.random(),400*Math.random(),-4+8*Math.random(),-4+8*Math.random()));
 }}//end of function

function allIt(item){
	item.move();item.chbd();item.display();
}

function remIt(item){
	document.getElementById("bod1").removeChild(item.p);
}

function rem(item){
	if(item.chbd()){remIt(item);bullits.shift();
	}
}

function startInt(){
	gameStart=setInterval(start,10);
}

function stopInt(){
	clearInterval(gameStart);
}