var name = window.prompt("Hello friend! What\'s your name?")
var flag = true

while (flag) {
  if (name) {
    name = name.trim()
    window.alert('Hello there ' + name + '! We are going for a walk in the woods whether you like it or not.')
    flag = false
  }
  else if (!!name === false) {
    name = window.prompt("But friend, you forgot to enter your name! What\'s your name?")
  }
  else if (name === null) {
    name = 'He Who Must Not Be Named'
    window.alert('Well okay, be mysterious why don\'t you. I\'ll just call you ' + name)
  }
}

