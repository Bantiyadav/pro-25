class Ground
{
	constructor(x,y)
	{
		var options={
			isStatic:true,			
		restitution:0.3,
		friction:0.5,
        density:1.2
		}

		this.body=Bodies.rectangle(x, y, 1200,20 , options);
 		World.add(world, this.body);

	}
	display()
	{

push();

			rectMode(CENTER)
			fill(200,0,255)
			rect(this.ground.position.x,this.ground.position.y,1200,20);
			
		pop();
			
	}

}