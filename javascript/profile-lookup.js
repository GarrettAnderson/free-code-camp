// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  // My Answer
  function lookUpProfile(name, prop) {
    // Only change code below this line
  
  // iterate over the contacts array
  // for each index of the contacts array, 
      //check if the object has the prop property
      // check if the name arg matches the value of the 'firstNAme' key in an object of the array
      // if the above conditions are true, return the value of that property
  
  for(let i = 0; i < contacts.length;i++) {
    // console.log(contacts[i].firstName)
    // console.log(contacts[i].hasOwnProperty(prop))
    if(contacts[i].firstName === name && contacts[i].hasOwnProperty(prop)) {
      console.log(contacts[i].firstName)
      console.log(contacts[i][prop])
    } else if (contacts[i].firstName !== name){
      return "No such contact"
    } else if (!contacts[i].hasOwnProperty(prop)) {
      return "No such property"
    }
  }
    // Only change code above this line
  }
  
  lookUpProfile("Akira", "likes");
  // lookUpProfile("Kristian", "lastName");


  
  //Proper Answer
  function lookUpProfile(name, prop) {
    // Only change code below this line
    for(let i = 0; i < contacts.length;i++) {
      if(contacts[i].firstName === name) {
        if(contacts[i].hasOwnProperty(prop)) {
          return contacts[i][prop]
        } else {
          return "No such property"
        }
      }
    }
    return "No such contact"
    // Only change code above this line
  }
  