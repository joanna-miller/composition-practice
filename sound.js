//Problem #2:
// Compose a function called sound(). You should be able to add the following functionality to the objects listed:
// > faucet.sound()
// "Drip drip drip."
// > oldCar.sound()
// "Grumble grumble"
// > sleepyBear.sound()
// "Grrr...yawn"

const makesSound = function(sound){
  const obj = {
    sound: function(){
      return `${sound}`;
    }
  }
  return obj;
}

const faucet = makesSound("Drip drip drip.");
console.log(faucet.sound())