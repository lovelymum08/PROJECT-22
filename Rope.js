class Rope{
   constructor (body1, body2, pointA, pointB){
       this.pointA=pointA
       this.pointB=pointB

    var options={
        bodyA:body1,
        bodyB:body2,
        pointB:{x:this.pointA, y:this.pointB}
    }

   }
   display()
   {
       var pointA:this.rope.bodyA.position;
       var pointB:this.rope.bodyB.position;

       strokeWeight(3);
       line(bob1.position.x,bob1.position.y,10);
       line(bob2.position.x,bob2.position.y,10);
       line(bob3.position.x,bob3.position.y,10);
       line(bob4.position.x,bob4.position.y,10);
       line(bob5.position.x,bob5.position.y,10);
   }
}