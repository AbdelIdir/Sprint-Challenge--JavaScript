// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.



  /*

function CuboidMaker(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  
  CuboidMaker.prototype.volume = function() {
    return this.length * this.width * this.height
  }
  
  
  
  const cuboid = new CuboidMaker(5, 7, 9);
  
  console.log(cuboid.volume());

*/

  class CuboidMaker {
      constructor(length,width,height){
          this.length = length;
          this.width = width;
          this.height = height;
          
      }
      volume = function() {
        return this.length * this.width * this.height
      }


  }
  

const cuboid = new CuboidMaker(5, 7, 9);
  
  console.log(cuboid.volume());



  // Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
   constructor(lenght, width, height){
       super (lenght, width, height)
   }
   surface = function(){
       return 6*(this.width ** 2);
   }
}



const cub = new CubeMaker (4, 5, 7);

const square = new CubeMaker ( 9,8,7);

console.log(cub.surface());

console.log(cub.volume());


console.log(square.surface());
















/*
  class CubeMaker extends CuboidMaker{
      constructor(length, width, height) {
        super(length, width, height)
      }
      
      surface = function () {
          return 6*(this.width ** 2)
      }
  }

  const cubsurface = new CubeMaker(8, 3, 3);

  console.log(cubsurface.surface());
  console.log(cubsurface.volume());

  */