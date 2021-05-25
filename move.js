
class Bullit{
   constructor(x,y,yv,str){
   this.x=x;this.y=y;this.yv=yv;
   let par=document.getElementById("par1");
   this.p=par.cloneNode(true);
   document.getElementById("bod1").appendChild(this.p);
   
   this.p.innerHTML=str;
   }	   	   
	
   move(){
	this.y=this.y-this.yv; 
	}
   
   chbd(){
  if(this.y<20){return true;}
	      }
   
   display(){
   this.p.style.left=this.x+"px";
   this.p.style.top=this.y+"px";
   }
}//end of class

class Invader{
	constructor(x,y,xv,yv){
   this.x=x;this.y=y;this.xv=xv;this.yv=yv;
   let pic=document.getElementById("pic1");
   this.p=pic.cloneNode(true);
   document.getElementById("bod1").appendChild(this.p);
   
   }	   	   
	
   move(){this.x=this.x+this.xv;
	this.y=this.y+this.yv; 
}
  chbd(){
	   if(this.x<0||1000<this.x){this.xv=-1*this.xv;}
	   if(this.y<0||500<this.y){this.yv=-1*this.yv;}
   }
   
   display(){
   this.p.style.left=this.x+"px";
   this.p.style.top=this.y+"px";
   }

}//end of classs

class SpaceShip{
	
constructor(x,y,inc){this.x=x;this.y=y;this.inc=inc;
this.ship=document.getElementById("pic2");}

moveL(){this.x=this.x-this.inc;}
moveR(){this.x=this.x+this.inc;}

display(){
	this.ship.style.left=this.x+"px";
   this.ship.style.top=this.y+"px";
	}	
	
}

