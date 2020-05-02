class Chain{
    constructor(bodyA,bodyB){
        var option={
bodyA:bodyA,
bodyB:bodyB,
length:10,
stiffness:0.5
        }
this.chain=Matter.Constraint.create(option)
World.add(world,this.chain)

        
    }
    display(){
        var A=this.chain.bodyA.position
        var B=this.chain.bodyB.position
        line(A.x,A.y,B.x,B.y)
    }
}