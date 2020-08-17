// https://codepen.io/ELDONJUAN/pen/NWNxEbK?editors=1111


const full_names = [
    "Westly Snipes",
    "Nicholas Cage",
    "Nasir Jones",
    "Sean Carter",
    "Sean Combs",
    "Michael Jordan",
    "Patrick Ewing"
  ];
  
  const firstName = [];
  
  const lastName = [];
  
  for (let i = 0; i <= 6; i += 1) {
    const tempArray = full_names[i].split(" ");
    const firstNombres = tempArray[0];
    const lastNombres = tempArray[1];
  
    firstName.push(firstNombres);
    lastName.push(lastNombres);
  }
  
  console.log(firstName);
  
  console.log(lastName);
  
  