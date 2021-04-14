//Problem #3:
// Compose a function called throw(). The throw() function should determine the distance and speed a battle robot can throw a spear. This function should be unary, so you will need to use currying.
// Next, add the throw() function to multiple battle robots. A result might look something like this:
// > battleRobot1.throw();
// "The battle robot throws the spear 100 yards at 200 miles per hour!"

function throwIt (name){
  return function (distance){
    return function (speed) {
      return `${name} throws the spear ${distance} yards at ${speed} miles per hour!`;
    }
  }
}

const battleRobot1 = throwIt("Jimmy")(500)(400);
console.log(battleRobot1);


// > "Jimmy throws the spear 500 yards at 400 miles per hour!"


// function throwIt (name, distance, speed){
//       const obj = {
//         canThrow: function (){
//             return `${name} throws the spear ${distance} yards at ${speed} miles per hour!`;
//         }
//       }
//       return obj;
// }

//const battleRobot1 = throwIt("Jimmy", 500, 400)