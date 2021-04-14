// Problem #4:
// First use closures to create three dance moves. For instance, a dancer should be able to do the following:
// > dancer.samba()
// "The dancer sambas!"
// > dancer.tango()
// "The dancer tangos!"

const canDance = function() {
  const obj = {
    samba: function() {
      return `The dancer sambas!`
      },
    tango: function(){
      return `The dancer tangos!`
    },
    waltz: function(){
      return `The dancer waltzes!`
    }
  }
  return obj
}

const dancer = canDance()
console.log(dancer.samba())
console.log(dancer.tango())
console.log(dancer.waltz())