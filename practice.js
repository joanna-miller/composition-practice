// Composition Practice

//problem #1: Compose a function called paint() and then add it to three different painters. Each painter can only paint with one color.

const canPaint = function(color) {
  const obj = {
    paints: function(){
      return `Paints ${color}!`
    }
  }
  return obj;
}

const painter1 = canPaint("green");
const painter2 = canPaint("yellow");
const painter3 = canPaint("red");
console.log(painter1.paints())
  // > "Paints green!"


//problem #3: Compose a function called throw(). The throw() function should determine the distance and speed a battle robot can throw a spear.

const canThrow = function(robot) {
  return function(distance) {
    return function(speed) {
      const obj = {
        throw: function() {
          return `The ${robot} throws the spear ${distance} yards at ${speed} miles per hour!`
        }
      }
      return obj;
    }
  }
}

const battleRobot1 = canThrow("battle robot")("100")("200")
console.log(battleRobot1.throw())
  // > "The battle robot throws the spear 100 yards at 200 miles per hour!"

const itThrows = (distance) => {
  return (speed) => {
    const obj = {
      throw: function(){
      return `The battle robot throws the spear ${distance} yards at ${speed} miles per hour!`
      }
    }
    return obj;
  }
}
  
  const battleRobot4 = itThrows(200)(100);
  console.log(battleRobot4.throw())
  const battleRobot5 = itThrows(400)(500)
  console.log(battleRobot5.throw())
  

//problem #4: Use closures to create three dance moves.
const canDance = function() {
  const obj = {
    samba: function() {
      return "The dancer sambas!"
    },
    tango: function() {
      return "The dancer tangos!"
    },
    waltz: function() {
      return "The dancer waltzes!"
    }
  }
  return obj;
}

const dancer = canDance()
console.log(dancer.samba())
// > "The dancer sambas!"

