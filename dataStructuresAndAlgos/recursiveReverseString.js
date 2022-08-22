const recReverseString = (myString) => {
  let result = "";
  //   let myArray = myString.split();

  if (!myString) {
    //base case
    return "";
  }
  result += myString.charAt(myString.length);
  myString = myString.slice(-1);

  return recReverseString(myString); //different input
};

recReverseString("Jacob");
