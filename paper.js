class Paper{


constructor(x,y,r)
{
    var options={
        isStatic:true,			
    restitution:0.3,
    friction:10,
    density:1.2
    }

    this.r=r;
    this.image=loadImage("paper.png");
    
    this.body=Bodies.Circle(x, y, w, r , options);
     World.add(world, this.body);

}
display()
{
    var paperpos=this.body.position;

    Push()

translate(paperpos.x,paperpos.y);
rectMode(CENTRE)
fill(255)
imageMode(CENTRE);
image(this.image,0,0,2*this.r,2*this.r)

pop()
}

}

