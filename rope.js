class Rope{
constructor(body1,body2,offsetX,offsetY)
{
    this.offsetX = offsetX
    this.offsetY = offsetY
}
    var options={
        
        bodyA:body1,
        bodyB:body2,
        pointB:{X:this.offsetX,Y:this.offsetY}


    }
    //console.log(option);
    this.rope=Constraint.create(options)



    


