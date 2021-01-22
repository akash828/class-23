class Box{
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            friction:0.3
          }
        this.box=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        
        World.add(world,this.box);
    }
    
    display(){
    var pos=this.box.position;

    var angle=this.box.angle;

    push()//it get the new setting
    translate(pos.x,pos.y);
    rotate(angle);
    fill("white")
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop()// back to te old setting

    }

}