var name = window.prompt("Hello friend! What\'s your name?")
var flag = true

if (name === null || name === undefined) {
  name = 'He Who Shall Not Be Named'
  flag = false
}

while (flag) {
  if (name) {
    name = name.trim()
    window.alert('Hello there ' + name + '! We are going for a walk in the woods whether you like it or not.')
    flag = false
  }
  else if (!!name === false) {
    name = window.prompt("But friend, you forgot to enter your name! What\'s your name?")
  }
}

var ready2go = window.confirm('Are you ready for the adventure, ' + name + '?')
if (ready2go) {
  window.alert('Awesome! I would have forced you to go even if you weren\'t')
}
else {
  window.alert('Too bad, we\'re leaving now anyways.')
}


var place = window.prompt('Do you want to hike through the MOUNTAINS, CITY, or the FOREST?')
if (place === null || place === undefined) {
  place = 'MOUNTAINS'
  flag = true
}
place = place.trim().toUpperCase()
if (place === 'MOUNTAINS' && flag !== true) {
  window.alert('Awesome that\'s always been my favorite. Great views. Very friendly mountain trolls. Let\'s go!')
}
else if (place === 'CITY') {
  window.alert('Really? You like it there? Wow you certainly were looking for the safe adventure, ' + name + '. Let\s go!')
}
else if (place === 'FOREST') {
  window.alert('Excellent! I let the fairies borrow my hairbrush the last time I was there, and they seriously won\'t give things back unless you bug them incessantly, it\'s ridiculous. Let\'s go!')
}
else {
  window.alert('Huh. Well, that\'s alright, you\'re not from around here. I\'ll just take you to my favorite place. Let\'s go to the mountains!')
}

var randomNum = Math.random()
var animal = ''
if (randomNum > 0.5) {
  animal = 'dragon'
}
else {
  animal = 'dog'
}

window.alert('Oh my goodness- STOP, ' + name.toUpperCase() + '!! Is that what I think it is? How lucky! We found a ' + animal + '!')

var numTreats = window.prompt('Clearly, we need it to be our friend. Lucky for you I have some ' + animal + ' treats right here in my pocket for just such occasion. How many treats should I give it, ' + name + '?')

numTreats = numTreats || 5

window.alert(name + ' gives the ' + animal + ' ' + numTreats + ' ' + animal + ' treats. It seems satisfied. You did it! You survived the adventure!')
