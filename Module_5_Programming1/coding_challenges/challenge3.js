// https://codepen.io/ELDONJUAN/pen/xxVZQPp?editors=1111


function changeSToDollarsign(lyrics) {
    var arr = lyrics.split(" ");
    var newArr = [];
    for (word of arr) {
      newArr.push(word.replace(/s|S/g,"$"));
    }
    console.log(newArr.join(" "));
  }
  var lyrics =
    "Wipe the sweat off my dome, spit the phlegm on the streets Suede Timbs on my feets makes my cipher complete Whether cruising in a Sikh's cab, or Montero Jeep I can't call it, the beats make me falling asleep I keep falling,  but never falling six feet deep I'm out for presidents to represent me, I'm out for presidents to represent me, I'm out for dead presidents to represent me, ";
  
  changeSToDollarsign(lyrics);
  
  